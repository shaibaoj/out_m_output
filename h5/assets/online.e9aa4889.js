import{_ as i,t as _}from"./index.8d7056f1.js";import{n as d}from"./navbar.2ea483b9.js";/* empty css                                                           */const u={components:{navBar:d},data(){return{cms:{}}},mounted(){this.query()},methods:{back(){this.$router.go(-1)},query(){this.$http.post("/cms.info.cms",{}).then(e=>{e.data.item&&(this.cms=e.data.item)})},copyContent(e){const s=e.target.dataset.copy,c=new ClipboardJS(".copytext-btn",{text(){return s}});c.on("success",n=>{_.info("\u590D\u5236\u6210\u529F"),n.clearSelection(),c.destroy()}),c.on("error",function(n){console.log(n)})}}},o=e=>(Vue.pushScopeId("data-v-b8dd62fc"),e=e(),Vue.popScopeId(),e),V={class:"page"},m={class:"fix"},p=Vue.createTextVNode("\u5728\u7EBF\u5BA2\u670D"),v={class:"container"},h=o(()=>Vue.createElementVNode("div",{class:"exclusive_serve"},[Vue.createElementVNode("div",{class:"exclusive_serve_title"},[Vue.createElementVNode("p",null,"\u4E13\u5C5E\u5BA2\u670D"),Vue.createElementVNode("span",null,"\u60A8\u6709\u4EFB\u4F55\u95EE\u9898\u6B22\u8FCE\u8054\u7CFB\u6211\u4EEC")]),Vue.createElementVNode("div",{class:"exclusive_serve_logo"})],-1)),N={class:"customer_serve_box"},E={class:"customer_serve_lists"},f={key:0,class:"qq"},y=o(()=>Vue.createElementVNode("div",{class:"serve_logo"},null,-1)),x={class:"serve_info"},k=o(()=>Vue.createElementVNode("p",null,"\u5BA2\u670DQQ\u53F7",-1)),g=["data-copy"],C={key:1,class:"phone"},b=o(()=>Vue.createElementVNode("div",{class:"serve_logo"},null,-1)),B={class:"serve_info"},q=o(()=>Vue.createElementVNode("p",null,"\u5BA2\u670D\u7535\u8BDD",-1)),S=["href"],w=o(()=>Vue.createElementVNode("span",{class:"copy_serve_info text-center"},"\u62E8\u6253",-1)),I={key:2,class:"wx"},D=o(()=>Vue.createElementVNode("div",{class:"serve_logo"},null,-1)),O={class:"serve_info"},Q=o(()=>Vue.createElementVNode("p",null,"\u5FAE\u4FE1",-1)),J=["data-copy"],T=o(()=>Vue.createElementVNode("p",{class:"hint_info"}," \u60A8\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u90FD\u53EF\u901A\u8FC7\u4EE5\u4E0A\u65B9\u5F0F\u4E0E\u6211\u4EEC\u8054\u7CFB\uFF01 ",-1));function j(e,s,c,n,t,l){const a=Vue.resolveComponent("nav-bar");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createElementVNode("div",m,[Vue.createVNode(a,{onOnClickBack:l.back,class:"nav",rightShow:!1},{default:Vue.withCtx(()=>[p]),_:1},8,["onOnClickBack"])]),Vue.createElementVNode("div",v,[h,Vue.createElementVNode("div",N,[Vue.createElementVNode("ul",E,[t.cms.qq?(Vue.openBlock(),Vue.createElementBlock("li",f,[y,Vue.createElementVNode("div",x,[k,Vue.createElementVNode("span",null,Vue.toDisplayString(t.cms.qq),1),Vue.createElementVNode("span",{onClick:s[0]||(s[0]=r=>l.copyContent(r)),class:"copytext-btn copy_serve_info text-center","data-copy":t.cms.qq},"\u590D\u5236",8,g)])])):Vue.createCommentVNode("",!0),t.cms.tel?(Vue.openBlock(),Vue.createElementBlock("li",C,[b,Vue.createElementVNode("div",B,[q,Vue.createElementVNode("a",{href:"tel:"+t.cms.tel},[Vue.createElementVNode("span",null,Vue.toDisplayString(t.cms.tel),1),w],8,S)])])):Vue.createCommentVNode("",!0),t.cms.weixin?(Vue.openBlock(),Vue.createElementBlock("li",I,[D,Vue.createElementVNode("div",O,[Q,Vue.createElementVNode("span",null,Vue.toDisplayString(t.cms.weixin),1),Vue.createElementVNode("span",{onClick:s[1]||(s[1]=r=>l.copyContent(r)),class:"copytext-btn copy_serve_info text-center","data-copy":t.cms.weixin},"\u590D\u5236",8,J)])])):Vue.createCommentVNode("",!0)]),T])])])}var G=i(u,[["render",j],["__scopeId","data-v-b8dd62fc"]]);export{G as default};
