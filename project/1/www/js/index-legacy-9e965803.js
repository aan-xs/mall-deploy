System.register(["./index-legacy-8819b039.js","./index-legacy-2841566b.js","./use-id-legacy-3f97160d.js"],(function(a,e){"use strict";var n,r,c,t,o,i,l,s,d,v,u,h,b,g,p,f=document.createElement("style");return f.textContent=":root{--van-search-padding: 10px var(--van-padding-sm);--van-search-background-color: var(--van-background-color-light);--van-search-content-background-color: var(--van-gray-1);--van-search-input-height: 34px;--van-search-label-padding: 0 5px;--van-search-label-color: var(--van-text-color);--van-search-label-font-size: var(--van-font-size-md);--van-search-left-icon-color: var(--van-gray-6);--van-search-action-padding: 0 var(--van-padding-xs);--van-search-action-text-color: var(--van-text-color);--van-search-action-font-size: var(--van-font-size-md) }.van-search{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:var(--van-search-padding);background:var(--van-search-background-color)}.van-search__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;padding-left:var(--van-padding-sm);background:var(--van-search-content-background-color);border-radius:var(--van-border-radius-sm)}.van-search__content--round{border-radius:var(--van-border-radius-max)}.van-search__label{padding:var(--van-search-label-padding);color:var(--van-search-label-color);font-size:var(--van-search-label-font-size);line-height:var(--van-search-input-height)}.van-search__field{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 var(--van-padding-xs) 0 0;height:var(--van-search-input-height);background-color:transparent}.van-search__field .van-field__left-icon{color:var(--van-search-left-icon-color)}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:var(--van-search-action-padding);color:var(--van-search-action-text-color);font-size:var(--van-search-action-font-size);line-height:var(--van-search-input-height);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-search__action:active{background-color:var(--van-active-color)}\n",document.head.appendChild(f),{setters:[a=>{n=a.D,r=a.E,c=a.J,t=a.Z,o=a.d,i=a.r,l=a.aa,s=a.e,d=a.aZ,v=a.ag,u=a.N,h=a.P},a=>{b=a.f,g=a.F},a=>{p=a.u}],execute:function(){const[e,f,k]=n("search"),x=r({},b,{label:String,shape:c("square"),leftIcon:c("search"),clearable:t,actionText:String,background:String,showAction:Boolean});var m=o({name:e,props:x,emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:e,slots:n,attrs:c}){const t=p(),o=i(),h=()=>{n.action||(e("update:modelValue",""),e("cancel"))},x=n=>{13===n.keyCode&&(u(n),e("search",a.modelValue))},m=()=>a.id||`${t}-input`,w=()=>{if(n.label||a.label)return s("label",{class:f("label"),for:m()},[n.label?n.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||k("cancel");return s("div",{class:f("action"),role:"button",tabindex:0,onClick:h},[n.action?n.action():e])}},_=a=>e("blur",a),z=a=>e("focus",a),C=a=>e("clear",a),S=a=>e("click-input",a),V=a=>e("click-left-icon",a),j=a=>e("click-right-icon",a),A=Object.keys(b),B=()=>{const t=r({},c,d(a,A),{id:m()});return s(g,v({ref:o,type:"search",class:f("field"),border:!1,onBlur:_,onFocus:z,onClear:C,onKeypress:x,"onClick-input":S,"onClick-left-icon":V,"onClick-right-icon":j,"onUpdate:modelValue":a=>e("update:modelValue",a)},t),d(n,["left-icon","right-icon"]))};return l({focus:()=>{var a;return null==(a=o.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=o.value)?void 0:a.blur()}}),()=>{var e;return s("div",{class:f({"show-action":a.showAction}),style:{background:a.background}},[null==(e=n.left)?void 0:e.call(n),s("div",{class:f("content",a.shape)},[w(),B()]),y()])}}});a("S",h(m))}}}));