(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64a61802"],{"359f":function(t,e,s){},"556d":function(t,e,s){var i,n,r;(function(){(function(o,a){n=[e,s("f1c1"),s("6464"),s("aac4"),s("cdfc"),s("359f")],i=a,r="function"===typeof i?i.apply(e,n):i,void 0===r||(t.exports=r)})(0,(function(t,e,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(s);function r(t){return t&&t.__esModule?t:{default:t}}t.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(t){t?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var t=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var s=this.container,r=this.content,o=s.getBoundingClientRect(),a=new n.default((function(e,s){(0,i.render)(r,e,s),t.isInitialed&&t.$_onScroll(e,s)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});a.setPosition(o.left+s.clientLeft,o.top+s.clientTop),this.hasRefresher&&a.activatePullToRefresh(this.refreshOffsetY,(function(){t.isRefreshActive=!0,t.isRefreshing=!1,t.$emit("refreshActive")}),(function(){t.isRefreshActive=!1,t.isRefreshing=!1}),(function(){t.isRefreshActive=!1,t.isRefreshing=!0,t.$emit("refreshing")})),this.scroller=a,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,e.debounce)((function(){t.isEndReaching=!0,t.$emit("endReached"),t.$emit("end-reached")}),50),setTimeout((function(){t.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var t=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){t.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var t=this.scroller._clientHeight,e=this.scroller._contentHeight,s=this.scroller._scrollTop,i=this.moreOffsetY,n=this.endReachedThreshold,r=e-t-(s+i+n);s>=0&&!this.isEndReaching&&r<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var t=this.currentX-this.startX,e=this.currentY-this.startY,s=180*Math.atan2(Math.abs(e),Math.abs(t))/Math.PI;return this.scrollingX?90-s:s},$_onScrollerTouchStart:function(t){this.scroller&&(this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.scroller.doTouchStart(t.touches,t.timeStamp))},$_onScrollerTouchMove:function(t){if(this.scroller){var e=!1;if(this.isPrevent&&(t.preventDefault(),e=!0),this.currentX=t.targetTouches[0].pageX,this.currentY=t.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var s=this.$_getScrollerAngle();if(s<this.touchAngle)return}!e&&t.cancelable&&t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp,t.scale);var i=15,n=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=this.currentX-n,a=this.currentY-r;(o>document.documentElement.clientWidth-i||a>document.documentElement.clientHeight-i||o<i||a<i)&&this.scroller.doTouchEnd(t.timeStamp)}},$_onScrollerTouchEnd:function(t){this.scroller&&this.scroller.doTouchEnd(t.timeStamp)},$_onScrollerMouseDown:function(t){this.scroller&&(this.startX=t.pageX,this.startY=t.pageY,this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(t){if(this.scroller&&this.isMouseDown){if(this.currentX=t.pageX,this.currentY=t.pageY,!this.scrollingX||!this.scrollingY){var e=this.$_getScrollerAngle();if(e<this.touchAngle)return}this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(t){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(t.timeStamp),this.isMouseDown=!1)},$_onScroll:function(t,e){t=+t.toFixed(2),e=+e.toFixed(2),this.scrollX===t&&this.scrollY===e||(this.scrollX=t,this.scrollY=e,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:t,scrollTop:e}))},init:function(){var t=this;this.$nextTick((function(){t.$_initScroller()}))},scrollTo:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(t,e,s)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.container,i=this.content;this.scroller&&s&&i&&this.$nextTick((function(){var n=s.clientWidth,r=s.clientHeight,o=i.offsetWidth,a=i.offsetHeight;(e||t.containerW!==n||t.containerH!==r||t.contentW!==o||t.contentH!==a)&&(t.scroller.setDimensions(s.clientWidth,s.clientHeight,i.offsetWidth,i.offsetHeight),t.containerW=n,t.containerH=r,t.contentW=o,t.contentH=a)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md-scroll-view",on:{touchstart:t.$_onScrollerTouchStart,touchmove:t.$_onScrollerTouchMove,touchend:t.$_onScrollerTouchEnd,touchcancel:t.$_onScrollerTouchEnd,mousedown:t.$_onScrollerMouseDown,mousemove:t.$_onScrollerMouseMove,mouseup:t.$_onScrollerMouseUp,mouseleave:t.$_onScrollerMouseUp}},[t.$slots.header?s("div",{staticClass:"scroll-view-header"},[t._t("header")],2):t._e(),t._v(" "),s("div",{staticClass:"scroll-view-container",class:{horizon:t.scrollingX&&!t.scrollingY},attrs:{"scroll-wrapper":""}},[t.hasRefresher?s("div",{staticClass:"scroll-view-refresh",class:{refreshing:t.isRefreshing,"refresh-active":t.isRefreshActive}},[t._t("refresh",null,{scrollTop:t.scrollY,isRefreshing:t.isRefreshing,isRefreshActive:t.isRefreshActive})],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasMore?s("div",{staticClass:"scroll-view-more",class:{active:t.isEndReachingStart||t.isEndReaching}},[t._t("more",null,{isEndReaching:t.isEndReachingStart||t.isEndReaching})],2):t._e()],2),t._v(" "),t.$slots.footer?s("div",{staticClass:"scroll-view-footer"},[t._t("footer")],2):t._e()])},o.staticRenderFns=[]},"5f9f":function(t,e,s){"use strict";var i=s("7095"),n=s.n(i);n.a},7095:function(t,e,s){},"89dc":function(t,e,s){"use strict";var i=s("d281"),n=s.n(i);n.a},aa6b:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-bar"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[s("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[s("i",{staticClass:"back-icon"})])],2),t._t("left")],2),s("div",{staticClass:"nav-center"},[s("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),s("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[s("i",{staticClass:"more-icon"})])],2)],2)])},n=[],r={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},o=r,a=(s("5f9f"),s("2877")),c=Object(a["a"])(o,i,n,!1,null,"96b87444",null);e["a"]=c.exports},d281:function(t,e,s){},ec9f:function(t,e,s){"use strict";s.r(e);var i,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"fix"},[s("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("提现")])],1),s("div",{staticClass:"payment-view"},[s("div",{staticClass:"bg"}),s("div",{staticClass:"payment-content"},[s("div",{staticClass:"payment"},[s("div",{staticClass:"money"},[s("span",{staticClass:"em"},[t._v(t._s(t.user_data.money_available))]),s("span",[t._v("可提现")])])]),s("div",{staticClass:"payment-detail"},[s("div",{staticClass:"money"},[s("span",{staticClass:"em"},[t._v(t._s(t.user_data.money))]),s("span",[t._v("总金额")])]),s("div",{staticClass:"money"},[s("span",{staticClass:"em"},[t._v(t._s((t.user_data.money-t.user_data.money_available).toFixed(4)))]),s("span",[t._v("待结算")])])])])]),t._m(0),s("div",{staticClass:"payment-account"},[s("div",[t._v("提现账号")]),t.user_cms_user_payment.member_id?s("div",{on:{click:function(e){return t.navToPage("/user/set/cash")}}},[t._v(t._s(t.user_cms_user_payment.alipay_account)+"("+t._s(t.user_cms_user_payment.payee_name)+")")]):s("div",{on:{click:function(e){return t.navToPage("/user/set/cash")}}},[t._v("设置账号")])]),s("div",{staticClass:"input-content"},[s("div",{staticClass:"input-item"},[s("span",{staticClass:"tit"},[t._v("提现金额(元)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],attrs:{type:"number",placeholder:"输入提现金额",maxlength:"11","data-key":"money"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),s("div",{staticClass:"input-item"},[t.user_data.withdraws>0?s("span",{staticClass:"em"},[t._v("\n\t\t\t\t提醒:每次提现需大于"+t._s(t.user_data.limit_money)+"元\n\t\t\t")]):s("span",{staticClass:"em"},[t._v("\n\t\t\t\t提醒:首次提现需要大于"+t._s(t.user_data.payment_first_money)+"，后每次提现满"+t._s(t.user_data.limit_money)+"元即可\n\t\t\t")])])]),s("div",{staticClass:"mix-btn",attrs:{disabled:t.logining},on:{click:t.payment}},[t._v("确认提现")]),t._m(1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"payment-introduce"},[s("div",[t._v("每月23日后可提现上月结算佣金")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip"},[s("div",{staticClass:"tip-item"},[t._v("注意事项")]),s("div",{staticClass:"tip-item"},[t._v("1.提现实时自动转账")]),s("div",{staticClass:"tip-item"},[t._v("2.遇特殊情况，自动转账失败的，2个工作日人工转账处理，耐心等待")]),s("div",{staticClass:"tip-item"},[t._v("3.提现金额将在提现确认后,转入您的支付宝,您可以在支付宝账单中查询")]),s("div",{staticClass:"tip-item"},[t._v("4.若您存在违规行为,我们有权驳回您的提现申请;")])])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("1861")),a=s.n(o),c=s("bd86"),l=(s("7f7f"),s("556d")),h=s.n(l),u=s("5880"),f=s("aa6b");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(s,!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={components:(i={},Object(c["a"])(i,h.a.name,h.a),Object(c["a"])(i,"navBar",f["a"]),i),data:function(){return{money:0,user_data:{},user_cms_data:{},user_cms_user_payment:{},logining:!1}},mounted:function(){this.query(),this.query_payment()},computed:m({},Object(u["mapState"])(["hasLogin","userInfo"])),methods:{back:function(){this.$router.go(-1)},navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var s=this;this.$nextTick((function(){s.$router.push({path:t,query:e||{}})}))},inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},navTo:function(t){this.navToPage(t,{})},payment:function(){var t=this;this.logining=!0;var e=this.money;this.$http.post("/cms/member/payment/payment",{paymentMoney:e}).then((function(e){a.a.info(e.info.status_err),t.logining=!1}))},query_payment:function(){var t=this;this.$http.post("/cms/member/payment/account",{}).then((function(e){e.data.item&&(t.user_cms_user_payment=e.data.item)}))},query:function(){var t=this;this.$http.post("/cms/member/info/getdata",{}).then((function(e){e.data.user_data&&(t.user_data=e.data.user_data),e.data.user_cms_data&&(t.user_cms_data=e.data.user_cms_data)}))}}},p=v,_=(s("89dc"),s("2877")),g=Object(_["a"])(p,n,r,!1,null,"020b74ee",null);e["default"]=g.exports}}]);