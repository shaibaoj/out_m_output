(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eca10e5e"],{"1af6":function(t,e,i){var a=i("63b6");a(a.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var a=i("d9f6"),n=i("aebd");t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},"234b":function(t,e,i){},"26c9":function(t,e,i){var a,n,s;(function(){(function(r,o){n=[e,i("556d"),i("cdfc"),i("234b")],a=o,s="function"===typeof a?a.apply(e,n):a,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(e);function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.default={name:"md-tab-bar",components:n({},i.default.name,i.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var i=0,a=0,n=this.items.length;a<n;a++){var s=this.$refs.items[a].getBoundingClientRect(),r=s.width;i+=r}this.contentW=i,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var i=t.$refs.items[t.currentIndex-1],a=t.$refs.items[t.currentIndex+1];if(i)if(a){var n=t.$refs.wrapper.getBoundingClientRect(),s=i.getBoundingClientRect(),r=a.getBoundingClientRect();s&&s.left<n.left?t.$refs.scroller.scrollTo(i.offsetLeft,0,!0):r&&r.right>n.right&&t.$refs.scroller.scrollTo(a.offsetLeft+a.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var r="function"===typeof t.exports?t.exports.options:t.exports;r.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"md-tab-bar"},[i("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),i("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[i("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,a){return i("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(i){return t.$_onClick(e,a)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:a,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?i("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},r.staticRenderFns=[]},"3d51":function(t,e,i){"use strict";i("8870")},"549b":function(t,e,i){"use strict";var a=i("d864"),n=i("63b6"),s=i("241e"),r=i("b0dc"),o=i("3702"),c=i("b447"),u=i("20fd"),l=i("7cd6");n(n.S+n.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,n,f,d=s(t),m="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,v=void 0!==p,b=0,g=l(d);if(v&&(p=a(p,h>2?arguments[2]:void 0,2)),void 0==g||m==Array&&o(g))for(e=c(d.length),i=new m(e);e>b;b++)u(i,b,v?p(d[b],b):d[b]);else for(f=g.call(d),i=new m;!(n=f.next()).done;b++)u(i,b,v?r(f,p,[n.value,b],!0):n.value);return i.length=b,i}})},"5f9f":function(t,e,i){"use strict";i("7095")},7095:function(t,e,i){},"75fc":function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var a=i("a745"),n=i.n(a);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function r(t){if(n()(t))return s(t)}var o=i("67bb"),c=i.n(o),u=i("5d58"),l=i.n(u),f=i("774e"),d=i.n(f);function m(t){if("undefined"!==typeof c.a&&null!=t[l.a]||null!=t["@@iterator"])return d()(t)}function h(t,e){if(t){if("string"===typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?d()(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t){return r(t)||m(t)||h(t)||p()}},"774e":function(t,e,i){t.exports=i("d2d5")},8557:function(t,e,i){},8870:function(t,e,i){},"8adb":function(t,e,i){"use strict";i("8ff5")},"8ff5":function(t,e,i){},"9daa":function(t,e,i){"use strict";i("8557")},a745:function(t,e,i){t.exports=i("f410")},aa6b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",(function(){return[i("i",{staticClass:"back-icon"})]}))],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",(function(){return[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])]}))],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",(function(){return[i("i",{staticClass:"more-icon"})]}))],2)],2)])},n=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},r=s,o=(i("5f9f"),i("2877")),c=Object(o["a"])(r,a,n,!1,null,"96b87444",null);e["a"]=c.exports},aa77:function(t,e,i){var a=i("5ca1"),n=i("be13"),s=i("79e5"),r=i("fdef"),o="["+r+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t,e,i){var n={},o=s((function(){return!!r[t]()||c[t]()!=c})),u=n[t]=o?e(d):r[t];i&&(n[i]=u),a(a.P+a.F*o,"String",n)},d=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},c5f6:function(t,e,i){"use strict";var a=i("7726"),n=i("69a8"),s=i("2d95"),r=i("5dbc"),o=i("6a99"),c=i("79e5"),u=i("9093").f,l=i("11e9").f,f=i("86cc").f,d=i("aa77").trim,m="Number",h=a[m],p=h,v=h.prototype,b=s(i("2aeb")(v))==m,g="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():d(e,3);var i,a,n,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if(r=c.charCodeAt(u),r<48||r>n)return NaN;return parseInt(c,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof h&&(b?c((function(){v.valueOf.call(i)})):s(i)!=m)?r(new p(_(e)),i,h):_(e)};for(var y,w=i("9e1e")?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)n(p,y=w[k])&&!n(h,y)&&f(h,y,l(p,y));h.prototype=v,v.constructor=h,i("2aba")(a,m,h)}},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},d56d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"list"==t.goodsType?i("list",{attrs:{"item-data":t.itemData}}):i("column",{attrs:{"item-data":t.itemData}})},n=[],s=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"image-wrapper"},[i("img",{attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),t.itemData.goods.day_sales>0?i("div",{staticClass:"daysale"},[t._v("\n\t\t\t今日销量:"+t._s(t.itemData.goods.day_sales)+"单\n\t\t")]):t._e()]),i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.money>0?i("span",{staticClass:"coupon-money"},[i("i",[t._v(t._s(t.itemData.coupon.money)+"元券")])]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))]):t._e()])])}),r=[],o={props:{itemData:{type:Object}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},navToDetailPage:function(t){var e=this;this.$nextTick((function(){e.$router.push({path:"/goods",query:{id:t.goods.num_iid}})}))}}},c=o,u=(i("3d51"),i("2877")),l=Object(u["a"])(c,s,r,!1,null,"79b77000",null),f=l.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",on:{click:function(e){return t.navToDetailPage(t.itemData)}}},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.itemData.goods.pic_url}})]),i("div",{staticClass:"content"},[i("div",{staticClass:"item-box expand"},[i("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?i("div",{staticClass:"item-box"},[i("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),i("div",{staticClass:"item-box"},[i("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),i("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.money>0?i("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.money)+"元券")]):t._e()]),i("div",{staticClass:"item-box"},[i("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),t.itemData.goods.volume>0?i("span",[t._v("已售"),i("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")]):t._e()])])])},m=[],h={props:{itemData:{type:Object}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},navToDetailPage:function(t){var e=this;this.$nextTick((function(){e.$router.push({path:"/goods",query:{id:t.goods.num_iid}})}))}}},p=h,v=(i("9daa"),Object(u["a"])(p,d,m,!1,null,"6b28af88",null)),b=v.exports,g={components:{column:f,list:b},props:{goodsType:{type:String},itemData:{type:Object},top:{type:Number}},data:function(){return{}},methods:{navAction:function(t){this.$nav.toNav(t)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))}}},_=g,y=Object(u["a"])(_,a,n,!1,null,"31cc6cbc",null);e["a"]=y.exports},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},fa0c:function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[i("div",{staticClass:"img"},[t._v("拼多多专区")]),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("div",{staticClass:"searchbox"},[i("div",{staticClass:"search-input",on:{click:t.search}},[i("span",{staticClass:"search-text"},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),i("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(e){t.currentCid=e},expression:"currentCid"}})],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(t,e){return i("pinduoduo",{key:e,attrs:{itemData:t,goodsType:"list"}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],r=(i("ac6a"),i("75fc")),o=i("bd86"),c=i("26c9"),u=i.n(c),l=(i("7f7f"),i("aed6")),f=i.n(l),d=i("db8e"),m=i("d56d"),h=i("aa6b"),p=i("e1b0"),v=i("3919"),b={components:(a={loadMore:d["a"],navBar:h["a"],infiniteLoading:v["a"]},Object(o["a"])(a,f.a.name,f.a),Object(o["a"])(a,"backTop",p["a"]),Object(o["a"])(a,u.a.name,u.a),Object(o["a"])(a,"pinduoduo",m["a"]),a),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted:function(){this.loadNav()},created:function(){},methods:{back:function(){this.$router.go(-1)},navToPage:function(t,e){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:e||{}})}))},search:function(){this.navToPage("/pinduoduo/search")},loadNav:function(){var t=this;this.$http.post("/app.page.nav",{nav_types:"pinduoduo"}).then((function(e){var i;e.data.item&&e.data.item.items&&((i=t.navList).push.apply(i,Object(r["a"])(e.data.item.items)),t.loadData())}))},loadData:function(t){var e=this,i=this.navList[this.current],a=null!=i?i.cid:"";this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.pinduoduo.list",{ipage:this.page.ipage,cid:a,sort:"day_sales",pic_size:"300"}).then((function(i){var a;(e.loading=!1,i.data.items)?"tabChange"===t?e.items=i.data.items:(a=e.items).push.apply(a,Object(r["a"])(i.data.items)):e.page.hasMore=!1})))},changeTab:function(t,e,i){this.current=e,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(e,i){t.push({name:e.cid,cid:e.cid,label:e.name})})),t}}},g=b,_=(i("8adb"),i("2877")),y=Object(_["a"])(g,n,s,!1,null,"ef56c1a6",null);e["default"]=y.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);