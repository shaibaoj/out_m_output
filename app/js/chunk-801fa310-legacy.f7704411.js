(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-801fa310"],{"06ff":function(e,t,n){(function(o){var r,i,a;(function(o,c){i=[t,n("8bbf")],r=c,a="function"===typeof r?r.apply(t,i):r,void 0===a||(e.exports=a)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.root=e.isIOS=e.isAndroid=e.UA=e.inBrowser=e.isProd=void 0;var n=r(t);function r(e){return e&&e.__esModule?e:{default:e}}e.isProd=!0;var i=e.inBrowser=!n.default.prototype.$isServer||"undefined"!==typeof window,a=e.UA=i&&window.navigator.userAgent.toLowerCase();e.isAndroid=a&&a.indexOf("android")>0,e.isIOS=a&&/iphone|ipad|ipod|ios/.test(a),e.root="undefined"!==typeof window?window:o}))}).call(this,n("c8ba"))},2273:function(e,t,n){var o,r,i;(function(){(function(a,c){r=[t,n("cdfc"),n("4425")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(e){this.disabled||(this.$emit("input",!this.value),this.$emit("change",e))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var a="function"===typeof e.exports?e.exports.options:e.exports;a.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.disabled?"disabled":"",e.value?"active":""],on:{click:function(t){return e.$_onChange(t)}}})},a.staticRenderFns=[]},4425:function(e,t,n){},"677c":function(e,t,n){var o,r,i;(function(a,c){r=[t,n("06ff")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.dom=e.mdBody=e.mdDocument=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){n(this,e)}return o(e,[{key:"appendChild",value:function(){}},{key:"removeChild",value:function(){}},{key:"querySelector",value:function(){}},{key:"addEventListener",value:function(){}},{key:"removeEventListener",value:function(){}}]),e}(),i=new r,a=i,c=i;a.body=c,t.inBrowser&&(e.mdDocument=a=window.document,e.mdBody=c=document.body),e.mdDocument=a,e.mdBody=c,e.dom=i}))},"692c":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"fields"},[n("md-field",{attrs:{title:"首单礼金极速返现",brief:"是否开启首单礼金极速返现（开通后，用户购买首单礼金商品，且商品价格小于等于0.2，商品的返利会员下单后，实时返现给会员）"}},[n("md-cell-item",{attrs:{title:"状态",brief:""}},[n("md-switch",{attrs:{slot:"right"},slot:"right",model:{value:e.page.fanxian.shoudan_status,callback:function(t){e.$set(e.page.fanxian,"shoudan_status",t)},expression:"page.fanxian.shoudan_status"}})],1)],1),n("md-field",{attrs:{title:"实时返现佣金计算",brief:"实时返现佣金此处的优先级别优选返利设置"}},[n("md-input-item",{attrs:{title:"自购返现",type:"money",brief:"自购的商品获取的的返现",placeholder:"返利的百分比","is-amount":"",solid:!1},model:{value:e.form.comission_rate,callback:function(t){e.$set(e.form,"comission_rate",t)},expression:"form.comission_rate"}}),n("md-input-item",{attrs:{title:"推荐返现",type:"money",brief:"推荐的好友首单礼金商品获取的返现",placeholder:"返利的百分比","is-amount":"",solid:!1},model:{value:e.form.comission_rate2,callback:function(t){e.$set(e.form,"comission_rate2",t)},expression:"form.comission_rate2"}})],1)],1),n("md-field",[n("md-button",{attrs:{type:"primary",round:""},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("1861")),a=n.n(i),c=n("bd86"),u=n("0aec"),s=n.n(u),f=n("e446"),d=n.n(f),l=n("8730"),p=n.n(l),m=n("2273"),y=n.n(m),v=n("af88"),b=n.n(v),h=(n("7f7f"),n("6d32")),g=n.n(h),_=n("88bc"),O=n.n(_),w=n("751a"),j={getItems:"cms.market.fanxian.list",getView:"cms.market.fanxian.view",updateItem:"cms.market.fanxian.update"};function x(e){return w["a"].post(j.getView,e)}function k(e){return w["a"].post(j.updateItem,e)}var P,S=n("5880");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={components:(P={},Object(c["a"])(P,g.a.name,g.a),Object(c["a"])(P,b.a.name,b.a),Object(c["a"])(P,y.a.name,y.a),Object(c["a"])(P,p.a.name,p.a),Object(c["a"])(P,d.a.name,d.a),Object(c["a"])(P,s.a.name,s.a),P),computed:C({},Object(S["mapGetters"])(["token"])),data:function(){return{form:{comission_rate:0,comission_rate2:0},page:{fanxian:{shoudan_status:!1}}}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){var e=this;x().then((function(t){t.data.item&&e.$nextTick((function(){var n=O()(t.data.item,["comission_rate","comission_rate2"]);e.form=Object.assign(e.form,n),e.page.fanxian.shoudan_status=1===t.data.item.shoudan_status}))}))},handleSubmit:function(e){k(Object.assign(this.form,{shoudan_status:this.page.fanxian.shoudan_status})).then((function(e){var t=e||{},n=t.code;0===n&&a.a.succeed("保存成功")}))}}},E=M,$=(n("a378"),n("2877")),B=Object($["a"])(E,o,r,!1,null,"e418adce",null);t["default"]=B.exports},"9cee":function(e,t,n){var o,r,i;(function(a,c){r=[t,n("06ff")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.warn=void 0;e.warn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";!t.isProd&&console[n]("[Mand-Mobile]: "+e)}}))},"9ee1":function(e,t,n){},a378:function(e,t,n){"use strict";var o=n("9ee1"),r=n.n(o);r.a},a7e3:function(e,t,n){var o,r,i;(function(a,c){r=[t,n("06ff")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t){"use strict";function n(){}function o(e,t){var n=document,o=n.head||n.getElementsByTagName("head")[0],r=n.createElement("script"),i="onload"in r,a=function(){r=null,"function"===typeof t&&t()};i?r.onload=a:r.onreadystatechange=function(){/loaded|complete/.test(r.readyState)&&a()},r.async=!0,r.crossOrigin=!0,r.charset="utf-8",r.src=e,o.appendChild(r)}function r(){var e=function(e,t){var n=new RegExp("(^|,)"+e+"=([^,]*)(,|$)","i"),o=t.match(n);return null!=o?o[2]:null},n=t.inBrowser?document.querySelector("meta[name=viewport]"):null;if(!n)return 1;var o=n.getAttribute("content"),r=+(e("initial-scale",o)||1),i=+(e("maximum-scale",o)||1),a=+(e("minimum-scale",o)||1);return 1/Math.min(r,i,a)}function i(e){var t=new Blob(["("+e.toString()+")(null)"],{type:"application/javascript"});return URL.createObjectURL(t)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e+"-"+parseInt(Math.random()*Math.pow(10,t))}function c(e){var t=/-(\w)/g;return e.replace(t,(function(e,t){return t.toUpperCase()}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=null;return function(){var n=this,r=arguments;o&&clearTimeout(o),o=setTimeout((function(){e.apply(n,r)}),t)}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=0;return function(){var n=this,r=Date.now();r-o>t&&(o=r,e.apply(n,arguments))}}Object.defineProperty(e,"__esModule",{value:!0}),e.noop=n,e.requireRemoteScript=o,e.getDpr=r,e.functionToUrl=i,e.randomId=a,e.transformCamelCase=c,e.debounce=u,e.throttle=s}))},affe:function(e,t,n){},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},d8a8:function(e,t,n){var o,r,i;(function(a,c){r=[t,n("a7e3")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=r,e.traverse=i,e.toObject=a,e.toArray=c,e.inArray=u,e.toNumber=s,e.toString=f,e.compareObjects=d,e.isEmptyObject=l;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){for(var n in t)e[n]=t[n];return e}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.noop;if(e){"function"===typeof n&&(r=n,n=[]);var i=0,a=[],c=function e(t){for(var c=0,u=t.length;c<u;c++){var s=Array.isArray(t[c]),f=Array.isArray(n)?n[i]:n;if(s||t[c]&&t[c][f])i++,a.push(c),e(s?t[c]:t[c][f]);else{if(!(i>=n.length))continue;var d=r(t[c],i,[].concat(o(a),[c]));if(1===d)continue;if(2===d)break}}i=0,a=[]};c(e)}}function a(e){for(var t={},n=0;n<e.length;n++)e[n]&&r(t,e[n]);return t}function c(e,t){t=t||0;var n=e.length-t,o=[];while(n--)o.unshift(e[n+t]);return o}function u(e,t){return Array.isArray(e)?!!~e.indexOf(t):t===e}function s(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e){return null==e?"":"object"===("undefined"===typeof e?"undefined":n(e))?JSON.stringify(e,null,2):String(e)}function d(e,t){var o=!0;return e&&t?("object"!==("undefined"===typeof e?"undefined":n(e))||"object"!==("undefined"===typeof t?"undefined":n(t))||JSON.stringify(e)!==JSON.stringify(t))&&(o=!1):o=!1,o}function l(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}))},e446:function(e,t,n){var o,r,i;(function(){(function(a,c){r=[t,n("8730"),n("f1c1"),n("cdfc"),n("affe")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(t);function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.default={name:"md-action-bar",components:i({},o.default.name,o.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,n.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(e,t){t.onClick&&t.onClick(e,t),this.$emit("click",e,t)}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var a="function"===typeof e.exports?e.exports.options:e.exports;a.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-action-bar"},[n("div",{staticClass:"md-action-bar-container"},[e.hasSlots?n("div",{staticClass:"md-action-bar-text"},[e._t("default")],2):e._e(),e._v(" "),n("div",{staticClass:"md-action-bar-group"},[e._l(e.coerceActions,(function(t,o){return[n("md-button",{key:o,staticClass:"md-action-bar-button",attrs:{type:t.type||(t.disabled?"disabled":"primary"),plain:t.plain||o!==e.coerceActions.length-1,round:t.round,inactive:t.inactive,loading:t.loading,icon:t.icon,"icon-svg":t.iconSvg},on:{click:function(n){return e.$_onBtnClick(n,t)}}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}))],2)])])},a.staticRenderFns=[]},f1c1:function(e,t,n){var o,r,i;(function(a,c){r=[t,n("9cee"),n("06ff"),n("d8a8"),n("a7e3"),n("677c")],o=c,i="function"===typeof o?o.apply(t,r):o,void 0===i||(e.exports=i)})(0,(function(e,t,n,o,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})})),Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})})),Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})})),Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}))}))}}]);