import{t as r}from"./index.811a92c3.js";import{_ as V,i as d}from"./index.7a16820c.js";import{l as v}from"./loadmore.53f23bce.js";import{g as f}from"./index.79f19c7a.js";import{n as b}from"./navbar.5a7b3370.js";import{b as C}from"./backtop.be859d21.js";import{i as k}from"./infiniteloading.fc7f9565.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const N={components:{loadMore:v,navBar:b,infiniteLoading:k,[d.name]:d,backTop:C,[r.name]:r,goods:f},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app.page.nav",{nav_types:""}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.navItems[this.current],n=t?t.cid:"";this.loading||(e==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.list",{ipage:this.page.ipage,cid:n,sort:"day_sales",pic_size:"300"}).then(s=>{this.loading=!1,s.data.items?e==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1}))},changeTab(e,t,n){this.current=t,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){const e=[];return this.navList.forEach((t,n)=>{e.push({name:t.cid,cid:t.cid,label:t.name})}),e}}},x=e=>(Vue.pushScopeId("data-v-218dd1a1"),e=e(),Vue.popScopeId(),e),E={class:"page"},I={class:"fix"},w={class:"nav-box"},L=x(()=>Vue.createElementVNode("div",{class:"img"},[Vue.createElementVNode("img",{src:"https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201909121016",alt:""})],-1)),B={class:"container"},y={class:"list"};function D(e,t,n,s,o,a){const c=Vue.resolveComponent("md-icon"),m=Vue.resolveComponent("nav-bar"),l=Vue.resolveComponent("md-tab-bar"),p=Vue.resolveComponent("goods"),u=Vue.resolveComponent("load-more"),h=Vue.resolveComponent("back-top"),_=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",I,[Vue.createElementVNode("div",w,[Vue.createVNode(m,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:t[0]||(t[0]=(...i)=>a.back&&a.back(...i))},[Vue.createVNode(c,{name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[L]),_:1}),Vue.createVNode(l,{value:o.currentCid,"onUpdate:value":t[1]||(t[1]=i=>o.currentCid=i),onChange:a.changeTab,items:a.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",B,[Vue.createVNode(_,{onLoadmore:a.loadmore,"is-show-mod":!0,"has-more":o.page.hasMore,"is-loading":o.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",y,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.items,(i,g)=>(Vue.openBlock(),Vue.createBlock(p,{key:g,itemData:i,goodsType:"list"},null,8,["itemData"]))),128))]),Vue.createVNode(u,{visible:o.loading},null,8,["visible"]),Vue.createVNode(h,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var J=V(N,[["render",D],["__scopeId","data-v-218dd1a1"]]);export{J as default};
