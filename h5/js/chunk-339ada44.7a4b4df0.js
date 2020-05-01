(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-339ada44"],{"234b":function(t,e,i){},"26c9":function(t,e,i){var a,s,n;(function(){(function(r,o){s=[e,i("556d"),i("cdfc"),i("234b")],a=o,n="function"===typeof a?a.apply(e,s):a,void 0===n||(t.exports=n)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(e);function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:s({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,a=0,s=this.items.length;a<s;a++){var n=this.$refs.items[a].getBoundingClientRect(),r=n.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],a=t.$refs.items[t.currentIndex+1];if(i)if(a){var s=t.$refs.wrapper.getBoundingClientRect(),n=i.getBoundingClientRect(),r=a.getBoundingClientRect();n&&n.left<s.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>s.right&&t.$refs.scroller.scrollTo(a.offsetLeft+a.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,a){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,a)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:a,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},"5f9f":function(t,e,i){"use strict";var a=i("7095"),s=i.n(a);s.a},"61e8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201909121016",alt:""}})]),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(e){t.currentCid=e},expression:"currentCid"}})],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("goods",{key:e,attrs:{itemData:t,goodsType:"list"}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],n=(i("ac6a"),i("26c9")),r=i.n(n),o=i("aed6"),c=i.n(o),l=i("db8e"),d=i("a288"),h=i("aa6b"),u=i("e1b0"),m=i("3919"),f={components:{loadMore:l["a"],navBar:h["a"],infiniteLoading:m["a"],[c.a.name]:c.a,backTop:u["a"],[r.a.name]:r.a,goods:d["a"]},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},loadNav(){this.$http.post("/app/page/nav",{nav_types:""}).then(t=>{t.data.items&&t.data.items.items&&(this.navList.push(...t.data.items.items),this.loadData())})},loadData(t){let e=this.navItems[this.current],i=e.cid;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms/goods/list",{ipage:this.page.ipage,cid:i,sort:"day_sales",pic_size:"300"}).then(e=>{this.loading=!1,e.data.items&&e.data.items?"tabChange"===t?this.items=e.data.items:this.items.push(...e.data.items):this.page.hasMore=!1}))},changeTab(t,e,i){this.current=e,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){const t=[];return this.navList.forEach((e,i)=>{t.push({name:e.cid,cid:e.cid,label:e.name})}),t}}},v=f,p=(i("9215"),i("2877")),b=Object(p["a"])(v,a,s,!1,null,"0c94a2db",null);e["default"]=b.exports},7095:function(t,e,i){},9215:function(t,e,i){"use strict";var a=i("9dd0"),s=i.n(a);s.a},"9dd0":function(t,e,i){},aa6b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},s=[],n={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},r=n,o=(i("5f9f"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"96b87444",null);e["a"]=c.exports}}]);