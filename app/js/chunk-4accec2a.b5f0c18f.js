(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4accec2a"],{1634:function(t,e,n){"use strict";var a=n("c101"),i=n.n(a);i.a},1813:function(t,e,n){},1857:function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("a62b"),n("0f33"),n("8bbe")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(e);function a(t){return t&&t.__esModule?t:{default:t}}t.default=n.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"1b88":function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("e063"),n("0f33"),n("ae6a")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(e);function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.default={name:"md-result-page",components:i({},n.default.name,n.default),props:{type:{type:String,default:"empty"},imgUrl:{type:String,default:""},text:{type:String,default:""},subtext:{type:String,default:""},buttons:{type:Array,default:function(){return[]}}},computed:{actualImgUrl:function(){var t="//manhattan.didistatic.com/static/manhattan/mand-mobile/result-page/2.1/";return this.imgUrl||""+t+this.type+".png"},actualText:function(){return this.text||{network:"网络连接异常",empty:"暂无信息"}[this.type]||""},actualSubText:function(){return this.subtext||{lost:"您要访问的页面已丢失"}[this.type]||""}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-result"},[n("div",{staticClass:"md-result-image"},[n("img",{class:!t.imgUrl&&t.type,attrs:{src:t.actualImgUrl}})]),t._v(" "),t.actualText?n("div",{staticClass:"md-result-text"},[t._v(t._s(t.actualText))]):t._e(),t._v(" "),t.actualSubText?n("div",{staticClass:"md-result-subtext"},[t._v(t._s(t.actualSubText))]):t._e(),t._v(" "),t.buttons.length?n("div",{staticClass:"md-result-buttons"},t._l(t.buttons,(function(e,a){return n("md-button",{key:a,attrs:{type:e.type,plain:void 0===e.plain||e.plain,round:e.round,inactive:e.inactive,loading:e.loading,icon:e.icon,"icon-svg":e.iconSvg,size:"small",inline:""},on:{click:e.handler}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),1):t._e()])},r.staticRenderFns=[]},"216e":function(t,e,n){"use strict";var a=n("1813"),i=n.n(a);i.a},"36c2":function(t,e,n){},"40bf":function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("0f33"),n("551d")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(t){this.disabled||(this.$emit("input",!this.value),this.$emit("change",t))}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-switch",class:[t.disabled?"disabled":"",t.value?"active":""],on:{click:function(e){return t.$_onChange(e)}}})},r.staticRenderFns=[]},"448a":function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("e063"),n("aa31"),n("0f33"),n("7330")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(e);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.default={name:"md-action-bar",components:s({},a.default.name,a.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,n.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(t,e){e.onClick&&e.onClick(t,e),this.$emit("click",t,e)}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-action-bar"},[n("div",{staticClass:"md-action-bar-container"},[t.hasSlots?n("div",{staticClass:"md-action-bar-text"},[t._t("default")],2):t._e(),t._v(" "),n("div",{staticClass:"md-action-bar-group"},[t._l(t.coerceActions,(function(e,a){return[n("md-button",{key:a,staticClass:"md-action-bar-button",attrs:{type:e.type||(e.disabled?"disabled":"primary"),plain:e.plain||a!==t.coerceActions.length-1,round:e.round,inactive:e.inactive,loading:e.loading,icon:e.icon,"icon-svg":e.iconSvg},on:{click:function(n){return t.$_onBtnClick(n,e)}}},[t._v("\n          "+t._s(e.text)+"\n        ")])]}))],2)])])},r.staticRenderFns=[]},"50f4":function(t,e,n){},"551d":function(t,e,n){},"5f21":function(t,e,n){"use strict";var a=n("36c2"),i=n.n(a);i.a},7330:function(t,e,n){},"85ee":function(t,e,n){(function(e){var n=1/0,a=9007199254740991,i="[object Arguments]",s="[object Function]",r="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function m(t,e){var n=-1,a=t?t.length:0,i=Array(a);while(++n<a)i[n]=e(t[n],n,t);return i}function f(t,e){var n=-1,a=e.length,i=t.length;while(++n<a)t[i+n]=e[n];return t}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,b=u.Symbol,g=p.propertyIsEnumerable,_=b?b.isConcatSpreadable:void 0,y=Math.max;function x(t,e,n,a,i){var s=-1,r=t.length;n||(n=$),i||(i=[]);while(++s<r){var o=t[s];e>0&&n(o)?e>1?x(o,e-1,n,a,i):f(i,o):a||(i[i.length]=o)}return i}function w(t,e){return t=Object(t),C(t,e,(function(e,n){return n in t}))}function C(t,e,n){var a=-1,i=e.length,s={};while(++a<i){var r=e[a],o=t[r];n(o,r)&&(s[r]=o)}return s}function k(t,e){return e=y(void 0===e?t.length-1:e,0),function(){var n=arguments,a=-1,i=y(n.length-e,0),s=Array(i);while(++a<i)s[a]=n[e+a];a=-1;var r=Array(e+1);while(++a<e)r[a]=n[a];return r[e]=s,d(t,this,r)}}function $(t){return O(t)||S(t)||!!(_&&t&&t[_])}function j(t){if("string"==typeof t||F(t))return t;var e=t+"";return"0"==e&&1/t==-n?"-0":e}function S(t){return T(t)&&h.call(t,"callee")&&(!g.call(t,"callee")||v.call(t)==i)}var O=Array.isArray;function P(t){return null!=t&&M(t.length)&&!I(t)}function T(t){return D(t)&&P(t)}function I(t){var e=E(t)?v.call(t):"";return e==s||e==r}function M(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function E(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function D(t){return!!t&&"object"==typeof t}function F(t){return"symbol"==typeof t||D(t)&&v.call(t)==o}var B=k((function(t,e){return null==t?{}:w(t,m(x(e,1),j))}));t.exports=B}).call(this,n("532c"))},"8bbe":function(t,e,n){},a62b:function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("0f33"),n("50f4")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:"更多加载中..."},finishedText:{type:String,default:"全部已加载"},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},r.staticRenderFns=[]},ac1b:function(t,e,n){},ae6a:function(t,e,n){},b492:function(t,e,n){"use strict";var a=n("ac1b"),i=n.n(a);i.a},b956:function(t,e,n){},c101:function(t,e,n){},c620:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("md-tab-bar",{attrs:{items:t.items},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),1===t.current?n("Miandan-page"):2===t.current?n("Data-page"):3===t.current?n("Duihuan-page"):t._e()],1)},i=[],s=n("f2cf"),r=n.n(s),o=n("35f4"),c=n.n(o),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("md-scroll-view",{ref:"scrollView",attrs:{"scrolling-x":!1},on:{"end-reached":t.loadData}},[1==t.page.query&&0==t.page.items.length?n("div",{staticClass:"empty"},[n("md-result-page",{staticClass:"customized",attrs:{"img-url":"https://img.youdanhui.cn/cms_img/2020-07-30/5f22b757a0033.png",text:"搜索结果为空...",subtext:"要不然刷新试试？"}})],1):t._e(),t._l(t.page.items,(function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"item-line"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"portrait",attrs:{src:e.pic_url||"https://img.youdanhui.cn/cms_img/2019-08-28/5d663304b1244.png"}})]),n("div",{staticClass:"avatar-content"},[n("div",{staticClass:"action-box"},[n("span",[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.create_date))])]),e.vip?n("div",{staticClass:"action-box"},[n("span",[t._v("激活时间:"+t._s(e.vip.activated_at))]),n("span")]):t._e()])]),n("div",{staticClass:"item-data"},[n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.volume))]),n("span",[t._v("销量")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.commission))]),n("span",[t._v("佣金")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.commission_rate))]),n("span",[t._v("佣金比例")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.price-e.commission))]),n("span",[t._v("预估成本")])])])])})),n("md-scroll-view-more",{attrs:{slot:"more","is-finished":t.page.isFinished},slot:"more"})],2)],1)},u=[],d=n("1b88"),m=n.n(d),f=n("1857"),p=n.n(f),h=n("ec20"),v=n.n(h),b=n("026f"),g=n.n(b),_=n("2f41"),y=n.n(_),x=n("751a");const w={getItems:"cms.market.miandan.list",getItemsSale:"cms.market.miandan.list_sale",getItemsCode:"cms.market.miandan.list_code",getView:"cms.market.miandan.view",deleteGoods:"cms.market.miandan.deleteGoods",updateGoods:"cms.market.miandan.updateGoods",getViewTuijian:"cms.market.miandan.tuijianGoods",updateItem:"cms.market.miandan.update"};function C(t){return x["a"].post(w.updateGoods,t)}function k(t){return x["a"].post(w.deleteGoods,t)}function $(t){return x["a"].post(w.getItemsCode,t)}function j(t){return x["a"].post(w.getItems,t)}function S(t){return x["a"].post(w.getView,t)}function O(t){return x["a"].post(w.updateItem,t)}var P={name:"Brand",components:{[y.a.name]:y.a,[g.a.name]:g.a,[v.a.name]:v.a,[p.a.name]:p.a,[m.a.name]:m.a},data(){return{page:{items:[],ipage:0,hasMore:!0,isFinished:!1,query:0}}},created(){this.loadData()},methods:{moment:c.a,loadData(){this.page.isFinished||(this.page.ipage=this.page.ipage+1,j({ipage:this.page.ipage,maxMoney:.01,status:this.tabCurrentIndex}).then(t=>{t.data.items&&t.data.items?this.page.items.push(...t.data.items):this.page.isFinished=!1,this.$refs.scrollView.finishLoadMore(),this.page.query=1}))},query(){this.$refs.table.refresh(!0)},onSelectChange(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}},handleUpdate(t,e){C({num_iid:t.num_iid,status:e}).then(t=>{this.$refs.table.refresh(!0)})},handleDelete(t){this.$confirm({title:"提示",content:"真的要删除么 ?",onOk:()=>{k({num_iid:t.num_iid}).then(t=>{this.$refs.table.refresh(!0)})},onCancel(){}})}}},T=P,I=(n("216e"),n("9ca4")),M=Object(I["a"])(T,l,u,!1,null,"26870f1e",null),E=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("md-scroll-view",{ref:"scrollView",attrs:{"scrolling-x":!1},on:{"end-reached":t.loadData}},[1==t.page.query&&0==t.page.items.length?n("div",{staticClass:"empty"},[n("md-result-page",{staticClass:"customized",attrs:{"img-url":"https://img.youdanhui.cn/cms_img/2020-07-30/5f22b757a0033.png",text:"搜索结果为空...",subtext:"要不然刷新试试？"}})],1):t._e(),t._l(t.page.items,(function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"item-line"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"portrait",attrs:{src:e.member.img_url||"https://img.youdanhui.cn/cms_img/2019-08-28/5d663304b1244.png"}})]),n("div",{staticClass:"avatar-content"},[n("div",{staticClass:"action-box"},[e.member.nick_name&&""!=e.member.nick_name?n("span",[t._v(t._s(e.member.nick_name))]):n("span",[t._v(t._s(e.member.user_name))]),n("span",[t._v(t._s(e.create_date))])]),e.vip?n("div",{staticClass:"action-box"},[n("span",[t._v("激活时间:"+t._s(e.vip.activated_at))]),n("span")]):t._e()])]),n("div",{staticClass:"item-data"},[n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.member_data.task_credit))]),n("span",[t._v("任务信用")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.member_data.invites))]),n("span",[t._v("邀请人数")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(e.vip?"vip会员":"普通会员"))]),n("span",[t._v("当前等级")])]),n("div",{staticClass:"item-data-it"},[n("span",[t._v(t._s(t._f("showDate")(e.create_date)))]),n("span",[t._v("注册时间")])])])])})),n("md-scroll-view-more",{attrs:{slot:"more","is-finished":t.page.isFinished},slot:"more"})],2)],1)},F=[],B={name:"Brand",components:{[y.a.name]:y.a,[g.a.name]:g.a,[v.a.name]:v.a,[p.a.name]:p.a,[m.a.name]:m.a},data(){return{page:{items:[],ipage:0,hasMore:!0,isFinished:!1,query:0}}},created(){this.loadData()},methods:{moment:c.a,loadData(){this.page.isFinished||(this.page.ipage=this.page.ipage+1,$({ipage:this.page.ipage,maxMoney:.01,status:this.tabCurrentIndex}).then(t=>{t.data.items&&t.data.items?this.page.items.push(...t.data.items):this.page.isFinished=!1,this.$refs.scrollView.finishLoadMore(),this.page.query=1}))},query(){this.$refs.table.refresh(!0)},onSelectChange(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}}}},W=B,R=(n("5f21"),Object(I["a"])(W,D,F,!1,null,"fe029db2",null)),A=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"fields"},[n("md-field",{attrs:{title:"免单活动",brief:"用户分享的奖励机制"}},[n("md-cell-item",{attrs:{title:"是否开通",brief:""}},[n("md-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.page.miandan.status,callback:function(e){t.$set(t.page.miandan,"status",e)},expression:"page.miandan.status"}})],1)],1),n("md-field",{attrs:{title:"客服微信",disabled:!t.page.miandan.status}},[n("md-input-item",{attrs:{title:"微信号:",placeholder:"用于免单联系的微信客服帐号"},model:{value:t.form.weixin,callback:function(e){t.$set(t.form,"weixin",e)},expression:"form.weixin"}})],1),n("md-field",{attrs:{title:"奖励规则",disabled:!t.page.miandan.status}},[n("md-input-item",{attrs:{title:"新用户:",brief:"新注册的用户赠送的免单活动次数（"+t.form.member_times+"次）"},model:{value:t.form.member_times,callback:function(e){t.$set(t.form,"member_times",e)},expression:"form.member_times"}}),n("md-input-item",{attrs:{title:"积分兑换",brief:"积分换免单（"+t.form.points+"个积分兑换一次免单机会，0代表不开启兑换奖励）"},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})],1),n("md-field",[n("md-button",{attrs:{type:"primary",round:""},on:{click:t.handleSubmit}},[t._v("保存")])],1)],1)])},N=[],L=(n("6d57"),n("21a1")),z=n.n(L),G=n("73d1"),V=n("448a"),K=n.n(V),U=n("e063"),J=n.n(U),X=n("40bf"),H=n.n(X),Q=n("b1ef"),Y=n.n(Q),Z=n("85ee"),tt=n.n(Z),et=n("5880");function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){Object(G["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var it={components:{[Y.a.name]:Y.a,[g.a.name]:g.a,[H.a.name]:H.a,[J.a.name]:J.a,[K.a.name]:K.a,[v.a.name]:v.a},computed:at({},Object(et["mapGetters"])(["token"])),data(){return{form:{weixin:"",member_times:0,points:0},page:{miandan:{status:!0,points:0}}}},created(){},mounted(){this.init()},methods:{init(){this.query()},query(){S().then(t=>{t.data.item&&this.$nextTick(()=>{const e=tt()(t.data.item,["weixin","member_times","points","pid","visits"]);e.share_range=""+e.share_range,this.form=Object.assign(this.form,e),this.page.miandan.points=t.data.item.points,this.page.miandan.status=1===t.data.item.status})})},handleSubmit(t){O(Object.assign(this.form,{status:this.page.miandan.status})).then(t=>{const e=t||{},n=e.info;0===(n||{}).status&&z.a.succeed("保存成功")})},changgeValue(t){const e=t.target,n=e.value,a=e.id;"points"===a&&(this.page.miandan.points=n)}}},st=it,rt=(n("b492"),n("1634"),Object(I["a"])(st,q,N,!1,null,"4408ecf6",null)),ot=rt.exports,ct={name:"Page",components:{MiandanPage:E,DuihuanPage:A,DataPage:ot,[r.a.name]:r.a},data(){return{current:1,items:[{name:1,label:"免单商品"},{name:2,label:"免单设置"},{name:3,label:"免单兑换"}]}},created(){},methods:{handleTabChange(t,e){this[e]=t},query(){this.$refs.table.refresh(!0)},onSelectChange(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}}}},lt=ct,ut=Object(I["a"])(lt,a,i,!1,null,null,null);e["default"]=ut.exports},f2cf:function(t,e,n){var a,i,s;(function(){(function(r,o){i=[e,n("2f41"),n("0f33"),n("b956")],a=o,s="function"===typeof a?a.apply(e,i):a,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(e);function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.default={name:"md-tab-bar",components:i({},n.default.name,n.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var n=0,a=0,i=this.items.length;a<i;a++){var s=this.$refs.items[a].getBoundingClientRect(),r=s.width;n+=r}this.contentW=n,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var n=t.$refs.items[t.currentIndex-1],a=t.$refs.items[t.currentIndex+1];if(n)if(a){var i=t.$refs.wrapper.getBoundingClientRect(),s=n.getBoundingClientRect(),r=a.getBoundingClientRect();s&&s.left<i.left?t.$refs.scroller.scrollTo(n.offsetLeft,0,!0):r&&r.right>i.right&&t.$refs.scroller.scrollTo(a.offsetLeft+a.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"md-tab-bar"},[n("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[n("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),n("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[n("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,a){return n("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(n){return t.$_onClick(e,a)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:a,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?n("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]}}]);