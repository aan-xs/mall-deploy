"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[6364],{42418:function(e,t,i){i.d(t,{Z:function(){return h}});i(73927);var n=i(94868),a=i(18850),r=i(44975),s=i(47179),l=i(26870),o=function(e){var t=e.parent,i=e.bem,n=e.role;return{mixins:[(0,s.j)(t),r.f],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===n&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,i=e.target,n=this.$refs.icon,a=n===i||(null==n?void 0:n.contains(i));this.isDisabled||!a&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,n=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:(0,l.N)(n)}},[this.slots("icon",{checked:t})||e(a.Z,{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:n,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},u=(0,n.d)("checkbox"),c=u[0],d=u[1],h=c({mixins:[o({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,i=t.value.slice();if(e){if(t.max&&i.length>=t.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),t.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),t.$emit("input",i))}}}})},2710:function(e,t,i){i(95812),i(57846),i(35726)},44975:function(e,t,i){i.d(t,{f:function(){return n}});var n={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}}},20953:function(e,t,i){i.d(t,{Z:function(){return $}});i(73927);var n=i(11084),a=i(94868),r=i(26870),s=i(71149);function l(e){return Array.isArray(e)?e:[e]}function o(e,t){return new Promise((function(i){if("file"!==t){var n=new FileReader;n.onload=function(e){i(e.target.result)},"dataUrl"===t?n.readAsDataURL(e):"text"===t&&n.readAsText(e)}else i(null)}))}function u(e,t){return l(e).some((function(e){return!!e&&((0,s.mf)(t)?t(e):e.size>t)}))}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function d(e){return c.test(e)}function h(e){return!!e.isImage||(e.file&&e.file.type?0===e.file.type.indexOf("image"):e.url?d(e.url):!!e.content&&0===e.content.indexOf("data:image"))}var p=i(44975),f=i(18850),m=i(21733),g=i(70854),v=i(92562),b=(0,a.d)("uploader"),y=b[0],w=b[1],$=y({inheritAttrs:!1,mixins:[p.f],model:{prop:"fileList"},props:{disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String,Function],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return(0,r.N)(this.previewSize)},value:function(){return this.fileList}},created:function(){this.urls=[]},beforeDestroy:function(){this.urls.forEach((function(e){return URL.revokeObjectURL(e)}))},methods:{getDetail:function(e){return void 0===e&&(e=this.fileList.length),{name:this.name,index:e}},onChange:function(e){var t=this,i=e.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if((0,s.tI)(n))return void n.then((function(e){e?t.readFile(e):t.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(e){var t=this,i=u(e,this.maxSize);if(Array.isArray(e)){var n=this.maxCount-this.fileList.length;e.length>n&&(e=e.slice(0,n)),Promise.all(e.map((function(e){return o(e,t.resultType)}))).then((function(n){var a=e.map((function(e,t){var i={file:e,status:"",message:""};return n[t]&&(i.content=n[t]),i}));t.onAfterRead(a,i)}))}else o(e,this.resultType).then((function(n){var a={file:e,status:"",message:""};n&&(a.content=n),t.onAfterRead(a,i)}))},onAfterRead:function(e,t){var i=this;this.resetInput();var n=e;if(t){var a=e;Array.isArray(e)?(a=[],n=[],e.forEach((function(e){e.file&&(u(e.file,i.maxSize)?a.push(e):n.push(e))}))):n=null,this.$emit("oversize",a,this.getDetail())}var r=Array.isArray(n)?Boolean(n.length):Boolean(n);r&&(this.$emit("input",[].concat(this.fileList,l(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(e,t){var i,n=this,a=null!=(i=e.beforeDelete)?i:this.beforeDelete;if(a){var r=a(e,this.getDetail(t));if(!r)return;if((0,s.tI)(r))return void r.then((function(){n.deleteFile(e,t)})).catch(s.ZT)}this.deleteFile(e,t)},deleteFile:function(e,t){var i=this.fileList.slice(0);i.splice(t,1),this.$emit("input",i),this.$emit("delete",e,this.getDetail(t))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onClickUpload:function(e){this.$emit("click-upload",e)},onPreviewImage:function(e){var t=this;if(this.previewFullImage){var i=this.fileList.filter((function(e){return h(e)})),a=i.map((function(e){return e.file&&!e.url&&"failed"!==e.status&&(e.url=URL.createObjectURL(e.file),t.urls.push(e.url)),e.url}));this.imagePreview=(0,v.Z)((0,n.Z)({images:a,startPosition:i.indexOf(e),onClose:function(){t.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(e){var t=this.$createElement,i=e.status,n=e.message;if("uploading"===i||"failed"===i){var a="failed"===i?t(f.Z,{attrs:{name:"close"},class:w("mask-icon")}):t(g.Z,{class:w("loading")}),r=(0,s.Xq)(n)&&""!==n;return t("div",{class:w("mask")},[a,r&&t("div",{class:w("mask-message")},[n])])}},genPreviewItem:function(e,t){var i,a,r,s=this,l=this.$createElement,o=null!=(i=e.deletable)?i:this.deletable,u="uploading"!==e.status&&o,c=u&&l("div",{class:w("preview-delete"),on:{click:function(i){i.stopPropagation(),s.onDelete(e,t)}}},[l(f.Z,{attrs:{name:"cross"},class:w("preview-delete-icon")})]),d=this.slots("preview-cover",(0,n.Z)({index:t},e)),p=d&&l("div",{class:w("preview-cover")},[d]),g=null!=(a=e.previewSize)?a:this.previewSize,v=null!=(r=e.imageFit)?r:this.imageFit,b=h(e)?l(m.Z,{attrs:{fit:v,src:e.content||e.url,width:g,height:g,lazyLoad:this.lazyLoad},class:w("preview-image"),on:{click:function(){s.onPreviewImage(e)}}},[p]):l("div",{class:w("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[l(f.Z,{class:w("file-icon"),attrs:{name:"description"}}),l("div",{class:[w("file-name"),"van-ellipsis"]},[e.file?e.file.name:e.url]),p]);return l("div",{class:w("preview"),on:{click:function(){s.$emit("click-preview",e,s.getDetail(t))}}},[b,this.genPreviewMask(e),c])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var e=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var t,i=this.slots(),a=this.readonly?null:e("input",{attrs:(0,n.Z)({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:w("input"),on:{change:this.onChange}});if(i)return e("div",{class:w("input-wrapper"),key:"input-wrapper",on:{click:this.onClickUpload}},[i,a]);if(this.previewSize){var r=this.previewSizeWithUnit;t={width:r,height:r}}return e("div",{directives:[{name:"show",value:this.showUpload}],class:w("upload",{readonly:this.readonly}),style:t,on:{click:this.onClickUpload}},[e(f.Z,{attrs:{name:this.uploadIcon},class:w("upload-icon")}),this.uploadText&&e("span",{class:w("upload-text")},[this.uploadText]),a])}}},render:function(){var e=arguments[0];return e("div",{class:w()},[e("div",{class:w("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}})},59701:function(e,t,i){i(95812),i(43883),i(57846),i(35726),i(43464),i(19591),i(64733),i(34932),i(90973),i(11941)},22745:function(e,t,i){i.d(t,{$8:function(){return m},AY:function(){return k},D8:function(){return p},Ew:function(){return c},Ko:function(){return s},Mz:function(){return w},NP:function(){return F},S:function(){return v},VU:function(){return d},ZO:function(){return h},_T:function(){return $},aN:function(){return l},gv:function(){return f},h2:function(){return o},lR:function(){return g},mh:function(){return a},nT:function(){return b},tr:function(){return r},w:function(){return y},yS:function(){return u}});var n=i(83562);const a=e=>(0,n.Z)({url:"api/sellerGoods!info.action",method:"post",params:e}),r=e=>(0,n.Z)({url:"/api/evaluation!list.action",method:"post",params:e}),s=e=>(0,n.Z)({url:"api/seller!info.action",method:"post",params:e}),l=e=>(0,n.Z)({url:"api/order!submit.action",method:"post",params:e}),o=e=>(0,n.Z)({url:"api/order!pay.action",method:"post",params:e}),u=e=>(0,n.Z)({url:"api/order!info.action",method:"post",params:{...e,loginType:"user"}}),c=e=>(0,n.Z)({url:"/seller/version!register.action",method:"post",params:e}),d=e=>(0,n.Z)({url:"api/uploadimg!execute.action",method:"post",data:e}),h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.Z)({url:"api/address!listCountry.action",method:"post",params:e})},p=e=>(0,n.Z)({url:"/seller/version!registerjs.action",method:"post",params:e}),f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.Z)({url:"api/jscode!execute.action",method:"post",params:e})},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.Z)({url:"api/sysParaSign!info.action",method:"post",params:e})},g=e=>(0,n.Z)({url:"api/kyc!get.action",method:"post",params:e}),v=e=>(0,n.Z)({url:"api/keepGoods!add.action",method:"post",params:e}),b=e=>(0,n.Z)({url:"api/keepGoods!del.action",method:"post",params:e}),y=e=>(0,n.Z)({url:"api/evaluation!countType.action",method:"post",params:e}),w=e=>(0,n.Z)({url:"api/sellerGoods!recommend_like.action",method:"post",params:e}),$=e=>(0,n.Z)({url:"api/cart!add.action",method:"post",params:e}),k=e=>(0,n.Z)({url:"api/cart!list.action",method:"post",params:e}),F=e=>(0,n.Z)({url:"api/cart!update.action",method:"post",params:e})},82006:function(e,t,i){i.r(t),i.d(t,{default:function(){return T}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"merchantSettled"},[t("van-nav-bar",{ref:"header",attrs:{"safe-area-inset-top":"",title:e.$t("预计还款"),"left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.go(-1)}}}),t("div",{staticClass:"merchantSettled-wap"},[t("div",{staticClass:"step-div"},[t("div",[t("div",{staticClass:"content content2"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":e.labelPosition,"label-width":"200px"}},[t("el-form-item",{attrs:{label:e.$t("申请人"),prop:"name"}},[t("el-input",{attrs:{disabled:"",placeholder:e.$t("真实姓名")},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:e.$t("已贷款天数"),prop:"days"}},[t("el-input",{attrs:{disabled:"",placeholder:`1${e.$t("天")}`},model:{value:e.ruleForm.days,callback:function(t){e.$set(e.ruleForm,"days",t)},expression:"ruleForm.days"}})],1),t("el-form-item",{attrs:{label:e.$t("还款金额"),prop:"amount"}},[t("el-input",{attrs:{placeholder:e.$t("请输入还款金额"),disabled:""},model:{value:e.ruleForm.amount,callback:function(t){e.$set(e.ruleForm,"amount",t)},expression:"ruleForm.amount"}})],1),t("el-form-item",{attrs:{label:e.$t("贷款利率"),prop:"interestRate"}},[t("el-input",{attrs:{placeholder:"2%",disabled:""},model:{value:e.ruleForm.interestRate,callback:function(t){e.$set(e.ruleForm,"interestRate",t)},expression:"ruleForm.interestRate"}})],1),t("el-form-item",{attrs:{label:e.$t("还款方式"),prop:"loanMethod"}},[t("el-input",{attrs:{placeholder:`${e.$t("账户余额")}`,disabled:""},model:{value:e.ruleForm.loanMethod,callback:function(t){e.$set(e.ruleForm,"loanMethod",t)},expression:"ruleForm.loanMethod"}})],1)],1)],1),t("div",{staticClass:"bottom"},[t("van-button",{staticClass:"button",attrs:{type:"primary",color:e.mainColor},on:{click:e.sellerRegister}},[e._v(e._s(e.$t("确认还款"))+" ")])],1)])])]),t("van-popup",{attrs:{position:"bottom"},model:{value:e.pwtStatus,callback:function(t){e.pwtStatus=t},expression:"pwtStatus"}},[t("enter-Password",{attrs:{isPasswordShow:e.pwtStatus},on:{close:function(t){e.pwtStatus=!1},getPassword:e.getPassword}})],1),t("nationality-list",{ref:"controlChild",attrs:{title:e.$t("选择区域码")},on:{getName:function(t){return e.getName(arguments)}}})],1)},a=[],r=(i(43635),i(93407)),s=i(68747),l=i.n(s),o=i(86545),u=i.n(o),c=(i(59701),i(20953)),d=i(4137),h=i.n(d),p=i(87133),f=i.n(p),m=i(16853),g=i.n(m),v=(i(24657),i(42310)),b=(i(2710),i(42418)),y=(i(14331),i(44259)),w=i(17689),$=i.n(w),k=i(91500),F=i.n(k),Z=i(51046),C=i.n(Z),S=(i(73927),i(70471)),L=i(22745),x=i(90021),P=i(35075),D=i(46769),R=i(41209),I=i(14534),U={name:"merchantSettled",data(){return{mainColor:"#f89900",screenWidth:document.body.clientWidth,uploadCheckIndex:1,areaCode:1,pwtStatus:!1,ruleForm:{loanMethod:"",term:"",name:"",idimg_1:"",idimg_2:"",idimg_3:"",idname:"身份证",interestRate:"2%",nationality:"",sellerImg:"",username:"",amount:""},labelPosition:"top",isCode:!0,rules:{amount:[{required:!0,message:this.$t("请输入金额"),trigger:"blur"}]},fileList1:[],fileList2:[],fileList3:[],fileList4:[],CountryList:[{label:"中国",value:"cn",icon:i(90876)}],tabList:[this.$t("电子邮箱"),this.$t("手机号")],tabIndex:0,lang:[{title:"简体中文",key:"cn",icon:i(90876)},{title:"English",key:"en",icon:i(75740)},{title:"繁体中文",key:"tw",icon:i(44012)}],pageDiaCode:!0}},computed:{languageIcon(){const e=this.$store.getters.language||"tw",t={cn:i(90876),en:i(75740),tw:i(44012)};return t[e]},...(0,S.Se)({activeLang:"language"})},components:{EnterPassword:D.Z,NationalityList:R.Z,[C().name]:C(),[F().name]:F(),[$().name]:$(),[y.Z.name]:y.Z,[b.Z.name]:b.Z,[v.Z.name]:v.Z,[g().name]:g(),[f().name]:f(),[h().name]:h(),[c.Z.name]:c.Z,[u().name]:u(),[l().name]:l(),[r.Z.name]:r.Z},created(){this.screenWidth>=500?this.labelPosition="left":this.labelPosition="top",this.requireLoanRepayForward()},watch:{tabIndex(e,t){e!==t&&(this.ruleForm.username="")}},methods:{async requireLoanRepayForward(){const e=await(0,P.Br)({creditId:this.$route.query.creditId});this.ruleForm.name=e.realName,this.ruleForm.days=e.alreadyCreditDays,this.ruleForm.interestRate=100*e.creditRate+"%",this.ruleForm.loanMethod=`${this.$t("账户余额")}: ${e.accountAmount}`,this.ruleForm.amount=e.estimatePayment},async requireLoanPay(e){await(0,P.ur)({creditId:this.$route.query.creditId,safeword:e});this.$router.go(-1),this.$notify(this.$t("还款成功"),"success")},getPassword(e){this.requireLoanPay(e)},handleCutting(){this.isCutting=!0},handleCancel(){this.isCutting=!1,this.fileList1=[]},handleUpload(e){let t=new File([e],"logo.png");r.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});let i=new FormData;i.append("file",t),i.append("moduleName","selle"),(0,L.VU)(i).then((e=>{this.ruleForm.sellerImg=e,this.isCutting=!1,this.fileList1[0].content=e})).finally((()=>{r.Z.clear()}))},handleCropData(e){I.log("裁剪数据"),I.log(e)},...(0,S.OI)(["setLanguage"]),handleSetLang(e){I.log(e),this.$i18n.locale=this.lang[e].key,this.setLanguage(this.lang[e].key)},handleDelete(e){this[`fileList${e}`]=[]},sellerRegister(){this.$refs["ruleForm"].validate((e=>{if(!e)return!1;this.handlePay()}))},handlePay(){(0,x.bM)({}).then((e=>{1==e.safeword?this.pwtStatus=!0:this.$router.push({path:"/FundPasswordSettings"})}))},openNationality(e){this.isCode=1===e,this.$refs.controlChild.open()},getName(e){this.isCode?this.areaCode=e[2]:this.ruleForm.nationality=e[0]},afterRead1(e){this.imgFile=e.content,this.isCutting=!0},afterRead2(e){r.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});let t=new FormData;t.append("file",e.file),t.append("moduleName","selle"),(0,L.VU)(t).then((e=>{this.ruleForm.idimg_1=e})).catch((e=>{this.fileList2=[],r.Z.fail(this.$t("上传失败"))})).finally((()=>{r.Z.clear()}))},afterRead3(e){r.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});let t=new FormData;t.append("file",e.file),t.append("moduleName","selle"),(0,L.VU)(t).then((e=>{this.ruleForm.idimg_2=e})).catch((e=>{this.fileList3=[],r.Z.fail(this.$t("上传失败"))})).finally((()=>{r.Z.clear()}))},afterRead4(e){r.Z.loading({duration:0,message:this.$t("上传中"),forbidClick:!0});let t=new FormData;t.append("file",e.file),t.append("moduleName","selle"),(0,L.VU)(t).then((e=>{this.ruleForm.idimg_3=e})).catch((e=>{this.fileList4=[],r.Z.fail(this.$t("上传失败"))})).finally((()=>{r.Z.clear()}))}}},z=U,A=i(80062),N=(0,A.Z)(z,n,a,!1,null,"4202be6d",null),T=N.exports}}]);