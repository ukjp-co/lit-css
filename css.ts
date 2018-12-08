//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.
//TODO: scope = ShadowJS (Create a shadow and seperated version of javascript DOM 
// that can be addressed to the calling function for seperation/non-collision)

// TODO: ...   THIS CSS IS LIT🔥🔥🚀... 
enum env {
    DEV = 0,
    DIST = 1
}

// ======================================================================================//
//TODO: BY THE USER -  By default this is always set to dev environment.. make sure you  //
// change this to env.DIST if you don't want console output in your product              //
const ENV = env.DEV
//=======================================================================================//

// Enum... duh. not implemented yet but will be used to scope the css.
enum Scope {
    Local = 'local',
    Global = 'global',
    Element = 'element'
}

class j2css{
    constructor(private K : string, private V : string) {
        this.K =  K;
        this.V = V;
    }
    key() : string {
        return this.K;
    }
    value() : string {
        return this.V;
    }
    
}

/**
 * @type define: jsvar 
 */
type jsvar = {
    key : string,
    val : string
}

/**
 *
 *
 * @class 
 */
class CSSFactory { 
    constructor(private style : string, private jsvar? : j2css[] ) {
        this.parseCSS(style, jsvar);
    }
    private parseCSS(pre : string, vars? : j2css[]) {
        let outputBuffer : string = "";
        var caughtOrNotSet = false;
        if (vars !== undefined) {
            try {
                if(env.DEV) { console.log(vars); }
                vars.forEach((val : j2css, i :number,all :j2css[])=>{
                    let item = val.key();
                    if(env.DEV) {console.log(item);}
                    let key = <string> val.key();
                    let value = <string> val.value();
                    if(env.DEV) {console.log(value);}
                    let search = "^" + key.toString() + "^";
                    let forreplace = value.toString();
                    if(env.DEV) {console.log(`search: ${search}, forreplace: ${forreplace}`);}
                    outputBuffer += pre[0].replace(search, value);
                    if(env.DEV) {console.log(outputBuffer);}
                });
            } catch( e) {
                if(env.DEV) { console.error(`Error! data: ${e}`);}
                caughtOrNotSet = true;
            }
        } else {
            if(env.DEV) {console.warn("caught or not set = true");}
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
function css(userStyle : string) : Object {
    const pre = userStyle;
    return {
        pre : pre[0],
        mount   : (jsVar? : j2css[])=>{
            return new CSSFactory(pre, jsVar);
        },
    };
}

type style = {
    css : string;
    scope : Scope;
}
