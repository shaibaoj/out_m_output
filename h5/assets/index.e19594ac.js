import{t as r}from"./index.924dd15f.js";import{_ as g,i as d}from"./index.16607fdf.js";import{l as f}from"./loadmore.bf65e186.js";import{p as b}from"./index.2949d595.js";import{n as C}from"./navbar.0f6b75cf.js";import{b as k}from"./backtop.11b1b1f7.js";import{i as N}from"./infiniteloading.fd6d01a8.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const x={components:{loadMore:f,navBar:C,infiniteLoading:N,[d.name]:d,backTop:k,[r.name]:r,pinduoduo:b},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},search(){this.navToPage("/pinduoduo/search")},loadNav(){this.$http.post("/app.page.nav",{nav_types:"pinduoduo"}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.navList[this.current],n=t!=null?t.cid:"";this.loading||(e==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.pinduoduo.list",{ipage:this.page.ipage,cid:n,sort:"day_sales",pic_size:"300"}).then(s=>{this.loading=!1,s.data.items?e==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1}))},changeTab(e,t,n){this.current=t,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var e=[];return this.navList.forEach((t,n)=>{e.push({name:t.cid,cid:t.cid,label:t.name})}),e}}},c=e=>(Vue.pushScopeId("data-v-bc6c3ae4"),e=e(),Vue.popScopeId(),e),E={class:"page"},L={class:"fix"},I={class:"nav-box"},w=c(()=>Vue.createElementVNode("div",{class:"img"},"\u62FC\u591A\u591A\u4E13\u533A",-1)),y={class:"searchbox"},B=c(()=>Vue.createElementVNode("span",{class:"search-text"},"\u8F93\u5165\u5546\u54C1\u540D\u6216\u7C98\u8D34\u5B9D\u8D1D\u6807\u9898\u641C\u7D22",-1)),T=[B],D={class:"container"},M={class:"list"};function S(e,t,n,s,i,o){const l=Vue.resolveComponent("md-icon"),m=Vue.resolveComponent("nav-bar"),u=Vue.resolveComponent("md-tab-bar"),p=Vue.resolveComponent("pinduoduo"),h=Vue.resolveComponent("load-more"),_=Vue.resolveComponent("back-top"),V=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",L,[Vue.createElementVNode("div",I,[Vue.createVNode(m,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:t[0]||(t[0]=(...a)=>o.back&&o.back(...a))},[Vue.createVNode(l,{name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[w]),_:1}),Vue.createElementVNode("div",y,[Vue.createElementVNode("div",{class:"search-input",onClick:t[1]||(t[1]=(...a)=>o.search&&o.search(...a))},T)]),Vue.createVNode(u,{value:i.currentCid,"onUpdate:value":t[2]||(t[2]=a=>i.currentCid=a),onChange:o.changeTab,items:o.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",D,[Vue.createVNode(V,{onLoadmore:o.loadmore,"is-show-mod":!0,"has-more":i.page.hasMore,"is-loading":i.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",M,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i.items,(a,v)=>(Vue.openBlock(),Vue.createBlock(p,{key:v,itemData:a,goodsType:"list"},null,8,["itemData"]))),128))]),Vue.createVNode(h,{visible:i.loading},null,8,["visible"]),Vue.createVNode(_,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var O=g(x,[["render",S],["__scopeId","data-v-bc6c3ae4"]]);export{O as default};
