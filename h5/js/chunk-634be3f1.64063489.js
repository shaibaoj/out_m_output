(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-634be3f1"],{"0aec":function(t,e,i){var s,a,n;(function(){(function(r,o){a=[e,i("aed6"),i("cdfc"),i("17cc")],s=o,n="function"===typeof s?s.apply(e,a):s,void 0===n||(t.exports=n)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(e);function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-cell-item",components:a({},i.default.name,i.default),props:{title:{type:String,default:""},brief:{type:String,default:""},addon:{type:String,default:""},arrow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}},methods:{$_onClick:function(t){this.disabled||this.$emit("click",t)}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-cell-item",class:{"is-disabled":t.disabled,"no-border":t.noBorder},on:{click:t.$_onClick}},[i("div",{staticClass:"md-cell-item-body",class:{multilines:!!t.brief}},[t.$slots.left?i("div",{staticClass:"md-cell-item-left"},[t._t("left")],2):t._e(),t._v(" "),t.title||t.brief||t.$slots.default?i("div",{staticClass:"md-cell-item-content"},[t.title?i("p",{staticClass:"md-cell-item-title",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.brief?i("p",{staticClass:"md-cell-item-brief",domProps:{textContent:t._s(t.brief)}}):t._e(),t._v(" "),t._t("default")],2):t._e(),t._v(" "),t.arrow||t.addon||t.$slots.right?i("div",{staticClass:"md-cell-item-right"},[t._t("right",[t._v("\n        "+t._s(t.addon)+"\n      ")]),t._v(" "),t.arrow?i("md-icon",{attrs:{name:"arrow-right",size:"md"}}):t._e()],2):t._e()]),t._v(" "),t.$slots.children?i("div",{staticClass:"md-cell-item-children"},[t._t("children")],2):t._e()])},r.staticRenderFns=[]},1417:function(t,e,i){"use strict";i("57ff")},"17cc":function(t,e,i){},"1b08":function(t,e,i){var s,a,n;(function(){(function(r,o){a=[e,i("cdfc"),i("4a61")],s=o,n="function"===typeof s?s.apply(e,a):s,void 0===n||(t.exports=n)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-swiper-item",computed:{swiperWidth:function(){return this.$parent.isVertical?"auto":this.$parent.dimension+"px"},swiperHeight:function(){return this.$parent.isVertical?this.$parent.dimension+"px":"auto"}},mounted:function(){return this.$parent&&this.$parent.swiperItemCreated(this)},destroyed:function(){return this.$parent&&this.$parent.swiperItemDestroyed(this)}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-swiper-item",style:{width:t.swiperWidth,height:t.swiperHeight}},[t._t("default")],2)},r.staticRenderFns=[]},3739:function(t,e,i){"use strict";i("47b0")},4561:function(t,e,i){},"47b0":function(t,e,i){},"4a61":function(t,e,i){},"52d2":function(t,e,i){},"57ff":function(t,e,i){},"5e52":function(t,e,i){"use strict";i("dd15")},7055:function(t,e,i){"use strict";i("e1ea")},"750b":function(t,e,i){var s,a,n;(function(){(function(r,o){a=[e,i("6464"),i("aac4"),i("f1c1"),i("cdfc"),i("9157")],s=o,n="function"===typeof s?s.apply(e,a):s,void 0===n||(t.exports=n)})(0,(function(t,e,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(e);function n(t){return t&&t.__esModule?t:{default:t}}var r=.5,o=300;t.default={name:"md-swiper",props:{autoplay:{type:Number,default:3e3,validator:function(t){return 0===t||t>=500}},transition:{type:String,default:"slide",validator:function(t){return["slide","slideY","fade"].indexOf(t)>-1}},transitionDuration:{type:Number,default:250},defaultIndex:{type:Number,default:0,validator:function(t){return t>-1}},hasDots:{type:Boolean,default:!0},isPrevent:{type:Boolean,default:!0},isLoop:{type:Boolean,default:!0},dragable:{type:Boolean,default:!0},useNativeDriver:{type:Boolean,default:!0}},data:function(){return{ready:!1,dragging:!1,userScrolling:null,isInitial:!1,duration:0,index:0,fromIndex:0,toIndex:0,firstIndex:0,lastIndex:0,oItemCount:0,rItemCount:0,dimension:0,dragState:{},touchAngle:45,timer:null,noDrag:!1,scroller:null,isStoped:!0,$swiper:null,transitionEndHandler:null}},watch:{autoplay:{handler:function(t){this.duration=t},immediate:!0}},computed:{isLastItem:function(){return this.index===this.rItemCount-1},isFirstItem:function(){return 0===this.index},realIndex:function(){return this.getIndex()},isSlide:function(){return this.transition.toLowerCase().indexOf("slide")>-1},isVertical:function(){return"slideY"===this.transition}},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},destroyed:function(){this.$_resizeLeaveBehavior()},methods:{$_resize:function(){var t=this;this.__resizeTimeout__&&clearTimeout(this.__resizeTimeout__);var e=this.index;this.__resizeTimeout__=setTimeout((function(){t.$_reInitItems(e)}),300)},$_onDragStart:function(t){this.transitionEndHandler&&this.transitionEndHandler(),this.isPrevent&&t.preventDefault(),this.dragging=!0,this.userScrolling=null,this.$_doOnTouchStart(t)},$_onDragMove:function(t){this.isPrevent&&t.preventDefault(),this.dragging&&this.$_doOnTouchMove(t)},$_onDragEnd:function(t){if(this.isPrevent&&t.preventDefault(),this.userScrolling)return this.play(this.duration),this.dragging=!1,void(this.dragState={});this.dragging&&(this.$_doOnTouchEnd(t),this.dragging=!1)},$_getDimension:function(){this.dimension=this.isVertical?this.$el.clientHeight:this.$el.clientWidth},$_initScroller:function(){var t=this,e=new a.default((function(e,s){(0,i.render)(t.$swiper,e,s,1,t.useNativeDriver)}),{scrollingY:this.isVertical,scrollingX:!this.isVertical,snapping:!1,bouncing:!1,animationDuration:this.transitionDuration,scrollingComplete:function(){t.transitionEndHandler&&t.transitionEndHandler()}}),s=this.$swiperBox,n=this.isVertical?s.clientWidth:s.clientWidth*this.rItemCount,r=this.isVertical?s.clientHeight*this.rItemCount:s.clientHeight;e.setPosition(s.clientLeft,s.clientTop),e.setDimensions(s.clientWidth,s.clientHeight,n,r),this.scroller=e},$_backupItem:function(t){var e=t[0].$el.cloneNode(!0),i=t[t.length-1].$el.cloneNode(!0);if(t.length>1&&this.isLoop){var s=this.$swiper.querySelector(".md-swiper-item-first-copy"),a=this.$swiper.querySelector(".md-swiper-item-last-copy");s&&this.$swiper.removeChild(s),a&&this.$swiper.removeChild(a),e.className+=" md-swiper-item-first-copy",i.className+=" md-swiper-item-last-copy",this.isVertical?(e.style.height=this.dimension+"px",i.style.height=this.dimension+"px"):(e.style.width=this.dimension+"px",i.style.width=this.dimension+"px"),this.$swiper.appendChild(e),this.$swiper.insertBefore(i,this.$swiper.childNodes[0]),this.firstIndex++,this.lastIndex++,this.index++,this.rItemCount+=2}},$_translate:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var a=this.isVertical?0:-e,n=this.isVertical?-e:0;this.scroller.scrollTo(a,n,i)}else(0,s.warn)("[md-swiper] no element for translate")},$_opacity:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments[1],s=this.$children;if(s&&s.length){if("undefined"!==typeof i){var a=0,n=this.toIndex,r=this.rItemCount;i>0?n>0?a=n-1:0===n&&(a=r-1):n<r-1?a=n+1:n===r-1&&(a=0);var o=s[n].$el,c=s[a].$el;return o.style.opacity=1-Math.abs(i),o.style.transition=e?"opacity 300ms ease":"",void(c.style.opacity=Math.abs(i))}var l=s[this.fromIndex].$el,d=s[this.toIndex].$el;l.style.opacity=0,l.style.transition=e?"opacity 500ms ease":"",d.style.opacity=1,e&&setTimeout((function(){t.$emit("after-change",t.fromIndex,t.toIndex)}),500)}},$_initState:function(t,e){this.oItemCount=t.length,this.rItemCount=t.length,this.noDrag=1===t.length||!this.dragable,this.index=void 0!==e?this.$_calcDisplayIndex(e):this.defaultIndex>=0&&this.defaultIndex<t.length?parseInt(this.defaultIndex):0,this.firstIndex=0,this.lastIndex=t.length-1,this.fromIndex=this.index===this.firstIndex?this.lastIndex:this.index===this.lastIndex?this.firstIndex:this.index+1,this.toIndex=this.index},$_reInitItems:function(t){var e=this.$children;e&&e.length&&(this.$_getDimension(),this.$_initState(e,t),this.isSlide?(this.$_backupItem(e),this.$_initScroller(),this.$_translate(this.$swiper,-this.dimension*this.index,!1)):this.$_opacity(!1),this.isInitial=!0)},$_startPlay:function(){var t=this;this.duration>0&&this.oItemCount>1&&(this.$_clearTimer(),this.timer=setInterval((function(){if(!t.isLoop&&t.index>=t.rItemCount-1)return t.$_clearTimer();t.dragging||t.next()}),this.duration))},$_clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},$_isScroll:function(t,e,i){var s=this.isVertical,a=t.currentLeft,n=t.currentTop,r=t.startLeft,o=t.startTop;if(null===this.userScrolling){if(!s&&n===o||s&&a===r)return!1;if(e*e+i*i>=25){var c=180*Math.atan2(Math.abs(i),Math.abs(e))/Math.PI;return s?90-c>this.touchAngle:c>this.touchAngle}return!1}return this.userScrolling},$_calcDisplayIndex:function(t){return this.isLoop&&this.isSlide&&this.oItemCount>0?t-1<0?this.oItemCount-1:t-1>this.oItemCount-1?0:t-1:t},$_calcuRealIndex:function(t){return t<0?t=0:this.oItemCount>0&&t>this.oItemCount-1&&(t=this.oItemCount-1),this.isLoop&&this.isSlide?t+1:t},$_doTransition:function(t,e){var i=this;if(0!==this.oItemCount&&(e||!(this.oItemCount<2))){var s=this.index,a=this.rItemCount,n=this.index;t&&(e&&void 0!==e.index?this.index=e.index:"prev"===t?s>0?this.index=s-1:this.isSlide||0!==s?this.isLoop&&0===s&&(this.index=a-1):this.index=a-1:"next"===t&&(s<a-1?this.index=s+1:this.isSlide||s!==a-1?this.isLoop&&s===a-1&&(this.index=1):this.index=0),this.isLoop&&this.isSlide?(this.fromIndex=this.$_calcDisplayIndex(n),this.toIndex=this.$_calcDisplayIndex(this.index)):(this.fromIndex=this.toIndex,this.toIndex=this.index),this.$emit("before-change",this.fromIndex,this.toIndex),this.isSlide?setTimeout((function(){var t=i.isFirstItem&&i.isLoop,e=i.isLastItem&&i.isLoop;i.transitionEndHandler=function(){if(e){var s=i.isVertical?0:i.firstIndex*i.dimension,a=i.isVertical?i.firstIndex*i.dimension:0;i.scroller.scrollTo(s,a,!1)}if(t){var n=i.isVertical?0:i.lastIndex*i.dimension,r=i.isVertical?i.lastIndex*i.dimension:0;i.scroller.scrollTo(n,r,!1)}i.$emit("after-change",i.fromIndex,i.toIndex),i.transitionEndHandler=null},i.$_translate(i.$swiper,-i.dimension*i.index),t?i.index=i.lastIndex:e&&(i.index=i.firstIndex)}),10):this.$_opacity())}},$_doOnTouchStart:function(t){if(!this.noDrag){this.stop();var e=this.$el,i=this.dragState,s=t.changedTouches?t.changedTouches[0]:t;i.startTime=new Date,i.startLeft=s.pageX,i.startTop=s.pageY,i.itemWidth="test"!==Object({NODE_ENV:"production",VUE_APP_PREVIEW:"false",VUE_APP_API_BASE_URL:"https://i.youdanhui.com",VUE_APP_STATIC_URL:"https://cdn.jsdelivr.net/gh/shaibaoj/out_m_output/h5/",BASE_URL:"https://cdn.jsdelivr.net/gh/shaibaoj/out_m_output/h5/"}).MAND_ENV?e.offsetWidth:100,i.itemHeight="test"!==Object({NODE_ENV:"production",VUE_APP_PREVIEW:"false",VUE_APP_API_BASE_URL:"https://i.youdanhui.com",VUE_APP_STATIC_URL:"https://cdn.jsdelivr.net/gh/shaibaoj/out_m_output/h5/",BASE_URL:"https://cdn.jsdelivr.net/gh/shaibaoj/out_m_output/h5/"}).MAND_ENV?e.offsetHeight:100}},$_doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,i=t.changedTouches?t.changedTouches[0]:t;e.currentLeft=i.pageX,e.currentTop=i.pageY;var s=e.currentLeft-e.startLeft,a=e.currentTop-e.startTop;if(this.userScrolling=this.$_isScroll(e,Math.abs(s),Math.abs(a)),!this.userScrolling){t.preventDefault();var n=Math.min(Math.max(1-e.itemWidth,s),e.itemWidth-1),r=Math.min(Math.max(1-e.itemHeight,a),e.itemHeight-1),o=this.isVertical?r-e.itemHeight*this.index:n-e.itemWidth*this.index;this.isSlide?this.$_translate(this.$swiper,o,!1):this.$_opacity(!1,s/e.itemWidth)}}},$_doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=null,i=new Date-t.startTime,s=t.currentLeft-t.startLeft,a=t.currentTop-t.startTop,n=t.itemWidth,c=t.itemHeight,l=this.index,d=this.rItemCount,u=i<o;u&&void 0===t.currentLeft||(this.isVertical?Math.abs(a)>c*r||u?e=a<0?"next":"prev":this.$_translate(this.$swiper,-this.dimension*l,!0):Math.abs(s)>n*r||u?e=s<0?"next":"prev":this.isSlide?this.$_translate(this.$swiper,-this.dimension*l,!0):this.$_opacity(!0,0),this.isLoop||(0===l&&"prev"===e||l===d-1&&"next"===e)&&(e=null),this.$_doTransition(e),this.dragState={}),this.play(this.duration)}},$_resizeEnterBehavior:function(){var t=this;this.ready=!0,this.$swiper=this.$el.querySelector(".md-swiper-container"),this.$swiperBox=this.$el.querySelector(".md-swiper-box"),this.$nextTick((function(){t.$_reInitItems(),t.play(t.duration),window.addEventListener("resize",t.$_resize)}))},$_resizeLeaveBehavior:function(){this.ready=!1,this.$_clearTimer(),window.removeEventListener("resize",this.$_resize),this.__resizeTimeout__&&clearTimeout(this.__resizeTimeout__)},next:function(){this.$_doTransition("next")},prev:function(){this.$_doTransition("prev")},goto:function(t){if(!isNaN(t)){t=parseInt(t);var e=this.$_calcuRealIndex(t),i=e>this.index?"next":"pre";this.$_doTransition(i,{index:e}),this.play(this.duration)}},getIndex:function(){return this.$_calcDisplayIndex(this.index)},play:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;this.$_clearTimer(),t<500||(this.duration=t||this.autoplay,this.$_startPlay(),this.isStoped=!1)},stop:function(){this.$_clearTimer(),this.isStoped=!0},swiperItemCreated:function(){var t=this;this.ready&&this.$nextTick((function(){t.$_clearTimer(),t.$_reInitItems(),t.isStoped||t.play(t.duration)}))},swiperItemDestroyed:(0,s.debounce)((function(){var t=this;this.ready&&this.$nextTick((function(){t.$_clearTimer(),t.$_reInitItems(),t.isStoped||t.play(t.duration)}))}),50)}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-swiper",class:{"md-swiper-vertical":t.isVertical,"md-swiper-fade":!t.isSlide,disabled:!t.isInitial},on:{mousedown:t.$_onDragStart,mousemove:t.$_onDragMove,mouseup:t.$_onDragEnd,mouseleave:t.$_onDragEnd,touchstart:t.$_onDragStart,touchmove:t.$_onDragMove,touchend:t.$_onDragEnd,touchcancel:t.$_onDragEnd}},[i("div",{staticClass:"md-swiper-box"},[i("div",{staticClass:"md-swiper-container"},[t._t("default")],2)]),t._v(" "),t.oItemCount>1&&t.hasDots?i("div",{staticClass:"md-swiper-indicators",class:{disabled:!t.hasDots}},[t._l(t.oItemCount,(function(e){return[i("div",{key:e,staticClass:"md-swiper-indicator",class:{"md-swiper-indicator-active":e-1===t.realIndex}})]}))],2):t._e()])},r.staticRenderFns=[]},"7b38":function(t,e,i){var s,a,n;(function(){(function(r,o){a=[e,i("1b08"),i("cdfc"),i("b6d1")],s=o,n="function"===typeof s?s.apply(e,a):s,void 0===n||(t.exports=n)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(e);function s(t){return t&&t.__esModule?t:{default:t}}t.default=i.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"7e60":function(t,e,i){"use strict";i("9de6")},8222:function(t,e,i){"use strict";i("f8ad")},9157:function(t,e,i){},"99c4":function(t,e,i){"use strict";i("d6d4")},"9de6":function(t,e,i){},"9e6a2":function(t,e,i){"use strict";i("b8f3")},b050:function(t,e,i){},b6d1:function(t,e,i){},b8f3:function(t,e,i){},cddb:function(t,e,i){"use strict";i("b050")},ce32:function(t,e,i){"use strict";i("52d2")},d483:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["agent"==t.itemData.type?i("agent",{attrs:{"item-data":t.itemData.data}}):"banner"==t.itemData.type?i("banner",{attrs:{"item-data":t.itemData.data}}):"haibao"==t.itemData.type?i("haibao",{attrs:{"item-data":t.itemData.data}}):"header"==t.itemData.type?i("uheader",{attrs:{"item-data":t.itemData.data}}):"icons"==t.itemData.type?i("icons",{attrs:{"item-data":t.itemData.data}}):"menus"==t.itemData.type?i("menus",{attrs:{"item-data":t.itemData.data}}):"slide_rows"==t.itemData.type?i("slide-rows",{attrs:{"item-data":t.itemData.data}}):"blocks"==t.itemData.type?i("blocks",{attrs:{"item-data":t.itemData.data}}):"column"==t.itemData.type?i("column",{attrs:{"item-data":t.itemData.data}}):"float"==t.itemData.type?i("float",{attrs:{"item-data":t.itemData.data}}):"goods"==t.itemData.type?i("goods",{attrs:{"item-data":t.itemData.data}}):"report"==t.itemData.type?i("report",{attrs:{"item-data":t.itemData.data}}):"header_haibao"==t.itemData.type?i("header-haibao",{attrs:{"item-data":t.itemData.data}}):t._e()],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 1==t.itemData.has_member?i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("div",{staticClass:"tip"},[t._v("团队业绩")]),i("div",{staticClass:"link",on:{click:function(e){return t.navToPage("user/order")}}},[t._v("查看详情>")])]),i("div",{staticClass:"line"}),i("div",{staticClass:"tj-sction"},[i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.money_total))]),i("span",[t._v("累计奖励奖励")])]),i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.orders))]),i("span",[t._v("奖励订单")])])]),i("div",{staticClass:"line"}),i("div",{staticClass:"tj-sction"},[i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.today_money))]),i("span",[t._v("今日奖励")])]),i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.today_orders))]),i("span",[t._v("今日成交")])]),i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.today_money_available))]),i("span",[t._v("今日结算")])])])]):t._e()},r=[],o=(i("ac6a"),i("ade3")),c=i("5880");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={props:{itemData:{type:Object}},data(){return{}},computed:d({},Object(c["mapState"])(["hasLogin","userInfo"])),methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},h=u,p=(i("1417"),i("2877")),m=Object(p["a"])(h,n,r,!1,null,"1808f75f",null),v=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ad",on:{click:function(e){return t.navAction(t.itemData)}}},[i("img",{attrs:{src:t.itemData.pic_url,mode:"widthFix"}})])},_=[],g={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},y=g,$=(i("5e52"),Object(p["a"])(y,f,_,!1,null,"617cf317",null)),x=$.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"carousel-section"},[i("div",{staticClass:"titleNview-placing"}),i("swiper",{staticClass:"carousel",attrs:{circular:""},on:{change:t.swiperChange}},t._l(t.itemData.items,(function(e,s){return i("swiper-item",{key:s,staticClass:"carousel-item",on:{click:function(e){return t.navToDetailPage({title:"轮播广告"})}}},[i("img",{attrs:{src:e.pic_url,mode:"widthFix"}})])})),1),i("div",{staticClass:"swiper-dots"},[i("span",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),i("span",{staticClass:"sign"},[t._v("/")]),i("span",{staticClass:"num"},[t._v(t._s(t.itemData.items.length))])])],1)])},C=[],D={props:{itemData:{type:Object}},data(){return{swiperCurrent:0,swiperLength:0}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},swiperChange(t){const e=t.detail.current;this.swiperCurrent=e}}},w=D,I=(i("99c4"),Object(p["a"])(w,b,C,!1,null,"1aef5b8e",null)),T=I.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 1==t.itemData.has_member?i("div",{staticClass:"tj-sction"},[i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("/user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.money_total))]),i("span",[t._v("累计奖励")])]),i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("/user/points")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.points_available))]),i("span",[t._v("积分奖励")])]),i("div",{staticClass:"tj-item",on:{click:function(e){return t.navToPage("/user/order")}}},[i("span",{staticClass:"num"},[t._v(t._s(t.itemData.orders))]),i("span",[t._v("奖励订单")])])]):t._e()},P=[];function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function k(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?j(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var E={props:{itemData:{type:Object}},data(){return{}},computed:k({},Object(c["mapState"])(["hasLogin","userInfo"])),methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},S=E,L=(i("8222"),Object(p["a"])(S,O,P,!1,null,"531c411e",null)),A=L.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-category"},t._l(t.itemData.items,(function(e,s){return i("div",{key:s,staticClass:"category-item",style:t.iconWidth,on:{click:function(i){return t.navAction(e)}}},[i("img",{staticClass:"category-img",attrs:{src:e.pic_url,mode:"widthFix"}}),i("div",{staticClass:"category-name"},[t._v(t._s(e.title))])])})),0)},M=[],V={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}},computed:{iconWidth(){return"width:"+100/this.itemData.count+"%"},iconSize(){return"width:"+this.itemData.icon_width+"px;height:"+this.itemData.icon_width+"px"},imageWidth(){return"width:"+80/this.itemData.count+"%"}}},q=V,B=(i("7055"),Object(p["a"])(q,N,M,!1,null,"265c10a6",null)),H=B.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menus"},t._l(t.itemData.items,(function(e,s){return i("div",{key:s,staticClass:"item",on:{click:function(i){return t.navAction(e)}}},[i("span",[t._v(t._s(e.name))]),i("span",[t._v(">")])])})),0)},W=[],F=i("0aec"),R=i.n(F),U={components:{CellItem:R.a},props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},Y=U,J=(i("7e60"),Object(p["a"])(Y,z,W,!1,null,"94b9c44c",null)),X=J.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"video"==t.itemData.type?i("div",{staticClass:"container"},[i("div",{staticClass:"f-header"},[i("img",{attrs:{mode:"aspectFit",src:"https://img.youdanhui.cn/cms_img/2019-09-07/5d735fc2ea326.png"}}),t._m(0),i("span",{staticClass:"icon-you",on:{click:function(e){return t.navToPage("/market/video")}}},[t._v("更多>")])]),i("div",{staticClass:"hot-floor"},[i("md-scroll-view",{ref:"scrollView",staticClass:"floor-list",attrs:{"scrolling-y":!1,"touch-angle":80,"is-prevent":!1}},[i("div",{staticClass:"scoll-wrapper"},[t._l(t.items,(function(t,e){return i("goods",{key:e,attrs:{itemData:t,goodsType:"video"}})})),i("div",{staticClass:"more",on:{click:function(e){return t.navToPage("market/video")}}},[i("span",[t._v("查看全部")]),i("span",[t._v("More+")])])],2)])],1)]):t._e()},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tit-box"},[i("span",{staticClass:"tit"},[t._v("抖券")])])}],Q=i("556d"),Z=i.n(Q),tt=i("a288"),et={components:{[Z.a.name]:Z.a,goods:tt["a"]},props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}},computed:{items(){return JSON.parse(this.itemData.items_json)}}},it=et,st=(i("fedc"),Object(p["a"])(it,G,K,!1,null,"0afeb517",null)),at=st.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},rt=[],ot={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},ct=ot,lt=Object(p["a"])(ct,nt,rt,!1,null,"00334a44",null),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-section"},[i("div",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){return t.navToPage("order/order?state=0")}}},[i("span",{staticClass:"yticon icon-shouye"}),i("span",[t._v("全部订单")])]),i("div",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){return t.navToPage("order/order?state=1")}}},[i("span",{staticClass:"yticon icon-daifukuan"}),i("span",[t._v("待付款")])]),i("div",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){return t.navToPage("order/order?state=2")}}},[i("span",{staticClass:"yticon icon-yishouhuo"}),i("span",[t._v("待收货")])]),i("div",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){return t.navToPage("order/order?state=4")}}},[i("span",{staticClass:"yticon icon-shouhoutuikuan"}),i("span",[t._v("退款/售后")])])])},ht=[],pt={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},mt=pt,vt=(i("ce32"),Object(p["a"])(mt,ut,ht,!1,null,"cbbbfe7a",null)),ft=vt.exports,_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},gt=[],yt={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},$t=yt,xt=Object(p["a"])($t,_t,gt,!1,null,"267487dc",null),bt=xt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["qiang"==t.itemData.type?i("div",{staticClass:"seckill-section m-t"},[i("div",{staticClass:"s-header"},[i("img",{staticClass:"s-img",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-07/5d73427486f29.jpg"}}),i("span",{staticClass:"icon-you",on:{click:function(e){return t.navToPage("/market/tqg")}}},[t._v("更多>")])]),i("md-scroll-view",{ref:"scrollView",staticClass:"floor-list",attrs:{"scrolling-y":!1,"touch-angle":80,"is-prevent":!1}},[i("div",{staticClass:"scoll-wrapper"},t._l(t.items,(function(e,s){return i("div",{key:s,staticClass:"floor-item",on:{click:function(i){return t.navToDetailPage(e)}}},[i("img",{attrs:{src:e.goods.pic_url,mode:"aspectFill"}}),i("p",{staticClass:"title"},[t._v(t._s(e.goods.title))]),i("p",{staticClass:"price"},[t._v("￥"+t._s(e.price.price))])])})),0)])],1):t._e(),"tuan"==t.itemData.type?i("div",[t._m(0),i("div",{staticClass:"group-section"},[i("swiper",{staticClass:"g-swiper",attrs:{duration:500}},t._l(t.goodsList,(function(e,s){return i("swiper-item",{key:s,staticClass:"g-swiper-item",on:{click:function(i){return t.navToDetailPage(e)}}},[i("div",{staticClass:"g-item left"},[i("img",{attrs:{src:e.image,mode:"aspectFill"}}),i("div",{staticClass:"t-box"},[i("span",{staticClass:"title clamp"},[t._v(t._s(e.title))]),i("div",{staticClass:"price-box"},[i("span",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),i("span",{staticClass:"m-price"},[t._v("￥188")])]),i("div",{staticClass:"pro-box"},[i("div",{staticClass:"progress-box"}),i("span",[t._v("6人成团")])])])]),i("div",{staticClass:"g-item right"},[i("img",{attrs:{src:t.goodsList[s+1].image,mode:"aspectFill"}}),i("div",{staticClass:"t-box"},[i("span",{staticClass:"title clamp"},[t._v(t._s(t.goodsList[s+1].title))]),i("div",{staticClass:"price-box"},[i("span",{staticClass:"price"},[t._v("￥"+t._s(t.goodsList[s+1].price))]),i("span",{staticClass:"m-price"},[t._v("￥188")])]),i("div",{staticClass:"pro-box"},[i("div",{staticClass:"progress-box"}),i("span",[t._v("10人成团")])])])])])})),1)],1)]):t._e()])},Dt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f-header m-t"},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-07/5d735fc2ea326.png"}}),i("div",{staticClass:"tit-box"},[i("span",{staticClass:"tit"},[t._v("精品团购")]),i("span",{staticClass:"tit2"},[t._v("Boutique Group Buying")])]),i("span",{staticClass:"yticon icon-you"})])}],wt={components:{[Z.a.name]:Z.a},props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}},computed:{items(){return JSON.parse(this.itemData.items_json)}}},It=wt,Tt=(i("3739"),Object(p["a"])(It,Ct,Dt,!1,null,"60b90f3f",null)),Ot=Tt.exports,Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f-header m-t"},[i("div",{staticClass:"tit-box"},[i("span",{staticClass:"tit"},[t._v("猜你喜欢")]),i("span",{staticClass:"tit2"},[t._v("Guess You Like It")])]),i("span",{staticClass:"yticon icon-you"})])}],kt={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},Et=kt,St=(i("9e6a2"),Object(p["a"])(Et,Pt,jt,!1,null,"176a4fcf",null)),Lt=St.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-banner"},[i("div",{staticClass:"hot-search"},[i("div",[t._v("热搜")]),i("div",{staticClass:"hot-tag",on:{click:function(e){return t.navToPage("search/list?q=面膜")}}},[t._v("面膜")]),i("div",{staticClass:"hot-tag",on:{click:function(e){return t.navToPage("search/list?q=沐浴露")}}},[t._v("沐浴露")]),i("div",{staticClass:"hot-tag",on:{click:function(e){return t.navToPage("search/list?q=零食")}}},[t._v("零食")]),i("div",{staticClass:"hot-tag",on:{click:function(e){return t.navToPage("search/list?q=抽纸")}}},[t._v("抽纸")])]),t.itemData.items&&t.itemData.items.length>0?i("div",{staticClass:"banner-bg"},[t.itemData.items.length>1?i("div",{staticClass:"banner-box"},[i("md-swiper",{staticClass:"banner-swiper",attrs:{"indicator-dots":!0,isLoop:!1}},t._l(t.itemData.items,(function(e,s){return i("md-swiper-item",{key:s},[i("div",[i("img",{staticClass:"slide-image",attrs:{src:e.pic_url,mode:"scaleToFill"},on:{click:function(i){return t.navAction(e)}}})])])})),1)],1):i("div",{staticClass:"banner-box"},t._l(t.itemData.items,(function(e,s){return i("img",{key:s,staticClass:"slide-image",attrs:{src:e.pic_url,mode:"scaleToFill"},on:{click:function(i){return t.navAction(e)}}})})),0)]):t._e()])},Nt=[],Mt=i("7b38"),Vt=i.n(Mt),qt=i("750b"),Bt=i.n(qt),Ht={components:{[Bt.a.name]:Bt.a,[Vt.a.name]:Vt.a},props:{itemData:{type:Object}},data(){return{swiperCurrent:0,swiperLength:0}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},swiperChange(t){const e=t.detail.current;this.swiperCurrent=e}}},zt=Ht,Wt=(i("cddb"),Object(p["a"])(zt,At,Nt,!1,null,"78ee1193",null)),Ft=Wt.exports,Rt={components:{agent:v,banner:x,haibao:T,uheader:A,icons:H,menus:X,slideRows:at,blocks:dt,column:ft,float:bt,goods:Ot,report:Lt,headerHaibao:Ft},props:{itemData:{type:Object}},data(){return{}},methods:{}},Ut=Rt,Yt=Object(p["a"])(Ut,s,a,!1,null,"e0b573f2",null);e["a"]=Yt.exports},d6d4:function(t,e,i){},dd15:function(t,e,i){},e1ea:function(t,e,i){},f8ad:function(t,e,i){},fedc:function(t,e,i){"use strict";i("4561")}}]);