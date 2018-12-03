//TODO: Implement a addToShadowDom() function? Animation, variable 2-way binding.
namespace ukjp.labs {

    // THIS CSS IS LIT... 

    // Enum
    enum Scope {
        Local = 'local',
        Global = 'global',
        Element = 'element'
    }
    class Processor

    /**
     *
     *
     * @class LitCSS
     * @param css : string
     * @description Create css in TS/JS and use ${} style template strings
     * @example
         class MyClass extends LitCSS {
           constructor() {
               let style = css`myClass{
                   background-color: ${myLovelyPink};
                }`
                style.addToDom()
           }
        }
     * @returns typeof CSS || Stylesheet which you can pass to addToDom();
     * @todo Implement a addToShadowDom() function? Animation, variable 2-way binding.
     * 
     */
    class css extends Window {
        public pre;
        public post;
        private stylesheet : string;
        public css(css : string) : Function {
            this.stylesheet = css;
            return () => {
                window['css'] = {
                    ctx : this,
                    pre : this.stylesheet,
                    post : typeof CSS
                }
                const addToDom  =  (this.pre) => { 
                        return this.addCSSToDom.bind(this);
                    }
            };
        }
        public addCSSToDom(pre : string) {

        }
    }
    type style = {
        css : StyleSheet;
        scope : Scope;
    }
}
