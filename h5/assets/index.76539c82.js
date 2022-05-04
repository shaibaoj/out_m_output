import{i as u}from"./index.16607fdf.js";var w=Vue.defineComponent({name:"MdActivityIndicatorRolling",props:{size:{type:Number,default:70},width:{type:Number,default:void 0},color:{type:String,default:"#2F86F6"},borderColor:{type:String,default:"rgba(0, 0, 0, .1)"},fill:{type:String,default:"transparent"},linecap:{type:String,default:"round"},rotate:{type:Number,default:0},process:{type:Number,default:void 0}},setup(e,r){const t=Vue.computed(()=>`md-activity-indicator-rolling-keyframes-${e.size}`),o=Vue.computed(()=>e.width||e.size/12),i=Vue.computed(()=>e.size*3.1415),n=Vue.computed(()=>e.process?`${e.process*i.value} ${(1-e.process)*i.value}`:""),a=Vue.computed(()=>e.size/2),s=Vue.computed(()=>e.size+2*o.value),h=Vue.ref(2),g=Vue.computed(()=>e.process===void 0);return{id:t,strokeWidth:o,circlePerimeter:i,strokeDasharray:n,radius:a,viewBoxSize:s,duration:h,isAutoAnimation:g}}}),p=w,C={class:"md-activity-indicator-rolling"},S={class:"rolling-container"},N={key:0,class:"circle"},$={class:"content"};function b(e,r){return Vue.openBlock(),Vue.createBlock("div",C,[Vue.createVNode("div",S,[(Vue.openBlock(),Vue.createBlock("svg",{viewBox:`0 0 ${e.viewBoxSize} ${e.viewBoxSize}`,style:{width:`${e.size}px`,height:`${e.size}px`,transform:`rotateZ(${e.rotate}deg)`},preserveAspectRatio:"xMidYMid",class:"md-activity-indicator-svg rolling"},[Vue.createVNode("circle",{fill:"none",stroke:e.borderColor,"stroke-width":e.strokeWidth,cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,r:e.radius},null,8,["stroke","stroke-width","cx","cy","r"]),e.$slots.circle?Vue.renderSlot(e.$slots,"circle",{key:1}):(Vue.openBlock(),Vue.createBlock("g",N,[e.isAutoAnimation||e.process>0?(Vue.openBlock(),Vue.createBlock("circle",{key:0,class:"stroke",cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,fill:e.fill,stroke:e.color,"stroke-width":e.strokeWidth,"stroke-dasharray":e.isAutoAnimation?`${110*e.circlePerimeter/125}`:e.strokeDasharray,"stroke-linecap":e.linecap,r:e.radius},[e.isAutoAnimation?(Vue.openBlock(),Vue.createBlock("animate",{key:0,attributeName:"stroke-dashoffset",values:`${360*e.circlePerimeter/125};${140*e.circlePerimeter/125}`,dur:"2.2s",keyTimes:"0;1",calcMode:"spline",fill:"freeze",keySplines:"0.41,0.314,0.8,0.54",repeatCount:"indefinite",begin:"0"},null,8,["values"])):Vue.createCommentVNode("v-if",!0),e.isAutoAnimation?(Vue.openBlock(),Vue.createBlock("animateTransform",{key:1,dur:`${e.duration}s`,values:`0 ${e.viewBoxSize/2} ${e.viewBoxSize/2};360 ${e.viewBoxSize/2} ${e.viewBoxSize/2}`,attributeName:"transform",type:"rotate",calcMode:"linear",keyTimes:"0;1",begin:"0",repeatCount:"indefinite"},null,8,["dur","values"])):Vue.createCommentVNode("v-if",!0)],8,["cx","cy","fill","stroke","stroke-width","stroke-dasharray","stroke-linecap","r"])):Vue.createCommentVNode("v-if",!0)])),Vue.renderSlot(e.$slots,"defs")],12,["viewBox"])),Vue.createVNode("div",$,[Vue.renderSlot(e.$slots,"default")])])])}p.render=b;var l=p,y=Vue.defineComponent({name:"MdActivityIndicatorRollingSuccess",components:{[l.name]:l},props:{size:{type:Number,default:70},color:{type:String,default:"#2F86F6"},isSuccess:{type:Boolean,default:!1}},setup(e,r){const t=Vue.ref(!1),o=Vue.ref(Date.now()),i=Vue.ref(!1),n=Vue.computed(()=>e.size/16),a=Vue.computed(()=>e.size/2),s=Vue.computed(()=>e.size+2*n.value);return{animating:t,startTmp:o,successFlag:i,strokeWidth:n,radius:a,viewBoxSize:s}}}),A={class:"md-activity-indicator-rolling-success"},F={name:"circle"};function M(e,r){const t=Vue.resolveComponent("md-activity-indicator-rolling");return Vue.openBlock(),Vue.createBlock("div",A,[Vue.createVNode(t,{width:e.strokeWidth,radius:e.radius,fill:"#FFF6F1","border-color":"transparent"},Vue.createSlots({default:Vue.withCtx(()=>[e.isSuccess?(Vue.openBlock(),Vue.createBlock("svg",{key:0,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",class:"right",style:{transform:`translate(-50%, -50%) scale(${e.size/70})`}},[Vue.createVNode("g",null,[Vue.createVNode("line",{x1:"32",y1:"47",x2:"45",y2:"62",style:{strokeWidth:e.strokeWidth,stroke:e.color},"stroke-dasharray":"20"},null,4),Vue.createVNode("line",{x1:"42",y1:"62",x2:"68.4",y2:"40",style:{strokeWidth:e.strokeWidth,stroke:e.color},"stroke-dasharray":"35"},null,4)])],4)):Vue.createCommentVNode("v-if",!0)]),_:2},[e.isSuccess?{name:"circle",fn:Vue.withCtx(()=>[Vue.createVNode("g",F,[Vue.createVNode("circle",{class:"success",cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,fill:"#FFF6F1",stroke:"none",r:e.radius},null,8,["cx","cy","r"])])])}:void 0]),1032,["width","radius"])])}y.render=M;var d=y,f=Vue.defineComponent({name:"MdActivityIndicatorSpinning",components:{[u.name]:u},props:{size:{type:Number,default:70},color:{type:String,default:"dark",validator(e){return e==="dark"||e==="light"}}}});function W(e,r){const t=Vue.resolveComponent("md-icon");return Vue.openBlock(),Vue.createBlock("div",{class:["md-activity-indicator-spinning",{dark:e.color==="dark"}]},[Vue.createVNode(t,{class:"md-activity-indicator-svg",name:"spinner",style:{width:`${e.size}px`,height:`${e.size}px`}},null,8,["style"])],2)}f.render=W;var m=f,k=Vue.defineComponent({name:"MdActivityIndicatorCarouselCircle",props:{size:{type:Number,default:30},index:{type:Number,default:0},animateValues:{type:Array,default:()=>[]}},setup(e){const r=Vue.computed(()=>e.index*e.size*1.5+e.size/2),t=Vue.computed(()=>e.animateValues.join(";")),o=Vue.computed(()=>e.animateValues.map(i=>i*e.size/2).join(";"));return{cx:r,opacityValues:t,sizeValues:o}}});function I(e,r){return Vue.openBlock(),Vue.createBlock("circle",{cx:e.cx,cy:e.size/2,r:e.size/2},[Vue.createCommentVNode(" eslint-disable vue/attribute-hyphenation "),Vue.createVNode("animate",{values:e.opacityValues,attributeName:"fill-opacity",attributeType:"XML",begin:"0s",dur:"1s",calcMode:"linear",repeatCount:"indefinite"},null,8,["values"]),Vue.createVNode("animate",{values:e.sizeValues,attributeName:"r",attributeType:"XML",begin:"0s",dur:"1s",calcMode:"linear",repeatCount:"indefinite"},null,8,["values"])],8,["cx","cy","r"])}k.render=I;var V=k,z=Vue.defineComponent({name:"MdActivityIndicatorCarousel",components:{[V.name]:V},props:{size:{type:Number,default:30},color:{type:String,default:"#2F86F6"}},setup(e,r){const t=Vue.ref([[1,.8,.6,.6,.6,.8,1],[.6,.8,1,.8,.6,.6,.6],[.6,.6,.6,.8,1,.8,.6]]),o=Vue.computed(()=>{const n=e.size,a=t.value.length;return a*n+(a-1)*n/2}),i=Vue.computed(()=>`0 0 ${o.value} ${e.size}`);return{circleAnimateValues:t,viewBox:i,viewWidth:o}}}),T={class:"md-activity-indicator-carousel"};function R(e,r){const t=Vue.resolveComponent("md-activity-indicator-carousel-circle");return Vue.openBlock(),Vue.createBlock("div",T,[(Vue.openBlock(),Vue.createBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,fill:e.color,style:{width:`${e.viewWidth}px`,height:`${e.size}px`},class:"md-activity-indicator-svg carouseling"},[(Vue.openBlock(!0),Vue.createBlock(Vue.Fragment,null,Vue.renderList(e.circleAnimateValues,(o,i)=>(Vue.openBlock(),Vue.createBlock(t,{key:`carousel-circle-${i}`,size:e.size,index:i,"animate-values":o},null,8,["size","index","animate-values"]))),128))],12,["viewBox","fill"]))])}z.render=R;var v=z,B=Vue.defineComponent({name:"MdActivityIndicator",components:{[l.name]:l,[d.name]:d,[m.name]:m,[v.name]:v},props:{type:{type:String,default:"roller"},size:{type:Number,default:70},width:{type:Number,default:void 0},color:{type:String,default:""},textColor:{type:String,default:"#999"},textSize:{type:Number,default:void 0},vertical:{type:Boolean,default:!1}},setup(e){return{innerColor:Vue.computed(()=>e.color?e.color:e.type==="spinner"?"dark":"#2F86F6")}}}),P={class:"indicator-loading"};function D(e,r){const t=Vue.resolveComponent("md-activity-indicator-rolling"),o=Vue.resolveComponent("md-activity-indicator-rolling-success"),i=Vue.resolveComponent("md-activity-indicator-spinning"),n=Vue.resolveComponent("md-activity-indicator-carousel");return Vue.openBlock(),Vue.createBlock("div",{class:["md-activity-indicator",e.type]},[Vue.createVNode("div",{class:["indicator-container",{vertical:e.vertical}]},[Vue.createVNode("div",P,[e.type==="roller"?(Vue.openBlock(),Vue.createBlock(t,{key:0,size:e.size,color:e.innerColor,width:e.width},null,8,["size","color","width"])):e.type==="roller-success"?(Vue.openBlock(),Vue.createBlock(o,{key:1,size:e.size,color:e.color},null,8,["size","color"])):e.type==="spinner"?(Vue.openBlock(),Vue.createBlock(i,{key:2,size:e.size,color:e.innerColor},null,8,["size","color"])):e.type==="carousel"?(Vue.openBlock(),Vue.createBlock(n,{key:3,size:e.size,color:e.innerColor},null,8,["size","color"])):Vue.createCommentVNode("v-if",!0)]),e.$slots.default?(Vue.openBlock(),Vue.createBlock("div",{key:0,style:{fontSize:`${e.textSize}px`,color:e.textColor},class:"md-activity-indicator-text indicator-text"},[Vue.renderSlot(e.$slots,"default")],4)):Vue.createCommentVNode("v-if",!0)],2)],2)}B.render=D;var c=B;c.install=e=>{e.component(c.name,c)};export{l as r};
