var _=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,o=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&u(e,t,a[t]);if(l)for(var t of l(a))v.call(a,t)&&u(e,t,a[t]);return e},b=(e,a)=>p(e,g(a));import{$ as h}from"./gogocodeTransfer.ea7237c2.js";import{_ as s}from"./index.fd5831e2.js";const I="_tabbarItem_dbd4x_2",V="_itemIcon_dbd4x_13",y="_itemText_dbd4x_19",N="_active_dbd4x_24",C="_textActive_dbd4x_27",T="_redPoint_dbd4x_30";var f={tabbarItem:I,itemIcon:V,itemText:y,active:N,textActive:C,redPoint:T};const $={props:{text:{require:!0,type:String},icon:{require:!0,type:String},activeIcon:{require:!0,type:String},index:{type:Number},activeIndex:{type:Number},redPoint:{default:!1},pageName:{type:String}},computed:{currentIcon(){return this.activeIndex===this.index?this.activeIcon:this.icon}},methods:{switchTab(){h(this,"switchTab",this.index),this.$router.replace({name:this.pageName})}},emits:["switchTab"]},J=["src"];function P(e,a,t,d,r,n){return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass({[e.$style.tabbarItem]:!0,[e.$style.active]:t.activeIndex===t.index}),onClick:a[0]||(a[0]=(...c)=>n.switchTab&&n.switchTab(...c))},[Vue.createElementVNode("img",{class:Vue.normalizeClass(e.$style.itemIcon),"aria-hidden":"true",src:n.currentIcon},null,10,J),Vue.createElementVNode("div",{class:Vue.normalizeClass({[e.$style.itemText]:!0,[e.$style.textActive]:t.activeIndex===t.index})},Vue.toDisplayString(t.text),3),t.redPoint?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:Vue.normalizeClass(e.$style.redPoint)},null,2)):Vue.createCommentVNode("",!0)],2)}const k={$style:f};var B=s($,[["render",P],["__cssModules",k]]);const O="_tabbar_1s2o5_2";var w={tabbar:O};const S={components:{tabbarItem:B},data(){return{activeTabIndex:0}},props:{nav:{type:Array},redPoint:{}},watch:{$route(e){this.nav.find((a,t)=>{if(a.pageName===e.name)return this.activeTabIndex=t,!0})}},methods:{handleTab(e){this.activeTabIndex=e,h(this,"tabChange",e)},getTabbarIndex(e){this.nav.find((a,t)=>{if(a.pageName===e)return this.activeTabIndex=t,!0})}},created(){this.getTabbarIndex(this.$route.name)},emits:["tabChange"]};function E(e,a,t,d,r,n){const c=Vue.resolveComponent("tabbar-item");return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(e.$style.tabbar)},[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.nav,(i,m)=>(Vue.openBlock(),Vue.createBlock(c,{key:m,index:m,activeIndex:r.activeTabIndex,text:i.text,icon:i.icon,activeIcon:i.activeIcon,pageName:i.pageName,redPoint:t.redPoint[i.pageName],onSwitchTab:n.handleTab},null,8,["index","activeIndex","text","icon","activeIcon","pageName","redPoint","onSwitchTab"]))),128))],2)}const z={$style:w};var A=s(S,[["render",E],["__cssModules",z]]);const M={name:"index-layout",data(){return{tabbarList:[{pageName:"home",text:"\u9996\u9875",icon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01IDoKYf2JJhy7Pld17_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01tx7Piu2JJhy5Id1tp_!!2053469401.png"},{pageName:"category",text:"\u5206\u7C7B",icon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Ts9O8t2JJhy5zKLZn_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01SM4j382JJhy5Id205_!!2053469401.png"},{pageName:"jiu",text:"\u4E5D\u5757\u4E5D",icon:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01IoDVRW2JJhy7uYnhS_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01zKJ7sE2JJhy4rI1Dl_!!2053469401.png"},{pageName:"mine",text:"\u6211\u7684",icon:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN015lCWYO2JJhy8Mlr01_!!2053469401.png",activeIcon:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"}],hasOverdue:!1}},computed:o({},Vuex.mapState(["tabbarRedPoint"])),components:{tabBar:A},methods:b(o({},Vuex.mapMutations(["setRedPoint"])),{handleTabChange(e){}})},D={class:"layout"};function L(e,a,t,d,r,n){const c=Vue.resolveComponent("router-view"),i=Vue.resolveComponent("tab-bar");return Vue.openBlock(),Vue.createElementBlock("div",D,[Vue.createVNode(c),Vue.createVNode(i,{nav:r.tabbarList,redPoint:e.tabbarRedPoint,onTabChange:n.handleTabChange},null,8,["nav","redPoint","onTabChange"])])}var W=s(M,[["render",L]]);export{W as default};
