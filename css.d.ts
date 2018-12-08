declare enum env {
    DEV = 0,
    DIST = 1
}
declare const ENV = env.DEV;
declare enum Scope {
    Local = "local",
    Global = "global",
    Element = "element"
}
declare class j2css {
    private K;
    private V;
    constructor(K: string, V: string);
    key(): string;
    value(): string;
}
/**
 * @type define: jsvar
 */
declare type jsvar = {
    key: string;
    val: string;
};
/**
 *
 *
 * @class
 */
declare class CSSFactory {
    private style;
    private jsvar?;
    constructor(style: string, jsvar?: j2css[] | undefined);
    private parseCSS;
}
/**
 *
 *
 * @function css
 * @param css : string
 * @description Create css in TS/JS and use ${} style template strings
 * @example
 class MyClass extends css {
     constructor() {
         const style = css`myClass{
             background-color: ^myLovelyPink^;
        }`
        style.addToDom([{}])
    }
}
* @todo Implement a addToShadowDom() function? Animation, variable 2-way binding.
*
*/
declare function css(userStyle: string): Object;
declare type style = {
    css: string;
    scope: Scope;
};
//# sourceMappingURL=css.d.ts.map