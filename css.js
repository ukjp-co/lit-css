"use strict";
//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.
// !!   THIS CSS IS LIT🔥🔥... 
//TODO: scope = ShadowJS (Create a shadow and seperated version of javascript DOM 
// that can be addressed to the calling function for seperation/non-collision)
// Enum... duh.
var Scope;
(function (Scope) {
    Scope["Local"] = "local";
    Scope["Global"] = "global";
    Scope["Element"] = "element";
})(Scope || (Scope = {}));
class CSSFactory {
    constructor(style, jsvar) {
        this.style = style;
        this.jsvar = jsvar;
        this.parseCSS(style, jsvar);
    }
    parseCSS(pre, vars) {
        let outputBuffer = "";
        var caughtOrNotSet = false;
        if (vars !== undefined) {
            try {
                vars.forEach((key, value) => {
                    let search = "^" + key.toString();
                    let regex = /(\^\w+)/;
                    let forreplace = value.toString();
                    console.log(`regex: ${regex.toString}, search: ${search}, forreplace: ${forreplace}`);
                    outputBuffer += (this.style.indexOf(search) >= 0) ? this.style.replace(regex, value.toString()) : "";
                });
            }
            catch (_a) {
                console.error("Failed to use the provided jsvars!");
                caughtOrNotSet = true;
            }
        }
        else {
            caughtOrNotSet = true;
        }
        outputBuffer = (caughtOrNotSet) ? pre : outputBuffer;
        const outputFinal = document.createElement('style');
        outputFinal.type = 'text/css';
        outputFinal.innerHTML = (outputBuffer !== "") ? outputBuffer : pre;
        document.getElementsByTagName('head')[0].append(outputFinal);
    }
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
             background-color: ^myLovelyPink;
        }`
        style.addToDom([{}])
    }
}
* @todo Implement a addToShadowDom() function? Animation, variable 2-way binding.
*
*/
function css(userStyle) {
    const pre = userStyle;
    return {
        pre: pre[0],
        mount: (jsVar) => {
            return new CSSFactory(pre, jsVar);
        },
    };
}
//# sourceMappingURL=css.js.map