import{_ as x,d as w,u as L,j as C,m as b,r as R,s as W,I as y,c as i,e as _,w as H,a as s,F as U,x as B,T as l,bD as D,b1 as N,o as r,f as O,t as h,b as g,R as E,S as T,al as d}from"./index-d71e1836.js";import{c as K}from"./index-e48680df.js";import{d as P}from"./config-0489190f.js";const Q=t=>(E("data-v-4b627e45"),t=t(),T(),t),k={class:"page-main-content"},V=Q(()=>s("div",{style:{height:"46px"}},null,-1)),z={class:"settings-nav-content"},F=["onClick"],J={class:"icon"},Z=["src"],q={class:"title"},X=w({name:"ShopSettings"}),M=Object.assign(X,{setup(t){const{t:A}=L(),p=C(),u=b(()=>{var e;return((e=p.userInfo)==null?void 0:e.signPdfUrl)||""}),n=R([]),a=K(P),v="sm";if(["argos","argos2","int"].includes(v)){const e=a.findIndex(o=>o.title==="soical");a.splice(e,1)}n.value=a;const f=e=>{e.href==="/shop/contract"?u.value?d(e.href):d("/shop/contractSign"):d(e.href)};return W(async()=>{l.loading({duration:0}),await p.getUserInfo(!0),await D().then(e=>{(typeof e.sellerSign=="string"?JSON.parse(e.sellerSign):e.sellerSign)&&n.value.push({title:"\u7535\u5B50\u5408\u540C",icon:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7ZtNaBNBFMf/O2laWmu7otha/MhVlGIFDxYFezOgWLy0oAc9KKKHXvTSi8aDIvRQDxWsVz14i+DBi6gIvSg0+HERxWhBU62w0VLbptnxvU0qMeql2ZlsZ/dXttlNQsgvb+bNvEnGQhXPOlsPiKI8AoF+CSSwGpHI0L9MQbipvbn5bOVD1vLJpG3bxaalS/TEIRgECY6KhXiqx3Gc8nVZtrHwiK52wUQo4rHFeB9LC772ImuqLENublPhonc62WknirLwHiFAWlafcN2SeRjgZCykyU25CilkP/fh0AhTD04IhIxI2HQiYdMJnXADfKBpyzZsvnwNsfZ2rJRvd+/QcRuq8UW4tXcf7OQh1MLa3v30wW3Fp5ErUEmgmvSm88PookMlgRB+d2IQxe9571y1dCCE516/xJujSS3SgWnSc69eaJEOVB/WIR24cVi1dCAnHv+S5mHLD3wZh2tl46mzv+Uq+THxFPbB0vjeSGO0HwRCuOP0OegiKh5MJxJWzcLUB7w9Oai8SPgf2oW5DOTvd5wH91EPtAvH2ko1czGfRz3QLtyys9sbXxvaVr5YUAv6I0yrIvWKLqNdmKeNPE3k5DV9awy60T7T+kzZOXH9pteXeb78kz4AyW+EIt+8oxsbBo5DJVojPEOLdFb5Rwecpbl5c9YuTH2kPm3j6/gNL/Iq0SY8PT6G3MhVLOUdL8qszZHmg/lCsnwnr4CqREuTzg6dwSJFTtJf14Vhqo7+LBbWDxyDLpQLczOepWFItLdhXfLwX7K6US7cQomIExRnZl6srzfqhWmisf3hBIJCVC2ZTiRsOr4kLZ41cQWkCl7R9Ov1recdayRCRNSHTScSNp1I2HQE1dxZhAWJDEc4jdAgM8K1rHsICbytR+zJzT7mrS4wHMvFKO9h8pKWaI6n6CYDU+G+W/AcS1m6J+s4seZ4n4mR5sgu71nyrqufwNt6eKdLefPHqtwP4Y08LtKWLKZ3z8w/qXzsF8j5Dmb3Wu5KAAAAAElFTkSuQmCC",self.location),href:"/shop/contract"}),l.clear()}).catch(()=>{l.clear()})}),(e,o)=>{const S=N,m=y;return r(),i("div",k,[_(S,{fixed:!0},{title:H(()=>[O(h(g(A)("\u5E97\u94FA\u8BBE\u7F6E")),1)]),_:1}),V,s("div",z,[(r(!0),i(U,null,B(n.value,(c,I)=>(r(),i("div",{key:I,class:"item",onClick:Y=>f(c)},[s("div",J,[s("img",{src:c.icon.href,alt:""},null,8,Z)]),s("div",q,h(g(A)(c.title)),1),_(m,{name:"arrow"})],8,F))),128))])])}}}),ee=x(M,[["__scopeId","data-v-4b627e45"],["__file","D:/caishen/mall-app-h5-vue/mall-app-h5-vue/src/views/shop/settings/index.vue"]]);export{ee as default};