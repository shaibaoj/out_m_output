var D=Object.defineProperty;var N=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(e,a,t)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,E=(e,a)=>{for(var t in a||(a={}))H.call(a,t)&&T(e,t,a[t]);if(N)for(var t of N(a))R.call(a,t)&&T(e,t,a[t]);return e};import{C as S,U as C}from"./index.d982108e.js";import{B as A}from"./core.esm.4957b73a.js";var M={modelValue:{type:[String,Number],default:""},items:{type:Array,default:()=>[]},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:0},immediate:{type:Boolean,default:!1}},W=(e,{emit:a})=>{let t=null;const r=Vue.ref(null),s=Vue.ref(null),c=Vue.ref(!1),b=()=>{t&&(t.destroy(),t=null),r.value&&(t=O(r.value))};function h(){var o,u,k;const l=(u=(o=r.value)==null?void 0:o.getBoundingClientRect().width)!=null?u:0,n=Array.from(((k=s.value)==null?void 0:k.children)||[]).reduce((d,$)=>d+$.getBoundingClientRect().width,0);c.value=Math.ceil(l-n)<0,c.value&&(r.value.querySelector(".md-tab-bar-list").style.display="inline-block",b(),p(l,n))}const f=Vue.ref(!1),m=Vue.ref(!0);function p(l,n){t==null||t.on("scroll",u=>{u.x<0&&Math.abs(u.x)>10?f.value=!0:f.value=!1,Math.abs(u.x)>n-l-10?m.value=!1:m.value=!0})}const V=Vue.ref("0px"),y=Vue.ref("0px"),i=Vue.computed(()=>e.items.findIndex(l=>l.name===e.modelValue)),I=(l,n)=>{l.disabled||(w(n),B(n),a(C,l.name),a(S,l,n))},B=l=>{var o;const n=Array.from(((o=s.value)==null?void 0:o.children)||[]);t==null||t.scrollToElement(n[l],300,!0,!1)},g=()=>{Vue.unref(i)!==-1&&(w(Vue.unref(i)),B(Vue.unref(i))),e.immediate&&Vue.unref(i)!==-1&&a(S,e.items[Vue.unref(i)],i)},w=l=>{var k;const n=Array.from(((k=s.value)==null?void 0:k.children)||[]),o=n.map(d=>d.getBoundingClientRect().width),u=n.map(d=>d.offsetLeft);y.value=`${o[l]}px`,V.value=`${u[l]}px`,Vue.nextTick(()=>{if(e.inkLength){const d=o[l]-e.inkLength;y.value=`${e.inkLength}px`,V.value=`${u[l]+d/2}px`}})};return Vue.watch(()=>e.modelValue,()=>{g()}),Vue.onMounted(()=>{h(),g()}),{wrapRef:r,contentRef:s,scrollable:c,maskStartShown:f,maskEndShown:m,modelIndex:i,clickHandle:I,inkWidth:y,inkOffsetLeft:V,setInkStyle:w}};function O(e,a){return new A(e,E({scrollX:!0,scrollY:!1,probeType:3,tap:"tap"},a))}var L=Vue.defineComponent({name:"MdTabBar",props:M,emits:[S,C],setup(e,a){const{wrapRef:t,contentRef:r,scrollable:s,maskStartShown:c,maskEndShown:b,clickHandle:h,modelIndex:f,inkWidth:m,inkOffsetLeft:p,setInkStyle:V}=W(e,a);return{wrapper:t,content:r,scrollable:s,maskStartShown:c,maskEndShown:b,modelIndex:f,clickHandle:h,inkWidth:m,inkOffsetLeft:p,setInkStyle:V}}}),_={class:"md-tab-bar"},F={ref:"wrapper",class:"md-tab-bar-inner"},P={class:"md-tab-bar-start"},U={class:"md-tab-bar-end"},X={ref:"content",class:"md-tab-bar-list"};function q(e,a){return Vue.openBlock(),Vue.createBlock("div",_,[Vue.createVNode("div",F,[e.scrollable?(Vue.openBlock(),Vue.createBlock(Vue.Fragment,{key:0},[Vue.withDirectives(Vue.createVNode("div",P,null,512),[[Vue.vShow,e.maskStartShown]]),Vue.withDirectives(Vue.createVNode("div",U,null,512),[[Vue.vShow,e.maskEndShown]])],64)):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",X,[(Vue.openBlock(!0),Vue.createBlock(Vue.Fragment,null,Vue.renderList(e.items,(t,r)=>(Vue.openBlock(),Vue.createBlock("a",{key:r,ref:"items",class:["md-tab-bar-item",{"is-active":e.modelValue===t.name,"is-disabled":!!t.disabled}],onClick:s=>e.clickHandle(t,r),onTap:s=>e.clickHandle(t,r)},[Vue.renderSlot(e.$slots,"default",{item:t,items:e.items,index:r,currentName:e.modelValue},()=>[Vue.createTextVNode(Vue.toDisplayString(t.label),1)])],42,["onClick","onTap"]))),128)),e.hasInk?(Vue.openBlock(),Vue.createBlock("span",{key:0,class:["md-tab-bar-ink",{"is-disabled":e.items[e.modelIndex]&&e.items[e.modelIndex].disabled}],style:{width:e.inkWidth,transform:`translateX(${e.inkOffsetLeft})`}},null,6)):Vue.createCommentVNode("v-if",!0)],512)],512)])}L.render=q;var v=L;v.install=e=>{e.component(v.name,v)};var z=v;export{z as t};
