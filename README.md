# Style-So-Lit

THIS CSS IS LIT🔥🔥🚀... 

----
after starting to implement lit-element for ukjp-labs' website I realized the current version is missing something, it had <code type="javascript">return html \`\<elemennt data>\`;</code> but for css? I wanted to scope my css and make it quick and fast.

----

## Adding it to your projects
<pre>
npm i style-so-lit -g
npm link style-so-lit
</pre>
if you want to try it out there is an index file that includes the css.js file in the node_module you've just obtained, open it in your browser, open devtools and see if its for you!

----

### Usage

Using it in your project couldn't be simpler. just make sure the css.js file is included in the compilation libraries of [insert your chosen bundler] or go hard core and copy and paste it! 😆.

In your code (Typescript/Javascript are basically the same if your targetting ES6):
### The most basic
<pre type="javascript">let e=css`body{background-color: #fffff}`;e.mount()</pre>
thats it now your style that was possibly loded from with a SECURE import is on visible client side

### Variables
<pre type="javascript">
/* note if you've gone hardcore this will be a path to here you copied it to */
import {css, CSSFactory, j2css} from 'lit-css'; 
import { theme1 } from 'themes';
/* themes is your own package and theme1 has javascript: var theme = new Object(); theme.fg = #ffffff; theme.bg = #222230; */

let element_style = css`
body {
    background-color: ^theme1_bg^;
    color: ^theme1_fg^;
}`

element_style.mount([
        new j2css('theme_bg', theme1.bg),
        new j2css('theme_fg',theme.fg)
        ])
</pre>
hopefully the above is fairly self explanatory.<br />
we load a theme from 'themes' and then use ^theme1_bg^ to
mark an item as a variable in the litteral nd finally use
the array of new j2css() in the mount commands input to define the
values of these variable.. allowing for.. well I'm sure you already
have a few ideas in mind!

## Comming soon

- live binding/2way binding with psudo selectors
- Scoped css
- Shadow dom for manipulations and calculations.

