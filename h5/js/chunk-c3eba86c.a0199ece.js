(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3eba86c"],{"359f":function(t,e,i){},4838:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("订单信息")])],1),i("div",{staticClass:"container"},[i("div",{staticClass:"navbar"},t._l(t.navList,(function(e,s){return i("div",{key:s,staticClass:"nav-item",class:{current:t.tabCurrentIndex===s},on:{click:function(e){return t.tabClick(s)}}},[t._v("\n\t\t\t\t"+t._s(e.text)+"\n\t\t\t")])})),0),i("md-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":""},on:{scrolltolower:t.loadData}},[t._l(t.items,(function(e,s){return i("div",{key:s,staticClass:"order-item"},[0==t.tabCurrentIndex?i("div",[i("div",{staticClass:"memo"},[i("span",[t._v(t._s(e.memo))]),i("span",{staticClass:"num"},[t._v("+"+t._s(e.points))])]),i("div",{staticClass:"attr-box"},[i("span",[t._v(t._s(e.create_date))])])]):i("div",[i("div",{staticClass:"memo"},[i("span",[t._v(t._s(e.pay_memo))]),i("span",{staticClass:"num"},[t._v("-"+t._s(e.points))])]),i("div",{staticClass:"attr-box"},[i("span",[t._v(t._s(e.create_date))])])])])})),i("load-more",{attrs:{visible:t.loading}})],2)],1)])},o=[],n=i("556d"),r=i.n(n),l=i("db8e"),a=i("aa6b"),c={components:{[r.a.name]:r.a,navBar:a["a"],loadMore:l["a"]},data(){return{page:{ipage:0,hasMore:!0},tabCurrentIndex:0,navList:[{text:"积分收入"},{text:"积分支出"}],items:[],loading:!1}},mounted(){this.$route.query.state&&(this.tabCurrentIndex=+this.$route.query.state),this.loadData()},methods:{back(){this.$router.go(-1)},loadData(t){"tabChange"===t&&(this.items=[]),!0!==this.loading&&(this.loading=!0,0===this.tabCurrentIndex?(this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.order.list",{maxPoints:.01,ipage:this.page.ipage}).then(t=>{this.loading=!1,t.data.items&&this.items.push(...t.data.items)})):(this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.point.list",{maxPoints:.01,ipage:this.page.ipage}).then(t=>{this.loading=!1,t.data.items&&this.items.push(...t.data.items)})))},changeTab(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick(t){this.tabCurrentIndex=t,this.loading=!1,this.page.ipage=0,this.loadData("tabChange")}}},h=c,u=(i("b4fa"),i("2877")),d=Object(u["a"])(h,s,o,!1,null,"da13368c",null);e["default"]=d.exports},"556d":function(t,e,i){var s,o,n;(function(){(function(r,l){o=[e,i("f1c1"),i("6464"),i("aac4"),i("cdfc"),i("359f")],s=l,n="function"===typeof s?s.apply(e,o):s,void 0===n||(t.exports=n)})(0,(function(t,e,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(i);function n(t){return t&&t.__esModule?t:{default:t}}t.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(t){t?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var t=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var i=this.container,n=this.content,r=i.getBoundingClientRect(),l=new o.default((function(e,i){(0,s.render)(n,e,i),t.isInitialed&&t.$_onScroll(e,i)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});l.setPosition(r.left+i.clientLeft,r.top+i.clientTop),this.hasRefresher&&l.activatePullToRefresh(this.refreshOffsetY,(function(){t.isRefreshActive=!0,t.isRefreshing=!1,t.$emit("refreshActive")}),(function(){t.isRefreshActive=!1,t.isRefreshing=!1}),(function(){t.isRefreshActive=!1,t.isRefreshing=!0,t.$emit("refreshing")})),this.scroller=l,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,e.debounce)((function(){t.isEndReaching=!0,t.$emit("endReached"),t.$emit("end-reached")}),50),setTimeout((function(){t.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var t=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){t.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var t=this.scroller._clientHeight,e=this.scroller._contentHeight,i=this.scroller._scrollTop,s=this.moreOffsetY,o=this.endReachedThreshold,n=e-t-(i+s+o);i>=0&&!this.isEndReaching&&n<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var t=this.currentX-this.startX,e=this.currentY-this.startY,i=180*Math.atan2(Math.abs(e),Math.abs(t))/Math.PI;return this.scrollingX?90-i:i},$_onScrollerTouchStart:function(t){this.scroller&&(this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.scroller.doTouchStart(t.touches,t.timeStamp))},$_onScrollerTouchMove:function(t){if(this.scroller){var e=!1;if(this.isPrevent&&(t.preventDefault(),e=!0),this.currentX=t.targetTouches[0].pageX,this.currentY=t.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var i=this.$_getScrollerAngle();if(i<this.touchAngle)return}!e&&t.cancelable&&t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp,t.scale);var s=15,o=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,r=this.currentX-o,l=this.currentY-n;(r>document.documentElement.clientWidth-s||l>document.documentElement.clientHeight-s||r<s||l<s)&&this.scroller.doTouchEnd(t.timeStamp)}},$_onScrollerTouchEnd:function(t){this.scroller&&this.scroller.doTouchEnd(t.timeStamp)},$_onScrollerMouseDown:function(t){this.scroller&&(this.startX=t.pageX,this.startY=t.pageY,this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(t){if(this.scroller&&this.isMouseDown){if(this.currentX=t.pageX,this.currentY=t.pageY,!this.scrollingX||!this.scrollingY){var e=this.$_getScrollerAngle();if(e<this.touchAngle)return}this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(t){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(t.timeStamp),this.isMouseDown=!1)},$_onScroll:function(t,e){t=+t.toFixed(2),e=+e.toFixed(2),this.scrollX===t&&this.scrollY===e||(this.scrollX=t,this.scrollY=e,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:t,scrollTop:e}))},init:function(){var t=this;this.$nextTick((function(){t.$_initScroller()}))},scrollTo:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(t,e,i)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.container,s=this.content;this.scroller&&i&&s&&this.$nextTick((function(){var o=i.clientWidth,n=i.clientHeight,r=s.offsetWidth,l=s.offsetHeight;(e||t.containerW!==o||t.containerH!==n||t.contentW!==r||t.contentH!==l)&&(t.scroller.setDimensions(i.clientWidth,i.clientHeight,s.offsetWidth,s.offsetHeight),t.containerW=o,t.containerH=n,t.contentW=r,t.contentH=l)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-scroll-view",on:{touchstart:t.$_onScrollerTouchStart,touchmove:t.$_onScrollerTouchMove,touchend:t.$_onScrollerTouchEnd,touchcancel:t.$_onScrollerTouchEnd,mousedown:t.$_onScrollerMouseDown,mousemove:t.$_onScrollerMouseMove,mouseup:t.$_onScrollerMouseUp,mouseleave:t.$_onScrollerMouseUp}},[t.$slots.header?i("div",{staticClass:"scroll-view-header"},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"scroll-view-container",class:{horizon:t.scrollingX&&!t.scrollingY},attrs:{"scroll-wrapper":""}},[t.hasRefresher?i("div",{staticClass:"scroll-view-refresh",class:{refreshing:t.isRefreshing,"refresh-active":t.isRefreshActive}},[t._t("refresh",null,{scrollTop:t.scrollY,isRefreshing:t.isRefreshing,isRefreshActive:t.isRefreshActive})],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasMore?i("div",{staticClass:"scroll-view-more",class:{active:t.isEndReachingStart||t.isEndReaching}},[t._t("more",null,{isEndReaching:t.isEndReachingStart||t.isEndReaching})],2):t._e()],2),t._v(" "),t.$slots.footer?i("div",{staticClass:"scroll-view-footer"},[t._t("footer")],2):t._e()])},r.staticRenderFns=[]},"5f9f":function(t,e,i){"use strict";var s=i("7095"),o=i.n(s);o.a},"68d2":function(t,e,i){},7095:function(t,e,i){},aa6b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},o=[],n={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},r=n,l=(i("5f9f"),i("2877")),a=Object(l["a"])(r,s,o,!1,null,"96b87444",null);e["a"]=a.exports},b4fa:function(t,e,i){"use strict";var s=i("68d2"),o=i.n(s);o.a},bfb8:function(t,e,i){},db8e:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("div",{staticClass:"loadmore"},[i("div",{class:["loading-"+t.index,3==t.index&&t.type?"loading-"+t.type:""]}),i("div",{staticClass:"loadmore-tips"},[t._v(t._s(t.text))])]):t._e()},o=[],n={name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}},r=n,l=(i("f7dd"),i("2877")),a=Object(l["a"])(r,s,o,!1,null,"001f267e",null);e["a"]=a.exports},f7dd:function(t,e,i){"use strict";var s=i("bfb8"),o=i.n(s);o.a}}]);