(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62bff004"],{"08e6":function(e,t,n){},"1a46":function(e,t,n){var o,i,r;(function(a,c){i=[t,n("f7f8")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=i,e.traverse=r,e.toObject=a,e.toArray=c,e.inArray=u,e.toNumber=s,e.toString=f,e.compareObjects=l,e.isEmptyObject=d;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.noop;if(e){"function"===typeof n&&(i=n,n=[]);var r=0,a=[],c=function e(t){for(var c=0,u=t.length;c<u;c++){var s=Array.isArray(t[c]),f=Array.isArray(n)?n[r]:n;if(s||t[c]&&t[c][f])r++,a.push(c),e(s?t[c]:t[c][f]);else{if(!(r>=n.length))continue;var l=i(t[c],r,[].concat(o(a),[c]));if(1===l)continue;if(2===l)break}}r=0,a=[]};c(e)}}function a(e){for(var t={},n=0;n<e.length;n++)e[n]&&i(t,e[n]);return t}function c(e,t){t=t||0;var n=e.length-t,o=[];while(n--)o.unshift(e[n+t]);return o}function u(e,t){return Array.isArray(e)?!!~e.indexOf(t):t===e}function s(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e){return null==e?"":"object"===("undefined"===typeof e?"undefined":n(e))?JSON.stringify(e,null,2):String(e)}function l(e,t){var o=!0;return e&&t?("object"!==("undefined"===typeof e?"undefined":n(e))||"object"!==("undefined"===typeof t?"undefined":n(t))||JSON.stringify(e)!==JSON.stringify(t))&&(o=!1):o=!1,o}function d(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}))},"2ffc":function(e,t,n){var o,i,r;(function(a,c){i=[t,n("b207")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.warn=void 0;e.warn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";!t.isProd&&console[n]("[Mand-Mobile]: "+e)}}))},3235:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o=n("751a");const i={getDataView:"cms.keeper.data.view",updateData:"cms.keeper.data.update"};function r(e){return o["a"].post(i.getDataView,e)}function a(e){return o["a"].post(i.updateData,e)}},"40bf":function(e,t,n){var o,i,r;(function(){(function(a,c){i=[t,n("0f33"),n("551d")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(e){this.disabled||(this.$emit("input",!this.value),this.$emit("change",e))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var a="function"===typeof e.exports?e.exports.options:e.exports;a.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.disabled?"disabled":"",e.value?"active":""],on:{click:function(t){return e.$_onChange(t)}}})},a.staticRenderFns=[]},"448a":function(e,t,n){var o,i,r;(function(){(function(a,c){i=[t,n("e063"),n("aa31"),n("0f33"),n("7330")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(t);function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.default={name:"md-action-bar",components:r({},o.default.name,o.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,n.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(e,t){t.onClick&&t.onClick(e,t),this.$emit("click",e,t)}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var a="function"===typeof e.exports?e.exports.options:e.exports;a.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-action-bar"},[n("div",{staticClass:"md-action-bar-container"},[e.hasSlots?n("div",{staticClass:"md-action-bar-text"},[e._t("default")],2):e._e(),e._v(" "),n("div",{staticClass:"md-action-bar-group"},[e._l(e.coerceActions,(function(t,o){return[n("md-button",{key:o,staticClass:"md-action-bar-button",attrs:{type:t.type||(t.disabled?"disabled":"primary"),plain:t.plain||o!==e.coerceActions.length-1,round:t.round,inactive:t.inactive,loading:t.loading,icon:t.icon,"icon-svg":t.iconSvg},on:{click:function(n){return e.$_onBtnClick(n,t)}}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}))],2)])])},a.staticRenderFns=[]},"532c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},"551d":function(e,t,n){},6456:function(e,t,n){"use strict";var o=n("08e6"),i=n.n(o);i.a},7330:function(e,t,n){},"9e33":function(e,t,n){var o,i,r;(function(a,c){i=[t,n("b207")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.dom=e.mdBody=e.mdDocument=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){n(this,e)}return o(e,[{key:"appendChild",value:function(){}},{key:"removeChild",value:function(){}},{key:"querySelector",value:function(){}},{key:"addEventListener",value:function(){}},{key:"removeEventListener",value:function(){}}]),e}(),r=new i,a=r,c=r;a.body=c,t.inBrowser&&(e.mdDocument=a=window.document,e.mdBody=c=document.body),e.mdDocument=a,e.mdBody=c,e.dom=r}))},aa31:function(e,t,n){var o,i,r;(function(a,c){i=[t,n("2ffc"),n("b207"),n("1a46"),n("f7f8"),n("9e33")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t,n,o,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})})),Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})),Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})})),Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}))}))},b207:function(e,t,n){(function(o){var i,r,a;(function(o,c){r=[t,n("8bbf")],i=c,a="function"===typeof i?i.apply(t,r):i,void 0===a||(e.exports=a)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.root=e.isIOS=e.isAndroid=e.UA=e.inBrowser=e.isProd=void 0;var n=i(t);function i(e){return e&&e.__esModule?e:{default:e}}e.isProd=!0;var r=e.inBrowser=!n.default.prototype.$isServer||"undefined"!==typeof window,a=e.UA=r&&window.navigator.userAgent.toLowerCase();e.isAndroid=a&&a.indexOf("android")>0,e.isIOS=a&&/iphone|ipad|ipod|ios/.test(a),e.root="undefined"!==typeof window?window:o}))}).call(this,n("532c"))},ccdc:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"fields"},[n("md-field",{attrs:{title:"注册人奖励",brief:"用户注册奖励的金额"}},[n("md-input-item",{attrs:{title:"app注册",type:"money",brief:"新用户通过app注册奖励，用户注册成功送给用户的奖励金额（最小0.01元）",placeholder:"最小0.01元","is-amount":""},model:{value:e.form.register_money,callback:function(t){e.$set(e.form,"register_money",t)},expression:"form.register_money"}}),e._e(),e._e()],1),n("md-field",{attrs:{title:"邀请人奖励",brief:"邀请用户下载注册app的奖励"}},[n("md-input-item",{attrs:{title:"奖励积分",type:"money",brief:"（邀请一个人，获取"+e.form.invite_point+"个积分）",placeholder:"输入奖励的积分数","is-amount":"",solid:!1},model:{value:e.form.invite_point,callback:function(t){e.$set(e.form,"invite_point",t)},expression:"form.invite_point"}}),n("md-input-item",{attrs:{title:"奖励现金",type:"money",brief:"（邀请一个人，获取"+e.form.invite_money+"元）（最小0.01元）",placeholder:"最小0.01元","is-amount":""},model:{value:e.form.invite_money,callback:function(t){e.$set(e.form,"invite_money",t)},expression:"form.invite_money"}}),n("md-input-item",{attrs:{title:"邀请限制奖励",type:"money",brief:"（超过"+e.form.invite_limit+"人，奖励按照下面计算）",placeholder:"输入超过的人数","is-amount":"",solid:!1},model:{value:e.form.invite_limit,callback:function(t){e.$set(e.form,"invite_limit",t)},expression:"form.invite_limit"}}),n("md-input-item",{attrs:{title:"限制金额",type:"money",brief:"每邀请一个用户注册或者下载app奖励（"+e.form.invite_limit_money+"元）（最小0.01元）",placeholder:"最小0.01元","is-amount":""},model:{value:e.page.invite_limit_money,callback:function(t){e.$set(e.page,"invite_limit_money",t)},expression:"page.invite_limit_money"}})],1),n("md-field",{attrs:{title:"用户返现提现",brief:"提现金额设置"}},[n("md-input-item",{attrs:{title:"用户返现提现最低额",type:"money",brief:"买家每次提现金额必须大于最低额"+e.form.payment_money+"，否则无法提现，（建议大于等于1，小于5元，不建议设置过大）",placeholder:"最小0.01元","is-amount":"",solid:!1},model:{value:e.form.payment_money,callback:function(t){e.$set(e.form,"payment_money",t)},expression:"form.payment_money"}})],1)],1),n("md-field",[n("md-button",{attrs:{type:"primary",round:""},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)},i=[],r=(n("6d57"),n("21a1")),a=n.n(r),c=n("73d1"),u=n("ec20"),s=n.n(u),f=n("448a"),l=n.n(f),d=n("e063"),p=n.n(d),m=n("40bf"),y=n.n(m),v=n("026f"),b=n.n(v),_=n("b1ef"),h=n.n(_),g=n("85ee"),O=n.n(g),w=n("3235"),j=n("5880");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={components:{[h.a.name]:h.a,[b.a.name]:b.a,[y.a.name]:y.a,[p.a.name]:p.a,[l.a.name]:l.a,[s.a.name]:s.a},computed:x({},Object(j["mapGetters"])(["token"])),data(){return{form:{payment_mode:!1,payment_money:0,invite_point:0,invite_money:0,sms:0,checkin_money:0,checkin_points:0,point_exchange_money:0,invite_limit:0,invite_limit_money:0},page:{uploading:!0,data:{app_reg_mobile:!1}},payButton:[{text:"充值短信",round:!0}]}},created(){},mounted(){this.init()},methods:{init(){this.query()},query(){Object(w["a"])().then(e=>{e.data.item&&this.$nextTick(()=>{const t=O()(e.data.item,["register_money","register_weapp_money","register_cms_money","invite_point","invite_money","invite_limit","invite_limit_money","point_exchange_money","payment_money","sms","checkin_points","checkin_money"]);this.form=Object.assign(this.form,t),this.page.data.app_reg_mobile=1===e.data.item.app_reg_mobile})})},handleSubmit(e){Object(w["b"])(Object.assign(this.form,{page_view:"data",app_reg_mobile:this.page.data.app_reg_mobile})).then(e=>{const t=e||{},n=t.info;0===(n||{}).status&&a.a.succeed("保存成功")})},changeMode(e){const t=e.target.value;this.page.payment_mode=t},changeMoney(e){const t=e.target.value;this.page.payment_money=t},openModelPay(){this.$refs.modalPay.edit({})},queryPayResult(){this.$refs.modalPayment.edit({})}}},M=P,S=(n("6456"),n("9ca4")),A=Object(S["a"])(M,o,i,!1,null,"edb12832",null);t["default"]=A.exports},f7f8:function(e,t,n){var o,i,r;(function(a,c){i=[t,n("b207")],o=c,r="function"===typeof o?o.apply(t,i):o,void 0===r||(e.exports=r)})(0,(function(e,t){"use strict";function n(){}function o(e,t){var n=document,o=n.head||n.getElementsByTagName("head")[0],i=n.createElement("script"),r="onload"in i,a=function(){i=null,"function"===typeof t&&t()};r?i.onload=a:i.onreadystatechange=function(){/loaded|complete/.test(i.readyState)&&a()},i.async=!0,i.crossOrigin=!0,i.charset="utf-8",i.src=e,o.appendChild(i)}function i(){var e=function(e,t){var n=new RegExp("(^|,)"+e+"=([^,]*)(,|$)","i"),o=t.match(n);return null!=o?o[2]:null},n=t.inBrowser?document.querySelector("meta[name=viewport]"):null;if(!n)return 1;var o=n.getAttribute("content"),i=+(e("initial-scale",o)||1),r=+(e("maximum-scale",o)||1),a=+(e("minimum-scale",o)||1);return 1/Math.min(i,r,a)}function r(e){var t=new Blob(["("+e.toString()+")(null)"],{type:"application/javascript"});return URL.createObjectURL(t)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e+"-"+parseInt(Math.random()*Math.pow(10,t))}function c(e){var t=/-(\w)/g;return e.replace(t,(function(e,t){return t.toUpperCase()}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=null;return function(){var n=this,i=arguments;o&&clearTimeout(o),o=setTimeout((function(){e.apply(n,i)}),t)}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=0;return function(){var n=this,i=Date.now();i-o>t&&(o=i,e.apply(n,arguments))}}Object.defineProperty(e,"__esModule",{value:!0}),e.noop=n,e.requireRemoteScript=o,e.getDpr=i,e.functionToUrl=r,e.randomId=a,e.transformCamelCase=c,e.debounce=u,e.throttle=s}))}}]);