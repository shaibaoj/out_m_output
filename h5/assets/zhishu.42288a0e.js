import{t as d}from"./index.80ee69be.js";import{_ as V,i as c}from"./index.66dd7f71.js";import{l as v}from"./loadmore.e3327884.js";import{g as f}from"./index.b36d852f.js";import{n as b}from"./navbar.70504331.js";import{b as C}from"./backtop.3599e3fc.js";import{i as k}from"./infiniteloading.851366cc.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const N={components:{loadMore:v,navBar:b,infiniteLoading:k,[c.name]:c,backTop:C,[d.name]:d,goods:f},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app.page.nav",{nav_types:""}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.navList[this.current],n=t?t.cid:"";this.loading||(e==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.list",{ipage:this.page.ipage,cid:n,sort:"weight",pic_size:"300"}).then(s=>{this.loading=!1,s.data.items?e==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1}))},changeTab(e,t,n){this.current=t,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var e=[];return this.navList.forEach((t,n)=>{e.push({name:t.cid,cid:t.cid,label:t.name})}),e}}},x=e=>(Vue.pushScopeId("data-v-2b8955ed"),e=e(),Vue.popScopeId(),e),E={class:"page"},L={class:"fix"},w={class:"nav-box"},I=x(()=>Vue.createElementVNode("div",{class:"img"},"\u4F18\u9009\u5B9D\u8D1D",-1)),B={class:"container"},D={class:"list"};function y(e,t,n,s,o,a){const m=Vue.resolveComponent("md-icon"),l=Vue.resolveComponent("nav-bar"),p=Vue.resolveComponent("md-tab-bar"),u=Vue.resolveComponent("goods"),h=Vue.resolveComponent("load-more"),_=Vue.resolveComponent("back-top"),g=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",L,[Vue.createElementVNode("div",w,[Vue.createVNode(l,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:t[0]||(t[0]=(...i)=>a.back&&a.back(...i))},[Vue.createVNode(m,{name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[I]),_:1}),Vue.createVNode(p,{value:o.currentCid,"onUpdate:value":t[1]||(t[1]=i=>o.currentCid=i),onChange:a.changeTab,items:a.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",B,[Vue.createVNode(g,{onLoadmore:a.loadmore,"is-show-mod":!0,"has-more":o.page.hasMore,"is-loading":o.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",D,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.items,(i,r)=>(Vue.openBlock(),Vue.createBlock(u,{key:r,top:r+1,itemData:i,goodsType:"zhishu"},null,8,["top","itemData"]))),128))]),Vue.createVNode(h,{visible:o.loading},null,8,["visible"]),Vue.createVNode(_,{distance:400,bottom:200,right:60})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var J=V(N,[["render",y],["__scopeId","data-v-2b8955ed"]]);export{J as default};
