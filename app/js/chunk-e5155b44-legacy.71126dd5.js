(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5155b44"],{"1e1b":function(t,e,i){},3144:function(t,e,i){"use strict";var n=i("57cb"),a=i.n(n);a.a},"57cb":function(t,e,i){},"5f9f":function(t,e,i){"use strict";var n=i("1e1b"),a=i.n(n);a.a},aa6b:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},a=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},r=s,o=(i("5f9f"),i("9ca4")),c=Object(o["a"])(r,n,a,!1,null,"96b87444",null);e["a"]=c.exports},b956:function(t,e,i){},da79:function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[t._v("\n\t\t\t\t淘宝热卖\n\t\t\t\t"),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("div",{staticClass:"menu-nav"},[i("span",{class:"实时榜单"==t.page.type?"active":"",on:{click:function(e){return t.queryType("实时榜单")}}},[t._v("实时榜单")]),i("span",{class:"整点抢购"==t.page.type?"active":"",on:{click:function(e){return t.queryType("整点抢购")}}},[t._v("整点抢购")])])],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"condition"},t._l(t.page.roundsList,(function(e,n){return i("span",{key:n,class:e.ddqTime==t.page.roundTime?"active":"",on:{click:function(i){return t.queryRoundTime(e.ddqTime)}}},[t._v(t._s(t._f("showTime")(e.ddqTime))+"点")])})),0),i("ul",{staticClass:"remai"},t._l(t.items,(function(e,n){return i("li",{key:n,staticClass:"shoplist",on:{click:function(i){return t.postMessage(e)}}},[i("div",{staticClass:"shop-Img"},[""!=e.mainPic?i("img",{attrs:{src:t.cdnImg(e.mainPic)}}):t._e()]),i("div",[i("p",{staticClass:"comHidden1"},[t._v(t._s(e.dtitle))])]),i("div",[i("p",{staticClass:"comHidden1"},[t._v(t._s(e.couponPrice)+"元券")])]),i("div",[i("i",{staticClass:"shopPrice"},[t._v("\n\t\t\t\t\t\t\t￥"+t._s(e.actualPrice)+"\n\t\t\t\t\t\t\t"),i("br"),i("em",{staticClass:"shopPrice-em"},[t._v("￥"+t._s(e.originalPrice))])])]),i("div",[e.commissionRate>=30?i("p",{staticClass:"shoplistbtn bimai"},[t._v("必买")]):i("p",{staticClass:"shoplistbtn"},[t._v("购买")])])])})),0),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],r=(i("6d57"),i("f548"),i("1e49")),o=i("73d1"),c=i("f2cf"),l=i.n(c),d=(i("cc57"),i("38a8")),u=i.n(d),h=i("db8e"),f=i("a288"),m=i("aa6b"),p=i("e1b0"),v=i("3919"),g=i("a2c5"),b=i.n(g),w={components:(n={loadMore:h["a"],navBar:m["a"],infiniteLoading:v["a"]},Object(o["a"])(n,u.a.name,u.a),Object(o["a"])(n,"backTop",p["a"]),Object(o["a"])(n,l.a.name,l.a),Object(o["a"])(n,"goods",f["a"]),n),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:1,price1:"",price2:"",hasMore:!0,roundTime:"",type:"实时榜单",roundsList:[]},items:[],loading:!1}},mounted:function(){this.loadData()},created:function(){},methods:{back:function(){this.$router.go(-1)},loadNav:function(){var t=this;this.$http.post("/app/page/nav",{nav_types:""}).then((function(e){var i;e.data.items&&e.data.items.items&&((i=t.navList).push.apply(i,Object(r["a"])(e.data.items.items)),t.loadData())}))},loadData:function(t){var e=this;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.$http.post("https://xsj.heytmall.com/api/web/tmall/active",{limit:this.page.page_size,page:this.page.ipage,roundTime:this.page.roundTime,type:this.page.type}).then((function(i){if(e.loading=!1,i.data.list&&i.data.list){var n;if("tabChange"===t)e.items=i.data.list;else(n=e.items).push.apply(n,Object(r["a"])(i.data.list));e.page.ipage=i.data.pageId,i.data.roundTime&&(e.page.roundTime=i.data.roundTime),i.data.roundsList?e.page.roundsList=i.data.roundsList:e.page.roundsList=[]}else e.page.hasMore=!1})))},changeTab:function(t,e,i){this.current=e,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()},cdnImg:function(t){return"https://imgcdn.youdanhui.com/imgcdn/"+b.a.MD5(t)+".jpg?src="+encodeURIComponent(t)},highlight:function(t){return t=t.replace(/([0-9.]+)元([包邮]*)/g,"<span class='highlight' style='color:red'>$1元$2</span>"),t},queryType:function(t){this.page.type=t,this.page.ipage=1,this.page.roundTime="",this.items=[],this.loadData()},queryRoundTime:function(t){this.page.roundTime=t,this.page.ipage=1,this.items=[],this.loadData()},postMessage:function(t){""!=t.goodsId&&this.$nav.postMessage({jump_type:"native",action:"load_action",role:"member",params:{title:t.title,load_url:"kuaibao",num_iid:t.goodsId,click_url:"https://detail.tmall.com/item.htm?id="+t.goodsId}})}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(e,i){t.push({name:e.cid,cid:e.cid,label:e.name})})),t}},filters:{showMoney:function(t){return t=t.replace(/([0-9.]+)元([包邮]*)/g,"<span>$1元$2</span>"),t},showTime:function(t){return t.substring(11,13)}}},k=w,_=(i("3144"),i("9ca4")),$=Object(_["a"])(k,a,s,!1,null,"b57cf72e",null);e["default"]=$.exports},f2cf:function(t,e,i){var n,a,s;(function(){(function(r,o){a=[e,i("2f41"),i("0f33"),i("b956")],n=o,s="function"===typeof n?n.apply(e,a):n,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(e);function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:a({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,n=0,a=this.items.length;n<a;n++){var s=this.$refs.items[n].getBoundingClientRect(),r=s.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],n=t.$refs.items[t.currentIndex+1];if(i)if(n){var a=t.$refs.wrapper.getBoundingClientRect(),s=i.getBoundingClientRect(),r=n.getBoundingClientRect();s&&s.left<a.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>a.right&&t.$refs.scroller.scrollTo(n.offsetLeft+n.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,n){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,n)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:n,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]}}]);