System.register(["./index-legacy-e50317c7.js","./config-legacy-e519aae7.js"],(function(e,t){"use strict";var a,n,s,i,o,d,r,c,l,u,p,f,m,v,g,h,x,_,b,y,S,I,k=document.createElement("style");return k.textContent=".message-details[data-v-dd36b875]{min-height:100vh;background-color:#fff;padding:15px}.message-details>.details-content>.title[data-v-dd36b875]{font-size:16px;font-weight:700}.message-details>.details-content>.time[data-v-dd36b875]{font-size:12px;color:#999;padding-top:5px;padding-bottom:10px}.message-details>.details-content>.content[data-v-dd36b875]{padding-top:15px;border-top:1px solid #eee;font-size:14px}\n",document.head.appendChild(k),{setters:[e=>{a=e._,n=e.d,s=e.u,i=e.ai,o=e.l,d=e.r,r=e.s,c=e.c,l=e.e,u=e.w,p=e.a,f=e.t,m=e.y,v=e.T,g=e.b1,h=e.o,x=e.f,_=e.cR,b=e.cP,y=e.R,S=e.S},e=>{I=e.m}],execute:function(){const t=n({name:"MessageDetails",setup(){const{t:e}=s(),t=i(),a=o(),{id:n}=t.query,c=d({}),l=(e,t)=>{const a=(e.varInfo?JSON.parse(e.varInfo):[]).find((e=>e.code===t));return a?a.value:"0"},u=(e,t)=>{const a=(e.varInfo?JSON.parse(e.varInfo):[]).find((e=>e.code===t));return a?a.value:""};return r((()=>{n?(v.loading({duration:0,message:e("loading"),forbidClick:!0}),_({id:n}).then((t=>{const a=t,n={},s=a.varInfo?JSON.parse(a.varInfo):[];s.forEach((t=>{n[t.code]=["complaintReason"].includes(t.code)?e(t.value):t.value}));const i=I[a.bizType],o=s.find((e=>e.code===i.key));let d="";i.key?"creditScore"===i.key?d=e("systemMsgScore",{creditScore:o?o.value:"0"}):"inbox_recharge_success"===i.key?d=e("rechargeSuccessTips",{orderAmount:l(a,"orderAmount")}):"inbox_withdraw_success"===i.key?d=e("withdrawalSuccessTips",{orderAmount:l(a,"orderAmount")}):"inbox_store_audit_fail"===i.key?d=e("storeAuthenticationFailedTips",{shop_name:u(a,"shop_name"),reason:u(a,"reason")}):"inbox_store_audit_success"===i.key?d=e("storeAuthenticationPassedTips",{shop_name:u(a,"shop_name")}):(d=e(i.txt)+(o?o.value:"0"),i.txt1&&(d+=e(i.txt1))):d=e(i.txt,n),a.titleStr=e(i.title),a.contentStr=d,a.timeStr=b(t.sendTime,!0),c.value=a}))):(v(e("参数错误")),setTimeout((()=>{a.back()}),1e3))})),{t:e,detailInfo:c}}}),k={class:"message-details"},T=(e=>(y("data-v-dd36b875"),e=e(),S(),e))((()=>p("div",{style:{height:"46px"}},null,-1))),w={key:0,class:"details-content"},A={class:"title"},z={class:"time"},M=["innerHTML"];e("default",a(t,[["render",function(e,t,a,n,s,i){const o=g;return h(),c("div",k,[l(o,{fixed:!0},{title:u((()=>[x(f(e.$t("消息详情")),1)])),_:1}),T,e.detailInfo.title?(h(),c("div",w,[p("div",A,f(e.detailInfo.titleStr),1),p("p",z,f(e.detailInfo.timeStr),1),p("div",{class:"content",innerHTML:e.detailInfo.contentStr},null,8,M)])):m("v-if",!0)])}],["__scopeId","data-v-dd36b875"],["__file","D:/caishen/mall-app-h5-vue/mall-app-h5-vue/src/views/message/details/index.vue"]]))}}}));