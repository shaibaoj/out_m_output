import{a as r}from"./index.e1b6e690.js";import{_ as v,i as u}from"./index.d982108e.js";import{t as h}from"./index.99f4ab12.js";import"./index.709eda75.js";const p={components:{[h.name]:h,[u.name]:u,[r.name]:r},data(){return{history:[],hot:[],key:"",showActionSheet:!1,options:[{label:"\u662F",value:0},{label:"\u5426",value:1}],tips:"\u786E\u8BA4\u6E05\u7A7A\u641C\u7D22\u5386\u53F2\u5417\uFF1F"}},mounted(){this.history=this.getInpData(),this.queryItems()},methods:{goHome(){this.$nav.navTo("/",{})},back:function(){this.$router.go(-1)()},cleanKey:function(){this.key=""},closeActionSheet:function(){this.showActionSheet=!1},openActionSheet:function(){this.showActionSheet=!0},itemClick:function(o){o.index===0&&(this.showActionSheet=!1,this.history=[],localStorage.setItem("searchArr","[]"))},navAction(o){o&&(this.getSearchList(o),this.history=this.getInpData(),this.$nav.navTo("/pinduoduo/list",{q:o}))},queryItems(o){this.$http.post("/common.keyword.hot",{}).then(e=>{e.data.items&&(this.hot=e.data.items)})},query(){this.key&&(this.getSearchList(this.key),this.$nav.navTo("/pinduoduo/list",{q:this.key}))},getInpData:function(){return JSON.parse(localStorage.getItem("searchArr")||"[]")},getSearchList:function(o){var e=this.getInpData();e.forEach((l,a)=>{if(l===o)return e.splice(a,1),!0}),e.push(o),e.length>10&&e.splice(0,e.length-10),localStorage.setItem("searchArr",JSON.stringify(e))}}},d=o=>(Vue.pushScopeId("data-v-2f1501e6"),o=o(),Vue.popScopeId(),o),_={class:"container"},f={class:"searchbox"},g={class:"search-input"},k={key:0,class:"search-hot"},y={class:"hot-header"},S=d(()=>Vue.createElementVNode("div",{class:"search-title"},"\u641C\u7D22\u5386\u53F2",-1)),N={class:"hot-content"},E=["onClick"],A={class:"search-hot"},C=d(()=>Vue.createElementVNode("div",{class:"hot-header"},[Vue.createElementVNode("div",{class:"search-title"},"\u5927\u5BB6\u6B63\u5728\u641C")],-1)),I={class:"hot-content"},w=["onClick"],B=Vue.createStaticVNode('<div class="search-hot" data-v-2f1501e6><div class="hot-header" data-v-2f1501e6><div class="search-title" data-v-2f1501e6>\u641C\u7D22\u5C0F\u6280\u5DE7</div></div><div class="hot-info" data-v-2f1501e6><img class="help-img" src="https://img.youdanhui.cn/cms_img/2019-07-27/5d3bc469224f2.png" data-v-2f1501e6></div></div>',1);function x(o,e,l,a,s,n){const c=Vue.resolveComponent("md-icon"),m=Vue.resolveComponent("md-action-sheet");return Vue.openBlock(),Vue.createElementBlock("div",_,[Vue.createElementVNode("div",f,[Vue.createElementVNode("div",{class:"go-home",onClick:e[0]||(e[0]=(...t)=>n.goHome&&n.goHome(...t))},[Vue.createVNode(c,{name:"arrow-left",color:"#333",size:"lg"})]),Vue.createElementVNode("div",g,[Vue.withDirectives(Vue.createElementVNode("input",{"confirm-type":"search",placeholder:"",focus:!0,"auto-focus":"","placeholder-class":"input-plholder",class:"input","onUpdate:modelValue":e[1]||(e[1]=t=>s.key=t)},null,512),[[Vue.vModelText,s.key,void 0,{trim:!0}]]),Vue.withDirectives(Vue.createElementVNode("div",{onClick:e[2]||(e[2]=(...t)=>n.cleanKey&&n.cleanKey(...t))},[Vue.createVNode(c,{name:"close-fill",color:"#bcbcbc"})],512),[[Vue.vShow,s.key]])]),Vue.createElementVNode("div",{class:"query",onClick:e[3]||(e[3]=(...t)=>n.query&&n.query(...t))},"\u641C\u7D22")]),s.history.length>0?(Vue.openBlock(),Vue.createElementBlock("div",k,[Vue.createElementVNode("div",y,[S,Vue.createVNode(c,{size:"lg",name:"delete",color:"#333",onClick:n.openActionSheet},null,8,["onClick"])]),Vue.createElementVNode("div",N,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.history,(t,i)=>(Vue.openBlock(),Vue.createElementBlock("a",{key:i,onClick:V=>n.navAction(t),class:"tag"},[Vue.createElementVNode("span",null,Vue.toDisplayString(t),1)],8,E))),128))])])):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",A,[C,Vue.createElementVNode("div",I,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.hot,(t,i)=>(Vue.openBlock(),Vue.createElementBlock("a",{key:i,onClick:V=>n.navAction(t),class:"tag"},[Vue.createElementVNode("span",null,Vue.toDisplayString(t),1)],8,w))),128))])]),B,Vue.createVNode(m,{value:s.showActionSheet,"onUpdate:value":e[4]||(e[4]=t=>s.showActionSheet=t),title:s.tips,"cancel-text":"\u53D6\u6D88",options:s.options,onSelected:n.itemClick,onCancel:n.closeActionSheet},null,8,["value","title","options","onSelected","onCancel"])])}var T=v(p,[["render",x],["__scopeId","data-v-2f1501e6"]]);export{T as default};
