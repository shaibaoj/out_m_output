(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c5f2184"],{"026f":function(e,t,n){var o,i,r;(function(){(function(a,s){i=[t,n("0f33"),n("d09f")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-field",props:{title:{type:String,default:""},brief:{type:String,default:""},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},provide:function(){return{rootField:this}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var a="function"===typeof e.exports?e.exports.options:e.exports;a.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"md-field",class:{"is-plain":e.plain,"is-disabled":e.disabled}},[e.title||e.brief||e.$slots.header||e.$slots.action?n("header",{staticClass:"md-field-header"},[n("div",{staticClass:"md-field-heading"},[e.title?n("legend",{staticClass:"md-field-title",domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e.brief?n("p",{staticClass:"md-field-brief",domProps:{textContent:e._s(e.brief)}}):e._e(),e._v(" "),e._t("header")],2),e._v(" "),n("div",{staticClass:"md-field-action"},[e._t("action")],2)]):e._e(),e._v(" "),n("div",{staticClass:"md-field-content"},[e._t("default")],2),e._v(" "),e.$slots.footer?n("footer",{staticClass:"md-field-footer"},[e._t("footer")],2):e._e()])},a.staticRenderFns=[]},"0bbf":function(e,t,n){"use strict";var o=n("956e"),i=n.n(o);i.a},"1a46":function(e,t,n){var o,i,r;(function(a,s){i=[t,n("f7f8")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=i,e.traverse=r,e.toObject=a,e.toArray=s,e.inArray=c,e.toNumber=l,e.toString=u,e.compareObjects=f,e.isEmptyObject=d;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.noop;if(e){"function"===typeof n&&(i=n,n=[]);var r=0,a=[],s=function e(t){for(var s=0,c=t.length;s<c;s++){var l=Array.isArray(t[s]),u=Array.isArray(n)?n[r]:n;if(l||t[s]&&t[s][u])r++,a.push(s),e(l?t[s]:t[s][u]);else{if(!(r>=n.length))continue;var f=i(t[s],r,[].concat(o(a),[s]));if(1===f)continue;if(2===f)break}}r=0,a=[]};s(e)}}function a(e){for(var t={},n=0;n<e.length;n++)e[n]&&i(t,e[n]);return t}function s(e,t){t=t||0;var n=e.length-t,o=[];while(n--)o.unshift(e[n+t]);return o}function c(e,t){return Array.isArray(e)?!!~e.indexOf(t):t===e}function l(e){var t=parseFloat(e);return isNaN(t)?e:t}function u(e){return null==e?"":"object"===("undefined"===typeof e?"undefined":n(e))?JSON.stringify(e,null,2):String(e)}function f(e,t){var o=!0;return e&&t?("object"!==("undefined"===typeof e?"undefined":n(e))||"object"!==("undefined"===typeof t?"undefined":n(t))||JSON.stringify(e)!==JSON.stringify(t))&&(o=!1):o=!1,o}function d(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}))},"1e1b":function(e,t,n){},"2ffc":function(e,t,n){var o,i,r;(function(a,s){i=[t,n("b207")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.warn=void 0;e.warn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";!t.isProd&&console[n]("[Mand-Mobile]: "+e)}}))},3919:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(t){return e.touchStartHandle(t)},touchmove:function(t){return e.touchMoveHandle(t)}}},[e._t("default"),n("div",{staticClass:"load-more"},[n("div",{staticClass:"bottom-tips"},[e.isLoading?[n("i",{staticClass:"loading-hint"}),n("span",{staticClass:"loading-txt"},[e._v("加载中...")])]:e.hasMore?e._e():n("span",{staticClass:"tips-txt"},[e._v("哎呀，这里是底部了啦")])],2)])],2)},i=[],r={name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle(e){try{this.startX=Number(e.changedTouches[0].pageX),this.startY=Number(e.changedTouches[0].pageY)}catch(e){console.log(e.message)}},touchMoveHandle(e){let t=Number(e.changedTouches[0].pageX),n=Number(e.changedTouches[0].pageY);this.diffX=t-this.startX,this.diffY=n-this.startY},scrollListener(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},handleScroll(){this.requestAniFrame()(()=>{if(!this.hasMore||!this.isScrollAtBottom()||this.isLoading||!this.isShowMod)return!1;this.$emit("loadmore")})},calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0},getWindowScrollTop(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom(){let e;const t=this.getWindowScrollTop();if(this.useWindow)e=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-t-window.innerHeight;else{const t=this.$refs.scroller,n=t.scrollHeight,o=t.clientHeight,i=t.scrollTop;e=n-o-i}this.beforeScrollTop;return this.beforeScrollTop=t,e<=this.threshold&&t>=this.beforeScrollTop}},destroyed(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}},a=r,s=(n("0bbf"),n("9ca4")),c=Object(s["a"])(a,o,i,!1,null,"9d36787a",null);t["a"]=c.exports},"532c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},"5f9f":function(e,t,n){"use strict";var o=n("1e1b"),i=n.n(o);i.a},"956e":function(e,t,n){},"9e33":function(e,t,n){var o,i,r;(function(a,s){i=[t,n("b207")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.dom=e.mdBody=e.mdDocument=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){n(this,e)}return o(e,[{key:"appendChild",value:function(){}},{key:"removeChild",value:function(){}},{key:"querySelector",value:function(){}},{key:"addEventListener",value:function(){}},{key:"removeEventListener",value:function(){}}]),e}(),r=new i,a=r,s=r;a.body=s,t.inBrowser&&(e.mdDocument=a=window.document,e.mdBody=s=document.body),e.mdDocument=a,e.mdBody=s,e.dom=r}))},aa31:function(e,t,n){var o,i,r;(function(a,s){i=[t,n("2ffc"),n("b207"),n("1a46"),n("f7f8"),n("9e33")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t,n,o,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})})),Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})),Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})})),Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}))}))},aa6b:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[n("div",{staticClass:"back",on:{click:function(t){return e.$emit("on-click-back")}}},[e._t("back-icon",[n("i",{staticClass:"back-icon"})])],2),e._t("left")],2),n("div",{staticClass:"nav-center"},[n("h3",{staticClass:"nav-title",on:{click:function(t){return e.$emit("on-click-title")}}},[e._t("default",[n("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[e._t("right"),n("div",{staticClass:"more",on:{click:function(t){return e.$emit("on-click-more")}}},[e._t("more-icon",[n("i",{staticClass:"more-icon"})])],2)],2)])},i=[],r={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},a=r,s=(n("5f9f"),n("9ca4")),c=Object(s["a"])(a,o,i,!1,null,"96b87444",null);t["a"]=c.exports},af19:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"fix"},[n("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":e.back}},[e._v("支付信息设置")])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"input-content"},[n("md-field",[n("md-input-item",{ref:"alipay",attrs:{title:"账号",placeholder:"输入支付宝账号","data-key":"alipay"},model:{value:e.alipay,callback:function(t){e.alipay=t},expression:"alipay"}}),n("md-input-item",{ref:"payeeName",attrs:{title:"收款人姓名",placeholder:"输入支付宝真实用户名","data-key":"alipay"},model:{value:e.payeeName,callback:function(t){e.payeeName=t},expression:"payeeName"}})],1)],1),n("div",{staticClass:"confirm-btn",attrs:{disabled:e.loading},on:{click:e.update}},[e._v("设置")])])])},i=[],r=(n("6d57"),n("21a1")),a=n.n(r),s=n("73d1"),c=n("026f"),l=n.n(c),u=n("b1ef"),f=n.n(u),d=n("5880");n("aa6b"),n("3919");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={components:{[f.a.name]:f.a,[l.a.name]:l.a},data(){return{loading:!1,alipay:"",payeeName:""}},mounted(){this.query()},methods:h(h({back(){this.$router.go(-1)}},Object(d["mapMutations"])(["login","setToken"])),{},{navAction(e){this.$nav.toNav(e)},navToPage(e,t){this.$nextTick(()=>{this.$router.push({path:e,query:t||{}})})},update(){this.loading=!0;const e=this.alipay,t=this.payeeName;this.$http.post("/cms.member.info.change_alipay",{alipay:e,payee_name:t}).then(e=>{a.a.info(e.info.status_err),this.loading=!1,0===e.info.status&&this.back()})},query(){this.$http.post("/cms.member.payment.account",{}).then(e=>{e.data.item&&(this.alipay=e.data.item.alipay_account,this.payeeName=e.data.item.payee_name)})}})},m=v,y=(n("bdea"),n("9ca4")),b=Object(y["a"])(m,o,i,!1,null,"22fe88b2",null);t["default"]=b.exports},b207:function(e,t,n){(function(o){var i,r,a;(function(o,s){r=[t,n("8bbf")],i=s,a="function"===typeof i?i.apply(t,r):i,void 0===a||(e.exports=a)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.root=e.isIOS=e.isAndroid=e.UA=e.inBrowser=e.isProd=void 0;var n=i(t);function i(e){return e&&e.__esModule?e:{default:e}}e.isProd=!0;var r=e.inBrowser=!n.default.prototype.$isServer||"undefined"!==typeof window,a=e.UA=r&&window.navigator.userAgent.toLowerCase();e.isAndroid=a&&a.indexOf("android")>0,e.isIOS=a&&/iphone|ipad|ipod|ios/.test(a),e.root="undefined"!==typeof window?window:o}))}).call(this,n("532c"))},bdea:function(e,t,n){"use strict";var o=n("fcdd"),i=n.n(o);i.a},d09f:function(e,t,n){},f7f8:function(e,t,n){var o,i,r;(function(a,s){i=[t,n("b207")],o=s,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";function n(){}function o(e,t){var n=document,o=n.head||n.getElementsByTagName("head")[0],i=n.createElement("script"),r="onload"in i,a=function(){i=null,"function"===typeof t&&t()};r?i.onload=a:i.onreadystatechange=function(){/loaded|complete/.test(i.readyState)&&a()},i.async=!0,i.crossOrigin=!0,i.charset="utf-8",i.src=e,o.appendChild(i)}function i(){var e=function(e,t){var n=new RegExp("(^|,)"+e+"=([^,]*)(,|$)","i"),o=t.match(n);return null!=o?o[2]:null},n=t.inBrowser?document.querySelector("meta[name=viewport]"):null;if(!n)return 1;var o=n.getAttribute("content"),i=+(e("initial-scale",o)||1),r=+(e("maximum-scale",o)||1),a=+(e("minimum-scale",o)||1);return 1/Math.min(i,r,a)}function r(e){var t=new Blob(["("+e.toString()+")(null)"],{type:"application/javascript"});return URL.createObjectURL(t)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e+"-"+parseInt(Math.random()*Math.pow(10,t))}function s(e){var t=/-(\w)/g;return e.replace(t,(function(e,t){return t.toUpperCase()}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=null;return function(){var n=this,i=arguments;o&&clearTimeout(o),o=setTimeout((function(){e.apply(n,i)}),t)}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=0;return function(){var n=this,i=Date.now();i-o>t&&(o=i,e.apply(n,arguments))}}Object.defineProperty(e,"__esModule",{value:!0}),e.noop=n,e.requireRemoteScript=o,e.getDpr=i,e.functionToUrl=r,e.randomId=a,e.transformCamelCase=s,e.debounce=c,e.throttle=l}))},fcdd:function(e,t,n){}}]);