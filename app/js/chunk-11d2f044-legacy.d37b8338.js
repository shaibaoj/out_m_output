(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d2f044"],{"234b":function(t,e,a){},"26c9":function(t,e,a){var i,n,s;(function(){(function(o,r){n=[e,a("556d"),a("cdfc"),a("234b")],i=r,s="function"===typeof i?i.apply(e,n):i,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(e);function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t.default={name:"md-tab-bar",components:n({},a.default.name,a.default),props:{value:{type:[String,Number],default:""},items:{type:Array,default:function(){return[]}},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:100},immediate:{type:Boolean,default:!1}},data:function(){return{currentName:"",wrapperW:0,contentW:0,inkWidth:0,inkPos:0,scrollerTmpKey:Date.now(),maskStartShown:!1,maskEndShown:!0}},computed:{scrollable:function(){return this.contentW>this.wrapperW},currentIndex:function(){for(var t=0,e=this.items.length;t<e;t++)if(this.items[t].name===this.currentName)return t},currentTab:function(){if(this.currentIndex)return this.items[this.currentIndex]}},watch:{value:{immediate:!0,handler:function(t){t!==this.currentName&&(this.currentName=t)}},inkWidth:function(){this.$nextTick((function(){this.reflow()}))},items:function(){this.$nextTick((function(){this.reflow()}))},currentIndex:function(){this.$nextTick((function(){this.reflow()}))},scrollable:function(){this.scrollerTmpKey=Date.now()}},created:function(){""===this.currentName&&this.items.length&&(this.currentName=this.items[0].name,this.$emit("change",this.items[0],0,0))},mounted:function(){this.$_resizeEnterBehavior()},activated:function(){this.$_resizeEnterBehavior()},deactivated:function(){this.$_resizeLeaveBehavior()},beforeDestroy:function(){this.$_resizeLeaveBehavior()},methods:{$_onScroll:function(t){var e=t.scrollLeft;this.maskStartShown=e>0,e>=this.$refs.scroller.contentW-this.$refs.scroller.containerW?this.maskEndShown=!1:this.maskEndShown=!0},$_onClick:function(t,e){t.disabled||(this.$emit("change",t,e,this.currentIndex),this.currentName=t.name,this.$emit("input",t.name))},$_resizeEnterBehavior:function(){var t=this;window.addEventListener("resize",this.reflow),this.reflow(),this.immediate&&this.$nextTick((function(){t.$emit("change",t.items[t.currentIndex],t.currentIndex)}))},$_resizeLeaveBehavior:function(){window.removeEventListener("resize",this.reflow)},reflow:function(){var t=this;if(this.$refs.items&&0!==this.$refs.items.length){var e=this.$refs.wrapper.getBoundingClientRect();this.wrapperW=e.width;for(var a=0,i=0,n=this.items.length;i<n;i++){var s=this.$refs.items[i].getBoundingClientRect(),o=s.width;a+=o}this.contentW=a,this.$refs.scroller.reflowScroller(),this.$nextTick((function(){if(t.$refs.items&&t.$refs.items[t.currentIndex]){var e=t.$refs.items[t.currentIndex];t.inkWidth=e.offsetWidth*t.inkLength/100,t.inkPos=e.offsetLeft+(e.offsetWidth-t.inkWidth)/2;var a=t.$refs.items[t.currentIndex-1],i=t.$refs.items[t.currentIndex+1];if(a)if(i){var n=t.$refs.wrapper.getBoundingClientRect(),s=a.getBoundingClientRect(),o=i.getBoundingClientRect();s&&s.left<n.left?t.$refs.scroller.scrollTo(a.offsetLeft,0,!0):o&&o.right>n.right&&t.$refs.scroller.scrollTo(i.offsetLeft+i.offsetWidth-t.wrapperW,0,!0)}else t.$refs.scroller.scrollTo(t.contentW,0,!0);else t.$refs.scroller.scrollTo(0,0,!0)}}))}}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"md-tab-bar"},[a("div",{ref:"wrapper",staticClass:"md-tab-bar-inner"},[t.scrollable?[a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStartShown,expression:"maskStartShown"}],staticClass:"md-tab-bar-start"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskEndShown,expression:"maskEndShown"}],staticClass:"md-tab-bar-end"})]:t._e(),t._v(" "),a("md-scroll-view",{key:t.scrollerTmpKey,ref:"scroller",attrs:{"scrolling-x":t.scrollable,"scrolling-y":!1},on:{scroll:t.$_onScroll}},[a("div",{staticClass:"md-tab-bar-list",style:{width:t.contentW+"px"}},t._l(t.items,(function(e,i){return a("a",{key:e.name,ref:"items",refInFor:!0,staticClass:"md-tab-bar-item",class:{"is-active":t.currentName===e.name,"is-disabled":!!e.disabled},on:{click:function(a){return t.$_onClick(e,i)}}},[t._t("item",[t._v(t._s(e.label))],{item:e,items:t.items,index:i,currentName:t.currentName})],2)})),0),t._v(" "),t.hasInk?a("span",{staticClass:"md-tab-bar-ink",class:{"is-disabled":t.currentTab&&t.currentTab.disabled},style:{width:t.inkWidth+"px",transform:"translateX("+t.inkPos+"px)"}}):t._e()])],2)])},o.staticRenderFns=[]},"2d9a":function(t,e,a){var i,n,s;(function(){(function(o,r){n=[e,a("599c"),a("cdfc"),a("9c60")],i=r,s="function"===typeof i?i.apply(e,n):i,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(e);function i(t){return t&&t.__esModule?t:{default:t}}t.default=a.default}))})(),t.exports.__esModule&&(t.exports=t.exports.default);"function"===typeof t.exports?t.exports.options:t.exports},"599c":function(t,e,a){var i,n,s;(function(){(function(o,r){n=[e,a("9348"),a("cdfc"),a("5a58")],i=r,s="function"===typeof i?i.apply(e,n):i,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-scroll-view-more",props:{loadingText:{type:String,default:(0,e.t)("md.scroll_view.more.loading")},finishedText:{type:String,default:(0,e.t)("md.scroll_view.more.allLoaded")},isFinished:{type:Boolean,default:!1}}}}))})(),t.exports.__esModule&&(t.exports=t.exports.default);var o="function"===typeof t.exports?t.exports.options:t.exports;o.render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-scroll-view-more"},[t.isFinished?[t._v("\n    "+t._s(t.finishedText)+"\n  ")]:[t._v("\n    "+t._s(t.loadingText)+"\n  ")]],2)},o.staticRenderFns=[]},"5a58":function(t,e,a){},9348:function(t,e,a){var i,n,s;(function(o,r){n=[e,a("b99d")],i=r,s="function"===typeof i?i.apply(e,n):i,void 0===s||(t.exports=s)})(0,(function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLocale=t.t=void 0;var a=i(e);function i(t){return t&&t.__esModule?t:{default:t}}var n=a.default;function s(t,e){return t&&e?t.replace(/\{(\w+)\}/g,(function(t,a){return e[a]})):t}var o=t.t=function(t,e){for(var a=void 0,i=t.split("."),o=n,r=0,c=i.length;r<c;r++){var l=i[r];if(a=o[l],r===c-1)return s(a,e);if(!a)return"";o=a}return""},r=t.setLocale=function(t){n=t||n};t.default={setLocale:r,t:o}}))},"9c60":function(t,e,a){},a608:function(t,e,a){"use strict";a("b24b")},b24b:function(t,e,a){},b99d:function(t,e,a){var i,n,s;(function(a,o){n=[e],i=o,s="function"===typeof i?i.apply(e,n):i,void 0===s||(t.exports=s)})(0,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={md:{action_sheet:{cancel:"取消"},captcha:{sendCaptcha:"发送验证码",countdown:"{$1}秒后重发"},cashier:{payCash:"支付金额(元)",confirmPay:"确定支付",morePayWays:"更多支付方式",pay:"支付",payResultSearch:"支付结果查询中...",paySuccess:"支付成功",payFail:"支付失败，请稍后重试",confirm:"我知道了"},date_picker:{year:"年",month:"月",day:"日",hour:"时",minute:"分"},dialog:{confirm:"确定",cancel:"取消"},number_keyboard:{confirm:"确定"},picker:{confirm:"确认",cancel:"取消"},result_page:{networkError:"网络连接异常",noInformation:"暂无信息",lostWay:"您要访问的页面已丢失"},scroll_view:{more:{loading:"更多加载中...",allLoaded:"全部已加载"},refresh:{pullDownRefresh:"下拉刷新",freedRefresh:"释放刷新",refreshing:"刷新中..."}},selector:{cancel:"取消"},tab_picker:{choose:"请选择"}}}}))},f685:function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[a("div",{staticClass:"hb"},[a("div",{staticClass:"hb-bg"},[a("div",{staticClass:"hb-title"},[t._v("红包小助手")]),a("div",{staticClass:"hb-content"},[a("div",{staticClass:"hb-lf"},[a("h1",{staticClass:"hb-lf-h1"},[t._v("天猫")]),a("div",{staticClass:"hb-lf-text"},[t._v("红包天天领，直接当钱花")]),a("div",{staticClass:"hb-lf-text"},[t._v("最高1111元，金额可叠加")])]),a("div",{staticClass:"hb-r"},[a("div",{staticClass:"hb-top"},[a("div",{staticClass:"hb-btn",on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",promotion_scene_id:"20150318020001157",click_url:"https://1111.tmall.com/union?spm=a219t.14279761.0.0.78c66a15ZJpinv&wh_alimama=true&disableNav=YES"})}}},[t._v("去领取")])]),a("div",{staticClass:"hb-r-txt"},[a("div",[t._v("距离结束:12:03:01")])])])])])]),a("div",{staticClass:"huodong"},[a("ul",[a("li",[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eac940b6ad1163.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",promotion_scene_id:"20150318020001157",click_url:"https://1111.tmall.com/union?spm=a219t.14279761.0.0.78c66a15ZJpinv&wh_alimama=true&disableNav=YES"})}}})]),a("li",[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eac9f1b6d51993.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",click_url:"https://h5.m.jd.com/babelDiy/Zeus/Vfr818K8Q69jt2MqesNiKQTJv5L/index.html?babelChannel=ttt2&ad_od=4&cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_49131_&utm_term=8bb2d760fcfd492bab46237564dc9453"})}}})]),a("li",[a("div",{staticClass:"more"},[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eaca942cca6373.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",site_id:"5153",url:"https://m.xiaomiyoupin.com/w/universal?_rt=weex&pageid=4527"})}}}),a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eacb3c6c57413.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",site_id:"3279",url:"https://mst.vip.com/oTJnyzId2C7WG324RH1f3A.php?wq=1&wapid=mst_100027030&_src=mst&extra_banner=0&nova=1&nova_platform=1&mst_page_type=guide&wq=1"})}}}),a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eacbc73a638091.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",site_id:"84",url:"https://cuxiao.m.suning.com/scms/1026shydybyr.html"})}}}),a("img",{attrs:{src:"https://eimg.smzdm.com/202010/20/5f8eacc0d60529835.png"},on:{click:function(e){return t.postMessageParams({load_url:"kuaibao",site_id:"1737",url:"https://weex.kaola.com/activity/pages/1101.html?redFission=zhuanke&__da_dad3e203_5c4e7c6b4ff92c00"})}}})])])])]),a("div",{staticClass:"butie"},[a("h1",[t._v("逛逛生活补贴")]),a("ul",[a("li",{on:{click:function(e){return t.go_url("https://daojia.jd.com/pavilion/poseidon/djcoupon/index.html#/edison?id=218")}}},[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/22/5f91705112c1f2636.png"}}),a("span",[t._v("京东到家 永辉超市 满79减20")]),a("p",{staticClass:"price"},[t._v("满79减20")]),a("a",{staticClass:"common-go"},[t._v("立即领取")])]),a("li",{on:{click:function(e){return t.go_url("https://daojia.jd.com/pavilion/poseidon/djcoupon/index.html#/edison?id=291")}}},[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/22/5f91705112c1f2636.png"}}),a("span",[t._v("京东到家 永辉超市 满79减20")]),a("p",{staticClass:"price"},[t._v("满79减20")]),a("a",{staticClass:"common-go"},[t._v("立即领取")])]),a("li",{on:{click:function(e){return t.go_url("https://daojia.jd.com/pavilion/poseidon/djcoupon/index.html#/edison?id=290")}}},[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/22/5f91705112c1f2636.png"}}),a("span",[t._v("京东到家 永辉超市 满79减20")]),a("p",{staticClass:"price"},[t._v("满79减20")]),a("a",{staticClass:"common-go"},[t._v("立即领取")])]),a("li",{on:{click:function(e){return t.go_url("https://daojia.jd.com/pavilion/poseidon/djcoupon/index.html#/edison?id=289")}}},[a("img",{attrs:{src:"https://eimg.smzdm.com/202010/22/5f91705112c1f2636.png"}}),a("span",[t._v("京东到家 永辉超市 满79减20")]),a("p",{staticClass:"price"},[t._v("满79减20")]),a("a",{staticClass:"common-go"},[t._v("立即领取")])])])]),a("div",{staticClass:"nav-title"},[a("img",{attrs:{src:"//img1.lukou.com/static/p/commodity/img/20201020-211027.png"}})]),a("div",{staticClass:"nav"},[a("md-tab-bar",{attrs:{items:t.navItems,maxLength:5},on:{change:t.changeTab},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1),a("div",{staticClass:"product-box"},[a("div",{staticClass:"product-container"},t._l(t.items,(function(t,e){return a("goods",{key:e,attrs:{"item-data":t,"goods-type":"youhui"}})})),1)]),a("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)},s=[],o=a("1861"),r=a.n(o),c=(a("a481"),a("75fc")),l=a("bd86"),d=a("2d9a"),u=a.n(d),m=a("556d"),f=a.n(m),p=a("7b38"),h=a.n(p),g=a("26c9"),v=a.n(g),_=a("750b"),b=a.n(_),y=a("aed6"),w=a.n(y),k=(a("7f7f"),a("06cd")),x=a.n(k),C=a("db8e"),$=a("d483"),j=a("a288"),T=(a("5880"),a("e1b0")),M=a("3919"),S=a("b0c2"),P=a.n(S),O={components:(i={},Object(l["a"])(i,x.a.name,x.a),Object(l["a"])(i,"loadMore",C["a"]),Object(l["a"])(i,"componentItem",$["a"]),Object(l["a"])(i,"goods",j["a"]),Object(l["a"])(i,"infiniteLoading",M["a"]),Object(l["a"])(i,"backTop",T["a"]),Object(l["a"])(i,w.a.name,w.a),Object(l["a"])(i,b.a.name,b.a),Object(l["a"])(i,v.a.name,v.a),Object(l["a"])(i,h.a.name,h.a),Object(l["a"])(i,f.a.name,f.a),Object(l["a"])(i,u.a.name,u.a),i),data:function(){return{current:0,scrollTop:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],components:[],items:[],query_goods_url:"",page:{ipage:0,hasMore:!0},modal:{dialog:!1,copy_content:"",url:"",bg:""},loading:!1,pullUpOn:!0,navItems:[]}},computed:{},created:function(){},mounted:function(){this.initNav(),this.loadData("tabChange")},methods:{navToPage:function(t,e){var a=this;this.$nextTick((function(){a.$router.push({path:t,query:e||{}})}))},initNav:function(){var t=this,e=[{material_id:37178,label:"好物推荐"},{material_id:37360,label:"女装"},{material_id:37359,label:"美妆个护"},{material_id:37358,label:"食品"},{material_id:37363,label:"母婴"},{material_id:37362,label:"数码家电"},{material_id:37361,label:"家居家装"},{material_id:37364,label:"鞋包配饰"},{material_id:37365,label:"男装"},{material_id:37366,label:"内衣"},{material_id:37367,label:"运动户外"}];e.forEach((function(e,a){t.navItems.push({name:a,params:{topic_id:601,material_id:e.material_id},label:e.label})}))},loadData:function(t){var e=this,a=this.navItems[this.current],i=a&&a.params?a.params:{};this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.page.ipage=this.page.ipage+1,i=Object.assign(i,{ipage:this.page.ipage,sort:"day_sales",pic_size:"300"}),this.$http.post("/cms.topic.items",i).then((function(a){var i;(e.loading=!1,a.data.items)?"tabChange"===t?e.items=a.data.items:(i=e.items).push.apply(i,Object(c["a"])(a.data.items)):e.page.hasMore=!1})))},loadmore:function(){this.loading||this.loadData()},queryNotice:function(){var t=this;this.$http.post("/cms.notice.superred",{page_id:"youdanhui"}).then((function(e){e.data.item&&e.data.item.url&&(e.data.item.code?t.modal.bg=e.data.item.window_tkl_img:t.modal.bg=e.data.item.window_img,e.data.item.url&&(t.modal.url=e.data.item.url),t.modal.copy_content=e.data.item.code,t.modal.dialog=!0)}))},onPullDownRefresh:function(){this.ipage=1,this.pullUpOn=!0,this.loading=!1},onPageScroll:function(t){this.scrollTop=t.scrollTop},copyPop:function(){this.modal.copy_content&&""!=this.modal.copy_content?this.copyContent():window.location.href=this.modal.url},copyContent:function(){var t=this,e="复制框内整段文字，打开【手-机-淘-宝】即可领券购买。"+this.modal.copy_content,a=e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),i=new P.a(".modal-custom",{text:function(){return a}});i.on("success",(function(e){e.clearSelection(),i.destroy(),t.copied=!0,t.modal.dialog=!1,r.a.info("复制成功,打开【手-机-淘-宝】即可领券购买"),setTimeout((function(){t.copied=!1}),2e3)})),i.on("error",(function(t){console.log(t)}))},go_url:function(t){this.postMessage({url:t})},changeTab:function(t,e,a){this.current=e,this.loadData("tabChange")},postMessage:function(t){var e={title:t.title,load_url:"kuaibao",click_url:t.url};this.postMessageParams(e)},postMessageParams:function(t){this.$nav.postMessage({jump_type:"native",action:"load_action",role:"member",params:t})}}},W=O,z=(a("a608"),a("2877")),I=Object(z["a"])(W,n,s,!1,null,"6f98c0ba",null);e["default"]=I.exports}}]);