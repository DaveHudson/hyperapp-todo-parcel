require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({39:[function(require,module,exports) {
"use strict";function e(e,n){for(var r,o=[],t=[],i=arguments.length;i-- >2;)t.push(arguments[i]);for(;t.length;)if(Array.isArray(r=t.pop()))for(i=r.length;i--;)t.push(r[i]);else null==r||!0===r||!1===r||o.push(r);return"string"==typeof e?{name:e,props:n||{},children:o}:e(n||{},o)}function n(e,n,r,o){var t,i=[],l=o&&o.children[0],u=function e(n,r){return n&&{name:n.nodeName.toLowerCase(),props:{},children:r.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,r)})}}(l,[].map);return c(function n(r,o,t){for(var i in t)"function"==typeof t[i]?function(n,i){t[n]=function(n){return o=a(r,e),"function"==typeof(n=i(n))&&(n=n(o,t)),n&&n!==o&&!n.then&&c(e=s(r,p(o,n),e,{})),n}}(i,t[i]):n(r.concat(i),o[i]=o[i]||{},t[i]=p(t[i]))}([],e=p(e),n=p(n))),n;function f(f){for(t=!t,f=r(e,n),o&&!t&&(l=function e(n,r,o,t,l,u){if(t===o);else if(null==o)r=n.insertBefore(v(t,l),r);else if(t.name&&t.name===o.name){!function(e,n,r){for(var o in p(n,r))r[o]!==("value"===o||"checked"===o?e[o]:n[o])&&d(e,o,r[o],n[o]);r.onupdate&&i.push(function(){r.onupdate(e,n)})}(r,o.props,t.props);for(var f=[],c={},s={},a=0;a<o.children.length;a++){f[a]=r.childNodes[a];var y=o.children[a],g=h(y);null!=g&&(c[g]=[f[a],y])}for(var a=0,N=0;N<t.children.length;){var y=o.children[a],w=t.children[N],g=h(y),b=h(w);if(s[g])a++;else if(null==b)null==g&&(e(r,f[a],y,w,l),N++),a++;else{var k=c[b]||[];g===b?(e(r,k[0],k[1],w,l),a++):k[0]?e(r,r.insertBefore(k[0],f[a]),k[1],w,l):e(r,f[a],null,w,l),N++,s[b]=w}}for(;a<o.children.length;){var y=o.children[a];null==h(y)&&m(r,f[a],y),a++}for(var a in c)s[c[a][1].props.key]||m(r,c[a][0],c[a][1])}else t.name===o.name?r.nodeValue=t:(r=n.insertBefore(v(t,l),u=r),m(n,u,o));return r}(o,l,u,u=f));f=i.pop();)f()}function c(){t||(t=!t,setTimeout(f))}function p(e,n){var r={};for(var o in e)r[o]=e[o];for(var o in n)r[o]=n[o];return r}function s(e,n,r,o){return e.length?(o[e[0]]=1<e.length?s(e.slice(1),n,r[e[0]],{}):n,p(r,o)):n}function a(e,n){for(var r=0;r<e.length;r++)n=n[e[r]];return n}function h(e){return e&&e.props?e.props.key:null}function d(e,n,r,o){if("key"===n);else if("style"===n)for(var t in p(o,r))e[n][t]=null==r||null==r[t]?"":r[t];else{try{e[n]=null==r?"":r}catch(e){}"function"!=typeof r&&(null==r||!1===r?e.removeAttribute(n):e.setAttribute(n,r))}}function v(e,n){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name):document.createElement(e.name);if(e.props){e.props.oncreate&&i.push(function(){e.props.oncreate(r)});for(var o=0;o<e.children.length;o++)r.appendChild(v(e.children[o],n));for(var t in e.props)d(r,t,e.props[t])}return r}function m(e,n,r,o){function t(){e.removeChild(function e(n,r,o){if(o=r.props){for(var t=0;t<r.children.length;t++)e(n.childNodes[t],r.children[t]);o.ondestroy&&o.ondestroy(n)}return n}(n,r))}r.props&&(o=r.props.onremove)?o(n,t):t()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],37:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.generateUUID=(()=>(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/1|0/g,function(){return(0|16*Math.random()).toString(16)}));
},{}],28:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTodo=void 0;var e=require("../utils/generate-uuid");const o=exports.addTodo=(o=>o.todos.concat({done:!1,id:(0,e.generateUUID)(),value:o.input}));
},{"../utils/generate-uuid":37}],29:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.removeTodo=((e,t)=>e.todos.filter(e=>t.target.dataset.uuid!==e.id));
},{}],30:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.toggleTodo=((e,t)=>e.todos.map(e=>t.target.dataset.uuid===e.id?Object.assign({},e,{done:!e.done}):e));
},{}],31:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=exports.editTodo=((t,e)=>t.todos.map(t=>e.target.dataset.uuid===t.id?Object.assign({},t,{value:e.target.textContent}):t));
},{}],25:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=void 0;var o=require("./add-todo"),e=require("./remove-todo"),t=require("./toggle-todo"),d=require("./edit-todo");const r=exports.actions={add:()=>e=>({input:"",todos:(0,o.addTodo)(e)}),input:o=>e=>({input:o}),remove:o=>t=>({todos:(0,e.removeTodo)(t,o)}),toggle:o=>e=>({todos:(0,t.toggleTodo)(e,o)}),edit:o=>e=>({todos:(0,d.editTodo)(e,o)}),editEnter:o=>e=>{o.preventDefault(),o.target.blur()}};
},{"./add-todo":28,"./remove-todo":29,"./toggle-todo":30,"./edit-todo":31}],27:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=()=>JSON.parse(window.localStorage.getItem("todoapp")),e=t=>window.localStorage.setItem("todoapp",JSON.stringify(t));exports.getStateFromStorage=t,exports.storeStateInStorage=e;
},{}],24:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e=require("../utils/local-storage");const t=exports.state=(0,e.getStateFromStorage)()||{input:"",placeholder:"Add new todo",todos:[]};
},{"../utils/local-storage":27}],32:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderView=void 0;var e=require("hyperapp");const l=exports.HeaderView=(()=>(0,e.h)("header",null,[(0,e.h)("h2",null,["todo"]),(0,e.h)("p",null,[(0,e.h)("em",null,[(0,e.h)("small",null,["tap text to edit todo"])]),(0,e.h)("a",{href:"https://github.com/marcusasplund/hyperapp-todo-simple/"},[" ",(0,e.h)("small",null,["source"])])])]));
},{"hyperapp":39}],40:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveButton=void 0;var e=require("hyperapp");const t=exports.RemoveButton=(({id:t,actions:o})=>(0,e.h)("button",{"aria-label":"Remove",class:"button button-small button-outline","data-uuid":t,onclick:o.remove},["x"]));
},{"hyperapp":39}],41:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToggleButton=void 0;var t=require("hyperapp");const e=exports.ToggleButton=(({id:e,actions:o})=>(0,t.h)("button",{"aria-label":"Toggle",class:"button button-small button-outline","data-uuid":e,onclick:o.toggle},["✓"]));
},{"hyperapp":39}],38:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoItem=void 0;var t=require("hyperapp"),e=require("./remove-button"),o=require("./toggle-button");const i=exports.TodoItem=(({actions:i,todo:d})=>(0,t.h)("div",{class:"item row"},[(0,t.h)("div",{class:"left"},[(0,t.h)(e.RemoveButton,{actions:i,id:d.id},[]),(0,t.h)(o.ToggleButton,{actions:i,id:d.id},[])]),(0,t.h)("div",{class:d.done?"done right":"right",onclick:t=>{d.done||(t.target.contentEditable=!0,t.target.focus())},onkeydown:t=>{13===t.keyCode&&(t.target.contentEditable=!1,i.editEnter(t))},"data-uuid":d.id,oninput:t=>d.value=t.target.textContent||"",onblur:t=>i.edit(t)},[d.value])]));
},{"hyperapp":39,"./remove-button":40,"./toggle-button":41}],33:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoList=void 0;var o=require("hyperapp"),e=require("./todo-item");const t=exports.TodoList=(({state:t,actions:r})=>t.todos.filter(o=>!o.done).map(t=>(0,o.h)(e.TodoItem,{todo:t,actions:r},[])));
},{"hyperapp":39,"./todo-item":38}],34:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoInput=void 0;var e=require("hyperapp");const t=exports.TodoInput=(({state:t,actions:o})=>(0,e.h)("div",{class:"row"},[(0,e.h)("input",{type:"text","aria-label":t.placeholder,onkeyup:({target:{value:e},keyCode:t})=>13===t&&""!==e?o.add():null,oninput:({target:{value:e}})=>o.input(e),value:t.input,placeholder:t.placeholder},[])]));
},{"hyperapp":39}],35:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoListDone=void 0;var o=require("hyperapp"),e=require("./todo-item");const t=exports.TodoListDone=(({state:t,actions:r})=>t.todos.filter(o=>o.done).map(t=>(0,o.h)(e.TodoItem,{todo:t,actions:r},[])));
},{"hyperapp":39,"./todo-item":38}],36:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StateDisplay=void 0;var e=require("hyperapp"),t=require("../utils/local-storage");const r=exports.StateDisplay=(({state:r})=>(0,e.h)("pre",null,[(0,e.h)("code",{onupdate:(0,t.storeStateInStorage)(r)},[JSON.stringify(r,null,2)])]));
},{"hyperapp":39,"../utils/local-storage":27}],26:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.view=void 0;var e=require("hyperapp"),t=require("./header-view"),i=require("./todo-list"),o=require("./todo-input"),r=require("./todo-list-done"),s=require("./state-display");const a=exports.view=((a,d)=>(0,e.h)("div",{class:"container"},[(0,e.h)(t.HeaderView,null,[]),(0,e.h)(i.TodoList,{state:a,actions:d},[]),(0,e.h)(o.TodoInput,{state:a,actions:d},[]),(0,e.h)(r.TodoListDone,{state:a,actions:d},[]),(0,e.h)(s.StateDisplay,{state:a},[])]));
},{"hyperapp":39,"./header-view":32,"./todo-list":33,"./todo-input":34,"./todo-list-done":35,"./state-display":36}],9:[function(require,module,exports) {

},{"./fonts/roboto-v16-latin-300.woff2":["cdb0a4c130d45fbfe51134edaa2eb519.woff2",20],"./fonts/roboto-v16-latin-300.woff":["4e7df52b8395c7608f427281f6ea9553.woff",21],"./fonts/roboto-v16-latin-300italic.woff2":["e7b61a94da9fb8fe918da1ab5338b0d7.woff2",23],"./fonts/roboto-v16-latin-300italic.woff":["ed4c80b071cbd9a0b84942a92799ebde.woff",22]}],8:[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("./actions/"),t=require("./state/"),i=require("./views/");require("./styles/app.scss"),window.main=(0,e.app)(t.state,r.actions,i.view,document.getElementById("todo"));
},{"hyperapp":39,"./actions/":25,"./state/":24,"./views/":26,"./styles/app.scss":9}]},{},[8])