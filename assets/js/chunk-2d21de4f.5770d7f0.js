(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de4f"],{d2f1:function(t,c,e){"use strict";e.r(c);var a=e("7a23"),n={class:"about"},o=Object(a["h"])("h1",null,"單一產品頁面",-1);function u(t,c,e,u,r,d){return Object(a["t"])(),Object(a["e"])("div",n,[o,Object(a["g"])(" "+Object(a["D"])(r.product.title),1)])}e("99af");var r={name:"Product",data:function(){return{product:{}}},created:function(){var t=this,c=this.$route.params.id,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jemmanine","/product/").concat(c);this.$http.get(e).then((function(c){c.data.success?t.product=c.data.product:alert(c.data.message)}))}};r.render=u;c["default"]=r}}]);
//# sourceMappingURL=chunk-2d21de4f.5770d7f0.js.map