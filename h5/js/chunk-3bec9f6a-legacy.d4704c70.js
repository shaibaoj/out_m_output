(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bec9f6a"],{"0bbf":function(t,e,n){"use strict";var i=n("c251"),o=n.n(i);o.a},1872:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"fix"},[n("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.navBack}},[t._v("登陆")])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"input-content"},[n("div",{staticClass:"input-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号码/账号","data-key":"mobile"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),n("div",{staticClass:"input-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"8-18位不含特殊字符的数字、字母组合","placeholder-class":"input-empty",maxlength:"20","data-key":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("div",{staticClass:"confirm-btn",attrs:{disabled:t.logining},on:{click:t.toLogin}},[t._v("登录")]),n("div",{staticClass:"register-section"},[t._v("\n\t\t\t\t还没有账号？立即"),n("span",{on:{click:t.toRegist}},[t._v("注册")])])])]),n("div",{staticClass:"forget-section"},[n("span",{on:{click:t.toRegist}},[t._v("找回密码")])])])},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("1861")),s=n.n(a),r=n("bd86"),c=n("5880"),l=n("aa6b");n("3919");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={components:{navBar:l["a"]},data:function(){return{mobile:"",password:"",logining:!1}},mounted:function(){},methods:f(f({},Object(c["mapMutations"])(["login","setToken","setInviteId"])),{},{navAction:function(t){this.$nav.toNav(t)},navBack:function(){this.$router.go(-1)()},navToPage:function(t,e){var n=this;this.$nextTick((function(){n.$router.push({path:t,query:e||{}})}))},inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},toRegist:function(){this.navToPage("/register",{})},toLogin:function(){var t=this;this.logining=!0;var e=this.mobile,n=this.password;this.$http.post("/cms/token/login",{username:e,password:n}).then((function(e){e.data.token?(t.setToken(e.data.token),t.setInviteId(e.data.member_id),t.$nav.navTo("/mine",{})):(s.a.info(e.info.status_err),t.logining=!1)}))}})},h=d,p=(n("fccc"),n("2877")),v=Object(p["a"])(h,i,o,!1,null,"fe3eff4a",null);e["default"]=v.exports},3919:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),n("div",{staticClass:"load-more"},[n("div",{staticClass:"bottom-tips"},[t.isLoading?[n("i",{staticClass:"loading-hint"}),n("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():n("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},o=[],a=(n("c5f6"),{name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data:function(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle:function(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle:function(t){var e=Number(t.changedTouches[0].pageX),n=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=n-this.startY},scrollListener:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll:function(){var t=this;this.requestAniFrame()((function(){if(!t.hasMore||!t.isScrollAtBottom()||t.isLoading||!t.isShowMod)return!1;t.$emit("loadmore")}))},calculateTopPosition:function(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom:function(){var t,e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{var n=this.$refs.scroller,i=n.scrollHeight,o=n.clientHeight,a=n.scrollTop;t=i-o-a}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),s=a,r=(n("0bbf"),n("2877")),c=Object(r["a"])(s,i,o,!1,null,"9d36787a",null);e["a"]=c.exports},"5f13":function(t,e,n){},"5f9f":function(t,e,n){"use strict";var i=n("7095"),o=n.n(i);o.a},7095:function(t,e,n){},aa6b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[n("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[n("i",{staticClass:"back-icon"})])],2),t._t("left")],2),n("div",{staticClass:"nav-center"},[n("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),n("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[n("i",{staticClass:"more-icon"})])],2)],2)])},o=[],a={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},s=a,r=(n("5f9f"),n("2877")),c=Object(r["a"])(s,i,o,!1,null,"96b87444",null);e["a"]=c.exports},aa77:function(t,e,n){var i=n("5ca1"),o=n("be13"),a=n("79e5"),s=n("fdef"),r="["+s+"]",c="​",l=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),f=function(t,e,n){var o={},r=a((function(){return!!s[t]()||c[t]()!=c})),l=o[t]=r?e(d):s[t];n&&(o[n]=l),i(i.P+i.F*r,"String",o)},d=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c251:function(t,e,n){},c5f6:function(t,e,n){"use strict";var i=n("7726"),o=n("69a8"),a=n("2d95"),s=n("5dbc"),r=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,h="Number",p=i[h],v=p,m=p.prototype,g=a(n("2aeb")(m))==h,w="trim"in String.prototype,b=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=w?e.trim():d(e,3);var n,i,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>o)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?c((function(){m.valueOf.call(n)})):a(n)!=h)?s(new v(b(e)),n,p):b(e)};for(var k,y=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)o(v,k=y[S])&&!o(p,k)&&f(p,k,u(v,k));p.prototype=m,m.constructor=p,n("2aba")(i,h,p)}},fccc:function(t,e,n){"use strict";var i=n("5f13"),o=n.n(i);o.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);