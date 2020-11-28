(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fab703ce"],{"234b":function(e,t,i){},"26c9":function(e,t,i){var s,n,r;(function(){(function(o,l){n=[t,i("556d"),i("cdfc"),i("234b")],s=l,r="function"===typeof s?s.apply(t,n):s,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(t);function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-tab-bar",components:n({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var e=0,t=this.items.length;e<t;e++)if(this.items[e].name===this.currentName)return e},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(e){e!==this.currentName&&(this.currentName=e)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(e){var t=e.scrollLeft;this.maskStartShown=t>0,t>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(e,t){e.disabled||(this.$emit("change",e,t,this.currentIndex),this.currentName=e.name,this.$emit("input",e.name))},$_resizeEnterBehavior:function(){var e=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){e.$emit("change",e.items[e.currentIndex],e.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var e=this;if(this.$refs.items&&0!==this.$refs.items.length){var t=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=t.width;for(var i=0,s=0,n=this.items.length;s<n;s++){var r=this.$refs.items[s].getBoundingClientRect(),o=r.width;i+=o}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(e.$refs.items&&e.$refs.items[e.currentIndex]){var t=e.$refs.items[e.currentIndex];e.inkWidth=t.offsetWidth*e.inkLength/100,e.inkPos=t.offsetLeft+(t.offsetWidth-e.inkWidth)/2;var i=e.$refs.items[e.currentIndex-1],s=e.$refs.items[e.currentIndex+1];if(i)if(s){var n=e.$refs.wrapper.getBoundingClientRect(),r=i.getBoundingClientRect(),o=s.getBoundingClientRect();r&&r.left<n.left?e.$refs.scroller.scrollTo(i.offsetLeft,0,!0):o&&o.right>n.right&&e.$refs.scroller.scrollTo(s.offsetLeft+s.offsetWidth-e.wrapperW,0,!0)}else e.$refs.scroller.scrollTo(e.contentW,0,!0);else e.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var o="function"===typeof e.exports?e.exports.options:e.exports;o.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[e.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:e.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:e._e(),e._v(" "),i("md-scroll-view",{key:e.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":e.scrollable,"scrolling-y":!1},on:{scroll:e.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:e.contentW+"px"}},e._l(e.items,(function(t,s){return i("a",{key:t.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":e.currentName===t.name,"is-disabled":!!t.disabled},on:{click:function(i){return e.$_onClick(t,s)}}},[e._t("item",[e._v(e._s(t.label))],{item:t,items:e.items,index:s,currentName:e.currentName})],2)})),0),e._v(" "),e.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":e.currentTab&&e.currentTab.disabled},style:{width:e.inkWidth+"px",transform:"translateX("+e.inkPos+"px)"}}):e._e()])],2)])},o.staticRenderFns=[]},"359f":function(e,t,i){},"439e":function(e,t,i){"use strict";var s=i("43e3"),n=i.n(s);n.a},"43e3":function(e,t,i){},4622:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("md-tab-bar",{attrs:{items:e.navList,maxLength:5},on:{change:e.changeTab},model:{value:e.tabCurrentIndex,callback:function(t){e.tabCurrentIndex=t},expression:"tabCurrentIndex"}}),i("div",{staticClass:"list"},[e._l(e.items,(function(e,t){return i("goods",{key:t,attrs:{top:t+1,itemData:e,goodsType:"list"}})})),i("load-more",{attrs:{visible:e.loading}})],2)],1)},n=[],r=i("26c9"),o=i.n(r),l=i("db8e"),a=i("a288"),c={components:{loadMore:l["a"],[o.a.name]:o.a,goods:a["a"]},data(){return{tabCurrentIndex:0,navList:[],items:[],loading:!1,ipage:0}},mounted(){this.loadNav()},created(){},methods:{loadNav(){this.$http.post("/app.page.nav",{nav_types:""}).then(e=>{e.data.item&&e.data.item.items&&(this.navList.push(...e.data.item.items),this.loadData())})},loadData(e){let t=this.tabCurrentIndex,i=this.navList[t],s=i?i.cid:"";"tabChange"===e&&(this.items=[],this.ipage=0),this.loading=!0,this.$http.post("/cms.goods.list",{ipage:this.ipage,cid:s,sort:"day_sales",pic_size:"300"}).then(t=>{this.loading=!1,t.data.items&&("tabChange"===e?this.items=t.data.items:this.items.push(...t.data.items),t.data.pager&&t.data.pager.ipage&&(this.ipage=parseInt(t.data.pager.ipage)+1))})},changeTab(e){this.tabCurrentIndex=e,this.loadData("tabChange")},tabClick(e){this.tabCurrentIndex=e}}},h=c,u=(i("439e"),i("2877")),f=Object(u["a"])(h,s,n,!1,null,"7ec1d32b",null);t["default"]=f.exports},"556d":function(e,t,i){var s,n,r;(function(){(function(o,l){n=[t,i("f1c1"),i("6464"),i("aac4"),i("cdfc"),i("359f")],s=l,r="function"===typeof s?s.apply(t,n):s,void 0===r||(e.exports=r)})(0,(function(e,t,i,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(i);function r(e){return e&&e.__esModule?e:{default:e}}e.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(e){e?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var e=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var i=this.container,r=this.content,o=i.getBoundingClientRect(),l=new n.default((function(t,i){(0,s.render)(r,t,i),e.isInitialed&&e.$_onScroll(t,i)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});l.setPosition(o.left+i.clientLeft,o.top+i.clientTop),this.hasRefresher&&l.activatePullToRefresh(this.refreshOffsetY,(function(){e.isRefreshActive=!0,e.isRefreshing=!1,e.$emit("refreshActive")}),(function(){e.isRefreshActive=!1,e.isRefreshing=!1}),(function(){e.isRefreshActive=!1,e.isRefreshing=!0,e.$emit("refreshing")})),this.scroller=l,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,t.debounce)((function(){e.isEndReaching=!0,e.$emit("endReached"),e.$emit("end-reached")}),50),setTimeout((function(){e.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var e=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){e.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var e=this.scroller._clientHeight,t=this.scroller._contentHeight,i=this.scroller._scrollTop,s=this.moreOffsetY,n=this.endReachedThreshold,r=t-e-(i+s+n);i>=0&&!this.isEndReaching&&r<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var e=this.currentX-this.startX,t=this.currentY-this.startY,i=180*Math.atan2(Math.abs(t),Math.abs(e))/Math.PI;return this.scrollingX?90-i:i},$_onScrollerTouchStart:function(e){this.scroller&&(this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY,this.scroller.doTouchStart(e.touches,e.timeStamp))},$_onScrollerTouchMove:function(e){if(this.scroller){var t=!1;if(this.isPrevent&&(e.preventDefault(),t=!0),this.currentX=e.targetTouches[0].pageX,this.currentY=e.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var i=this.$_getScrollerAngle();if(i<this.touchAngle)return}!t&&e.cancelable&&e.preventDefault(),this.scroller.doTouchMove(e.touches,e.timeStamp,e.scale);var s=15,n=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=this.currentX-n,l=this.currentY-r;(o>document.documentElement.clientWidth-s||l>document.documentElement.clientHeight-s||o<s||l<s)&&this.scroller.doTouchEnd(e.timeStamp)}},$_onScrollerTouchEnd:function(e){this.scroller&&this.scroller.doTouchEnd(e.timeStamp)},$_onScrollerMouseDown:function(e){this.scroller&&(this.startX=e.pageX,this.startY=e.pageY,this.scroller.doTouchStart([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(e){if(this.scroller&&this.isMouseDown){if(this.currentX=e.pageX,this.currentY=e.pageY,!this.scrollingX||!this.scrollingY){var t=this.$_getScrollerAngle();if(t<this.touchAngle)return}this.scroller.doTouchMove([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(e){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(e.timeStamp),this.isMouseDown=!1)},$_onScroll:function(e,t){e=+e.toFixed(2),t=+t.toFixed(2),this.scrollX===e&&this.scrollY===t||(this.scrollX=e,this.scrollY=t,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:e,scrollTop:t}))},init:function(){var e=this;this.$nextTick((function(){e.$_initScroller()}))},scrollTo:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(e,t,i)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.container,s=this.content;this.scroller&&i&&s&&this.$nextTick((function(){var n=i.clientWidth,r=i.clientHeight,o=s.offsetWidth,l=s.offsetHeight;(t||e.containerW!==n||e.containerH!==r||e.contentW!==o||e.contentH!==l)&&(e.scroller.setDimensions(i.clientWidth,i.clientHeight,s.offsetWidth,s.offsetHeight),e.containerW=n,e.containerH=r,e.contentW=o,e.contentH=l)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var o="function"===typeof e.exports?e.exports.options:e.exports;o.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-scroll-view",on:{touchstart:e.$_onScrollerTouchStart,touchmove:e.$_onScrollerTouchMove,touchend:e.$_onScrollerTouchEnd,touchcancel:e.$_onScrollerTouchEnd,mousedown:e.$_onScrollerMouseDown,mousemove:e.$_onScrollerMouseMove,mouseup:e.$_onScrollerMouseUp,mouseleave:e.$_onScrollerMouseUp}},[e.$slots.header?i("div",{staticClass:"scroll-view-header"},[e._t("header")],2):e._e(),e._v(" "),i("div",{staticClass:"scroll-view-container",class:{horizon:e.scrollingX&&!e.scrollingY},attrs:{"scroll-wrapper":""}},[e.hasRefresher?i("div",{staticClass:"scroll-view-refresh",class:{refreshing:e.isRefreshing,"refresh-active":e.isRefreshActive}},[e._t("refresh",null,{scrollTop:e.scrollY,isRefreshing:e.isRefreshing,isRefreshActive:e.isRefreshActive})],2):e._e(),e._v(" "),e._t("default"),e._v(" "),e.hasMore?i("div",{staticClass:"scroll-view-more",class:{active:e.isEndReachingStart||e.isEndReaching}},[e._t("more",null,{isEndReaching:e.isEndReachingStart||e.isEndReaching})],2):e._e()],2),e._v(" "),e.$slots.footer?i("div",{staticClass:"scroll-view-footer"},[e._t("footer")],2):e._e()])},o.staticRenderFns=[]},bfb8:function(e,t,i){},db8e:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("div",{staticClass:"loadmore"},[i("div",{class:["loading-"+e.index,3==e.index&&e.type?"loading-"+e.type:""]}),i("div",{staticClass:"loadmore-tips"},[e._v(e._s(e.text))])]):e._e()},n=[],r={name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}},o=r,l=(i("f7dd"),i("2877")),a=Object(l["a"])(o,s,n,!1,null,"001f267e",null);t["a"]=a.exports},f7dd:function(e,t,i){"use strict";var s=i("bfb8"),n=i.n(s);n.a}}]);