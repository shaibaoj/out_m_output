import{l as u}from"./loadmore.53f23bce.js";import"./index.e060606b.js";import{s as i}from"./index.878b4bc3.js";import"./index.a6d982ec.js";import"./index.88e9b80e.js";import{n as d}from"./navbar.5a7b3370.js";import{_ as m}from"./index.7a16820c.js";import"./core.esm.4957b73a.js";import"./index.709eda75.js";/* empty css                                                           */const p={components:{[i.name]:i,navBar:d,loadMore:u},data(){return{page:{ipage:0,hasMore:!0},tabCurrentIndex:0,navList:[{text:"\u79EF\u5206\u6536\u5165"},{text:"\u79EF\u5206\u652F\u51FA"}],items:[],loading:!1}},mounted(){this.$route.query.state&&(this.tabCurrentIndex=+this.$route.query.state),this.loadData()},methods:{back(){this.$router.go(-1)},loadData(t){t==="tabChange"&&(this.items=[]),this.loading!==!0&&(this.loading=!0,this.tabCurrentIndex===0?(this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.order.list",{maxPoints:.01,ipage:this.page.ipage}).then(o=>{this.loading=!1,o.data.items&&this.items.push(...o.data.items)})):(this.page.ipage=this.page.ipage+1,this.$http.post("/cms.member.point.list",{maxPoints:.01,ipage:this.page.ipage}).then(o=>{this.loading=!1,o.data.items&&this.items.push(...o.data.items)})))},changeTab(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick(t){this.tabCurrentIndex=t,this.loading=!1,this.page.ipage=0,this.loadData("tabChange")}}},V={class:"page"},_={class:"fix"},h=Vue.createTextVNode("\u8BA2\u5355\u4FE1\u606F"),g={class:"container"},v={class:"navbar"},k=["onClick"],b={key:0},f={class:"memo"},C={class:"num"},x={class:"attr-box"},E={key:1},y={class:"memo"},B={class:"num"},N={class:"attr-box"};function D(t,o,S,w,a,n){const r=Vue.resolveComponent("nav-bar"),l=Vue.resolveComponent("load-more"),c=Vue.resolveComponent("md-scroll-view");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createElementVNode("div",_,[Vue.createVNode(r,{onOnClickBack:n.back,class:"nav",rightShow:!1},{default:Vue.withCtx(()=>[h]),_:1},8,["onOnClickBack"])]),Vue.createElementVNode("div",g,[Vue.createElementVNode("div",v,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.navList,(e,s)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:s,class:Vue.normalizeClass(["nav-item",{current:a.tabCurrentIndex===s}]),onClick:I=>n.tabClick(s)},Vue.toDisplayString(e.text),11,k))),128))]),Vue.createVNode(c,{class:"list-scroll-content","scroll-y":"",onScrolltolower:n.loadData},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.items,(e,s)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:s,class:"order-item"},[a.tabCurrentIndex==0?(Vue.openBlock(),Vue.createElementBlock("div",b,[Vue.createElementVNode("div",f,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.memo),1),Vue.createElementVNode("span",C,"+"+Vue.toDisplayString(e.points),1)]),Vue.createElementVNode("div",x,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.created_at),1)])])):(Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",y,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.pay_memo),1),Vue.createElementVNode("span",B,"-"+Vue.toDisplayString(e.points),1)]),Vue.createElementVNode("div",N,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.created_at),1)])]))]))),128)),Vue.createVNode(l,{visible:a.loading},null,8,["visible"])]),_:1},8,["onScrolltolower"])])])}var A=m(p,[["render",D],["__scopeId","data-v-59a1746c"]]);export{A as default};
