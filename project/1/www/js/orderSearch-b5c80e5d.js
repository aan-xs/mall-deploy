import{_ as D,i as E,u as U,r as s,I as P,a$ as T,c as k,e as g,w as u,y,z as I,b as n,n as F,T as h,o as c,aW as A,a as V,t as H,F as W,x as j,R as q,S as G}from"./index-d71e1836.js";import{E as J}from"./index-3362e25b.js";import{P as K}from"./index-e1abf70a.js";import{L as M}from"./index-bc764d2b.js";import"./index-27d29771.js";import"./index-ac66dd73.js";import{S as O}from"./index-b1a171b4.js";import{_ as Q}from"./search-icon-8ae5f679.js";import{a as X,o as Y}from"./orderItem-e7884b16.js";import"./use-id-7082c426.js";import"./config-22c2c72a.js";import"./index-e48680df.js";const Z=p=>(q("data-v-ae0d1c7a"),p=p(),G(),p),ee=Z(()=>V("img",{class:"search-icon",src:Q},null,-1)),ae={key:0,class:"list ml-4 mr-4 mt-4 mb-4"},oe={__name:"orderSearch",setup(p){const C=E(),{t:m}=U();let t=s(""),r=s(1);const l=s([]),i=s(!1),d=s(!1),v=s(!1),f=s(!1),b=new URL("/www/png/name-20d65991.png",self.location),N=()=>{r.value=1,t.value="",d.value=!1,i.value=!0,r.value=1,f.value=!1,l.value=[]},w=a=>{t.value?(f.value=!1,d.value=!1,i.value=!0,r.value=1,a&&h.loading({forbidClick:!0,loadingType:"spinner",duration:0}),L()):(h(m("\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7")),i.value=!1,v.value=!1,d.value=!0,l.value=[])},x=()=>{w(!0)},L=()=>{const a={pageNum:r.value,pageSize:20,orderId:t.value};X(a).then(e=>{const{pageInfo:S,pageList:_}=e;l.value=r.value===1?_:[...l.value,..._],r.value++,i.value=!1,v.value=!1,f.value=!0,d.value=S.lastPage,h.clear()}).catch(()=>{h.clear()})};return(a,e)=>{const S=P,_=O,R=T,$=M,B=K,z=J;return c(),k("div",{class:F(["search-container",{"is-ar":n(C)}])},[g(R,{fixed:"","left-arrow":"",onClickLeft:e[1]||(e[1]=()=>a.$router.back())},{title:u(()=>[g(_,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=o=>A(t)?t.value=o:t=o),shape:"round",onSearch:x,clearable:!1,placeholder:a.$t("\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7")},{"left-icon":u(()=>[ee]),"right-icon":u(()=>[n(t)?(c(),I(S,{key:0,name:"cross",onClick:N,size:"14",color:"#333333"})):y("v-if",!0)]),_:1},8,["modelValue","placeholder"])]),right:u(()=>[V("div",{onClick:x},H(n(m)("\u641C\u7D22")),1)]),_:1}),l.value.length>0?(c(),k("div",ae,[g(B,{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=o=>v.value=o),"loading-text":a.$t("\u52A0\u8F7D\u4E2D"),"loosing-text":a.$t("\u91CA\u653E\u4EE5\u5237\u65B0"),"pulling-text":a.$t("\u4E0B\u62C9\u4EE5\u5237\u65B0"),onRefresh:e[4]||(e[4]=o=>w(!1))},{default:u(()=>[g($,{loading:i.value,"onUpdate:loading":e[2]||(e[2]=o=>i.value=o),finished:d.value,"finished-text":n(m)("\u6CA1\u6709\u66F4\u591A\u4E86"),onLoad:L},{default:u(()=>[(c(!0),k(W,null,j(l.value,o=>(c(),I(Y,{info:o},null,8,["info"]))),256))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue","loading-text","loosing-text","pulling-text"])])):y("v-if",!0),!l.value.length&&f.value?(c(),I(z,{key:1,image:n(b).href,description:n(m)("noData")},null,8,["image","description"])):y("v-if",!0)],2)}}},fe=D(oe,[["__scopeId","data-v-ae0d1c7a"],["__file","D:/caishen/mall-app-h5-vue/mall-app-h5-vue/src/views/order/orderSearch.vue"]]);export{fe as default};