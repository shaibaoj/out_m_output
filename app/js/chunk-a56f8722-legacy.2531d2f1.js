(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a56f8722"],{"0289":function(t,e,i){"use strict";var n=i("5194"),o=i.n(n);o.a},"0bbf":function(t,e,i){"use strict";var n=i("c251"),o=i.n(n);o.a},"1f07":function(t,e,i){"use strict";var n=i("fd87"),o=i.n(n);o.a},3919:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroller",staticClass:"infinite-loading",on:{touchstart:function(e){return t.touchStartHandle(e)},touchmove:function(e){return t.touchMoveHandle(e)}}},[t._t("default"),i("div",{staticClass:"load-more"},[i("div",{staticClass:"bottom-tips"},[t.isLoading?[i("i",{staticClass:"loading-hint"}),i("span",{staticClass:"loading-txt"},[t._v("加载中...")])]:t.hasMore?t._e():i("span",{staticClass:"tips-txt"},[t._v("哎呀，这里是底部了啦")])],2)])],2)},o=[],a=(i("c5f6"),{name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data:function(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle:function(t){try{this.startX=Number(t.changedTouches[0].pageX),this.startY=Number(t.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle:function(t){var e=Number(t.changedTouches[0].pageX),i=Number(t.changedTouches[0].pageY);this.diffX=e-this.startX,this.diffY=i-this.startY},scrollListener:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},handleScroll:function(){var t=this;this.requestAniFrame()((function(){if(!t.hasMore||!t.isScrollAtBottom()||t.isLoading||!t.isShowMod)return!1;t.$emit("loadmore")}))},calculateTopPosition:function(t){return t?t.offsetTop+this.calculateTopPosition(t.offsetParent):0},getWindowScrollTop:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom:function(){var t,e=this.getWindowScrollTop();if(this.useWindow)t=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-e-window.innerHeight;else{var i=this.$refs.scroller,n=i.scrollHeight,o=i.clientHeight,a=i.scrollTop;t=n-o-a}this.beforeScrollTop;return this.beforeScrollTop=e,t<=this.threshold&&e>=this.beforeScrollTop}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),s=a,r=(i("0bbf"),i("2877")),c=Object(r["a"])(s,n,o,!1,null,"9d36787a",null);e["a"]=c.exports},5194:function(t,e,i){},"5f9f":function(t,e,i){"use strict";var n=i("7095"),o=i.n(n);o.a},7095:function(t,e,i){},aa6b:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"nav-left"},[i("div",{staticClass:"back",on:{click:function(e){return t.$emit("on-click-back")}}},[t._t("back-icon",[i("i",{staticClass:"back-icon"})])],2),t._t("left")],2),i("div",{staticClass:"nav-center"},[i("h3",{staticClass:"nav-title",on:{click:function(e){return t.$emit("on-click-title")}}},[t._t("default",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"nav-right"},[t._t("right"),i("div",{staticClass:"more",on:{click:function(e){return t.$emit("on-click-more")}}},[t._t("more-icon",[i("i",{staticClass:"more-icon"})])],2)],2)])},o=[],a={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickBack:function(){this.$router?this.$router.back():window.history.back()}}},s=a,r=(i("5f9f"),i("2877")),c=Object(r["a"])(s,n,o,!1,null,"96b87444",null);e["a"]=c.exports},bfb8:function(t,e,i){},c251:function(t,e,i){},c77d:function(t,e,i){"use strict";i.r(e);var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"container"},[i("infinite-loading",{attrs:{"is-show-mod":!0,"has-more":t.page.hasMore,"is-loading":t.loading,threshold:200},on:{loadmore:t.loadmore}},[i("div",{staticClass:"list"},t._l(t.items,(function(e,n){return i("goods",{key:n,attrs:{itemData:{type:"goods",title:e.goods_name,pic_url:t.cdnImg(e.goods_img),coupon_money:e.discount_price,buy_price:e.coupon_price,url:e.goods_link,volume:e.inOrderCount30Days,source:"京东",num_iid:"jd"+e.goods_id},goodsType:"topic"}})})),1),i("back-top",{attrs:{distance:0,bottom:100,right:20}})],1)],1)])},a=[],s=(i("ac6a"),i("a481"),i("75fc")),r=i("bd86"),c=i("26c9"),l=i.n(c),d=(i("7f7f"),i("aed6")),u=i.n(d),h=i("db8e"),f=i("a288"),m=i("aa6b"),p=i("e1b0"),g=i("3919"),v=i("a2c5"),w=i.n(v),b={components:(n={loadMore:h["a"],navBar:m["a"],infiniteLoading:g["a"]},Object(r["a"])(n,u.a.name,u.a),Object(r["a"])(n,"backTop",p["a"]),Object(r["a"])(n,l.a.name,l.a),Object(r["a"])(n,"goods",f["a"]),n),data:function(){return{current:0,currentCid:0,navList:[],page:{ipage:0,price1:"",price2:"",hasMore:!0},items:[],loading:!1}},mounted:function(){this.loadData()},created:function(){},methods:{back:function(){this.$router.go(-1)},loadNav:function(){var t=this;this.$http.post("/app/page/nav",{nav_types:""}).then((function(e){var i;e.data.items&&e.data.items.items&&((i=t.navList).push.apply(i,Object(s["a"])(e.data.items.items)),t.loadData())}))},loadData:function(t){var e=this;this.loading||("tabChange"===t&&(this.items=[],this.page.ipage=0),this.loading=!0,this.$http.post("https://xsj.heytmall.com/api/web/jdong/active",{page:this.page.ipage}).then((function(i){if(e.loading=!1,i.data.list&&i.data.list){var n;if("tabChange"===t)e.items=i.data.list;else(n=e.items).push.apply(n,Object(s["a"])(i.data.list));e.page.ipage=i.data.page}else e.page.hasMore=!1})))},changeTab:function(t,e,i){this.current=e,this.loadData("tabChange")},loadmore:function(){this.loading||this.loadData()},cdnImg:function(t){return"https://imgcdn.youdanhui.com/imgcdn/"+w.a.MD5(t)+".jpg?src="+encodeURIComponent(t)},highlight:function(t){return t=t.replace(/([0-9.]+)元([包邮]*)/g,"<span class='highlight' style='color:red'>$1元$2</span>"),t},postMessage:function(t){""!=t.goods_id&&this.$nav.postMessage({jump_type:"native",action:"load_action",role:"member",params:{title:t.goods_name,load_url:"kuaibao",jd_id:t.goods_id,click_url:t.goods_link}})}},computed:{navItems:function(){var t=[];return this.navList.forEach((function(e,i){t.push({name:e.cid,cid:e.cid,label:e.name})})),t}}},_=b,y=(i("1f07"),i("2877")),k=Object(y["a"])(_,o,a,!1,null,"316ce83a",null);e["default"]=k.exports},db8e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("div",{staticClass:"loadmore"},[i("div",{class:["loading-"+t.index,3==t.index&&t.type?"loading-"+t.type:""]}),i("div",{staticClass:"loadmore-tips"},[t._v(t._s(t.text))])]):t._e()},o=[],a=(i("c5f6"),{name:"load-more",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}}),s=a,r=(i("f7dd"),i("2877")),c=Object(r["a"])(s,n,o,!1,null,"001f267e",null);e["a"]=c.exports},e1b0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["back-top",{show:t.backTop}],style:t.styles,on:{click:t.goto}},[t._t("default",[t._m(0)])],2)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-top-main"},[i("img",{attrs:{src:"https://img.youdanhui.cn/cms_img/2020-08-26/5f46731e2db47.png"}})])}],a=(i("c5f6"),{name:"back-top",props:{distance:{type:Number,default:200},bottom:{type:Number,default:20},right:{type:Number,default:10},duration:{type:Number,default:1e3},zIndex:{type:Number,default:1111}},data:function(){return{backTop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)},computed:{styles:function(){return{bottom:"".concat(this.bottom,"px"),right:"".concat(this.right,"px"),"z-index":this.zIndex}}},methods:{handleScroll:function(){this.backTop=window.pageYOffset>=this.distance},goto:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop(window,t,0,this.duration),this.$emit("click")},scrollTop:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4?arguments[4]:void 0;this.el=t;for(var a=0,s=["webkit","moz"],r=0;r<s.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[s[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[r]+"CancelAnimationFrame"]||window[s[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),n=Math.max(0,16.7-(i-a)),o=window.setTimeout((function(){t(i+n)}),n);return a=i+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c=Math.abs(e-i),l=Math.ceil(c/n*50);this.scroll(e,i,l,o)},scroll:function(t,e,i,n){var o=this;if(t!==e){var a=t+i>e?e:t+i;t>e&&(a=t-i<e?e:t-i),this.el===window?window.scrollTo(a,a):this.el.scrollTop=a,window.requestAnimationFrame((function(){return o.scroll(a,e,i)}))}else n&&n()}}}),s=a,r=(i("0289"),i("2877")),c=Object(r["a"])(s,n,o,!1,null,"62dd950b",null);e["a"]=c.exports},f7dd:function(t,e,i){"use strict";var n=i("bfb8"),o=i.n(n);o.a},fd87:function(t,e,i){}}]);