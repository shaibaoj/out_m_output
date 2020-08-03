(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dc20f70"],{"2f41":function(e,t,s){var i,r,o;(function(){(function(n,l){r=[t,s("aa31"),s("cb12"),s("e126"),s("0f33"),s("979a")],i=l,o="function"===typeof i?i.apply(t,r):i,void 0===o||(e.exports=o)})(0,(function(e,t,s,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}e.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(e){e?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var e=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var s=this.container,o=this.content,n=s.getBoundingClientRect(),l=new r.default((function(t,s){(0,i.render)(o,t,s),e.isInitialed&&e.$_onScroll(t,s)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});l.setPosition(n.left+s.clientLeft,n.top+s.clientTop),this.hasRefresher&&l.activatePullToRefresh(this.refreshOffsetY,(function(){e.isRefreshActive=!0,e.isRefreshing=!1,e.$emit("refreshActive")}),(function(){e.isRefreshActive=!1,e.isRefreshing=!1}),(function(){e.isRefreshActive=!1,e.isRefreshing=!0,e.$emit("refreshing")})),this.scroller=l,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,t.debounce)((function(){e.isEndReaching=!0,e.$emit("endReached"),e.$emit("end-reached")}),50),setTimeout((function(){e.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var e=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){e.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var e=this.scroller._clientHeight,t=this.scroller._contentHeight,s=this.scroller._scrollTop,i=this.moreOffsetY,r=this.endReachedThreshold,o=t-e-(s+i+r);s>=0&&!this.isEndReaching&&o<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var e=this.currentX-this.startX,t=this.currentY-this.startY,s=180*Math.atan2(Math.abs(t),Math.abs(e))/Math.PI;return this.scrollingX?90-s:s},$_onScrollerTouchStart:function(e){this.scroller&&(this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY,this.scroller.doTouchStart(e.touches,e.timeStamp))},$_onScrollerTouchMove:function(e){if(this.scroller){var t=!1;if(this.isPrevent&&(e.preventDefault(),t=!0),this.currentX=e.targetTouches[0].pageX,this.currentY=e.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var s=this.$_getScrollerAngle();if(s<this.touchAngle)return}!t&&e.cancelable&&e.preventDefault(),this.scroller.doTouchMove(e.touches,e.timeStamp,e.scale);var i=15,r=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,o=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,n=this.currentX-r,l=this.currentY-o;(n>document.documentElement.clientWidth-i||l>document.documentElement.clientHeight-i||n<i||l<i)&&this.scroller.doTouchEnd(e.timeStamp)}},$_onScrollerTouchEnd:function(e){this.scroller&&this.scroller.doTouchEnd(e.timeStamp)},$_onScrollerMouseDown:function(e){this.scroller&&(this.startX=e.pageX,this.startY=e.pageY,this.scroller.doTouchStart([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(e){if(this.scroller&&this.isMouseDown){if(this.currentX=e.pageX,this.currentY=e.pageY,!this.scrollingX||!this.scrollingY){var t=this.$_getScrollerAngle();if(t<this.touchAngle)return}this.scroller.doTouchMove([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(e){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(e.timeStamp),this.isMouseDown=!1)},$_onScroll:function(e,t){e=+e.toFixed(2),t=+t.toFixed(2),this.scrollX===e&&this.scrollY===t||(this.scrollX=e,this.scrollY=t,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:e,scrollTop:t}))},init:function(){var e=this;this.$nextTick((function(){e.$_initScroller()}))},scrollTo:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(e,t,s)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.container,i=this.content;this.scroller&&s&&i&&this.$nextTick((function(){var r=s.clientWidth,o=s.clientHeight,n=i.offsetWidth,l=i.offsetHeight;(t||e.containerW!==r||e.containerH!==o||e.contentW!==n||e.contentH!==l)&&(e.scroller.setDimensions(s.clientWidth,s.clientHeight,i.offsetWidth,i.offsetHeight),e.containerW=r,e.containerH=o,e.contentW=n,e.contentH=l)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var n="function"===typeof e.exports?e.exports.options:e.exports;n.render=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"md-scroll-view",on:{touchstart:e.$_onScrollerTouchStart,touchmove:e.$_onScrollerTouchMove,touchend:e.$_onScrollerTouchEnd,touchcancel:e.$_onScrollerTouchEnd,mousedown:e.$_onScrollerMouseDown,mousemove:e.$_onScrollerMouseMove,mouseup:e.$_onScrollerMouseUp,mouseleave:e.$_onScrollerMouseUp}},[e.$slots.header?s("div",{staticClass:"scroll-view-header"},[e._t("header")],2):e._e(),e._v(" "),s("div",{staticClass:"scroll-view-container",class:{horizon:e.scrollingX&&!e.scrollingY},attrs:{"scroll-wrapper":""}},[e.hasRefresher?s("div",{staticClass:"scroll-view-refresh",class:{refreshing:e.isRefreshing,"refresh-active":e.isRefreshActive}},[e._t("refresh",null,{scrollTop:e.scrollY,isRefreshing:e.isRefreshing,isRefreshActive:e.isRefreshActive})],2):e._e(),e._v(" "),e._t("default"),e._v(" "),e.hasMore?s("div",{staticClass:"scroll-view-more",class:{active:e.isEndReachingStart||e.isEndReaching}},[e._t("more",null,{isEndReaching:e.isEndReachingStart||e.isEndReaching})],2):e._e()],2),e._v(" "),e.$slots.footer?s("div",{staticClass:"scroll-view-footer"},[e._t("footer")],2):e._e()])},n.staticRenderFns=[]},"45c4":function(e,t,s){},"5d2f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"searchbox"},[s("div",{staticClass:"go-home",on:{click:e.goHome}},[s("md-icon",{attrs:{name:"arrow-left",color:"#fff",size:"lg"}})],1),s("div",{staticClass:"search-input",on:{click:e.search}},[s("span",{staticClass:"search-text"},[e._v("搜索宝贝")])])]),s("md-scroll-view",{staticClass:"tab-view",attrs:{"scrolling-x":!1,"scroll-with-animation":"","scroll-top":e.scrollTop}},e._l(e.tabbar,(function(t,i){return s("div",{key:i,staticClass:"tab-bar-item",class:[e.currentTab==i?"active":""],attrs:{"data-current":i},on:{click:function(t){return t.stopPropagation(),e.swichNav(t)}}},[s("span",[e._v(e._s(t.name))])])})),0),s("md-scroll-view",{staticClass:"right-box",attrs:{"scrolling-x":!1}},[s("div",{staticClass:"page-view"},[s("div",{staticClass:"class-box"},[s("div",{staticClass:"class-item"},[s("div",{staticClass:"class-name"},[e._v(e._s(e.navItem.name))]),s("div",{staticClass:"g-container-list"},e._l(e.items,(function(t,i){return s("div",{key:i,staticClass:"g-box"},[s("a",{attrs:{href:t.click_url,target:"_blank"}},[s("img",{staticClass:"g-image",attrs:{src:t.pic_url}}),s("div",{staticClass:"g-title"},[e._v(e._s(t.sitename))]),t.commission_rate?s("div",{staticClass:"g-rate"},[e._v("最高返"+e._s(t.commission_rate))]):e._e()])])})),0)])])])])],1)},r=[],o=s("2f41"),n=s.n(o),l=s("38a8"),c=s.n(l),a={components:{[c.a.name]:c.a,[n.a.name]:n.a},data(){return{tabbar:[],items:[],navItem:{},height:0,currentTab:0,scrollTop:0}},created(){},mounted(){this.query()},methods:{goHome(){this.$nav.navTo("/",{})},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},search(){this.navToPage("/search/search")},query(){this.$http.post("/cms.mall.type_list",{}).then(e=>{e.data.items&&e.data.items&&(this.tabbar=e.data.items),this.query_items()})},query_items(){this.navItem=this.tabbar[this.currentTab];this.navItem.cid;this.$http.post("/cms.mall.list",{type_name:this.navItem.name}).then(e=>{e.data.items&&e.data.items&&(this.items=e.data.items)})},swichNav:function(e){let t=e.currentTarget.dataset.current;if(this.currentTab===t)return!1;this.currentTab=t,this.checkCor(),this.query_items()},checkCor:function(){let e=this;e.currentTab>7?e.scrollTop=500:e.scrollTop=0},navAction(e){window.location.href=e.click_url},load_action(e){},open_web(e){window.location.href=e.params.url}}},h=a,u=(s("670c"),s("9ca4")),f=Object(u["a"])(h,i,r,!1,null,"703e1806",null);t["default"]=f.exports},"670c":function(e,t,s){"use strict";var i=s("45c4"),r=s.n(i);r.a},"979a":function(e,t,s){}}]);