"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[1505],{28673:function(t,s,a){a(95812),a(57846),a(35726)},1505:function(t,s,a){a.r(s),a.d(s,{default:function(){return f}});a(73927);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login"},[s("nationality-list",{ref:"controlChild",attrs:{title:t.$t("选择区域码")},on:{getName:function(s){return t.getName(arguments)}}}),s("Vcode",{staticStyle:{direction:"ltr"},attrs:{imgs:[t.img1,t.img2,t.img3,t.img4,t.img5],show:t.show,canvasHeight:200,sliderText:t.$t("拖动滑块以完成拼图"),successText:t.$t("验证通过!"),failText:t.$t("验证失败,请重试")},on:{success:t.onSuccess,fail:t.onFail,close:function(s){t.show=!1}}}),t.isShelves?s("div",{staticClass:"lang-right"},[s("div",{staticClass:"lang-left",on:{click:t.onClickLeft}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("router-link",{attrs:{to:"/language"}},[s("img",{staticClass:"lang-icon",attrs:{src:a(21652)}})])],1):t._e(),s("div",{staticClass:"login-title"},[t._v(t._s(t.$t("注册")))]),["SM-wholesaleShop","FamilyShop"].includes(t.itemName)?t._e():s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-button",class:1===t.TabShow?"tab-button-show2":"tab-button-show1",on:{click:function(s){return t.TabClick(1)}}},[t._v(t._s(t.$t("手机号")))]),s("div",{staticClass:"tab-button",class:2===t.TabShow?"tab-button-show2":"tab-button-show1",on:{click:function(s){return t.TabClick(2)}}},[t._v(t._s(t.$t("邮箱")))])]),s("div",{staticClass:"phone_form"},[s("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(1===t.TabShow?t.$t("手机号"):t.$t("邮箱")))]),1===t.TabShow?s("div",{staticClass:"login-input"},[s("el-input",{attrs:{placeholder:t.$t("请输入手机号"),maxlength:"20",clearable:""},on:{input:()=>t.formData.username=t.formData.username.replace(/[^\d]/g,"")},model:{value:t.formData.username,callback:function(s){t.$set(t.formData,"username","string"===typeof s?s.trim():s)},expression:"formData.username"}},[s("div",{attrs:{slot:"prepend"},on:{click:function(s){return t.openNational("dialCode")}},slot:"prepend"},[s("p",[t._v("+"),s("span",[t._v(t._s(t.dialCode))]),t._v(" "),s("img",{staticClass:"icon",attrs:{src:t.triangleDown,alt:""}})])])])],1):t._e(),2===t.TabShow?s("div",{staticClass:"login-input code_wrap"},[s("el-input",{attrs:{placeholder:t.$t("请输入邮箱"),maxlength:"64"},model:{value:t.formData.username,callback:function(s){t.$set(t.formData,"username","string"===typeof s?s.trim():s)},expression:"formData.username"}})],1):t._e(),["SM-wholesaleShop","FamilyShop"].includes(t.itemName)?s("div",[s("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(t.$t("手机号")))]),s("div",{staticClass:"login-input"},[s("el-input",{attrs:{placeholder:t.$t("请输入手机号"),maxlength:"20",clearable:""},on:{input:()=>t.formData.phone=t.formData.phone.replace(/[^\d]/g,"")},model:{value:t.formData.phone,callback:function(s){t.$set(t.formData,"phone","string"===typeof s?s.trim():s)},expression:"formData.phone"}},[s("div",{attrs:{slot:"prepend"},on:{click:function(s){return t.openNational("dialCode")}},slot:"prepend"},[s("p",[t._v("+"),s("span",[t._v(t._s(t.dialCode))]),t._v(" "),s("img",{staticClass:"icon",attrs:{src:t.triangleDown,alt:""}})])])])],1),s("div",{staticClass:"title-input m-t20 m-b10"},[t._v("WhatsApp")]),s("div",{staticClass:"login-input"},[s("el-input",{attrs:{placeholder:t.$t("请输入WhatsApp账号"),maxlength:"16",clearable:""},on:{input:()=>t.formData.WhatsApp=t.formData.WhatsApp.replace(/[^\d]/g,"")},model:{value:t.formData.WhatsApp,callback:function(s){t.$set(t.formData,"WhatsApp",s)},expression:"formData.WhatsApp"}},[s("div",{attrs:{slot:"prepend"},on:{click:function(s){return t.openNational("dialCode2")}},slot:"prepend"},[s("p",[t._v("+"),s("span",[t._v(t._s(t.dialCode2))]),t._v(" "),s("img",{staticClass:"icon",attrs:{src:t.triangleDown,alt:""}})])])])],1)]):t._e(),s("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(t.$t("密码")))]),s("div",{staticClass:"login-input"},[s("el-input",{attrs:{placeholder:t.$t("请输入 6-20 位由数字或字母组成的密码"),maxlength:"20","show-password":"",clearable:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password","string"===typeof s?s.trim():s)},expression:"formData.password"}})],1),s("div",{staticClass:"title-input m-t20 m-b10"},[t._v(t._s(t.$t("确认密码")))]),s("div",{staticClass:"login-input"},[s("el-input",{attrs:{placeholder:t.$t("请再次输入密码"),maxlength:"20","show-password":"",clearable:""},model:{value:t.formData.re_password,callback:function(s){t.$set(t.formData,"re_password","string"===typeof s?s.trim():s)},expression:"formData.re_password"}})],1)]),s("div",{staticClass:"tijiao",on:{click:t.post_form}},[t._v(t._s(t.$t("注册")))]),s("div",{staticClass:"zhuce"},[s("div",{staticClass:"zhuce-flex"}),s("div",{staticClass:"zhuce-text1"},[t._v(t._s(t.$t("已有账号？"))+" ")]),s("div",{staticClass:"zhuce-text2",on:{click:function(s){return t.$router.push("/login")}}},[t._v(t._s(t.$t("去登录")))]),s("div",{staticClass:"zhuce-flex"})]),["SM-wholesaleShop","FamilyShop"].includes(t.itemName)?t._e():s("div",{staticClass:"servece_box",on:{click:t.handleJump}},[s("img",{attrs:{src:a(62533)}})])],1)},i=[],o=(a(43635),a(93407)),n=(a(28673),a(18850)),r=a(24518),l=a.n(r),c=a(41209),h=a(90021),m=a(17223),A=a(14534),u={name:"LoginPage",components:{[n.Z.name]:n.Z,NationalityList:c.Z,Vcode:l()},data(){return{isLogin:m.bg,isShelves:!{NODE_ENV:"production",VUE_APP_FOOTER_COLOR:"#f89900",VUE_APP_ITEM_NAME:"SM-wholesaleShop",VUE_APP_MAIN_COLOR:"#f89900",BASE_URL:"./"}.VUE_APP_PUT_ON_SHELVES,itemName:"SM-wholesaleShop",img1:a(38580),img2:a(31406),img3:a(75042),img4:a(5431),img5:a(41376),triangleDown:a(44499),TabShow:["SM-wholesaleShop","FamilyShop"].includes("SM-wholesaleShop")?2:1,codeBtnTxt:this.$t("码"),formData:{username:"",password:"",re_password:"",verifcode:"",phone:"",WhatsApp:""},count:60,interval:null,btnDisabled:!1,show:!1,pageDiaCode:!1,dialCode:localStorage.getItem("dialCode")||1,dialCode2:localStorage.getItem("dialCode2")||1,currentdialCode:"dialCode"}},created(){this.isLogin()&&this.$router.push("/")},methods:{getCode(){if(""===this.formData.username)return void(0,o.Z)(this.$t("请输入邮箱"));const t=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(!t.test(this.formData.username))return void(0,o.Z)(this.$t("邮箱格式有误"));o.Z.loading({duration:0,message:this.$t("发送中"),forbidClick:!0});const s={target:this.formData.username};(0,h.Vv)(s).then((()=>{o.Z.success(this.$t("发送成功")),this.timerFn()})).catch((t=>{o.Z.clear()}))},timerFn(){this.codeBtnTxt=`${this.$t("再次获取")} ${this.count} s`,this.btnDisabled=!0,this.interval=setInterval((()=>{1===this.count?(this.count=60,this.codeBtnTxt=this.$t("再次获取"),this.btnDisabled=!1,clearInterval(this.interval)):(this.count-=1,this.codeBtnTxt=`${this.$t("再次获取")} ${this.count} s`)}),1e3)},handleJump(){const t=this.$store.state.multiItem["SM-wholesaleShop"].customer_service;t?window.plus?window.plus.runtime.openURL(encodeURI(t+"?wp=app")):window.open(t):this.$router.push({path:"customerServiceIndex?path=customerService"})},TabClick(t){this.TabShow=t,this.formData.username="",this.formData.password="",this.formData.re_password=""},post_form(){const t=this;if(1===this.TabShow){if(""===this.formData.username)return void(0,o.Z)(t.$t("请输入手机号"));{const s=/^[0-9]+[0-9]*$/;if(!s.test(this.formData.username))return void(0,o.Z)(t.$t("手机号格式有误"))}}if(2===this.TabShow){if(""===this.formData.username)return void(0,o.Z)(t.$t("请输入邮箱"));const s=/^([A-Za-z0-9_\-\.\w{3,}])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(!s.test(this.formData.username))return void(0,o.Z)(t.$t("邮箱格式有误"))}if(""===this.formData.password)return void(0,o.Z)(t.$t("请输入密码"));const s=/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;'"\\|,.<>?~`\-=/]{6,20}$/;s.test(this.formData.password)?this.formData.password===this.formData.re_password?["SM-wholesaleShop","FamilyShop"].includes(this.itemName)&&""===this.formData.WhatsApp.trim()?(0,o.Z)(this.$t("请输入WhatsApp账号")):this.show=!0:(0,o.Z)(this.$t("两次密码输入不一致")):(0,o.Z)(t.$t("请输入 6-20 位由数字或字母组成的密码"))},onSuccess(){this.registerSubmit(),this.show=!1},onFail(){A.log("失败回调")},async registerSubmit(){const t=["SM-wholesaleShop","FamilyShop"].includes(this.itemName)?h.hy:h.n$,s={password:encodeURI(this.formData.password)?.trim(),re_password:encodeURI(this.formData.re_password)?.trim(),type:this.TabShow};sessionStorage.getItem("ac_code")&&(s.agentCode=sessionStorage.getItem("ac_code"),sessionStorage.removeItem("ac_code")),["SM-wholesaleShop","FamilyShop"].includes(this.itemName)?(s.verifcode=this.formData.verifcode,s.phone=`${this.dialCode} ${this.formData.phone}`,s.username=this.formData.username.trim(),s.whatsApp=`+${this.dialCode2} ${this.formData.WhatsApp}`):s.username=1===this.TabShow?`${this.dialCode} ${this.formData.username.trim()}`:this.formData.username.trim(),o.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0}),t(s).then((async t=>{["SM-wholesaleShop","FamilyShop"].includes(this.itemName)?localStorage.setItem("ACCOUNT_INFO",JSON.stringify({username:this.formData.username?.trim(),phone:`${this.dialCode} ${this.formData.phone}`,TabShow:1})):1==this.TabShow?localStorage.setItem("ACCOUNT_INFO",JSON.stringify({username:this.formData.username?.trim(),dialCode:this.dialCode,TabShow:2})):localStorage.setItem("ACCOUNT_INFO",JSON.stringify({username:this.formData.username?.trim(),TabShow:1})),o.Z.clear(),this.$notify(this.$t("注册成功"),"success"),localStorage.setItem("token",t.token);let s=this.dayjs.tz.guess();localStorage.setItem("timeZone",s),await this.$store.dispatch("getUserInfo"),setTimeout((()=>{this.$router.push({path:"/"})}),500)})).catch((t=>{o.Z.clear()}))},limitEmoji(t){this.formData.WhatsApp=t.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,"")},getName(t){this.pageDiaCode?(this[this.currentdialCode]=t[2],localStorage.setItem(this.currentdialCode,this[this.currentdialCode])):this.pageDiaCode=!0},openNational(t){this.currentdialCode=t,this.$refs.controlChild.open()},onClickLeft(){this.$router.push("/")}}},p=u,d=a(80062),g=(0,d.Z)(p,e,i,!1,null,"5f86fba5",null),f=g.exports},62533:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA3CAYAAAClxaIBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgB7ZnRcdswDIbhXN/rbqARtEHVCeoN4g3iTiB3gmQDZwMnEygbOJ2A3sDe4C9xolsFIiWSIl275++Ol4sMEQAJghQ4o4wAKPSfuWlHbrPZbE+JmVEitMFsaKnbd90WuhUD4m+6vev2qp16o38Nj7Zuj7odEIfS7cHM2tmNnxvjU6F0qymCqHDSyir9Z0ttrLvYdxrR37VRerz3Lcfa+QOP1sBoNrqtxkJD/14aOeXoh0PznnIAd/g0ZnZi+lwMOBMVXkPKatjjuKIE6H7WDkdWlAKHAzt4ZBS0CYAz2NxDtoB9ViqagunY5sCc3EbXaENMpt2Deb50DYDDEQWPQRhywqtDo3yLMOqBvuQAPFIMZsTkSBYWuXtM2+xsfS4sshWFgv4srCwyNaZzsBmonz0LuYZCQH8WlEXmAelgR0rR/xz9Ga7IF7QLsMtS/F4gPQpijaCfete+DkgDlYeTqVgLPeWYLdIwnj4OI7kzb4RchXxw+MxHBozDmBd+IR2oBzpeCNkN8rIS+p4ccgqnMxb6i1giF5xCXl6EvsWQsGu6+kLuGM3BQegcTCJ3Rq4gN3vxf/z270+Qjju6UNBZtGMfSBfrRMiXXYwTe8rPMUQ42AkzQkFKIngPET45EWpUkJIIXkOE7zxesmWKn5SXF8uzt8E30B431EAqrizv7JCHjcNG3p9s3yy7rhBvKM/GOIWPTjWWTnOcnxQGvts7Np7s4xOue0+xGLmVCuCuUMSyoNSgf/A6GGfWJ4fQ//qKZU25gPsEeejITJkRHpgl5QbtKVcJ5UrIVAg/3TY4dzXcGLoyI186ZPjYvIW7+sHPeXYrSkSySxYbxtFT9sh2U3TjRkJG1wTaHZE3oa/kvuXheOdD4Q8d896HSZOZ+JhROET2NPWCEm1pJKTG6l1mhLuM74Jll779nxQ0iMPrUmRC/+PVcYSPkMRaORc6akxjM+bEBtNpRgYpBSuXgrEi2mQlSFd4s8840lf2lp2++cNrg7Q8cd+zjhJOnztKD6dITrtjl/Ax8DHmy6fOg4ryUFI+eHbLbsmmoOvkgxPnqLFm4WLLmCHcnLgU/jsn9nSdHLv7BO9+nKE+0/XwS292L78BGJueWkYnT3cAAAAASUVORK5CYII="},44499:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB3ZI9DoJAEEZn4QJaQucNNITE0tLWI3gC4xHsLD2Ona0F4B6BCryCBeBMgdkM2WWRxcKXwA6zP182PIB/R9AriqILDgf4AaItMPSGwwamRXptVVXVvmmaHCaCzsaMnVCbcRwv67qmm87AMRi2kFLmvtosiuIZBMFLCLEFh+B5xyzLrlT7fLIsy3sYhnMs1+AADDslSXL+fOsWOpJIpmm6UhuebuVYiVpJeF+YNo2RqJWE933Tpm8lUiUZFEgMlYhL0pkHSywl6kjC8cCSPol0knCsb0iYJNJJwun9hyo6iUySjAokuER9kjiDJMLnAQN5AwgPjbeTqmD3AAAAAElFTkSuQmCC"},21652:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7Vg7chs5EAWpT2223FKyVQo8zjYTqU+VMmNvIJ9A4xMslW1G6gSSTrBStKl8Ao8zVenj0Ql2nCielRS49PVrqzF6A2JmSNrlcuCuYhFoNBsPD2igm8b8lK+TlplSVldX7cPDw1Kr1bKPj49dfHeg7uhwDl0GXYp2Mjc39/7o6CgzU8hEAK21ncvLy01MvCFdM5kk+Oydnp4eTvKjsQEuLy/HALZjnlmaSsBsOj8//3pcRmeaDIS1hYWFfwHub3R/oYly6I7QjEjXh+4Tmn+oKsenZIPx33E0+ouLi62Li4vENEi7bnB9fT26urr6gOYGA8NniEle4vuA9NnZ2dne/f39G3LRgV0Mndjus2/0BysrK/+YaQEKuNvb23emzNCuAAOQ7TRNhcFNN4b2UL5Fb57Om9PH0An4Nwo0pWligHxnJgXogxPWxBkm2VIAptvtylm07jeY/D0t5IAAFjYKtCc7QNPZOiaDAAFuwODA2p+IvgO2mZmZsdRNZHLXgT1HqtXFFCI74IGMEYR9Mw5AiVb5geuDgT4mT307TLBE7dK4sCxnklSR/3sFuUvzDGTnGgGKIU286zNHdt3CSbudBMYLHdheCvkA09u0kI7uXDVAZS9ScJk4MBWC8ci1cf7ywHhG7W7IhzCNxXHUxz6LJYDMnkSlC4iQMIMAcB4w+Ui2lZf7yclJYijqb25uNoMA19bWZMJIuzlYeVvl1Dv0eWghYCZz7SoGnWAB29TuBwEC0CtyeFjHnqHnTq+gEbm7u8tC9iFRFp2fDgh4Pt/mGbmldlLncHZ2NiLbrMIsJ5tx3u/iauKgKgB6h/7cfKV4O9AIkK8qPhLMYET2mfn+8r9rMOOzZFAoccD/wpVT5ajEtrRhOzAN0mTjERSFALLx0Iwp6rjRfhKfLHwP5ubHkcw1Cga1hnCH89B/X1mUtdj9Dl/7FXZD8j80NaK3iCWfZYBa4HTVIJHks8qZXOqSiGo3l4fft8FVFuG6GLoJQzYsSLmsayMGCnL4mkkJ7EadMzzqjVcIKrnSa2NqxM8tccmfjwAEI5y1jORwnvAlHIUMsOAO2dQCBGNcUqScWxYA/VRdrpoqh2pbTNrr9V74NlhwRN1agF6SsstjfjZTerRDCaQTL536LWDygsYrA85P8bh0GAHopT6SQFbWChpUT07a7VeBcUvjQYBCALMH2eftHQGozraoa/EXx44JiBdUoXQqcg0c+o/+oNTbXmEWjPQRgMfHxymMtwhIHyCHZnQh52RjeUyPRqTd3K9pBNz19XWppJXCzAQkWNVhJXJQuSgf+EyCFZn0y+GXSOZAQVZsyTQxHngBxxmLkOBvbS1AERRLMTsXJ7hM/9PM20Uyb3NMbU7bizwPi+xjWz944IZ1j0Ljn0eIsh0/DZdJoROnv0r2rTopE14ime1CV/xbgKPQk2xdfUTsRBZdB24sgAqyr9HmX96ZN+m+eXoRWJf7v9OK8XWo3p4KoIi8rWBjwFs5qWj9Iv/v7DXUPGZigE4cUDRt1TMXkESOgjyn4wIz0wJkkeoLYOXALylY2covz6BuY4b220lB/ZRvKZ8B+KKyax+GEToAAAAASUVORK5CYII="}}]);