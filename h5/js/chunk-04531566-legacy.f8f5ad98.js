(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04531566"],{"234b":function(t,e,i){},"26c9":function(t,e,i){var n,a,s;(function(){(function(r,o){a=[e,i("556d"),i("cdfc"),i("234b")],n=o,s="function"===typeof n?n.apply(e,a):n,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(e);function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:a({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,n=0,a=this.items.length;n<a;n++){var s=this.$refs.items[n].getBoundingClientRect(),r=s.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],n=t.$refs.items[t.currentIndex+1];if(i)if(n){var a=t.$refs.wrapper.getBoundingClientRect(),s=i.getBoundingClientRect(),r=n.getBoundingClientRect();s&&s.left<a.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>a.right&&t.$refs.scroller.scrollTo(n.offsetLeft+n.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,n){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,n)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:n,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},"5f9f":function(t,e,i){"use strict";i("7095")},7095:function(t,e,i){},"9b79":function(t,e,i){},a079:function(t,e,i){"use strict";i("9b79")},aa6b:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",(function(){return[i("i",{staticClass:"back-icon"})]}))],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",(function(){return[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])]}))],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",(function(){return[i("i",{staticClass:"more-icon"})]}))],2)],2)])},a=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},r=s,o=(i("5f9f"),i("2877")),c=Object(o["a"])(r,n,a,!1,null,"96b87444",null);e["a"]=c.exports},f6c1:function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"https://cmsstatic.dataoke.com//wap_new/ranking/images/halfday_title.svg?v=201909121016",alt:""}})]),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(e){t.currentCid=e},expression:"currentCid"}})],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"ad"},[i("img",{attrs:{mode:"widthFix",src:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ndN8fW2JJhuZ5hetO-2053469401.png?v=276232"}})]),i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("goods",{key:e,attrs:{top:e+1,itemData:t,goodsType:"qiang"}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],r=(i("ac6a"),i("75fc")),o=i("bd86"),c=i("26c9"),l=i.n(c),d=(i("7f7f"),i("aed6")),u=i.n(d),h=i("db8e"),f=i("a288"),m=i("aa6b"),v=i("e1b0"),p=i("3919"),b={components:(n={loadMore:h["a"],navBar:m["a"],infiniteLoading:p["a"]},Object(o["a"])(n,u.a.name,u.a),Object(o["a"])(n,"backTop",v["a"]),Object(o["a"])(n,l.a.name,l.a),Object(o["a"])(n,"goods",f["a"]),n),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted:function(){this.loadNav()},created:function(){},methods:{back:function(){this.$router.go(-1)},loadNav:function(){var t=this;this.$http.post("/app.page.nav",{nav_types:"qiang"}).then((function(e){if(e.data.item&&e.data.item.items){var i;(i=t.navList).push.apply(i,Object(r["a"])(e.data.item.items));for(var n=0;n<t.navList.length;n++)!0===t.navList[n].selected&&(t.currentCid=t.navList[n].cid);t.loadData()}}))},loadData:function(t){var e=this,i=this.navList[this.current],n=i?i.queryTime:"";"tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.qiang",{ipage:this.page.ipage,query_time:n,sort:"day_sales"}).then((function(i){var n;(e.loading=!1,i.data.items)?"tabChange"===t?e.items=i.data.items:(n=e.items).push.apply(n,Object(r["a"])(i.data.items)):e.page.hasMore=!1}))},changeTab:function(t,e,i){this.current=e,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(e,i){t.push({name:e.cid,cid:e.cid,desc:e.desc,query_time:e.query_time,label:e.name})})),t}}},g=b,w=(i("a079"),i("2877")),k=Object(w["a"])(g,a,s,!1,null,"148ec7f2",null);e["default"]=k.exports}}]);