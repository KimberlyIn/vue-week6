(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102cc"],{b789:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),l={class:"about"},s=Object(c["h"])("h1",null,"購物車頁面",-1),n={class:"container"},o={class:"row justify-content-center"},r={class:"col-md-6"},i={class:"table align-middle"},d=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",{style:{width:"110px"}},"數量"),Object(c["h"])("th",null,"單價")])],-1),b={key:0,class:"fas fa-spinner fa-pulse"},u=Object(c["g"])(" 移除購物車 "),m={key:0,class:"text-success"},h={class:"input-group input-group-sm"},j={class:"text-end"},O={key:0,class:"text-success"},f=Object(c["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),p={class:"text-end"},g={key:0},v=Object(c["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),y={class:"text-end text-success"},x={class:"my-5 row justify-content-center"},k={class:"mb-3"},V=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),w={class:"mb-3"},L=Object(c["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),C={class:"mb-3"},I=Object(c["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),S={class:"mb-3"},D=Object(c["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),_={class:"mb-3"},q=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),U=Object(c["h"])("div",{class:"text-end"},[Object(c["h"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function A(e,t,a,A,$,E){var F=Object(c["A"])("Loading"),J=Object(c["A"])("Field"),G=Object(c["A"])("ErrorMessage"),K=Object(c["A"])("Form");return Object(c["t"])(),Object(c["e"])("div",l,[Object(c["h"])(F,{active:$.isLoading},null,8,["active"]),s,Object(c["h"])("div",n,[Object(c["h"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])("table",i,[d,Object(c["h"])("tbody",null,[$.cart.carts?(Object(c["t"])(!0),Object(c["e"])(c["a"],{key:0},Object(c["y"])($.cart.carts,(function(e){return Object(c["t"])(),Object(c["e"])("tr",{key:e.id},[Object(c["h"])("td",null,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return E.removeCartItem(e.id)},disabled:$.loadingStatus.loadingItem===e.id},[$.loadingStatus.loadingItem===e.id?(Object(c["t"])(),Object(c["e"])("i",b)):Object(c["f"])("",!0),u],8,["onClick","disabled"])]),Object(c["h"])("td",null,[Object(c["g"])(Object(c["D"])(e.product.title)+" ",1),e.coupon?(Object(c["t"])(),Object(c["e"])("div",m," 已套用優惠券 ")):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("div",h,Object(c["D"])(e.qty)+" / "+Object(c["D"])(e.product.unit),1)]),Object(c["h"])("td",j,[$.cart.final_total!==$.cart.total?(Object(c["t"])(),Object(c["e"])("small",O,"折扣價：")):Object(c["f"])("",!0),Object(c["g"])(" "+Object(c["D"])(e.final_total),1)])])})),128)):Object(c["f"])("",!0)]),Object(c["h"])("tfoot",null,[Object(c["h"])("tr",null,[f,Object(c["h"])("td",p,Object(c["D"])($.cart.total),1)]),$.cart.final_total!==$.cart.total?(Object(c["t"])(),Object(c["e"])("tr",g,[v,Object(c["h"])("td",y,Object(c["D"])($.cart.final_total),1)])):Object(c["f"])("",!0)])])])]),Object(c["h"])("div",x,[Object(c["h"])(K,{ref:"form",class:"col-md-6",onSubmit:E.createOrder},{default:Object(c["K"])((function(e){var a=e.errors;return[Object(c["h"])("div",k,[V,Object(c["h"])(J,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:$.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return $.form.user.email=e})},null,8,["class","modelValue"]),Object(c["h"])(G,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",w,[L,Object(c["h"])(J,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:$.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return $.form.user.name=e})},null,8,["class","modelValue"]),Object(c["h"])(G,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",C,[I,Object(c["h"])(J,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:$.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return $.form.user.tel=e})},null,8,["class","modelValue"]),Object(c["h"])(G,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",S,[D,Object(c["h"])(J,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:$.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return $.form.user.address=e})},null,8,["class","modelValue"]),Object(c["h"])(G,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",_,[q,Object(c["L"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return $.form.message=e})},null,512),[[c["G"],$.form.message]])]),U]})),_:1},8,["onSubmit"])])])])}a("99af");var $={name:"Cart",data:function(){return{loadingStatus:{loadingItem:""},isLoading:!1,cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},created:function(){this.getCart()},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jemmanine","/cart");this.$http.get(t).then((function(t){t.data.success?(e.cart=t.data.data,e.isLoading=!1):alert(t.data.message)}))},removeCartItem:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jemmanine","/cart/").concat(e);this.loadingStatus.loadingItem=e,this.$http.delete(a).then((function(e){e.data.success?(alert(e.data.message),t.getCart()):alert(e.data.message),t.loadingStatus.loadingItem="",t.isLoading=!1}))},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jemmanine","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(t){t.data.success?(alert(t.data.message),e.$refs.form.resetForm()):alert(t.data.message),e.isLoading=!1}))}}};$.render=A;t["default"]=$}}]);
//# sourceMappingURL=chunk-2d2102cc.06888bb2.js.map