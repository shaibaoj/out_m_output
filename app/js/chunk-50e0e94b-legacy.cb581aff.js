(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e0e94b"],{5911:function(t,a,i){},"5f9f":function(t,a,i){"use strict";var e=i("7095"),n=i.n(e);n.a},7095:function(t,a,i){},aa6b:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(a){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(a){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(a){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},n=[],s={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},o=s,c=(i("5f9f"),i("2877")),r=Object(c["a"])(o,e,n,!1,null,"96b87444",null);a["a"]=r.exports},fa0c:function(t,a,i){"use strict";i.r(a);var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page"},[i("div",{staticClass:"fix"},[i("div",{staticClass:"nav-box"},[i("nav-bar",{staticClass:"nav",attrs:{rightShow:!1}},[i("div",{staticClass:"img"},[t._v("拼多多专区")]),i("a",{attrs:{slot:"back-icon"},on:{click:t.back},slot:"back-icon"},[i("md-icon",{attrs:{slot:"back-icon",name:"arrow-left",color:"#fff"},slot:"back-icon"})],1)]),i("div",{staticClass:"searchbox"},[i("div",{staticClass:"search-input",on:{click:t.search}},[i("span",{staticClass:"search-text"},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),i("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.currentCid,callback:function(a){t.currentCid=a},expression:"currentCid"}})],1)]),i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(t,a){return i("pinduoduo",{key:a,attrs:{itemData:t,goodsType:"list"}})})),1),i("load-more",{attrs:{visible:t.loading}}),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},s=[],o=(i("ac6a"),i("75fc")),c=i("bd86"),r=i("26c9"),l=i.n(r),d=(i("7f7f"),i("aed6")),u=i.n(d),h=i("db8e"),p=i("d56d"),v=i("aa6b"),f=i("e1b0"),m=i("3919"),b={components:(e={loadMore:h["a"],navBar:v["a"],infiniteLoading:m["a"]},Object(c["a"])(e,u.a.name,u.a),Object(c["a"])(e,"backTop",f["a"]),Object(c["a"])(e,l.a.name,l.a),Object(c["a"])(e,"pinduoduo",p["a"]),e),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted:function(){this.loadNav()},created:function(){},methods:{back:function(){this.$router.go(-1)},navToPage:function(t,a){var i=this;this.$nextTick((function(){i.$router.push({path:t,query:a||{}})}))},search:function(){this.navToPage("/pinduoduo/search")},loadNav:function(){var t=this;this.$http.post("/app.page.nav",{nav_types:"pinduoduo"}).then((function(a){var i;a.data.item&&a.data.item.items&&((i=t.navList).push.apply(i,Object(o["a"])(a.data.item.items)),t.loadData())}))},loadData:function(t){var a=this,i=this.navList[this.current],e=i.cid;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post("/cms.pinduoduo.list",{ipage:this.page.ipage,cid:e,sort:"day_sales",pic_size:"300"}).then((function(i){var e;(a.loading=!1,i.data.items)?"tabChange"===t?a.items=i.data.items:(e=a.items).push.apply(e,Object(o["a"])(i.data.items)):a.page.hasMore=!1})))},changeTab:function(t,a,i){this.current=a,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(a,i){t.push({name:a.cid,cid:a.cid,label:a.name})})),t}}},g=b,k=(i("ff3b"),i("2877")),C=Object(k["a"])(g,n,s,!1,null,"77357a6a",null);a["default"]=C.exports},ff3b:function(t,a,i){"use strict";var e=i("5911"),n=i.n(e);n.a}}]);