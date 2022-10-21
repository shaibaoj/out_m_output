var T=Object.defineProperty;var B=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,w=(e,o)=>{for(var t in o||(o={}))D.call(o,t)&&C(e,t,o[t]);if(B)for(var t of B(o))P.call(o,t)&&C(e,t,o[t]);return e};import{t as k}from"./index.709eda75.js";import{p as _,i as L,n as s,c as O,U as S,H as N,S as H}from"./index.ac223714.js";import{r as U}from"./index.f5910441.js";var A={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},content:{type:String,default:""},actions:{type:Array,default:()=>[]},layout:{type:String,default:"row"},appendTo:{type:[Object,String],default:()=>globalThis.document.body},hasMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},transition:{type:String,default:"md-fade"},preventScroll:{type:Boolean,default:!1},preventScrollExclude:{type:[Object],default:void 0}},I=[S,N,H],$=(e,{emit:o})=>{const t=Vue.computed({get:()=>e.modelValue,set:()=>o(S,!1)}),d=()=>{o(S,!1)};return{dialogShow:t,close:d,onHide:()=>{o(N)},onShow:()=>{o(H)},actionHandler:r=>{r.disabled||r.loading||(typeof r.handler=="function"?r.handler.call(null,r):d())}}},E=Vue.defineComponent({name:"MdDialog",components:{MdPopup:_,MdIcon:L,MdActivityIndicatorRolling:U},props:A,emits:I,setup(e,o){return w({},$(e,o))}}),j={class:"md-dialog-content"},x={class:"md-dialog-body"},z={key:1,class:"md-dialog-icon"};function F(e,o){const t=Vue.resolveComponent("md-icon"),d=Vue.resolveComponent("md-activity-indicator-rolling"),i=Vue.resolveComponent("md-popup");return Vue.openBlock(),Vue.createBlock(Vue.Fragment,null,[Vue.createCommentVNode(" eslint-disable vue/no-v-html "),Vue.createVNode(i,{modelValue:e.dialogShow,"onUpdate:modelValue":o[3]||(o[3]=l=>e.dialogShow=l),class:"md-dialog","has-mask":e.hasMask,"mask-closable":e.maskClosable,transition:e.transition,"prevent-scroll":e.preventScroll,"prevent-scroll-exclude":e.preventScrollExclude,position:"center",onShow:e.onShow,onHide:e.onHide},{default:Vue.withCtx(()=>[Vue.createCommentVNode(" content area "),Vue.createVNode("div",j,[Vue.renderSlot(e.$slots,"header"),Vue.createVNode("div",x,[e.closable?(Vue.openBlock(),Vue.createBlock("a",{key:0,role:"button",class:"md-dialog-close",onClick:o[1]||(o[1]=(...l)=>e.close&&e.close(...l))},[Vue.createVNode(t,{name:"close"})])):Vue.createCommentVNode("v-if",!0),e.icon?(Vue.openBlock(),Vue.createBlock("div",z,[Vue.createVNode(t,{name:e.icon,svg:e.iconSvg},null,8,["name","svg"])])):Vue.createCommentVNode("v-if",!0),e.title?(Vue.openBlock(),Vue.createBlock("div",{key:2,class:"md-dialog-title",textContent:Vue.toDisplayString(e.title)},null,8,["textContent"])):Vue.createCommentVNode("v-if",!0),Vue.createCommentVNode(" text or html content "),Vue.renderSlot(e.$slots,"default",{},()=>[Vue.createVNode("div",{class:"md-dialog-text",innerHTML:e.content},null,8,["innerHTML"])])]),Vue.createCommentVNode(" buttons area "),e.actions.length>0?(Vue.openBlock(),Vue.createBlock("div",{key:0,class:["md-dialog-actions",{"is-column":e.layout==="column"}]},[(Vue.openBlock(!0),Vue.createBlock(Vue.Fragment,null,Vue.renderList(e.actions,(l,u)=>(Vue.openBlock(),Vue.createBlock("a",{key:u,role:"button",class:["md-dialog-btn",{disabled:!!l.disabled,warning:!l.disabled&&!!l.warning}],onTouchmove:o[2]||(o[2]=Vue.withModifiers(()=>{},["prevent"])),onClick:r=>e.actionHandler(l)},[l.loading?(Vue.openBlock(),Vue.createBlock(d,{key:0,class:"md-dialog-btn-loading"})):l.icon?(Vue.openBlock(),Vue.createBlock(t,{key:1,class:"md-dialog-btn-icon",name:l.icon,svg:l.iconSvg,size:"md"},null,8,["name","svg"])):Vue.createCommentVNode("v-if",!0),Vue.createTextVNode(" "+Vue.toDisplayString(l.text),1)],42,["onClick"]))),128))],2)):Vue.createCommentVNode("v-if",!0)])]),_:3},8,["modelValue","has-mask","mask-closable","transition","prevent-scroll","prevent-scroll-exclude","onShow","onHide"])],2112)}E.render=F;var n=E,R="onUpdate:modelValue";n.create=function({title:e="",icon:o="",iconSvg:t=!1,content:d="",closable:i=!1,transition:l="md-bounce",actions:u=[],onShow:r=s,onHide:p=s,onClose:V=s}){var g,v,m,h;const c={title:e,icon:o,iconSvg:t,content:d,closable:i,actions:u,transition:l,preventScroll:!0,onShow:r,onHide:p,[R]:V};if(n._show=()=>{n._instance.component.proxy.updateProps({modelValue:!0})},n._instance)return n._instance.component.proxy.updateProps(c),(g=n._show)==null||g.call(n),n._instance.component.proxy;const a=n._instance=O(n,c);if((v=n._show)==null||v.call(n),(m=a==null?void 0:a.component)!=null&&m.proxy){const y=a.component.proxy.remove;a.component.proxy.remove=(...M)=>{var b;y==null||y.apply((b=a.component)==null?void 0:b.proxy,M),n._instance=null}}return(h=a==null?void 0:a.component)==null?void 0:h.proxy};n.confirm=({title:e="",icon:o="",iconSvg:t=!1,content:d="",cancelText:i=k("md.dialog.cancel"),cancelWarning:l=!1,confirmText:u=k("md.dialog.confirm"),confirmWarning:r=!1,closable:p=!1,transition:V="md-bounce",onConfirm:c=s,onCancel:a=s,onShow:g=s,onHide:v=s})=>{const m=n.create({title:e,icon:o,iconSvg:t,content:d,closable:p,transition:V,onShow:g,onHide:v,actions:[{text:i,warning:l,handler:()=>{a(),m.updateProps({modelValue:!1})}},{text:u,warning:r,handler:()=>{c(),m.updateProps({modelValue:!1})}}]});return m};n.alert=({title:e="",icon:o="",iconSvg:t=!1,content:d="",confirmText:i=k("md.dialog.confirm"),closable:l=!1,warning:u=!1,transition:r="md-bounce",onConfirm:p=s,onShow:V=s,onHide:c=s})=>{const a=n.create({title:e,icon:o,iconSvg:t,content:d,closable:l,transition:r,onShow:V,onHide:c,actions:[{text:i,warning:u,handler:()=>{p(),a.updateProps({modelValue:!1})}}]});return a};n.succeed=e=>(e.icon="success-color",n.confirm(e));n.failed=e=>(e.icon="warn-color",f.confirm(e));var f=n;f.install=e=>{e.component(f.name,f)};var K=f;export{K as d};
