import{d as g,A as h,n as C}from"./index.fd5831e2.js";import{f as D}from"./index.59a5dcdd.js";var d=["\u96F6","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396"],B=["","\u62FE","\u4F70","\u4EDF"],$=["","\u4E07","\u4EBF","\u5146"],S=["\u89D2","\u5206","\u5398","\u6BEB"],y="\u6574",F="\u5143",A="\u8D1F",I=1e15;function x(t){let u,s,l,n="",a;if(t===""||(typeof t=="string"&&(t=parseFloat(t)),t<0&&(u=!0,t=Math.abs(t)),t>=I))return"";if(t===0)return n=d[0]+F+y,n;if(t+="",t.indexOf(".")===-1?(s=t,l=""):(a=t.split("."),s=a[0],l=a[1].substr(0,4)),parseInt(s,10)>0){let e=0;for(let i=0,r=s.length;i<r;i++){const c=s.substr(i,1),o=r-i-1,m=o/4,f=o%4;c==="0"?e++:(e>0&&(n+=d[0]),e=0,n+=d[parseInt(c)]+B[f]),f===0&&e<4&&(n+=$[m])}n+=F}if(l!=="")for(let e=0,i=l.length;e<i;e++){const r=l.substr(e,1);r!=="0"&&(n+=d[Number(r)]+S[e])}return n===""?n+=d[0]+F+y:l===""&&(n+=y),u&&(n=`${A}${n}`),n}var E={value:{type:Number,default:void 0},precision:{type:Number,default:2},isRoundUp:{type:Boolean,default:!0},hasSeparator:{type:Boolean,default:!1},separator:{type:String,default:","},unit:{type:String,default:""},reverse:{type:Boolean,default:!1},transition:{type:Boolean,default:!1},isCapital:{type:Boolean,default:!1},duration:{type:Number,default:1e3}},M=t=>({doPrecision:a=>{const e=Number(`${a}e${t.precision}`),i=t.isRoundUp?Math.round(e):Math.floor(e);return Number(`${i}e-${t.precision}`).toFixed(t.precision)},doCapital:a=>x(a),doFormat:a=>{if(!t.hasSeparator)return a;const e=a.split(".");return`${Number(e[0])<0?"-":""}${D(e[0].replace(/^\-/,""),t.separator)}.${e[1]}`},doAnimateDisplay:(a,e=0,i=0)=>{if(!t.transition)return a.value;const r=o=>{if(o===1){a.value=i;return}a.value=e+(i-e)*o},c=o=>o;return h.start(r,c,C,t.duration),a.value}}),P=Vue.defineComponent({name:"MdAmount",props:E,setup(t,{slots:u}){var m,f;const s=((m=u.default)==null?void 0:m.call(u))||[],l=((f=u.unit)==null?void 0:f.call(u))||[],{doFormat:n,doPrecision:a,doCapital:e,doAnimateDisplay:i}=M(t),r=()=>{var v,p;return t.value||((p=(v=s[0])==null?void 0:v.children)==null?void 0:p.toString().trim())||0},c=Vue.ref(0);t.transition&&Vue.watch(()=>t.value,(v,p)=>{i(c,p,v)},{immediate:!0});const o=()=>[t.unit||l,t.transition?null:t.isCapital?e(r()):g?n(a(r())):r(),t.transition?n(a(c.value+"")):null];return()=>Vue.h("span",{class:{"md-amount":!0,numerical:!t.isCapital}},t.reverse?o().reverse():o())}}),N=P;N.install=t=>{t.component(N.name,N)};
