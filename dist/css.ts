//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.


// TODO:    THIS CSS IS LIT🔥🔥🚀... 

//TODO: scope = ShadowJS (Create a shadow and seperated version of javascript DOM 
// that can be addressed to the calling function for seperation/non-collision)


// Enum... duh.
enum Scope {
    Local = 'local',
    Global = 'global',
    Element = 'element'
}


namespace com.ukjp.labs {}

class j2css{
    constructor(private K : string, private V : string) {
        this.K =  K;
        this.V = V;
    }
    // set key(knae : string) {
    //     this.K = name;
    // }
    // set value(val : string) {
    //     this.V = val;
    // }
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
                console.log(vars);
                vars.forEach((val : j2css, i :number,all :j2css[])=>{
                    let item = val.key()
                    console.log(item);
                    let key = <string> val.key()
                    let value = <string> val.value()
                    console.log(value);
                    let search = "^" + key.toString() + "^";
                    let forreplace = value.toString();
                    console.log(`search: ${search}, forreplace: ${forreplace}`);
                    outputBuffer += pre[0].replace(search, value);
                    console.log(outputBuffer);
                });
            } catch( e) {
                console.error(`Error! data: ${e}`);
                caughtOrNotSet = true;
            }
        } else {
            console.warn("caught or not set = true");
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
