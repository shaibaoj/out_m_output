(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00ed23d6"],{"09be":function(t,e,i){},"163d":function(t,e,i){"use strict";var a=i("e7ad"),n=i("e042"),s=i("75c4"),r=i("1e5b"),o=i("94b3"),c=i("238a"),l=i("2ea2").f,u=i("dcb7").f,d=i("064e").f,f=i("777a").trim,m="Number",h=a[m],p=h,v=h.prototype,b=s(i("e005")(v))==m,_="trim"in String.prototype,g=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var i,a,n,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>n)return NaN;return parseInt(c,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof h&&(b?c((function(){v.valueOf.call(i)})):s(i)!=m)?r(new p(g(e)),i,h):g(e)};for(var y,k=i("149f")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)n(p,y=k[w])&&!n(h,y)&&d(h,y,u(p,y));h.prototype=v,v.constructor=h,i("bf16")(a,m,h)}},"1e1b":function(t,e,i){},"1e49":function(t,e,i){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function n(t){if(Array.isArray(t))return a(t)}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||s(t)||r(t)||o()}i.d(e,"a",(function(){return c}))},"445b":function(t,e,i){"use strict";var a=i("09be"),n=i.n(a);n.a},"44f8":function(t,e,i){},"5f9f":function(t,e,i){"use strict";var a=i("1e1b"),n=i.n(a);n.a},"777a":function(t,e,i){var a=i("e46b"),n=i("f6b4"),s=i("238a"),r=i("9769"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,i){var n={},o=s((function(){return!!r[t]()||c[t]()!=c})),l=n[t]=o?e(f):r[t];i&&(n[i]=l),a(a.P+a.F*o,"String",n)},f=d.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},"78c4":function(t,e,i){"use strict";var a=i("e2d2"),n=i.n(a);n.a},9769:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a895:function(t,e,i){"use strict";var a=i("44f8"),n=i.n(a);n.a},aa6b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},n=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},r=s,o=(i("5f9f"),i("9ca4")),c=Object(o["a"])(r,a,n,!1,null,"96b87444",null);e["a"]=c.exports},b956:function(t,e,i){},d56d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"list"==t.goodsType?i("list",{attrs:{"item-data":t.itemData}}):i("column",{attrs:{"item-data":t.itemData}})},n=[],s=(i("163d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"image-wrapper"},[i("img",{attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),t.itemData.goods.day_sales>0?i("div",{staticClass:"daysale"},[t._v("\n\t\t\t今日销量:"+t._s(t.itemData.goods.day_sales)+"单\n\t\t")]):t._e()]),i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?i("span",{staticClass:"coupon-money"},[i("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))]):t._e()])])}),r=[],o={props:{itemData:{type:Object}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},navToDetailPage:function(t){var e=this;this.$nextTick((function(){e.$router.push({path:"/pinduoduo",query:{id:t.goods.num_iid}})}))}}},c=o,l=(i("445b"),i("9ca4")),u=Object(l["a"])(c,s,r,!1,null,"76dad4b5",null),d=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.itemData.goods.pic_url}})]),i("div",{staticClass:"content"},[i("div",{staticClass:"item-box expand"},[i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?i("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售"),i("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")]):t._e()])])])},m=[],h={props:{itemData:{type:Object}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},navToDetailPage:function(t){var e=this;this.$nextTick((function(){e.$router.push({path:"/pinduoduo",query:{id:t.goods.num_iid}})}))}}},p=h,v=(i("78c4"),Object(l["a"])(p,f,m,!1,null,"2c8bf66a",null)),b=v.exports,_={components:{column:d,list:b},props:{goodsType:{type:String},itemData:{type:Object},top:{type:Number}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))}}},g=_,y=Object(l["a"])(g,a,n,!1,null,"31cc6cbc",null);e["a"]=y.exports},e2d2:function(t,e,i){},f2cf:function(t,e,i){var a,n,s;(function(){(function(r,o){n=[e,i("2f41"),i("0f33"),i("b956")],a=o,s="function"===typeof a?a.apply(e,n):a,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(e);function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:n({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,a=0,n=this.items.length;a<n;a++){var s=this.$refs.items[a].getBoundingClientRect(),r=s.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],a=t.$refs.items[t.currentIndex+1];if(i)if(a){var n=t.$refs.wrapper.getBoundingClientRect(),s=i.getBoundingClientRect(),r=a.getBoundingClientRect();s&&s.left<n.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>n.right&&t.$refs.scroller.scrollTo(a.offsetLeft+a.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,a){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,a)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:a,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},fa0c:function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[i("div",{staticClass:"img"},[t._v("拼多多专区")]),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("div",{staticClass:"searchbox"},[i("div",{staticClass:"search-input",on:{click:t.search}},[i("span",{staticClass:"search-text"},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),i("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(e){t.currentCid=e},expression:"currentCid"}})],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("pinduoduo",{key:e,attrs:{itemData:t,goodsType:"list"}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],r=(i("6d57"),i("1e49")),o=i("73d1"),c=i("f2cf"),l=i.n(c),u=(i("cc57"),i("38a8")),d=i.n(u),f=i("db8e"),m=i("d56d"),h=i("aa6b"),p=i("e1b0"),v=i("3919"),b={components:(a={loadMore:f["a"],navBar:h["a"],infiniteLoading:v["a"]},Object(o["a"])(a,d.a.name,d.a),Object(o["a"])(a,"backTop",p["a"]),Object(o["a"])(a,l.a.name,l.a),Object(o["a"])(a,"pinduoduo",m["a"]),a),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted:function(){this.loadNav()},created:function(){},methods:{back:function(){this.$router.go(-1)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},search:function(){this.navToPage("/pinduoduo/search")},loadNav:function(){var t=this;this.$http.post("/app.page.nav",{nav_types:"pinduoduo"}).then((function(e){var i;e.data.items&&e.data.items.items&&((i=t.navList).push.apply(i,Object(r["a"])(e.data.items.items)),t.loadData())}))},loadData:function(t){var e=this,i=this.navList[this.current],a=i.cid;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.pinduoduo.list",{ipage:this.page.ipage,cid:a,sort:"day_sales",pic_size:"300"}).then((function(i){var a;(e.loading=!1,i.data.items&&i.data.items)?"tabChange"===t?e.items=i.data.items:(a=e.items).push.apply(a,Object(r["a"])(i.data.items)):e.page.hasMore=!1})))},changeTab:function(t,e,i){this.current=e,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(e,i){t.push({name:e.cid,cid:e.cid,label:e.name})})),t}}},_=b,g=(i("a895"),i("9ca4")),y=Object(g["a"])(_,n,s,!1,null,"60e4cad4",null);e["default"]=y.exports}}]);