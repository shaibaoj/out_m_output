(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c122d2f0"],{6148:function(t,e,s){"use strict";var i=s("ffe5"),a=s.n(i);a.a},de5f:function(t,e,s){"use strict";s.r(e);var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"searchbox"},[s("div",{staticClass:"go-home",on:{click:t.goHome}},[s("md-icon",{attrs:{name:"arrow-left",color:"#333",size:"lg"}})],1),s("div",{staticClass:"search-input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.key,expression:"key",modifiers:{trim:!0}}],staticClass:"input",attrs:{"confirm-type":"search",placeholder:"",focus:!0,"auto-focus":"","placeholder-class":"input-plholder"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.key,expression:"key"}],on:{click:t.cleanKey}},[s("md-icon",{attrs:{name:"close-fill",color:"#bcbcbc"}})],1)]),s("div",{staticClass:"query",on:{click:t.query}},[t._v("搜索")])]),t.history.length>0?s("div",{staticClass:"search-hot"},[s("div",{staticClass:"hot-header"},[s("div",{staticClass:"search-title"},[t._v("搜索历史")]),s("md-icon",{attrs:{size:"lg",name:"delete",color:"#333"},on:{click:t.openActionSheet}})],1),s("div",{staticClass:"hot-content"},t._l(t.history,(function(e,i){return s("a",{key:i,staticClass:"tag",on:{click:function(s){return t.navAction(e)}}},[s("span",[t._v(t._s(e))])])})),0)]):t._e(),s("div",{staticClass:"search-hot"},[t._m(0),s("div",{staticClass:"hot-content"},t._l(t.hot,(function(e,i){return s("a",{key:i,staticClass:"tag",on:{click:function(s){return t.navAction(e)}}},[s("span",[t._v(t._s(e))])])})),0)]),t._m(1),s("md-action-sheet",{attrs:{title:t.tips,"cancel-text":"取消",options:t.options},on:{selected:t.itemClick,cancel:t.closeActionSheet},model:{value:t.showActionSheet,callback:function(e){t.showActionSheet=e},expression:"showActionSheet"}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-header"},[s("div",{staticClass:"search-title"},[t._v("大家正在搜")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-hot"},[s("div",{staticClass:"hot-header"},[s("div",{staticClass:"search-title"},[t._v("搜索小技巧")])]),s("div",{staticClass:"hot-info"},[s("img",{staticClass:"help-img",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-07-27/5d3bc469224f2.png"}})])])}],c=(s("6d57"),s("73d1")),o=s("e4a4"),r=s.n(o),l=s("38a8"),h=s.n(l),u=(s("cc57"),s("3f60")),d=s.n(u),m={components:(i={},Object(c["a"])(i,d.a.name,d.a),Object(c["a"])(i,h.a.name,h.a),Object(c["a"])(i,r.a.name,r.a),i),data:function(){return{history:[],hot:[],key:"",showActionSheet:!1,options:[{label:"是",value:0},{label:"否",value:1}],tips:"确认清空搜索历史吗？"}},mounted:function(){this.history=this.getInpData(),this.queryItems()},methods:{goHome:function(){this.$nav.navTo("/",{})},back:function(){this.$router.go(-1)()},cleanKey:function(){this.key=""},closeActionSheet:function(){this.showActionSheet=!1},openActionSheet:function(){this.showActionSheet=!0},itemClick:function(t){var e=t.index;0===e&&(this.showActionSheet=!1,this.history=[],localStorage.setItem("searchArr","[]"))},navAction:function(t){t&&(this.getSearchList(t),this.history=this.getInpData(),this.$nav.navTo("/pinduoduo/list",{q:t}))},queryItems:function(t){var e=this;this.$http.post("/common.keyword.hot",{}).then((function(t){t.data.items&&t.data.items&&(e.hot=t.data.items)}))},query:function(){this.key&&(this.getSearchList(this.key),this.$nav.navTo("/pinduoduo/list",{q:this.key}))},getInpData:function(){return JSON.parse(localStorage.getItem("searchArr")||"[]")},getSearchList:function(t){var e=this.getInpData();e.forEach((function(s,i){if(s===t)return e.splice(i,1),!0})),e.push(t),e.length>10&&e.splice(0,e.length-10),localStorage.setItem("searchArr",JSON.stringify(e))}}},v=m,f=(s("6148"),s("9ca4")),p=Object(f["a"])(v,a,n,!1,null,"0669b25c",null);e["default"]=p.exports},ffe5:function(t,e,s){}}]);