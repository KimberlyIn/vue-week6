(function(n){function e(e){for(var r,u,a=e[0],i=e[1],d=e[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={app:0},c=[];function u(n){return a.p+"assets/js/"+({}[n]||n)+"."+{"chunk-1a551e60":"fe9b48f4","chunk-2d0b722f":"bd9ad141","chunk-2d0d07e5":"077b7b5d","chunk-2d2086b7":"49046ec6","chunk-2d2102cc":"06888bb2","chunk-2d21a3d2":"d5700f0e","chunk-2d21de4f":"5770d7f0","chunk-2d21e30b":"ff621143","chunk-60483722":"c9472328"}[n]+".js"}function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=o[n]=[e,r]}));e.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(n);var d=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(f);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[n]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=d;c.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},2530:function(n,e,t){"use strict";t("a8bf")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),o=t("bc3a"),c=t.n(o),u=t("2106"),a=t.n(u),i=t("8a14"),d=(t("fe26"),t("7bb1")),f=t("3aa8"),p=t("cbdf"),l=t("9457");function b(n,e){var t=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["e"])(t)}t("2530");const h={};h.render=b;var s=h,m=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),v=[{path:"/",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"/products",name:"產品列表",component:function(){return t.e("chunk-1a551e60").then(t.bind(null,"e6dc"))}},{path:"/product/:id",name:"產品頁面",component:function(){return t.e("chunk-2d21de4f").then(t.bind(null,"d2f1"))}},{path:"/cart",name:"購物車",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}}]},{path:"/login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-60483722").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-2d0b722f").then(t.bind(null,"1fae"))}},{path:"orders",component:function(){return t.e("chunk-2d0d07e5").then(t.bind(null,"67e3"))}}]}],k=Object(m["a"])({history:Object(m["b"])(),routes:v}),y=k;Object.keys(f["a"]).forEach((function(n){Object(d["e"])(n,f["a"][n])})),Object(d["d"])({generateMessage:Object(p["a"])({zh_TW:l}),validateOnInput:!0}),Object(p["b"])("zh_TW"),Object(r["d"])(s).use(y).use(a.a,c.a).component("Loading",i["a"]).component("Form",d["c"]).component("Field",d["b"]).component("ErrorMessage",d["a"]).mount("#app")},a8bf:function(n,e,t){}});
//# sourceMappingURL=app.a0102601.js.map