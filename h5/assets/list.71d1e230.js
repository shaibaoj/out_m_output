import{l as g}from"./loadmore.9bac3bf5.js";import{g as _}from"./index.c19e5653.js";import{s as c}from"./index.296314b3.js";import{_ as f,i as d}from"./index.fd5831e2.js";import{d as l}from"./index.13bcc8da.js";import"./index.96369f00.js";import{b as v}from"./backtop.91df56a4.js";import{i as k}from"./infiniteloading.ffbb6f3c.js";import"./core.esm.4957b73a.js";import"./index.709eda75.js";import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const y={components:{infiniteLoading:k,backTop:v,[d.name]:d,[c.name]:c,[l.name]:l,loadMore:g,goods:_},data(){return{searchKey:"",page:{ipage:0,price1:"",price2:"",hasMore:!0},tabIndex:0,isList:!1,items:[],loading:!1,model:{pinduoduo:0}}},mounted(){this.init()},methods:{init(){this.$route.query.q&&(this.searchKey=this.$route.query.q),this.queryItems(),this.queryMall()},navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},btnSelected:function(t){let e=t.currentTarget.dataset.index;this.attrData[e].selected=!this.attrData[e].selected,this.queryItems("tabChange")},screen:function(t){let e=t.currentTarget.dataset.index;e===4?this.isList=!this.isList:(this.tabIndex=parseInt(e),this.queryItems("tabChange"))},showList(){this.isList=!this.isList},closeDrawer:function(){this.drawer=!1,this.queryItems("tabChange")},clearDrawer:function(){this.page.price1="",this.page.price2="",this.drawer=!1},back:function(){this.drawer?this.closeDrawer():this.$nav.navTo("/search/search")},search:function(){this.$nav.navTo("/search/search")},search_pinduoduo:function(){this.$nav.navTo("/pinduoduo/list",{q:this.searchKey})},queryItems(t){t==="tabChange"&&(this.items=[],this.page.ipage=0,this.page.hasMore=!0),this.loading=!0;let e="";this.tabIndex===1?e="coupon_price":this.tabIndex===2?e="volume":e="",this.$http.post("/cms.goods.search",{ipage:this.page.ipage,q:this.searchKey,sort:e,start_price:this.page.price1,end_price:this.page.price2}).then(a=>{this.loading=!1,a.data.items&&a.data.items.length>0?(t==="tabChange"?this.items=a.data.items:this.items.push(...a.data.items),a.data.pager&&a.data.pager.ipage&&(this.page.ipage=parseInt(a.data.pager.ipage)+1)):this.page.hasMore=!1,this.loading=!1})},queryMall(t){this.$http.post("/cms.data.model",{}).then(e=>{e.data.model&&e.data.model.pinduoduo&&(this.model.pinduoduo=e.data.model.pinduoduo)})},loadmore:function(){this.loading&&!this.page.hasMore||this.queryItems()}}},u=t=>(Vue.pushScopeId("data-v-15eac180"),t=t(),Vue.popScopeId(),t),b={class:"page"},C={class:"header-box"},N={class:"header"},x={class:"searchbox search-mr"},E={key:0,class:"search-text"},I={key:1,class:"search-key"},q={class:"key-text"},B=u(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db4448f94e.png"},null,-1)),L=u(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db862e39c6.png"},null,-1)),w=[B,L],T={key:0,src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c9226b9ec6.png"},D={key:1,src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c905fc5059.png"},M={class:"header-screen"},K={class:"screen-top"},z={class:"container"};function S(t,e,a,A,i,s){const n=Vue.resolveComponent("md-icon"),m=Vue.resolveComponent("goods"),h=Vue.resolveComponent("load-more"),p=Vue.resolveComponent("back-top"),V=Vue.resolveComponent("infinite-loading");return Vue.openBlock(),Vue.createElementBlock("div",b,[Vue.createElementVNode("div",C,[Vue.createElementVNode("div",N,[Vue.createElementVNode("div",{class:"back",onClick:e[0]||(e[0]=(...o)=>s.back&&s.back(...o))},[Vue.createVNode(n,{name:"arrow-left",size:"lg",color:"#000"})]),Vue.createElementVNode("div",x,[Vue.createElementVNode("div",{class:"search-query",onClick:e[1]||(e[1]=(...o)=>s.search&&s.search(...o))},[i.searchKey?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("span",E,"\u641C\u7D22\u5B9D\u8D1D\u6807\u9898\u3001\u5173\u952E\u8BCD")),i.searchKey?(Vue.openBlock(),Vue.createElementBlock("div",I,[Vue.createElementVNode("div",q,Vue.toDisplayString(i.searchKey),1),Vue.createVNode(n,{name:"shut",size:"min",color:"#fff"})])):Vue.createCommentVNode("",!0)]),i.model.pinduoduo?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"search-type",onClick:e[2]||(e[2]=(...o)=>s.search_pinduoduo&&s.search_pinduoduo(...o))},w)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"icon",onClick:e[3]||(e[3]=(...o)=>s.showList&&s.showList(...o))},[i.isList?(Vue.openBlock(),Vue.createElementBlock("img",T)):(Vue.openBlock(),Vue.createElementBlock("img",D))])]),Vue.createElementVNode("div",M,[Vue.createElementVNode("div",K,[Vue.createElementVNode("div",{class:Vue.normalizeClass(["top-item",[i.tabIndex==0?"active bold":""]]),onClick:e[4]||(e[4]=(...o)=>s.screen&&s.screen(...o)),"data-index":"0"}," \u7EFC\u5408 ",2),Vue.createElementVNode("div",{class:Vue.normalizeClass(["top-item",[i.tabIndex==1?"active bold":""]]),onClick:e[5]||(e[5]=(...o)=>s.screen&&s.screen(...o)),"data-index":"1"}," \u4EF7\u683C ",2),Vue.createElementVNode("div",{class:Vue.normalizeClass(["top-item",[i.tabIndex==2?"active bold":""]]),onClick:e[6]||(e[6]=(...o)=>s.screen&&s.screen(...o)),"data-index":"2"}," \u9500\u91CF ",2)])])]),Vue.createElementVNode("div",z,[Vue.createVNode(V,{onLoadmore:s.loadmore,"is-show-mod":!0,"has-more":i.page.hasMore,"is-loading":i.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",{class:Vue.normalizeClass(i.isList?"product-list ":"product-container")},[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i.items,(o,r)=>(Vue.openBlock(),Vue.createBlock(m,{key:r,top:r+1,itemData:o,goodsType:i.isList?"list":""},null,8,["top","itemData","goodsType"]))),128))],2),Vue.createVNode(h,{visible:i.loading},null,8,["visible"]),Vue.createVNode(p,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"])])])}var Y=f(y,[["render",S],["__scopeId","data-v-15eac180"]]);export{Y as default};
