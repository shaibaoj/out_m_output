(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44b36c1b"],{"03b8":function(t,s,a){"use strict";var e=a("2666"),i=a.n(e);i.a},"1d12":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"fix"},[a("nav-bar",{staticClass:"nav",attrs:{rightShow:!1},on:{"on-click-back":t.back}},[t._v("订单找回")])],1),a("div",{staticClass:"container"},[t.result?t._e():a("div",{staticClass:"order_search_group"},[a("div",{staticClass:"search_group"},[t._m(0),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderNo,expression:"orderNo"}],staticClass:"search-input",attrs:{name:"search",type:"text",placeholder:"请输入淘宝订单编号"},domProps:{value:t.orderNo},on:{input:function(s){s.target.composing||(t.orderNo=s.target.value)}}}),a("i",{staticClass:"iconfont icon-closecircle search_close",attrs:{id:"search_close"}}),a("span",{staticClass:"btn",on:{click:t.search}},[t._v("查询")])])]),t._m(1),t._m(2)]),t.result?a("div",{staticClass:"order_search_result"},[a("div",{staticClass:"order_null"},[t._m(3),a("div",{staticClass:"msg"},[t._v("未查到该订单")]),t._m(4),a("button",{staticClass:"btn order_search_btn goback_search",on:{click:t.reQuery}},[t._v("重新查询")])]),a("div",{staticClass:"order_lists"})]):t._e()])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-search2"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order_num"},[a("div",{staticClass:"title"},[t._v("如何获取订单编号？")]),a("p",{staticClass:"step"},[a("span",[t._v("1. ")]),t._v("打开手机“淘宝”")]),a("p",[t._v("淘宝APP-我的淘宝-查看全部订单")]),a("div",{staticClass:"rule_img"},[a("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2020-07-18/5f131132ee7f5.png",alt:""}})]),a("span",{staticClass:"step"},[a("span",[t._v("2. ")]),t._v("找到需要查询的订单，进入详情页复制订单编号"),a("br"),t._v("订单详情页内找到订单信息，点击【复制】订单编号")]),a("div",{staticClass:"rule_img"},[a("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2020-07-18/5f131161dd7ed.png",alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"rule_msg"},[a("p",{staticClass:"title"},[t._v("查询规则说明：")]),a("p",{staticClass:"msg"},[t._v(" 1. 购买人没同步的订单可通过订单查询找回"),a("br"),t._v("\n\t\t\t\t\t2. 当有多个用户同时查询同一订单编号时，以第一个输入人为准"),a("br"),t._v("\n\t\t\t\t\t3. 已归属的订单不支持查询。如查询，则会反馈查找不到该订单的提示"),a("br"),t._v("\n\t\t\t\t\t4. 奖励积分会按查找人的当前用户关系进行归属。建议购买人自查，不帮别人查询，避免误操作\n\t\t\t\t")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2020-07-18/5f13110fcb0f4.png"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("span",{staticClass:"title"},[t._v("未查询到订单的可能原因：")]),a("span",{staticClass:"step"},[t._v("\n\t\t\t\t\t\t1. 订单有延迟，建议下单后15分钟再查询"),a("br"),t._v("\n\t\t\t\t\t\t2. 非您购买的订单"),a("br"),t._v("\n\t\t\t\t\t\t3. 不是通过大淘券下的订单"),a("br"),t._v("\n\t\t\t\t\t\t4. 创建订单超过40分钟付费，次日才能同步"),a("br"),t._v("\n\t\t\t\t\t\t5. 超出7天的订单无法找回\n\t\t\t\t\t")])])}],r=a("1861"),n=a.n(r),c=a("aa6b"),o={components:{navBar:c["a"]},data(){return{orderNo:"",result:!1}},mounted(){},methods:{back(){this.$router.go(-1)},reQuery(){this.result=!1},search(){this.$http.post("/cms.member.order.input",{order_no:this.orderNo}).then(t=>{t.info.status,n()({content:t.info.status_err,duration:1500})})}}},l=o,u=(a("03b8"),a("2877")),v=Object(u["a"])(l,e,i,!1,null,"479297ae",null);s["default"]=v.exports},2666:function(t,s,a){},"5f9f":function(t,s,a){"use strict";var e=a("7095"),i=a.n(e);i.a},7095:function(t,s,a){},aa6b:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-bar"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[a("div",{staticClass:"back",on:{click:function(s){return t.$emit("on-click-back")}}},[t._t("back-icon",[a("i",{staticClass:"back-icon"})])],2),t._t("left")],2),a("div",{staticClass:"nav-center"},[a("h3",{staticClass:"nav-title",on:{click:function(s){return t.$emit("on-click-title")}}},[t._t("default",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),a("div",{staticClass:"more",on:{click:function(s){return t.$emit("on-click-more")}}},[t._t("more-icon",[a("i",{staticClass:"more-icon"})])],2)],2)])},i=[],r={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},n=r,c=(a("5f9f"),a("2877")),o=Object(c["a"])(n,e,i,!1,null,"96b87444",null);s["a"]=o.exports}}]);