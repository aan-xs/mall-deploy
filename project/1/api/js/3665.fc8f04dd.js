"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[3665],{33665:function(A,i,t){t.r(i),t.d(i,{default:function(){return k}});var e=function(){var A=this,i=A._self._c;return i("div",{staticClass:"CommonProblem",staticStyle:{"min-height":"100vh"}},[i("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:A.$t("语言设置"),"left-arrow":""},on:{"click-left":A.onClickLeft}}),i("div",{staticStyle:{width:"100%",height:"46px"}}),i("div",{staticClass:"language-content"},A._l(A.lang,(function(t,e){return i("div",{key:e,staticClass:"item",on:{click:function(i){return A.handleSetLang(t.key,e)}}},[i("div",{staticClass:"content"},[i("img",{staticClass:"nation",attrs:{src:t.icon,alt:""}}),i("div",{staticClass:"title"},[A._v(A._s(t.title))])]),t.key==A.$i18n.locale?i("img",{staticClass:"check",attrs:{src:A.checkIcon,alt:""}}):A._e()])})),0)],1)},n=[],a=t(63822),l={data(){return{lang:[{title:"English",key:"en",icon:t(75740)},{title:"Deutsch",key:"de",icon:t(55058)},{title:"français",key:"fr",icon:t(65645)},{title:"Русский",key:"ru",icon:t(96781)},{title:"Español",key:"es",icon:t(16795)},{title:"Português",key:"pt",icon:t(94802)},{title:"Italiano",key:"it",icon:t(1370)},{title:"Melayu",key:"ms",icon:t(625)},{title:"Afrikaans",key:"af",icon:t(29711)},{title:"Ελληνικά",key:"el",icon:t(15150)},{title:"繁體中文",key:"tw",icon:t(44012)},{title:"简体中文",key:"cn",icon:t(90876)},{title:"Türkçe",key:"tr",icon:t(47447)},{title:"日本語",key:"ja",icon:t(19130)},{title:"한국어",key:"ko",icon:t(30635)},{title:"ภาษาไทย",key:"th",icon:t(70895)},{title:"Filipino",key:"ph",icon:t(54425)},{title:"عربي",key:"ar",icon:t(76318)},{title:"Tiếng Việt",key:"vi",icon:t(65197)},{title:"हिंदी",key:"hi",icon:t(35406)},{title:"bahasa Indonesia",key:"id",icon:t(55605)}],handicapName:"TikTokMall",checkIcon:t(49105)}},mounted(){"Mbuy"==this.handicapName&&(this.lang=this.lang.filter((A=>"cn"!=A.key&&"tw"!=A.key)))},computed:{...(0,a.Se)({activeLang:"language"})},methods:{...(0,a.OI)(["setLanguage"]),handleSetLang(A,i){this.$i18n.locale=A,this.setLanguage(A),"ar"==A?document.documentElement.setAttribute("dir","rtl"):document.documentElement.setAttribute("dir","ltr"),sessionStorage.removeItem("index_productList"),sessionStorage.removeItem("index_dailyNewArrivalList"),sessionStorage.removeItem("index_recomendedStoreShopList"),sessionStorage.removeItem("index_categoryList"),sessionStorage.removeItem("index_recomendedStoreProductList"),this.$router.go(-1)},onClickLeft(){this.$router.go(-1)}}},o=l,s=t(1001),c=(0,s.Z)(o,e,n,!1,null,"27447ade",null),k=c.exports},49105:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARBAMAAAAmgTH3AAAAJFBMVEUAAAAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQnoSIaGAAAAC3RSTlMAIN+fYJB/MK9AEMHIHb8AAABYSURBVAjXYyAIHKE04+5ACIN590YIo3q3AYShvUmAgQtIs+zeBpQ2ZGAQ2q3AwDB7dyJD9m4HoPTuTY67dwDlhXcDAVhzEZAB0ey0G6gZbH70FphNAUACADLXF72buWliAAAAAElFTkSuQmCC"},90876:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUYSURBVHgBxVhNbBtVEP7mvbUTQ0s2SSWa0lQ2PwIJQZIDXBAikUBwQ5yQONCEA9cUcUBCQgkHkHqB9Mql5FRuVS4IqRKYIxxoeuJSyZs2VRBBwc2v7d19w7xd27Hjv3VI22/1rPXuvJlv5s3Mvl1Cn9hws1mCeZehJhk8LZfc6rAoMuCRDAXOi8zKWNHz0AcoqeCGOz4rBi7K6TT6gBBcFXJLY8U7y0nkexK6656f1tBX5TSL/weJHC/2ItaRUMF13ZR6YgHMl3CSYCz52PkyVywWkZTQhns2G5JzXW5PIrmhPkTJc6Bm2uUXtSMTUOoXSrhEVCWitYYJ+2AVLSG1kFKNf+wy9UMmUjA2CJoQYh/4MGTE+/hIgKxIXy+4WbcjIZszjWSYeyuv/FXGwNc+0h+HSM1IPVlSlCxSYmtyAGahLaF1KevGBLZE0i8NIBitRMQ6YWjiFILfRPkthn/TiBGF/kCXbCU3kIxxd3i80LxUQuhTMbClUL7auTsojsmrZyU6t7k+Fyz/lWQJm5okusA7V1zL1aVsdI7mTQgD53UH9LYPrUSMKR7tfLR+3a5RYZi3CMEZA/8pJ3E+bbgXLtYJgWheZVKgATlPA4E2CJ9R0Lky0i9q+LldmIyozkh+DIpRh2xMomEoHhwFW4HOiIqPDE6viL6dUuSDSfA8kPmzEZWo5yBdCJ42GFkYAE/txxERkZD8mC9rKNKRyd2fUqhclpNNrkYnhl062FyT2nFmQ6hMiIMbQvDnVPV+79ySSOf0J4Mjs2LxHSV9c29FIiLG9ctl+DqM9EdDKofKUlGXU9hdCsAHXDdAdWVRpIH7CsHmKZSvlaALKloCQkNudX1a8Zoi4jdqKh1Oofydwj/zuknMyLH9eYjSD+I9bLS6e6v+PEBaOT3l0BIhTEikKdtMEhh4gaHFW80UJazEDI8/l0YtZGS4l+JqTjkyrHPJiMmcaSuZbbxkE3DwTYnJDmHviwzKX7nQFQeVVwP04BFXlDRFI3kUviILRQFsfPuAKy6we6hQ9J2X6kIG99+XhFwn+KaE0u8hRr/JoDQkybrTWVsUzSlZ+s8kF0cZe99KY/0xJqSSNW+3OZbinV2VrQ998J1Yg1IajvcYtucYzki6qzYjy1z6gxBuSIVta+ze2D/0NCFoffjCv41RiudzlDnNkiYKfr1GjlRZLQKB7U7nZNl8BynZAeCeXLGZWmfVtSkVRZRbNkrUZlKnglWnpcx1gMpr5UjAsT/3JJU3Q9nLhNIJKGoRVD/QcSi7F5cl+hUJQLbiGkeVpm98uNcUhhdOA89Xomu23K2E7V+HHlHPETKtSU+mVSTCUX/iSDpD8g7ytzxStvbhlw/v9Z7fOiRCeZINUjZFYaFVQbLeEUoU5GkGlpcidUvmmDj3ajmlTPLmyBXOqZzdQjLyOCZU9VfddIC+90KHkBitjpU8r6ZhGcdELacilUke653AvFQlFqN1g3Z8b6PZ/S2Zd3a7kGu2yjyHRwRiXqyd1wmNF9fzsne+gocMKYcrT+54yy2ELAI4i0jcBk4EXllhsfFCEyGpuKJm9Z79goGHQEbKfMbaRCdCFvZN0mE984BJrVoytsyP3mhbApZUwDT1IHLK5syBak/GomfjWHezs/ImukB9vF5btCl7jw3Pje16+W7zEncyS0x6w7zMSPRFpE4opLwY+b6xkk6EUA32k57Ykk96mJatS1Y0ZNH8SU/2NJTXNk+Avj/p/QeAaCMuU7Pi1QAAAABJRU5ErkJggg=="},44012:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASESURBVHgBzVhbTFxFGP7m7IWlBXqAAku34MEm2IQgxMYaG5WF1ks00ibGhBcDrTXWB9O++Nz6YEwTk2I0MfEFiSYafMBKLWpTt40EiGjZ2sakCtnFxTZQWnbZpbiXc8Z/9sJl3SvL7dv8e+bMzDnzzX+bmcOQJUzmXsWozz8MxhuhcisYZKqWHwlNYnD6hFvHNScDnFR3heR8tJwxWKYdCy3fdVD3dnrAmqi9lggNTb8JHefxTXZ6ppOkGxlAStehwNxnLbJcdDDGupKRSYNGoviZBjjo2p6uc1JCstwrF1VdPMd0Ohu9SNmWrwf//+yzgSKIkZwjkZENIZn8hBcYbdBCp4RNhTxzYAeUamO4XdwXFGFVIDKnSEbFJJEJIdncr2i6PNIKa2xvs+CxhrwwhRefK4O1qZyKDMdes2DfozJygNCWLRGpFYSEmbgBNhpVEVoYsT/Atz1P41BTKUpkIxSLhHdO7sF7Z+rw628e5AiFpDfefLrlN8ayo+9zNfTCiWO7YMqTMD72AFW7jXh8XyHq63bgoeoCcFXF4Mh9DA7PoqWpGIdaynHN7kWJ6sHx+Qvpo2QlzDRx07vAD7GKxbCPhnWXKFftMuBCz35MTPqxR9mG3ZbtwlKLcLoWcHfah5Li7WhpHYDbraYK+7RQgWZDJG8tTYjGO80QeZnrdhAdb9zAnNdPGlpJRkCpMuHmLR9a236Bx6NSe07RJ8zUFSvrxZ9s6e/QwBWKa7S9UonnD1agttaEfxfEQJx+LC6DMpSVMnzf+wR+sk3h6/N3MDXwDyIKXxU54eQi6XaHCYWgnZTEoKSKHy9PwT0XwFMHilG3tzA8SKJ0HgwAX/Y4cHVoFjduzsOcm5LENDro0i2JMCcyjdFKzHo09F++i5lpjUwWCOsnHqRN6CQjRaEHA4Nz8HhV5MhHwCrSgKTp+JE4pjjeXoO336rG+Pg8vvhqjCq1pXYy69kPruHevQV0nq1HQ70BawUa5YieSWhaNh4KC4wYHrqPvZ87oWoa7ANWfNo9Qc6dTw7sh8e3gGebH8bBl4eRd/pPVFYaaBIa1gIUYQ0SzVhZXunzBfDHLS9CKsOT+3cipEn48BMXSksMUFWOjz6eRJlZj53lBviDlAL+DpKPZZl9koCsYxVOrSRuZiivyEfzSz+TL3Fcsrlx/foMXHeCaH11BJUVRszMBLHGkGkJZ3Iyvt/03RZOEyZ3iaLvr7HIcjHh8pOR/JlvprIilArh0IkMO/r70tolOK4DmTD0r/v63CYWyGnpFihVvWC5B7+bcUY7OZ7MjzYWpHW7pHFcxRYB6XdCxKsdWwRE6IpYp8XC5sAWAJmsRlp2htpUsMhxySlFbzI6M60zOsXfYjrRImZTsDkQmqkRhcVFiLaRR7FJIK2cSdhApDq1yGZjw0SNmiohxJGEEuXoBhJypDrFxkgpouMGkVGQCWK5aR3JjPJsA0iocj18SrwzrZlSIUSngTUyoSO4us85KYmtxuFtmXwXiiHrfVbU9od5ZLZKVGImcAthkaVILNpZf9L7Dy0jxn7ubxg3AAAAAElFTkSuQmCC"},75740:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAr8SURBVHgBrVgLcFTVGf7OuXdfee6aBJIAssEXoUEWBcKrAqOl46uNrVqdqWPsFEZtGajVTsepSn07nYIgUzs+Rp222hlxQGzVtmqCVh3UmhhAQIFsSAIkm30m2Vf23tP/nHvvJgg+mPHu3N27d885/+v7vv/cZTjdY+HjQa7xlmq/e04kkVsudM0PMD8TwBleJGI5hIXGwhx8p2lmt6P9lvDpLM+/6cDSC+5tZUueaGMa764s0zduuX1h68KZ5UEw5gcD6itd2LHhUv/ippoQA2thDBsbqkq6j0dHOkKrdrR+Uzva146Y9+Ty1ltua8trla2ReDZY5StBajQPw9RxLKMjNjiC2jN8GExlcDSaQjhqYjQ9Bo8HyLISvNvVV3s4kmnJT7mi9cjf70puePKJzq8yx77sh2Bonf8PD95wz5pHd6+LJPMQnGFxoxc3X30h1m1+D7FRAyaNu+HiqVgamoZbN7wPg2tgOsPvrv0OAmVu3P7Mp1QDocxwQyC6tQUmKzxKE38fCAQSp7Krn9Kb0MZgVVPdtrcPxELx1Ch8ZSVIp3NIZAxse68HybQJjXMIU+DDQ0kcGciQTR0eupc3Gd7qHAIKBbrHUFkqM5qlaxOCXgxiHQGlJR4/tiIQqAt/0fRJJRNCBMPHY22vfxSZuevTBMpKvLjzxiYKlIwfTGFvzyiqKzz445oL0Xs0gj09afTE8pha5cPG1XOwr3cYHX1J9CZymOFneOyW2dh1YAjDqRxW5d9B/n9dyHzc4U+//W7L9Z07X346i8SXZyi00d+6/rW2gaFsUMhiUoTJUROfHRyA5nLBJKdkkSNJA59SZuAup5IUVEmGhhk+j40hU8gX0XA0BfyncxBZUwN3MfTdcyeVLg/OFVKCtNq2Dj9WzE2MO3Uihpq3bCSGrBOUU054OLPehfCgIdMMmKYafta0Chw6Oky+UixMgzAMzGmsRNfBBI2i77Siv0RDXaAC+wfjisdCcLhh4M1dq6GZ+aJRFbOJR5tT+NVJDvXF860/uHXHMx8fHlTfW5bPwN2tTbhszRs4niuogbf+aCZuuKQBP/zNm4gQqDlh5tfXnYfvNTfgunvbEU1myT7DI6tCCE4rxY0bPiLsjREhTLiEia5QFzlgqnlWAeidrkvnXLCi7prr209w6Nwrn+4eyoigLE0mk4PX60V9Fcdn/Xn4vMBwxkS5V2Da5CrsDUdRX12B/lgak6u98FE2e2JZTK704Fg8g1nnBJBOZBAezuEcwpYsJahUiRdbKKNCQYHZxoVFwnBlZaBB+mEJ4/zNrZ8P5IPJYRN/vuO7uP/nIcRG0tgdzoBTWf523zLKztmI53R0HUnCT4b/etdiXLuslhzI4TA5MbXajX88uAKXL6rH3u4kegjUs+uq8coDl2FxU5WyLpkpnZHXJn0ajNMnsZXxYDyeai1miC3Y0iGYHiLrWDZ7CgajSRwYGFUYkaC48qKp+HjfUfTGhAqBGRwr51fjcLSAz3slTkhnCBsXzalDb8TEoYGErAQ8uo55hK89R0YwMpzFJwvD0Iy8MsuYlAB6kXQokEej7TMee3wFk72pwqV3z2v044P9KYwWxsBowKTKcsybVYN3dvdiOE2RECinVrmxpLEWOz7qJTYRDii6c2q9WHJ+DZ57o0dFywjAC84rw/S6Mmx/P4Ix01Tq42YG/v3+zXCZGSUhnARTQcgCtgPoIN0XLfW1GjavX4np9SVUU4tN553pxQNrL4TfU2YNptmzppdj9U9mkVGdMqLixIwpPsw/u0Kx0AKkwNyZk7EgWI7CmCUJMkBmm5QOcDbOM2HpiwqO3LyKlS/avM10+Vp0t4mRbB4NUwIkYhlEScg8ngpkcnky4Meh/jhyQoPPU4rkSBYLzvIRxkag+1xw6x7Eh/OYP0NDZ08Ogu7pVBJKBi5vnoRXP0kgm8+jo7kbHpGzHCRHuOZSzpkyUxqX5XuWPbP9QMeqh3aGCrr03MDmX8xDLu/Cb5/6AAV4ofM8/nLnUmJWDPe9sEfhqsznwbb7lmL7hwP404t7idYaJleU4vUNl2DNprfw331JxZdpAdoB3L8SP324Hfv6Mhh8/sfwssK47jGb+qoCXLGNNV6zNb6vL+JnukW4Ko+g3hXAMerchukiagjUB9yUqQJiWcqa24NcgdE9L+KUxawxBm+Jj+4Z8IoCNK8bw/kcSumepjEU0llo1H5GKYODz19F/c6AU8CTHAISDIueEg31FfjZZbV4/s0h7O8bUIo7r6GK7p2LR7Z2oUc2TyLcxRfU4epFZ+L+l/ahfyit8HL1kin4/vwG3P3CbhyPjMjc4+aVUzB7Vi3ueHy3cliWRCdF39W0H14zTXCzAE0RUysh7LEx1agl41QvSyaHcXZDCP19VBJpmUb3RykbtOmKpfJKTeUCPf1pjNDCA9EROH35YN8wzigPYyCSVB2fkfVwfAyD7xxEVoLa3gLSxg7Rp7egspAsVkxjqgCq3agxSjObn4pT2vyMaCiBNSZ3OVJJpYISiAl3FhM47L5EpxI4awWNxguzANPlkR1P/qhAKzPFinURcBEi//neL+E3EmobAiVpDNxxxvpM6Fcsqkl4PC6/qqv8VXPqyeyuLCyF5TYbuB2Jxm1VNdU4Tb2E5admzyEJYZquNMdF4/xNq6lkhsUoZjcP7qxDeMukw2xgYPBZxrUbnWZH+yErQqkRppUttbgTL5tAkYlXxTdR1C1nAreNq8xAjK/lzGeOg+bL1HhZJxfFCqg0SuVUki6zJKxrJgVTmHZTlCUV9n3hVBNK2orX7KT58ppL/ZFz5HzHnvou7fN21rZ+fXBS7aRue++lIlAGZemJIUwYxczJwzTshalrm8JySLGF9EWpvCHUFkMiVWZEjhOQVDetiKUVBSFp0MKi5bjA5LV3NygfXqlkbTR2uZPGcTjantvbBWFjZlz4mWIKU0wRxS2FnKM4KMZxyCaU29YcyA5ZnAN0zo6JudyaJ54TCqnCqrR9LcllqK2CRU1VCtOSfSX9apjKJ11bjRX2yYihXNHSToyDGmGVSDOh+qE85ZgCE5sm4grvXtXS7aqpCUo26bqmhEqCUTJC7fDkU4ZmxSJBr4DKLZwIZjnlAFs6L1kobXEuikwdf6LwKPbJTMn5RjIZbnjowYYTHIpE4stJJdusXPIiC2S5TPliDE6gAs4+i9klnrCU/TGxozu+si88KDO7joTFm8rKfM9aZbSPmppAu8nMTZZoWad8qScNWR4KV6ZZp9Nlf2rCwovKpC1jDsuYzXAHUw5WvnhSrJscZ07IkDzi8bj/2NaX2grHBkMyK0IyBxarnOcl6Z9pg1QyiCt6GrbKCEVrh11qcZuVzFZnyUAhJCMN6GUV4em3PTyXBdiXPAbR8ZrfG9SQa5O7t2Intj3RTOvbBM1TdHZ2flyMr8NxQsXs0tpPGypMhGlN+UwWnmj/pH8/Lk1kwwbECgowbDqlEwKYYEwRQ7GQ8sjHoyrqMJtYFgv01ukM1DpP5Uwx+FMdbX74eah5fc3SZWsVHlSfY+pPB9UOZLzcZWGF9lISR8w+uQ0oZrNTXTOLnbGd/9pUeO3V9ROfVr+RQ84RH0q10k7gHsgNOHO0fFwsnYPzU//V5IggTQqTpt1UXu5rx1ccX+tQ0bF4vJUzfS0tHzrV71/hUDtJ2nNlFeNM+lYcmuBY0JdKtWT27F020nMkmI8OBsVo2i8br9BdCeF2J0qbzm8va2z8xF03fbsv4Aufzvr/B7rHqgBWRfVlAAAAAElFTkSuQmCC"}}]);