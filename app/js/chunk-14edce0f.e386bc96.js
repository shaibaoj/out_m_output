(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14edce0f"],{"0780":function(t,a,s){"use strict";var i=s("20dd"),e=s.n(i);e.a},"17b0":function(t,a,s){},"20dd":function(t,a,s){},2343:function(t,a,s){},"4c87":function(t,a,s){"use strict";var i=s("cacd"),e=s.n(i);e.a},"6d7b":function(t,a,s){},"6f56":function(t,a,s){"use strict";var i=s("17b0"),e=s.n(i);e.a},7016:function(t,a,s){"use strict";var i=s("7036"),e=s.n(i);e.a},7036:function(t,a,s){},9194:function(t,a,s){},a288:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return"column"==t.goodsType?s("column",{attrs:{"item-data":t.itemData}}):"ju"==t.goodsType?s("ju",{attrs:{"item-data":t.itemData}}):"list"==t.goodsType?s("list",{attrs:{"item-data":t.itemData}}):"qiang"==t.goodsType?s("qiang",{attrs:{"item-data":t.itemData}}):"history"==t.goodsType?s("history",{attrs:{"item-data":t.itemData}}):"favorite"==t.goodsType?s("favorite",{attrs:{"item-data":t.itemData}}):"top"==t.goodsType?s("top",{attrs:{"item-data":t.itemData,top:t.top}}):"zhishu"==t.goodsType?s("zhishu",{attrs:{"item-data":t.itemData}}):"video"==t.goodsType?s("goods-video",{attrs:{"item-data":t.itemData}}):"video-list"==t.goodsType?s("video-list",{attrs:{"item-data":t.itemData}}):"topic"==t.goodsType?s("topic",{attrs:{"item-data":t.itemData}}):s("column",{attrs:{"item-data":t.itemData}})},e=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"image-wrapper"},[s("img",{attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),t.itemData.goods.day_sales>0?s("div",{staticClass:"daysale"},[t._v("\n\t\t\t今日销量:"+t._s(t.itemData.goods.day_sales)+"单\n\t\t")]):t._e()]),s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))]),t.itemData.click.share_commission>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"commission"},[t._v("\n\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t")])]):t._e(),s("div",{staticClass:"item-box"},[s("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("span",{staticClass:"coupon-money"},[s("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()]),s("div",{staticClass:"item-box"},[s("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),s("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))])])])},c=[],n={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},m=n,r=(s("c498"),s("9ca4")),l=Object(r["a"])(m,o,c,!1,null,"f404182e",null),p=l.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),s("div",{staticClass:"item-box"},[t.itemData.goods.juhuasuan>0?s("div",{staticClass:"tqg"},[s("span",{staticClass:"iconfont"},[t._v("聚划算")]),s("b",[t._v("¥"+t._s(t.itemData.goods.price))])]):t._e(),t.itemData.goods.taoqinggou>0?s("div",{staticClass:"tqg"},[s("span",{staticClass:"iconfont"},[t._v("淘抢购")]),s("b",[t._v("¥"+t._s(t.itemData.goods.price))])]):t._e(),s("span",{staticClass:"volume"},[t._v(t._s(t.itemData.goods.volume_str)+"人已购")])]),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t折后 ¥ "),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()])])])},u=[],v={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},d=v,D=(s("f1fc"),Object(r["a"])(d,_,u,!1,null,"62eba1ea",null)),h=D.exports,g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),s("div",{staticClass:"item-box"},[s("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()]),s("div",{staticClass:"item-box"},[s("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),s("span",[t._v("已售"),s("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")])])])])},C=[],y={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},b=y,x=(s("7016"),Object(r["a"])(b,g,C,!1,null,"20459b0d",null)),f=x.exports,$=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.coupon.coupon_money>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e(),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t券后"),s("span",{staticClass:"em"},[t._v("¥"+t._s(t.itemData.price.buy_price))])]),s("span",{staticClass:"volume"},[t._v("已售 "+t._s(t.itemData.goods.volume_str))])]),t.itemData.click.share_commission>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e()])])},T=[],k={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},j=k,q=(s("6f56"),Object(r["a"])(j,$,T,!1,null,"87e7a212",null)),P=q.exports,O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),s("div",{staticClass:"item-box"},[s("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.price))]),s("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))])]),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t券后价¥"),s("em",[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("span",{staticClass:"coupon-money"},[s("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()])])])},N=[],E={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},A=E,w=(s("4c87"),Object(r["a"])(A,O,N,!1,null,"a8c64b88",null)),M=w.exports,F=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),s("div",{staticClass:"item-box"},[s("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.price))]),s("span",[t._v("已售 "+t._s(t.itemData.goods.volume_str))])]),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t券后价¥"),s("em",[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("span",{staticClass:"coupon-money"},[s("i",[t._v(t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e()])])])},z=[],I={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},L=I,J=(s("d1c1"),Object(r["a"])(L,F,z,!1,null,"70bd412d",null)),S=J.exports,H=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}}),s("div",{staticClass:"top"},[t._v("NO."+t._s(t.top))])]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.profile.sales2h>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"sales2h"},[t._v("近2小时疯抢"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.profile.sales2h))]),t._v("件")]),t.itemData.click.share_commission>0?s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")]):t._e()]):t._e(),s("div",{staticClass:"item-box"},[s("div",{staticClass:"price"},[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.price))])]),t.itemData.goods.coupon_money>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")])]):t._e(),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("券后价 ¥"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),s("div",{staticClass:"qiang-btn"},[t._v("立即抢")])])])])},R=[],U={props:{itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},V=U,B=(s("cc3b"),Object(r["a"])(V,H,R,!1,null,"2e1ada42",null)),G=B.exports,K=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.goods.pic_url}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),s("div",{staticClass:"item-box"},[t.itemData.goods.weight>0?s("div",{staticClass:"weight"},[t._v("\n\t\t\t\t热销指数\n\t\t\t\t"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.goods.weight))])]):t._e()]),s("div",{staticClass:"item-box"},[s("div",{staticClass:"price"},[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.price))])]),t.itemData.goods.coupon_money>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]),t.itemData.click.share_commission>0?s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")]):t._e()]):t._e(),s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-price"},[t._v("券后价 ¥ "),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),s("div",{staticClass:"qiang-btn"},[t._v("立即抢")])])])])},Q=[],W={props:{itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})}}},X=W,Y=(s("cc80"),Object(r["a"])(X,K,Q,!1,null,"60f8397c",null)),Z=Y.exports,tt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"img"},[s("img",{staticClass:"pic",attrs:{src:t.itemData.goods.pic_url,mode:"aspectFill"}}),s("img",{staticClass:"play",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-08/5d7464f96d569.png",mode:"aspectFill"}})]),s("p",{staticClass:"title clamp"},[t._v(t._s(t.itemData.goods.title))]),s("p",{staticClass:"price"},[t._v("￥"+t._s(t.itemData.price.price))])])},at=[],st={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid,video:1}})})}}},it=st,et=(s("cae9"),Object(r["a"])(it,tt,at,!1,null,"d0f4a2d0",null)),ot=et.exports,ct=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.navToDetailPage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{staticClass:"img",attrs:{src:t.itemData.goods.pic_url}}),s("img",{staticClass:"play",attrs:{src:"https://img.youdanhui.cn/cms_img/2019-09-08/5d7464f96d569.png",mode:"aspectFill"}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.goods.title))])]),t.itemData.click.share_commission>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.click.share_commission)+"元\n\t\t\t")])]):t._e(),s("div",{staticClass:"item-box"},[s("span",{staticClass:"coupon-price"},[t._v("券后价¥ "),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.price.buy_price))])]),t.itemData.coupon.coupon_money>0?s("div",{staticClass:"coupon-money"},[t._v("￥"+t._s(t.itemData.coupon.coupon_money)+"元券")]):t._e()]),s("div",{staticClass:"item-box"},[s("span",[t._v(t._s(t.itemData.goods.user_type_name)+" ¥"+t._s(t.itemData.price.buy_price))]),s("span",[t._v("已售"),s("em",[t._v(t._s(t.itemData.goods.volume_str))]),t._v("件")])])])])},nt=[],mt={props:{itemData:{type:Object}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid,video:1}})})}}},rt=mt,lt=(s("0780"),Object(r["a"])(rt,ct,nt,!1,null,"7f5af2c0",null)),pt=lt.exports,_t=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item",on:{click:function(a){return t.postMessage(t.itemData)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.itemData.pic_url}})]),s("div",{staticClass:"content"},[t.itemData.title?s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"title"},[t._v(t._s(t.itemData.title))])]):t._e(),t.itemData.content?s("div",{staticClass:"item-box expand"},[s("span",{staticClass:"comment",domProps:{innerHTML:t._s(t.highlight(t.itemData.content))}})]):t._e(),t.itemData.sales2h>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"sales2h"},[t._v("近2小时疯抢"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.sales2h))]),t._v("件")]),t.itemData.share_commission>0?s("div",{staticClass:"commission"},[t._v("\n\t\t\t\t返"+t._s(t.itemData.share_commission)+"元\n\t\t\t")]):t._e()]):t._e(),t.itemData.source?s("div",{staticClass:"item-box"},[s("div",{staticClass:"source"},[t._v(t._s(t.itemData.source))])]):t._e(),t.itemData.user_type_name?s("div",{staticClass:"item-box"},[s("div",{staticClass:"price"},[t._v(t._s(t.itemData.user_type_name)+" ¥"+t._s(t.itemData.price))])]):t._e(),t.itemData.lijin_price>0?s("div",[t.itemData.lijin_price>0?s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money gray"},[t._v("券后价￥"+t._s(t.itemData.buy_price))]),t.itemData.volume>0?s("div",{staticClass:"coupon-money gray"},[t._v("销量"+t._s(t.itemData.volume))]):t._e()]):t._e(),s("div",{staticClass:"item-box"},[s("div",[t.itemData.lijin_price>0?s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t¥"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.lijin_price))]),s("span",{staticClass:"lijin_price"},[t._v("预估支付")])]):t.itemData.buy_price>0?s("div",{staticClass:"coupon-price"},[t._v("券后价 ¥"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.buy_price))])]):t._e()]),s("div",{staticClass:"qiang-btn"},[t._v("立即抢")])])]):t.itemData.coupon_money>0?s("div",[s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money gray"},[t.itemData.price>0?s("span",[t._v("原价￥"+t._s(t.itemData.price))]):t._e()]),t.itemData.volume>0?s("div",{staticClass:"coupon-money gray"},[t._v("销量"+t._s(t.itemData.volume))]):t._e()]),s("div",{staticClass:"item-box"},[s("div",[t.itemData.buy_price>0?s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t¥"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.buy_price))]),s("span",{staticClass:"lijin_price"},[t._v("券后价")])]):t._e()]),s("div",{staticClass:"qiang-btn"},[t._v("立即抢购")])])]):s("div",[s("div",{staticClass:"item-box"},[s("div",{staticClass:"coupon-money gray"},[t.itemData.price>0?s("span",[t._v("原价￥"+t._s(t.itemData.price))]):t._e()]),t.itemData.volume>0?s("div",{staticClass:"coupon-money gray"},[t._v("销量"+t._s(t.itemData.volume))]):t._e()]),s("div",{staticClass:"item-box"},[s("div",[t.itemData.buy_price>0?s("div",{staticClass:"coupon-price"},[t._v("优惠价 ¥"),s("span",{staticClass:"em"},[t._v(t._s(t.itemData.buy_price))])]):t._e()]),s("div",{staticClass:"qiang-btn"},[t._v("立即抢购")])])])])])},ut=[],vt=(s("6d57"),s("f548"),s("a2c5")),dt=s.n(vt),Dt={props:{itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})},navToDetailPage(t){this.$nextTick(()=>{this.$router.push({path:"/goods",query:{id:t.goods.num_iid}})})},cdnImg(t){return"https://imgcdn.youdanhui.com/imgcdn/"+dt.a.MD5(t)+".jpg?src="+encodeURIComponent(t)},highlight(t){return t=t.replace(/([0-9.]+)元([包邮]*)/g,"<span class='highlight' style='color:red'>$1元$2</span>"),t},postMessage(t){if("goods"==t.type){var a={title:t.title,load_url:"kuaibao",click_url:t.url};a["num_iid"]=t.num_iid,this.$nav.postMessageStr("loading"),this.$nav.postMessage({jump_type:"native",action:"load_action",role:"member",params:a})}}},computed:{navItems(){const t=[];return this.navList.forEach((a,s)=>{t.push({name:a.cid,cid:a.cid,label:a.name})}),t}}},ht=Dt,gt=(s("a348"),Object(r["a"])(ht,_t,ut,!1,null,"d65efddc",null)),Ct=gt.exports,yt={components:{column:p,ju:h,list:f,qiang:P,history:M,favorite:S,top:G,zhishu:Z,goodsVideo:ot,videoList:pt,topic:Ct},props:{goodsType:{type:String},itemData:{type:Object},top:{type:Number}},data(){return{}},methods:{navAction(t){this.$nav.toNav(t)},navToPage(t,a){this.$nextTick(()=>{this.$router.push({path:t,query:a||{}})})}}},bt=yt,xt=Object(r["a"])(bt,i,e,!1,null,"8787c300",null);a["a"]=xt.exports},a348:function(t,a,s){"use strict";var i=s("ca62"),e=s.n(i);e.a},a8e2:function(t,a,s){},c498:function(t,a,s){"use strict";var i=s("6d7b"),e=s.n(i);e.a},ca62:function(t,a,s){},cacd:function(t,a,s){},cae9:function(t,a,s){"use strict";var i=s("cd22"),e=s.n(i);e.a},cc3b:function(t,a,s){"use strict";var i=s("a8e2"),e=s.n(i);e.a},cc80:function(t,a,s){"use strict";var i=s("f098"),e=s.n(i);e.a},cd22:function(t,a,s){},d1c1:function(t,a,s){"use strict";var i=s("9194"),e=s.n(i);e.a},f098:function(t,a,s){},f1fc:function(t,a,s){"use strict";var i=s("2343"),e=s.n(i);e.a}}]);