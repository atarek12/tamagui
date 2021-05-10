declare module "@snackui/helpers" {
    export function getNiceKey(name: string, len?: number): string;
}

declare module "@snackui/helpers" {
    export const stylePropsTransform: {
        x: boolean;
        y: boolean;
        perspective: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
    };
    export const stylePropsView: Readonly<{
        x: boolean;
        y: boolean;
        perspective: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        pointerEvents: boolean;
        userSelect: boolean;
        cursor: boolean;
        backfaceVisibility: boolean;
        backgroundColor: boolean;
        boxSizing: boolean;
        borderBottomColor: boolean;
        borderBottomEndRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderColor: boolean;
        borderEndColor: boolean;
        borderLeftColor: boolean;
        borderLeftWidth: boolean;
        borderRadius: boolean;
        borderRightColor: boolean;
        borderRightWidth: boolean;
        borderStartColor: boolean;
        borderStyle: boolean;
        borderTopColor: boolean;
        borderTopEndRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        opacity: boolean;
        transform: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        aspectRatio: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flex: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexGrow: boolean;
        flexShrink: boolean;
        flexWrap: boolean;
        height: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        maxHeight: boolean;
        maxWidth: boolean;
        minHeight: boolean;
        minWidth: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        width: boolean;
        zIndex: boolean;
        direction: boolean;
        shadowColor: boolean;
        shadowOffset: boolean;
        shadowOpacity: boolean;
        shadowRadius: boolean;
        contain: boolean;
    }>;
    export const stylePropsTextOnly: Readonly<{
        color: boolean;
        fontFamily: boolean;
        fontSize: boolean;
        fontStyle: boolean;
        fontWeight: boolean;
        letterSpacing: boolean;
        lineHeight: boolean;
        textAlign: boolean;
        textDecorationLine: boolean;
        textDecorationStyle: boolean;
        textDecorationColor: boolean;
        textShadowColor: boolean;
        textShadowOffset: boolean;
        textShadowRadius: boolean;
        textTransform: boolean;
    }>;
    export const stylePropsText: Readonly<{
        color: boolean;
        fontFamily: boolean;
        fontSize: boolean;
        fontStyle: boolean;
        fontWeight: boolean;
        letterSpacing: boolean;
        lineHeight: boolean;
        textAlign: boolean;
        textDecorationLine: boolean;
        textDecorationStyle: boolean;
        textDecorationColor: boolean;
        textShadowColor: boolean;
        textShadowOffset: boolean;
        textShadowRadius: boolean;
        textTransform: boolean;
        x: boolean;
        y: boolean;
        perspective: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        pointerEvents: boolean;
        userSelect: boolean;
        cursor: boolean;
        backfaceVisibility: boolean;
        backgroundColor: boolean;
        boxSizing: boolean;
        borderBottomColor: boolean;
        borderBottomEndRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderColor: boolean;
        borderEndColor: boolean;
        borderLeftColor: boolean;
        borderLeftWidth: boolean;
        borderRadius: boolean;
        borderRightColor: boolean;
        borderRightWidth: boolean;
        borderStartColor: boolean;
        borderStyle: boolean;
        borderTopColor: boolean;
        borderTopEndRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        opacity: boolean;
        transform: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        aspectRatio: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flex: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexGrow: boolean;
        flexShrink: boolean;
        flexWrap: boolean;
        height: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        maxHeight: boolean;
        maxWidth: boolean;
        minHeight: boolean;
        minWidth: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        width: boolean;
        zIndex: boolean;
        direction: boolean;
        shadowColor: boolean;
        shadowOffset: boolean;
        shadowOpacity: boolean;
        shadowRadius: boolean;
        contain: boolean;
    }>;
    export const stylePropsAll: Readonly<{
        color: boolean;
        fontFamily: boolean;
        fontSize: boolean;
        fontStyle: boolean;
        fontWeight: boolean;
        letterSpacing: boolean;
        lineHeight: boolean;
        textAlign: boolean;
        textDecorationLine: boolean;
        textDecorationStyle: boolean;
        textDecorationColor: boolean;
        textShadowColor: boolean;
        textShadowOffset: boolean;
        textShadowRadius: boolean;
        textTransform: boolean;
        x: boolean;
        y: boolean;
        perspective: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        pointerEvents: boolean;
        userSelect: boolean;
        cursor: boolean;
        backfaceVisibility: boolean;
        backgroundColor: boolean;
        boxSizing: boolean;
        borderBottomColor: boolean;
        borderBottomEndRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderColor: boolean;
        borderEndColor: boolean;
        borderLeftColor: boolean;
        borderLeftWidth: boolean;
        borderRadius: boolean;
        borderRightColor: boolean;
        borderRightWidth: boolean;
        borderStartColor: boolean;
        borderStyle: boolean;
        borderTopColor: boolean;
        borderTopEndRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        opacity: boolean;
        transform: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        aspectRatio: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flex: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexGrow: boolean;
        flexShrink: boolean;
        flexWrap: boolean;
        height: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        maxHeight: boolean;
        maxWidth: boolean;
        minHeight: boolean;
        minWidth: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        width: boolean;
        zIndex: boolean;
        direction: boolean;
        shadowColor: boolean;
        shadowOffset: boolean;
        shadowOpacity: boolean;
        shadowRadius: boolean;
        contain: boolean;
    }>;
    export const validStyles: {
        x: boolean;
        y: boolean;
        perspective: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        pointerEvents: boolean;
        userSelect: boolean;
        cursor: boolean;
        backfaceVisibility: boolean;
        backgroundColor: boolean;
        boxSizing: boolean;
        borderBottomColor: boolean;
        borderBottomEndRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderColor: boolean;
        borderEndColor: boolean;
        borderLeftColor: boolean;
        borderLeftWidth: boolean;
        borderRadius: boolean;
        borderRightColor: boolean;
        borderRightWidth: boolean;
        borderStartColor: boolean;
        borderStyle: boolean;
        borderTopColor: boolean;
        borderTopEndRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        opacity: boolean;
        transform: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        aspectRatio: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flex: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexGrow: boolean;
        flexShrink: boolean;
        flexWrap: boolean;
        height: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        maxHeight: boolean;
        maxWidth: boolean;
        minHeight: boolean;
        minWidth: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        width: boolean;
        zIndex: boolean;
        direction: boolean;
        shadowColor: boolean;
        shadowOffset: boolean;
        shadowOpacity: boolean;
        shadowRadius: boolean;
        contain: boolean;
        hoverStyle: boolean;
        pressStyle: boolean;
        focusStyle: boolean;
    };
}

declare module "@snackui/helpers" {
    export const uniqueStyleKeys: {
        [key: string]: string;
    };
    export const uniqueKeyToStyleName: {
        [key: string]: string;
    };
    export function getOrCreateStylePrefix(name: string): string;
}

declare module "@snackui/helpers" {
    export function concatClassName(className: string, ...propObjects: any[]): string;
}
//# sourceMappingURL=types.d.ts.map
