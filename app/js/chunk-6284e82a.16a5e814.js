(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6284e82a"],{"104e":function(t,e,a){t.exports={tabbarItem:"tabbar-item_tabbarItem_3ai82",itemIcon:"tabbar-item_itemIcon_2lC9k",itemText:"tabbar-item_itemText_2VGQ6",active:"tabbar-item_active_2FzUa",textActive:"tabbar-item_textActive_2jtbp",redPoint:"tabbar-item_redPoint_2FcuB"}},"8c1c":function(t,e,a){"use strict";var i=a("f4a8"),n=a.n(i);e["default"]=n.a},"99b7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("router-view"),a("tab-bar",{attrs:{nav:t.tabbarList,redPoint:t.tabbarRedPoint},on:{tabChange:t.handleTabChange}})],1)},n=[],r=(a("6d57"),a("73d1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.tabbar},t._l(t.nav,(function(e,i){return a("tabbar-item",{key:i,attrs:{index:i,activeIndex:t.activeTabIndex,text:e.text,icon:e.icon,activeIcon:e.activeIcon,pageName:e.pageName,redPoint:t.redPoint[e.pageName]},on:{switchTab:t.handleTab}})})),1)},o=[],s=function(){var t,e,a=this,i=a.$createElement,n=a._self._c||i;return n("div",{class:(t={},t[a.$style.tabbarItem]=!0,t[a.$style.active]=a.activeIndex===a.index,t),on:{click:a.switchTab}},[n("img",{class:a.$style.itemIcon,attrs:{"aria-hidden":"true",src:a.currentIcon}}),n("div",{class:(e={},e[a.$style.itemText]=!0,e[a.$style.textActive]=a.activeIndex===a.index,e)},[a._v(a._s(a.text))]),a.redPoint?n("div",{class:a.$style.redPoint}):a._e()])},b=[],d=(a("f548"),{props:{text:{require:!0,type:String},icon:{require:!0,type:String},activeIcon:{require:!0,type:String},index:{type:Number},activeIndex:{type:Number},redPoint:{default:!1},pageName:{type:String}},computed:{currentIcon(){return this.activeIndex===this.index?this.activeIcon:this.icon}},methods:{switchTab(){this.$emit("switchTab",this.index),this.$router.replace({name:this.pageName})}}}),m=d,l=a("cc0b"),u=a("9ca4");function p(t){this["$style"]=l["default"].locals||l["default"]}var h=Object(u["a"])(m,s,b,!1,p,null,null),g=h.exports,v={components:{tabbarItem:g},data(){return{activeTabIndex:0}},props:{nav:{type:Array},redPoint:{}},watch:{$route(t){this.nav.find((e,a)=>{if(e.pageName===t.name)return this.activeTabIndex=a,!0})}},methods:{handleTab(t){this.activeTabIndex=t,this.$emit("tabChange",t)},getTabbarIndex(t){this.nav.find((e,a)=>{if(e.pageName===t)return this.activeTabIndex=a,!0})}},created(){this.getTabbarIndex(this.$route.name)}},x=v,f=a("8c1c");function y(t){this["$style"]=f["default"].locals||f["default"]}var O=Object(u["a"])(x,c,o,!1,y,null,null),I=O.exports,_=a("5880");function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var j={name:"index-layout",data(){return{tabbarList:[{pageName:"home",text:"首页",icon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01IDoKYf2JJhy7Pld17_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01tx7Piu2JJhy5Id1tp_!!2053469401.png"},{pageName:"category",text:"分类",icon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Ts9O8t2JJhy5zKLZn_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01SM4j382JJhy5Id205_!!2053469401.png"},{pageName:"jiu",text:"九块九",icon:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01IoDVRW2JJhy7uYnhS_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01zKJ7sE2JJhy4rI1Dl_!!2053469401.png"},{pageName:"mine",text:"我的",icon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN015lCWYO2JJhy8Mlr01_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"}],hasOverdue:!1}},computed:N({},Object(_["mapState"])(["tabbarRedPoint"])),components:{tabBar:I},methods:N(N({},Object(_["mapMutations"])(["setRedPoint"])),{},{handleTabChange(t){}})},J=j,T=Object(u["a"])(J,i,n,!1,null,null,null);e["default"]=T.exports},cc0b:function(t,e,a){"use strict";var i=a("104e"),n=a.n(i);e["default"]=n.a},f4a8:function(t,e,a){t.exports={tabbar:"index_tabbar_20dYG"}}}]);