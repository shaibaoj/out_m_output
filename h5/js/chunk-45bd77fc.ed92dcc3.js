(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45bd77fc"],{"0f68":function(t,e,i){},"323a":function(t,e,i){},"429a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:t.back}},[i("md-icon",{attrs:{name:"arrow-left",size:"lg",color:"#000"}})],1),i("div",{staticClass:"searchbox search-mr"},[i("div",{staticClass:"search-query",on:{click:t.search}},[t.searchKey?t._e():i("span",{staticClass:"search-text"},[t._v("搜索宝贝标题、关键词")]),t.searchKey?i("div",{staticClass:"search-key"},[i("div",{staticClass:"key-text"},[t._v(t._s(t.searchKey))]),i("md-icon",{attrs:{name:"shut",size:"min",color:"#fff"}})],1):t._e()]),i("div",{staticClass:"search-type",on:{click:t.search_taobao}},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db78c98de3.png"}}),i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db862e39c6.png"}})])]),i("div",{staticClass:"icon",on:{click:t.showList}},[t.isList?i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c9226b9ec6.png"}}):i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c905fc5059.png"}})])]),i("div",{staticClass:"header-screen"},[i("div",{staticClass:"screen-top"},[i("div",{staticClass:"top-item",class:[0==t.tabIndex?"active bold":""],attrs:{"data-index":"0"},on:{click:t.screen}},[t._v("综合")]),i("div",{staticClass:"top-item",class:[1==t.tabIndex?"active bold":""],attrs:{"data-index":"1"},on:{click:t.screen}},[t._v("价格")]),i("div",{staticClass:"top-item",class:[2==t.tabIndex?"active bold":""],attrs:{"data-index":"2"},on:{click:t.screen}},[t._v("销量")])])])]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{class:t.isList?"product-list ":"product-container"},t._l(t.items,(function(e,a){return i("pinduoduo",{key:a,attrs:{top:a+1,itemData:e,goodsType:t.isList?"list":""}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],n=i("f609"),o=i.n(n),c=i("556d"),r=i.n(c),l=i("aed6"),d=i.n(l),u=i("db8e"),p=i("d56d"),m=i("e1b0"),v=i("3919"),h={components:{infiniteLoading:v["a"],backTop:m["a"],[d.a.name]:d.a,[r.a.name]:r.a,[o.a.name]:o.a,loadMore:u["a"],pinduoduo:p["a"]},data(){return{searchKey:"",page:{ipage:0,price1:"",price2:"",hasMore:!0},tabIndex:0,isList:!1,items:[],loading:!1}},mounted(){this.init()},methods:{init(){this.$route.query.q&&(this.searchKey=this.$route.query.q),this.queryItems()},navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},btnSelected:function(t){let e=t.currentTarget.dataset.index;this.$set(this.attrData[e],"selected",!this.attrData[e].selected),this.queryItems("tabChange")},screen:function(t){let e=t.currentTarget.dataset.index;4===e?this.isList=!this.isList:(this.tabIndex=parseInt(e),this.queryItems("tabChange"))},showList(){this.isList=!this.isList},closeDrawer:function(){this.drawer=!1,this.queryItems("tabChange")},clearDrawer:function(){this.page.price1="",this.page.price2="",this.drawer=!1},back:function(){this.drawer?this.closeDrawer():this.$nav.navTo("/pinduoduo/search")},search:function(){this.$nav.navTo("/pinduoduo/search")},search_taobao:function(){this.$nav.navTo("/search/list",{q:this.searchKey})},queryItems(t){"tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0;let e="";e=1===this.tabIndex?"price":2===this.tabIndex?"volume":"",this.$http.post("/cms.pinduoduo.search",{ipage:this.page.ipage,q:this.searchKey,sort:e,start_price:this.page.price1,end_price:this.page.price2}).then(e=>{this.loading=!1,e.data.items&&e.data.items&&("tabChange"===t?this.items=e.data.items:this.items.push(...e.data.items),e.data.pager&&e.data.pager.ipage&&(this.page.ipage=parseInt(e.data.pager.ipage)+1)),this.loading=!1})},onPullDownRefresh:function(){this.page.ipage=1,this.pullUpOn=!0,this.loading=!1,this.queryItems("tabChange")},loadmore:function(){this.loading||this.queryItems()}}},f=h,g=(i("a922"),i("2877")),_=Object(g["a"])(f,a,s,!1,null,"197d75a8",null);e["default"]=_.exports},"47e9":function(t,e,i){},"4cb5":function(t,e,i){},"4f99":function(t,e,i){var a,s,n;(function(){(function(o,c){s=[e,i("cdfc"),i("797a")],a=c,n="function"===typeof a?a.apply(e,s):a,void 0===n||(t.exports=n)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-activity-indicator-rolling",props:{size:{type:Number,default:70},width:{type:Number},color:{type:String,default:"#2F86F6"},borderColor:{type:String,default:"rgba(0, 0, 0, .1)"},fill:{type:String,default:"transparent"},linecap:{type:String,default:"round"},rotate:{type:Number,default:0},process:{type:Number}},computed:{id:function(){return this.$options.name+"-keyframes-"+this.size},strokeWidth:function(){return this.width||this.size/12},strokeDasharray:function(){return this.process*this.circlePerimeter+" "+(1-this.process)*this.circlePerimeter},radius:function(){return this.size/2},viewBoxSize:function(){return this.size+2*this.strokeWidth},circlePerimeter:function(){return 3.1415*this.size},duration:function(){return 2},isAutoAnimation:function(){return void 0===this.process}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-activity-indicator-rolling"},[i("div",{staticClass:"rolling-container"},[i("svg",{staticClass:"md-activity-indicator-svg rolling",style:{width:t.size+"px",height:t.size+"px",transform:"rotateZ("+t.rotate+"deg)"},attrs:{viewBox:"0 0 "+t.viewBoxSize+" "+t.viewBoxSize,preserveAspectRatio:"xMidYMid"}},[i("circle",{attrs:{fill:"none",stroke:t.borderColor,"stroke-width":t.strokeWidth,cx:t.viewBoxSize/2,cy:t.viewBoxSize/2,r:t.radius}}),t._v(" "),t.$slots.circle?t._t("circle"):i("g",{staticClass:"circle"},[t.isAutoAnimation||t.process>0?i("circle",{staticClass:"stroke",attrs:{cx:t.viewBoxSize/2,cy:t.viewBoxSize/2,fill:t.fill,stroke:t.color,"stroke-width":t.strokeWidth,"stroke-dasharray":t.isAutoAnimation?""+110*t.circlePerimeter/125:t.strokeDasharray,"stroke-linecap":t.linecap,r:t.radius}},[t.isAutoAnimation?i("animate",{attrs:{attributeName:"stroke-dashoffset",values:360*t.circlePerimeter/125+";"+140*t.circlePerimeter/125,dur:"2.2s",keyTimes:"0;1",calcMode:"spline",fill:"freeze",keySplines:"0.41,0.314,0.8,0.54",repeatCount:"indefinite",begin:"0"}}):t._e(),t._v(" "),t.isAutoAnimation?i("animateTransform",{attrs:{dur:t.duration+"s",values:"0 "+t.viewBoxSize/2+" "+t.viewBoxSize/2+";360 "+t.viewBoxSize/2+" "+t.viewBoxSize/2,attributeName:"transform",type:"rotate",calcMode:"linear",keyTimes:"0;1",begin:"0",repeatCount:"indefinite"}}):t._e()],1):t._e()]),t._v(" "),t._t("defs")],2),t._v(" "),i("div",{staticClass:"content"},[t._t("default")],2)])])},o.staticRenderFns=[]},"71ae":function(t,e,i){"use strict";var a=i("0f68"),s=i.n(a);s.a},"797a":function(t,e,i){},a922:function(t,e,i){"use strict";var a=i("323a"),s=i.n(a);s.a},ac2a:function(t,e,i){"use strict";var a=i("47e9"),s=i.n(a);s.a},d56d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"list"==t.goodsType?i("list",{attrs:{"item-data":t.itemData}}):i("column",{attrs:{"item-data":t.itemData}})},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"image-wrapper"},[i("img",{attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),t.itemData.goods.day_sales>0?i("div",{staticClass:"daysale"},[t._v("\n\t\t\t今日销量:"+t._s(t.itemData.goods.day_sales)+"单\n\t\t")]):t._e()]),i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?i("span",{staticClass:"coupon-money"},[i("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))]):t._e()])])},o=[],c={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},r=c,l=(i("ac2a"),i("2877")),d=Object(l["a"])(r,n,o,!1,null,"1419a2d4",null),u=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.itemData.goods.pic_url}})]),i("div",{staticClass:"content"},[i("div",{staticClass:"item-box expand"},[i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?i("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售"),i("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")]):t._e()])])])},m=[],v={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},h=v,f=(i("71ae"),Object(l["a"])(h,p,m,!1,null,"fa22eee8",null)),g=f.exports,_={components:{column:u,list:g},props:{goodsType:{type:String},itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},y=_,b=Object(l["a"])(y,a,s,!1,null,"31cc6cbc",null);e["a"]=b.exports},f420:function(t,e,i){var a,s,n;(function(){(function(o,c){s=[e,i("06cd"),i("aed6"),i("4f99"),i("f1c1"),i("cdfc"),i("4cb5")],a=c,n="function"===typeof a?a.apply(e,s):a,void 0===n||(t.exports=n)})(0,(function(t,e,i,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=l(e),c=l(i),r=l(a);function l(t){return t&&t.__esModule?t:{default:t}}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-dialog",components:(n={},d(n,o.default.name,o.default),d(n,c.default.name,c.default),d(n,r.default.name,r.default),n),props:{value:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},content:{type:String,default:""},btns:{type:Array,default:function(){return[]}},layout:{type:String,default:"row"},appendTo:{default:function(){return s.mdDocument.body}},hasMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},transition:{type:String,default:"md-fade"},preventScroll:{type:Boolean,default:!1},preventScrollExclude:{type:String,default:""}},mounted:function(){this.appendTo&&this.appendTo.appendChild(this.$el)},beforeDestroy:function(){this.appendTo&&this.appendTo.removeChild(this.$el)},methods:{$_onInput:function(t){this.$emit("input",t)},$_onShow:function(){this.$emit("show")},$_onHide:function(){this.$emit("hide")},$_onClick:function(t){t.disabled||t.loading||("function"===typeof t.handler?t.handler.call(null,t):this.close())},close:function(){this.$emit("input",!1)}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-dialog"},[i("md-popup",{attrs:{value:t.value,hasMask:t.hasMask,maskClosable:t.maskClosable,position:"center",transition:t.transition,preventScroll:t.preventScroll,preventScrollExclude:t.preventScrollExclude},on:{input:t.$_onInput,show:t.$_onShow,hide:t.$_onHide}},[i("div",{staticClass:"md-dialog-content"},[t._t("header"),t._v(" "),i("div",{staticClass:"md-dialog-body"},[t.closable?i("a",{staticClass:"md-dialog-close",attrs:{role:"button"},on:{click:t.close}},[i("md-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.icon?i("div",{staticClass:"md-dialog-icon"},[i("md-icon",{attrs:{name:t.icon,svg:t.iconSvg}})],1):t._e(),t._v(" "),t.title?i("h2",{staticClass:"md-dialog-title",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t._t("default",[i("div",{staticClass:"md-dialog-text",domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("footer",{staticClass:"md-dialog-actions",class:{"is-column":"column"===t.layout}},[t._l(t.btns,(function(e,a){return[i("a",{key:a,staticClass:"md-dialog-btn",class:{disabled:!!e.disabled,warning:!e.disabled&&!!e.warning},attrs:{role:"button"},on:{click:function(i){return t.$_onClick(e)},touchmove:function(t){t.preventDefault()}}},[e.loading?i("md-activity-indicator-rolling",{staticClass:"md-dialog-btn-loading"}):e.icon?i("md-icon",{staticClass:"md-dialog-btn-icon",attrs:{name:e.icon,svg:e.iconSvg,size:"md"}}):t._e(),t._v("\n            "+t._s(e.text)+"\n          ")],1)]}))],2)],2)])],1)},o.staticRenderFns=[]},f609:function(t,e,i){var a,s,n;(function(o,c){s=[e,i("8bbf"),i("f420")],a=c,n="function"===typeof a?a.apply(e,s):a,void 0===n||(t.exports=n)})(0,(function(t,e,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(e),s=n(i);function n(t){return t&&t.__esModule?t:{default:t}}var o=function(){},c=[],r=function(t){var e=t.title,i=void 0===e?"":e,n=t.icon,r=void 0===n?"":n,l=t.iconSvg,d=void 0!==l&&l,u=t.content,p=void 0===u?"":u,m=t.closable,v=void 0!==m&&m,h=t.btns,f=void 0===h?[]:h,g=t.onShow,_=void 0===g?o:g,y=t.onHide,b=void 0===y?o:y,x=a.default.extend(s.default),C=new x({propsData:{value:!1,title:i,icon:r,iconSvg:d,content:p,closable:v,btns:f,transition:"md-bounce",preventScroll:!0}}).$mount();return c.push(C),C.$on("input",(function(t){t||(C.value=!1)})),C.$on("hide",(function(){var t=c.indexOf(C);t>=0&&c.splice(t,1),C.$destroy(),b()})),C.$on("show",(function(){_()})),C.value=!0,C};s.default.confirm=function(t){var e=t.title,i=void 0===e?"":e,a=t.icon,s=void 0===a?"":a,n=t.iconSvg,c=void 0!==n&&n,l=t.content,d=void 0===l?"":l,u=t.cancelText,p=void 0===u?"取消":u,m=t.cancelWarning,v=void 0!==m&&m,h=t.confirmText,f=void 0===h?"确定":h,g=t.confirmWarning,_=void 0!==g&&g,y=t.closable,b=void 0!==y&&y,x=t.onConfirm,C=void 0===x?o:x,k=t.onCancel,w=void 0===k?o:k,$=t.onShow,D=void 0===$?o:$,S=t.onHide,T=void 0===S?o:S,z=r({title:i,icon:s,iconSvg:c,content:d,closable:b,onShow:D,onHide:T,btns:[{text:p,warning:v,handler:function(){!1!==w()&&z.close()}},{text:f,warning:_,handler:function(){!1!==C()&&z.close()}}]});return z},s.default.alert=function(t){var e=t.title,i=void 0===e?"":e,a=t.icon,s=void 0===a?"":a,n=t.iconSvg,c=void 0!==n&&n,l=t.content,d=void 0===l?"":l,u=t.confirmText,p=void 0===u?"确定":u,m=t.closable,v=void 0!==m&&m,h=t.warning,f=void 0!==h&&h,g=t.onConfirm,_=void 0===g?o:g,y=t.onShow,b=void 0===y?o:y,x=t.onHide,C=void 0===x?o:x,k=r({title:i,icon:s,iconSvg:c,content:d,closable:v,onShow:b,onHide:C,btns:[{text:p,warning:f,handler:function(){!1!==_()&&k.close()}}]});return k},s.default.succeed=function(t){return t.icon="success-color",s.default.confirm(t)},s.default.failed=function(t){return t.icon="warn-color",s.default.confirm(t)},s.default.closeAll=function(){c.forEach((function(t){t.close()}))},t.default=s.default}))}}]);