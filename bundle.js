(()=>{"use strict";var e={958:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(81),r=o.n(n),a=o(645),s=o.n(a)()(r());s.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.container{height:80vh;padding:1vw}footer{height:15vh;padding:0 1vw}.grid{display:grid;grid-template-columns:1fr 120px 1fr;gap:8px;height:100%}.toolbar{text-align:center;padding-top:120px}.toolbar button{background-color:#dadada;border-radius:3px;border:none;padding:4px 12px;cursor:pointer}.toolbar button:hover{background-color:#bfbfbf}textarea{width:100%;height:100%;border:1px solid #ccc;border-radius:3px}#mysql-conntact,#mysql-dump{font-family:"Source Code Pro",Menlo,"SF Mono",monaco,inconsolata,"Fira Mono","Droid Sans Mono",monospace,monospace;background-color:#f8f8f8;padding:10px;border:1px solid #ebebeb;border-radius:3px;line-height:1.5;margin-bottom:20px;font-size:14px}#mysql-conntact:empty,#mysql-dump:empty{display:none}',""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=o(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=r(f,n);n.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=o(a[s]);t[i].references--}for(var c=n(e,r),u=0;u<a.length;u++){var l=o(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{var e=o(379),t=o.n(e),n=o(795),r=o.n(n),a=o(569),s=o.n(a),i=o(565),c=o.n(i),u=o(216),l=o.n(u),p=o(589),d=o.n(p),f=o(958),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(){this.inputText="",this.outputText={}}setInputText(e){this.inputText=e,this.outputText=this._processText()}getOutputText(){return this.outputText}_processText(){return{host:this.extractValueFromPHPCode(this.inputText,"host"),dbname:this.extractValueFromPHPCode(this.inputText,"dbname"),password:this.extractValueFromPHPCode(this.inputText,"password"),username:this.extractValueFromPHPCode(this.inputText,"username")}}extractValueFromPHPCode(e,t){const o=new RegExp("'"+t+"'\\s*=>\\s*'([^']*)'"),n=e.match(o);return n?n[1]:null}}$(document).ready((function(){const e="phpCode",t=localStorage.getItem(e);t&&($("#input-text").val(t),setTimeout((()=>{$("#readButton").click()}),200)),$("#input-text").keypress((function(e){13==e.which&&$("#readButton").click()})),$("#readButton").click((function(){const t=$("#input-text").val();localStorage.setItem(e,t);const o=new h;o.setInputText(t);const n=o.getOutputText(),{host:r,dbname:a,password:s,username:i}=n,c=`mysql -u$<span style="color:#cf1666">{username}</span> -p"<span style="color:#cf1666">${s}</span>" -h<span style="color:#cf1666">${r}</span> <span style="color:#cf1666">${a}</span>`,u=`mysqldump -u<span style="color:#cf1666">${i}</span> -h<span style="color:#cf1666">${r}</span> -p"<span style="color:#cf1666">${s}</span>" <span style="color:#cf1666">${a}</span> --routines --force --triggers --single-transaction --opt --skip-lock-tables --no-tablespaces | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\\*/\\*/' > ${a}.sql`;r&&($("#mysql-conntact").html(c),$("#mysql-dump").html(u))}))}))})()})();