import{t as d}from"./index.6296ba4b.js";import{_ as V,i as c}from"./index.ac223714.js";import{l as f}from"./loadmore.70cf6551.js";import{g as b}from"./index.90f33e3e.js";import{n as C}from"./navbar.fe49430f.js";import{b as N}from"./backtop.a2b4585d.js";import{i as k}from"./infiniteloading.8b4f819a.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const x={components:{loadMore:f,navBar:C,infiniteLoading:k,[c.name]:c,backTop:N,[d.name]:d,goods:b},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app.page.nav",{nav_types:"qiang"}).then(t=>{if(t.data.item&&t.data.item.items){this.navList.push(...t.data.item.items);for(var e=0;e<this.navList.length;e++)this.navList[e].selected===!0&&(this.currentCid=this.navList[e].cid);this.loadData()}})},loadData(t){let e=this.navList[this.current],n=e?e.queryTime:"";t==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.qiang",{ipage:this.page.ipage,query_time:n,sort:"day_sales"}).then(s=>{this.loading=!1,s.data.items?t==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1})},changeTab(t,e,n){this.current=e,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var t=[];return this.navList.forEach((e,n)=>{t.push({name:e.cid,cid:e.cid,desc:e.desc,query_time:e.query_time,label:e.name})}),t}}},m=t=>(Vue.pushScopeId("data-v-b1512d5e"),t=t(),Vue.popScopeId(),t),y={class:"page"},E={class:"fix"},L={class:"nav-box"},q=m(()=>Vue.createElementVNode("div",{class:"img"},[Vue.createElementVNode("img",{src:"https://cmsstatic.dataoke.com//wap_new/ranking/images/halfday_title.svg?v=201909121016",alt:""})],-1)),w={class:"container"},I=m(()=>Vue.createElementVNode("div",{class:"ad"},[Vue.createElementVNode("img",{mode:"widthFix",src:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ndN8fW2JJhuZ5hetO-2053469401.png?v=276232"})],-1)),B={class:"list"};function D(t,e,n,s,a,o){const l=Vue.resolveComponent("md-icon"),u=Vue.resolveComponent("nav-bar"),p=Vue.resolveComponent("md-tab-bar"),h=Vue.resolveComponent("goods"),_=Vue.resolveComponent("load-more"),g=Vue.resolveComponent("back-top"),v=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",y,[Vue.createElementVNode("div",E,[Vue.createElementVNode("div",L,[Vue.createVNode(u,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:e[0]||(e[0]=(...i)=>o.back&&o.back(...i))},[Vue.createVNode(l,{name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[q]),_:1}),Vue.createVNode(p,{value:a.currentCid,"onUpdate:value":e[1]||(e[1]=i=>a.currentCid=i),onChange:o.changeTab,items:o.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",w,[Vue.createVNode(v,{onLoadmore:o.loadmore,"is-show-mod":!0,"has-more":a.page.hasMore,"is-loading":a.loading,threshold:200},{default:Vue.withCtx(()=>[I,Vue.createElementVNode("div",B,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.items,(i,r)=>(Vue.openBlock(),Vue.createBlock(h,{key:r,top:r+1,itemData:i,goodsType:"qiang"},null,8,["top","itemData"]))),128))]),Vue.createVNode(_,{visible:a.loading},null,8,["visible"]),Vue.createVNode(g,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var A=V(x,[["render",D],["__scopeId","data-v-b1512d5e"]]);export{A as default};
