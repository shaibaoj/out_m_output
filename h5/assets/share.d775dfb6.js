var f=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&l(t,o,e[o]);if(a)for(var o of a(e))N.call(e,o)&&l(t,o,e[o]);return t},d=(t,e)=>v(t,y(e));import{d as m}from"./index.dd9760b9.js";import{_ as E,i as u,t as b}from"./index.8d7056f1.js";import{b as _}from"./index.2233bbb3.js";import{t as p}from"./index.12be6aae.js";import"./index.1c4feb57.js";import{n as x}from"./navbar.2ea483b9.js";import"./index.709eda75.js";/* empty css                                                           */const C={components:{[m.name]:m,[_.name]:_,navBar:x,[p.name]:p,[u.name]:u},data(){return{item_id:"",platform_type:0,goods:{},click:{},modelBtnText:"\u4E00\u952E\u590D\u5236\u53E3\u4EE4\u6587\u6848",output:null,qcode:"",show:!0}},mounted(){this.init()},methods:{init(){this.$route.query.item_id&&(this.item_id=this.$route.query.item_id,this.platform_type=this.$route.query.platform_type,this.qcode="https://img.marsnews.work/?w=300&url="+encodeURIComponent(this.shareUrl),this.query_detail(this.item_id,this.platform_type),this.query_click())},goHome(){this.navToPage("/",{})},navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},back(){this.$router.go(-1)},query_detail(t,e){this.$http.post("/cms.goods.view",{item_id:t,platform_type:e,template_type:"cms"}).then(o=>{o.data.item&&(this.goods=o.data.item),this.goods.goods&&this.click.tao_token&&this.loadImg()})},query_click(){this.$http.post("/cms.goods.click",{item_id:this.item_id,platform_type:this.platform_type}).then(t=>{t.data.click&&(this.click=t.data.click),this.goods.goods&&this.click.tao_token&&this.loadImg()})},copyContent(){var t=this.click.content+this.click.tao_token;const e=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),o=new ClipboardJS(".copytext-btn",{text(){return e}});o.on("success",c=>{c.clearSelection(),o.destroy(),this.copied=!0,b.info("\u590D\u5236\u6210\u529F"),this.modelBtnText="\u590D\u5236\u6210\u529F",setTimeout(()=>{this.copied=!1},2e3)}),o.on("error",function(c){console.log(c)})},loadImg(){setTimeout(()=>{this.print()},1e3)},print(){html2canvas(this.$refs.share,{backgroundColor:"#fff",allowTaint:!1,useCORS:!0}).then(t=>{let e=t.toDataURL("image/png");this.output=e,this.show=!1})}},computed:d(r(r({},Vuex.mapState(["hasLogin","userInfo"])),Vuex.mapGetters({inviteId:"inviteId"})),{shareUrl(){return"http://"+cmsConfig.cms_host+cmsConfig.base_url+"#/goods?item_id="+this.item_id+"&platform_type="+this.platform_type+"&invite_id="+(this.inviteId?this.inviteId:"")}})},h=t=>(Vue.pushScopeId("data-v-01e7b056"),t=t(),Vue.popScopeId(),t),w={class:"page"},S={class:"fix"},I={class:"nav-box"},q=h(()=>Vue.createElementVNode("div",{class:"img"},"\u5206\u4EAB\u5546\u54C1",-1)),T={key:0,class:"container"},B=["innerHTML"],D={class:"share-img",ref:"share"},L={class:"pic"},U=["src"],R={class:"item-box"},H={class:"title"},M={class:"item-box"},P={class:"coupon-price"},z=Vue.createTextVNode("\u5238\u540E\u4EF7:\xA5"),A={class:"volume"},G={class:"item-box"},J={class:"price"},O={key:0,class:"coupon-money"},j={class:"item-box"},F=["src"],K=h(()=>Vue.createElementVNode("span",{class:"longpress"},"\u957F\u5B89\u56FE\u7247\u8BC6\u522B\u4E8C\u7EF4\u7801\u9886\u5238",-1)),Q={class:"share_preview"},W=["src"],X={class:"operation"};function Y(t,e,o,c,s,i){const V=Vue.resolveComponent("md-icon"),g=Vue.resolveComponent("nav-bar");return Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createElementVNode("div",S,[Vue.createElementVNode("div",I,[Vue.createVNode(g,{class:"nav",rightShow:!1},{"back-icon":Vue.withCtx(()=>[Vue.createElementVNode("a",{onClick:e[0]||(e[0]=(...n)=>i.back&&i.back(...n))},[Vue.createVNode(V,{size:"lg",name:"arrow-left",color:"#fff"})])]),default:Vue.withCtx(()=>[q]),_:1})])]),s.goods.goods?(Vue.openBlock(),Vue.createElementBlock("div",T,[Vue.createElementVNode("div",{class:"goods_share_hreader copytext-btn",onClick:e[1]||(e[1]=(...n)=>i.copyContent&&i.copyContent(...n))},[Vue.createElementVNode("div",{class:"col-mar",innerHTML:s.goods.click.content+s.click.tao_token},null,8,B)]),Vue.withDirectives(Vue.createElementVNode("div",D,[Vue.createElementVNode("div",L,[Vue.createElementVNode("img",{src:s.goods.goods.pic_url,onLoad:e[2]||(e[2]=(...n)=>i.loadImg&&i.loadImg(...n)),alt:""},null,40,U)]),Vue.createElementVNode("div",R,[Vue.createElementVNode("div",H,Vue.toDisplayString(s.goods.goods.title),1)]),Vue.createElementVNode("div",M,[Vue.createElementVNode("span",P,[z,Vue.createElementVNode("em",null,Vue.toDisplayString(s.goods.price.buy_price),1)]),Vue.createElementVNode("span",A,Vue.toDisplayString(s.goods.goods.volume_str)+"\u4EBA\u5DF2\u8D2D\u4E70",1)]),Vue.createElementVNode("div",G,[Vue.createElementVNode("span",J,Vue.toDisplayString(s.goods.goods.user_type_name)+Vue.toDisplayString(s.goods.price.price),1),s.goods.coupon.money>0?(Vue.openBlock(),Vue.createElementBlock("span",O,[Vue.createElementVNode("i",null,Vue.toDisplayString(s.goods.coupon.money)+"\u5143\u5238",1)])):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",j,[Vue.createElementVNode("img",{class:"qrcode",src:s.qcode,alt:""},null,8,F),K])],512),[[Vue.vShow,s.show]]),Vue.createElementVNode("div",Q,[Vue.createElementVNode("img",{src:s.output},null,8,W)]),Vue.createElementVNode("div",X,[Vue.createElementVNode("div",{class:"operation-item buy-token copytext-btn",onClick:e[3]||(e[3]=(...n)=>i.copyContent&&i.copyContent(...n))},Vue.toDisplayString(s.modelBtnText),1)])])):Vue.createCommentVNode("",!0)])}var re=E(C,[["render",Y],["__scopeId","data-v-01e7b056"]]);export{re as default};
