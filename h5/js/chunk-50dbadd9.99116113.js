(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50dbadd9"],{"0249":function(t,e,i){},"234b":function(t,e,i){},"26c9":function(t,e,i){var s,n,a;(function(){(function(r,o){n=[e,i("556d"),i("cdfc"),i("234b")],s=o,a="function"===typeof s?s.apply(e,n):s,void 0===a||(t.exports=a)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(e);function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:n({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,s=0,n=this.items.length;s<n;s++){var a=this.$refs.items[s].getBoundingClientRect(),r=a.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],s=t.$refs.items[t.currentIndex+1];if(i)if(s){var n=t.$refs.wrapper.getBoundingClientRect(),a=i.getBoundingClientRect(),r=s.getBoundingClientRect();a&&a.left<n.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>n.right&&t.$refs.scroller.scrollTo(s.offsetLeft+s.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,s){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,s)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:s,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},"46a7":function(t,e,i){"use strict";var s=i("0249"),n=i.n(s);n.a},"5f9f":function(t,e,i){"use strict";var s=i("7095"),n=i.n(s);n.a},7095:function(t,e,i){},"8e61":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"black"},[i("md-icon",{attrs:{name:"arrow-left",size:"lg",color:"#fff"},on:{click:t.back}})],1)]),i("div",{staticClass:"container"},[i("div",{staticClass:"user_signin_header"},[i("div",{staticClass:"sign_box"},[i("div",{staticClass:"sign_in_btn text-center",on:{click:t.checkin}},[t._m(0)])])]),t._m(1),i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("goods",{key:e,attrs:{itemData:t,goodsType:"colume"}})})),1),i("load-more",{attrs:{visible:t.loading}})],1)],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn_tip"},[i("div",{staticClass:"sign_in"},[t._v("签到")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("span",[i("img",{attrs:{src:"https://cmsstatic.dataoke.com//wap_new/user/images/icon/change-money-icon-left.svg?v=201908281814",alt:""}})]),i("span",{staticClass:"recommend_info text-center"},[t._v("为您推荐")]),i("span",[i("img",{attrs:{src:"https://cmsstatic.dataoke.com//wap_new/user/images/icon/change-money-icon-right.svg?v=201908281814",alt:""}})])])}],a=i("1861"),r=i.n(a),o=i("26c9"),c=i.n(o),l=i("aed6"),d=i.n(l),h=i("db8e"),f=i("a288"),u=i("aa6b"),m=i("e1b0"),v=i("3919"),p={components:{navBar:u["a"],infiniteLoading:v["a"],[d.a.name]:d.a,backTop:m["a"],[c.a.name]:c.a,loadMore:h["a"],goods:f["a"]},data(){return{items:[],loading:!1,page:{ipage:0,price1:"",price2:"",hasMore:!0}}},mounted(){this.loadData()},methods:{back(){this.$router.go(-1)},loadData(){this.loading||(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.goods.list",{ipage:0,pic_size:"300"}).then(t=>{this.loading=!1,t.data.items&&this.items.push(...t.data.items)}))},checkin(){this.$http.post("/cms.member.member.check_in",{}).then(t=>{r.a.info(t.message)})},loadmore(){this.loading||this.loadData()}}},w=p,g=(i("46a7"),i("2877")),b=Object(g["a"])(w,s,n,!1,null,"3e8f0a4e",null);e["default"]=b.exports},aa6b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},n=[],a={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},r=a,o=(i("5f9f"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"96b87444",null);e["a"]=c.exports}}]);