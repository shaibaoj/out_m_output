(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-194770d2"],{"2d9a":function(t,o,e){var a,n,i;(function(){(function(s,c){n=[o,e("599c"),e("cdfc"),e("9c60")],a=c,i="function"===typeof a?a.apply(o,n):a,void 0===i||(t.exports=i)})(0,(function(t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(o);function a(t){return t&&t.__esModule?t:{default:t}}t.default=e.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"599c":function(t,o,e){var a,n,i;(function(){(function(s,c){n=[o,e("cdfc"),e("5a58")],a=c,i="function"===typeof a?a.apply(o,n):a,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:"更多加载中..."},finishedText:{type:String,default:"全部已加载"},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var s="function"===typeof t.exports?t.exports.options:t.exports;s.render=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},s.staticRenderFns=[]},"5a58":function(t,o,e){},"5cd2":function(t,o,e){"use strict";var a=e("fd50"),n=e.n(a);n.a},"9c60":function(t,o,e){},a012:function(t,o,e){"use strict";e.r(o);var a,n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.$_onEndReached}},[e("div",{staticClass:"header"},[e("div",{staticClass:"category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.classify}},[e("img",{staticClass:"icon",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"}})]),e("div",{staticClass:"rolling-search",on:{click:t.search}},[e("div",[e("md-icon",{attrs:{size:"lg",name:"search",color:"#999"}})],1),e("div",{staticClass:"hot-item",on:{click:t.search}},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),t._l(t.components,(function(t,o){return e("component-item",{key:o,attrs:{"item-data":t}})})),e("div",{staticClass:"product-box"},[e("div",{staticClass:"group-name"},[e("span",[t._v("热门推荐")])]),e("div",{staticClass:"product-container"},t._l(t.items,(function(t,o){return e("goods",{key:o,attrs:{"item-data":t,"goods-type":"column"}})})),1)]),e("load-more",{attrs:{visible:t.loading}}),e("back-top",{attrs:{distance:0,bottom:100,right:20}})],2),e("md-popup",{attrs:{closable:!0,"mask-closable":!0},model:{value:t.modal.dialog,callback:function(o){t.$set(t.modal,"dialog",o)},expression:"modal.dialog"}},[e("div",{staticClass:"modal-custom",on:{click:function(o){return t.copyPop()}}},[e("img",{staticClass:"bg",attrs:{src:t.modal.bg}}),e("div",{staticClass:"modal-custom-code"},[t._v(t._s(t.modal.copy_content))])])])],1)},i=[],s=e("1861"),c=e.n(s),d=(e("a481"),e("75fc")),r=e("bd86"),l=e("2d9a"),u=e.n(l),p=e("556d"),m=e.n(p),f=e("7b38"),h=e.n(f),g=e("750b"),y=e.n(g),_=e("aed6"),v=e.n(_),b=(e("7f7f"),e("06cd")),x=e.n(b),O=e("db8e"),w=e("d483"),j=e("a288"),k=(e("5880"),e("e1b0")),C=e("3919"),T=e("b0c2"),q=e.n(T),M={components:(a={},Object(r["a"])(a,x.a.name,x.a),Object(r["a"])(a,"loadMore",O["a"]),Object(r["a"])(a,"componentItem",w["a"]),Object(r["a"])(a,"goods",j["a"]),Object(r["a"])(a,"infiniteLoading",C["a"]),Object(r["a"])(a,"backTop",k["a"]),Object(r["a"])(a,v.a.name,v.a),Object(r["a"])(a,y.a.name,y.a),Object(r["a"])(a,h.a.name,h.a),Object(r["a"])(a,m.a.name,m.a),Object(r["a"])(a,u.a.name,u.a),a),data:function(){return{scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created:function(){},mounted:function(){this.query()},methods:{navToPage:function(t,o){var e=this;this.$nextTick((function(){e.$router.push({path:t,query:o||{}})}))},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached:function(){this.loading||this.queryItems()},queryItems:function(){var t=this;this.query_goods_url&&!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then((function(o){var e;o.data.items?(e=t.items).push.apply(e,Object(d["a"])(o.data.items)):t.page.hasMore=!1;t.loading=!1})))},query:function(){var t=this;this.$http.post("/app.page.page",{page_id:"youdanhui"}).then((function(o){var e;o.data.components&&o.data.components&&(e=t.components).push.apply(e,Object(d["a"])(o.data.components));o.data.items&&o.data.items.url&&(t.query_goods_url=o.data.items.url,t.queryItems(),t.queryNotice())}))},queryNotice:function(){var t=this;this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then((function(o){o.data.item.url&&(o.data.item.code?t.modal.bg=o.data.item.window_tkl_img:t.modal.bg=o.data.item.window_img,o.data.item.url&&(t.modal.url=o.data.item.url),t.modal.copy_content=o.data.item.code,t.modal.dialog=!0)}))},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll:function(t){this.scrollTop=t.scrollTop},copyPop:function(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent:function(){var t=this,o=(this.modal.copy_content,this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")),e=new q.a(".modal-custom",{text:function(){return o}});console.log("adfasdfasd"),e.on("success",(function(o){console.log(o),o.clearSelection(),e.destroy(),t.copied=!0,t.modal.dialog=!1,c.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout((function(){t.copied=!1}),2e3)})),e.on("error",(function(t){console.log(t)}))}}},$=M,P=(e("5cd2"),e("2877")),S=Object(P["a"])($,n,i,!1,null,"32c6f21b",null);o["default"]=S.exports},fd50:function(t,o,e){}}]);