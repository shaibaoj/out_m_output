(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86be1140"],{1857:function(t,e,o){var a,s,i;(function(){(function(n,c){s=[e,o("a62b"),o("0f33"),o("8bbe")],a=c,i="function"===typeof a?a.apply(e,s):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}t.default=o.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"24c3":function(t,e,o){"use strict";var a=o("782b"),s=o.n(a);s.a},"50f4":function(t,e,o){},"782b":function(t,e,o){},"8bbe":function(t,e,o){},a012:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.$_onEndReached}},[o("div",{staticClass:"header"},[o("div",{staticClass:"category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.classify}},[o("img",{staticClass:"icon",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"}})]),o("div",{staticClass:"rolling-search",on:{click:t.search}},[o("div",[o("md-icon",{attrs:{size:"lg",name:"search",color:"#999"}})],1),o("div",{staticClass:"hot-item",on:{click:t.search}},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),t._l(t.components,(function(t,e){return o("component-item",{key:e,attrs:{"item-data":t}})})),o("div",{staticClass:"product-box"},[o("div",{staticClass:"group-name"},[o("span",[t._v("热门推荐")])]),o("div",{staticClass:"product-container"},t._l(t.items,(function(t,e){return o("goods",{key:e,attrs:{"item-data":t,"goods-type":"column"}})})),1)]),o("load-more",{attrs:{visible:t.loading}}),o("back-top",{attrs:{distance:0,bottom:100,right:20}})],2),o("md-popup",{attrs:{closable:!0,"mask-closable":!0},model:{value:t.modal.dialog,callback:function(e){t.$set(t.modal,"dialog",e)},expression:"modal.dialog"}},[o("div",{staticClass:"modal-custom",on:{click:function(e){return t.copyPop()}}},[o("img",{staticClass:"bg",attrs:{src:t.modal.bg}}),o("div",{staticClass:"modal-custom-code"},[t._v(t._s(t.modal.copy_content))])])])],1)},s=[],i=o("21a1"),n=o.n(i),c=(o("f548"),o("1857")),d=o.n(c),l=o("2f41"),r=o.n(l),p=o("1cbc"),u=o.n(p),m=o("ace7"),h=o.n(m),g=o("38a8"),f=o.n(g),_=o("e91d"),y=o.n(_),v=o("db8e"),b=o("d483"),x=o("a288"),w=(o("5880"),o("e1b0")),k=o("3919"),C=o("b0c2"),T=o.n(C),q={components:{[y.a.name]:y.a,loadMore:v["a"],componentItem:b["a"],goods:x["a"],infiniteLoading:k["a"],backTop:w["a"],[f.a.name]:f.a,[h.a.name]:h.a,[u.a.name]:u.a,[r.a.name]:r.a,[d.a.name]:d.a},data(){return{scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created(){},mounted(){this.query()},methods:{navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached(){this.loading||this.queryItems()},queryItems(){this.query_goods_url&&!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then(t=>{t.data.items&&t.data.items?this.items.push(...t.data.items):this.page.hasMore=!1,this.loading=!1}))},query(){this.$http.post("/app.page.page",{page_id:"youdanhui"}).then(t=>{t.data.components&&t.data.components&&this.components.push(...t.data.components),t.data.items&&t.data.items.url&&(this.query_goods_url=t.data.items.url,this.queryItems(),this.queryNotice())})},queryNotice(){this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then(t=>{t.data.item&&t.data.item.url&&(t.data.item.code?this.modal.bg=t.data.item.window_tkl_img:this.modal.bg=t.data.item.window_img,t.data.item.url&&(this.modal.url=t.data.item.url),this.modal.copy_content=t.data.item.code,this.modal.dialog=!0)})},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll(t){this.scrollTop=t.scrollTop},copyPop(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent(){this.modal.copy_content;const t=this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new T.a(".modal-custom",{text(){return t}});console.log("adfasdfasd"),e.on("success",t=>{console.log(t),t.clearSelection(),e.destroy(),this.copied=!0,this.modal.dialog=!1,n.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout(()=>{this.copied=!1},2e3)}),e.on("error",(function(t){console.log(t)}))}}},M=q,$=(o("24c3"),o("9ca4")),P=Object($["a"])(M,a,s,!1,null,"4c07e78b",null);e["default"]=P.exports},a62b:function(t,e,o){var a,s,i;(function(){(function(n,c){s=[e,o("0f33"),o("50f4")],a=c,i="function"===typeof a?a.apply(e,s):a,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:"更多加载中..."},finishedText:{type:String,default:"全部已加载"},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var n="function"===typeof t.exports?t.exports.options:t.exports;n.render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},n.staticRenderFns=[]}}]);