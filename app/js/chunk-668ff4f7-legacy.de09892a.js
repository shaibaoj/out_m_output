(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-668ff4f7"],{"2f41":function(t,e,i){var s,o,r;(function(){(function(n,c){o=[e,i("aa31"),i("cb12"),i("e126"),i("0f33"),i("979a")],s=c,r="function"===typeof s?s.apply(e,o):s,void 0===r||(t.exports=r)})(0,(function(t,e,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(i);function r(t){return t&&t.__esModule?t:{default:t}}t.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(t){t?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var t=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var i=this.container,r=this.content,n=i.getBoundingClientRect(),c=new o.default((function(e,i){(0,s.render)(r,e,i),t.isInitialed&&t.$_onScroll(e,i)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});c.setPosition(n.left+i.clientLeft,n.top+i.clientTop),this.hasRefresher&&c.activatePullToRefresh(this.refreshOffsetY,(function(){t.isRefreshActive=!0,t.isRefreshing=!1,t.$emit("refreshActive")}),(function(){t.isRefreshActive=!1,t.isRefreshing=!1}),(function(){t.isRefreshActive=!1,t.isRefreshing=!0,t.$emit("refreshing")})),this.scroller=c,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,e.debounce)((function(){t.isEndReaching=!0,t.$emit("endReached"),t.$emit("end-reached")}),50),setTimeout((function(){t.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var t=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){t.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var t=this.scroller._clientHeight,e=this.scroller._contentHeight,i=this.scroller._scrollTop,s=this.moreOffsetY,o=this.endReachedThreshold,r=e-t-(i+s+o);i>=0&&!this.isEndReaching&&r<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var t=this.currentX-this.startX,e=this.currentY-this.startY,i=180*Math.atan2(Math.abs(e),Math.abs(t))/Math.PI;return this.scrollingX?90-i:i},$_onScrollerTouchStart:function(t){this.scroller&&(this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.scroller.doTouchStart(t.touches,t.timeStamp))},$_onScrollerTouchMove:function(t){if(this.scroller){var e=!1;if(this.isPrevent&&(t.preventDefault(),e=!0),this.currentX=t.targetTouches[0].pageX,this.currentY=t.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var i=this.$_getScrollerAngle();if(i<this.touchAngle)return}!e&&t.cancelable&&t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp,t.scale);var s=15,o=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,n=this.currentX-o,c=this.currentY-r;(n>document.documentElement.clientWidth-s||c>document.documentElement.clientHeight-s||n<s||c<s)&&this.scroller.doTouchEnd(t.timeStamp)}},$_onScrollerTouchEnd:function(t){this.scroller&&this.scroller.doTouchEnd(t.timeStamp)},$_onScrollerMouseDown:function(t){this.scroller&&(this.startX=t.pageX,this.startY=t.pageY,this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(t){if(this.scroller&&this.isMouseDown){if(this.currentX=t.pageX,this.currentY=t.pageY,!this.scrollingX||!this.scrollingY){var e=this.$_getScrollerAngle();if(e<this.touchAngle)return}this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(t){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(t.timeStamp),this.isMouseDown=!1)},$_onScroll:function(t,e){t=+t.toFixed(2),e=+e.toFixed(2),this.scrollX===t&&this.scrollY===e||(this.scrollX=t,this.scrollY=e,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:t,scrollTop:e}))},init:function(){var t=this;this.$nextTick((function(){t.$_initScroller()}))},scrollTo:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(t,e,i)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.container,s=this.content;this.scroller&&i&&s&&this.$nextTick((function(){var o=i.clientWidth,r=i.clientHeight,n=s.offsetWidth,c=s.offsetHeight;(e||t.containerW!==o||t.containerH!==r||t.contentW!==n||t.contentH!==c)&&(t.scroller.setDimensions(i.clientWidth,i.clientHeight,s.offsetWidth,s.offsetHeight),t.containerW=o,t.containerH=r,t.contentW=n,t.contentH=c)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var n="function"===typeof t.exports?t.exports.options:t.exports;n.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-scroll-view",on:{touchstart:t.$_onScrollerTouchStart,touchmove:t.$_onScrollerTouchMove,touchend:t.$_onScrollerTouchEnd,touchcancel:t.$_onScrollerTouchEnd,mousedown:t.$_onScrollerMouseDown,mousemove:t.$_onScrollerMouseMove,mouseup:t.$_onScrollerMouseUp,mouseleave:t.$_onScrollerMouseUp}},[t.$slots.header?i("div",{staticClass:"scroll-view-header"},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"scroll-view-container",class:{horizon:t.scrollingX&&!t.scrollingY},attrs:{"scroll-wrapper":""}},[t.hasRefresher?i("div",{staticClass:"scroll-view-refresh",class:{refreshing:t.isRefreshing,"refresh-active":t.isRefreshActive}},[t._t("refresh",null,{scrollTop:t.scrollY,isRefreshing:t.isRefreshing,isRefreshActive:t.isRefreshActive})],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasMore?i("div",{staticClass:"scroll-view-more",class:{active:t.isEndReachingStart||t.isEndReaching}},[t._t("more",null,{isEndReaching:t.isEndReachingStart||t.isEndReaching})],2):t._e()],2),t._v(" "),t.$slots.footer?i("div",{staticClass:"scroll-view-footer"},[t._t("footer")],2):t._e()])},n.staticRenderFns=[]},"6c33":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"searchbox"},[i("div",{staticClass:"search-input",on:{click:t.search}},[i("span",{staticClass:"search-text"},[t._v("搜索宝贝")])])]),i("md-scroll-view",{staticClass:"tab-view",attrs:{"scrolling-x":!1,"scroll-with-animation":"","scroll-top":t.scrollTop}},t._l(t.tabbar,(function(e,s){return i("div",{key:s,staticClass:"tab-bar-item",class:[t.currentTab==s?"active":""],attrs:{"data-current":s},on:{click:function(e){return e.stopPropagation(),t.swichNav(e)}}},[i("span",[t._v(t._s(e.short_name))])])})),0),t._l(t.tabbar,(function(e,s){return[t.currentTab==s?i("md-scroll-view",{key:s,staticClass:"right-box",attrs:{"scrolling-x":!1}},[i("div",{staticClass:"page-view"},[i("div",{staticClass:"class-box"},[i("div",{staticClass:"class-item"},[i("div",{staticClass:"class-name"},[t._v(t._s(e.short_name))]),i("div",{staticClass:"g-container"},t._l(e.items,(function(e,s){return i("div",{key:s,staticClass:"g-box",on:{click:function(i){return i.stopPropagation(),t.navAction(e)}}},[i("img",{staticClass:"g-image",attrs:{src:e.imageUrl}}),i("div",{staticClass:"g-title"},[t._v(t._s(e.title))])])})),0)])])])]):t._e()]}))],2)},o=[],r=i("73d1"),n=(i("cc57"),i("2f41")),c=i.n(n),l={components:Object(r["a"])({},c.a.name,c.a),data:function(){return{tabbar:[],height:0,currentTab:0,scrollTop:0}},created:function(){},mounted:function(){this.query()},methods:{navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},search:function(){this.navToPage("/search/search")},query:function(){var t=this;this.$http.post("/cms.cate.all",{}).then((function(e){e.data.items&&e.data.items&&(t.tabbar=e.data.items)}))},swichNav:function(t){var e=t.currentTarget.dataset.current;if(this.currentTab===e)return!1;this.currentTab=e,this.checkCor()},checkCor:function(){var t=this;t.currentTab>7?t.scrollTop=500:t.scrollTop=0},navAction:function(t){t.pages?this.navToPage(t.pages):"search"===t.jsaction?this.navToPage("search/list",{q:t.text}):"load_action"===t.action.action?this.load_action(t.action):"open_web"===t.action.action&&this.open_web(t.action)},load_action:function(t){var e={};console.log(t),e=Object.assign(e,t.params),this.$http.post("/cms.load.view",e).then((function(t){t.data.item.click&&t.data.item.click.we_app_web_view_url&&(window.location.href=t.data.item.click.we_app_web_view_url)}))},open_web:function(t){window.location.href=t.params.url}}},a=l,h=(i("b212"),i("9ca4")),u=Object(h["a"])(a,s,o,!1,null,"76cd774a",null);e["default"]=u.exports},9193:function(t,e,i){},"979a":function(t,e,i){},b212:function(t,e,i){"use strict";var s=i("9193"),o=i.n(s);o.a}}]);