import{D as F,Z as tt,K,bG as et,d as U,r as k,aD as ot,aC as nt,aI as st,m as I,a0 as at,ad as D,q as ct,g as M,aa as W,e as h,W as it,s as lt,aP as rt,aE as C,aU as P,a2 as dt,a1 as X,N as ut,p as ht,a7 as ft,E as pt,bc as mt,cK as vt,P as Y,_ as _t,ai as gt,l as xt,c as N,w as z,b as yt,aW as Tt,b1 as kt,o as H,f as bt,F as St,x as At,a as It}from"./index-d71e1836.js";import"./index-27d29771.js";import"./index-ac66dd73.js";import{S as Ct}from"./index-b1a171b4.js";import"./use-id-7082c426.js";function Pt(){const o="A".charCodeAt(0);return Array(26).fill("").map((e,d)=>String.fromCharCode(o+d))}const[Z,A]=F("index-bar"),Rt={sticky:tt,zIndex:K,teleport:[String,Object],highlightColor:String,stickyOffsetTop:et(0),indexList:{type:Array,default:Pt}},j=Symbol(Z);var wt=U({name:Z,props:Rt,emits:["select","change"],setup(o,{emit:p,slots:e}){const d=k(),_=k(),r=k(""),g=ot(),u=nt(d),{children:s,linkChildren:x}=st(j);let a;x({props:o});const b=I(()=>{if(at(o.zIndex))return{zIndex:+o.zIndex+1}}),R=I(()=>{if(o.highlightColor)return{color:o.highlightColor}}),w=(t,n)=>{for(let c=s.length-1;c>=0;c--){const l=c>0?n[c-1].height:0,i=o.sticky?l+o.stickyOffsetTop:0;if(t+i>=n[c].top)return c}return-1},E=t=>s.find(n=>String(n.index)===t),S=()=>{if(rt(d))return;const{sticky:t,indexList:n}=o,c=C(u.value),l=P(u),i=s.map(y=>y.getRect(u.value,l));let m=-1;if(a){const y=E(a);if(y){const v=y.getRect(u.value,l);m=w(v.top,i)}}else m=w(c,i);r.value=n[m],t&&s.forEach((y,v)=>{const{state:f,$el:Q}=y;if(v===m||v===m-1){const T=Q.getBoundingClientRect();f.left=T.left,f.width=T.width}else f.left=null,f.width=null;if(v===m)f.active=!0,f.top=Math.max(o.stickyOffsetTop,i[v].top-c)+l.top;else if(v===m-1&&a===""){const T=i[m].top-c;f.active=T>0,f.top=T+l.top-i[v].height}else f.active=!1}),a=""},B=()=>{lt(S)};D("scroll",S,{target:u,passive:!0}),ct(B),M(()=>o.indexList,B),M(r,t=>{t&&p("change",t)});const q=()=>o.indexList.map(t=>{const n=t===r.value;return h("span",{class:A("index",{active:n}),style:n?R.value:void 0,"data-index":t},[t])}),O=t=>{a=String(t);const n=E(a);if(n){const c=C(u.value),l=P(u),{offsetHeight:i}=document.documentElement;if(n.$el.scrollIntoView(),c===i-l.height){S();return}o.sticky&&o.stickyOffsetTop&&dt(X()-o.stickyOffsetTop),p("select",n.index)}},$=t=>{const{index:n}=t.dataset;n&&O(n)},G=t=>{$(t.target)};let V;const J=t=>{if(g.move(t),g.isVertical()){ut(t);const{clientX:n,clientY:c}=t.touches[0],l=document.elementFromPoint(n,c);if(l){const{index:i}=l.dataset;i&&V!==i&&(V=i,$(l))}}},L=()=>h("div",{ref:_,class:A("sidebar"),style:b.value,onClick:G,onTouchstartPassive:g.start},[q()]);return W({scrollTo:O}),D("touchmove",J,{target:_}),()=>{var t;return h("div",{ref:d,class:A()},[o.teleport?h(it,{to:o.teleport},{default:()=>[L()]}):L(),(t=e.default)==null?void 0:t.call(e)])}}});const[Et,Bt]=F("index-anchor"),Ot={index:K};var $t=U({name:Et,props:Ot,setup(o,{slots:p}){const e=ht({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),d=k(),{parent:_}=ft(j);if(!_){console.error("[Vant] <IndexAnchor> must be a child component of <IndexBar>.");return}const r=()=>e.active&&_.props.sticky,g=I(()=>{const{zIndex:s,highlightColor:x}=_.props;if(r())return pt(mt(s),{left:e.left?`${e.left}px`:void 0,width:e.width?`${e.width}px`:void 0,transform:e.top?`translate3d(0, ${e.top}px, 0)`:void 0,color:x})});return W({state:e,getRect:(s,x)=>{const a=P(d);return e.rect.height=a.height,s===window||s===document.body?e.rect.top=a.top+X():e.rect.top=a.top+C(s)-x.top,e.rect}}),()=>{const s=r();return h("div",{ref:d,style:{height:s?`${e.rect.height}px`:void 0}},[h("div",{style:g.value,class:[Bt({sticky:s}),{[vt]:s}]},[p.default?p.default():o.index])])}}});const Vt=Y($t),Lt=Y(wt);const Dt={class:"selectPay pb-10"},Mt={__name:"selectPay",setup(o){gt();const p=xt();let e=k("");const d=()=>{p.push("add")};return(_,r)=>{const g=kt,u=Ct,s=Vt,x=Lt;return H(),N("div",Dt,[h(g,null,{title:z(()=>[bt("\u5168\u90E8\u6536\u6B3E\u65B9\u5F0F")]),_:1}),h(u,{modelValue:yt(e),"onUpdate:modelValue":r[0]||(r[0]=a=>Tt(e)?e.value=a:e=a),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"},null,8,["modelValue"]),h(x,null,{default:z(()=>[h(s,{class:"index-anchor",index:"A"}),(H(),N(St,null,At(10,(a,b)=>It("div",{onClick:r[1]||(r[1]=R=>d()),class:"item-cell ml-4 py-4",key:b},"Asia Hawala ")),64))]),_:1})])}}},Ut=_t(Mt,[["__scopeId","data-v-4a9a5654"],["__file","D:/caishen/mall-app-h5-vue/mall-app-h5-vue/src/views/payMentMethod/selectPay.vue"]]);export{Ut as default};