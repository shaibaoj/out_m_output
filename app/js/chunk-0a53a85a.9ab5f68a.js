(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a53a85a"],{"2a22":function(e,t,s){},"359f":function(e,t,s){},"556d":function(e,t,s){var i,r,o;(function(){(function(n,a){r=[t,s("f1c1"),s("6464"),s("aac4"),s("cdfc"),s("359f")],i=a,o="function"===typeof i?i.apply(t,r):i,void 0===o||(e.exports=o)})(0,(function(e,t,s,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}e.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(e){e?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var e=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var s=this.container,o=this.content,n=s.getBoundingClientRect(),a=new r.default((function(t,s){(0,i.render)(o,t,s),e.isInitialed&&e.$_onScroll(t,s)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});a.setPosition(n.left+s.clientLeft,n.top+s.clientTop),this.hasRefresher&&a.activatePullToRefresh(this.refreshOffsetY,(function(){e.isRefreshActive=!0,e.isRefreshing=!1,e.$emit("refreshActive")}),(function(){e.isRefreshActive=!1,e.isRefreshing=!1}),(function(){e.isRefreshActive=!1,e.isRefreshing=!0,e.$emit("refreshing")})),this.scroller=a,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,t.debounce)((function(){e.isEndReaching=!0,e.$emit("endReached"),e.$emit("end-reached")}),50),setTimeout((function(){e.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var e=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){e.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var e=this.scroller._clientHeight,t=this.scroller._contentHeight,s=this.scroller._scrollTop,i=this.moreOffsetY,r=this.endReachedThreshold,o=t-e-(s+i+r);s>=0&&!this.isEndReaching&&o<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var e=this.currentX-this.startX,t=this.currentY-this.startY,s=180*Math.atan2(Math.abs(t),Math.abs(e))/Math.PI;return this.scrollingX?90-s:s},$_onScrollerTouchStart:function(e){this.scroller&&(this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY,this.scroller.doTouchStart(e.touches,e.timeStamp))},$_onScrollerTouchMove:function(e){if(this.scroller){var t=!1;if(this.isPrevent&&(e.preventDefault(),t=!0),this.currentX=e.targetTouches[0].pageX,this.currentY=e.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var s=this.$_getScrollerAngle();if(s<this.touchAngle)return}!t&&e.cancelable&&e.preventDefault(),this.scroller.doTouchMove(e.touches,e.timeStamp,e.scale);var i=15,r=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,o=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,n=this.currentX-r,a=this.currentY-o;(n>document.documentElement.clientWidth-i||a>document.documentElement.clientHeight-i||n<i||a<i)&&this.scroller.doTouchEnd(e.timeStamp)}},$_onScrollerTouchEnd:function(e){this.scroller&&this.scroller.doTouchEnd(e.timeStamp)},$_onScrollerMouseDown:function(e){this.scroller&&(this.startX=e.pageX,this.startY=e.pageY,this.scroller.doTouchStart([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(e){if(this.scroller&&this.isMouseDown){if(this.currentX=e.pageX,this.currentY=e.pageY,!this.scrollingX||!this.scrollingY){var t=this.$_getScrollerAngle();if(t<this.touchAngle)return}this.scroller.doTouchMove([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(e){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(e.timeStamp),this.isMouseDown=!1)},$_onScroll:function(e,t){e=+e.toFixed(2),t=+t.toFixed(2),this.scrollX===e&&this.scrollY===t||(this.scrollX=e,this.scrollY=t,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:e,scrollTop:t}))},init:function(){var e=this;this.$nextTick((function(){e.$_initScroller()}))},scrollTo:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(e,t,s)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.container,i=this.content;this.scroller&&s&&i&&this.$nextTick((function(){var r=s.clientWidth,o=s.clientHeight,n=i.offsetWidth,a=i.offsetHeight;(t||e.containerW!==r||e.containerH!==o||e.contentW!==n||e.contentH!==a)&&(e.scroller.setDimensions(s.clientWidth,s.clientHeight,i.offsetWidth,i.offsetHeight),e.containerW=r,e.containerH=o,e.contentW=n,e.contentH=a)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var n="function"===typeof e.exports?e.exports.options:e.exports;n.render=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"md-scroll-view",on:{touchstart:e.$_onScrollerTouchStart,touchmove:e.$_onScrollerTouchMove,touchend:e.$_onScrollerTouchEnd,touchcancel:e.$_onScrollerTouchEnd,mousedown:e.$_onScrollerMouseDown,mousemove:e.$_onScrollerMouseMove,mouseup:e.$_onScrollerMouseUp,mouseleave:e.$_onScrollerMouseUp}},[e.$slots.header?s("div",{staticClass:"scroll-view-header"},[e._t("header")],2):e._e(),e._v(" "),s("div",{staticClass:"scroll-view-container",class:{horizon:e.scrollingX&&!e.scrollingY},attrs:{"scroll-wrapper":""}},[e.hasRefresher?s("div",{staticClass:"scroll-view-refresh",class:{refreshing:e.isRefreshing,"refresh-active":e.isRefreshActive}},[e._t("refresh",null,{scrollTop:e.scrollY,isRefreshing:e.isRefreshing,isRefreshActive:e.isRefreshActive})],2):e._e(),e._v(" "),e._t("default"),e._v(" "),e.hasMore?s("div",{staticClass:"scroll-view-more",class:{active:e.isEndReachingStart||e.isEndReaching}},[e._t("more",null,{isEndReaching:e.isEndReachingStart||e.isEndReaching})],2):e._e()],2),e._v(" "),e.$slots.footer?s("div",{staticClass:"scroll-view-footer"},[e._t("footer")],2):e._e()])},n.staticRenderFns=[]},"5f9f":function(e,t,s){"use strict";var i=s("7095"),r=s.n(i);r.a},6086:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("div",{staticClass:"fix"},[s("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":e.back}},[e._v("团队绩效")])],1),s("div",{staticClass:"container"},[s("div",{staticClass:"header"}),s("div",{staticClass:"box"},[s("div",{staticClass:"box-line line"},[s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_data.money_total))]),s("span",[e._v("累计总收入")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_data.members))]),s("span",[e._v("累计总粉丝")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_data.orders))]),s("span",[e._v("累计总订单")])])]),s("div",{staticClass:"box-line "},[s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_premonth.money_available))]),s("span",[e._v("结算收入")]),s("span",{staticClass:"tip"},[e._v("上月佣金")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_month.money))]),s("span",[e._v("预估收入")]),s("span",{staticClass:"tip"},[e._v("本月佣金")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_premonth.money))]),s("span",[e._v("预估收入")]),s("span",{staticClass:"tip"},[e._v("上月佣金")])])])]),s("div",{staticClass:"box"},[s("div",{staticClass:"box-title line"},[e._v("\n                    实时收入\n                ")]),s("div",{staticClass:"box-line "},[s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_today.money_available))]),s("span",[e._v("付款订单数")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_today.money))]),s("span",[e._v("预估佣金")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_today.members))]),s("span",[e._v("增加粉丝")])])])]),s("div",{staticClass:"box"},[s("div",{staticClass:"box-title line"},[e._v("\n                    昨日数据\n                ")]),s("div",{staticClass:"box-line "},[s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_yestoday.money_available))]),s("span",[e._v("付款订单数")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_yestoday.money))]),s("span",[e._v("预估佣金")])]),s("div",{staticClass:"box-item"},[s("span",{staticClass:"num"},[e._v(e._s(e.user_cms_user_data_yestoday.members))]),s("span",[e._v("增加粉丝")])])])])])])},r=[],o=(s("ac6a"),s("ade3")),n=s("556d"),a=s.n(n),l=s("5880"),c=s("aa6b");function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d={components:{[a.a.name]:a.a,navBar:c["a"]},data(){return{user_data:{money_available:0,money:0,members:0},user_cms_user_data_premonth:{money_available:0,money:0,members:0},user_cms_user_data_month:{money_available:0,money:0,members:0},user_cms_user_data_today:{money_available:0,money:0,members:0},user_cms_user_data_yestoday:{money_available:0,money:0,members:0}}},mounted(){this.query()},computed:u({},Object(l["mapState"])(["hasLogin","userInfo"])),methods:{back(){this.$router.go(-1)},navAction(e){this.$nav.toNav(e)},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},inputChange(e){const t=e.currentTarget.dataset.key;this[t]=e.detail.value},navTo(e){this.navToPage(e,{})},query(){this.$http.post("/cms.member.info.getdata_detail",{}).then(e=>{e.data.user_data&&(this.user_data=e.data.user_data),e.data.user_cms_user_data_month&&(this.user_cms_user_data_month=e.data.user_cms_user_data_month),e.data.user_cms_user_data_today&&(this.user_cms_user_data_today=e.data.user_cms_user_data_today),e.data.user_cms_user_data_yestoday&&(this.user_cms_user_data_yestoday=e.data.user_cms_user_data_yestoday)})}}},f=d,_=(s("fd51"),s("2877")),m=Object(_["a"])(f,i,r,!1,null,"0f72a06f",null);t["default"]=m.exports},7095:function(e,t,s){},aa6b:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-bar"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[s("div",{staticClass:"back",on:{click:function(t){return e.$emit("on-click-back")}}},[e._t("back-icon",[s("i",{staticClass:"back-icon"})])],2),e._t("left")],2),s("div",{staticClass:"nav-center"},[s("h3",{staticClass:"nav-title",on:{click:function(t){return e.$emit("on-click-title")}}},[e._t("default",[s("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[e._t("right"),s("div",{staticClass:"more",on:{click:function(t){return e.$emit("on-click-more")}}},[e._t("more-icon",[s("i",{staticClass:"more-icon"})])],2)],2)])},r=[],o={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},n=o,a=(s("5f9f"),s("2877")),l=Object(a["a"])(n,i,r,!1,null,"96b87444",null);t["a"]=l.exports},fd51:function(e,t,s){"use strict";var i=s("2a22"),r=s.n(i);r.a}}]);