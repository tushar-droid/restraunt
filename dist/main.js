(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(10),t.b),l=i()(o()),u=s()(d);l.push([n.id,`@font-face {\n    font-family: 'MyFont';\n    src: url(${u});\n}\n\n:root{\n    --bg-color: #172554;\n    --fnt-color: white;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--bg-color);\n    color: var(--fnt-color);\n    margin:0;\n    padding: 0;\n    font-family: 'MyFont';\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    gap: 20px;\n}\n\n.navbar{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex:1;\n    padding: 2% 10% 0% 10%;\n}\nbutton{\n    font-size: 2rem;\n    padding: 1% 3%;\n    border-radius: 5px;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    background-color: var(--bg-color);\n    color: var(--fnt-color);\n    transition: all 300ms ease;\n    font-family: 'MyFont';\n}\n\nbutton:hover{\n    margin-bottom: 20px;\n    outline: solid var(--fnt-color);\n}\n.main-content{\n    flex: 5;\n    margin: 2% 10% 1% 10%;\n    display: flex;\n    justify-content: center;\n    padding-top: 1%;\n    height: 70%;\n    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);\n    \n}\n\n\n.home-content{\n    max-height: 70%;\n    max-width: 100%;\n    margin: 1% 8% ;\n    padding: 1% 8%;\n    background-color: rgba(128, 128, 128, 0.535);\n    display: flex;\n    align-items: center;\n\n}\n\n.left-container{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 0px;\n    justify-content: center;\n}\n\n.right-container{\n    height: 100%;\n    width: auto;\n    flex: 1 1 0px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.right-container > img{\n    max-width: 100%;\n    max-height: 90% ;\n    width: auto;\n    height: auto;\n    \n}\n\n\n.menu-container{\n    display: grid;\n    width: 100%;\n    height: 90%;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));\n    gap: 5%;\n    grid-auto-rows: 300px;\n    justify-content: space-evenly;\n    padding: 2% 10%;\n    overflow-y: scroll;\n\n}\n.menu-container::-webkit-scrollbar { \n    display: none;  \n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2% 10%;\n    outline:solid;\n    text-align: center;\n    background-color: rgba(33, 32, 32, 0.64);\n}\n\n.card:hover{\n    position: relative;\n    top: -10px;\n    \n}`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},10:(n,e,t)=>{n.exports=t.p+"24bd4f0ee9ce0247040e.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"5a4c70ac02965a6e3bd6.jpg";function g(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("div");e.classList.add("left-container");const t=document.createElement("div");return t.classList.add("right-container"),function(n){const e=document.createElement("h1"),t=document.createElement("h3");e.textContent="Crown & Cuisines",t.textContent='\n    Welcome to "Crown & Cuisines," where the essence of England comes alive on your plate. Immerse yourself in a delightful blend of traditional and contemporary flavors, expertly crafted with locally-sourced ingredients. From classic Shepherd\'s Pie to innovative twists, our menu caters to every palate. Let our attentive staff and charming ambiance make your dining experience truly memorable. Indulge in the heart and soul of English cuisine as you embark on a culinary journey like no other.\n    ',n.appendChild(e),n.appendChild(t)}(e),function(n){const e=new Image;e.src=h,n.appendChild(e)}(t),n.appendChild(e),n.appendChild(t),n}const v=(n,e,t)=>({createItemCard:()=>{const r=document.createElement("div");r.classList.add("card");const o=document.createElement("h2");o.classList.add("dish-name"),o.textContent=n;const a=document.createElement("p");a.classList.add("dish-info"),a.textContent=e;const i=document.createElement("h3");return i.classList.add("price"),i.textContent=`$ ${t}`,r.appendChild(o),r.appendChild(a),r.appendChild(i),r}}),y=t.p+"7504d85db542c4479573.jpg";(()=>{const n=document.querySelector(".main-content");n.style=`\n    background: url("${y}"); background-size: cover; `,function(){const n=document.createElement("button");n.textContent="Home",n.classList.add("home-btn");const e=document.createElement("button");e.classList.add("menu-btn"),e.textContent="Menu";const t=document.createElement("button");t.classList.add("about-btn"),t.textContent="About";const r=document.querySelector(".navbar");r.appendChild(n),r.appendChild(e),r.appendChild(t)}();const e=document.querySelector(".home-btn"),t=document.querySelector(".menu-btn"),r=document.querySelector(".about-btn");n.appendChild(g()),e.addEventListener("click",(()=>{n.innerHTML="",n.appendChild(g())})),t.addEventListener("click",(()=>{n.innerHTML="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("menu-container");const e=v("Spicy Szechuan Stir-Fry","Fiery Spicy Szechuan Stir-Fry: Explosive chili, savory meat, and vibrant veggies dance in harmony. A taste adventure you won't forget!",20);n.appendChild(e.createItemCard());const t=v("Savory Garlic Butter Shrimp","Delight in plump shrimp bathed in a luscious garlic butter sauce. Each bite bursts with leaving you craving the perfect harmony of seafood.",30);n.appendChild(t.createItemCard());const r=v("Crispy Parmesan Baked Chicken","Indulge in the crispy goodness of Parmesan Baked Chicken. Succulent chicken coated in golden Parmesan and herbs.",18);n.appendChild(r.createItemCard());const o=v("Thai Basil Beef Stir-Fry","Explore the bold flavors of Thai Basil Beef Stir-Fry. Tender beef, fresh basil, and vibrant vegetables unite for a tantalizing taste experience.",25);n.appendChild(o.createItemCard());const a=v("Honey Garlic Glazed Salmon","Savor the succulence of Honey Garlic Glazed Salmon. Juicy salmon fillet kissed with a sweet and savory glaze for a delightful culinary delight.",45);n.appendChild(a.createItemCard());const i=v("Mango Coconut Curry","Indulge in the tropical bliss of Mango Coconut Curry. A harmonious fusion of sweet mango, creamy coconut, and aromatic spices.",38);return n.appendChild(i.createItemCard()),n}())})),r.addEventListener("click",(()=>{document.querySelector(".main-content").textContent="This text was recieved from about.js"}))})()})()})();