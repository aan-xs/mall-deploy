System.register(["./index-legacy-12f59ca9.js"],(function(t,e){"use strict";var a,o,i,n,s,r,l,d,h,c,u,g,p,b,v,f,x=document.createElement("style");return x.textContent=".vue-puzzle-vcode{position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.3);z-index:999;opacity:0;pointer-events:none;-webkit-transition:opacity .2s;transition:opacity .2s}.vue-puzzle-vcode.show_{opacity:1;pointer-events:auto}.vue-auth-box_{position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:20px;background:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,.3)}.vue-auth-box_ .auth-body_{position:relative;overflow:hidden;border-radius:3px}.vue-auth-box_ .auth-body_ .loading-box_{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.8);z-index:20;opacity:1;-webkit-transition:opacity .1s;transition:opacity .1s;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vue-auth-box_ .auth-body_ .loading-box_.hide_{opacity:0;pointer-events:none}.vue-auth-box_ .auth-body_ .loading-box_.hide_ .loading-gif_ span{-webkit-animation-play-state:paused;animation-play-state:paused}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:5px;line-height:0}@-webkit-keyframes load{0%{opacity:1;-webkit-transform:scale(1.3);transform:scale(1.3)}to{opacity:.2;-webkit-transform:scale(.3);transform:scale(.3)}}@keyframes load{0%{opacity:1;-webkit-transform:scale(1.3);transform:scale(1.3)}to{opacity:.2;-webkit-transform:scale(.3);transform:scale(.3)}}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span{display:inline-block;width:5px;height:100%;margin-left:2px;border-radius:50%;background-color:#888;-webkit-animation:load 1.04s ease infinite;animation:load 1.04s ease infinite}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(1){margin-left:0}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(2){-webkit-animation-delay:.13s;animation-delay:.13s}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(3){-webkit-animation-delay:.26s;animation-delay:.26s}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(4){-webkit-animation-delay:.39s;animation-delay:.39s}.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(5){-webkit-animation-delay:.52s;animation-delay:.52s}.vue-auth-box_ .auth-body_ .info-box_{position:absolute;bottom:0;left:0;width:100%;height:24px;line-height:24px;text-align:center;overflow:hidden;font-size:13px;background-color:#83ce3f;opacity:0;-webkit-transform:translateY(24px);transform:translateY(24px);-webkit-transition:all .2s;transition:all .2s;color:#fff;z-index:10}.vue-auth-box_ .auth-body_ .info-box_.show{opacity:.95;-webkit-transform:translateY(0);transform:translateY(0)}.vue-auth-box_ .auth-body_ .info-box_.fail{background-color:#ce594b}.vue-auth-box_ .auth-body_ .auth-canvas2_{position:absolute;top:0;left:0;width:60px;height:100%;z-index:2}.vue-auth-box_ .auth-body_ .auth-canvas3_{position:absolute;top:0;left:0;opacity:0;-webkit-transition:opacity .6s;transition:opacity .6s;z-index:3}.vue-auth-box_ .auth-body_ .auth-canvas3_.show{opacity:1}.vue-auth-box_ .auth-body_ .flash_{position:absolute;top:0;left:0;width:30px;height:100%;background-color:rgba(255,255,255,.1);z-index:3}.vue-auth-box_ .auth-body_ .flash_.show{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.vue-auth-box_ .auth-body_ .reset_{position:absolute;top:2px;right:2px;width:35px;height:auto;z-index:12;cursor:pointer;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;-webkit-transform:rotate(0);transform:rotate(0)}.vue-auth-box_ .auth-body_ .reset_:hover{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vue-auth-box_ .auth-control_ .range-box{position:relative;width:100%;background-color:#eef1f8;margin-top:20px;border-radius:3px;box-shadow:0 0 8px rgba(240,240,240,.6) inset}.vue-auth-box_ .auth-control_ .range-box .range-text{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:14px;color:#b7bcd1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;width:100%}.vue-auth-box_ .auth-control_ .range-box .range-slider{position:absolute;height:100%;width:50px;background-color:rgba(106,160,255,.8);border-radius:3px}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;right:0;width:50px;height:100%;background-color:#fff;border-radius:3px;box-shadow:0 0 4px #ccc;cursor:pointer}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn>div{width:0;height:40%;-webkit-transition:all .2s;transition:all .2s;border:solid 1px #6aa0ff}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn>div:nth-child(2){margin:0 4px}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:first-child,.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:first-child{border:solid 4px transparent;height:0;border-right-color:#6aa0ff}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:nth-child(2),.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:nth-child(2){border-width:3px;height:0;border-radius:3px;margin:0 6px;border-right-color:#6aa0ff}.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:nth-child(3),.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:nth-child(3){border:solid 4px transparent;height:0;border-left-color:#6aa0ff}.vue-puzzle-overflow{overflow:hidden!important}\n",document.head.appendChild(x),{setters:[t=>{a=t.d,o=t.q,i=t.U,n=t.r,s=t.p,r=t.g,l=t.m,d=t.o,h=t.z,c=t.a,u=t.V,g=t.A,p=t.n,b=t.b,v=t.t,f=t.W}],execute:function(){const e=["width","height"],x=["width","height"],w=["width","height"],m=[c("div",{class:"loading-gif_"},[c("span"),c("span"),c("span"),c("span"),c("span")],-1)],y={class:"auth-control_"},_={class:"range-text"},k=[c("div",null,null,-1),c("div",null,null,-1),c("div",null,null,-1)];t("g",a({__name:"App",props:{canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},imgs:{type:Array,default:null},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},emits:["success","fail","close"],setup(t,{emit:a}){const X=t;o((()=>{document.addEventListener("mousemove",I,!1),document.addEventListener("mouseup",L,!1),document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",L,!1),X.show&&(document.body.classList.add("vue-puzzle-overflow"),Q())})),i((()=>{C.timer1&&clearTimeout(C.timer1),document.removeEventListener("mousemove",I,!1),document.removeEventListener("mouseup",L,!1),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",L,!1)}));const T=n(),Y=n(),S=n(),z=n(),C=s({mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:void 0,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1});r((()=>X.show),(t=>{t?(document.body.classList.add("vue-puzzle-overflow"),Q()):(C.isSubmting=!1,C.isSuccess=!1,C.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}));const B=l((()=>{const t=C.startWidth+C.newX-C.startX;return t<M.value?M.value:t>X.canvasWidth?X.canvasWidth:t})),A=l((()=>Math.round(52.5*Math.max(Math.min(X.puzzleScale,2),.2)+6))),M=l((()=>Math.max(Math.min(Math.round(X.sliderSize),Math.round(.5*X.canvasWidth)),10))),H=()=>{C.closeDown=!0},W=()=>{C.closeDown&&!C.mouseDown&&!C.isSubmting&&(C.timer1&&clearTimeout(C.timer1),a("close")),C.closeDown=!1},D=t=>{var e;C.isCanSlide&&(C.mouseDown=!0,C.startWidth=(null==(e=T.value)?void 0:e.clientWidth)||0,C.newX=t.clientX||t.changedTouches[0].clientX,C.startX=t.clientX||t.changedTouches[0].clientX)},I=t=>{C.mouseDown&&(t.preventDefault(),C.newX=t.clientX||t.changedTouches[0].clientX)},L=()=>{C.mouseDown&&(C.mouseDown=!1,Z())},R=(t=!1)=>{var e;if(C.loading&&!t)return;C.loading=!0,C.isCanSlide=!1;const a=Y.value,o=S.value,i=z.value,n=null==a?void 0:a.getContext("2d",{willReadFrequently:!0}),s=null==o?void 0:o.getContext("2d"),r=null==i?void 0:i.getContext("2d");if(!n||!s||!r)return void console.error("not found ctx / ctx2 / ctx3");const l=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,d=document.createElement("img");if(n.fillStyle="rgba(255,255,255,1)",r.fillStyle="rgba(255,255,255,1)",n.clearRect(0,0,X.canvasWidth,X.canvasHeight),s.clearRect(0,0,X.canvasWidth,X.canvasHeight),C.pinX=O(A.value+20,X.canvasWidth-A.value-10),C.pinY=O(20,X.canvasHeight-A.value-10),d.crossOrigin="anonymous",d.onload=()=>{const[t,e,a,o]=P(d);n.save(),E(n),n.closePath(),l?(n.clip(),n.save(),n.shadowOffsetX=0,n.shadowOffsetY=0,n.shadowColor="#000",n.shadowBlur=3,n.fill(),n.restore()):(n.shadowOffsetX=0,n.shadowOffsetY=0,n.shadowColor="#000",n.shadowBlur=3,n.fill(),n.clip()),n.drawImage(d,t,e,a,o),r.fillRect(0,0,X.canvasWidth,X.canvasHeight),r.drawImage(d,t,e,a,o),n.globalCompositeOperation="source-atop",E(n),n.arc(C.pinX+Math.ceil(A.value/2),C.pinY+Math.ceil(A.value/2),1.2*A.value,0,2*Math.PI,!0),n.closePath(),n.shadowColor="rgba(255, 255, 255, .8)",n.shadowOffsetX=-1,n.shadowOffsetY=-1,n.shadowBlur=Math.min(Math.ceil(8*X.puzzleScale),12),n.fillStyle="#ffffaa",n.fill();const i=n.getImageData(C.pinX-3,C.pinY-20,C.pinX+A.value+5,C.pinY+A.value+5);s.putImageData(i,0,C.pinY-20),n.restore(),n.clearRect(0,0,X.canvasWidth,X.canvasHeight),n.save(),E(n),n.globalAlpha=.8,n.fillStyle="#ffffff",n.fill(),n.restore(),n.save(),n.globalCompositeOperation="source-atop",E(n),n.arc(C.pinX+Math.ceil(A.value/2),C.pinY+Math.ceil(A.value/2),1.2*A.value,0,2*Math.PI,!0),n.shadowColor="#000",n.shadowOffsetX=2,n.shadowOffsetY=2,n.shadowBlur=16,n.fill(),n.restore(),n.save(),n.globalCompositeOperation="destination-over",n.drawImage(d,t,e,a,o),n.restore(),C.loading=!1,C.isCanSlide=!0},d.onerror=()=>{R(!0)},!t&&null!=(e=X.imgs)&&e.length){let t=O(0,X.imgs.length-1);t===C.imgIndex&&(t===X.imgs.length-1?t=0:t++),C.imgIndex=t,d.src=X.imgs[t]}else d.src=F()},O=(t,e)=>Math.ceil(Math.random()*(e-t)+t),P=t=>{const e=t.width/t.height;let a=0,o=0,i=0,n=0;return e>X.canvasWidth/X.canvasHeight?(n=X.canvasHeight,i=e*n,o=0,a=(X.canvasWidth-i)/2):(i=X.canvasWidth,n=i/e,a=0,o=(X.canvasHeight-n)/2),[a,o,i,n]},E=t=>{const e=Math.ceil(15*X.puzzleScale);t.beginPath(),t.moveTo(C.pinX,C.pinY),t.lineTo(C.pinX+e,C.pinY),t.arcTo(C.pinX+e,C.pinY-e/2,C.pinX+e+e/2,C.pinY-e/2,e/2),t.arcTo(C.pinX+e+e,C.pinY-e/2,C.pinX+e+e,C.pinY,e/2),t.lineTo(C.pinX+e+e+e,C.pinY),t.lineTo(C.pinX+e+e+e,C.pinY+e),t.arcTo(C.pinX+e+e+e+e/2,C.pinY+e,C.pinX+e+e+e+e/2,C.pinY+e+e/2,e/2),t.arcTo(C.pinX+e+e+e+e/2,C.pinY+e+e,C.pinX+e+e+e,C.pinY+e+e,e/2),t.lineTo(C.pinX+e+e+e,C.pinY+e+e+e),t.lineTo(C.pinX,C.pinY+e+e+e),t.lineTo(C.pinX,C.pinY+e+e),t.arcTo(C.pinX+e/2,C.pinY+e+e,C.pinX+e/2,C.pinY+e+e/2,e/2),t.arcTo(C.pinX+e/2,C.pinY+e,C.pinX,C.pinY+e,e/2),t.lineTo(C.pinX,C.pinY)},F=()=>{const t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return console.error("not found ctx"),"";t.width=X.canvasWidth,t.height=X.canvasHeight,e.fillStyle=`rgb(${O(100,255)},${O(100,255)},${O(100,255)})`,e.fillRect(0,0,X.canvasWidth,X.canvasHeight);for(let a=0;a<12;a++)if(e.fillStyle=`rgb(${O(100,255)},${O(100,255)},${O(100,255)})`,e.strokeStyle=`rgb(${O(100,255)},${O(100,255)},${O(100,255)})`,O(0,2)>1)e.save(),e.rotate(O(-90,90)*Math.PI/180),e.fillRect(O(-20,t.width-20),O(-20,t.height-20),O(10,t.width/2+10),O(10,t.height/2+10)),e.restore();else{e.beginPath();const a=O(-Math.PI,Math.PI);e.arc(O(0,t.width),O(0,t.height),O(10,t.height/2+10),a,a+1.5*Math.PI),e.closePath(),e.fill()}return t.toDataURL("image/png")},Z=()=>{C.isSubmting=!0;const t=Math.abs(C.pinX-(B.value-M.value)+(A.value-M.value)*((B.value-M.value)/(X.canvasWidth-M.value))-3);t<X.range?(C.infoText=X.successText,C.infoBoxFail=!1,C.infoBoxShow=!0,C.isCanSlide=!1,C.isSuccess=!0,C.timer1&&clearTimeout(C.timer1),C.timer1=setTimeout((()=>{C.isSubmting=!1,a("success",t)}),800)):(C.infoText=X.failText,C.infoBoxFail=!0,C.infoBoxShow=!0,C.isCanSlide=!1,a("fail",t),C.timer1&&clearTimeout(C.timer1),C.timer1=setTimeout((()=>{C.isSubmting=!1,Q()}),800))},Q=()=>{C.isSubmting||(C.infoBoxFail=!1,C.infoBoxShow=!1,C.isCanSlide=!1,C.isSuccess=!1,C.startWidth=M.value,C.startX=0,C.newX=0,R())};return(a,o)=>(d(),h(f,{to:"body"},[c("div",{class:p(["vue-puzzle-vcode",{show_:t.show}]),onMousedown:H,onMouseup:W,onTouchstart:H,onTouchend:W},[c("div",{class:"vue-auth-box_",onMousedown:o[2]||(o[2]=u((()=>{}),["stop"])),onTouchstart:o[3]||(o[3]=u((()=>{}),["stop"]))},[c("div",{class:"auth-body_",style:g(`height: ${t.canvasHeight}px`)},[c("canvas",{ref_key:"canvas1",ref:Y,width:t.canvasWidth,height:t.canvasHeight,style:g(`width:${t.canvasWidth}px;height:${t.canvasHeight}px`)},null,12,e),c("canvas",{ref_key:"canvas3",ref:z,class:p(["auth-canvas3_",{show:C.isSuccess}]),width:t.canvasWidth,height:t.canvasHeight,style:g(`width:${t.canvasWidth}px;height:${t.canvasHeight}px`)},null,14,x),c("canvas",{ref_key:"canvas2",ref:S,class:"auth-canvas2_",width:b(A),height:t.canvasHeight,style:g(`width:${b(A)}px;height:${t.canvasHeight}px;transform:translateX(${b(B)-b(M)-(b(A)-b(M))*((b(B)-b(M))/(t.canvasWidth-b(M)))}px)`)},null,12,w),c("div",{class:p(["loading-box_",{hide_:!C.loading}])},m,2),c("div",{class:p(["info-box_",{show:C.infoBoxShow},{fail:C.infoBoxFail}])},v(C.infoText),3),c("div",{class:p(["flash_",{show:C.isSuccess}]),style:g(`transform: translateX(${C.isSuccess?`${t.canvasWidth+.578*t.canvasHeight}px`:`-${.578*t.canvasHeight}px`}) skew(-30deg, 0);`)},null,6),c("img",{class:"reset_",onClick:Q,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="})],4),c("div",y,[c("div",{class:"range-box",style:g(`height:${b(M)}px`)},[c("div",_,v(t.sliderText),1),c("div",{class:"range-slider",ref_key:"rangeSlider",ref:T,style:g(`width:${b(B)}px`)},[c("div",{class:p(["range-btn",{isDown:C.mouseDown}]),style:g(`width:${b(M)}px`),onMousedown:o[0]||(o[0]=t=>D(t)),onTouchstart:o[1]||(o[1]=t=>D(t))},k,38)],4)],4)])],32)],34)]))}}))}}}));