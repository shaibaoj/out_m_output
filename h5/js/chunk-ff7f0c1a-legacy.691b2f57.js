(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff7f0c1a"],{"1af6":function(t,e,i){var r=i("63b6");r(r.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var r=i("d9f6"),n=i("aebd");t.exports=function(t,e,i){e in t?r.f(t,e,n(0,i)):t[e]=i}},"34a0":function(t,e,i){"use strict";i.r(e);var r,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("订单信息")])],1),i("div",{staticClass:"container"},[i("div",{staticClass:"navbar"},t._l(t.navList,(function(e,r){return i("div",{key:r,staticClass:"nav-item",class:{current:t.tabCurrentIndex===r},on:{click:function(e){return t.tabClick(r)}}},[t._v("\n\t\t\t\t"+t._s(e.text)+"\n\t\t\t")])})),0),i("md-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":""},on:{scrolltolower:t.loadData}},[t._l(t.items,(function(e,r){return i("div",{key:r,staticClass:"order-item"},[i("div",{staticClass:"action-box b-t"},[i("span",[t._v(t._s(e.order.order_time))]),i("span",[t._v(t._s(e.status_name))])]),i("div",{staticClass:"i-top b-b"},[i("span",{staticClass:"time"},[t._v(t._s(e.time))]),i("span",{staticClass:"state",style:{color:e.stateTipColor}},[t._v(t._s(e.stateTip))])]),i("div",{staticClass:"goods-box-single"},[e.order.object?i("img",{staticClass:"goods-img",attrs:{src:e.order.object?e.order.object.pic_url:"",mode:"aspectFill"}}):t._e(),i("div",{staticClass:"right"},[i("div",{staticClass:"memo"},[i("span",[t._v(t._s(e.memo))]),i("span",{staticClass:"num"},[t._v(t._s(e.money))])]),e.order.object?i("span",{staticClass:"title clamp"},[t._v(t._s(e.order.object?e.order.object.title:""))]):t._e()])]),i("div",{staticClass:"action-box b-t"},[i("span",[t._v("订单号:"+t._s(e.order.order_no))]),i("span",[t._v(t._s(e.pay_time_str))])])])})),i("load-more",{attrs:{visible:t.loading}})],2)],1)])},s=[],o=i("75fc"),a=i("bd86"),c=(i("7f7f"),i("556d")),l=i.n(c),u=i("db8e"),h=i("aa6b"),f={components:(r={},Object(a["a"])(r,l.a.name,l.a),Object(a["a"])(r,"navBar",h["a"]),Object(a["a"])(r,"loadMore",u["a"]),r),data:function(){return{page:{ipage:0,hasMore:!0},tabCurrentIndex:0,navList:[{text:"全部"},{text:"已到账"},{text:"到账中"},{text:"失败"}],items:[],loading:!1}},mounted:function(){this.$route.query.state&&(this.tabCurrentIndex=+parseInt(this.$route.query.state)),this.loadData()},methods:{back:function(){this.$router.go(-1)},loadData:function(t){var e=this;"tabChange"===t&&(this.items=[]),!0!==this.loading&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.order.list",{orders:"1",maxMoney:.01,status:this.tabCurrentIndex}).then((function(t){var i;(e.loading=!1,t.data.items)&&(i=e.items).push.apply(i,Object(o["a"])(t.data.items))})))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t,this.loading=!1,this.page.ipage=0,this.loadData("tabChange")}}},d=f,v=(i("bb89"),i("2877")),p=Object(v["a"])(d,n,s,!1,null,"83dce96e",null);e["default"]=p.exports},"359f":function(t,e,i){},"549b":function(t,e,i){"use strict";var r=i("d864"),n=i("63b6"),s=i("241e"),o=i("b0dc"),a=i("3702"),c=i("b447"),l=i("20fd"),u=i("7cd6");n(n.S+n.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,n,h,f=s(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,g=void 0!==p,m=0,_=u(f);if(g&&(p=r(p,v>2?arguments[2]:void 0,2)),void 0==_||d==Array&&a(_))for(e=c(f.length),i=new d(e);e>m;m++)l(i,m,g?p(f[m],m):f[m]);else for(h=_.call(f),i=new d;!(n=h.next()).done;m++)l(i,m,g?o(h,p,[n.value,m],!0):n.value);return i.length=m,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"556d":function(t,e,i){var r,n,s;(function(){(function(o,a){n=[e,i("f1c1"),i("6464"),i("aac4"),i("cdfc"),i("359f")],r=a,s="function"===typeof r?r.apply(e,n):r,void 0===s||(t.exports=s)})(0,(function(t,e,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(i);function s(t){return t&&t.__esModule?t:{default:t}}t.default={name:"md-scroll-view",props:{scrollingX:{type:Boolean,default:!0},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},autoReflow:{type:Boolean,default:!1},manualInit:{type:Boolean,default:!1},endReachedThreshold:{type:Number,default:0},immediateCheckEndReaching:{type:Boolean,default:!1},touchAngle:{type:Number,default:45},isPrevent:{type:Boolean,default:!0}},data:function(){return{container:null,content:null,refresher:null,more:null,scroller:null,refreshOffsetY:0,isInitialed:!1,isMouseDown:!1,isRefreshing:!1,isRefreshActive:!1,isEndReachingStart:!1,isEndReaching:!1,scrollX:null,scrollY:null,startX:0,startY:0,currentX:0,currentY:0,containerW:0,containerH:0,contentW:0,contentH:0,reflowTimer:null,endReachedHandler:null}},computed:{hasRefresher:function(){return!(!this.$slots.refresh&&!this.$scopedSlots.refresh)},hasMore:function(){return!(!this.$slots.more&&!this.$scopedSlots.more)}},watch:{autoReflow:function(t){t?this.$_initAutoReflow():this.$_destroyAutoReflow()}},mounted:function(){this.manualInit||this.$_initScroller()},destroyed:function(){this.$_destroyAutoReflow()},methods:{$_initScroller:function(){var t=this;if(!this.isInitialed){this.container=this.$el,this.refresher=this.$el.querySelector(".scroll-view-refresh"),this.more=this.$el.querySelector(".scroll-view-more"),this.content=this.$el.querySelector(".scroll-view-container"),this.refreshOffsetY=this.refresher?this.refresher.clientHeight:0,this.moreOffsetY=this.more?this.more.clientHeight:0;var i=this.container,s=this.content,o=i.getBoundingClientRect(),a=new n.default((function(e,i){(0,r.render)(s,e,i),t.isInitialed&&t.$_onScroll(e,i)}),{scrollingX:this.scrollingX,scrollingY:this.scrollingY,bouncing:this.bouncing,zooming:!1,animationDuration:200,speedMultiplier:1.2,inRequestAnimationFrame:!0});a.setPosition(o.left+i.clientLeft,o.top+i.clientTop),this.hasRefresher&&a.activatePullToRefresh(this.refreshOffsetY,(function(){t.isRefreshActive=!0,t.isRefreshing=!1,t.$emit("refreshActive")}),(function(){t.isRefreshActive=!1,t.isRefreshing=!1}),(function(){t.isRefreshActive=!1,t.isRefreshing=!0,t.$emit("refreshing")})),this.scroller=a,this.reflowScroller(!0),this.autoReflow&&this.$_initAutoReflow(),this.endReachedHandler=(0,e.debounce)((function(){t.isEndReaching=!0,t.$emit("endReached"),t.$emit("end-reached")}),50),setTimeout((function(){t.isInitialed=!0}),50),this.immediateCheckEndReaching&&this.$nextTick(this.$_checkScrollerEnd)}},$_initAutoReflow:function(){var t=this;this.$_destroyAutoReflow(),this.reflowTimer=setInterval((function(){t.reflowScroller()}),100)},$_destroyAutoReflow:function(){this.reflowTimer&&clearInterval(this.reflowTimer)},$_checkScrollerEnd:function(){if(this.scroller){var t=this.scroller._clientHeight,e=this.scroller._contentHeight,i=this.scroller._scrollTop,r=this.moreOffsetY,n=this.endReachedThreshold,s=e-t-(i+r+n);i>=0&&!this.isEndReaching&&s<=0&&this.endReachedHandler&&(this.isEndReachingStart=!0,this.endReachedHandler())}},$_getScrollerAngle:function(){var t=this.currentX-this.startX,e=this.currentY-this.startY,i=180*Math.atan2(Math.abs(e),Math.abs(t))/Math.PI;return this.scrollingX?90-i:i},$_onScrollerTouchStart:function(t){this.scroller&&(this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.scroller.doTouchStart(t.touches,t.timeStamp))},$_onScrollerTouchMove:function(t){if(this.scroller){var e=!1;if(this.isPrevent&&(t.preventDefault(),e=!0),this.currentX=t.targetTouches[0].pageX,this.currentY=t.targetTouches[0].pageY,!this.scrollingX||!this.scrollingY){var i=this.$_getScrollerAngle();if(i<this.touchAngle)return}!e&&t.cancelable&&t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp,t.scale);var r=15,n=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,s=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=this.currentX-n,a=this.currentY-s;(o>document.documentElement.clientWidth-r||a>document.documentElement.clientHeight-r||o<r||a<r)&&this.scroller.doTouchEnd(t.timeStamp)}},$_onScrollerTouchEnd:function(t){this.scroller&&this.scroller.doTouchEnd(t.timeStamp)},$_onScrollerMouseDown:function(t){this.scroller&&(this.startX=t.pageX,this.startY=t.pageY,this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0)},$_onScrollerMouseMove:function(t){if(this.scroller&&this.isMouseDown){if(this.currentX=t.pageX,this.currentY=t.pageY,!this.scrollingX||!this.scrollingY){var e=this.$_getScrollerAngle();if(e<this.touchAngle)return}this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.isMouseDown=!0}},$_onScrollerMouseUp:function(t){this.scroller&&this.isMouseDown&&(this.scroller.doTouchEnd(t.timeStamp),this.isMouseDown=!1)},$_onScroll:function(t,e){t=+t.toFixed(2),e=+e.toFixed(2),this.scrollX===t&&this.scrollY===e||(this.scrollX=t,this.scrollY=e,this.$_checkScrollerEnd(),this.$emit("scroll",{scrollLeft:t,scrollTop:e}))},init:function(){var t=this;this.$nextTick((function(){t.$_initScroller()}))},scrollTo:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.scroller&&this.scroller.scrollTo(t,e,i)},getOffsets:function(){return this.scroller?this.scroller.getValues():{left:0,top:0}},reflowScroller:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.container,r=this.content;this.scroller&&i&&r&&this.$nextTick((function(){var n=i.clientWidth,s=i.clientHeight,o=r.offsetWidth,a=r.offsetHeight;(e||t.containerW!==n||t.containerH!==s||t.contentW!==o||t.contentH!==a)&&(t.scroller.setDimensions(i.clientWidth,i.clientHeight,r.offsetWidth,r.offsetHeight),t.containerW=n,t.containerH=s,t.contentW=o,t.contentH=a)}))},triggerRefresh:function(){this.scroller&&this.scroller.triggerPullToRefresh()},finishRefresh:function(){this.scroller&&(this.scroller.finishPullToRefresh(),this.reflowScroller())},finishLoadMore:function(){this.scroller&&(this.isEndReachingStart=!1,this.isEndReaching=!1,this.reflowScroller())}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-scroll-view",on:{touchstart:t.$_onScrollerTouchStart,touchmove:t.$_onScrollerTouchMove,touchend:t.$_onScrollerTouchEnd,touchcancel:t.$_onScrollerTouchEnd,mousedown:t.$_onScrollerMouseDown,mousemove:t.$_onScrollerMouseMove,mouseup:t.$_onScrollerMouseUp,mouseleave:t.$_onScrollerMouseUp}},[t.$slots.header?i("div",{staticClass:"scroll-view-header"},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"scroll-view-container",class:{horizon:t.scrollingX&&!t.scrollingY},attrs:{"scroll-wrapper":""}},[t.hasRefresher?i("div",{staticClass:"scroll-view-refresh",class:{refreshing:t.isRefreshing,"refresh-active":t.isRefreshActive}},[t._t("refresh",null,{scrollTop:t.scrollY,isRefreshing:t.isRefreshing,isRefreshActive:t.isRefreshActive})],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasMore?i("div",{staticClass:"scroll-view-more",class:{active:t.isEndReachingStart||t.isEndReaching}},[t._t("more",null,{isEndReaching:t.isEndReachingStart||t.isEndReaching})],2):t._e()],2),t._v(" "),t.$slots.footer?i("div",{staticClass:"scroll-view-footer"},[t._t("footer")],2):t._e()])},o.staticRenderFns=[]},"5f9f":function(t,e,i){"use strict";var r=i("7095"),n=i.n(r);n.a},"600e":function(t,e,i){},7095:function(t,e,i){},"75fc":function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var r=i("a745"),n=i.n(r);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function o(t){if(n()(t))return s(t)}var a=i("774e"),c=i.n(a),l=i("c8bb"),u=i.n(l),h=i("67bb"),f=i.n(h);function d(t){if("undefined"!==typeof f.a&&u()(Object(t)))return c()(t)}function v(t,e){if(t){if("string"===typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?c()(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t){return o(t)||d(t)||v(t)||p()}},"774e":function(t,e,i){t.exports=i("d2d5")},"95d5":function(t,e,i){var r=i("40c3"),n=i("5168")("iterator"),s=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||s.hasOwnProperty(r(e))}},a745:function(t,e,i){t.exports=i("f410")},aa6b:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},n=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},o=s,a=(i("5f9f"),i("2877")),c=Object(a["a"])(o,r,n,!1,null,"96b87444",null);e["a"]=c.exports},aa77:function(t,e,i){var r=i("5ca1"),n=i("be13"),s=i("79e5"),o=i("fdef"),a="["+o+"]",c="​",l=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),h=function(t,e,i){var n={},a=s((function(){return!!o[t]()||c[t]()!=c})),l=n[t]=a?e(f):o[t];i&&(n[i]=l),r(r.P+r.F*a,"String",n)},f=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=h},bb89:function(t,e,i){"use strict";var r=i("600e"),n=i.n(r);n.a},bfb8:function(t,e,i){},c5f6:function(t,e,i){"use strict";var r=i("7726"),n=i("69a8"),s=i("2d95"),o=i("5dbc"),a=i("6a99"),c=i("79e5"),l=i("9093").f,u=i("11e9").f,h=i("86cc").f,f=i("aa77").trim,d="Number",v=r[d],p=v,g=v.prototype,m=s(i("2aeb")(g))==d,_="trim"in String.prototype,b=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var i,r,n,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>n)return NaN;return parseInt(c,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof v&&(m?c((function(){g.valueOf.call(i)})):s(i)!=d)?o(new p(b(e)),i,v):b(e)};for(var w,S=i("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;S.length>y;y++)n(p,w=S[y])&&!n(v,w)&&h(v,w,u(p,w));v.prototype=g,g.constructor=v,i("2aba")(r,d,v)}},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},db8e:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("div",{staticClass:"loadmore"},[i("div",{class:["loading-"+t.index,3==t.index&&t.type?"loading-"+t.type:""]}),i("div",{staticClass:"loadmore-tips"},[t._v(t._s(t.text))])]):t._e()},n=[],s=(i("c5f6"),{name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}}),o=s,a=(i("f7dd"),i("2877")),c=Object(a["a"])(o,r,n,!1,null,"001f267e",null);e["a"]=c.exports},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},f7dd:function(t,e,i){"use strict";var r=i("bfb8"),n=i.n(r);n.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);