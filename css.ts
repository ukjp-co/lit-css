//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.


// !!   THIS CSS IS LIT🔥🔥... 

//TODO: scope = ShadowJS (Create a shadow and seperated version of javascript DOM 
// that can be addressed to the calling function for seperation/non-collision)


// Enum... duh.
enum Scope {
    Local = 'local',
    Global = 'global',
    Element = 'element'
}
class CSSFactory { 
    constructor(private style : string, private jsvar? : Map<Object,Object>[] ) {
        this.parseCSS(style, jsvar);
    }
    private parseCSS(pre : string, vars? : Map<Object,Object>[]) {
        let outputBuffer : string = "";
        var caughtOrNotSet = false;
        if (vars !== undefined) {
            try {
                let x : string;
                vars.forEach((x) => {
                    console.log(x);
                    let key = <string> x[0];
                    let value = <string> x[1];
                    let search = "^" + key.toString();
                    let regex = /(\^\w+)/;
        
                    let forreplace = value.toString();
                    console.log(`regex: ${regex.toString()}, search: ${search}, forreplace: ${forreplace}`);
                    outputBuffer += (this.style.indexOf(search) >= 0)? this.style.replace(regex, value.toString()) : "";
                });
            } catch {
                console.error("Failed to use the provided jsvars!");
                caughtOrNotSet = true;
            }
        } else {
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
function css(userStyle : string) : Object {
    const pre = userStyle;
    return {
        pre : pre[0],
        mount   : (jsVar : Map<Object,Object>[])=>{
            return new CSSFactory(pre, jsVar);
        },
    };
}

type style = {
    css : string;
    scope : Scope;
}
