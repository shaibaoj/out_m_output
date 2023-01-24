var oe=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?oe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,U=(e,o)=>{for(var t in o||(o={}))te.call(o,t)&&C(e,t,o[t]);if(Y)for(var t of Y(o))le.call(o,t)&&C(e,t,o[t]);return e};import{B as _}from"./core.esm.4957b73a.js";import{t as p}from"./index.709eda75.js";import{r as re}from"./index.1c4b75a4.js";/*!
 * better-scroll / pull-down
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */var P=typeof window!="undefined",y=P&&navigator.userAgent.toLowerCase();y&&/wechatdevtools/.test(y);y&&y.indexOf("android")>0;(function(){if(typeof y=="string"){var e=/os (\d\d?_\d(_\d)?)/,o=e.exec(y);if(!o)return!1;var t=o[1].split("_").map(function(l){return parseInt(l,10)});return t[0]===13&&t[1]>=4}return!1})();var ne=!1;if(P){var se="test-passive";try{var F={};Object.defineProperty(F,"passive",{get:function(){ne=!0}}),window.addEventListener(se,function(){},F)}catch{}}var ie=function(e,o){for(var t in o)e[t]=o[t];return e},z=P&&document.createElement("div").style,d=function(){if(!P)return!1;for(var e=[{key:"standard",value:"transform"},{key:"webkit",value:"webkitTransform"},{key:"Moz",value:"MozTransform"},{key:"O",value:"OTransform"},{key:"ms",value:"msTransform"}],o=0,t=e;o<t.length;o++){var l=t[o];if(z[l.value]!==void 0)return l.key}return!1}();function i(e){return d===!1?e:d==="standard"?e==="transitionEnd"?"transitionend":e:d+e.charAt(0).toUpperCase()+e.substr(1)}d&&d!=="standard"&&""+d.toLowerCase();var ae=i("transform"),ue=i("transition");P&&i("perspective")in z;i("transitionTimingFunction"),i("transitionDuration"),i("transitionDelay"),i("transformOrigin"),i("transitionEnd"),i("transitionProperty");var E={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(e){return 1+--e*e*e*e*e}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(e){return 1- --e*e*e*e}}},ce="plugins.pullDownRefresh",he=[{key:"finishPullDown",name:"finishPullDown"},{key:"openPullDown",name:"openPullDown"},{key:"closePullDown",name:"closePullDown"},{key:"autoPullDownRefresh",name:"autoPullDownRefresh"}],pe=he.map(function(e){return{key:e.key,sourceKey:ce+"."+e.name}}),b="pullingDown",H="enterThreshold",x="leaveThreshold",fe=function(){function e(o){this.scroll=o,this.pulling=0,this.thresholdBoundary=0,this.init()}return e.prototype.setPulling=function(o){this.pulling=o},e.prototype.setThresholdBoundary=function(o){this.thresholdBoundary=o},e.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullDownRefresh),this.handleHooks(),this.watch()},e.prototype.handleBScroll=function(){this.scroll.registerType([b,H,x]),this.scroll.proxy(pe)},e.prototype.handleOptions=function(o){o===void 0&&(o={}),o=o===!0?{}:o;var t={threshold:90,stop:40};this.options=ie(t,o),this.scroll.options.probeType=3},e.prototype.handleHooks=function(){var o=this;this.hooksFn=[];var t=this.scroll.scroller,l=t.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY=l.minScrollPos,this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,function(){o.finishPullDown()}),this.registerHooks(l.hooks,l.hooks.eventTypes.computeBoundary,function(r){r.maxScrollPos>0&&(r.maxScrollPos=-1),r.minScrollPos=o.currentMinScrollY}),this.hasMouseWheelPlugin()&&(this.registerHooks(this.scroll,this.scroll.eventTypes.alterOptions,function(r){var u=300,c=350;r.discreteTime=u,r.easeTime=c}),this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelEnd,function(){t.hooks.trigger(t.hooks.eventTypes.end)}))},e.prototype.registerHooks=function(o,t,l){o.on(t,l,this),this.hooksFn.push([o,t,l])},e.prototype.hasMouseWheelPlugin=function(){return!!this.scroll.eventTypes.alterOptions},e.prototype.watch=function(){var o=this.scroll.scroller;this.watching=!0,this.registerHooks(o.hooks,o.hooks.eventTypes.end,this.checkPullDown),this.registerHooks(this.scroll,this.scroll.eventTypes.scrollStart,this.resetStateBeforeScrollStart),this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},e.prototype.resetStateBeforeScrollStart=function(){this.isFetchingStatus()||(this.setPulling(1),this.setThresholdBoundary(0))},e.prototype.checkLocationOfThresholdBoundary=function(){if(this.pulling===1){var o=this.scroll,t=this.thresholdBoundary!==1&&this.locateInsideThresholdBoundary(),l=this.thresholdBoundary!==2&&!this.locateInsideThresholdBoundary();t&&(this.setThresholdBoundary(1),o.trigger(H)),l&&(this.setThresholdBoundary(2),o.trigger(x))}},e.prototype.locateInsideThresholdBoundary=function(){return this.scroll.y<=this.options.threshold},e.prototype.unwatch=function(){var o=this.scroll,t=o.scroller;this.watching=!1,t.hooks.off(t.hooks.eventTypes.end,this.checkPullDown),o.off(o.eventTypes.scrollStart,this.resetStateBeforeScrollStart),o.off(o.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&o.off(o.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},e.prototype.checkPullDown=function(){var o=this.options,t=o.threshold,l=o.stop;return this.scroll.y<t?!1:(this.pulling===1&&(this.modifyBehaviorYBoundary(l),this.setPulling(2),this.scroll.trigger(b)),this.scroll.scrollTo(this.scroll.x,l,this.scroll.options.bounceTime,E.bounce),this.isFetchingStatus())},e.prototype.isFetchingStatus=function(){return this.pulling===2},e.prototype.modifyBehaviorYBoundary=function(o){var t=this.scroll.scroller.scrollBehaviorY;this.cachedOriginanMinScrollY=t.minScrollPos,this.currentMinScrollY=o,t.computeBoundary()},e.prototype.finishPullDown=function(){if(this.isFetchingStatus()){var o=this.scroll.scroller.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY,o.computeBoundary(),this.setPulling(0),this.scroll.resetPosition(this.scroll.options.bounceTime,E.bounce)}},e.prototype.openPullDown=function(o){o===void 0&&(o={}),this.handleOptions(o),this.watching||this.watch()},e.prototype.closePullDown=function(){this.unwatch()},e.prototype.autoPullDownRefresh=function(){var o=this.options,t=o.threshold,l=o.stop;this.isFetchingStatus()||!this.watching||(this.modifyBehaviorYBoundary(l),this.scroll.trigger(this.scroll.eventTypes.scrollStart),this.scroll.scrollTo(this.scroll.x,t),this.setPulling(2),this.scroll.trigger(b),this.scroll.scrollTo(this.scroll.x,l,this.scroll.options.bounceTime,E.bounce))},e.pluginName="pullDownRefresh",e}();/*!
 * better-scroll / pull-up
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */var T=typeof window!="undefined",w=T&&navigator.userAgent.toLowerCase();w&&/wechatdevtools/.test(w);w&&w.indexOf("android")>0;(function(){if(typeof w=="string"){var e=/os (\d\d?_\d(_\d)?)/,o=e.exec(w);if(!o)return!1;var t=o[1].split("_").map(function(l){return parseInt(l,10)});return t[0]===13&&t[1]>=4}return!1})();var de=!1;if(T){var ve="test-passive";try{var $={};Object.defineProperty($,"passive",{get:function(){de=!0}}),window.addEventListener(ve,function(){},$)}catch{}}var ye=function(e,o){for(var t in o)e[t]=o[t];return e},W=T&&document.createElement("div").style,v=function(){if(!T)return!1;for(var e=[{key:"standard",value:"transform"},{key:"webkit",value:"webkitTransform"},{key:"Moz",value:"MozTransform"},{key:"O",value:"OTransform"},{key:"ms",value:"msTransform"}],o=0,t=e;o<t.length;o++){var l=t[o];if(W[l.value]!==void 0)return l.key}return!1}();function a(e){return v===!1?e:v==="standard"?e==="transitionEnd"?"transitionend":e:v+e.charAt(0).toUpperCase()+e.substr(1)}v&&v!=="standard"&&""+v.toLowerCase();var we=a("transform"),me=a("transition");T&&a("perspective")in W;a("transitionTimingFunction"),a("transitionDuration"),a("transitionDelay"),a("transformOrigin"),a("transitionEnd"),a("transitionProperty");var ge="plugins.pullUpLoad",Pe=[{key:"finishPullUp",name:"finishPullUp"},{key:"openPullUp",name:"openPullUp"},{key:"closePullUp",name:"closePullUp"},{key:"autoPullUpLoad",name:"autoPullUpLoad"}],Te=Pe.map(function(e){return{key:e.key,sourceKey:ge+"."+e.name}}),R="pullingUp",ke=function(){function e(o){this.scroll=o,this.pulling=!1,this.watching=!1,this.init()}return e.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullUpLoad),this.handleHooks(),this.watch()},e.prototype.handleBScroll=function(){this.scroll.registerType([R]),this.scroll.proxy(Te)},e.prototype.handleOptions=function(o){o===void 0&&(o={}),o=o===!0?{}:o;var t={threshold:0};this.options=ye(t,o),this.scroll.options.probeType=3},e.prototype.handleHooks=function(){var o=this;this.hooksFn=[];var t=this.scroll.scroller.scrollBehaviorY;this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,function(){o.finishPullUp()}),this.registerHooks(t.hooks,t.hooks.eventTypes.computeBoundary,function(l){l.maxScrollPos>0&&(l.maxScrollPos=-1)})},e.prototype.registerHooks=function(o,t,l){o.on(t,l,this),this.hooksFn.push([o,t,l])},e.prototype.watch=function(){this.watching||(this.watching=!0,this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkPullUp))},e.prototype.unwatch=function(){this.watching=!1,this.scroll.off(this.scroll.eventTypes.scroll,this.checkPullUp)},e.prototype.checkPullUp=function(o){var t=this,l=this.options.threshold;this.scroll.movingDirectionY===1&&o.y<=this.scroll.maxScrollY+l&&(this.pulling=!0,this.scroll.once(this.scroll.eventTypes.scrollEnd,function(){t.pulling=!1}),this.unwatch(),this.scroll.trigger(R))},e.prototype.finishPullUp=function(){var o=this;this.scroll.scroller.scrollBehaviorY.setMovingDirection(0),this.pulling?this.scroll.once(this.scroll.eventTypes.scrollEnd,function(){o.watch()}):this.watch()},e.prototype.openPullUp=function(o){o===void 0&&(o={}),this.handleOptions(o),this.watch()},e.prototype.closePullUp=function(){this.unwatch()},e.prototype.autoPullUpLoad=function(){var o=this.options.threshold,t=this.scroll.scroller.scrollBehaviorY;if(!(this.pulling||!this.watching)){var l=-1,r=t.maxScrollPos+o+l;this.scroll.scroller.scrollBehaviorY.setMovingDirection(l),this.scroll.scrollTo(this.scroll.x,r,this.scroll.options.bounceTime)}},e.pluginName="pullUpLoad",e}(),L="pullingDown",O="pullingUp",N="scroll",De={scrollingX:{type:Boolean,default:!1},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},pullDown:{type:Boolean,default:!1},pullUp:{type:Boolean,default:!1},bounceTime:{type:Number,default:800},isPrevent:{type:Boolean,default:!0},pullDownOptions:{type:Object,default:{threshold:60,stop:50}},pullUpOtions:{type:Object,default:{threshold:0}},isFinished:{type:Boolean,default:!1}},Se=(e,{emit:o,slots:t})=>{const l=Vue.ref({x:0,y:0}),r=Vue.ref(!0),u=Vue.ref(!1),c=Vue.ref(!1),S=Vue.computed(()=>(l.value.y-10)/e.pullDownOptions.threshold),f=Vue.ref(!1),V=Vue.computed(()=>r.value?c.value?p("md.scroll_view.refresh.freedRefresh"):p("md.scroll_view.refresh.pullDownRefresh"):u.value?p("md.scroll_view.refresh.refreshing"):p("md.scroll_view.refresh.success")),B=Vue.computed(()=>e.isFinished?p("md.scroll_view.more.allLoaded"):f.value?p("md.scroll_view.more.loading"):p("md.scroll_view.more.loading"));let s=null;const m=Vue.ref(null),k=()=>{m.value&&(s=Ve(m.value,e.pullDown,e.pullUp,{scrollX:e.scrollingX,scrollY:e.scrollingY,bounce:e.bouncing,bounceTime:e.bounceTime,click:!e.isPrevent,pullDownRefresh:e.pullDownOptions,pullUpLoad:e.pullUpOtions}),e.pullDown&&s.on(L,J),e.pullUp&&s.on(O,Z),s.on(N,q))},j=()=>{s&&(s.destroy(),s=null,k())},h=()=>s,q=n=>{n.y>e.pullDownOptions.threshold+10&&(c.value=!0),l.value=n,o(N,n)},J=()=>{r.value=!1,u.value=!0,o(L)},Q=()=>{var n;u.value=!1,c.value=!1,(n=h())==null||n.finishPullDown(),globalThis.setTimeout(()=>{var g;r.value=!0,(g=h())==null||g.refresh()},e.bounceTime+100)},Z=()=>{var n;if(e.isFinished){(n=h())==null||n.closePullUp();return}f.value=!0,o(O)},ee=()=>{var n;(n=h())==null||n.finishPullUp(),Vue.nextTick(()=>{var g,M;(g=h())==null||g.refresh(),e.isFinished&&((M=h())==null||M.closePullUp())}),f.value=!1};return Vue.onMounted(()=>{k()}),Vue.onBeforeMount(()=>{var n;(n=h())==null||n.destroy()}),{wrapRef:m,getScrollerInstance:h,resetScroller:j,finishPullDown:Q,beforePullDown:r,canFreePullingDown:c,isPullingDown:u,pullDownText:V,pullDownPercent:S,finishPullUp:ee,isPullUpLoad:f,pullUpText:B}};function Ve(e,o=!0,t=!0,l){return o&&_.use(fe),t&&_.use(ke),new _(e,U({scrollX:!1,scrollY:!0,probeType:3,tap:"tap",bounceTime:800,click:!0},l))}var G=Vue.defineComponent({name:"MdScrollView",props:De,emits:[L,O,N],setup(e,o){const{wrapRef:t,getScrollerInstance:l,resetScroller:r,finishPullDown:u,beforePullDown:c,isPullingDown:S,canFreePullingDown:f,pullDownText:V,pullDownPercent:B,finishPullUp:s,isPullUpLoad:m,pullUpText:k}=Se(e,o);return{wrapper:t,getScrollerInstance:l,resetScroller:r,finishPullDown:u,beforePullDown:c,isPullingDown:S,canFreePullingDown:f,pullDownText:V,pullDownPercent:B,finishPullUp:s,isPullUpLoad:m,pullUpText:k}}}),Be={class:"md-scroll-view"},Ue={key:0,class:"scroll-view-header"},_e={ref:"wrapper",class:"scroll-view-container"},Ee={class:"scroll-view-content"},be={key:0,class:"scroll-pulldown-wrapper"},Le={key:1,class:"scroll-pullup-wrapper"},Oe={key:1,class:"scroll-view-footer"};function Ne(e,o){return Vue.openBlock(),Vue.createBlock("div",Be,[e.$slots.header?(Vue.openBlock(),Vue.createBlock("div",Ue,[Vue.renderSlot(e.$slots,"header")])):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",_e,[Vue.createVNode("div",Ee,[e.pullDown?(Vue.openBlock(),Vue.createBlock("div",be,[Vue.renderSlot(e.$slots,"pulldown",{beforePullDown:e.beforePullDown,isPullingDown:e.isPullingDown,canFreePullingDown:e.canFreePullingDown,pullDownText:e.pullDownText,pullDownPercent:e.pullDownPercent},()=>[Vue.createVNode("span",null,Vue.toDisplayString(e.pullDownText),1)])])):Vue.createCommentVNode("v-if",!0),Vue.createCommentVNode(" scroll content "),Vue.renderSlot(e.$slots,"default"),e.pullUp?(Vue.openBlock(),Vue.createBlock("div",Le,[Vue.renderSlot(e.$slots,"pullup",{isPullUpLoad:e.isPullUpLoad,pullUpText:e.pullUpText,isFinished:e.isFinished},()=>[Vue.createVNode("span",null,Vue.toDisplayString(e.pullUpText),1)])])):Vue.createCommentVNode("v-if",!0)])],512),e.$slots.footer?(Vue.openBlock(),Vue.createBlock("div",Oe,[Vue.renderSlot(e.$slots,"footer")])):Vue.createCommentVNode("v-if",!0)])}G.render=Ne;var D=G,X=Vue.defineComponent({name:"MdScrollViewPulldown",components:{MdRoller:re},props:{rollerColor:{type:String,default:"#2F86F6"},percent:{type:Number,default:void 0},pullDownText:{type:String,default:""},isPullingDown:{type:Boolean,default:!1}}}),Me={class:"md-scroll-pulldown"},Ye={class:"pulldown-tip"};function Ce(e,o){const t=Vue.resolveComponent("md-roller");return Vue.openBlock(),Vue.createBlock("div",Me,[Vue.createVNode(t,{process:e.isPullingDown?void 0:e.percent,width:10,color:e.rollerColor},null,8,["process","color"]),Vue.createVNode("p",Ye,Vue.toDisplayString(e.pullDownText),1)])}X.render=Ce;var I=X,K=Vue.defineComponent({props:{pullUpText:{type:String,default:""}}});function Fe(e,o){return Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent("div"),U({class:"md-scroll-pullup"},e.$attrs),{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.pullUpText),1)]),_:1},16)}K.render=Fe;var A=K;D.install=e=>{e.component(D.name,D),e.component(I.name,I),e.component(A.name,A)};var Ie=D;export{fe as P,ke as a,Ie as s};
