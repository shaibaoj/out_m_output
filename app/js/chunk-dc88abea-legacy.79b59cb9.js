(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc88abea"],{"269a":function(t,e,i){},"799b":function(t,e,i){},9440:function(t,e,i){var n,a,o;(function(){(function(s,r){a=[e,i("e91d"),i("38a8"),i("e2ca"),i("aa31"),i("0f33"),i("269a")],n=r,o="function"===typeof n?n.apply(e,a):n,void 0===o||(t.exports=o)})(0,(function(t,e,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=d(e),r=d(i),c=d(n);function d(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-dialog",components:(o={},l(o,s.default.name,s.default),l(o,r.default.name,r.default),l(o,c.default.name,c.default),o),props:{value:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},content:{type:String,default:""},btns:{type:Array,default:function(){return[]}},layout:{type:String,default:"row"},appendTo:{default:function(){return a.mdDocument.body}},hasMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},transition:{type:String,default:"md-fade"},preventScroll:{type:Boolean,default:!1},preventScrollExclude:{type:String,default:""}},mounted:function(){this.appendTo&&this.appendTo.appendChild(this.$el)},beforeDestroy:function(){this.appendTo&&this.appendTo.removeChild(this.$el)},methods:{$_onInput:function(t){this.$emit("input",t)},$_onShow:function(){this.$emit("show")},$_onHide:function(){this.$emit("hide")},$_onClick:function(t){t.disabled||t.loading||("function"===typeof t.handler?t.handler.call(null,t):this.close())},close:function(){this.$emit("input",!1)}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var s="function"===typeof t.exports?t.exports.options:t.exports;s.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-dialog"},[i("md-popup",{attrs:{value:t.value,hasMask:t.hasMask,maskClosable:t.maskClosable,position:"center",transition:t.transition,preventScroll:t.preventScroll,preventScrollExclude:t.preventScrollExclude},on:{input:t.$_onInput,show:t.$_onShow,hide:t.$_onHide}},[i("div",{staticClass:"md-dialog-content"},[t._t("header"),t._v(" "),i("div",{staticClass:"md-dialog-body"},[t.closable?i("a",{staticClass:"md-dialog-close",attrs:{role:"button"},on:{click:t.close}},[i("md-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.icon?i("div",{staticClass:"md-dialog-icon"},[i("md-icon",{attrs:{name:t.icon,svg:t.iconSvg}})],1):t._e(),t._v(" "),t.title?i("h2",{staticClass:"md-dialog-title",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t._t("default",[i("div",{staticClass:"md-dialog-text",domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("footer",{staticClass:"md-dialog-actions",class:{"is-column":"column"===t.layout}},[t._l(t.btns,(function(e,n){return[i("a",{key:n,staticClass:"md-dialog-btn",class:{disabled:!!e.disabled,warning:!e.disabled&&!!e.warning},attrs:{role:"button"},on:{click:function(i){return t.$_onClick(e)},touchmove:function(t){t.preventDefault()}}},[e.loading?i("md-activity-indicator-rolling",{staticClass:"md-dialog-btn-loading"}):e.icon?i("md-icon",{staticClass:"md-dialog-btn-icon",attrs:{name:e.icon,svg:e.iconSvg,size:"md"}}):t._e(),t._v("\n            "+t._s(e.text)+"\n          ")],1)]}))],2)],2)])],1)},s.staticRenderFns=[]},da84:function(t,e,i){"use strict";var n=i("799b"),a=i.n(n);a.a},dcf9:function(t,e,i){},e2ca:function(t,e,i){var n,a,o;(function(){(function(s,r){a=[e,i("0f33"),i("dcf9")],n=r,o="function"===typeof n?n.apply(e,a):n,void 0===o||(t.exports=o)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-activity-indicator-rolling",props:{size:{type:Number,default:70},width:{type:Number},color:{type:String,default:"#2F86F6"},borderColor:{type:String,default:"rgba(0, 0, 0, .1)"},fill:{type:String,default:"transparent"},linecap:{type:String,default:"round"},rotate:{type:Number,default:0},process:{type:Number}},computed:{id:function(){return this.$options.name+"-keyframes-"+this.size},strokeWidth:function(){return this.width||this.size/12},strokeDasharray:function(){return this.process*this.circlePerimeter+" "+(1-this.process)*this.circlePerimeter},radius:function(){return this.size/2},viewBoxSize:function(){return this.size+2*this.strokeWidth},circlePerimeter:function(){return 3.1415*this.size},duration:function(){return 2},isAutoAnimation:function(){return void 0===this.process}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var s="function"===typeof t.exports?t.exports.options:t.exports;s.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-activity-indicator-rolling"},[i("div",{staticClass:"rolling-container"},[i("svg",{staticClass:"md-activity-indicator-svg rolling",style:{width:t.size+"px",height:t.size+"px",transform:"rotateZ("+t.rotate+"deg)"},attrs:{viewBox:"0 0 "+t.viewBoxSize+" "+t.viewBoxSize,preserveAspectRatio:"xMidYMid"}},[i("circle",{attrs:{fill:"none",stroke:t.borderColor,"stroke-width":t.strokeWidth,cx:t.viewBoxSize/2,cy:t.viewBoxSize/2,r:t.radius}}),t._v(" "),t.$slots.circle?t._t("circle"):i("g",{staticClass:"circle"},[t.isAutoAnimation||t.process>0?i("circle",{staticClass:"stroke",attrs:{cx:t.viewBoxSize/2,cy:t.viewBoxSize/2,fill:t.fill,stroke:t.color,"stroke-width":t.strokeWidth,"stroke-dasharray":t.isAutoAnimation?""+110*t.circlePerimeter/125:t.strokeDasharray,"stroke-linecap":t.linecap,r:t.radius}},[t.isAutoAnimation?i("animate",{attrs:{attributeName:"stroke-dashoffset",values:360*t.circlePerimeter/125+";"+140*t.circlePerimeter/125,dur:"2.2s",keyTimes:"0;1",calcMode:"spline",fill:"freeze",keySplines:"0.41,0.314,0.8,0.54",repeatCount:"indefinite",begin:"0"}}):t._e(),t._v(" "),t.isAutoAnimation?i("animateTransform",{attrs:{dur:t.duration+"s",values:"0 "+t.viewBoxSize/2+" "+t.viewBoxSize/2+";360 "+t.viewBoxSize/2+" "+t.viewBoxSize/2,attributeName:"transform",type:"rotate",calcMode:"linear",keyTimes:"0;1",begin:"0",repeatCount:"indefinite"}}):t._e()],1):t._e()]),t._v(" "),t._t("defs")],2),t._v(" "),i("div",{staticClass:"content"},[t._t("default")],2)])])},s.staticRenderFns=[]},e83b:function(t,e,i){var n,a,o;(function(s,r){a=[e,i("8bbf"),i("9440")],n=r,o="function"===typeof n?n.apply(e,a):n,void 0===o||(t.exports=o)})(0,(function(t,e,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(e),a=o(i);function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){},r=[],c=function(t){var e=t.title,i=void 0===e?"":e,o=t.icon,c=void 0===o?"":o,d=t.iconSvg,l=void 0!==d&&d,u=t.content,p=void 0===u?"":u,f=t.closable,h=void 0!==f&&f,v=t.btns,m=void 0===v?[]:v,g=t.onShow,b=void 0===g?s:g,y=t.onHide,_=void 0===y?s:y,x=n.default.extend(a.default),C=new x({propsData:{value:!1,title:i,icon:c,iconSvg:l,content:p,closable:h,btns:m,transition:"md-bounce",preventScroll:!0}}).$mount();return r.push(C),C.$on("input",(function(t){t||(C.value=!1)})),C.$on("hide",(function(){var t=r.indexOf(C);t>=0&&r.splice(t,1),C.$destroy(),_()})),C.$on("show",(function(){b()})),C.value=!0,C};a.default.confirm=function(t){var e=t.title,i=void 0===e?"":e,n=t.icon,a=void 0===n?"":n,o=t.iconSvg,r=void 0!==o&&o,d=t.content,l=void 0===d?"":d,u=t.cancelText,p=void 0===u?"取消":u,f=t.cancelWarning,h=void 0!==f&&f,v=t.confirmText,m=void 0===v?"确定":v,g=t.confirmWarning,b=void 0!==g&&g,y=t.closable,_=void 0!==y&&y,x=t.onConfirm,C=void 0===x?s:x,w=t.onCancel,k=void 0===w?s:w,S=t.onShow,$=void 0===S?s:S,z=t.onHide,T=void 0===z?s:z,M=c({title:i,icon:a,iconSvg:r,content:l,closable:_,onShow:$,onHide:T,btns:[{text:p,warning:h,handler:function(){!1!==k()&&M.close()}},{text:m,warning:b,handler:function(){!1!==C()&&M.close()}}]});return M},a.default.alert=function(t){var e=t.title,i=void 0===e?"":e,n=t.icon,a=void 0===n?"":n,o=t.iconSvg,r=void 0!==o&&o,d=t.content,l=void 0===d?"":d,u=t.confirmText,p=void 0===u?"确定":u,f=t.closable,h=void 0!==f&&f,v=t.warning,m=void 0!==v&&v,g=t.onConfirm,b=void 0===g?s:g,y=t.onShow,_=void 0===y?s:y,x=t.onHide,C=void 0===x?s:x,w=c({title:i,icon:a,iconSvg:r,content:l,closable:h,onShow:_,onHide:C,btns:[{text:p,warning:m,handler:function(){!1!==b()&&w.close()}}]});return w},a.default.succeed=function(t){return t.icon="success-color",a.default.confirm(t)},a.default.failed=function(t){return t.icon="warn-color",a.default.confirm(t)},a.default.closeAll=function(){r.forEach((function(t){t.close()}))},t.default=a.default}))},edd8:function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:t.back}},[i("md-icon",{attrs:{name:"arrow-left",size:"lg",color:"#000"}})],1),i("div",{staticClass:"searchbox search-mr"},[i("div",{staticClass:"search-query",on:{click:t.search}},[t.searchKey?t._e():i("span",{staticClass:"search-text"},[t._v("搜索宝贝标题、关键词")]),t.searchKey?i("div",{staticClass:"search-key"},[i("div",{staticClass:"key-text"},[t._v(t._s(t.searchKey))]),i("md-icon",{attrs:{name:"shut",size:"min",color:"#fff"}})],1):t._e()]),t.model.pinduoduo?i("div",{staticClass:"search-type",on:{click:t.search_pinduoduo}},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db4448f94e.png"}}),i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-15/5d7db862e39c6.png"}})]):t._e()]),i("div",{staticClass:"icon",on:{click:t.showList}},[t.isList?i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c9226b9ec6.png"}}):i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-14/5d7c905fc5059.png"}})])]),i("div",{staticClass:"header-screen"},[i("div",{staticClass:"screen-top"},[i("div",{staticClass:"top-item",class:[0==t.tabIndex?"active bold":""],attrs:{"data-index":"0"},on:{click:t.screen}},[t._v("综合")]),i("div",{staticClass:"top-item",class:[1==t.tabIndex?"active bold":""],attrs:{"data-index":"1"},on:{click:t.screen}},[t._v("价格")]),i("div",{staticClass:"top-item",class:[2==t.tabIndex?"active bold":""],attrs:{"data-index":"2"},on:{click:t.screen}},[t._v("销量")])])])]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{class:t.isList?"product-list ":"product-container"},t._l(t.items,(function(e,n){return i("goods",{key:n,attrs:{top:n+1,itemData:e,goodsType:t.isList?"list":""}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},o=[],s=i("1e49"),r=i("73d1"),c=i("e83b"),d=i.n(c),l=i("2f41"),u=i.n(l),p=(i("cc57"),i("38a8")),f=i.n(p),h=i("db8e"),v=i("a288"),m=i("e1b0"),g=i("3919"),b={components:(n={infiniteLoading:g["a"],backTop:m["a"]},Object(r["a"])(n,f.a.name,f.a),Object(r["a"])(n,u.a.name,u.a),Object(r["a"])(n,d.a.name,d.a),Object(r["a"])(n,"loadMore",h["a"]),Object(r["a"])(n,"goods",v["a"]),n),data:function(){return{searchKey:"",page:{ipage:0,price1:"",price2:"",hasMore:!0},tabIndex:0,isList:!1,items:[],loading:!1,model:{pinduoduo:0}}},mounted:function(){this.init()},methods:{init:function(){this.$route.query.q&&(this.searchKey=this.$route.query.q),this.queryItems(),this.queryMall()},navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},btnSelected:function(t){var e=t.currentTarget.dataset.index;this.$set(this.attrData[e],"selected",!this.attrData[e].selected),this.queryItems("tabChange")},screen:function(t){var e=t.currentTarget.dataset.index;4===e?this.isList=!this.isList:(this.tabIndex=parseInt(e),this.queryItems("tabChange"))},showList:function(){this.isList=!this.isList},closeDrawer:function(){this.drawer=!1,this.queryItems("tabChange")},clearDrawer:function(){this.page.price1="",this.page.price2="",this.drawer=!1},back:function(){this.drawer?this.closeDrawer():this.$nav.navTo("/search/search")},search:function(){this.$nav.navTo("/search/search")},search_pinduoduo:function(){this.$nav.navTo("/pinduoduo/list",{q:this.searchKey})},queryItems:function(t){var e=this;"tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0;var i="";console.log(this.tabIndex),i=1===this.tabIndex?"coupon_price":2===this.tabIndex?"volume":"",this.$http.post("/cms.goods.search",{ipage:this.page.ipage,q:this.searchKey,sort:i,start_price:this.page.price1,end_price:this.page.price2}).then((function(i){if(e.loading=!1,i.data.items&&i.data.items){var n;if("tabChange"===t)e.items=i.data.items;else(n=e.items).push.apply(n,Object(s["a"])(i.data.items));i.data.pager&&i.data.pager.ipage&&(e.page.ipage=parseInt(i.data.pager.ipage)+1)}e.loading=!1}))},queryMall:function(t){var e=this;this.$http.post("/cms.data.model",{}).then((function(t){t.data.model&&t.data.model.pinduoduo&&(e.model.pinduoduo=t.data.model.pinduoduo)}))},loadmore:function(){this.loading||this.queryItems()}}},y=b,_=(i("da84"),i("9ca4")),x=Object(_["a"])(y,a,o,!1,null,"842022fa",null);e["default"]=x.exports}}]);