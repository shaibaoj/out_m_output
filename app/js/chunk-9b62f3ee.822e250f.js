(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b62f3ee"],{"0087":function(e,t,i){},2273:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("cdfc"),i("4425")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{$_onChange:function(e){this.disabled||(this.$emit("input",!this.value),this.$emit("change",e))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-switch",class:[e.disabled?"disabled":"",e.value?"active":""],on:{click:function(t){return e.$_onChange(t)}}})},r.staticRenderFns=[]},"234b":function(e,t,i){},2691:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("aed6"),i("a0db"),i("cdfc"),i("9c92")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(t),a=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-radio",mixins:[a.default],components:r({},n.default.name,n.default),props:{name:{required:!0},value:{default:""},size:{type:String,default:"md"},label:{type:String,default:""},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{isChecked:function(){return this.value===this.name||this.rootGroup&&this.rootGroup.value===this.name},currentIcon:function(){return this.disabled?this.iconDisabled:this.isChecked?this.icon:this.iconInverse}},inject:{rootGroup:{default:null}},methods:{$_onClick:function(){this.disabled||(this.$emit("input",this.name),this.rootGroup&&this.rootGroup.check(this.name))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"md-radio",class:{"is-disabled":e.disabled,"is-checked":e.isChecked,"is-inline":e.inline},on:{click:e.$_onClick}},[i("div",{staticClass:"md-radio-icon"},[i("md-icon",{attrs:{name:e.currentIcon,size:e.size,svg:e.iconSvg}})],1),e._v(" "),e.$slots.default||e.label?i("div",{staticClass:"md-radio-label"},[e._t("default",[e._v(e._s(e.label))])],2):e._e()])},r.staticRenderFns=[]},"26c9":function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("556d"),i("cdfc"),i("234b")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(t);function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-tab-bar",components:a({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var e=0,t=this.items.length;e<t;e++)if(this.items[e].name===this.currentName)return e},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(e){e!==this.currentName&&(this.currentName=e)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(e){var t=e.scrollLeft;this.maskStartShown=t>0,t>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(e,t){e.disabled||(this.$emit("change",e,t,this.currentIndex),this.currentName=e.name,this.$emit("input",e.name))},$_resizeEnterBehavior:function(){var e=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){e.$emit("change",e.items[e.currentIndex],e.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var e=this;if(this.$refs.items&&0!==this.$refs.items.length){var t=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=t.width;for(var i=0,n=0,a=this.items.length;n<a;n++){var s=this.$refs.items[n].getBoundingClientRect(),r=s.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(e.$refs.items&&e.$refs.items[e.currentIndex]){var t=e.$refs.items[e.currentIndex];e.inkWidth=t.offsetWidth*e.inkLength/100,e.inkPos=t.offsetLeft+(t.offsetWidth-e.inkWidth)/2;var i=e.$refs.items[e.currentIndex-1],n=e.$refs.items[e.currentIndex+1];if(i)if(n){var a=e.$refs.wrapper.getBoundingClientRect(),s=i.getBoundingClientRect(),r=n.getBoundingClientRect();s&&s.left<a.left?e.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>a.right&&e.$refs.scroller.scrollTo(n.offsetLeft+n.offsetWidth-e.wrapperW,0,!0)}else e.$refs.scroller.scrollTo(e.contentW,0,!0);else e.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[e.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:e.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:e._e(),e._v(" "),i("md-scroll-view",{key:e.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":e.scrollable,"scrolling-y":!1},on:{scroll:e.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:e.contentW+"px"}},e._l(e.items,(function(t,n){return i("a",{key:t.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":e.currentName===t.name,"is-disabled":!!t.disabled},on:{click:function(i){return e.$_onClick(t,n)}}},[e._t("item",[e._v(e._s(t.label))],{item:t,items:e.items,index:n,currentName:e.currentName})],2)})),0),e._v(" "),e.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":e.currentTab&&e.currentTab.disabled},style:{width:e.inkWidth+"px",transform:"translateX("+e.inkPos+"px)"}}):e._e()])],2)])},r.staticRenderFns=[]},"393c":function(e,t,i){},"3b50":function(e,t,i){"use strict";i("9921")},"3c2f":function(e,t,i){"use strict";i("393c")},"3e26":function(e,t,i){},4425:function(e,t,i){},"50c1":function(e,t,i){},"57a3":function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("f1c1"),i("cdfc"),i("0087")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-tag",props:{size:{type:String,default:"large"},shape:{type:String,default:"square"},sharp:{type:String,default:""},type:{type:String,default:"ghost"},fillColor:{type:String,default:""},fontWeight:{type:String,default:"normal"},fontColor:{type:String,default:""}},data:function(){return{sizeStyle:{}}},computed:{computedClass:function(){return["default","size-"+this.size,"shape-"+this.shape,"type-"+this.type,"font-weight-"+this.fontWeight]},colorStyle:function(){var e={};return"fill"===this.type&&this.fillColor&&(e.background=this.fillColor),this.fontColor&&("ghost"===this.type&&(e.borderColor=this.fontColor),e.color=this.fontColor),e}},mounted:function(){var e=this;this.$nextTick((function(){if("circle"===e.shape){var i=e.$el.offsetHeight/2;e.$set(e.sizeStyle,"paddingLeft",i+"px"),e.$set(e.sizeStyle,"paddingRight",i+"px"),e.$set(e.sizeStyle,"borderRadius",i+"px"),e.sharp&&e.$set(e.sizeStyle,(0,t.transformCamelCase)("border-"+e.sharp+"-radius"),0)}}))}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-tag"},["quarter"===e.shape?[i("div",{class:e.computedClass},[i("div",{staticClass:"quarter-content"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"quarter-bg",style:e.colorStyle})])]:"coupon"===e.shape?[i("div",{class:e.computedClass},[i("div",{staticClass:"coupon-container",style:e.colorStyle},["coupon"===e.shape?i("div",{staticClass:"left-coupon",style:{background:e.fillColor?"radial-gradient(circle at left, transparent 33%, "+e.fillColor+" 33%)":""}}):e._e(),e._v(" "),e._t("default"),e._v(" "),"coupon"===e.shape?i("div",{staticClass:"right-coupon",style:{background:e.fillColor?"radial-gradient(circle at right, transparent 33%, "+e.fillColor+" 33%)":""}}):e._e()],2)])]:[i("div",{class:e.computedClass,style:[e.colorStyle,e.sizeStyle]},[e._t("default")],2)]],2)},r.staticRenderFns=[]},"59a6":function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("a4fb"),i("cdfc"),i("bf64")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(t);function n(e){return e&&e.__esModule?e:{default:e}}e.default=i.default}))})(),e.exports.__esModule&&(e.exports=e.exports.default);"function"===typeof e.exports?e.exports.options:e.exports},"5b5b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout"},[i("md-tab-bar",{attrs:{items:e.items},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),1===e.current?i("Items-page"):2===e.current?i("Lingqu-page"):3===e.current?i("Data-page"):e._e()],1)},a=[],s=i("26c9"),r=i.n(s),o=i("c1df"),c=i.n(o),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("md-scroll-view",{ref:"scrollView",attrs:{"scrolling-x":!1},on:{"end-reached":e.loadData}},[1==e.page.query&&0==e.page.items.length?i("div",{staticClass:"empty"},[i("md-result-page",{staticClass:"customized",attrs:{"img-url":"https://img.youdanhui.cn/cms_img/2020-07-30/5f22b757a0033.png",text:"搜索结果为空...",subtext:"要不然刷新试试？"}})],1):e._e(),e._l(e.page.items,(function(t,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-line"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"portrait",attrs:{src:t.member.img_url||"https://img.youdanhui.cn/cms_img/2019-08-28/5d663304b1244.png"}})]),i("div",{staticClass:"avatar-content"},[i("div",{staticClass:"action-box"},[t.member.nick_name&&""!=t.member.nick_name?i("span",[e._v(e._s(t.member.nick_name))]):i("span",[e._v(e._s(t.member.user_name))]),i("span",[e._v(e._s(t.created_at))])]),t.vip?i("div",{staticClass:"action-box"},[i("span",[e._v("激活时间:"+e._s(t.vip.activated_at))]),i("span")]):e._e()])]),i("div",{staticClass:"item-data"},[i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.member_data.task_credit))]),i("span",[e._v("任务信用")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.member_data.invites))]),i("span",[e._v("邀请人数")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.vip?"vip会员":"普通会员"))]),i("span",[e._v("当前等级")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(e._f("showDate")(t.created_at)))]),i("span",[e._v("注册时间")])])])])})),i("md-scroll-view-more",{attrs:{slot:"more","is-finished":e.page.isFinished},slot:"more"})],2)],1)},d=[],u=i("50de"),f=i.n(u),m=i("2d9a"),p=i.n(m),h=i("0aec"),v=i.n(h),_=i("af88"),b=i.n(_),g=i("556d"),y=i.n(g),x=i("63b6"),k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:"发布商品",width:980,visible:e.visible,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("div",{staticClass:"fields"},[i("a-alert",{attrs:{type:"error",message:"注意提示： 成交价百分比优先于佣金百分比，例：设置了成交百分比，佣金比例就无效，（固定返利金额优先级别最高）"}}),i("div",[i("md-field",{staticStyle:{display:"none"}},[i("md-input-item",{attrs:{type:"hidden"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),i("md-field",{staticStyle:{display:"none"}},[i("md-input-item",{attrs:{type:"hidden"},model:{value:e.form.inventory,callback:function(t){e.$set(e.form,"inventory",t)},expression:"form.inventory"}})],1),i("md-field",{attrs:{title:"地址"}},[i("md-input-item",{on:{change:e.changeValue},model:{value:e.form.href,callback:function(t){e.$set(e.form,"href",t)},expression:"form.href"}},[i("md-button",{attrs:{slot:"addonAfter",type:"link",icon:"search",size:"small"},on:{click:e.fetchGoodsInfo},slot:"addonAfter"},[e._v("获取")])],1)],1),i("md-field",{attrs:{title:"详情"}},[i("span",[e._v("原价:"+e._s(e.page.vip.ori_price))]),i("span",[e._v("券后价:"+e._s(e.page.vip.coupon_price))]),i("span",[e._v("购买成本价:"+e._s(e.page.vip.buy_base_price))]),e.page.vip.price>0?i("span",{staticStyle:{color:"red"}},[e._v("用户最终价格:"+e._s((e.page.vip.coupon_price-e.page.vip.price).toFixed(2)))]):e.page.vip.price_rate>0?i("span",{staticStyle:{color:"red"}},[e._v("用户最终价格:"+e._s((e.page.vip.coupon_price*(100-e.page.vip.price_rate)/100).toFixed(2)))]):e.page.vip.commission_rate>0?i("span",{staticStyle:{color:"red"}},[e._v("用户最终价格:"+e._s((e.page.vip.coupon_price-e.page.vip.commission*e.page.vip.commission_rate/100).toFixed(2)))]):e._e()]),i("md-field",{attrs:{title:"开始时间"}},[i("a-date-picker",{attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"},model:{value:e.form.start_time,callback:function(t){e.$set(e.form,"start_time",t)},expression:"form.start_time"}})],1),i("md-field",{attrs:{title:"结束时间"}},[i("a-date-picker",{attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"},model:{value:e.form.end_time,callback:function(t){e.$set(e.form,"end_time",t)},expression:"form.end_time"}})],1),i("md-field",{attrs:{title:"商品id"}},[i("md-input-item",{model:{value:e.form.num_iid,callback:function(t){e.$set(e.form,"num_iid",t)},expression:"form.num_iid"}})],1),i("md-field",{attrs:{title:"佣金百分比"}},[i("md-input-item",{on:{change:e.change},model:{value:e.form.commission_rate,callback:function(t){e.$set(e.form,"commission_rate",t)},expression:"form.commission_rate"}})],1),i("md-field",{attrs:{title:"成交价百分比"}},[i("md-input-item",{on:{change:e.change},model:{value:e.form.price_rate,callback:function(t){e.$set(e.form,"price_rate",t)},expression:"form.price_rate"}})],1),i("md-field",{attrs:{title:"返利固定金额"}},[i("md-input-item",{on:{change:e.change},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),i("md-field",{attrs:{title:"商品类型"}},[i("md-radio-group",{staticStyle:{width:"120px"},model:{value:e.form.recommend,callback:function(t){e.$set(e.form,"recommend",t)},expression:"form.recommend"}},[i("md-radio-box",{attrs:{name:0}},[e._v("默认")]),i("md-radio-box",{attrs:{name:2}},[e._v("优质商品")]),i("md-radio-box",{attrs:{name:1}},[e._v("便宜实用")]),i("md-radio-box",{attrs:{name:3}},[e._v("0元领取")]),i("md-radio-box",{attrs:{name:4}},[e._v("1元购物")])],1)],1)],1)],1)]),i("template",{slot:"footer"},[i("div",[i("md-button",{key:"forward",attrs:{loading:e.confirmLoading,type:"primary",block:""},on:{click:function(t){return e.handleSubmit(1)}}},[e._v("提交发布")])],1)])],2)},C=[],w=(i("ac6a"),i("1861")),$=i.n(w),O=i("ade3"),S=i("e446"),j=i.n(S),P=i("8730"),M=i.n(P),I=i("2273"),D=i.n(I),E=i("6d32"),F=i.n(E),L=i("59a6"),z=i.n(L),B=i("c763"),T=i.n(B),q=i("88bc"),R=i.n(q),W=i("5880");function G(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){Object(O["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N={name:"EditModal",components:{[T.a.name]:T.a,[z.a.name]:z.a,[F.a.name]:F.a,[b.a.name]:b.a,[D.a.name]:D.a,[M.a.name]:M.a,[j.a.name]:j.a,[v.a.name]:v.a},computed:Y({},Object(W["mapGetters"])(["token"])),data(){return{form:{},content:"",href:"",cats:[],wenItems:[],pList:[],previewImg:"",page:{vip:{ori_price:0,coupon_price:0,buy_base_price:0,price:0,price_rate:0,commission_rate:0,commission:0}}}},watch:{href:function(e){this.fetchGoodsInfoPreview()}},created(){this.init()},methods:{init(){},edit(e){this.visible=!0,this.$nextTick(()=>{if(e.id){const t=R()(e,["id","recommend","inventory","href","num_iid","start_time","end_time","commission_rate","price_rate","price"]);t.start_time=c()(e.start_time),t.end_time=c()(e.end_time),this.form=Object.assign(this.form,t)}else this.form.resetFields();this.fetchGoodsInfo(),this.fetchGoodsInfoPreview()})},handleSubmit(e){const t=this.form.validateFields;this.confirmLoading=!0,t((t,i)=>{t?this.confirmLoading=!1:(i.start_time&&(i.start_time=c()(i.start_time).format("YYYY-MM-DD HH:mm:ss")),i.end_time&&(i.end_time=c()(i.end_time).format("YYYY-MM-DD HH:mm:ss")),Object(x["f"])(Object.assign(this.form,{type:"vip",submitStatus:e})).then(t=>{0===t.code&&(1===e?this.$message.success("提交成功"):$.a.succeed("保存成功"),this.$emit("ok",i),this.visible=!1),this.confirmLoading=!1}))})},fetchGoodsInfo(){},fetchGoodsInfoPreview(){},handleCancel(){this.visible=!1},setContent(e){this.$nextTick(()=>{const t={comment:e.content};this.form=Object.assign(this.form,t)})},setPic(e){this.$nextTick(()=>{const t={pic_url:e};this.form=Object.assign(this.form,t)}),this.previewImg=e},changeValue(e){const t=e.target.value;this.href=t},changeImg(e){const t=e.target.value;this.previewImg=t},change(){this.page.vip.price=this.form.getFieldValue("price"),this.page.vip.price_rate=this.form.getFieldValue("price_rate"),this.page.vip.commission_rate=this.form.getFieldValue("commission_rate")}}},V=N,A=(i("ad49"),i("2877")),H=Object(A["a"])(V,k,C,!1,null,"1a4659b1",null),K=H.exports,J={name:"Brand",components:{GoodsModal:K,[y.a.name]:y.a,[b.a.name]:b.a,[v.a.name]:v.a,[p.a.name]:p.a,[f.a.name]:f.a},data(){return{page:{items:[],ipage:0,hasMore:!0,isFinished:!1,query:0}}},created(){this.loadData()},methods:{moment:c.a,loadData(){this.page.isFinished||(this.page.ipage=this.page.ipage+1,Object(x["a"])({type:"vip",ipage:this.page.ipage,maxMoney:.01,status:this.tabCurrentIndex}).then(e=>{e.data.items?this.page.items.push(...e.data.items):this.page.isFinished=!1,this.$refs.scrollView.finishLoadMore(),this.page.query=1}))},query(){this.$refs.table.refresh(!0)},onSelectChange(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}},handleUpdate(e,t){Object(x["f"])({num_iid:e.num_iid,status:t}).then(e=>{this.$refs.table.refresh(!0)})},handleEdit(e){e.num_iid&&(e.href="https://detail.tmall.com/item.htm?id="+e.num_iid),this.$refs.modal.edit(e)}}},U=J,X=(i("3c2f"),Object(A["a"])(U,l,d,!1,null,"ea9430a4",null)),Q=X.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("md-scroll-view",{ref:"scrollView",attrs:{"scrolling-x":!1},on:{"end-reached":e.loadData}},[1==e.page.query&&0==e.page.items.length?i("div",{staticClass:"empty"},[i("md-result-page",{staticClass:"customized",attrs:{"img-url":"https://img.youdanhui.cn/cms_img/2020-07-30/5f22b757a0033.png",text:"搜索结果为空...",subtext:"要不然刷新试试？"}})],1):e._e(),e._l(e.page.items,(function(t,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-line"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"portrait",attrs:{src:t.member.img_url||"https://img.youdanhui.cn/cms_img/2019-08-28/5d663304b1244.png"}})]),i("div",{staticClass:"avatar-content"},[i("div",{staticClass:"action-box"},[t.member.nick_name&&""!=t.member.nick_name?i("span",[e._v(e._s(t.member.nick_name))]):i("span",[e._v(e._s(t.member.user_name))]),i("span",[e._v(e._s(t.created_at))])]),t.vip?i("div",{staticClass:"action-box"},[i("span",[e._v("激活时间:"+e._s(t.vip.activated_at))]),i("span")]):e._e()])]),i("div",{staticClass:"item-data"},[i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.member_data.task_credit))]),i("span",[e._v("任务信用")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.member_data.invites))]),i("span",[e._v("邀请人数")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(t.vip?"vip会员":"普通会员"))]),i("span",[e._v("当前等级")])]),i("div",{staticClass:"item-data-it"},[i("span",[e._v(e._s(e._f("showDate")(t.created_at)))]),i("span",[e._v("注册时间")])])])])})),i("md-scroll-view-more",{attrs:{slot:"more","is-finished":e.page.isFinished},slot:"more"})],2)],1)},ee=[],te={name:"Brand",components:{[y.a.name]:y.a,[b.a.name]:b.a,[v.a.name]:v.a,[p.a.name]:p.a,[f.a.name]:f.a},data(){return{page:{items:[],ipage:0,hasMore:!0,isFinished:!1,query:0}}},created(){this.loadData()},methods:{moment:c.a,loadData(){this.page.isFinished||(this.page.ipage=this.page.ipage+1,Object(x["b"])({type:"vip",ipage:this.page.ipage,maxMoney:.01,status:this.tabCurrentIndex}).then(e=>{e.data.items?this.page.items.push(...e.data.items):this.page.isFinished=!1,this.$refs.scrollView.finishLoadMore(),this.page.query=1}))},query(){this.$refs.table.refresh(!0)},onSelectChange(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}}}},ie=te,ne=(i("9dd0"),Object(A["a"])(ie,Z,ee,!1,null,"1c6de422",null)),ae=ne.exports,se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("div",{staticClass:"fields"},[i("md-field",{attrs:{title:"活动范围",brief:"限定商品只有独立添加的商品才参与免单，目前支持淘宝/天猫/京东/拼多多产品"}},[i("md-field-item",{attrs:{title:"活动范围",solid:""}},[i("md-radio",{attrs:{name:"0",label:"限定商品",inline:""},model:{value:e.form.benefits,callback:function(t){e.$set(e.form,"benefits",t)},expression:"form.benefits"}}),i("md-radio",{attrs:{name:"1",label:"全场限价",inline:""},model:{value:e.form.benefits,callback:function(t){e.$set(e.form,"benefits",t)},expression:"form.benefits"}})],1)],1),i("md-field",{attrs:{title:"免单商品规则",disabled:"0"==e.form.benefits}},[i("md-input-item",{attrs:{title:"限定价格",placeholder:"输入最高商品的价格",brief:"低于这个价格商品自动参与免单"},model:{value:e.form.benefits_money,callback:function(t){e.$set(e.form,"benefits_money",t)},expression:"form.benefits_money"}}),i("md-input-item",{attrs:{title:"佣金筛选",placeholder:"输入最低佣金比例",brief:"佣金比例大于这个的才自动参与新人首单免单"},model:{value:e.form.benefits_commission,callback:function(t){e.$set(e.form,"benefits_commission",t)},expression:"form.benefits_commission"}}),e._e(),e._e(),e._e()],1),i("md-field",[i("md-button",{attrs:{type:"primary",round:""},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)])},re=[],oe=i("2691"),ce=i.n(oe),le=i("1754"),de=i.n(le);function ue(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function fe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(i),!0).forEach((function(t){Object(O["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ue(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var me={components:{[de.a.name]:de.a,[ce.a.name]:ce.a,[T.a.name]:T.a,[z.a.name]:z.a,[F.a.name]:F.a,[b.a.name]:b.a,[D.a.name]:D.a,[M.a.name]:M.a,[j.a.name]:j.a,[v.a.name]:v.a},computed:fe({},Object(W["mapGetters"])(["token"])),data(){return{form:{benefits:"0",benefits_money:0,benefits_commission:0},page:{data:{benefits_invite_buyer_rate:0}}}},created(){},mounted(){this.init()},methods:{init(){this.query()},query(){Object(x["d"])({type:"vip"}).then(e=>{e.data.item&&this.$nextTick(()=>{const t=R()(e.data.item,["benefits","benefits_money","benefits_commission","benefits_invite_price","benefits_invite_client_price","benefits_invite_buyer_rate"]);this.form=Object.assign(this.form,t),this.form.min_points=t.min_points,this.form.benefits=""+t.benefits,this.page.data.benefits_invite_buyer_rate=e.data.item.benefits_invite_buyer_rate})})},handleSubmit(e){Object(x["e"])(Object.assign(this.form,{page_view:"benefits"})).then(e=>{const t=e||{},i=t.code;0===i&&$.a.succeed("保存成功")})},changgeValue(e){const t=e.target,i=t.value,n=t.id;"benefits_invite_buyer_rate"===n&&(this.page.data.benefits_invite_buyer_rate=i)}}},pe=me,he=(i("3b50"),Object(A["a"])(pe,se,re,!1,null,"3d54fdc2",null)),ve=he.exports,_e={name:"Page",components:{ItemsPage:Q,LingquPage:ae,DataPage:ve,[r.a.name]:r.a},data(){return{current:1,items:[{name:1,label:"限定产品"},{name:2,label:"免单记录"},{name:3,label:"新人专享设置"}]}},created(){},methods:{handleTabChange(e,t){this[t]=e},query(){this.$refs.table.refresh(!0)},onSelectChange(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced(){this.advanced=!this.advanced},resetSearchForm(){this.queryParam={date:c()(new Date)}}}},be=_e,ge=Object(A["a"])(be,n,a,!1,null,null,null);t["default"]=ge.exports},"63b6":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"a",(function(){return o})),i.d(t,"e",(function(){return c})),i.d(t,"c",(function(){return l})),i.d(t,"f",(function(){return d}));var n=i("751a");const a={getList:"cms.market.market.list",getView:"cms.market.market.view",getItems:"cms.market.market.items",update:"cms.market.market.update",shares:"cms.market.market.shares",updateItem:"cms.market.market.updateItem",viewItem:"cms.market.market.viewItem"};function s(e){return n["a"].post(a.getList,e)}function r(e){return n["a"].post(a.getView,e)}function o(e){return n["a"].post(a.getItems,e)}function c(e){return n["a"].post(a.update,e)}function l(e){return n["a"].post(a.shares,e)}function d(e){return n["a"].post(a.updateItem,e)}},"6a2a":function(e,t,i){},"6d84":function(e,t,i){},9921:function(e,t,i){},"9c92":function(e,t,i){},"9dd0":function(e,t,i){"use strict";i("f526")},a0db:function(e,t,i){var n,a,s;(function(i,r){a=[t],n=r,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{icon:{type:String,default:"checked"},iconInverse:{type:String,default:"check"},iconDisabled:{type:String,default:"check-disabled"},iconSvg:{type:Boolean,default:!1},iconSize:{type:String,default:"md"},iconPosition:{type:String,default:"left"}}}}))},a4fb:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("cdfc"),i("6a2a")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-radio-group",props:{value:{default:""},max:{type:Number,default:0}},provide:function(){return{rootGroup:this}},methods:{check:function(e){this.$emit("input",e)}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-radio-group"},[e._t("default")],2)},r.staticRenderFns=[]},ad49:function(e,t,i){"use strict";i("3e26")},affe:function(e,t,i){},bdfa:function(e,t,i){},bf64:function(e,t,i){},c00d:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("c50e"),i("cdfc"),i("bdfa")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(t);function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-radio-box",components:a({},i.default.name,i.default),props:{name:{default:!0},value:{default:!1},label:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{isChecked:function(){return this.value===this.name||this.rootGroup&&this.rootGroup.value===this.name}},inject:{rootGroup:{default:null}},methods:{$_onClick:function(){this.disabled||(this.$emit("input",this.name),this.rootGroup&&this.rootGroup.check(this.name))}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("md-check-base-box",{staticClass:"md-radio-box",attrs:{label:e.label,"is-checked":e.isChecked,disabled:e.disabled},nativeOn:{click:function(t){return e.$_onClick(t)}}},[e._t("default",[e._v(e._s(e.label))])],2)},r.staticRenderFns=[]},c50e:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("57a3"),i("aed6"),i("cdfc"),i("6d84")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(t),s=r(i);function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-check-base-box",components:(n={},o(n,a.default.name,a.default),o(n,s.default.name,s.default),n),props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},isChecked:{type:Boolean,default:!1}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-check-base-box",class:{"is-disabled":e.disabled,"is-checked":e.isChecked}},[e._t("default"),e._v(" "),e.isChecked?i("md-tag",{attrs:{size:"tiny",shape:"quarter",type:"fill"}},[i("md-icon",{attrs:{name:"right"}})],1):e._e()],2)},r.staticRenderFns=[]},c763:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("c00d"),i("cdfc"),i("50c1")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(t);function n(e){return e&&e.__esModule?e:{default:e}}e.default=i.default}))})(),e.exports.__esModule&&(e.exports=e.exports.default);"function"===typeof e.exports?e.exports.options:e.exports},e446:function(e,t,i){var n,a,s;(function(){(function(r,o){a=[t,i("8730"),i("f1c1"),i("cdfc"),i("affe")],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)})(0,(function(e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(t);function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.default={name:"md-action-bar",components:s({},n.default.name,n.default),props:{actions:{type:Array,default:[]}},computed:{coerceActions:function(){return this.actions.slice(0,2)},hasSlots:function(){return!(0,i.isEmptyObject)(this.$slots)}},methods:{$_onBtnClick:function(e,t){t.onClick&&t.onClick(e,t),this.$emit("click",e,t)}}}}))})(),e.exports.__esModule&&(e.exports=e.exports.default);var r="function"===typeof e.exports?e.exports.options:e.exports;r.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-action-bar"},[i("div",{staticClass:"md-action-bar-container"},[e.hasSlots?i("div",{staticClass:"md-action-bar-text"},[e._t("default")],2):e._e(),e._v(" "),i("div",{staticClass:"md-action-bar-group"},[e._l(e.coerceActions,(function(t,n){return[i("md-button",{key:n,staticClass:"md-action-bar-button",attrs:{type:t.type||(t.disabled?"disabled":"primary"),plain:t.plain||n!==e.coerceActions.length-1,round:t.round,inactive:t.inactive,loading:t.loading,icon:t.icon,"icon-svg":t.iconSvg},on:{click:function(i){return e.$_onBtnClick(i,t)}}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}))],2)])])},r.staticRenderFns=[]},f526:function(e,t,i){}}]);