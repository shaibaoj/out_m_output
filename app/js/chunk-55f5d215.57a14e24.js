(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f5d215"],{"0a5d":function(t,e,o){},"2d9a":function(t,e,o){var a,n,i;(function(){(function(s,c){n=[e,o("599c"),o("cdfc"),o("9c60")],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}t.default=o.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"599c":function(t,e,o){var a,n,i;(function(){(function(s,c){n=[e,o("9348"),o("cdfc"),o("5a58")],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:(0,e.t)("md.scroll_view.more.loading")},finishedText:{type:String,default:(0,e.t)("md.scroll_view.more.allLoaded")},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var s="function"===typeof t.exports?t.exports.options:t.exports;s.render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},s.staticRenderFns=[]},"5a58":function(t,e,o){},9348:function(t,e,o){var a,n,i;(function(s,c){n=[e,o("b99d")],a=c,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLocale=t.t=void 0;var o=a(e);function a(t){return t&&t.__esModule?t:{default:t}}var n=o.default;function i(t,e){return t&&e?t.replace(/\{(\w+)\}/g,(function(t,o){return e[o]})):t}var s=t.t=function(t,e){for(var o=void 0,a=t.split("."),s=n,c=0,r=a.length;c<r;c++){var d=a[c];if(o=s[d],c===r-1)return i(o,e);if(!o)return"";s=o}return""},c=t.setLocale=function(t){n=t||n};t.default={setLocale:c,t:s}}))},"9c60":function(t,e,o){},a012:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.$_onEndReached}},[o("div",{staticClass:"header"},[o("div",{staticClass:"category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:t.classify}},[o("img",{staticClass:"icon",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"}})]),o("div",{staticClass:"rolling-search",on:{click:t.search}},[o("div",[o("md-icon",{attrs:{size:"lg",name:"search",color:"#999"}})],1),o("div",{staticClass:"hot-item",on:{click:t.search}},[t._v("输入商品名或粘贴宝贝标题搜索")])])]),t._l(t.components,(function(t,e){return o("component-item",{key:e,attrs:{"item-data":t}})})),o("div",{staticClass:"product-box"},[o("div",{staticClass:"group-name"},[o("span",[t._v("热门推荐")])]),o("div",{staticClass:"product-container"},t._l(t.items,(function(t,e){return o("goods",{key:e,attrs:{"item-data":t,"goods-type":"column"}})})),1)]),o("load-more",{attrs:{visible:t.loading}}),o("back-top",{attrs:{distance:0,bottom:100,right:20}})],2),o("md-popup",{attrs:{closable:!0,"mask-closable":!0},model:{value:t.modal.dialog,callback:function(e){t.$set(t.modal,"dialog",e)},expression:"modal.dialog"}},[o("div",{staticClass:"modal-custom",on:{click:function(e){return t.copyPop()}}},[o("img",{staticClass:"bg",attrs:{src:t.modal.bg}}),o("div",{staticClass:"modal-custom-code"},[t._v(t._s(t.modal.copy_content))])])])],1)},n=[],i=o("1861"),s=o.n(i),c=(o("a481"),o("2d9a")),r=o.n(c),d=o("556d"),l=o.n(d),u=o("7b38"),p=o.n(u),m=o("750b"),h=o.n(m),f=o("aed6"),g=o.n(f),y=o("06cd"),_=o.n(y),v=o("db8e"),b=o("d483"),x=o("a288"),w=(o("5880"),o("e1b0")),k=o("3919"),C=o("b0c2"),M=o.n(C),P={components:{[_.a.name]:_.a,loadMore:v["a"],componentItem:b["a"],goods:x["a"],infiniteLoading:k["a"],backTop:w["a"],[g.a.name]:g.a,[h.a.name]:h.a,[p.a.name]:p.a,[l.a.name]:l.a,[r.a.name]:r.a},data(){return{scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0}},computed:{},created(){},mounted(){this.query()},methods:{navToPage(t,e){this.$nextTick(()=>{this.$router.push({path:t,query:e||{}})})},classify:function(){this.navToPage("/category")},search:function(){this.navToPage("/search/search")},$_onEndReached(){this.loading||this.queryItems()},queryItems(){this.query_goods_url&&!1!==this.page.hasMore&&(this.loading=!0,this.page.ipage=this.page.ipage+1,this.$http.post(this.query_goods_url,{ipage:this.page.ipage,pic_size:"300"}).then(t=>{t.data.items?this.items.push(...t.data.items):this.page.hasMore=!1,this.loading=!1}))},query(){this.$http.post("/app.page.page",{page_id:"youdanhui"}).then(t=>{t.data.components&&t.data.components&&this.components.push(...t.data.components),t.data.items&&t.data.items.url&&(this.query_goods_url=t.data.items.url,this.queryItems(),this.queryNotice())})},queryNotice(){this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then(t=>{t.data.item&&t.data.item.url&&(t.data.item.code?this.modal.bg=t.data.item.window_tkl_img:this.modal.bg=t.data.item.window_img,t.data.item.url&&(this.modal.url=t.data.item.url),this.modal.copy_content=t.data.item.code,this.modal.dialog=!0)})},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll(t){this.scrollTop=t.scrollTop},copyPop(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent(){this.modal.copy_content;const t=this.modal.copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new M.a(".modal-custom",{text(){return t}});console.log("adfasdfasd"),e.on("success",t=>{console.log(t),t.clearSelection(),e.destroy(),this.copied=!0,this.modal.dialog=!1,s.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout(()=>{this.copied=!1},2e3)}),e.on("error",(function(t){console.log(t)}))}}},T=P,q=(o("cdaa"),o("2877")),$=Object(q["a"])(T,a,n,!1,null,"da32f0fe",null);e["default"]=$.exports},b99d:function(t,e,o){var a,n,i;(function(o,s){n=[e],a=s,i="function"===typeof a?a.apply(e,n):a,void 0===i||(t.exports=i)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={md:{action_sheet:{cancel:"取消"},captcha:{sendCaptcha:"发送验证码",countdown:"{$1}秒后重发"},cashier:{payCash:"支付金额(元)",confirmPay:"确定支付",morePayWays:"更多支付方式",pay:"支付",payResultSearch:"支付结果查询中...",paySuccess:"支付成功",payFail:"支付失败，请稍后重试",confirm:"我知道了"},date_picker:{year:"年",month:"月",day:"日",hour:"时",minute:"分"},dialog:{confirm:"确定",cancel:"取消"},number_keyboard:{confirm:"确定"},picker:{confirm:"确认",cancel:"取消"},result_page:{networkError:"网络连接异常",noInformation:"暂无信息",lostWay:"您要访问的页面已丢失"},scroll_view:{more:{loading:"更多加载中...",allLoaded:"全部已加载"},refresh:{pullDownRefresh:"下拉刷新",freedRefresh:"释放刷新",refreshing:"刷新中..."}},selector:{cancel:"取消"},tab_picker:{choose:"请选择"}}}}))},cdaa:function(t,e,o){"use strict";o("0a5d")}}]);