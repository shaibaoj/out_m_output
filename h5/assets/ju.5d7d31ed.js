import{t as d}from"./index.924dd15f.js";import{_ as v,i as c}from"./index.16607fdf.js";import{l as f}from"./loadmore.bf65e186.js";import{g as b}from"./index.e4ecf96b.js";import{n as C}from"./navbar.0f6b75cf.js";import{b as k}from"./backtop.11b1b1f7.js";import{i as N}from"./infiniteloading.fd6d01a8.js";import"./core.esm.4957b73a.js";/* empty css                                                           */import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const x={components:{loadMore:f,navBar:C,infiniteLoading:N,[c.name]:c,backTop:k,[d.name]:d,goods:b},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app.page.nav",{nav_types:""}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.navList[this.current],n=t?t.cid:"";e==="tabChange"&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.ju",{ipage:this.page.ipage,cid:n}).then(s=>{this.loading=!1,s.data.items?e==="tabChange"?this.items=s.data.items:this.items.push(...s.data.items):this.page.hasMore=!1})},changeTab(e,t,n){this.current=t,this.loadData("tabChange")},tabClick(e){this.tabCurrentIndex=e},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var e=[];return this.navList.forEach((t,n)=>{e.push({name:t.cid,cid:t.cid,label:t.name})}),e}}},m=e=>(Vue.pushScopeId("data-v-43e213bb"),e=e(),Vue.popScopeId(),e),E={class:"page"},w={class:"fix"},B={class:"nav-box"},I=m(()=>Vue.createElementVNode("div",{class:"img"},[Vue.createElementVNode("img",{src:"https://cmsstatic.dataoke.com//wap_new/ranking/images/z_title.svg?v=201909111651",alt:""})],-1)),L={class:"container"},y=m(()=>Vue.createElementVNode("div",{class:"ad"},[Vue.createElementVNode("img",{mode:"widthFix",src:"https://img.alicdn.com/imgextra/i2/2053469401/TB24ylugpkoBKNjSZFkXXb4tFXa_!!2053469401.png"})],-1)),D={class:"list"};function j(e,t,n,s,o,a){const l=Vue.resolveComponent("md-icon"),p=Vue.resolveComponent("nav-bar"),u=Vue.resolveComponent("md-tab-bar"),h=Vue.resolveComponent("goods"),_=Vue.resolveComponent("load-more"),g=Vue.resolveComponent("back-top"),V=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",w,[Vue.createElementVNode("div",B,[Vue.createVNode(p,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:t[0]||(t[0]=(...i)=>a.back&&a.back(...i))},[Vue.createVNode(l,{size:"lg",name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[I]),_:1}),Vue.createVNode(u,{value:o.currentCid,"onUpdate:value":t[1]||(t[1]=i=>o.currentCid=i),onChange:a.changeTab,items:a.navItems,maxLength:5},null,8,["value","onChange","items"])])]),Vue.createElementVNode("div",L,[Vue.createVNode(V,{onLoadmore:a.loadmore,"is-show-mod":!0,"has-more":o.page.hasMore,"is-loading":o.loading,threshold:200},{default:Vue.withCtx(()=>[y,Vue.createElementVNode("div",D,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.items,(i,r)=>(Vue.openBlock(),Vue.createBlock(h,{key:r,top:r+1,itemData:i,goodsType:"ju"},null,8,["top","itemData"]))),128))]),Vue.createVNode(_,{visible:o.loading},null,8,["visible"]),Vue.createVNode(g,{distance:400,bottom:200,right:60})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var G=v(x,[["render",j],["__scopeId","data-v-43e213bb"]]);export{G as default};
