import{l as k}from"./loadmore.0300c195.js";import{c as b,s as l,i as c}from"./index.053b3caa.js";import{g as N}from"./index.fc2ed3da.js";import{s as r}from"./index.ed325215.js";import{s as d}from"./index.f6c3edc8.js";import{_ as E,p as m,i as u,t as C}from"./index.8d7056f1.js";import"./index.1c4feb57.js";/* empty css              */import{b as w}from"./backtop.8a88d19a.js";import{i as q}from"./infiniteloading.a0684f44.js";import"./index.9867f519.js";import"./core.esm.4957b73a.js";import"./index.709eda75.js";import"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */const x={components:{[m.name]:m,loadMore:k,componentItem:b,goods:N,infiniteLoading:q,backTop:w,[u.name]:u,[r.name]:r,[d.name]:d,[l.name]:l,[c.name]:c},data(){return{scrollTop:0,hotSearch:["\u4F11\u95F2\u96F6\u98DF","\u81EA\u70ED\u706B\u9505","\u5C0F\u51B0\u7BB1\u8FF7\u4F60"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created(){},mounted(){this.query()},methods:{navToPage(e,o){this.$nextTick(()=>{this.$router.push({path:e,query:o||{}})})},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached(){this.loading||this.queryItems()},queryItems(){!this.query_goods_url||this.page.hasMore===!1||(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then(e=>{e.data.items?this.items.push(...e.data.items):this.page.hasMore=!1,this.loading=!1}))},query(){this.$http.post("/app.page.page",{page_id:"youdanhui"}).then(e=>{e.data.components&&e.data.components&&this.components.push(...e.data.components),e.data.items&&e.data.items.url&&(this.query_goods_url=e.data.items.url,this.queryItems(),this.queryNotice())})},queryNotice(){this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then(e=>{e.data.item&&e.data.item.url&&(e.data.item.code?this.modal.bg=e.data.item.window_tkl_img:this.modal.bg=e.data.item.window_img,e.data.item.url&&(this.modal.url=e.data.item.url),this.modal.copy_content=e.data.item.code,this.modal.dialog=!0)})},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll(e){this.scrollTop=e.scrollTop},copyPop(){this.modal.copy_content&&this.modal.copy_content!=""?this.copyContent():window.location.href=this.modal.url},copyContent(){""+this.modal.copy_content;const e=this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),o=new ClipboardJS(".modal-custom",{text(){return e}});console.log("adfasdfasd"),o.on("success",n=>{console.log(n),n.clearSelection(),o.destroy(),this.copied=!0,this.modal.dialog=!1,C.info("\u590D\u5236\u6210\u529F,\u6253\u5F00\u3010\u624B-\u673A-\u6DD8-\u5B9D\u3011\u5373\u53EF\u9886\u5238\u8D2D\u4E70"),setTimeout(()=>{this.copied=!1},2e3)}),o.on("error",function(n){console.log(n)})}}},p=e=>(Vue.pushScopeId("data-v-e973bd18"),e=e(),Vue.popScopeId(),e),B={class:"container"},T={class:"header"},I=p(()=>Vue.createElementVNode("img",{class:"icon",src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"},null,-1)),S=[I],P={class:"product-box"},L=p(()=>Vue.createElementVNode("div",{class:"group-name"},[Vue.createElementVNode("span",null,"\u70ED\u95E8\u63A8\u8350")],-1)),M={class:"product-container"},R=["src"],U={class:"modal-custom-code"};function z(e,o,n,D,a,s){const h=Vue.resolveComponent("md-icon"),_=Vue.resolveComponent("component-item"),g=Vue.resolveComponent("goods"),V=Vue.resolveComponent("load-more"),f=Vue.resolveComponent("back-top"),y=Vue.resolveComponent("infinite-loading"),v=Vue.resolveComponent("md-popup");return Vue.openBlock(),Vue.createElementBlock("div",B,[Vue.createVNode(y,{onLoadmore:s.$_onEndReached,"is-show-mod":!0,"has-more":a.page.hasMore,"is-loading":a.loading,threshold:200},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",T,[Vue.createElementVNode("div",{class:"category","hover-class":"opcity","hover-stay-time":150,onClick:o[0]||(o[0]=(...t)=>s.classify&&s.classify(...t))},S),Vue.createElementVNode("div",{class:"rolling-search",onClick:o[2]||(o[2]=(...t)=>s.search&&s.search(...t))},[Vue.createElementVNode("div",null,[Vue.createVNode(h,{size:"lg",name:"search",color:"#999"})]),Vue.createElementVNode("div",{class:"hot-item",onClick:o[1]||(o[1]=(...t)=>s.search&&s.search(...t))}," \u8F93\u5165\u5546\u54C1\u540D\u6216\u7C98\u8D34\u5B9D\u8D1D\u6807\u9898\u641C\u7D22 ")])]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.components,(t,i)=>(Vue.openBlock(),Vue.createBlock(_,{"item-data":t,key:i},null,8,["item-data"]))),128)),Vue.createElementVNode("div",P,[L,Vue.createElementVNode("div",M,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.items,(t,i)=>(Vue.openBlock(),Vue.createBlock(g,{key:i,"item-data":t,"goods-type":"column"},null,8,["item-data"]))),128))])]),Vue.createVNode(V,{visible:a.loading},null,8,["visible"]),Vue.createVNode(f,{distance:0,bottom:100,right:20})]),_:1},8,["onLoadmore","has-more","is-loading"]),Vue.createVNode(v,{closable:!0,value:a.modal.dialog,"onUpdate:value":o[4]||(o[4]=t=>a.modal.dialog=t),"mask-closable":!0},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",{class:"modal-custom",onClick:o[3]||(o[3]=t=>s.copyPop())},[Vue.createElementVNode("img",{src:a.modal.bg,class:"bg",alt:""},null,8,R),Vue.createElementVNode("div",U,Vue.toDisplayString(a.modal.copy_content),1)])]),_:1},8,["value"])])}var oe=E(x,[["render",z],["__scopeId","data-v-e973bd18"]]);export{oe as default};
