import{$ as a}from"./gogocodeTransfer.ea7237c2.js";/* empty css                                                                    */import{_ as d}from"./index.7a16820c.js";const c={name:"infinite-loading",props:{hasMore:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},threshold:{type:Number,default:200},useWindow:{type:Boolean,default:!0},isShowMod:{type:Boolean,default:!1}},data(){return{startX:0,startY:0,diffX:0,diffY:0,beforeScrollTop:0}},mounted:function(){this.scrollListener()},methods:{touchStartHandle(e){try{this.startX=Number(e.changedTouches[0].pageX),this.startY=Number(e.changedTouches[0].pageY)}catch(t){console.log(t.message)}},touchMoveHandle(e){let t=Number(e.changedTouches[0].pageX),o=Number(e.changedTouches[0].pageY);this.diffX=t-this.startX,this.diffY=o-this.startY},scrollListener(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},requestAniFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},handleScroll(){this.requestAniFrame()(()=>{if(!this.hasMore||!this.isScrollAtBottom()||this.isLoading||!this.isShowMod)return!1;a(this,"loadmore")})},calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0},getWindowScrollTop(){return window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},isScrollAtBottom(){let e;const t=this.getWindowScrollTop();if(this.useWindow)e=this.calculateTopPosition(this.$refs.scroller)+this.$refs.scroller.offsetHeight-t-window.innerHeight;else{const{scrollHeight:o,clientHeight:n,scrollTop:i}=this.$refs.scroller;e=o-n-i}return this.beforeScrollTop,this.beforeScrollTop=t,e<=this.threshold&&t>=this.beforeScrollTop}},unmounted(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)},emits:["loadmore"]},l=e=>(Vue.pushScopeId("data-v-a56c1dea"),e=e(),Vue.popScopeId(),e),u={class:"load-more"},h={class:"bottom-tips"},f=l(()=>Vue.createElementVNode("i",{class:"loading-hint"},null,-1)),m=l(()=>Vue.createElementVNode("span",{class:"loading-txt"},"\u52A0\u8F7D\u4E2D...",-1)),p={key:1,class:"tips-txt"};function w(e,t,o,n,i,r){return Vue.openBlock(),Vue.createElementBlock("div",{class:"infinite-loading",ref:"scroller",onTouchstart:t[0]||(t[0]=s=>r.touchStartHandle(s)),onTouchmove:t[1]||(t[1]=s=>r.touchMoveHandle(s))},[Vue.renderSlot(e.$slots,"default",{},void 0,!0),Vue.createElementVNode("div",u,[Vue.createElementVNode("div",h,[o.isLoading?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:0},[f,m],64)):o.hasMore?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("span",p,"\u54CE\u5440\uFF0C\u8FD9\u91CC\u662F\u5E95\u90E8\u4E86\u5566"))])])],544)}var V=d(c,[["render",w],["__scopeId","data-v-a56c1dea"]]);export{V as i};
