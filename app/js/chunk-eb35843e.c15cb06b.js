(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb35843e"],{"184e":function(t,s,i){},b263:function(t,s,i){"use strict";i("184e")},d656:function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.goods.goods?i("div",{staticClass:"container"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"header"}),i("div",{staticClass:"header-icon"},[i("div",{staticClass:"md-icon",on:{click:t.back}},[i("md-icon",{attrs:{name:"arrow-left",size:"lg",color:"#fff"}})],1)])]),t.video?t._e():i("div",{staticClass:"banner-swiper"},[i("md-swiper",t._l(t.goods.goods.images,(function(t,s){return i("md-swiper-item",{key:s},[i("img",{staticClass:"slide-image",attrs:{src:t}})])})),1)],1),t.video&&t.goods.videos?i("div",[i("video",{attrs:{src:t.goods.videos.url,controls:"",width:"100%",autoplay:"autoplay",objectFit:"fill"}})]):t._e(),i("div",{staticClass:"pro-detail"},[i("div",{staticClass:"product-title"},[i("div",{staticClass:"pro-titbox"},[i("div",{staticClass:"pro-title"},[i("span",{staticClass:"shop"},[t._v(t._s(t.goods.goods.user_type_name))]),t._v("\n            "+t._s(t.goods.goods.title)+"\n          ")])]),i("div",{staticClass:"original-price"},[i("div",{staticClass:"coupon-price"},[t._v("\n            券后价 ￥\n            "),i("span",{staticClass:"line-through"},[t._v(t._s(t.goods.price.buy_price))])]),t.goods.click.share_commission>0?i("div",{staticClass:"commission"},[t._v("预计返利：+"),i("span",[t._v(t._s(t.goods.click.share_commission))])]):t._e()]),i("div",{staticClass:"pro-pricebox"},[i("div",{staticClass:"pro-price"},[i("div",[t._v("已售"),i("span",{staticClass:"price"},[t._v(t._s(t.goods.goods.volume_str))]),t._v("件")])])]),i("div",{staticClass:"padding"},[i("div",{staticClass:"sub-title"},[t._v(t._s(t.goods.goods.comment))]),i("div",{staticClass:"sale-info"},[i("div",[t._v("快递：包邮")]),i("div",[t._v("月销"+t._s(t.goods.goods.volume_str))]),t.goods.click.share_commission>0?i("div",[t._v("分享赚:"+t._s(t.goods.click.share_commission))]):t._e()])])]),i("div",{staticClass:"discount-box",on:{click:t.buy}},[i("div",{staticClass:"discount-info"},[i("div",{staticClass:"item title"},[t._v(t._s(t.goods.coupon.money)+"元优惠券")]),i("div",{staticClass:"item"},[t._v(t._s(t.goods.coupon.coupon_start_date)+" - "+t._s(t.goods.coupon.coupon_end_date))])]),i("div",{staticClass:"lingqu"},[t._v("立即领取")])]),i("div",{staticClass:"nomore-box"},[t._v("\n        宝贝详情\n      ")]),i("div",{staticClass:"product-img"},t._l(t.goods.goods.images,(function(t,s){return i("img",{key:s,attrs:{src:t}})})),0)]),i("div",{staticClass:"operation"},[i("div",{staticClass:"operation-left"},[i("div",{staticClass:"operation-item",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.goHome}},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c98ea275ad.png"}}),i("div",{staticClass:"operation-text"},[t._v("首页")])]),i("div",{staticClass:"operation-item",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.toShare}},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7ce11d253b9.png"}}),i("div",{staticClass:"operation-text"},[t._v("分享")])])]),i("div",{staticClass:"operation-right"},[i("div",{staticClass:"buy-link",on:{click:t.buy}},[t._v("\n          领券购买\n        ")])])]),i("md-dialog",{attrs:{closable:!1,"mask-closable":!0},model:{value:t.modalToken,callback:function(s){t.modalToken=s},expression:"modalToken"}},[i("div",{staticClass:"modal-custom"},[i("div",{staticClass:"tips-content"},[t._v("分享赚钱")]),i("div",{staticClass:"modal-custom-text"},[t._v(t._s(t.goods.click.tao_token))]),i("div",{staticClass:"modal-custom-btn copytext-btn",on:{click:function(s){return t.copyContent()}}},[t._v(t._s(t.modelBtnText))])])])],1):i("div",[i("md-skeleton",{attrs:{avatar:"",title:""}}),i("md-skeleton",{attrs:{avatar:"",title:""}}),i("md-skeleton",{attrs:{avatar:"",title:""}}),i("md-skeleton",{attrs:{avatar:"",title:""}}),i("md-skeleton",{attrs:{avatar:"",title:""}}),i("md-skeleton",{attrs:{avatar:"",title:""}})],1)},e=[],a=i("1861"),n=i.n(a),c=(i("a481"),i("aed6")),d=i.n(c),l=i("4b25"),r=i.n(l),v=i("57a3"),p=i.n(v),u=i("7b38"),m=i.n(u),h=i("750b"),_=i.n(h),g=i("8730"),C=i.n(g),b=i("f609"),k=i.n(b),f=(i("5880"),i("b0c2")),y=i.n(f),w={components:{[k.a.name]:k.a,[C.a.name]:C.a,[_.a.name]:_.a,[m.a.name]:m.a,[p.a.name]:p.a,[r.a.name]:r.a,[d.a.name]:d.a},data(){return{id:"",goods:{},favorite:!1,modalToken:!1,modelBtnText:"一键复制",modalAuthorize:!1,video:!1,height:64,top:0,scrollH:0,opcity:0,iconOpcity:.5,bannerIndex:0,menuShow:!1,popupShow:!1,value:1,danmuList:[{text:"",color:"#ff0000",time:3}]}},mounted(){this.init()},methods:{init(){this.$route.query.video&&(this.video=!0),this.$route.query.id&&(this.id=this.$route.query.id,this.query_detail(this.id))},goHome(){this.navToPage("/",{})},navAction(t){this.$nav.toNav(t)},navToPage(t,s){this.$nextTick(()=>{this.$router.push({path:t,query:s||{}})})},back(){this.$router.go(-1)},openMenu:function(){this.menuShow=!0},closeMenu:function(){this.menuShow=!1},showPopup:function(){this.popupShow=!0},hidePopup:function(){this.popupShow=!1},change:function(t){this.value=t.value},common:function(){this.tui.toast("功能开发中~")},toFavorite(){this.$http.post("/cms.member.favorite.pin",{object_type:"goods",object_id:this.id}).then(t=>{0===t.code?this.favorite=!0:this.favorite=!1})},buy(){window.location.href=this.goods.click.click_url},query_detail(t){this.$http.post("/cms.pinduoduo.view",{id:t}).then(t=>{t.data.item&&(this.goods=t.data.item)}),this.$http.post("/cms.member.favorite.index",{object_type:"pinduoduo",object_id:t}).then(t=>{t.data.item.id?this.favorite=!0:this.favorite=!1})},pin(t){this.$http.post("/cms.member.history.pin",{object_type:"pinduoduo",object_id:t}).then(t=>{})},hideToken(){this.modalToken=!1},copyContent(){this.click.tao_token;const t=this.click.tao_token.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),s=new y.a(".copytext-btn",{text(){return t}});s.on("success",t=>{t.clearSelection(),s.destroy(),this.copied=!0,n.a.info("代码已复制到剪贴板"),this.modelBtnText="复制成功",setTimeout(()=>{this.copied=!1},2e3)}),s.on("error",(function(t){console.log(t)}))},toShare(){this.$nextTick(()=>{this.$router.push({path:"/pinduoduo/share",query:{id:this.id}})})}}},x=w,T=(i("b263"),i("2877")),$=Object(T["a"])(x,o,e,!1,null,"fad3d2e6",null);s["default"]=$.exports}}]);