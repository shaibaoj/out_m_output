import{i as u,e as s,f as V}from"./index.16607fdf.js";var r=Vue.defineComponent({name:"MdField",props:{title:{type:String,default:""},brief:{type:String,default:""},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},setup(){Vue.provide("rootField",Vue.getCurrentInstance())}}),f={key:0,class:"md-field_header"},c={class:"md-field_header_heading"},m={class:"md-field_header_action"},p={class:"md-field_content"},v={key:1,class:"md-field_footer"};function h(e,l){return Vue.openBlock(),Vue.createBlock(Vue.Fragment,null,[Vue.createCommentVNode(" \u8003\u8651\u6362\u4E2A\u6807\u7B7E "),Vue.createVNode("section",{class:["md-field",[{"md-field--is-plain":e.plain,"md-field--is-disabled":e.disabled}]]},[e.title||e.brief||e.$slots.header||e.$slots.action?(Vue.openBlock(),Vue.createBlock("header",f,[Vue.createVNode("div",c,[e.title?(Vue.openBlock(),Vue.createBlock("legend",{key:0,class:"md-field_header_title",textContent:Vue.toDisplayString(e.title)},null,8,["textContent"])):Vue.createCommentVNode("v-if",!0),e.brief?(Vue.openBlock(),Vue.createBlock("p",{key:1,class:"md-field_header_brief",textContent:Vue.toDisplayString(e.brief)},null,8,["textContent"])):Vue.createCommentVNode("v-if",!0),Vue.renderSlot(e.$slots,"header")]),Vue.createVNode("div",m,[Vue.renderSlot(e.$slots,"action")])])):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",p,[Vue.renderSlot(e.$slots,"default")]),e.$slots.footer?(Vue.openBlock(),Vue.createBlock("footer",v,[Vue.renderSlot(e.$slots,"footer")])):Vue.createCommentVNode("v-if",!0)],2)],2112)}r.render=h;var t=r,i=Vue.defineComponent({name:"MdFieldItem",components:{MdIcon:u},props:{title:{type:String,default:""},placeholder:{type:String,default:""},content:{type:String,default:""},addon:{type:String,default:""},arrow:{type:[Boolean,String],default:!1},solid:{type:Boolean,default:!1},alignRight:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},highlight:{type:String,default:""},isPadding:{type:Boolean,default:!0},titlePosition:{type:String,default:"fixed"},customContentClass:{type:Array,default:()=>[]}},setup(e,l){const o=Vue.inject("rootField",{}),n=Vue.computed(()=>s?"is-ios":V?"is-android":"is-browser"),a=Vue.computed(()=>o.disabled||e.disabled);return{inputEnv:n,currentDisabled:a}}}),k={class:"md-field-item-content"},y={key:1,class:"md-field-item-left"},B={class:"md-field-item-control"},g={key:2,class:"md-field-item-right"},C={key:0,class:"md-field-item-children"};function S(e,l){const o=Vue.resolveComponent("md-icon");return Vue.openBlock(),Vue.createBlock("div",{class:["md-field-item",[e.solid?"is-solid":"",e.currentDisabled?"is-disabled":"",e.alignRight?"is-align-right":"",e.inputEnv]]},[Vue.createVNode("div",k,[e.title?(Vue.openBlock(),Vue.createBlock("label",{key:0,class:"md-field-item-title",textContent:Vue.toDisplayString(e.title)},null,8,["textContent"])):Vue.createCommentVNode("v-if",!0),e.$slots.left?(Vue.openBlock(),Vue.createBlock("div",y,[Vue.renderSlot(e.$slots,"left")])):Vue.createCommentVNode("v-if",!0),Vue.createVNode("div",B,[Vue.renderSlot(e.$slots,"default",{},()=>[e.content?(Vue.openBlock(),Vue.createBlock(Vue.Fragment,{key:0},[Vue.createTextVNode(Vue.toDisplayString(e.content),1)],2112)):e.placeholder?(Vue.openBlock(),Vue.createBlock("div",{key:1,class:"md-field-item-placeholder",textContent:Vue.toDisplayString(e.placeholder)},null,8,["textContent"])):Vue.createCommentVNode("v-if",!0)])]),e.arrow||e.addon||e.$slots.right?(Vue.openBlock(),Vue.createBlock("div",g,[Vue.renderSlot(e.$slots,"right",{},()=>[Vue.createTextVNode(Vue.toDisplayString(e.addon),1)]),e.arrow?(Vue.openBlock(),Vue.createBlock(o,{key:0,name:e.arrow===!0?"arrow-right":e.arrow,size:"md"},null,8,["name"])):Vue.createCommentVNode("v-if",!0)])):Vue.createCommentVNode("v-if",!0)]),e.$slots.children?(Vue.openBlock(),Vue.createBlock("div",C,[Vue.renderSlot(e.$slots,"children")])):Vue.createCommentVNode("v-if",!0)],2)}i.render=S;var d=i;t.install=e=>{e.component(t.name,t),e.component(d.name,d)};var b=t;export{b as f};
