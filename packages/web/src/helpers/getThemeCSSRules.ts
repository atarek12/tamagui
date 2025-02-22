import { simpleHash } from '@tamagui/helpers'

import { THEME_CLASSNAME_PREFIX } from '../constants/constants'
import { Variable, variableToString } from '../createVariable'
import type { CreateTamaguiProps, ThemeParsed } from '../types'
import { tokensValueToVariable } from './registerCSSVariable'

export function getThemeCSSRules(props: {
  config: CreateTamaguiProps
  themeName: string
  theme: ThemeParsed
  names: string[]
}) {
  const cssRuleSets: string[] = []

  if (
    !process.env.TAMAGUI_DOES_SSR_CSS ||
    process.env.TAMAGUI_DOES_SSR_CSS === 'mutates-themes' ||
    process.env.TAMAGUI_DOES_SSR_CSS === 'false'
  ) {
    const { config, themeName, theme, names } = props

    // special case for SSR
    const hasDarkLight = 'light' in config.themes || 'dark' in config.themes
    const CNP = `.${THEME_CLASSNAME_PREFIX}`
    let vars = ''

    // themeToVariableToValueMap.set(theme, {})
    // const varToValMap = themeToVariableToValueMap.get(theme)
    for (const themeKey in theme) {
      const variable = theme[themeKey] as Variable
      let value: any = null

      if (!tokensValueToVariable.has(variable.val)) {
        value = variable.val
      } else {
        value = tokensValueToVariable.get(variable.val)!.variable
      }
      // Hash themeKey in case it has invalid chars too
      vars += `--${simpleHash(themeKey, 40)}:${value};`
    }

    const isDarkBase = themeName === 'dark'
    const isLightBase = themeName === 'light'
    const baseSelectors = names.map((name) => `${CNP}${name}`)
    const selectorsSet = new Set(baseSelectors)

    // since we dont specify dark/light in classnames we have to do an awkward specificity war
    // use config.maxDarkLightNesting to determine how deep you can nest until it breaks
    if (hasDarkLight) {
      const maxDepth = config.maxDarkLightNesting ?? 3

      for (const subName of names) {
        const isDark = isDarkBase || subName.startsWith('dark_')
        const isLight = !isDark && (isLightBase || subName.startsWith('light_'))

        if (!(isDark || isLight)) {
          // neither light nor dark subtheme, just generate one selector with :root:root which
          // will override all :root light/dark selectors generated below
          selectorsSet.add(`:root:root ${CNP}${subName}`)
          continue
        }

        const childSelector = `${CNP}${subName.replace(/^(dark|light)_/, '')}`
        const order = isDark ? ['dark', 'light'] : ['light', 'dark']
        const [stronger, weaker] = order
        const numSelectors = Math.round(maxDepth * 1.5)

        for (let depth = 0; depth < numSelectors; depth++) {
          const isOdd = depth % 2 === 1

          // wtf is this continue:
          if (isOdd && depth < 3) {
            continue
          }

          const parents = new Array(depth + 1).fill(0).map((_, psi) => {
            return `${CNP}${psi % 2 === 0 ? stronger : weaker}`
          })

          let parentSelectors = parents.length > 1 ? parents.slice(1) : parents

          if (isOdd) {
            const [_first, second, ...rest] = parentSelectors
            parentSelectors = [second, ...rest, second]
          }

          const lastParentSelector = parentSelectors[parentSelectors.length - 1]
          const nextChildSelector =
            childSelector === lastParentSelector ? '' : childSelector

          // for light/dark/light:
          selectorsSet.add(`${parentSelectors.join(' ')} ${nextChildSelector}`.trim())
          selectorsSet.add(
            `${parentSelectors.join(' ')} ${nextChildSelector}.is_inversed`.trim()
          )
        }
      }
    }

    const selectors = [...selectorsSet].sort((a, b) => a.localeCompare(b))

    // only do our :root attach if it's not light/dark - not support sub themes on root saves a lot of effort/size
    // this isBaseTheme logic could probably be done more efficiently above
    const selectorsString = selectors
      .map((x) => {
        const rootSep = isBaseTheme(x) && config.themeClassNameOnRoot ? '' : ' '
        return `:root${rootSep}${x}`
      })
      .join(', ')

    const css = `${selectorsString} {${vars}}`
    cssRuleSets.push(css)

    if (config.shouldAddPrefersColorThemes) {
      const bgString = theme.background
        ? `background:${variableToString(theme.background)};`
        : ''
      const fgString = theme.color ? `color:${variableToString(theme.color)}` : ''

      const bodyRules = `body{${bgString}${fgString}}`
      const isDark = themeName.startsWith('dark')
      const baseName = isDark ? 'dark' : 'light'
      const lessSpecificSelectors = selectors
        .map((x) => {
          if (x == darkSelector || x === lightSelector) return `:root`
          if (
            (isDark && x.startsWith(lightSelector)) ||
            (!isDark && x.startsWith(darkSelector))
          ) {
            return
          }
          return x.replace(/^\.t_(dark|light) /, '').trim()
        })
        .filter(Boolean)
        .join(', ')

      const themeRules = `${lessSpecificSelectors} {${vars}}`
      const prefersMediaSelectors = `@media(prefers-color-scheme:${baseName}){
    ${bodyRules}
    ${themeRules}
  }`
      cssRuleSets.push(prefersMediaSelectors)
    }

    if (config.selectionStyles) {
      const selectionSelectors = baseSelectors.map((s) => `${s} ::selection`).join(', ')
      const rules = config.selectionStyles(theme as any)
      if (rules) {
        const styles = Object.entries(rules)
          .flatMap(([k, v]) =>
            v
              ? `${k === 'backgroundColor' ? 'background' : k}:${variableToString(v)}`
              : []
          )
          .join(';')
        const css = `${selectionSelectors} {${styles}}`
        cssRuleSets.push(css)
      }
    }
  }

  return cssRuleSets
}

const darkSelector = '.t_dark'
const lightSelector = '.t_light'
const isBaseTheme = (x: string) =>
  x === darkSelector ||
  x === lightSelector ||
  x.startsWith('.t_dark ') ||
  x.startsWith('.t_light ')
