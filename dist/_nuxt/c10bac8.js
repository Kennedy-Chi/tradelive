(window.webpackJsonp=window.webpackJsonp||[]).push([[57,25,26],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("f80c2f3a",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("53ca1ba4",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(360),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("div",[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"brand-img",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("info@tradinglivelimited.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:"",address:"",phone:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=(n(358),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?e("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),t.company?e("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]):t._e(),t._v(" "),t.address?e("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),t.company?e("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),r.locals={},t.exports=r},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),r.locals={},t.exports=r},420:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("75d704ff",content,!0,{sourceMap:!1})},492:function(t,e,n){"use strict";n(420)},493:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".form-input label{font-size:12px;font-weight:200;opacity:0;transition:all .4s}.form-input label.error{color:#fe3232;opacity:1}",""]),r.locals={},t.exports=r},553:function(t,e,n){"use strict";n.r(e);n(58);var r=n(8),o=n(28),l=(n(49),n(94),n(20),n(13),n(41),n(26),n(350)),c={data:function(){var t;return t={banner:"",username:"",password:"",complete:!0,user:"",showResponse:!1,isError:!1,response:"",onRequest:!1,isChecked:!1},Object(o.a)(t,"isError",!1),Object(o.a)(t,"usernameError",!1),Object(o.a)(t,"passwordError",!1),t},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("username"==input){if(""==data||!data||data.length<2||!/^[a-zA-Z0-9]+$/.test(data))return this.$el.querySelector(".username").classList.add("error"),this.isError=!1,this.usernameError=!0,void(this.onRequest=!1);this.$el.querySelector(".username").classList.remove("error"),this.isError=!0,this.usernameError=!1}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("error"),this.isError=!0,this.passwordError=!0,this.onRequest=!1,!1;this.$el.querySelector(".password").classList.remove("error"),this.isError=!0,this.passwordError=!1}},processUserData:function(){var t=this;if(this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError){var form={username:this.username,password:this.password};this.handleLogin(form)}},handleLogin:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:form});case 3:n=e.sent,"Admin"==n.data.user.status?t.$router.push("/admin"):t.$router.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.callResponse(e.t0.response.data.message,!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getBanner:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Login");case 3:n=e.sent,t.banner=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},setArray:function(){this.checkArray=[{name:"username",data:this.username},{name:"password",data:this.password}]}},mounted:function(){this.getBanner(),this.isAuthenticated&&this.$router.push("/dashboard"),this.loadScript()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeNavigation:n(349).default,HomeFooter:l.default}},d=(n(492),n(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login client-wrapper"},[e("home-navigation"),t._v(" "),e("div",{staticClass:"about-us-section faq",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-section"},[e("h1",{staticClass:"heading-21 faq"},[t._v(t._s(t.banner.bannerTitle))])])]),t._v(" "),e("div",{staticClass:"hero-section-cover"})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"login-section3"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-48"},[e("div",{staticClass:"form-block-3 w-form"},[e("div",{staticClass:"form-3"},[e("div",{staticClass:"form-input"},[e("label",{staticClass:"username",attrs:{for:""}},[t._v("Username must be at least 5 characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Username"},domProps:{value:t.username},on:{blur:function(e){return t.checkErrorInputs("username",t.username)},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"password",attrs:{for:""}},[t._v("Password must be at least 6 characters long")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-field-5 w-input",attrs:{type:"password",maxlength:"256",name:"password",placeholder:"Enter Password"},domProps:{value:t.password},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processUserData.apply(null,arguments)},blur:function(e){return t.checkErrorInputs("password",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("h1",{staticClass:"heading-36"},[t._v("\n              Forgotten password?\n              "),e("nuxt-link",{attrs:{to:"/forgotten-password"}},[t._v("Click here")])],1),t._v(" "),t.showResponse?e("div",[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),t.onRequest?e("input",{staticClass:"submit-button-3 w-button stop",attrs:{type:"button",value:"Processing..."}}):e("input",{staticClass:"submit-button-3 w-button",attrs:{type:"button",value:"Submit"},on:{click:t.processUserData}}),t._v(" "),e("h1",{staticClass:"heading-36"},[t._v("If you don't have an account?")]),t._v(" "),e("nuxt-link",{staticClass:"link-block-8 b w-inline-block",attrs:{to:"/signup"}},[e("h1",{staticClass:"heading-36"},[t._v("Sign up")])])],1)])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-section2 login"},[e("div",{staticClass:"custom-container"},[e("div",[e("div",{staticClass:"div-block-27 faq"},[e("div",{staticClass:"div-block-28"},[e("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-24"},[t._v("Login")])])])]),t._v(" "),e("div",{staticClass:"div-block-29"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,HomeFooter:n(350).default})}}]);