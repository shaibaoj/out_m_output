(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cee8736"],{"0522":function(t,e,o){"use strict";var a=o("e152"),n=o.n(a);n.a},1857:function(t,e,o){var a,n,i;(function(){(function(s,c){n=[e,o("a62b"),o("0f33"),o("8bbe")],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}t.default=o.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"50f4":function(t,e,o){},"8bbe":function(t,e,o){},a012:function(t,e,o){"use strict";o.r(e);var a,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.$_onEndReached}},[o("div",{staticClass:"header"},[o("div",{staticClass:"category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.classify}},[o("img",{staticClass:"icon",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"}})]),o("div",{staticClass:"rolling-search",on:{click:t.search}},[o("div",[o("md-icon",{attrs:{size:"lg",name:"search",color:"#999"}})],1),o("div",{staticClass:"hot-item",on:{click:t.search}},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),t._l(t.components,(function(t,e){return o("component-item",{key:e,attrs:{"item-data":t}})})),o("div",{staticClass:"product-box"},[o("div",{staticClass:"group-name"},[o("span",[t._v("热门推荐")])]),o("div",{staticClass:"product-container"},t._l(t.items,(function(t,e){return o("goods",{key:e,attrs:{"item-data":t,"goods-type":"column"}})})),1)]),o("load-more",{attrs:{visible:t.loading}}),o("back-top",{attrs:{distance:0,bottom:100,right:20}})],2),o("md-popup",{attrs:{closable:!0,"mask-closable":!0},model:{value:t.modal.dialog,callback:function(e){t.$set(t.modal,"dialog",e)},expression:"modal.dialog"}},[o("div",{staticClass:"modal-custom",on:{click:function(e){return t.copyPop()}}},[o("img",{staticClass:"bg",attrs:{src:t.modal.bg}}),o("div",{staticClass:"modal-custom-code"},[t._v(t._s(t.modal.copy_content))])])])],1)},i=[],s=o("21a1"),c=o.n(s),r=(o("f548"),o("1e49")),l=o("73d1"),d=o("1857"),u=o.n(d),p=o("2f41"),m=o.n(p),f=o("1cbc"),h=o.n(f),g=o("ace7"),y=o.n(g),_=o("38a8"),v=o.n(_),b=(o("cc57"),o("e91d")),x=o.n(b),O=o("db8e"),w=o("d483"),j=o("a288"),k=(o("5880"),o("e1b0")),C=o("3919"),T=o("b0c2"),q=o.n(T),M={components:(a={},Object(l["a"])(a,x.a.name,x.a),Object(l["a"])(a,"loadMore",O["a"]),Object(l["a"])(a,"componentItem",w["a"]),Object(l["a"])(a,"goods",j["a"]),Object(l["a"])(a,"infiniteLoading",C["a"]),Object(l["a"])(a,"backTop",k["a"]),Object(l["a"])(a,v.a.name,v.a),Object(l["a"])(a,y.a.name,y.a),Object(l["a"])(a,h.a.name,h.a),Object(l["a"])(a,m.a.name,m.a),Object(l["a"])(a,u.a.name,u.a),a),data:function(){return{scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created:function(){},mounted:function(){this.query()},methods:{navToPage:function(t,e){var o=this;this.$nextTick((function(){o.$router.push({path:t,query:e||{}})}))},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached:function(){this.loading||this.queryItems()},queryItems:function(){var t=this;this.query_goods_url&&!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then((function(e){var o;e.data.items&&e.data.items?(o=t.items).push.apply(o,Object(r["a"])(e.data.items)):t.page.hasMore=!1;t.loading=!1})))},query:function(){var t=this;this.$http.post("/app.page.page",{page_id:"youdanhui"}).then((function(e){var o;e.data.components&&e.data.components&&(o=t.components).push.apply(o,Object(r["a"])(e.data.components));e.data.items&&e.data.items.url&&(t.query_goods_url=e.data.items.url,t.queryItems(),t.queryNotice())}))},queryNotice:function(){var t=this;this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then((function(e){e.data.item&&e.data.item.url&&(e.data.item.code?t.modal.bg=e.data.item.window_tkl_img:t.modal.bg=e.data.item.window_img,e.data.item.url&&(t.modal.url=e.data.item.url),t.modal.copy_content=e.data.item.code,t.modal.dialog=!0)}))},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll:function(t){this.scrollTop=t.scrollTop},copyPop:function(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent:function(){var t=this,e=(this.modal.copy_content,this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")),o=new q.a(".modal-custom",{text:function(){return e}});console.log("adfasdfasd"),o.on("success",(function(e){console.log(e),e.clearSelection(),o.destroy(),t.copied=!0,t.modal.dialog=!1,c.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout((function(){t.copied=!1}),2e3)})),o.on("error",(function(t){console.log(t)}))}}},$=M,P=(o("0522"),o("9ca4")),S=Object(P["a"])($,n,i,!1,null,"94a6f85c",null);e["default"]=S.exports},a62b:function(t,e,o){var a,n,i;(function(){(function(s,c){n=[e,o("0f33"),o("50f4")],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:"更多加载中..."},finishedText:{type:String,default:"全部已加载"},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var s="function"===typeof t.exports?t.exports.options:t.exports;s.render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},s.staticRenderFns=[]},e152:function(t,e,o){}}]);