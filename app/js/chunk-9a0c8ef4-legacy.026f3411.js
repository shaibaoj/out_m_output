(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a0c8ef4"],{"0ad9":function(e,t,n){},"40bf":function(e,t,n){var a,i,s;(function(){(function(r,o){i=[t,n("0f33"),n("551d")],a=o,s="function"===typeof a?a.apply(t,i):a,void 0===s||(e.exports=s)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(e){this.disabled||(this.$emit("input",!this.value),this.$emit("change",e))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.disabled?"disabled":"",e.value?"active":""],on:{click:function(t){return e.$_onChange(t)}}})},r.staticRenderFns=[]},"448a":function(e,t,n){var a,i,s;(function(){(function(r,o){i=[t,n("e063"),n("aa31"),n("0f33"),n("7330")],a=o,s="function"===typeof a?a.apply(t,i):a,void 0===s||(e.exports=s)})(0,(function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(t);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.default={name:"md-action-bar",components:s({},a.default.name,a.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,n.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(e,t){t.onClick&&t.onClick(e,t),this.$emit("click",e,t)}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-action-bar"},[n("div",{staticClass:"md-action-bar-container"},[e.hasSlots?n("div",{staticClass:"md-action-bar-text"},[e._t("default")],2):e._e(),e._v(" "),n("div",{staticClass:"md-action-bar-group"},[e._l(e.coerceActions,(function(t,a){return[n("md-button",{key:a,staticClass:"md-action-bar-button",attrs:{type:t.type||(t.disabled?"disabled":"primary"),plain:t.plain||a!==e.coerceActions.length-1,round:t.round,inactive:t.inactive,loading:t.loading,icon:t.icon,"icon-svg":t.iconSvg},on:{click:function(n){return e.$_onBtnClick(n,t)}}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}))],2)])])},r.staticRenderFns=[]},"4f61":function(e,t,n){"use strict";var a=n("fcc7"),i=n.n(a);i.a},"551d":function(e,t,n){},"726a":function(e,t,n){"use strict";var a=n("0ad9"),i=n.n(a);i.a},7330:function(e,t,n){},"9edc":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("md-tab-bar",{attrs:{items:e.items},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),1===e.current?n("Items-page"):2===e.current?n("Data-page"):e._e()],1)},s=[],r=n("73d1"),o=(n("cc57"),n("f2cf")),c=n.n(o),l=n("35f4"),u=n.n(l),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("md-scroll-view",{ref:"scrollView",attrs:{"scrolling-x":!1},on:{"end-reached":e.loadData}},[1==e.page.query&&0==e.page.items.length?n("div",{staticClass:"empty"},[n("md-result-page",{staticClass:"customized",attrs:{"img-url":"https://img.youdanhui.cn/cms_img/2020-07-30/5f22b757a0033.png",text:"搜索结果为空...",subtext:"要不然刷新试试？"}})],1):e._e(),e._l(e.page.items,(function(t,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"action-box "},[n("span",[e._v(e._s(t.url))]),n("span")]),n("div",{staticClass:"action-box "},[n("span",[e._v("平台:"+e._s(t.platform))]),n("span")]),n("div",{staticClass:"action-box "},[t.member.nick_name&&""!=t.member.nick_name?n("span",[e._v("分享者："+e._s(t.member.nick_name))]):n("span",[e._v("分享者："+e._s(t.member.user_name))]),n("span",[e._v(e._s(t.create_date))])])])})),n("md-scroll-view-more",{attrs:{slot:"more","is-finished":e.page.isFinished},slot:"more"})],2)],1)},d=[],m=n("1e49"),p=n("1b88"),h=n.n(p),v=n("1857"),g=n.n(v),b=n("ec20"),w=n.n(b),_=n("026f"),y=n.n(_),x=n("2f41"),$=n.n(x),k=n("751a"),O={getItems:"cms.market.guang.list",getView:"cms.market.guang.view",updateItem:"cms.market.guang.update"};function C(e){return k["a"].post(O.getItems,e)}function j(e){return k["a"].post(O.getView,e)}function S(e){return k["a"].post(O.updateItem,e)}var I,P={name:"Brand",components:(a={},Object(r["a"])(a,$.a.name,$.a),Object(r["a"])(a,y.a.name,y.a),Object(r["a"])(a,w.a.name,w.a),Object(r["a"])(a,g.a.name,g.a),Object(r["a"])(a,h.a.name,h.a),a),data:function(){return{page:{items:[],ipage:0,hasMore:!0,isFinished:!1,query:0}}},created:function(){this.loadData()},methods:{moment:u.a,loadData:function(){var e=this;this.page.isFinished||(this.page.ipage=this.page.ipage+1,C({ipage:this.page.ipage,maxMoney:.01,status:this.tabCurrentIndex}).then((function(t){var n;t.data.items?(n=e.page.items).push.apply(n,Object(m["a"])(t.data.items)):e.page.isFinished=!1;e.$refs.scrollView.finishLoadMore(),e.page.query=1})))},query:function(){this.$refs.table.refresh(!0)},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:u()(new Date)}}}},B=P,E=(n("4f61"),n("9ca4")),W=Object(E["a"])(B,f,d,!1,null,"492ea53c",null),T=W.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"fields"},[n("md-field",{attrs:{title:"逛积分",brief:"查看商品获取积分"}},[n("md-cell-item",{attrs:{title:"状态",brief:""}},[n("md-switch",{attrs:{slot:"right"},slot:"right",model:{value:e.page.guang.status,callback:function(t){e.$set(e.page.guang,"status",t)},expression:"page.guang.status"}})],1)],1),n("md-field",{attrs:{title:"奖励",brief:"获取的积分奖励",disabled:!e.page.guang.status}},[n("md-input-item",{attrs:{title:"奖励积分",placeholder:"输入每次获取积分",brief:"每天获取的奖励积分数,10000积分=1元"},model:{value:e.form.points,callback:function(t){e.$set(e.form,"points",t)},expression:"form.points"}}),n("md-input-item",{attrs:{title:"每日次数",placeholder:"每天最大奖励次数",brief:"每天最大奖励次数，超过后当天不再奖励"},model:{value:e.form.day_times,callback:function(t){e.$set(e.form,"day_times",t)},expression:"form.day_times"}}),n("md-input-item",{attrs:{title:"中奖几率",placeholder:"输入用户点击多少个产品后，中奖一次",brief:"每次浏览（"+e.form.views+"个产品，获取一次中奖机会，0代表无法中奖）"},model:{value:e.form.views,callback:function(t){e.$set(e.form,"views",t)},expression:"form.views"}})],1),n("md-field",[n("md-button",{attrs:{type:"primary",round:""},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)])},N=[],L=(n("5ab2"),n("6d57"),n("e10e"),n("21a1")),M=n.n(L),R=n("448a"),z=n.n(R),F=n("e063"),q=n.n(F),A=n("40bf"),K=n.n(A),V=n("b1ef"),J=n.n(V),G=n("85ee"),U=n.n(G),X=n("5880");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={components:(I={},Object(r["a"])(I,J.a.name,J.a),Object(r["a"])(I,y.a.name,y.a),Object(r["a"])(I,K.a.name,K.a),Object(r["a"])(I,q.a.name,q.a),Object(r["a"])(I,z.a.name,z.a),Object(r["a"])(I,w.a.name,w.a),I),computed:Q({},Object(X["mapGetters"])(["token"])),data:function(){return{form:{points:0,views:0,day_times:0},page:{guang:{status:!1,views:0}}}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){var e=this;j().then((function(t){t.data.item&&e.$nextTick((function(){var n=U()(t.data.item,["points","views","day_times"]);e.form.points=n.points,e.form.views=n.views,e.form.day_times=n.day_times,e.page.guang.status=1===t.data.item.status,e.page.guang.views=t.data.item.views}))}))},handleSubmit:function(e){S(Object.assign(this.form,{status:this.page.guang.status})).then((function(e){var t=e||{},n=t.info;0===(n||{}).status&&M.a.succeed("保存成功")}))},beforeUpload:function(e){var t="image/jpg"===e.type||"image/jpeg"===e.type||"image/png"===e.type||"image/gif"===e.type;t||this.$message.error("上传图片只能是jpg/png/gif格式!");var n=e.size/1024/1024<2;return n||this.$message.error("文件大小不能超过 2MB!"),t&&n},changgeValue:function(e){var t=e.target,n=t.value,a=t.id;"views"===a&&(this.page.guang.views=n)}}},Z=Y,ee=(n("726a"),Object(E["a"])(Z,D,N,!1,null,"69d30f06",null)),te=ee.exports,ne={name:"Page",components:Object(r["a"])({ItemsPage:T,DataPage:te},c.a.name,c.a),data:function(){return{current:1,items:[{name:1,label:"逛记录"},{name:2,label:"设置"}]}},created:function(){},methods:{handleTabChange:function(e,t){this[t]=e},query:function(){this.$refs.table.refresh(!0)},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:u()(new Date)}}}},ae=ne,ie=Object(E["a"])(ae,i,s,!1,null,null,null);t["default"]=ie.exports},b956:function(e,t,n){},f2cf:function(e,t,n){var a,i,s;(function(){(function(r,o){i=[t,n("2f41"),n("0f33"),n("b956")],a=o,s="function"===typeof a?a.apply(t,i):a,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(t);function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.default={name:"md-tab-bar",components:i({},n.default.name,n.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var e=0,t=this.items.length;e<t;e++)if(this.items[e].name===this.currentName)return e},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(e){e!==this.currentName&&(this.currentName=e)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(e){var t=e.scrollLeft;this.maskStartShown=t>0,t>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(e,t){e.disabled||(this.$emit("change",e,t,this.currentIndex),this.currentName=e.name,this.$emit("input",e.name))},$_resizeEnterBehavior:function(){var e=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){e.$emit("change",e.items[e.currentIndex],e.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var e=this;if(this.$refs.items&&0!==this.$refs.items.length){var t=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=t.width;for(var n=0,a=0,i=this.items.length;a<i;a++){var s=this.$refs.items[a].getBoundingClientRect(),r=s.width;n+=r}this.contentW=n,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(e.$refs.items&&e.$refs.items[e.currentIndex]){var t=e.$refs.items[e.currentIndex];e.inkWidth=t.offsetWidth*e.inkLength/100,e.inkPos=t.offsetLeft+(t.offsetWidth-e.inkWidth)/2;var n=e.$refs.items[e.currentIndex-1],a=e.$refs.items[e.currentIndex+1];if(n)if(a){var i=e.$refs.wrapper.getBoundingClientRect(),s=n.getBoundingClientRect(),r=a.getBoundingClientRect();s&&s.left<i.left?e.$refs.scroller.scrollTo(n.offsetLeft,0,!0):r&&r.right>i.right&&e.$refs.scroller.scrollTo(a.offsetLeft+a.offsetWidth-e.wrapperW,0,!0)}else e.$refs.scroller.scrollTo(e.contentW,0,!0);else e.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"md-tab-bar"},[n("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[e.scrollable?[n("div",{directives:[{name:"show",rawName:"v-show",value:e.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:e._e(),e._v(" "),n("md-scroll-view",{key:e.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":e.scrollable,"scrolling-y":!1},on:{scroll:e.$_onScroll}},[n("div",{staticClass:"md-tab-bar-list",style:{width:e.contentW+"px"}},e._l(e.items,(function(t,a){return n("a",{key:t.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":e.currentName===t.name,"is-disabled":!!t.disabled},on:{click:function(n){return e.$_onClick(t,a)}}},[e._t("item",[e._v(e._s(t.label))],{item:t,items:e.items,index:a,currentName:e.currentName})],2)})),0),e._v(" "),e.hasInk?n("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":e.currentTab&&e.currentTab.disabled},style:{width:e.inkWidth+"px",transform:"translateX("+e.inkPos+"px)"}}):e._e()])],2)])},r.staticRenderFns=[]},fcc7:function(e,t,n){}}]);