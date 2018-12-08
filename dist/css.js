"use strict";
//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.
//TODO: scope = ShadowJS (Create a shadow and seperated version of javascript DOM 
// that can be addressed to the calling function for seperation/non-collision)
// TODO: ...   THIS CSS IS LIT🔥🔥🚀... 
var env;
(function (env) {
    env[env["DEV"] = 0] = "DEV";
    env[env["DIST"] = 1] = "DIST";
})(env || (env = {}));
// ======================================================================================//
//TODO: BY THE USER -  By default this is always set to dev environment.. make sure you  //
// change this to env.DIST if you don't want console output in your product              //
const ENV = env.DEV;
//=======================================================================================//
// Enum... duh. not implemented yet but will be used to scope the css.
var Scope;
(function (Scope) {
    Scope["Local"] = "local";
    Scope["Global"] = "global";
    Scope["Element"] = "element";
})(Scope || (Scope = {}));
class j2css {
    constructor(K, V) {
        this.K = K;
        this.V = V;
        this.K = K;
        this.V = V;
    }
    // set key(knae : string) {
    //     this.K = name;
    // }
    // set value(val : string) {
    //     this.V = val;
    // }
    key() {
        return this.K;
    }
    value() {
        return this.V;
    }
}
/**
 *
 *
 * @class
 */
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
                if (env.DEV) {
                    console.log(vars);
                }
                vars.forEach((val, i, all) => {
                    let item = val.key();
                    if (env.DEV) {
                        console.log(item);
                    }
                    let key = val.key();
                    let value = val.value();
                    if (env.DEV) {
                        console.log(value);
                    }
                    let search = "^" + key.toString() + "^";
                    let forreplace = value.toString();
                    if (env.DEV) {
                        console.log(`search: ${search}, forreplace: ${forreplace}`);
                    }
                    outputBuffer += pre[0].replace(search, value);
                    if (env.DEV) {
                        console.log(outputBuffer);
                    }
                });
            }
            catch (e) {
                if (env.DEV) {
                    console.error(`Error! data: ${e}`);
                }
                caughtOrNotSet = true;
            }
        }
        else {
            if (env.DEV) {
                console.warn("caught or not set = true");
            }
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
             background-color: ^myLovelyPink^;
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