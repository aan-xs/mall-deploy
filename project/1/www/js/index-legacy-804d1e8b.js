System.register(["./index-legacy-8819b039.js","./use-id-legacy-3f97160d.js","./index-legacy-1e270903.js","./index-legacy-2d217b96.js","./use-refs-legacy-fbe1bf65.js"],(function(e,t){"use strict";var a,n,o,i,l,r,s,d,c,v,b,u,p,f,h,g,x,w,m,k,y,_,I,z,C,B,S,$,T,R,j,A,Z,L,O,V,N,W,E,H,M,D,F,J,P,X,q,K,Q,U,G,Y,ee,te,ae,ne,oe,ie=document.createElement("style");return ie.textContent=":root{--van-sticky-z-index: 99 }.van-sticky--fixed{position:fixed;z-index:var(--van-sticky-z-index)}:root{--van-tab-text-color: var(--van-gray-7);--van-tab-active-text-color: var(--van-text-color);--van-tab-disabled-text-color: var(--van-text-color-3);--van-tab-font-size: var(--van-font-size-md);--van-tab-line-height: var(--van-line-height-md);--van-tabs-default-color: var(--van-danger-color);--van-tabs-line-height: 44px;--van-tabs-card-height: 30px;--van-tabs-nav-background-color: var(--van-background-color-light);--van-tabs-bottom-bar-width: 40px;--van-tabs-bottom-bar-height: 3px;--van-tabs-bottom-bar-color: var(--van-danger-color) }.van-tab{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:0 var(--van-padding-base);color:var(--van-tab-text-color);font-size:var(--van-tab-font-size);line-height:var(--van-tab-line-height);cursor:pointer}.van-tab--active{color:var(--van-tab-active-text-color);font-weight:var(--van-font-weight-bold)}.van-tab--disabled{color:var(--van-tab-disabled-text-color);cursor:not-allowed}.van-tab--grow{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;padding:0 var(--van-padding-sm)}.van-tab--shrink{-webkit-box-flex:0;-webkit-flex:none;flex:none;padding:0 var(--van-padding-xs)}.van-tab--card{color:var(--van-tabs-default-color);border-right:var(--van-border-width-base) solid var(--van-tabs-default-color)}.van-tab--card:last-child{border-right:none}.van-tab--card.van-tab--active{color:var(--van-white);background-color:var(--van-tabs-default-color)}.van-tab--card--disabled{color:var(--van-tab-disabled-text-color)}.van-tab__text--ellipsis{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background:var(--van-tabs-nav-background-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-tabs__nav--complete{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-tabs__nav--complete::-webkit-scrollbar{display:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--line.van-tabs__nav--shrink,.van-tabs__nav--line.van-tabs__nav--complete{padding-right:var(--van-padding-xs);padding-left:var(--van-padding-xs)}.van-tabs__nav--card{box-sizing:border-box;height:var(--van-tabs-card-height);margin:0 var(--van-padding-md);border:var(--van-border-width-base) solid var(--van-tabs-default-color);border-radius:var(--van-border-radius-sm)}.van-tabs__nav--card.van-tabs__nav--shrink{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;width:var(--van-tabs-bottom-bar-width);height:var(--van-tabs-bottom-bar-height);background:var(--van-tabs-bottom-bar-color);border-radius:var(--van-tabs-bottom-bar-height)}.van-tabs__track{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:var(--van-tabs-line-height)}.van-tabs--card>.van-tabs__wrap{height:var(--van-tabs-card-height)}.van-tab__panel,.van-tab__panel-wrapper{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__panel-wrapper--inactive{height:0;overflow:visible}\n",document.head.appendChild(ie),{setters:[e=>{a=e.aV,n=e.aE,o=e.b9,i=e.ba,l=e.aN,r=e.aO,s=e.aS,d=e.D,c=e.d,v=e.r,b=e.aC,u=e.p,p=e.m,f=e.bb,h=e.E,g=e.bc,x=e.g,w=e.ad,m=e.e,k=e.K,y=e.J,_=e.a6,I=e.aP,z=e.aU,C=e.P,B=e.Z,S=e.a0,$=e.bd,T=e.be,R=e.q,j=e.aa,A=e.aj,Z=e.aI,L=e.aJ,O=e.s,V=e.au,N=e.aM,W=e.a9,E=e.bf,H=e.a2,M=e.bg,D=e.ag,F=e.aZ,J=e.bh,P=e.bi,X=e.H,q=e.$,K=e.a7,Q=e.aQ,U=e.ab,G=e.h,Y=e.aT},e=>{ee=e.u},e=>{te=e.T},e=>{ae=e.a,ne=e.S},e=>{oe=e.u}],execute:function(){const[t,ie]=d("sticky"),le={zIndex:k,position:y("top"),container:Object,offsetTop:_(0),offsetBottom:_(0)};var re=c({name:t,props:le,emits:["scroll","change"],setup(e,{emit:t,slots:a}){const o=v(),d=b(o),c=u({fixed:!1,width:0,height:0,transform:0}),k=p((()=>f("top"===e.position?e.offsetTop:e.offsetBottom))),y=p((()=>{const{fixed:e,height:t,width:a}=c;if(e)return{width:`${a}px`,height:`${t}px`}})),_=p((()=>{if(!c.fixed)return;const t=h(g(e.zIndex),{width:`${c.width}px`,height:`${c.height}px`,[e.position]:`${k.value}px`});return c.transform&&(t.transform=`translate3d(0, ${c.transform}px, 0)`),t})),C=()=>{if(!o.value||I(o))return;const{container:a,position:i}=e,l=z(o),r=n(window);if(c.width=l.width,c.height=l.height,"top"===i)if(a){const e=z(a),t=e.bottom-k.value-c.height;c.fixed=k.value>l.top&&e.bottom>0,c.transform=t<0?t:0}else c.fixed=k.value>l.top;else{const{clientHeight:e}=document.documentElement;if(a){const t=z(a),n=e-t.top-k.value-c.height;c.fixed=e-k.value<l.bottom&&e>t.top,c.transform=n<0?-n:0}else c.fixed=e-k.value<l.bottom}(e=>{t("scroll",{scrollTop:e,isFixed:c.fixed})})(r)};return x((()=>c.fixed),(e=>t("change",e))),w("scroll",C,{target:d,passive:!0}),function(e,t){if(!i||!window.IntersectionObserver)return;const a=new IntersectionObserver((e=>{t(e[0].intersectionRatio>0)}),{root:document.body}),n=()=>{e.value&&a.unobserve(e.value)};l(n),r(n),s((()=>{e.value&&a.observe(e.value)}))}(o,C),()=>{var e;return m("div",{ref:o,style:y.value},[m("div",{class:ie({fixed:c.fixed}),style:_.value},[null==(e=a.default)?void 0:e.call(a)])])}}});const se=C(re),[de,ce]=d("tab");var ve=c({name:de,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:k,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:B},setup(e,{slots:t}){const a=p((()=>{const t={},{type:a,color:n,disabled:o,isActive:i,activeColor:l,inactiveColor:r}=e;n&&"card"===a&&(t.borderColor=n,o||(i?t.backgroundColor=n:t.color=n));const s=i?l:r;return s&&(t.color=s),t})),n=()=>{const a=m("span",{class:ce("text",{ellipsis:!e.scrollable})},[t.title?t.title():e.title]);return e.dot||S(e.badge)&&""!==e.badge?m($,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[a]}):a};return()=>m("div",{id:e.id,role:"tab",class:[ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:a.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[n()])}});const[be,ue]=d("tabs");var pe=c({name:be,props:{count:T(Number),inited:Boolean,animated:Boolean,duration:T(k),swipeable:Boolean,lazyRender:Boolean,currentIndex:T(Number)},emits:["change"],setup(e,{emit:t,slots:a}){const n=v(),o=e=>t("change",e),i=()=>{var t;const i=null==(t=a.default)?void 0:t.call(a);return e.animated||e.swipeable?m(ae,{ref:n,loop:!1,class:ue("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:o},{default:()=>[i]}):i},l=t=>{const a=n.value;a&&a.state.active!==t&&a.swipeTo(t,{immediate:!e.inited})};return x((()=>e.currentIndex),l),R((()=>{l(e.currentIndex)})),j({swipeRef:n}),()=>m("div",{class:ue("content",{animated:e.animated||e.swipeable})},[i()])}});const[fe,he]=d("tabs"),ge={type:y("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:_(0),duration:_(.3),animated:Boolean,ellipsis:B,swipeable:Boolean,scrollspy:Boolean,offsetTop:_(0),background:String,lazyRender:B,lineWidth:k,lineHeight:k,beforeChange:Function,swipeThreshold:_(5),titleActiveColor:String,titleInactiveColor:String},xe=Symbol(fe);var we=c({name:fe,props:ge,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(e,{emit:t,slots:i}){var l,r;{const e=null==(r=null==(l=A())?void 0:l.vnode)?void 0:r.props;e&&"onClick"in e&&console.warn('[Vant] Tabs: "click" event is deprecated, using "click-tab" instead.'),e&&"onDisabled"in e&&console.warn('[Vant] Tabs: "disabled" event is deprecated, using "click-tab" instead.')}let d,c,h;const g=v(),k=v(),y=v(),_=v(),C=ee(),B=b(g),[$,T]=oe(),{children:R,linkChildren:X}=Z(xe),q=u({inited:!1,position:"",lineStyle:{},currentIndex:-1}),K=p((()=>R.length>e.swipeThreshold||!e.ellipsis||e.shrink)),Q=p((()=>({borderColor:e.color,background:e.background}))),U=(e,t)=>{var a;return null!=(a=e.name)?a:t},G=p((()=>{const e=R[q.currentIndex];if(e)return U(e,q.currentIndex)})),Y=p((()=>f(e.offsetTop))),te=p((()=>e.sticky?Y.value+d:0)),ae=t=>{const n=k.value,o=$.value;if(!(K.value&&n&&o&&o[q.currentIndex]))return;const i=o[q.currentIndex].$el;!function(e,t,n){let o=0;const i=e.scrollLeft,l=0===n?1:Math.round(1e3*n/16);!function n(){e.scrollLeft+=(t-i)/l,++o<l&&a(n)}()}(n,i.offsetLeft-(n.offsetWidth-i.offsetWidth)/2,t?0:+e.duration)},ne=()=>{const t=q.inited;O((()=>{const a=$.value;if(!a||!a[q.currentIndex]||"line"!==e.type||I(g.value))return;const n=a[q.currentIndex].$el,{lineWidth:o,lineHeight:i}=e,l=n.offsetLeft+n.offsetWidth/2,r={width:W(o),backgroundColor:e.color,transform:`translateX(${l}px) translateX(-50%)`};if(t&&(r.transitionDuration=`${e.duration}s`),S(i)){const e=W(i);r.height=e,r.borderRadius=e}q.lineStyle=r}))},ie=(a,n)=>{const o=(e=>{const t=e<q.currentIndex?-1:1;for(;e>=0&&e<R.length;){if(!R[e].disabled)return e;e+=t}})(a);if(!S(o))return;const i=R[o],l=U(i,o),r=null!==q.currentIndex;q.currentIndex!==o&&(q.currentIndex=o,n||ae(),ne()),l!==e.active&&(t("update:active",l),r&&t("change",l,i.title)),h&&!e.scrollspy&&H(Math.ceil(M(g.value)-Y.value))},le=(e,t)=>{const a=R.find(((t,a)=>U(t,a)===e)),n=a?R.indexOf(a):0;ie(n,t)},re=(t=!1)=>{if(e.scrollspy){const i=R[q.currentIndex].$el;if(i&&B.value){const l=M(i,B.value)-te.value;c=!0,function(e,t,i,l){let r=n(e);const s=r<t,d=0===i?1:Math.round(1e3*i/16),c=(t-r)/d;!function n(){r+=c,(s&&r>t||!s&&r<t)&&(r=t),o(e,r),s&&r<t||!s&&r>t?a(n):l&&a(l)}()}(B.value,l,t?0:+e.duration,(()=>{c=!1}))}}},de=e=>{h=e.isFixed,t("scroll",e)},ce=()=>R.map(((a,n)=>m(ve,D({key:a.id,id:`${C}-${n}`,ref:T(n),type:e.type,color:e.color,style:a.titleStyle,class:a.titleClass,shrink:e.shrink,isActive:n===q.currentIndex,controls:a.id,scrollable:K.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:o=>((a,n,o)=>{const{title:i,disabled:l}=R[n],r=U(R[n],n);l?t("disabled",r,i):(J(e.beforeChange,{args:[r],done:()=>{ie(n),re()}}),t("click",r,i),P(a)),t("click-tab",{name:r,title:i,event:o,disabled:l})})(a,n,o)},F(a,["dot","badge","title","disabled","showZeroBadge"])),{title:a.$slots.title}))),be=()=>{if("line"===e.type&&R.length)return m("div",{class:he("line"),style:q.lineStyle},null)},ue=()=>{var t,a,n;const{type:o,border:l,sticky:r}=e,s=[m("div",{ref:r?void 0:y,class:[he("wrap"),{[E]:"line"===o&&l}]},[m("div",{ref:k,role:"tablist",class:he("nav",[o,{shrink:e.shrink,complete:K.value}]),style:Q.value,"aria-orientation":"horizontal"},[null==(t=i["nav-left"])?void 0:t.call(i),ce(),be(),null==(a=i["nav-right"])?void 0:a.call(i)])]),null==(n=i["nav-bottom"])?void 0:n.call(i)];return r?m("div",{ref:y},[s]):s};return x([()=>e.color,L],ne),x((()=>e.active),(e=>{e!==G.value&&le(e)})),x((()=>R.length),(()=>{q.inited&&(le(e.active),ne(),O((()=>{ae(!0)})))})),j({resize:()=>{ne(),O((()=>{var e,t;return null==(t=null==(e=_.value)?void 0:e.swipeRef.value)?void 0:t.resize()}))},scrollTo:e=>{O((()=>{le(e),re(!0)}))}}),V(ne),N(ne),s((()=>{le(e.active,!0),O((()=>{q.inited=!0,y.value&&(d=z(y.value).height),ae(!0)}))})),w("scroll",(()=>{if(e.scrollspy&&!c){const e=(()=>{for(let e=0;e<R.length;e++){const{top:t}=z(R[e].$el);if(t>te.value)return 0===e?0:e-1}return R.length-1})();ie(e)}}),{target:B,passive:!0}),X({id:C,props:e,setLine:ne,onRendered:(e,a)=>t("rendered",e,a),currentName:G,scrollIntoView:ae}),()=>m("div",{ref:g,class:he([e.type])},[e.sticky?m(se,{container:g.value,offsetTop:Y.value,onScroll:de},{default:()=>[ue()]}):ue(),m(pe,{ref:_,count:R.length,inited:q.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:q.currentIndex,onChange:ie},{default:()=>{var e;return[null==(e=i.default)?void 0:e.call(i)]}})])}});const[me,ke]=d("tab"),ye=h({},X,{dot:Boolean,name:k,badge:k,title:String,disabled:Boolean,titleClass:q,titleStyle:[String,Object],showZeroBadge:B});var _e=c({name:me,props:ye,setup(e,{slots:t}){const a=ee(),n=v(!1),{parent:o,index:i}=K(xe);if(!o)return void console.error("[Vant] <Tab> must be a child component of <Tabs>.");const l=()=>{var t;return null!=(t=e.name)?t:i.value},r=p((()=>{const t=l()===o.currentName.value;return t&&!n.value&&(n.value=!0,o.props.lazyRender&&O((()=>{o.onRendered(l(),e.title)}))),t})),s=v(!r.value);return x(r,(e=>{e?s.value=!1:Q((()=>{s.value=!0}))})),x((()=>e.title),(()=>{o.setLine(),o.scrollIntoView()})),U(te,r),()=>{var e;const l=`${o.id}-${i.value}`,{animated:d,swipeable:c,scrollspy:v,lazyRender:b}=o.props;if(!t.default&&!d)return;const u=v||r.value;if(d||c)return m(ne,{id:a,role:"tabpanel",class:ke("panel-wrapper",{inactive:s.value}),tabindex:r.value?0:-1,"aria-hidden":!r.value,"aria-labelledby":l},{default:()=>{var e;return[m("div",{class:ke("panel")},[null==(e=t.default)?void 0:e.call(t)])]}});const p=n.value||v||!b?null==(e=t.default)?void 0:e.call(t):null;return j({id:a}),G(m("div",{id:a,role:"tabpanel",class:ke("panel"),tabindex:u?0:-1,"aria-labelledby":l},[p]),[[Y,u]])}}});e("T",C(_e)),e("a",C(we))}}}));