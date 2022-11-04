var T=Object.defineProperty;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var V=(o,e,s)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,_=(o,e)=>{for(var s in e||(e={}))C.call(e,s)&&V(o,s,e[s]);if(h)for(var s of h(e))x.call(e,s)&&V(o,s,e[s]);return o};import{d as p}from"./index.13bcc8da.js";import{_ as z,p as v,i as g,t as D}from"./index.fd5831e2.js";import{b as k}from"./index.bb4ca433.js";import{s as f}from"./index.ed325215.js";import{t as y}from"./index.5c14a821.js";import"./index.96369f00.js";/* empty css              */import"./index.709eda75.js";import"./core.esm.4957b73a.js";var E="40%",b="100%",W={loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},row:{type:Number,default:3},title:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:E},rowWidth:{type:[Number,String,Array],default:b},avatarSize:{type:String,default:"md"}},A=o=>{const e=t=>typeof t=="number";return{getRowWidth:t=>{const l=o.rowWidth;if(o&&Array.isArray(l)){const d=l[t];return e(d)?`${d}%`:d}else if(l)return e(l)?`${l}%`:l;return b},getTitleWidth:()=>{const t=o.titleWidth;return t?e(t)?`${t}%`:t:E}}},w=Vue.defineComponent({name:"MdSkeleton",props:W,setup(o){return _({},A(o))}}),q={key:0,class:"md-skeleton"},L={class:"md-skeleton-content"},F={key:1};function I(o,e){return o.loading?(Vue.openBlock(),Vue.createBlock("div",q,[o.avatar?(Vue.openBlock(),Vue.createBlock("div",{key:0,class:{"md-skeleton-avatar":!0,"md-skeleton-avatar-large":o.avatarSize==="lg","md-skeleton-avatar-small":o.avatarSize==="sm"}},null,2)):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",L,[o.title?(Vue.openBlock(),Vue.createBlock("h4",{key:0,class:"md-skeleton-title",style:{width:o.getTitleWidth()}},null,4)):Vue.createCommentVNode("v-if",!0),(Vue.openBlock(!0),Vue.createBlock(Vue.Fragment,null,Vue.renderList(o.row,s=>(Vue.openBlock(),Vue.createBlock("div",{key:s,class:"md-skeleton-row",style:{width:s===o.row?"60%":o.getRowWidth(s-1)}},null,4))),128))])])):(Vue.openBlock(),Vue.createBlock("div",F,[Vue.renderSlot(o.$slots,"default")]))}w.render=I;var a=w;a.install=o=>{o.component(a.name,a)};var N=a;const U={components:{[p.name]:p,[k.name]:k,[f.name]:f,[y.name]:y,[N.name]:N,[v.name]:v,[g.name]:g},data(){return{item_id:"",platform_type:0,goods:{},click:{},favorite:!1,modalToken:!1,modelBtnText:"\u4E00\u952E\u590D\u5236",modalAuthorize:!1,video:!1,clickLoading:!1,height:64,top:0,scrollH:0,opcity:0,iconOpcity:.5,bannerIndex:0,menuShow:!1,popupShow:!1,value:1,danmuList:[{text:"",color:"#ff0000",time:3}],showTokenBtn:!0}},mounted(){this.init()},methods:{init(){this.$route.query.video&&(this.video=!0),this.$route.query.item_id&&(this.item_id=this.$route.query.item_id,this.goods_sign=this.$route.query.goods_sign,this.platform_type=this.$route.query.platform_type,this.query_detail(this.item_id,this.goods_sign,this.platform_type),this.pin(this.item_id,this.goods_sign,this.platform_type))},goHome(){this.navToPage("/",{})},navAction(o){this.$nav.toNav(o)},navToPage(o,e){this.$nextTick(()=>{this.$router.push({path:o,query:e||{}})})},back(){this.$router.go(-1)},openMenu:function(){this.menuShow=!0},closeMenu:function(){this.menuShow=!1},showPopup:function(){this.popupShow=!0},hidePopup:function(){this.popupShow=!1},change:function(o){this.value=o.value},common:function(){this.tui.toast("\u529F\u80FD\u5F00\u53D1\u4E2D~")},toFavorite(){this.$http.post("/cms.member.favorite.pin",{object_type:"goods",item_id:this.item_id,goods_sign:this.goods_sign,platform_type:this.platform_type}).then(o=>{o.code===0?this.favorite=!0:this.favorite=!1})},buy(){this.click.url?this.click.authorize_url?this.modalAuthorize=!0:this.$common.isWeiXin()&&this.showTokenBtn?this.modalToken=!0:window.location.href=this.click.url:this.$common.isWeiXin()?this.query_click(this.item_id,this.goods_sign,this.platform_type,2):this.query_click(this.item_id,this.goods_sign,this.platform_type,1)},showToken(){this.click.url?this.click.authorize_url?this.modalAuthorize=!0:this.modalToken=!0:this.query_click(this.item_id,this.goods_sign,this.platform_type,2)},query_detail(o,e,s){let c="/cms.goods.view";this.$http.post(c,{item_id:o,goods_sign:e,platform_type:s,cms_url:encodeURIComponent(window.location.href)}).then(t=>{t.data.item&&(this.goods=t.data.item)}),this.$http.post("/cms.member.favorite.view",{object_type:"goods",object_id:o,platform_type:s}).then(t=>{t.data.item&&t.data.item.id?this.favorite=!0:this.favorite=!1})},query_click(o,e,s,c){this.clickLoading=!0,this.$http.post("/cms.goods.click",{item_id:o,goods_sign:e,platform_type:s,cms_url:encodeURIComponent(window.location.href)}).then(t=>{t.data.click&&t.data.click.url&&(this.click=t.data.click,c===1?this.buy():c===2&&this.showToken()),this.clickLoading=!1})},pin(o,e,s){this.$http.post("/cms.member.history.pin",{object_type:"goods",item_id:o,goods_sign:e,platform_type:s}).then(c=>{})},hideToken(){this.modalToken=!1},hideAuthorize(){this.modalAuthorize=!1},copyContent(){""+this.click.tao_token;const o=this.click.tao_token.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new ClipboardJS(".copytext-btn",{text(){return o}});e.on("success",s=>{s.clearSelection(),e.destroy(),this.copied=!0,D.info("\u4EE3\u7801\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),this.modelBtnText="\u590D\u5236\u6210\u529F",setTimeout(()=>{this.copied=!1},2e3)}),e.on("error",function(s){console.log(s)})},toAuthorize(){window.location.href=this.click.authorize_url},tobuy(){this.modalAuthorize=!1,this.click.authorize_url=null,this.buy()},toShare(){this.$nextTick(()=>{this.$router.push({path:"/share",query:{item_id:this.item_id,goods_sign:this.goods_sign,platform_type:this.platform_type}})})}}},n=o=>(Vue.pushScopeId("data-v-17d46c92"),o=o(),Vue.popScopeId(),o),H={key:0,class:"container"},R={class:"header-box"},j=n(()=>Vue.createElementVNode("div",{class:"header"},null,-1)),P={class:"header-icon"},M={key:0,class:"banner-swiper"},X=["src"],G={key:1},J=["src"],O={class:"pro-detail"},K={class:"product-title"},Q={class:"pro-titbox"},Y={class:"pro-title"},Z={class:"shop"},$={class:"original-price"},ee={class:"coupon-price"},te=Vue.createTextVNode(" \u5238\u540E\u4EF7 \uFFE5 "),oe={class:"line-through"},se={key:0,class:"commission"},ie=Vue.createTextVNode(" \u9884\u8BA1\u8FD4\u5229\uFF1A+"),le={class:"pro-pricebox"},ne={class:"pro-price"},ce=Vue.createTextVNode(" \u5DF2\u552E"),re={class:"price"},de=Vue.createTextVNode("\u4EF6 "),ae={class:"padding"},ue={class:"sub-title"},me={class:"sale-info"},he=n(()=>Vue.createElementVNode("div",null,"\u5FEB\u9012\uFF1A\u5305\u90AE",-1)),Ve={key:0},_e={class:"discount-info"},pe={class:"item title"},ve={class:"item"},ge=n(()=>Vue.createElementVNode("div",{class:"lingqu"},"\u7ACB\u5373\u9886\u53D6",-1)),ke=n(()=>Vue.createElementVNode("div",{class:"nomore-box"},"\u5B9D\u8D1D\u8BE6\u60C5",-1)),fe={class:"product-img"},ye=["src"],Ne={class:"operation"},Ee={class:"operation-left"},be=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c98ea275ad.png"},null,-1)),we=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u9996\u9875",-1)),Be=[be,we],Se=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7ce11d253b9.png"},null,-1)),Te=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u5206\u4EAB",-1)),Ce=[Se,Te],xe=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c99f329107.png"},null,-1)),ze=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u6536\u85CF",-1)),De={class:"operation-right"},We=n(()=>Vue.createElementVNode("div",{class:"btn"},"\u53E3\u4EE4\u8D2D\u4E70",-1)),Ae=[We],qe={class:"modal-custom"},Le=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u590D\u5236\u53E3\u4EE4\u8D2D\u4E70",-1)),Fe={class:"modal-custom-text"},Ie={class:"modal-custom"},Ue=n(()=>Vue.createElementVNode("img",{class:"modal-custom-img",src:"https://img.youdanhui.cn/cms_img/2020-07-18/5f1310c7d54da.png",alt:""},null,-1)),He=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u8BF7\u5148\u5B8C\u6210\u6DD8\u5B9D\u6388\u6743",-1)),Re=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u6DD8\u5B9D\u6388\u6743\u540E\u8D2D\u4E70\u5546\u54C1\u53EF\u4EE5\u83B7\u5F97\u8FD4\u5229",-1)),je=n(()=>Vue.createElementVNode("div",{class:"md-loading-popup"},"\u52A0\u8F7D\u4E2D\u3002\u3002\u3002",-1)),Pe={key:1};function Me(o,e,s,c,t,l){const d=Vue.resolveComponent("md-icon"),B=Vue.resolveComponent("md-swiper"),m=Vue.resolveComponent("md-dialog"),S=Vue.resolveComponent("md-popup"),r=Vue.resolveComponent("md-skeleton");return t.goods.goods?(Vue.openBlock(),Vue.createElementBlock("div",H,[Vue.createElementVNode("div",R,[j,Vue.createElementVNode("div",P,[Vue.createElementVNode("div",{class:"md-icon",onClick:e[0]||(e[0]=(...i)=>l.back&&l.back(...i))},[Vue.createVNode(d,{name:"arrow-left",size:"lg",color:"#fff"})])])]),t.video?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("div",M,[Vue.createVNode(B,null,{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.goods.goods.pic_urls,(i,u)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:u},[Vue.createElementVNode("img",{src:i,class:"slide-image"},null,8,X)]))),128))]),_:1})])),t.video&&t.goods.videos?(Vue.openBlock(),Vue.createElementBlock("div",G,[Vue.createElementVNode("video",{src:t.goods.videos.url,controls:"",width:"100%",autoplay:"autoplay",objectFit:"fill"},null,8,J)])):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",O,[Vue.createElementVNode("div",K,[Vue.createElementVNode("div",Q,[Vue.createElementVNode("div",Y,[Vue.createElementVNode("span",Z,Vue.toDisplayString(t.goods.goods.user_type_name),1),Vue.createTextVNode(" "+Vue.toDisplayString(t.goods.goods.title),1)])]),Vue.createElementVNode("div",$,[Vue.createElementVNode("div",ee,[te,Vue.createElementVNode("span",oe,Vue.toDisplayString(t.goods.price.buy_price),1)]),t.goods.click.share_commission>0?(Vue.openBlock(),Vue.createElementBlock("div",se,[ie,Vue.createElementVNode("span",null,Vue.toDisplayString(t.goods.click.share_commission),1)])):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",le,[Vue.createElementVNode("div",ne,[Vue.createElementVNode("div",null,[ce,Vue.createElementVNode("span",re,Vue.toDisplayString(t.goods.goods.volume_str),1),de])])]),Vue.createElementVNode("div",ae,[Vue.createElementVNode("div",ue,Vue.toDisplayString(t.goods.goods.comment),1),Vue.createElementVNode("div",me,[he,Vue.createElementVNode("div",null,"\u6708\u9500"+Vue.toDisplayString(t.goods.goods.volume_str),1),t.goods.click.share_commission>0?(Vue.openBlock(),Vue.createElementBlock("div",Ve," \u5206\u4EAB\u8D5A:"+Vue.toDisplayString(t.goods.click.share_commission),1)):Vue.createCommentVNode("",!0)])])]),Vue.createElementVNode("div",{class:"discount-box",onClick:e[1]||(e[1]=(...i)=>l.buy&&l.buy(...i))},[Vue.createElementVNode("div",_e,[Vue.createElementVNode("div",pe,Vue.toDisplayString(t.goods.coupon.money)+"\u5143\u4F18\u60E0\u5238",1),Vue.createElementVNode("div",ve,Vue.toDisplayString(t.goods.coupon.coupon_start_date)+" - "+Vue.toDisplayString(t.goods.coupon.coupon_end_date),1)]),ge]),ke,Vue.createElementVNode("div",fe,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.goods.goods.images,(i,u)=>(Vue.openBlock(),Vue.createElementBlock("img",{src:i,key:u},null,8,ye))),128))])]),Vue.createElementVNode("div",Ne,[Vue.createElementVNode("div",Ee,[Vue.createElementVNode("div",{onClick:e[2]||(e[2]=(...i)=>l.goHome&&l.goHome(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},Be),Vue.createElementVNode("div",{onClick:e[3]||(e[3]=(...i)=>l.toShare&&l.toShare(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},Ce),Vue.createElementVNode("div",{onClick:e[4]||(e[4]=(...i)=>l.toFavorite&&l.toFavorite(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},[xe,Vue.createElementVNode("div",{class:Vue.normalizeClass(["md-icon md-icon-collection",["md-icon-"+(t.favorite?"like-fill":"like")]]),style:Vue.normalizeStyle({color:t.favorite?"#ff201f":"#333",fontSize:"20px"})},null,6),ze])]),Vue.createElementVNode("div",De,[t.showTokenBtn?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"buy-token",onClick:e[5]||(e[5]=(...i)=>l.showToken&&l.showToken(...i))},Ae)):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",{class:"buy-link",onClick:e[6]||(e[6]=(...i)=>l.buy&&l.buy(...i))},"\u9886\u5238\u8D2D\u4E70")])]),Vue.createVNode(m,{closable:!1,value:t.modalToken,"onUpdate:value":e[8]||(e[8]=i=>t.modalToken=i),"mask-closable":!0},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",qe,[Le,Vue.createElementVNode("div",Fe," \u590D\u5236\u6846\u5185\u6574\u6BB5\u6587\u5B57\uFF0C\u6253\u5F00\u3010\u624B-\u673A-\u6DD8-\u5B9D\u3011\u5373\u53EF\u9886\u5238\u8D2D\u4E70\u3002"+Vue.toDisplayString(t.click.tao_token),1),Vue.createElementVNode("div",{class:"modal-custom-btn copytext-btn",onClick:e[7]||(e[7]=i=>l.copyContent())},Vue.toDisplayString(t.modelBtnText),1)])]),_:1},8,["value"]),Vue.createVNode(m,{closable:!1,value:t.modalAuthorize,"onUpdate:value":e[11]||(e[11]=i=>t.modalAuthorize=i),"mask-closable":!0},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",Ie,[Ue,He,Re,Vue.createElementVNode("div",{class:"modal-custom-authorize",onClick:e[9]||(e[9]=i=>l.toAuthorize())},"\u53BB\u6388\u6743"),Vue.createElementVNode("div",{class:"modal-custom-buy copytext-btn",onClick:e[10]||(e[10]=i=>l.tobuy())}," \u6682\u4E0D\u6388\u6743 ")])]),_:1},8,["value"]),Vue.createVNode(S,{value:t.clickLoading,"onUpdate:value":e[12]||(e[12]=i=>t.clickLoading=i)},{default:Vue.withCtx(()=>[je]),_:1},8,["value"])])):(Vue.openBlock(),Vue.createElementBlock("div",Pe,[Vue.createVNode(r,{avatar:"",title:""}),Vue.createVNode(r,{avatar:"",title:""}),Vue.createVNode(r,{avatar:"",title:""}),Vue.createVNode(r,{avatar:"",title:""}),Vue.createVNode(r,{avatar:"",title:""}),Vue.createVNode(r,{avatar:"",title:""})]))}var tt=z(U,[["render",Me],["__scopeId","data-v-17d46c92"]]);export{tt as default};
