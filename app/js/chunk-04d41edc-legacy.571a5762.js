(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04d41edc"],{"06ff":function(t,e,n){(function(o){var r,i,a;(function(o,c){i=[e,n("8bbf")],r=c,a="function"===typeof r?r.apply(e,i):r,void 0===a||(t.exports=a)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.root=t.isIOS=t.isAndroid=t.UA=t.inBrowser=t.isProd=void 0;var n=r(e);function r(t){return t&&t.__esModule?t:{default:t}}t.isProd=!0;var i=t.inBrowser=!n.default.prototype.$isServer||"undefined"!==typeof window,a=t.UA=i&&window.navigator.userAgent.toLowerCase();t.isAndroid=a&&a.indexOf("android")>0,t.isIOS=a&&/iphone|ipad|ipod|ios/.test(a),t.root="undefined"!==typeof window?window:o}))}).call(this,n("c8ba"))},2273:function(t,e,n){var o,r,i;(function(){(function(a,c){r=[e,n("cdfc"),n("4425")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(t){this.disabled||(this.$emit("input",!this.value),this.$emit("change",t))}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var a="function"===typeof t.exports?t.exports.options:t.exports;a.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-switch",class:[t.disabled?"disabled":"",t.value?"active":""],on:{click:function(e){return t.$_onChange(e)}}})},a.staticRenderFns=[]},4425:function(t,e,n){},"677c":function(t,e,n){var o,r,i;(function(a,c){r=[e,n("06ff")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.dom=t.mdBody=t.mdDocument=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(){n(this,t)}return o(t,[{key:"appendChild",value:function(){}},{key:"removeChild",value:function(){}},{key:"querySelector",value:function(){}},{key:"addEventListener",value:function(){}},{key:"removeEventListener",value:function(){}}]),t}(),i=new r,a=i,c=i;a.body=c,e.inBrowser&&(t.mdDocument=a=window.document,t.mdBody=c=document.body),t.mdDocument=a,t.mdBody=c,t.dom=i}))},"692c":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"fields"},[n("md-field",{attrs:{title:"首单礼金极速返现",brief:"是否开启首单礼金极速返现（开通后，用户购买首单礼金商品，且商品价格小于等于0.2，商品的返利会员下单后，实时返现给会员）"}},[n("md-cell-item",{attrs:{title:"状态",brief:""}},[n("md-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.page.fanxian.shoudan_status,callback:function(e){t.$set(t.page.fanxian,"shoudan_status",e)},expression:"page.fanxian.shoudan_status"}})],1)],1),n("md-field",{attrs:{title:"实时返现佣金计算",brief:"实时返现佣金此处的优先级别优选返利设置"}},[n("md-input-item",{attrs:{title:"自购返现",type:"money",brief:"自购的商品获取的的返现",placeholder:"返利的百分比","is-amount":"",solid:!1},model:{value:t.form.comission_rate,callback:function(e){t.$set(t.form,"comission_rate",e)},expression:"form.comission_rate"}}),n("md-input-item",{attrs:{title:"推荐返现",type:"money",brief:"推荐的好友首单礼金商品获取的返现",placeholder:"返利的百分比","is-amount":"",solid:!1},model:{value:t.form.comission_rate2,callback:function(e){t.$set(t.form,"comission_rate2",e)},expression:"form.comission_rate2"}})],1)],1),n("md-field",[n("md-button",{attrs:{type:"primary",round:""},on:{click:t.handleSubmit}},[t._v("保存")])],1)],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("1861")),a=n.n(i),c=n("bd86"),u=n("0aec"),s=n.n(u),f=n("e446"),d=n.n(f),l=n("8730"),p=n.n(l),m=n("2273"),y=n.n(m),v=n("af88"),b=n.n(v),h=(n("7f7f"),n("6d32")),g=n.n(h),_=n("88bc"),O=n.n(_),w=n("751a"),j={getItems:"cms.market.fanxian.list",getView:"cms.market.fanxian.view",updateItem:"cms.market.fanxian.update"};function x(t){return w["a"].post(j.getView,t)}function k(t){return w["a"].post(j.updateItem,t)}var P,S=n("5880");function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={components:(P={},Object(c["a"])(P,g.a.name,g.a),Object(c["a"])(P,b.a.name,b.a),Object(c["a"])(P,y.a.name,y.a),Object(c["a"])(P,p.a.name,p.a),Object(c["a"])(P,d.a.name,d.a),Object(c["a"])(P,s.a.name,s.a),P),computed:C({},Object(S["mapGetters"])(["token"])),data:function(){return{form:{comission_rate:0,comission_rate2:0},page:{fanxian:{shoudan_status:!1}}}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){var t=this;x().then((function(e){e.data.item&&t.$nextTick((function(){var n=O()(e.data.item,["comission_rate","comission_rate2"]);t.form=Object.assign(t.form,n),t.page.fanxian.shoudan_status=1===e.data.item.shoudan_status}))}))},handleSubmit:function(t){k(Object.assign(this.form,{shoudan_status:this.page.fanxian.shoudan_status})).then((function(t){var e=t||{},n=e.info;0===(n||{}).status&&a.a.succeed("保存成功")}))}}},E=M,$=(n("886f"),n("2877")),B=Object($["a"])(E,o,r,!1,null,"8d96cf1c",null);e["default"]=B.exports},7442:function(t,e,n){},"886f":function(t,e,n){"use strict";var o=n("7442"),r=n.n(o);r.a},"9cee":function(t,e,n){var o,r,i;(function(a,c){r=[e,n("06ff")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warn=void 0;t.warn=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";!e.isProd&&console[n]("[Mand-Mobile]: "+t)}}))},a7e3:function(t,e,n){var o,r,i;(function(a,c){r=[e,n("06ff")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";function n(){}function o(t,e){var n=document,o=n.head||n.getElementsByTagName("head")[0],r=n.createElement("script"),i="onload"in r,a=function(){r=null,"function"===typeof e&&e()};i?r.onload=a:r.onreadystatechange=function(){/loaded|complete/.test(r.readyState)&&a()},r.async=!0,r.crossOrigin=!0,r.charset="utf-8",r.src=t,o.appendChild(r)}function r(){var t=function(t,e){var n=new RegExp("(^|,)"+t+"=([^,]*)(,|$)","i"),o=e.match(n);return null!=o?o[2]:null},n=e.inBrowser?document.querySelector("meta[name=viewport]"):null;if(!n)return 1;var o=n.getAttribute("content"),r=+(t("initial-scale",o)||1),i=+(t("maximum-scale",o)||1),a=+(t("minimum-scale",o)||1);return 1/Math.min(r,i,a)}function i(t){var e=new Blob(["("+t.toString()+")(null)"],{type:"application/javascript"});return URL.createObjectURL(e)}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return t+"-"+parseInt(Math.random()*Math.pow(10,e))}function c(t){var e=/-(\w)/g;return t.replace(e,(function(t,e){return e.toUpperCase()}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=null;return function(){var n=this,r=arguments;o&&clearTimeout(o),o=setTimeout((function(){t.apply(n,r)}),e)}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o=0;return function(){var n=this,r=Date.now();r-o>e&&(o=r,t.apply(n,arguments))}}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=n,t.requireRemoteScript=o,t.getDpr=r,t.functionToUrl=i,t.randomId=a,t.transformCamelCase=c,t.debounce=u,t.throttle=s}))},affe:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}t.exports=n},d8a8:function(t,e,n){var o,r,i;(function(a,c){r=[e,n("a7e3")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extend=r,t.traverse=i,t.toObject=a,t.toArray=c,t.inArray=u,t.toNumber=s,t.toString=f,t.compareObjects=d,t.isEmptyObject=l;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){for(var n in e)t[n]=e[n];return t}function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.noop;if(t){"function"===typeof n&&(r=n,n=[]);var i=0,a=[],c=function t(e){for(var c=0,u=e.length;c<u;c++){var s=Array.isArray(e[c]),f=Array.isArray(n)?n[i]:n;if(s||e[c]&&e[c][f])i++,a.push(c),t(s?e[c]:e[c][f]);else{if(!(i>=n.length))continue;var d=r(e[c],i,[].concat(o(a),[c]));if(1===d)continue;if(2===d)break}}i=0,a=[]};c(t)}}function a(t){for(var e={},n=0;n<t.length;n++)t[n]&&r(e,t[n]);return e}function c(t,e){e=e||0;var n=t.length-e,o=[];while(n--)o.unshift(t[n+e]);return o}function u(t,e){return Array.isArray(t)?!!~t.indexOf(e):e===t}function s(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t){return null==t?"":"object"===("undefined"===typeof t?"undefined":n(t))?JSON.stringify(t,null,2):String(t)}function d(t,e){var o=!0;return t&&e?("object"!==("undefined"===typeof t?"undefined":n(t))||"object"!==("undefined"===typeof e?"undefined":n(e))||JSON.stringify(t)!==JSON.stringify(e))&&(o=!1):o=!1,o}function l(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}}))},e446:function(t,e,n){var o,r,i;(function(){(function(a,c){r=[e,n("8730"),n("f1c1"),n("cdfc"),n("affe")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(e);function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.default={name:"md-action-bar",components:i({},o.default.name,o.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,n.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(t,e){e.onClick&&e.onClick(t,e),this.$emit("click",t,e)}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var a="function"===typeof t.exports?t.exports.options:t.exports;a.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-action-bar"},[n("div",{staticClass:"md-action-bar-container"},[t.hasSlots?n("div",{staticClass:"md-action-bar-text"},[t._t("default")],2):t._e(),t._v(" "),n("div",{staticClass:"md-action-bar-group"},[t._l(t.coerceActions,(function(e,o){return[n("md-button",{key:o,staticClass:"md-action-bar-button",attrs:{type:e.type||(e.disabled?"disabled":"primary"),plain:e.plain||o!==t.coerceActions.length-1,round:e.round,inactive:e.inactive,loading:e.loading,icon:e.icon,"icon-svg":e.iconSvg},on:{click:function(n){return t.$_onBtnClick(n,e)}}},[t._v("\n          "+t._s(e.text)+"\n        ")])]}))],2)])])},a.staticRenderFns=[]},f1c1:function(t,e,n){var o,r,i;(function(a,c){r=[e,n("9cee"),n("06ff"),n("d8a8"),n("a7e3"),n("677c")],o=c,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)})(0,(function(t,e,n,o,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})),Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})),Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})),Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))}))}}]);