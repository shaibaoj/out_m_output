(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61192de2"],{"0bbf":function(t,e,n){"use strict";var i=n("c251"),o=n.n(i);o.a},"1af6":function(t,e,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var i=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?i.f(t,e,o(0,n)):t[e]=n}},3919:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),n("div",{staticClass:"load-more"},[n("div",{staticClass:"bottom-tips"},[t.isLoading?[n("i",{staticClass:"loading-hint"}),n("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():n("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},o=[],a=(n("c5f6"),{name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data:function(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle:function(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle:function(t){var e=Number(t.changedTouches[0].pageX),n=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=n-this.startY},scrollListener:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll:function(){var t=this;this.requestAniFrame()((function(){if(!t.hasMore||!t.isScrollAtBottom()||t.isLoading||!t.isShowMod)return!1;t.$emit("loadmore")}))},calculateTopPosition:function(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom:function(){var t,e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{var n=this.$refs.scroller,i=n.scrollHeight,o=n.clientHeight,a=n.scrollTop;t=i-o-a}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),r=a,s=(n("0bbf"),n("2877")),c=Object(s["a"])(r,i,o,!1,null,"9d36787a",null);e["a"]=c.exports},"549b":function(t,e,n){"use strict";var i=n("d864"),o=n("63b6"),a=n("241e"),r=n("b0dc"),s=n("3702"),c=n("b447"),l=n("20fd"),u=n("7cd6");o(o.S+o.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,d,f=a(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,b=0,g=u(f);if(m&&(v=i(v,p>2?arguments[2]:void 0,2)),void 0==g||h==Array&&s(g))for(e=c(f.length),n=new h(e);e>b;b++)l(n,b,m?v(f[b],b):f[b]);else for(d=g.call(f),n=new h;!(o=d.next()).done;b++)l(n,b,m?r(d,v,[o.value,b],!0):o.value);return n.length=b,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"5f9f":function(t,e,n){"use strict";var i=n("7095"),o=n.n(i);o.a},7095:function(t,e,n){},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("a745"),o=n.n(i);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){if(o()(t))return a(t)}var s=n("774e"),c=n.n(s),l=n("c8bb"),u=n.n(l),d=n("67bb"),f=n.n(d);function h(t){if("undefined"!==typeof f.a&&u()(Object(t)))return c()(t)}function p(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?c()(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t){return r(t)||h(t)||p(t)||v()}},"774e":function(t,e,n){t.exports=n("d2d5")},8678:function(t,e,n){},"95d5":function(t,e,n){var i=n("40c3"),o=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||a.hasOwnProperty(i(e))}},a745:function(t,e,n){t.exports=n("f410")},aa6b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[n("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[n("i",{staticClass:"back-icon"})])],2),t._t("left")],2),n("div",{staticClass:"nav-center"},[n("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),n("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[n("i",{staticClass:"more-icon"})])],2)],2)])},o=[],a={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},r=a,s=(n("5f9f"),n("2877")),c=Object(s["a"])(r,i,o,!1,null,"96b87444",null);e["a"]=c.exports},bfb8:function(t,e,n){},c251:function(t,e,n){},c856:function(t,e,n){"use strict";var i=n("8678"),o=n.n(i);o.a},c8bb:function(t,e,n){t.exports=n("54a1")},cad3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"fix"},[n("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("浏览记录")])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"list"},t._l(t.items,(function(t,e){return n("goods",{key:e,attrs:{itemData:t.obj,goodsType:"history"}})})),1),n("load-more",{attrs:{visible:t.loading}})],1)])},o=[],a=n("75fc"),r=n("db8e"),s=n("a288"),c=n("aa6b"),l=n("3919"),u={components:{navBar:c["a"],infiniteLoading:l["a"],loadMore:r["a"],goods:s["a"]},data:function(){return{page:{ipage:0,hasMore:!0},loading:!1,items:[]}},created:function(){},mounted:function(){this.queryItems()},methods:{back:function(){this.$router.go(-1)},queryItems:function(){var t=this;!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.history.list",{ipage:this.page.ipage}).then((function(e){var n;e.data.items?(n=t.items).push.apply(n,Object(a["a"])(e.data.items)):t.page.hasMore=!1;t.loading=!1})))},loadmore:function(){this.loading||this.queryItems()}}},d=u,f=(n("c856"),n("2877")),h=Object(f["a"])(d,i,o,!1,null,"a6097302",null);e["default"]=h.exports},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},db8e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"loadmore"},[n("div",{class:["loading-"+t.index,3==t.index&&t.type?"loading-"+t.type:""]}),n("div",{staticClass:"loadmore-tips"},[t._v(t._s(t.text))])]):t._e()},o=[],a=(n("c5f6"),{name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}}),r=a,s=(n("f7dd"),n("2877")),c=Object(s["a"])(r,i,o,!1,null,"001f267e",null);e["a"]=c.exports},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f7dd:function(t,e,n){"use strict";var i=n("bfb8"),o=n.n(i);o.a}}]);