var T=Object.defineProperty;var V=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(t,e,s)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e)=>{for(var s in e||(e={}))C.call(e,s)&&h(t,s,e[s]);if(V)for(var s of V(e))x.call(e,s)&&h(t,s,e[s]);return t};import{d as _}from"./index.181916f2.js";import{_ as z,p as v,i as k,t as D}from"./index.16607fdf.js";import{b as f}from"./index.654af694.js";import{s as g}from"./index.ed325215.js";import{t as y}from"./index.5a62f73b.js";import"./index.76539c82.js";/* empty css              */import"./index.709eda75.js";import"./core.esm.4957b73a.js";var E="40%",w="100%",W={loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},row:{type:Number,default:3},title:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:E},rowWidth:{type:[Number,String,Array],default:w},avatarSize:{type:String,default:"md"}},A=t=>{const e=o=>typeof o=="number";return{getRowWidth:o=>{const l=t.rowWidth;if(t&&Array.isArray(l)){const r=l[o];return e(r)?`${r}%`:r}else if(l)return e(l)?`${l}%`:l;return w},getTitleWidth:()=>{const o=t.titleWidth;return o?e(o)?`${o}%`:o:E}}},b=Vue.defineComponent({name:"MdSkeleton",props:W,setup(t){return p({},A(t))}}),q={key:0,class:"md-skeleton"},L={class:"md-skeleton-content"},j={key:1};function F(t,e){return t.loading?(Vue.openBlock(),Vue.createBlock("div",q,[t.avatar?(Vue.openBlock(),Vue.createBlock("div",{key:0,class:{"md-skeleton-avatar":!0,"md-skeleton-avatar-large":t.avatarSize==="lg","md-skeleton-avatar-small":t.avatarSize==="sm"}},null,2)):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",L,[t.title?(Vue.openBlock(),Vue.createBlock("h4",{key:0,class:"md-skeleton-title",style:{width:t.getTitleWidth()}},null,4)):Vue.createCommentVNode("v-if",!0),(Vue.openBlock(!0),Vue.createBlock(Vue.Fragment,null,Vue.renderList(t.row,s=>(Vue.openBlock(),Vue.createBlock("div",{key:s,class:"md-skeleton-row",style:{width:s===t.row?"60%":t.getRowWidth(s-1)}},null,4))),128))])])):(Vue.openBlock(),Vue.createBlock("div",j,[Vue.renderSlot(t.$slots,"default")]))}b.render=F;var a=b;a.install=t=>{t.component(a.name,a)};var N=a;const U={components:{[_.name]:_,[f.name]:f,[g.name]:g,[y.name]:y,[N.name]:N,[v.name]:v,[k.name]:k},data(){return{id:"",goods:{},click:{},favorite:!1,modalToken:!1,modelBtnText:"\u4E00\u952E\u590D\u5236",modalAuthorize:!1,video:!1,clickLoading:!1,height:64,top:0,scrollH:0,opcity:0,iconOpcity:.5,bannerIndex:0,menuShow:!1,popupShow:!1,value:1,danmuList:[{text:"",color:"#ff0000",time:3}],showTokenBtn:!0}},mounted(){this.init()},methods:{init(){this.$route.query.video&&(this.video=!0),this.$route.query.id&&(this.id=this.$route.query.id,this.query_detail(this.id),this.pin(this.id))},goHome(){this.navToPage("/",{})},navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},back(){this.$router.go(-1)},openMenu:function(){this.menuShow=!0},closeMenu:function(){this.menuShow=!1},showPopup:function(){this.popupShow=!0},hidePopup:function(){this.popupShow=!1},change:function(t){this.value=t.value},common:function(){this.tui.toast("\u529F\u80FD\u5F00\u53D1\u4E2D~")},toFavorite(){this.$http.post("/cms.member.favorite.pin",{object_type:"goods",object_id:this.id}).then(t=>{t.code===0?this.favorite=!0:this.favorite=!1})},buy(){this.click.url?this.click.authorize_url?this.modalAuthorize=!0:this.$common.isWeiXin()&&this.showTokenBtn?this.modalToken=!0:window.location.href=this.click.url:this.$common.isWeiXin()?this.query_click(this.id,2):this.query_click(this.id,1)},showToken(){this.click.url?this.click.authorize_url?this.modalAuthorize=!0:this.modalToken=!0:this.query_click(this.id,2)},query_detail(t){let e="/cms.goods.view";t.indexOf("pdd")==0?(e="/cms.pinduoduo.view",this.showTokenBtn=!1):t.indexOf("jd")==0&&(e="/cms.jd.view",this.showTokenBtn=!1),this.$http.post(e,{num_iid:t,cms_url:encodeURIComponent(window.location.href)}).then(s=>{s.data.item&&(this.goods=s.data.item)}),this.$http.post("/cms.member.favorite.view",{object_type:"goods",object_id:t}).then(s=>{s.data.item&&s.data.item.id?this.favorite=!0:this.favorite=!1})},query_click(t,e){this.clickLoading=!0;let s="/cms.goods.click";t.indexOf("pdd")==0?(s="/cms.pinduoduo.click",e=1):t.indexOf("jd")==0&&(s="/cms.jd.click",e=1),this.$http.post(s,{num_iid:t,cms_url:encodeURIComponent(window.location.href)}).then(d=>{d.data.click&&d.data.click.url&&(this.click=d.data.click,e===1?this.buy():e===2&&this.showToken()),this.clickLoading=!1})},pin(t){this.$http.post("/cms.member.history.pin",{object_type:"goods",object_id:t}).then(e=>{})},hideToken(){this.modalToken=!1},hideAuthorize(){this.modalAuthorize=!1},copyContent(){""+this.click.tao_token;const t=this.click.tao_token.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new ClipboardJS(".copytext-btn",{text(){return t}});e.on("success",s=>{s.clearSelection(),e.destroy(),this.copied=!0,D.info("\u4EE3\u7801\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),this.modelBtnText="\u590D\u5236\u6210\u529F",setTimeout(()=>{this.copied=!1},2e3)}),e.on("error",function(s){console.log(s)})},toAuthorize(){window.location.href=this.click.authorize_url},tobuy(){this.modalAuthorize=!1,this.click.authorize_url=null,this.buy()},toShare(){this.$nextTick(()=>{this.$router.push({path:"/share",query:{id:this.id}})})}}},n=t=>(Vue.pushScopeId("data-v-12900378"),t=t(),Vue.popScopeId(),t),I={key:0,class:"container"},H={class:"header-box"},R=n(()=>Vue.createElementVNode("div",{class:"header"},null,-1)),O={class:"header-icon"},P={key:0,class:"banner-swiper"},M=["src"],G={key:1},X=["src"],J={class:"pro-detail"},K={class:"product-title"},Q={class:"pro-titbox"},Y={class:"pro-title"},Z={class:"shop"},$={class:"original-price"},ee={class:"coupon-price"},te=Vue.createTextVNode(" \u5238\u540E\u4EF7 \uFFE5 "),oe={class:"line-through"},se={key:0,class:"commission"},ie=Vue.createTextVNode(" \u9884\u8BA1\u8FD4\u5229\uFF1A+"),le={class:"pro-pricebox"},ne={class:"pro-price"},ce=Vue.createTextVNode(" \u5DF2\u552E"),de={class:"price"},re=Vue.createTextVNode("\u4EF6 "),ae={class:"padding"},ue={class:"sub-title"},me={class:"sale-info"},Ve=n(()=>Vue.createElementVNode("div",null,"\u5FEB\u9012\uFF1A\u5305\u90AE",-1)),he={key:0},pe={class:"discount-info"},_e={class:"item title"},ve={class:"item"},ke=n(()=>Vue.createElementVNode("div",{class:"lingqu"},"\u7ACB\u5373\u9886\u53D6",-1)),fe=n(()=>Vue.createElementVNode("div",{class:"nomore-box"},"\u5B9D\u8D1D\u8BE6\u60C5",-1)),ge={class:"product-img"},ye=["src"],Ne={class:"operation"},Ee={class:"operation-left"},we=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c98ea275ad.png"},null,-1)),be=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u9996\u9875",-1)),Be=[we,be],Se=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7ce11d253b9.png"},null,-1)),Te=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u5206\u4EAB",-1)),Ce=[Se,Te],xe=n(()=>Vue.createElementVNode("img",{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c99f329107.png"},null,-1)),ze=n(()=>Vue.createElementVNode("div",{class:"operation-text"},"\u6536\u85CF",-1)),De={class:"operation-right"},We=n(()=>Vue.createElementVNode("div",{class:"btn"},"\u53E3\u4EE4\u8D2D\u4E70",-1)),Ae=[We],qe={class:"modal-custom"},Le=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u590D\u5236\u53E3\u4EE4\u8D2D\u4E70",-1)),je={class:"modal-custom-text"},Fe={class:"modal-custom"},Ue=n(()=>Vue.createElementVNode("img",{class:"modal-custom-img",src:"https://img.youdanhui.cn/cms_img/2020-07-18/5f1310c7d54da.png",alt:""},null,-1)),Ie=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u8BF7\u5148\u5B8C\u6210\u6DD8\u5B9D\u6388\u6743",-1)),He=n(()=>Vue.createElementVNode("div",{class:"tips-content"},"\u6DD8\u5B9D\u6388\u6743\u540E\u8D2D\u4E70\u5546\u54C1\u53EF\u4EE5\u83B7\u5F97\u8FD4\u5229",-1)),Re=n(()=>Vue.createElementVNode("div",{class:"md-loading-popup"},"\u52A0\u8F7D\u4E2D\u3002\u3002\u3002",-1)),Oe={key:1};function Pe(t,e,s,d,o,l){const r=Vue.resolveComponent("md-icon"),B=Vue.resolveComponent("md-swiper"),m=Vue.resolveComponent("md-dialog"),S=Vue.resolveComponent("md-popup"),c=Vue.resolveComponent("md-skeleton");return o.goods.goods?(Vue.openBlock(),Vue.createElementBlock("div",I,[Vue.createElementVNode("div",H,[R,Vue.createElementVNode("div",O,[Vue.createElementVNode("div",{class:"md-icon",onClick:e[0]||(e[0]=(...i)=>l.back&&l.back(...i))},[Vue.createVNode(r,{name:"arrow-left",size:"lg",color:"#fff"})])])]),o.video?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("div",P,[Vue.createVNode(B,null,{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.goods.goods.pic_urls,(i,u)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:u},[Vue.createElementVNode("img",{src:i,class:"slide-image"},null,8,M)]))),128))]),_:1})])),o.video&&o.goods.videos?(Vue.openBlock(),Vue.createElementBlock("div",G,[Vue.createElementVNode("video",{src:o.goods.videos.url,controls:"",width:"100%",autoplay:"autoplay",objectFit:"fill"},null,8,X)])):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",J,[Vue.createElementVNode("div",K,[Vue.createElementVNode("div",Q,[Vue.createElementVNode("div",Y,[Vue.createElementVNode("span",Z,Vue.toDisplayString(o.goods.goods.user_type_name),1),Vue.createTextVNode(" "+Vue.toDisplayString(o.goods.goods.title),1)])]),Vue.createElementVNode("div",$,[Vue.createElementVNode("div",ee,[te,Vue.createElementVNode("span",oe,Vue.toDisplayString(o.goods.price.buy_price),1)]),o.goods.click.share_commission>0?(Vue.openBlock(),Vue.createElementBlock("div",se,[ie,Vue.createElementVNode("span",null,Vue.toDisplayString(o.goods.click.share_commission),1)])):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",le,[Vue.createElementVNode("div",ne,[Vue.createElementVNode("div",null,[ce,Vue.createElementVNode("span",de,Vue.toDisplayString(o.goods.goods.volume_str),1),re])])]),Vue.createElementVNode("div",ae,[Vue.createElementVNode("div",ue,Vue.toDisplayString(o.goods.goods.comment),1),Vue.createElementVNode("div",me,[Ve,Vue.createElementVNode("div",null,"\u6708\u9500"+Vue.toDisplayString(o.goods.goods.volume_str),1),o.goods.click.share_commission>0?(Vue.openBlock(),Vue.createElementBlock("div",he," \u5206\u4EAB\u8D5A:"+Vue.toDisplayString(o.goods.click.share_commission),1)):Vue.createCommentVNode("",!0)])])]),Vue.createElementVNode("div",{class:"discount-box",onClick:e[1]||(e[1]=(...i)=>l.buy&&l.buy(...i))},[Vue.createElementVNode("div",pe,[Vue.createElementVNode("div",_e,Vue.toDisplayString(o.goods.coupon.money)+"\u5143\u4F18\u60E0\u5238",1),Vue.createElementVNode("div",ve,Vue.toDisplayString(o.goods.coupon.coupon_start_date)+" - "+Vue.toDisplayString(o.goods.coupon.coupon_end_date),1)]),ke]),fe,Vue.createElementVNode("div",ge,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.goods.goods.images,(i,u)=>(Vue.openBlock(),Vue.createElementBlock("img",{src:i,key:u},null,8,ye))),128))])]),Vue.createElementVNode("div",Ne,[Vue.createElementVNode("div",Ee,[Vue.createElementVNode("div",{onClick:e[2]||(e[2]=(...i)=>l.goHome&&l.goHome(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},Be),Vue.createElementVNode("div",{onClick:e[3]||(e[3]=(...i)=>l.toShare&&l.toShare(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},Ce),Vue.createElementVNode("div",{onClick:e[4]||(e[4]=(...i)=>l.toFavorite&&l.toFavorite(...i)),class:"operation-item","hover-class":"opcity","hover-stay-time":150},[xe,Vue.createElementVNode("div",{class:Vue.normalizeClass(["md-icon md-icon-collection",["md-icon-"+(o.favorite?"like-fill":"like")]]),style:Vue.normalizeStyle({color:o.favorite?"#ff201f":"#333",fontSize:"20px"})},null,6),ze])]),Vue.createElementVNode("div",De,[o.showTokenBtn?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"buy-token",onClick:e[5]||(e[5]=(...i)=>l.showToken&&l.showToken(...i))},Ae)):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",{class:"buy-link",onClick:e[6]||(e[6]=(...i)=>l.buy&&l.buy(...i))},"\u9886\u5238\u8D2D\u4E70")])]),Vue.createVNode(m,{closable:!1,value:o.modalToken,"onUpdate:value":e[8]||(e[8]=i=>o.modalToken=i),"mask-closable":!0},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",qe,[Le,Vue.createElementVNode("div",je," \u590D\u5236\u6846\u5185\u6574\u6BB5\u6587\u5B57\uFF0C\u6253\u5F00\u3010\u624B-\u673A-\u6DD8-\u5B9D\u3011\u5373\u53EF\u9886\u5238\u8D2D\u4E70\u3002"+Vue.toDisplayString(o.click.tao_token),1),Vue.createElementVNode("div",{class:"modal-custom-btn copytext-btn",onClick:e[7]||(e[7]=i=>l.copyContent())},Vue.toDisplayString(o.modelBtnText),1)])]),_:1},8,["value"]),Vue.createVNode(m,{closable:!1,value:o.modalAuthorize,"onUpdate:value":e[11]||(e[11]=i=>o.modalAuthorize=i),"mask-closable":!0},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",Fe,[Ue,Ie,He,Vue.createElementVNode("div",{class:"modal-custom-authorize",onClick:e[9]||(e[9]=i=>l.toAuthorize())},"\u53BB\u6388\u6743"),Vue.createElementVNode("div",{class:"modal-custom-buy copytext-btn",onClick:e[10]||(e[10]=i=>l.tobuy())}," \u6682\u4E0D\u6388\u6743 ")])]),_:1},8,["value"]),Vue.createVNode(S,{value:o.clickLoading,"onUpdate:value":e[12]||(e[12]=i=>o.clickLoading=i)},{default:Vue.withCtx(()=>[Re]),_:1},8,["value"])])):(Vue.openBlock(),Vue.createElementBlock("div",Oe,[Vue.createVNode(c,{avatar:"",title:""}),Vue.createVNode(c,{avatar:"",title:""}),Vue.createVNode(c,{avatar:"",title:""}),Vue.createVNode(c,{avatar:"",title:""}),Vue.createVNode(c,{avatar:"",title:""}),Vue.createVNode(c,{avatar:"",title:""})]))}var tt=z(U,[["render",Pe],["__scopeId","data-v-12900378"]]);export{tt as default};
