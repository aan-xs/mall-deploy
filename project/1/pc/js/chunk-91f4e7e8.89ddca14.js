(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-91f4e7e8"],{"0259":function(t,e,a){},"074f":function(t,e,a){a("14d9");var s={name:"EsPayPassword",props:{type:{type:String,required:!1,default:"number"},maxlength:{type:Number,required:!1,default:6},styles:{type:Object,required:!1,default:()=>({})}},data(){return{inputdata:"",codeData:[]}},watch:{inputdata(t,e){/[^\d]/g.test(t)?this.inputdata=this.inputdata.replace(/[^\d]/g,""):t.length<e.length?""===t?this.$data.codeData=["","","","","",""]:this.$data.codeData[e.length-1]="":t.length-1===e.length?this.$data.codeData[t.length-1]=t[t.length-1]:t.split("").map((t,e)=>{this.$data.codeData[e]=t})}},computed:{},mounted(){this.$refs.codeinput.focus();for(let t=0,e=this.maxlength;t<e;t++)this.codeData.push("")},methods:{clear(){this.codeData=[],this.inputdata="";for(let t=0,e=this.maxlength;t<e;t++)this.codeData.push("")},focus(){this.$refs.codeinput.focus()},inputBlur(){this.$emit("output",{data:this.$data.inputdata,isfinished:!this.$data.codeData.includes("")})}}};a("8ccf"),a=a("2877"),a=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"code-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata,expression:"inputdata"}],ref:"codeinput",staticClass:"code-input",attrs:{type:"tel",pattern:"[0-9]*",maxlength:t.maxlength},domProps:{value:t.inputdata},on:{blur:function(e){return t.inputBlur()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputBlur()},input:function(e){e.target.composing||(t.inputdata=e.target.value)}}}),"password"===t.type?e("div",{staticClass:"code-all",on:{click:t.focus}},t._l(t.codeData,(function(a,s){return e("div",{key:s,staticClass:"code-item",class:{"code-active":0===s||t.inputdata.length-1>=s,"code-password":t.inputdata.length-1>=s},style:[t.styles],attrs:{contenteditable:"true"}})})),0):e("div",{staticClass:"code-all",on:{click:t.focus}},t._l(t.codeData,(function(a,s){return e("div",{key:s,staticClass:"code-item",class:{"code-active":0===s||t.inputdata.length-1>=s},style:[t.styles],attrs:{contenteditable:"true"}},[t._v(" "+t._s(a)+" ")])})),0)])}),[],!1,null,null,null);e.a=a.exports},1031:function(t,e,a){a("413c")},"413c":function(t,e,a){},"7b6a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAY1BMVEVHcEz4mAD4mQD3lwD/z4L4mAD3lwD5mgD5mAD3lwD4mQD2lgD0lQD/z4D/z4D/z4L/nwD5mQD1mQD/zYL/z4D/z4H1lgD/z4D/z4P/z4D/z4P4mQD4mADvnwD3lwD4mQD/z4LM3YtlAAAAH3RSTlMA398gn7+An59g73AwEDDvEO9QYGDPUCC/UK+vrxBAiIRtuAAAAJ1JREFUOMvdlEkWgjAMQGNalaYFWnCewv1PaYEl1WSp/PV/GV8CsC6i3wt4M3qBWCSFLCJT9Z0HcorQMRupOMN8AsdpJ0LssqjCQbdV8dJP0TgVRl9jFjcis4hyffhv4tkW6EsRD8MSW0w9mjdFRIBrOxxrVTPNB3PZdTatbjzNpf69zajP9UmMd+Gl0JQ1oHwIFKbAXngplY8r+8tvY+Emf5JYh2EAAAAASUVORK5CYII="},"8ccf":function(t,e,a){a("0259")},"9b2e":function(t,e,a){a.d(e,"g",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return d})),a.d(e,"b",(function(){return r})),a.d(e,"h",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return u}));var s=a("adb5");let i=t=>s.a.fetch("/api/credit!check.action",t),o=t=>s.a.fetch("/api/credit!apply.action",t),n=t=>s.a.fetch("/api/credit!bill.action",t),d=t=>s.a.fetch("/api/credit!histroy.action",t),r=t=>s.a.fetch("/api/credit!beforepay.action",t),l=t=>s.a.fetch("/api/credit!pay.action",t),c=t=>s.a.fetch("/api/credit!config.action",t),u=t=>s.a.fetch("/api/credit!beforereapply.action",t)},a913:function(t,e,a){a.r(e),a("14d9");var s=a("9b2e"),i=a("074f"),o=a("4260"),n=a("2f62");i={components:{EsPayPassword:i.a},props:{show:{type:Boolean,default:!1},payCallback:{type:Function,default:null},payLoading:{type:Boolean,default:!1}},model:{prop:"show",event:"update"},data(){return{historyList:[],pageSize:10,pageNum:1,total:2,loading:!0,dialogVisible:!1,realname:"",creditRate:0,alreadyCreditDays:0,estimatePayment:0,accountAmount:0,passwordDialog:!1,password:"",showModel:0,myloan:"--",day:"--",Interest:"--",repay:"--",disble:!1,fouce:!1,firstPaw:0,secondPaw:0}},mounted(){this.getCreditList(),this.getCreditHistory(1)},computed:{...Object(n.c)({userInfo:"userInfo"})},methods:{...Object(n.b)({setSafewordFunc:"order/setSafewordFunc"}),numberFormat:o.f,async getCreditList(){var t=await Object(s.c)();this.myloan=this.numberFormat(t.data.applyAmount)?this.numberFormat(t.data.applyAmount):"--",this.day=t.data.alreadyCreditDays||"--",this.Interest=this.numberFormat(t.data.interest)?this.numberFormat(t.data.interest):"--",this.repay=this.numberFormat(t.data.estimatePayment)?this.numberFormat(t.data.estimatePayment):"--"},async getCreditHistory(){var t=await Object(s.d)({pageNo:this.pageNum});this.historyList=t.data.elements,this.loading=!1,this.total=t.data.totalElements},currentChange(t){this.pageNum=t,this.loading=!0,this.getDicountedList()},goPage(t){this.$router.push("/credit/application?id="+t)},async creditDetail(t){t=await Object(s.b)({pageNo:"1",creditId:t}),this.realname=t.data.realName,this.creditRate=100*t.data.creditRate,this.alreadyCreditDays=t.data.alreadyCreditDays,this.estimatePayment=t.data.estimatePayment,this.accountAmount=t.data.accountAmount},Repayment(t){this.dialogVisible=!0,this.creditDetail(t),this.creditId=t},payContent(){this.fouce&&this.$refs.passwordRef.clear(),this.userInfo.safeword?(this.showModel=0,this.passwordDialog=!0):(this.passwordDialog=!0,this.showModel=1)},previous(){this.showModel=1,this.$refs.passwordRef.clear()},setUpPaw(){6===this.$refs.passwordRef.codeData.filter(t=>""!==t).length?this.showModel=2:this.$message({message:this.$t("message.home.请输入完整的支付密码!"),type:"warning"}),this.$refs.passwordRef.clear()},confirmPayPaw(){this.firstPaw===this.secondPaw?this.setSafeword(this.firstPaw,this.secondPaw):(this.$message({message:this.$t("message.home.twoPawword"),type:"warning"}),this.$refs.passwordRef.clear())},async setSafeword(t,e){try{await this.setSafewordFunc({safeword:t,re_safeword:e}),this.showModel=0,this.$message.success(this.$t("message.home.setSuccess"))}catch(t){}},async pay(){var t;this.accountAmount<this.estimatePayment?this.$message({message:this.$t("message.home.balanceNot"),type:"warning"}):(this.$refs.passwordRef.clear(),1==(t=await Object(s.h)({creditId:this.creditId,safeword:this.password})).code&&this.$refs.passwordRef.clear(),0==t.code&&(this.dialogVisible=!1,this.$message({message:this.$t("message.home.paymentSuccessful"),type:"success"}),this.getCreditHistory())),setTimeout(()=>{this.passwordDialog=!1},200)},output({data:t,isfinished:e}){this.fouce=!0,e&&(1===this.showModel?this.firstPaw=t:2===this.showModel?this.secondPaw=t:0===this.showModel&&(this.password=t))}}},a("1031"),n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container loan"},[e("div",{staticClass:"mine"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("message.home.myloan")))]),e("div",{staticClass:"money"},[t._v(t._s(t.myloan))]),e("div",{staticClass:"details"},[e("div",[e("span",[t._v(t._s(t.day)+t._s(t.$t("message.home.days")))]),e("p",[t._v(t._s(t.$t("message.home.loaned")))])]),e("div",[e("span",[t._v(t._s(t.Interest))]),e("p",[t._v(t._s(t.$t("message.home.interest")))])]),e("div",[e("span",[t._v(t._s(t.repay))]),e("p",[t._v(t._s(t.$t("message.home.esRepayment")))])])])]),t.disble?e("div",{staticClass:"right"},[e("div",{on:{click:t.goPage}},[t._v(" "+t._s(t.$t("message.home.applyLoan"))+" ")])]):t._e()]),e("div",{staticClass:"record-title"},[t._v(t._s(t.$t("message.home.loanHistory")))]),e("div",{staticClass:"record"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},t._l(t.historyList,(function(s,i){return e("div",{key:i,staticClass:"list"},[e("img",{attrs:{src:a("7b6a"),alt:""}}),e("div",{staticClass:"item date-box"},[e("div",{staticClass:"money"},[t._v(t._s(t.numberFormat(s.applyAmount)))]),e("div",{staticClass:"date"},[t._v(" "+t._s(t.$t("message.home.applicantDate"))+":"+t._s(t.$formatZoneDate(s.customerSubmitTime))+" ")])]),e("div",{staticClass:"item-container"},[e("div",{staticClass:"item"},[e("span",{staticClass:"date"},[t._v(t._s(s.creditPeriod)+t._s(t.$t("message.home.days")))]),e("span",{staticClass:"date"},[t._v(t._s(t.$t("message.home.cycle")))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"date"},[t._v(t._s(100*s.creditRate)+"%")]),e("span",{staticClass:"date"},[t._v(t._s(t.$t("message.home.fixedRate")))])]),2==s.status?e("div",{staticClass:"status"},[t._v(" "+t._s(t.$t("message.home.successLoan"))+" ")]):t._e(),4==s.status?e("div",{staticClass:"status fail"},[t._v(" "+t._s(t.$t("message.home.borrow"))+" ")]):t._e(),1==s.status?e("div",{staticClass:"status application"},[t._v(" "+t._s(t.$t("message.home.applicantIn"))+" ")]):t._e(),5==s.status?e("div",{staticClass:"status finish"},[t._v(" "+t._s(t.$t("message.home.repaid"))+" ")]):t._e(),3==s.status?e("div",{staticClass:"status overdue"},[t._v(" "+t._s(t.$t("message.home.overdue"))+" ")]):t._e(),2==s.status||3==s.status?e("div",{staticClass:"btn",on:{click:function(e){return t.Repayment(s.id)}}},[t._v(" "+t._s(t.$t("message.home.repayment"))+" ")]):t._e(),4==s.status?e("div",{staticClass:"btn fail-btn",on:{click:function(e){return t.goPage(s.id)}}},[t._v(" "+t._s(t.$t("message.home.Reapply"))+" ")]):t._e(),4!==s.status&&2!==s.status&&3!==s.status?e("div",{staticClass:"default"},[t._v(" -- ")]):t._e()])])})),0),e("div",{staticClass:"common-pagination"},[t.historyList.length?e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.pageNum,total:t.total},on:{"current-change":t.currentChange}}):t._e()],1),e("el-dialog",{staticClass:"es-dialog",attrs:{visible:t.dialogVisible,width:"442px",title:t.$t("message.home.estirepay")},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[e("span",[t._v(t._s(t.$t("message.home.applicant")))]),e("el-input",{attrs:{value:t.realname,disabled:""}}),e("span",[t._v(t._s(t.$t("message.home.loanDays")))]),e("el-input",{attrs:{value:t.alreadyCreditDays,disabled:""}}),e("span",[t._v(t._s(t.$t("message.home.reAmount")))]),e("el-input",{attrs:{value:t.numberFormat(t.estimatePayment),disabled:""}}),e("span",[t._v(t._s(t.$t("message.home.rates")))]),e("el-input",{attrs:{value:t.creditRate+"%",disabled:""}}),e("span",[t._v(t._s(t.$t("message.home.accountB")))]),e("el-input",{attrs:{value:t.numberFormat(t.accountAmount),disabled:""}}),e("el-button",{on:{click:function(e){return t.payContent()}}},[t._v(t._s(t.$t("message.home.repayment")))])],1)]),e("el-dialog",{staticClass:"es-dialog",attrs:{visible:t.passwordDialog,center:!0,"append-to-body":!0,width:"475px"},on:{"update:visible":function(e){t.passwordDialog=e}}},[e("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[0===t.showModel?e("span",[t._v(t._s(t.$t("message.home.desc3")))]):t._e(),1===t.showModel?e("span",[t._v(t._s(t.$t("message.home.setUpPayPaw")))]):t._e(),2===t.showModel?e("span",[t._v(t._s(t.$t("message.home.confirmPayPaw")))]):t._e()]),e("div",{staticClass:"pay-modal-content dialog-content"},[2!==t.showModel?e("h2",{staticClass:"pay-modal-title"},[t._v(" "+t._s(t.$t("message.home.desc4"))+" ")]):t._e(),2===t.showModel?e("h2",{staticClass:"pay-modal-title"},[t._v(" "+t._s(t.$t("message.home.desc6"))+" ")]):t._e(),e("EsPayPassword",{ref:"passwordRef",attrs:{type:"password",maxlength:6},on:{output:t.output}}),e("div",{staticClass:"pay-modal-btn"},[0===t.showModel?e("el-button",{attrs:{type:"primary",loading:t.payLoading},on:{click:t.pay}},[t._v(" "+t._s(t.$t("message.home.确认"))+" ")]):t._e(),1===t.showModel?e("el-button",{attrs:{type:"primary",loading:t.payLoading},on:{click:t.setUpPaw}},[t._v(" "+t._s(t.$t("message.home.确认"))+" ")]):t._e(),2===t.showModel?e("div",{staticClass:"pay-button-view"},[e("el-button",{attrs:{loading:t.payLoading},on:{click:t.previous}},[t._v(" "+t._s(t.$t("message.home.previous"))+" ")]),e("el-button",{attrs:{type:"primary",loading:t.payLoading},on:{click:t.confirmPayPaw}},[t._v(" "+t._s(t.$t("message.home.确认"))+" ")])],1):t._e()],1)],1)])],1)])}),[],!1,null,"634709dc",null);e.default=o.exports}}]);