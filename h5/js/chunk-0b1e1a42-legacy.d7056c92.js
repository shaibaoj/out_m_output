(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1e1a42"],{"0bbf":function(t,e,i){"use strict";var o=i("c251"),n=i.n(o);n.a},3919:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),i("div",{staticClass:"load-more"},[i("div",{staticClass:"bottom-tips"},[t.isLoading?[i("i",{staticClass:"loading-hint"}),i("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():i("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},n=[],a=(i("c5f6"),{name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data:function(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle:function(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle:function(t){var e=Number(t.changedTouches[0].pageX),i=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=i-this.startY},scrollListener:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll:function(){var t=this;this.requestAniFrame()((function(){if(!t.hasMore||!t.isScrollAtBottom()||t.isLoading||!t.isShowMod)return!1;t.$emit("loadmore")}))},calculateTopPosition:function(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom:function(){var t,e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{var i=this.$refs.scroller,o=i.scrollHeight,n=i.clientHeight,a=i.scrollTop;t=o-n-a}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),s=a,r=(i("0bbf"),i("2877")),c=Object(r["a"])(s,o,n,!1,null,"9d36787a",null);e["a"]=c.exports},"5f9f":function(t,e,i){"use strict";var o=i("7095"),n=i.n(o);n.a},6706:function(t,e,i){"use strict";var o=i("c14c"),n=i.n(o);n.a},7095:function(t,e,i){},aa6b:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},n=[],a={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},s=a,r=(i("5f9f"),i("2877")),c=Object(r["a"])(s,o,n,!1,null,"96b87444",null);e["a"]=c.exports},bfb8:function(t,e,i){},c14c:function(t,e,i){},c251:function(t,e,i){},cad3:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("浏览记录")])],1),i("div",{staticClass:"container"},[i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("goods",{key:e,attrs:{itemData:t.obj,goodsType:"history"}})})),1),i("load-more",{attrs:{visible:t.loading}})],1)])},n=[],a=i("75fc"),s=i("db8e"),r=i("a288"),c=i("aa6b"),l=i("3919"),u={components:{navBar:c["a"],infiniteLoading:l["a"],loadMore:s["a"],goods:r["a"]},data:function(){return{page:{ipage:0,hasMore:!0},loading:!1,items:[]}},created:function(){},mounted:function(){this.queryItems()},methods:{back:function(){this.$router.go(-1)},queryItems:function(){var t=this;!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms/member/history/list",{ipage:this.page.ipage}).then((function(e){var i;e.data.items?(i=t.items).push.apply(i,Object(a["a"])(e.data.items)):t.page.hasMore=!1;t.loading=!1})))},loadmore:function(){this.loading||this.queryItems()}}},d=u,f=(i("6706"),i("2877")),h=Object(f["a"])(d,o,n,!1,null,"4a8dd440",null);e["default"]=h.exports},db8e:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("div",{staticClass:"loadmore"},[i("div",{class:["loading-"+t.index,3==t.index&&t.type?"loading-"+t.type:""]}),i("div",{staticClass:"loadmore-tips"},[t._v(t._s(t.text))])]):t._e()},n=[],a=(i("c5f6"),{name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}}),s=a,r=(i("f7dd"),i("2877")),c=Object(r["a"])(s,o,n,!1,null,"001f267e",null);e["a"]=c.exports},f7dd:function(t,e,i){"use strict";var o=i("bfb8"),n=i.n(o);n.a}}]);