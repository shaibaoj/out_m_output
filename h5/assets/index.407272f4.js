import{b as f}from"./index.7a16820c.js";var g={size:{type:String,default:"large"},shape:{type:String,default:"square"},sharp:{type:String,default:""},type:{type:String,default:"ghost"},fillColor:{type:String,default:""},fontWeight:{type:String,default:"normal"},fontColor:{type:String,default:""}},V=e=>{const s=Vue.ref(null),o=Vue.reactive({}),u=Vue.computed(()=>{const{size:t,shape:r,type:l,fontWeight:a}=e;return["default",`size-${t}`,`shape-${r}`,`type-${l}`,`font-weight-${a}`]}),d=Vue.computed(()=>{const t={},{fillColor:r,type:l,fontColor:a}=e;return l==="fill"&&r&&(t.background=r),a&&(l==="ghost"&&(t.borderColor=a),t.color=a),t});return Vue.onMounted(()=>{Vue.nextTick(()=>{var l;const{shape:t,sharp:r}=e;if(t==="circle"){const i=(((l=s.value)==null?void 0:l.offsetHeight)||20)/2+"px";if(o.paddingLeft=i,o.paddingRight=i,o.borderRadius=i,r){const p=f(`border-${r}-radius`);o[p]=0}}})}),{sizeStyle:o,computedClass:u,tagRef:s,colorStyle:d}},c=Vue.defineComponent({name:"MdTag",props:g,setup(e){const{sizeStyle:s,computedClass:o,tagRef:u,colorStyle:d}=V(e);return{sizeStyle:s,computedClass:o,tagRef:u,colorStyle:d}}}),y={ref:"tagRef",class:"md-tag"},h={class:"quarter-content"};function k(e,s){return Vue.openBlock(),Vue.createBlock("div",y,[e.shape==="quarter"?(Vue.openBlock(),Vue.createBlock("div",{key:0,class:e.computedClass},[Vue.createVNode("div",h,[Vue.renderSlot(e.$slots,"default")]),Vue.createVNode("div",{class:"quarter-bg",style:e.colorStyle},null,4)],2)):e.shape==="coupon"?(Vue.openBlock(),Vue.createBlock("div",{key:1,class:e.computedClass},[Vue.createVNode("div",{class:"coupon-container",style:e.colorStyle},[e.shape==="coupon"?(Vue.openBlock(),Vue.createBlock("div",{key:0,class:"left-coupon",style:{background:e.fillColor?"radial-gradient(circle at left, transparent 33%, "+e.fillColor+" 33%)":""}},null,4)):Vue.createCommentVNode("v-if",!0),Vue.renderSlot(e.$slots,"default"),e.shape==="coupon"?(Vue.openBlock(),Vue.createBlock("div",{key:1,class:"right-coupon",style:{background:e.fillColor?"radial-gradient(circle at right, transparent 33%, "+e.fillColor+" 33%)":""}},null,4)):Vue.createCommentVNode("v-if",!0)],4)],2)):(Vue.openBlock(),Vue.createBlock("div",{key:2,class:e.computedClass,style:[e.colorStyle,e.sizeStyle]},[Vue.renderSlot(e.$slots,"default")],6))],512)}c.render=k;var n=c;n.install=e=>{e.component(n.name,n)};var v=n;export{v as t};
