var t={md:{action_sheet:{cancel:"\u53D6\u6D88"},captcha:{sendCaptcha:"\u53D1\u9001\u9A8C\u8BC1\u7801",countdown:"{$1}\u79D2\u540E\u91CD\u53D1"},cashier:{payCash:"\u652F\u4ED8\u91D1\u989D(\u5143)",confirmPay:"\u786E\u5B9A\u652F\u4ED8",morePayWays:"\u66F4\u591A\u652F\u4ED8\u65B9\u5F0F",pay:"\u652F\u4ED8",payResultSearch:"\u652F\u4ED8\u7ED3\u679C\u67E5\u8BE2\u4E2D...",paySuccess:"\u652F\u4ED8\u6210\u529F",payFail:"\u652F\u4ED8\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",confirm:"\u6211\u77E5\u9053\u4E86"},date_picker:{year:"\u5E74",month:"\u6708",day:"\u65E5",hour:"\u65F6",minute:"\u5206",second:"\u79D2"},dialog:{confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88"},number_keyboard:{confirm:"\u786E\u5B9A"},picker:{confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88"},result_page:{networkError:"\u7F51\u7EDC\u8FDE\u63A5\u5F02\u5E38",noInformation:"\u6682\u65E0\u4FE1\u606F",lostWay:"\u60A8\u8981\u8BBF\u95EE\u7684\u9875\u9762\u5DF2\u4E22\u5931"},scroll_view:{more:{loading:"\u66F4\u591A\u52A0\u8F7D\u4E2D...",allLoaded:"\u5168\u90E8\u5DF2\u52A0\u8F7D"},refresh:{pullDownRefresh:"\u4E0B\u62C9\u5237\u65B0",freedRefresh:"\u91CA\u653E\u5237\u65B0",refreshing:"\u5237\u65B0\u4E2D...",success:"\u5237\u65B0\u6210\u529F"}},selector:{cancel:"\u53D6\u6D88"},tab_picker:{choose:"\u8BF7\u9009\u62E9"}}},o=t;function F(u,r){return!u||!r?u:u.replace(/\{(\w+)\}/g,(e,a)=>r[a])}var l=(u,r)=>{let e;const a=u.split(".");let D=o;for(let c=0,n=a.length;c<n;c++){const E=a[c];if(e=D[E],c===n-1)return F(e,r);if(!e)return"";D=e}return""};export{l as t};
