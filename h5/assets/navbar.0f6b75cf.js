/* empty css                                                           */import{_ as l}from"./index.16607fdf.js";const r={name:"nav-bar",props:{title:{type:String,default:"navBar"},leftShow:{type:Boolean,default:!0},rightShow:{type:Boolean,default:!0}},data(){return{}},methods:{onClickBack(){this.$router?this.$router.back():window.history.back()}},emits:["on-click-back","on-click-title","on-click-more"]},i=e=>(Vue.pushScopeId("data-v-0080249e"),e=e(),Vue.popScopeId(),e),s={class:"nav-bar"},a={class:"nav-left"},c=i(()=>Vue.createElementVNode("i",{class:"back-icon"},null,-1)),u={class:"nav-center"},d={class:"nav-right"},V=i(()=>Vue.createElementVNode("i",{class:"more-icon"},null,-1));function v(e,t,o,m,h,k){return Vue.openBlock(),Vue.createElementBlock("div",s,[Vue.withDirectives(Vue.createElementVNode("div",a,[Vue.createElementVNode("div",{class:"back",onClick:t[0]||(t[0]=n=>e.$emit("on-click-back"))},[Vue.renderSlot(e.$slots,"back-icon",{},()=>[c],!0)]),Vue.renderSlot(e.$slots,"left",{},void 0,!0)],512),[[Vue.vShow,o.leftShow]]),Vue.createElementVNode("div",u,[Vue.createElementVNode("h3",{class:"nav-title",onClick:t[1]||(t[1]=n=>e.$emit("on-click-title"))},[Vue.renderSlot(e.$slots,"default",{},()=>[Vue.withDirectives(Vue.createElementVNode("span",null,Vue.toDisplayString(o.title),513),[[Vue.vShow,o.title]])],!0)])]),Vue.withDirectives(Vue.createElementVNode("div",d,[Vue.renderSlot(e.$slots,"right",{},void 0,!0),Vue.createElementVNode("div",{class:"more",onClick:t[2]||(t[2]=n=>e.$emit("on-click-more"))},[Vue.renderSlot(e.$slots,"more-icon",{},()=>[V],!0)])],512),[[Vue.vShow,o.rightShow]])])}var p=l(r,[["render",v],["__scopeId","data-v-0080249e"]]);export{p as n};
