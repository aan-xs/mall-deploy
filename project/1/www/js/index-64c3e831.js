import{_ as b,u as V,l as g,r as c,s as y,c as $,e as o,w as m,a as w,T as n,cs as k,b1 as P,o as I,f as v,t as f,R as S,S as B}from"./index-761f4b55.js";import{B as U}from"./index-ca5f5a51.js";import{E as i}from"./index-0740788c.js";import"./index-72339518.js";import"./index-b282ead9.js";import"./use-id-3e94b561.js";const E=u=>(S("data-v-f520a360"),u=u(),B(),u),F={class:"changePassword"},N=E(()=>w("div",{class:"line"},null,-1)),q={class:"content"},z={__name:"index",setup(u){const{t:l}=V(),_=g(),r=c(!1),d=c(""),a=c(""),p=c(""),h=()=>{if(d.value===""){n(l("\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"));return}if(a.value===""){n(l("\u8BF7\u8BBE\u7F6E\u65B0\u5BC6\u7801"));return}if(!/^\d{6}$/.test(a.value)){n(l("\u8BF7\u8F93\u51656\u4F4D\u6570\u6570\u5B57\u5BC6\u7801"));return}if(a.value!==p.value){n(l("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"));return}r.value=!0,k({old_safeword:d.value,safeword:a.value,re_safeword:p.value}).then(e=>{n(l("changeSuccess")),r.value=!1,setTimeout(()=>{_.back()},1e3)}).catch(e=>{r.value=!1})};return y(()=>{const e="tiktokMall";["familyMart"].includes(e)&&_.back()}),(e,s)=>{const x=P,T=U;return I(),$("div",F,[o(x,null,{title:m(()=>[v(f(e.$t("changeFunsPassword")),1)]),_:1}),N,w("div",q,[o(i,{label:e.$t("\u539F\u8D44\u91D1\u5BC6\u7801"),placeholderText:e.$t("\u8BF7\u8F93\u51656\u4F4D\u6570\u6570\u5B57\u5BC6\u7801"),modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=t=>d.value=t),typeText:"password"},null,8,["label","placeholderText","modelValue"]),o(i,{label:e.$t("\u65B0\u8D44\u91D1\u5BC6\u7801"),placeholderText:e.$t("\u8BF7\u8F93\u51656\u4F4D\u6570\u6570\u5B57\u5BC6\u7801"),modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=t=>a.value=t),typeText:"password"},null,8,["label","placeholderText","modelValue"]),o(i,{label:e.$t("\u518D\u6B21\u8F93\u5165\u8D44\u91D1\u5BC6\u7801"),placeholderText:e.$t("\u8BF7\u518D\u6B21\u8F93\u51656\u4F4D\u6570\u6570\u5B57\u5BC6\u7801"),modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=t=>p.value=t),typeText:"password"},null,8,["label","placeholderText","modelValue"]),o(T,{class:"w-full btn-content",type:"primary",loading:r.value,onClick:h},{default:m(()=>[v(f(e.$t("sure")),1)]),_:1},8,["loading"])])])}}},A=b(z,[["__scopeId","data-v-f520a360"],["__file","D:/Users/zq/zq/mall-app-h5-vue/mall-app-h5-vue/src/views/changeFundsPassword/index.vue"]]);export{A as default};