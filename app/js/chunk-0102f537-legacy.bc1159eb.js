(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0102f537"],{"0a5d":function(t,e,o){},"2d9a":function(t,e,o){var a,n,i;(function(){(function(c,s){n=[e,o("599c"),o("cdfc"),o("9c60")],a=s,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}t.default=o.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"599c":function(t,e,o){var a,n,i;(function(){(function(c,s){n=[e,o("9348"),o("cdfc"),o("5a58")],a=s,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:(0,e.t)("md.scroll_view.more.loading")},finishedText:{type:String,default:(0,e.t)("md.scroll_view.more.allLoaded")},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var c="function"===typeof t.exports?t.exports.options:t.exports;c.render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},c.staticRenderFns=[]},"5a58":function(t,e,o){},9348:function(t,e,o){var a,n,i;(function(c,s){n=[e,o("b99d")],a=s,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLocale=t.t=void 0;var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}var n=o.default;function i(t,e){return t&&e?t.replace(/\{(\w+)\}/g,(function(t,o){return e[o]})):t}var c=t.t=function(t,e){for(var o=void 0,a=t.split("."),c=n,s=0,r=a.length;s<r;s++){var l=a[s];if(o=c[l],s===r-1)return i(o,e);if(!o)return"";c=o}return""},s=t.setLocale=function(t){n=t||n};t.default={setLocale:s,t:c}}))},"9c60":function(t,e,o){},a012:function(t,e,o){"use strict";o.r(e);var a,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.$_onEndReached}},[o("div",{staticClass:"header"},[o("div",{staticClass:"category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.classify}},[o("img",{staticClass:"icon",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"}})]),o("div",{staticClass:"rolling-search",on:{click:t.search}},[o("div",[o("md-icon",{attrs:{size:"lg",name:"search",color:"#999"}})],1),o("div",{staticClass:"hot-item",on:{click:t.search}},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),t._l(t.components,(function(t,e){return o("component-item",{key:e,attrs:{"item-data":t}})})),o("div",{staticClass:"product-box"},[o("div",{staticClass:"group-name"},[o("span",[t._v("热门推荐")])]),o("div",{staticClass:"product-container"},t._l(t.items,(function(t,e){return o("goods",{key:e,attrs:{"item-data":t,"goods-type":"column"}})})),1)]),o("load-more",{attrs:{visible:t.loading}}),o("back-top",{attrs:{distance:0,bottom:100,right:20}})],2),o("md-popup",{attrs:{closable:!0,"mask-closable":!0},model:{value:t.modal.dialog,callback:function(e){t.$set(t.modal,"dialog",e)},expression:"modal.dialog"}},[o("div",{staticClass:"modal-custom",on:{click:function(e){return t.copyPop()}}},[o("img",{staticClass:"bg",attrs:{src:t.modal.bg}}),o("div",{staticClass:"modal-custom-code"},[t._v(t._s(t.modal.copy_content))])])])],1)},i=[],c=o("1861"),s=o.n(c),r=(o("a481"),o("75fc")),l=o("bd86"),d=o("2d9a"),u=o.n(d),p=o("556d"),f=o.n(p),m=o("7b38"),h=o.n(m),g=o("750b"),y=o.n(g),_=o("aed6"),v=o.n(_),b=(o("7f7f"),o("06cd")),x=o.n(b),w=o("db8e"),k=o("d483"),O=o("a288"),j=(o("5880"),o("e1b0")),C=o("3919"),M=o("b0c2"),P=o.n(M),T={components:(a={},Object(l["a"])(a,x.a.name,x.a),Object(l["a"])(a,"loadMore",w["a"]),Object(l["a"])(a,"componentItem",k["a"]),Object(l["a"])(a,"goods",O["a"]),Object(l["a"])(a,"infiniteLoading",C["a"]),Object(l["a"])(a,"backTop",j["a"]),Object(l["a"])(a,v.a.name,v.a),Object(l["a"])(a,y.a.name,y.a),Object(l["a"])(a,h.a.name,h.a),Object(l["a"])(a,f.a.name,f.a),Object(l["a"])(a,u.a.name,u.a),a),data:function(){return{scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created:function(){},mounted:function(){this.query()},methods:{navToPage:function(t,e){var o=this;this.$nextTick((function(){o.$router.push({path:t,query:e||{}})}))},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached:function(){this.loading||this.queryItems()},queryItems:function(){var t=this;this.query_goods_url&&!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then((function(e){var o;e.data.items?(o=t.items).push.apply(o,Object(r["a"])(e.data.items)):t.page.hasMore=!1;t.loading=!1})))},query:function(){var t=this;this.$http.post("/app.page.page",{page_id:"youdanhui"}).then((function(e){var o;e.data.components&&e.data.components&&(o=t.components).push.apply(o,Object(r["a"])(e.data.components));e.data.items&&e.data.items.url&&(t.query_goods_url=e.data.items.url,t.queryItems(),t.queryNotice())}))},queryNotice:function(){var t=this;this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then((function(e){e.data.item&&e.data.item.url&&(e.data.item.code?t.modal.bg=e.data.item.window_tkl_img:t.modal.bg=e.data.item.window_img,e.data.item.url&&(t.modal.url=e.data.item.url),t.modal.copy_content=e.data.item.code,t.modal.dialog=!0)}))},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll:function(t){this.scrollTop=t.scrollTop},copyPop:function(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent:function(){var t=this,e=(this.modal.copy_content,this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")),o=new P.a(".modal-custom",{text:function(){return e}});console.log("adfasdfasd"),o.on("success",(function(e){console.log(e),e.clearSelection(),o.destroy(),t.copied=!0,t.modal.dialog=!1,s.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout((function(){t.copied=!1}),2e3)})),o.on("error",(function(t){console.log(t)}))}}},q=T,$=(o("cdaa"),o("2877")),R=Object($["a"])(q,n,i,!1,null,"da32f0fe",null);e["default"]=R.exports},b99d:function(t,e,o){var a,n,i;(function(o,c){n=[e],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={md:{action_sheet:{cancel:"取消"},captcha:{sendCaptcha:"发送验证码",countdown:"{$1}秒后重发"},cashier:{payCash:"支付金额(元)",confirmPay:"确定支付",morePayWays:"更多支付方式",pay:"支付",payResultSearch:"支付结果查询中...",paySuccess:"支付成功",payFail:"支付失败，请稍后重试",confirm:"我知道了"},date_picker:{year:"年",month:"月",day:"日",hour:"时",minute:"分"},dialog:{confirm:"确定",cancel:"取消"},number_keyboard:{confirm:"确定"},picker:{confirm:"确认",cancel:"取消"},result_page:{networkError:"网络连接异常",noInformation:"暂无信息",lostWay:"您要访问的页面已丢失"},scroll_view:{more:{loading:"更多加载中...",allLoaded:"全部已加载"},refresh:{pullDownRefresh:"下拉刷新",freedRefresh:"释放刷新",refreshing:"刷新中..."}},selector:{cancel:"取消"},tab_picker:{choose:"请选择"}}}}))},cdaa:function(t,e,o){"use strict";o("0a5d")}}]);