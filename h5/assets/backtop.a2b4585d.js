import{$ as w}from"./gogocodeTransfer.ea7237c2.js";import{_ as p}from"./index.ac223714.js";const h={name:"back-top",props:{distance:{type:Number,default:200},bottom:{type:Number,default:20},right:{type:Number,default:10},duration:{type:Number,default:1e3},zIndex:{type:Number,default:1111}},data(){return{backTop:!1}},mounted(){window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)},computed:{styles(){return{bottom:`${this.bottom}px`,right:`${this.right}px`,"z-index":this.zIndex}}},methods:{handleScroll(){this.backTop=window.pageYOffset>=this.distance},goto(){const e=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop(window,e,0,this.duration),w(this,"click")},scrollTop(e,t=0,o,a=500,i){this.el=e;let l=0,r=["webkit","moz"];for(let n=0;n<r.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[r[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[n]+"CancelAnimationFrame"]||window[r[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,T){let s=new Date().getTime(),c=Math.max(0,16.7-(s-l)),u=window.setTimeout(function(){n(s+c)},c);return l=s+c,u}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)});const d=Math.abs(t-o),m=Math.ceil(d/a*50);this.scroll(t,o,m,i)},scroll(e,t,o,a){if(e===t){a&&a();return}let i=e+o>t?t:e+o;e>t&&(i=e-o<t?t:e-o),this.el===window?window.scrollTo(i,i):this.el.scrollTop=i,window.requestAnimationFrame(()=>this.scroll(i,t,o))}},emits:["click"]},f=e=>(Vue.pushScopeId("data-v-6d153d94"),e=e(),Vue.popScopeId(),e),b=f(()=>Vue.createElementVNode("div",{class:"back-top-main"},null,-1));function _(e,t,o,a,i,l){return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["back-top",{show:i.backTop}]),style:Vue.normalizeStyle(l.styles),onClick:t[0]||(t[0]=(...r)=>l.goto&&l.goto(...r))},[Vue.renderSlot(e.$slots,"default",{},()=>[b],!0)],6)}var y=p(h,[["render",_],["__scopeId","data-v-6d153d94"]]);export{y as b};
