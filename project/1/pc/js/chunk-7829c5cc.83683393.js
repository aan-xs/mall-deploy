(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7829c5cc"],{"0ddb":function(e,t,r){"use strict";function a(e,t){var r={};r[e]=l(e,t,m),n({global:!0,constructor:!0,arity:1,forced:m},r)}function s(e,t){var r;u&&u[e]&&((r={})[e]=l(c+"."+e,t,m),n({target:c,stat:!0,constructor:!0,arity:1,forced:m},r))}var n=r("82ef"),i=r("bc85"),o=r("ff99"),l=r("6d6e"),c="WebAssembly",u=i[c],m=7!==new Error("e",{cause:7}).cause;a("Error",(function(e){return function(t){return o(e,this,arguments)}})),a("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),a("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),a("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),a("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),a("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),a("URIError",(function(e){return function(t){return o(e,this,arguments)}})),s("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),s("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),s("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},"17f8":function(e,t,r){"use strict";var a=r("9822"),s=r("dd76"),n=r("d5e3"),i=Error.captureStackTrace;e.exports=function(e,t,r,o){n&&(i?i(e,t):a(e,"stack",s(r,o)))}},"21f4":function(e,t,r){"use strict";var a=r("542f"),s=r("bcba"),n=r("3aee");class i{static getRule(e,t,r={},a={}){var n,i=null!=(i=a.rulesMap)?i:this.rulesMap;a=null!=(a=a.transform)?a:this.transform;return Object.keys(i).includes(e)&&Object(s.isFunction)(i[e])?(({dynamic:n={}}=r),i={trigger:["blur","change"],...i[e](n),...Object(s.omit)(r,"dynamic")},t&&(i.message=t),a&&(i.transform=a),i):{}}}Object(a.a)(i,"rulesMap",{}),Object(a.a)(i,"transform",null);const o={required:()=>({required:!0,message:n.a.t("message.home.validatorRequire")}),validator:e=>({...e}),phone:()=>({pattern:/^[\d]{1,20}$/,message:n.a.t("message.home.validatorPhone")}),email:()=>({pattern:/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,message:n.a.t("message.home.validatorEmail")}),password:()=>({pattern:/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;'"\\|,.<>?~`\-=/]{6,12}$/,message:n.a.t("message.home.validatorPassword")}),sixNumber:()=>({pattern:/^\d{6}$/,message:n.a.t("message.home.validatorSixNumber")}),fourMoreNumber:()=>({pattern:/^[0-9A-Za-z]{4,32}$/,message:n.a.t("message.home.validatorFourMoreNumber")}),decimalExceedZero:()=>({pattern:/^(([1-9]\d+)|[1-9])(\.\d{1,2})?$/,message:n.a.t("message.home.充值金额不能小于1")}),decimalSix:()=>({pattern:/^\d+(\.\d{1,10})?$/,message:n.a.t("message.home.最多包含10位小数")}),ipAddress:()=>({pattern:/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,message:n.a.t("message.home.validatorIpRule")}),cionAddress:()=>({pattern:/[^\u4E00-\u9FA5]/g,message:n.a.t("message.home.pleaseCorrectAddress")}),chineseAndEnglishValidate:({cStart:e=1,cEnd:t=32})=>({pattern:new RegExp(`^[\\u4E00-\\u9FA5a-z]{${e},${t}}$`,"i"),message:n.a.t("message.home.validatorChineseAndEnglish",{cStart:e,cEnd:t})})};function l(e){return Object(s.isArray)(e)?(Object.assign(this,{type:"array"}),e):null!=(e=null==e||null==(e=e.toString())?void 0:e.trim())?e:""}class c extends i{static getRule(e,t,r={}){return i.getRule(e,t,r,{rulesMap:o,transform:l})}}Object(a.a)(c,"rulesMap",o),t.a={ruleUtils:c}},"327c":function(e,t,r){"use strict";var a=r("ce97");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:a(e)}},"542f":function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return e=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=a(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string"),"symbol"==a(e)?e:String(e)}function n(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n})),r("0ddb")},"62dd":function(e,t,r){"use strict";r("695a")},"695a":function(e,t,r){},"6d6e":function(e,t,r){"use strict";var a=r("bd74"),s=r("d803"),n=r("9822"),i=r("4cad"),o=r("a2df"),l=r("3955"),c=r("862c"),u=r("998d"),m=r("327c"),d=r("8c3a"),p=r("17f8"),f=r("e900"),g=r("7e75");e.exports=function(e,t,r,h){var b="stackTraceLimit",v=h?2:1,y=(e=e.split("."),e[e.length-1]),$=a.apply(null,e);if($){var E=$.prototype;if(!g&&s(E,"cause")&&delete E.cause,!r)return $;e=a("Error");var w=t((function(e,t){return t=m(h?t:e,void 0),e=h?new $(e):new $,void 0!==t&&n(e,"message",t),p(e,w,e.stack,2),this&&i(E,this)&&u(e,this,w),v<arguments.length&&d(e,arguments[v]),e}));if(w.prototype=E,"Error"!==y?o?o(w,e):l(w,e,{name:!0}):f&&b in $&&(c(w,$,b),c(w,$,"prepareStackTrace")),l(w,$),!g)try{E.name!==y&&n(E,"name",y),E.constructor=w}catch(e){}return w}}},"862c":function(e,t,r){"use strict";var a=r("585e").f;e.exports=function(e,t,r){r in e||a(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},"8c3a":function(e,t,r){"use strict";var a=r("8785"),s=r("9822");e.exports=function(e,t){a(t)&&"cause"in t&&s(e,"cause",t.cause)}},b79e:function(e,t,r){"use strict";r.r(t),r("e02e");var a=r("21f4"),s=r("3191"),n=r("365c"),i={data(){return{UploadApi:n.U,sellerId:"",loading:!1,isloading:!1,model:{complaintType:"",imageUrl:[],content:""},uploadParams:{moduleName:"selle",token:localStorage.getItem("ES_TOKEN")},complaintType:[{label:this.$t("message.home.长时间不发货"),value:1},{label:this.$t("message.home.卖家服务态度恶劣"),value:2},{label:this.$t("message.home.卖家交易欺诈"),value:3},{label:this.$t("message.home.卖家承诺不履行"),value:4},{label:this.$t("message.home.其他"),value:0}],dialogImageUrl:"",dialogVisible:!1,rules:{complaintType:[a.a.ruleUtils.getRule("required")],imageUrl:[a.a.ruleUtils.getRule("required")],content:[a.a.ruleUtils.getRule("required")]}}},mounted(){this.sellerId=this.$route.params.sellerId},methods:{beforeUpload(e){this.$message({message:this.$t("message.home.uploading"),type:"info"})},handlePictureCardPreview(e){this.$message.close(),this.$message({message:this.$t("message.home.uploadSuccess"),type:"success"}),this.model.imageUrl.push(e.data)},confirmEvent(){this.requestData()},requestData(){this.$refs.reportForm.validate(async e=>{if(e)try{this.loading=!0,this.isloading=!0;const e={sellerId:this.sellerId,complaintStatus:this.model.complaintType,content:this.model.content};this.model.imageUrl.forEach((t,r)=>{t&&(e["imgUrl"+(r+1)]=t)}),await Object(s.p)(e),this.$message.success(this.$t("message.home.店铺投诉成功")),this.$router.go(-1)}finally{this.loading=!1,this.isloading=!1}})}}};r("62dd"),r=r("b01b"),r=Object(r.a)(i,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isloading,expression:"isloading"}],staticClass:"user-info"},[t("EsHeaderView"),t("div",{staticClass:"app-container report-box"},[t("div",{staticClass:"report-tit"},[e._v(e._s(e.$t("message.home.投诉卖家")))]),t("el-form",{ref:"reportForm",attrs:{model:e.model,rules:e.rules,"label-position":"top"}},[t("el-form-item",{attrs:{label:e.$t("message.home.投诉类型:"),prop:"complaintType"}},[t("el-select",{style:{width:"100%"},attrs:{placeholder:e.$t("message.home.请选择投诉类型")},model:{value:e.model.complaintType,callback:function(t){e.$set(e.model,"complaintType",t)},expression:"model.complaintType"}},e._l(e.complaintType,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:e.$t("message.home.截图凭证:"),prop:"imageUrl"}},[t("el-upload",{attrs:{action:e.UploadApi,"list-type":"picture-card","on-success":e.handlePictureCardPreview,data:e.uploadParams,"before-upload":e.beforeUpload,accept:".jpg,.jpeg,.png,.bmp,.JPG,.JPEG,.PBG,.BMP",limit:9}},[t("i",{staticClass:"el-icon-plus"})]),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),t("el-form-item",{attrs:{label:e.$t("message.home.投诉原因:"),prop:"content"}},[t("el-input",{staticClass:"content",attrs:{type:"textarea",placeholder:e.$t("message.home.pleaseInput"),resize:"none",maxlength:255},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1),t("div",{staticStyle:{margin:"0 auto"}},[t("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"480px",height:"44px"},attrs:{size:"medium",type:"primary"},on:{click:e.confirmEvent}},[e._v(" "+e._s(e.$t("message.home.确认"))+" ")])],1)],1)],1),t("EsFooterView")],1)}),[],!1,null,"41ee3d66",null);t.default=r.exports},d5e3:function(e,t,r){"use strict";var a=r("10a7"),s=r("f2e2");e.exports=!a((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",s(1,7)),7!==e.stack)}))},dd76:function(e,t,r){"use strict";r=r("720f");var a=Error,s=r("".replace),n=(r=String(new a("zxcasd").stack),/\n\s*at [^:]*:[^\n]*/),i=n.test(r);e.exports=function(e,t){if(i&&"string"==typeof e&&!a.prepareStackTrace)for(;t--;)e=s(e,n,"");return e}},ff99:function(e,t,r){"use strict";r=r("12f2");var a=Function.prototype,s=a.apply,n=a.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?n.bind(s):function(){return n.apply(s,arguments)})}}]);