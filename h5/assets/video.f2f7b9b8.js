import{t as r}from"./index.80ee69be.js";import{_ as v,i as d}from"./index.66dd7f71.js";import{l as V}from"./loadmore.e3327884.js";import{g as f}from"./index.b36d852f.js";import{n as b}from"./navbar.70504331.js";import{b as C}from"./backtop.3599e3fc.js";import{i as k}from"./infiniteloading.851366cc.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const N={components:{loadMore:V,navBar:b,infiniteLoading:k,[d.name]:d,backTop:C,[r.name]:r,goods:f},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app.page.nav",{nav_types:""}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.navList[this.current],n=t?t.cid:"";this.loading||(e==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.list",{ipage:this.page.ipage,cid:n,video:1,sort:"day_sales",pic_size:"300"}).then(s=>{this.loading=!1,s.data.items?e==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1}))},changeTab(e,t,n){this.current=parseInt(t),this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var e=[];return this.navList.forEach((t,n)=>{e.push({name:t.cid,cid:t.cid,label:t.name})}),e}}},x=e=>(Vue.pushScopeId("data-v-59ff833c"),e=e(),Vue.popScopeId(),e),E={class:"page"},I={class:"fix"},L={class:"nav-box"},w=x(()=>Vue.createElementVNode("div",{class:"img"},"\u6296\u5238\u8D2D\u7269",-1)),B={class:"container"},y={class:"list"};function D(e,t,n,s,o,a){const c=Vue.resolveComponent("md-icon"),l=Vue.resolveComponent("nav-bar"),m=Vue.resolveComponent("md-tab-bar"),p=Vue.resolveComponent("goods"),u=Vue.resolveComponent("load-more"),h=Vue.resolveComponent("back-top"),_=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",I,[Vue.createElementVNode("div",L,[Vue.createVNode(l,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:t[0]||(t[0]=(...i)=>a.back&&a.back(...i))},[Vue.createVNode(c,{name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[w]),_:1}),Vue.createVNode(m,{value:o.currentCid,"onUpdate:value":t[1]||(t[1]=i=>o.currentCid=i),onChange:a.changeTab,items:a.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",B,[Vue.createVNode(_,{onLoadmore:a.loadmore,"is-show-mod":!0,"has-more":o.page.hasMore,"is-loading":o.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",y,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.items,(i,g)=>(Vue.openBlock(),Vue.createBlock(p,{key:g,itemData:i,goodsType:"video-list"},null,8,["itemData"]))),128))]),Vue.createVNode(u,{visible:o.loading},null,8,["visible"]),Vue.createVNode(h,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var J=v(N,[["render",D],["__scopeId","data-v-59ff833c"]]);export{J as default};
