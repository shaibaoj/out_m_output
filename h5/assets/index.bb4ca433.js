import{r as o}from"./index.96369f00.js";import{i as t}from"./index.fd5831e2.js";var a=Vue.defineComponent({name:"MdButton",components:{[o.name]:o,[t.name]:t},props:{type:{type:String,default:"default"},nativeType:{type:String,default:"button"},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},size:{type:String,default:"large"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}}),d={class:"md-button-inner"},u={class:"md-button-content"};function r(e,s){const l=Vue.resolveComponent("md-activity-indicator-rolling"),i=Vue.resolveComponent("md-icon");return Vue.openBlock(),Vue.createBlock("button",{type:e.nativeType,class:["md-button",[e.type,e.inactive?"inactive":"active",e.inline?"inline":"block",e.round?"round":"",e.plain?"plain":"",e.size==="small"?"small":""]],disabled:e.inactive||e.type==="disabled"},[Vue.createVNode("div",d,[e.loading?(Vue.openBlock(),Vue.createBlock(l,{key:0,class:"md-button-loading"})):e.icon?(Vue.openBlock(),Vue.createBlock(i,{key:1,name:e.icon,svg:e.iconSvg},null,8,["name","svg"])):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",u,[Vue.renderSlot(e.$slots,"default")])])],10,["type","disabled"])}a.render=r;var n=a;n.install=e=>{e.component(n.name,n)};var m=n;export{m as b};
