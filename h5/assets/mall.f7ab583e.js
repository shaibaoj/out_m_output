import{s as n}from"./index.2271d807.js";import{_ as m,i as l}from"./index.ac223714.js";import"./index.f5910441.js";import"./core.esm.4957b73a.js";import"./index.709eda75.js";const d={components:{[l.name]:l,[n.name]:n},data(){return{tabbar:[],items:[],navItem:{},height:0,currentTab:0,scrollTop:0}},created(){},mounted(){this.query()},methods:{goHome(){this.$nav.navTo("/",{})},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},search(){this.navToPage("/search/search")},query(){this.$http.post("/cms.mall.type_list",{}).then(e=>{e.data.items&&(this.tabbar=e.data.items),this.query_items()})},query_items(){this.navItem=this.tabbar[this.currentTab],this.navItem.cid,this.$http.post("/cms.mall.list",{type_name:this.navItem.name}).then(e=>{e.data.items&&(this.items=e.data.items)})},swichNav:function(e){let t=e.currentTarget.dataset.current;if(this.currentTab===t)return!1;this.currentTab=t,this.checkCor(),this.query_items()},checkCor:function(){let e=this;e.currentTab>7?e.scrollTop=500:e.scrollTop=0},navAction(e){window.location.href=e.click_url},load_action(e){},open_web(e){window.location.href=e.params.url}}},_=e=>(Vue.pushScopeId("data-v-745fdc4a"),e=e(),Vue.popScopeId(),e),h={class:"container"},V={class:"searchbox"},p=_(()=>Vue.createElementVNode("span",{class:"search-text"},"\u641C\u7D22\u5B9D\u8D1D",-1)),v=[p],f=["data-current"],g={class:"page-view"},k={class:"class-box"},b={class:"class-item"},N={class:"class-name"},w={class:"g-container-list"},E=["href"],y=["src"],T={class:"g-title"},x={key:0,class:"g-rate"};function B(e,t,C,S,a,o){const i=Vue.resolveComponent("md-icon"),r=Vue.resolveComponent("md-scroll-view");return Vue.openBlock(),Vue.createElementBlock("div",h,[Vue.createElementVNode("div",V,[Vue.createElementVNode("div",{class:"go-home",onClick:t[0]||(t[0]=(...s)=>o.goHome&&o.goHome(...s))},[Vue.createVNode(i,{name:"arrow-left",color:"#fff",size:"lg"})]),Vue.createElementVNode("div",{class:"search-input",onClick:t[1]||(t[1]=(...s)=>o.search&&o.search(...s))},v)]),Vue.createVNode(r,{"scrolling-x":!1,"scroll-with-animation":"",class:"tab-view","scroll-top":a.scrollTop},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.tabbar,(s,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:c,class:Vue.normalizeClass(["tab-bar-item",[a.currentTab==c?"active":""]]),"data-current":c,onClick:t[2]||(t[2]=Vue.withModifiers((...u)=>o.swichNav&&o.swichNav(...u),["stop"]))},[Vue.createElementVNode("span",null,Vue.toDisplayString(s.name),1)],10,f))),128))]),_:1},8,["scroll-top"]),Vue.createVNode(r,{"scrolling-x":!1,class:"right-box"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",g,[Vue.createElementVNode("div",k,[Vue.createElementVNode("div",b,[Vue.createElementVNode("div",N,Vue.toDisplayString(a.navItem.name),1),Vue.createElementVNode("div",w,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.items,(s,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:c,class:"g-box"},[Vue.createElementVNode("a",{href:s.click_url,target:"_blank"},[Vue.createElementVNode("img",{src:s.pic_url,class:"g-image"},null,8,y),Vue.createElementVNode("div",T,Vue.toDisplayString(s.sitename),1),s.commission_rate?(Vue.openBlock(),Vue.createElementBlock("div",x," \u6700\u9AD8\u8FD4"+Vue.toDisplayString(s.commission_rate),1)):Vue.createCommentVNode("",!0)],8,E)]))),128))])])])])]),_:1})])}var F=m(d,[["render",B],["__scopeId","data-v-745fdc4a"]]);export{F as default};
