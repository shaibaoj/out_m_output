(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08abe904"],{"0bbf":function(t,e,i){"use strict";i("c251")},3919:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),i("div",{staticClass:"load-more"},[i("div",{staticClass:"bottom-tips"},[t.isLoading?[i("i",{staticClass:"loading-hint"}),i("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():i("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},s=[],n={name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle(t){let e=Number(t.changedTouches[0].pageX),i=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=i-this.startY},scrollListener(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll(){this.requestAniFrame()(()=>{if(!this.hasMore||!this.isScrollAtBottom()||this.isLoading||!this.isShowMod)return!1;this.$emit("loadmore")})},calculateTopPosition(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom(){let t;const e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{const e=this.$refs.scroller,i=e.scrollHeight,o=e.clientHeight,s=e.scrollTop;t=i-o-s}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}},a=n,r=(i("0bbf"),i("2877")),l=Object(r["a"])(a,o,s,!1,null,"9d36787a",null);e["a"]=l.exports},"5f9f":function(t,e,i){"use strict";i("7095")},7095:function(t,e,i){},aa6b:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",(function(){return[i("i",{staticClass:"back-icon"})]}))],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",(function(){return[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])]}))],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",(function(){return[i("i",{staticClass:"more-icon"})]}))],2)],2)])},s=[],n={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},a=n,r=(i("5f9f"),i("2877")),l=Object(r["a"])(a,o,s,!1,null,"96b87444",null);e["a"]=l.exports},ba5c:function(t,e,i){"use strict";i("fc15")},c251:function(t,e,i){},f48e:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.navBack}},[t._v("注册")])],1),i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"number",placeholder:"请输入手机号码",maxlength:"11","data-key":"mobile"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),i("div",{staticClass:"input-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"8-18位不含特殊字符的数字、字母组合","placeholder-class":"input-empty",maxlength:"20","data-key":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),i("div",{staticClass:"confirm-btn",attrs:{disabled:t.logining},on:{click:t.toLogin}},[t._v("注册")])])])])},s=[],n=(i("ac6a"),i("1861")),a=i.n(n),r=i("ade3"),l=i("5880"),c=i("aa6b");i("3919");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={components:{navBar:c["a"]},data(){return{mobile:"",password:"",logining:!1}},mounted(){},methods:d(d({},Object(l["mapMutations"])(["login","setToken","setInviteId"])),{},{inputChange(t){const e=t.currentTarget.dataset.key;this[e]=t.detail.value},navBack(){this.$router.go(-1)()},toLogin(){this.logining=!0,this.$http.post("/cms.register.get_token",{user_name:this.mobile,passwd:this.password}).then(t=>{t.data.token?(this.setToken(t.data.token),this.setInviteId(t.data.member_id),this.$router.push({path:"/mine",query:{}})):(a.a.info(t.message),this.logining=!1)})}})},p=h,f=(i("ba5c"),i("2877")),m=Object(f["a"])(p,o,s,!1,null,"4d070a7e",null);e["default"]=m.exports},fc15:function(t,e,i){}}]);