var h=Object.defineProperty,v=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var l=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))f.call(t,o)&&l(e,o,t[o]);if(d)for(var o of d(t))k.call(t,o)&&l(e,o,t[o]);return e},m=(e,t)=>v(e,g(t));import{c as y}from"./index.b0b681d2.js";import{t as E,_ as p}from"./index.66dd7f71.js";import"./index.ed325215.js";import"./core.esm.4957b73a.js";import"./index.060f35a4.js";import"./index.b36d852f.js";import"./index.10b1252d.js";import"./index.709eda75.js";import"./index.0c781957.js";const x={props:{itemData:{type:Object}},data(){return{}},computed:c({},Vuex.mapState(["hasLogin","userInfo"])),methods:{navAction(e){this.$nav.toNav(e)},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},copyContent(){const e=this.itemData.invite_code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new ClipboardJS(".copytext-btn",{text(){return e}});t.on("success",o=>{o.clearSelection(),t.destroy(),this.copied=!0,E.info("\u9080\u8BF7\u7801\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),setTimeout(()=>{this.copied=!1},2e3)}),t.on("error",function(o){console.log(o)})}}},r=e=>(Vue.pushScopeId("data-v-59c659df"),e=e(),Vue.popScopeId(),e),b={class:"user-section"},B=r(()=>Vue.createElementVNode("div",{class:"bg"},null,-1)),N={class:"user-box"},T={class:"user-info-box"},C=["src"],$={key:0,class:"info-box"},I={class:"username"},S={key:1,class:"info-box"},D=r(()=>Vue.createElementVNode("span",{class:"username"},"\u767B\u9646",-1)),q=[D],P={key:0,class:"vip-card-box"},L={class:"vip-card-btn"},F={class:"vip-card-content"},w={key:1,class:"vip-card-box no-member"},j={class:"vip-card-btn"},A=r(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-13/5d7afff868044.png"},null,-1)),J=Vue.createTextVNode(" \u6536\u85CF "),M=[A,J],O=r(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-13/5d7b00ac9638c.png"},null,-1)),Y=Vue.createTextVNode(" \u6D4F\u89C8\u8BB0\u5F55 "),z=[O,Y];function G(e,t,o,_,i,n){return Vue.openBlock(),Vue.createElementBlock("div",b,[B,Vue.createElementVNode("div",N,[Vue.createElementVNode("div",T,[Vue.createElementVNode("div",{class:"portrait-box",onClick:t[0]||(t[0]=s=>n.navToPage("/user/set/set"))},[Vue.createElementVNode("img",{class:"portrait",src:e.userInfo.img_url||"https://img.youdanhui.cn/cms_img/2019-08-28/5d663304b1244.png"},null,8,C)]),e.hasLogin?(Vue.openBlock(),Vue.createElementBlock("div",$,[Vue.createElementVNode("span",I,Vue.toDisplayString(e.userInfo.user_name||""),1),Vue.createElementVNode("span",{class:"invite-code copytext-btn",onClick:t[1]||(t[1]=(...s)=>n.copyContent&&n.copyContent(...s))},"\u9080\u8BF7\u7801:"+Vue.toDisplayString(o.itemData.invite_code||"")+" (\u590D\u5236)",1)])):(Vue.openBlock(),Vue.createElementBlock("div",S,q))]),o.itemData.has_member==1?(Vue.openBlock(),Vue.createElementBlock("div",P,[Vue.createElementVNode("div",L,[Vue.createElementVNode("div",F,"\u4F59\u989D: "+Vue.toDisplayString(o.itemData.money)+"\u5143",1),Vue.createElementVNode("div",{class:"b-btn",onClick:t[2]||(t[2]=s=>n.navToPage("/user/payment"))},"\u63D0\u73B0")])])):(Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createElementVNode("div",j,[Vue.createElementVNode("div",{class:"vip-card-content",onClick:t[3]||(t[3]=s=>n.navToPage("/user/favorite"))},M),Vue.createElementVNode("div",{class:"vip-card-content",onClick:t[4]||(t[4]=s=>n.navToPage("/user/history"))},z)])]))])])}var H=p(x,[["render",G],["__scopeId","data-v-59c659df"]]);const K={components:{componentItem:y,uheader:H},data(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,components:[]}},mounted(){this.query(),this.query_info()},unmounted(){},computed:c({},Vuex.mapState(["hasLogin","userInfo"])),methods:m(c({},Vuex.mapMutations(["login"])),{navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},query(){this.$http.post("/app.page.page",{page_id:"member"}).then(e=>{e.data.components&&e.data.components&&this.components.push(...e.data.components)})},query_info(){this.$http.post("/cms.member.info.getinfo",{}).then(e=>{e.data.user&&e.data.user.id&&this.login(e.data.user)})}})},Q={class:"container"},R={class:"cover-container"};function U(e,t,o,_,i,n){const s=Vue.resolveComponent("uheader"),V=Vue.resolveComponent("component-item");return Vue.openBlock(),Vue.createElementBlock("div",Q,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i.components,(a,u)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[a.type=="header"?(Vue.openBlock(),Vue.createBlock(s,{key:0,"item-data":a.data},null,8,["item-data"])):Vue.createCommentVNode("",!0)],64))),256)),Vue.createElementVNode("div",R,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i.components,(a,u)=>(Vue.openBlock(),Vue.createBlock(V,{"item-data":a,key:u},null,8,["item-data"]))),128))])])}var re=p(K,[["render",U],["__scopeId","data-v-ffd1f5e8"]]);export{re as default};
