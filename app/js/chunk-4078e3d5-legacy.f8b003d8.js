(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4078e3d5"],{"0bbf":function(t,e,n){"use strict";var o=n("956e"),i=n.n(o);i.a},"163d":function(t,e,n){"use strict";var o=n("e7ad"),i=n("e042"),r=n("75c4"),a=n("1e5b"),s=n("94b3"),c=n("238a"),l=n("2ea2").f,u=n("dcb7").f,f=n("064e").f,d=n("777a").trim,h="Number",p=o[h],v=p,g=p.prototype,m=r(n("e005")(g))==h,b="trim"in String.prototype,w=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,o,i,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if(a=c.charCodeAt(l),a<48||a>i)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(m?c((function(){g.valueOf.call(n)})):r(n)!=h)?a(new v(w(e)),n,p):w(e)};for(var S,T=n("149f")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;T.length>y;y++)i(v,S=T[y])&&!i(p,S)&&f(p,S,u(v,S));p.prototype=g,g.constructor=p,n("bf16")(o,h,p)}},1872:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"})},i=[],r=(n("5ab2"),n("6d57"),n("e10e"),n("21a1")),a=n.n(r),s=n("73d1"),c=n("5880"),l=n("aa6b");n("3919");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={components:{navBar:l["a"]},data:function(){return{mobile:"",password:"",logining:!1}},mounted:function(){this.goPage()},methods:f(f({goPage:function(){var t=this,e=decodeURIComponent(this.$route.query.redirect);console.log(e),setTimeout((function(){t.$nav.navTo(e,{})}),1e3)}},Object(c["mapMutations"])(["login","setToken","setInviteId"])),{},{navAction:function(t){this.$nav.toNav(t)},navBack:function(){this.$router.go(-1)()},navToPage:function(t,e){var n=this;this.$nextTick((function(){n.$router.push({path:t,query:e||{}})}))},inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},toRegist:function(){this.navToPage("/register",{})},toLogin:function(){var t=this;this.logining=!0;var e=this.mobile,n=this.password;this.$http.post("/cms.token.login",{username:e,password:n}).then((function(e){e.data.token?(t.setToken(e.data.token),t.setInviteId(e.data.member_id),t.$nav.navTo("/mine",{})):(a.a.info(e.info.status_err),t.logining=!1)}))}})},h=d,p=(n("8a3b"),n("9ca4")),v=Object(p["a"])(h,o,i,!1,null,"e61b61ca",null);e["default"]=v.exports},"1e1b":function(t,e,n){},3919:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),n("div",{staticClass:"load-more"},[n("div",{staticClass:"bottom-tips"},[t.isLoading?[n("i",{staticClass:"loading-hint"}),n("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():n("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},i=[],r=(n("163d"),{name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data:function(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle:function(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle:function(t){var e=Number(t.changedTouches[0].pageX),n=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=n-this.startY},scrollListener:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll:function(){var t=this;this.requestAniFrame()((function(){if(!t.hasMore||!t.isScrollAtBottom()||t.isLoading||!t.isShowMod)return!1;t.$emit("loadmore")}))},calculateTopPosition:function(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom:function(){var t,e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{var n=this.$refs.scroller,o=n.scrollHeight,i=n.clientHeight,r=n.scrollTop;t=o-i-r}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),a=r,s=(n("0bbf"),n("9ca4")),c=Object(s["a"])(a,o,i,!1,null,"9d36787a",null);e["a"]=c.exports},"5f9f":function(t,e,n){"use strict";var o=n("1e1b"),i=n.n(o);i.a},"777a":function(t,e,n){var o=n("e46b"),i=n("f6b4"),r=n("238a"),a=n("9769"),s="["+a+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,e,n){var i={},s=r((function(){return!!a[t]()||c[t]()!=c})),l=i[t]=s?e(d):a[t];n&&(i[n]=l),o(o.P+o.F*s,"String",i)},d=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},"8a3b":function(t,e,n){"use strict";var o=n("b7a0"),i=n.n(o);i.a},"956e":function(t,e,n){},9769:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},aa6b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[n("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[n("i",{staticClass:"back-icon"})])],2),t._t("left")],2),n("div",{staticClass:"nav-center"},[n("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),n("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[n("i",{staticClass:"more-icon"})])],2)],2)])},i=[],r={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},a=r,s=(n("5f9f"),n("9ca4")),c=Object(s["a"])(a,o,i,!1,null,"96b87444",null);e["a"]=c.exports},b7a0:function(t,e,n){}}]);