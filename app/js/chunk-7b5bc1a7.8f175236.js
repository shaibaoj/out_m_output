(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b5bc1a7"],{"09be":function(t,e,a){},"1e1b":function(t,e,a){},"445b":function(t,e,a){"use strict";var i=a("09be"),s=a.n(i);s.a},"5f9f":function(t,e,a){"use strict";var i=a("1e1b"),s=a.n(i);s.a},"70d9":function(t,e,a){"use strict";var i=a("7b62"),s=a.n(i);s.a},"78c4":function(t,e,a){"use strict";var i=a("e2d2"),s=a.n(i);s.a},"7b62":function(t,e,a){},aa6b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-bar"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[a("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[a("i",{staticClass:"back-icon"})])],2),t._t("left")],2),a("div",{staticClass:"nav-center"},[a("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),a("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[a("i",{staticClass:"more-icon"})])],2)],2)])},s=[],n={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}}},r=n,o=(a("5f9f"),a("9ca4")),c=Object(o["a"])(r,i,s,!1,null,"96b87444",null);e["a"]=c.exports},b956:function(t,e,a){},d56d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"list"==t.goodsType?a("list",{attrs:{"item-data":t.itemData}}):a("column",{attrs:{"item-data":t.itemData}})},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[a("div",{staticClass:"image-wrapper"},[a("img",{attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),t.itemData.goods.day_sales>0?a("div",{staticClass:"daysale"},[t._v("\n\t\t\t今日销量:"+t._s(t.itemData.goods.day_sales)+"单\n\t\t")]):t._e()]),a("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))]),t.itemData.click.share_commission>0?a("div",{staticClass:"item-box"},[a("div",{staticClass:"commission"},[t._v("\n\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t")])]):t._e(),a("div",{staticClass:"item-box"},[a("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),a("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?a("span",{staticClass:"coupon-money"},[a("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()]),a("div",{staticClass:"item-box"},[a("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?a("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))]):t._e()])])},r=[],o={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/pinduoduo",query:{id:t.goods.num_iid}})})}}},c=o,l=(a("445b"),a("9ca4")),u=Object(l["a"])(c,n,r,!1,null,"76dad4b5",null),d=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.itemData.goods.pic_url}})]),a("div",{staticClass:"content"},[a("div",{staticClass:"item-box expand"},[a("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?a("div",{staticClass:"item-box"},[a("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),a("div",{staticClass:"item-box"},[a("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),a("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?a("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()]),a("div",{staticClass:"item-box"},[a("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?a("span",[t._v("已售"),a("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")]):t._e()])])])},h=[],p={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/pinduoduo",query:{id:t.goods.num_iid}})})}}},f=p,v=(a("78c4"),Object(l["a"])(f,m,h,!1,null,"2c8bf66a",null)),_=v.exports,b={components:{column:d,list:_},props:{goodsType:{type:String},itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})}}},g=b,k=Object(l["a"])(g,i,s,!1,null,"31cc6cbc",null);e["a"]=k.exports},e2d2:function(t,e,a){},f2cf:function(t,e,a){var i,s,n;(function(){(function(r,o){s=[e,a("2f41"),a("0f33"),a("b956")],i=o,n="function"===typeof i?i.apply(e,s):i,void 0===n||(t.exports=n)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(e);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t.default={name:"md-tab-bar",components:s({},a.default.name,a.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var a=0,i=0,s=this.items.length;i<s;i++){var n=this.$refs.items[i].getBoundingClientRect(),r=n.width;a+=r}this.contentW=a,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var a=t.$refs.items[t.currentIndex-1],i=t.$refs.items[t.currentIndex+1];if(a)if(i){var s=t.$refs.wrapper.getBoundingClientRect(),n=a.getBoundingClientRect(),r=i.getBoundingClientRect();n&&n.left<s.left?t.$refs.scroller.scrollTo(a.offsetLeft,0,!0):r&&r.right>s.right&&t.$refs.scroller.scrollTo(i.offsetLeft+i.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"md-tab-bar"},[a("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),a("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[a("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,i){return a("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(a){return t.$_onClick(e,i)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:i,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?a("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},fa0c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"fix"},[a("div",{staticClass:"nav-box"},[a("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[a("div",{staticClass:"img"},[t._v("拼多多专区")]),a("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[a("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),a("div",{staticClass:"searchbox"},[a("div",{staticClass:"search-input",on:{click:t.search}},[a("span",{staticClass:"search-text"},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),a("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(e){t.currentCid=e},expression:"currentCid"}})],1)]),a("div",{staticClass:"container"},[a("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[a("div",{staticClass:"list"},t._l(t.items,(function(t,e){return a("pinduoduo",{key:e,attrs:{itemData:t,goodsType:"list"}})})),1),a("load-more",{attrs:{visible:t.loading}}),a("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],n=(a("6d57"),a("f2cf")),r=a.n(n),o=a("38a8"),c=a.n(o),l=a("db8e"),u=a("d56d"),d=a("aa6b"),m=a("e1b0"),h=a("3919"),p={components:{loadMore:l["a"],navBar:d["a"],infiniteLoading:h["a"],[c.a.name]:c.a,backTop:m["a"],[r.a.name]:r.a,pinduoduo:u["a"]},data(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted(){this.loadNav()},created(){},methods:{back(){this.$router.go(-1)},navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},search(){this.navToPage("/pinduoduo/search")},loadNav(){this.$http.post("/app.page.nav",{nav_types:"pinduoduo"}).then(t=>{t.data.items&&t.data.items.items&&(this.navList.push(...t.data.items.items),this.loadData())})},loadData(t){let e=this.navList[this.current],a=e.cid;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.pinduoduo.list",{ipage:this.page.ipage,cid:a,sort:"day_sales",pic_size:"300"}).then(e=>{this.loading=!1,e.data.items&&e.data.items?"tabChange"===t?this.items=e.data.items:this.items.push(...e.data.items):this.page.hasMore=!1}))},changeTab(t,e,a){this.current=e,this.loadData("tabChange")},loadmore(){this.loading||this.loadData()}},computed:{navItems(){var t=[];return this.navList.forEach((e,a)=>{t.push({name:e.cid,cid:e.cid,label:e.name})}),t}}},f=p,v=(a("70d9"),a("9ca4")),_=Object(v["a"])(f,i,s,!1,null,"7ab700bd",null);e["default"]=_.exports}}]);