(window.webpackJsonp=window.webpackJsonp||[]).push([[64,25,26],{344:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("f80c2f3a",content,!0,{sourceMap:!1})},345:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("079c1cd3",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(49),{methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(r(360),r(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("div",[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"brand-img",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("support@cryptobitlimited.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(49),{data:function(){return{company:"",address:"",phone:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var r=document.querySelector("#footer");r?r.appendChild(e):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,t.address=r.data.data.media[0],t.phone=r.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=(r(358),r(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?e("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),t.company?e("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]):t._e(),t._v(" "),t.address?e("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),t.company?e("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,r){"use strict";r(344)},359:function(t,e,r){var n=r(150)((function(i){return i[1]}));n.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),n.locals={},t.exports=n},360:function(t,e,r){"use strict";r(345)},361:function(t,e,r){var n=r(150)((function(i){return i[1]}));n.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),n.locals={},t.exports=n},425:function(t,e,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("97cf5944",content,!0,{sourceMap:!1})},502:function(t,e,r){"use strict";r(425)},503:function(t,e,r){var n=r(150)((function(i){return i[1]}));n.push([t.i,".fileInput{height:.1px;opacity:0;overflow:hidden;width:.1px;z-index:-1}.form-input label{font-size:12px;font-weight:200;opacity:0;transition:all .4s}.form-input label.error{color:#fe3232;opacity:1}.div-block-46.active .dot{background:#ffb426;height:10px;width:10px}.div-block-46{align-items:center;cursor:pointer;display:flex;justify-content:center}a.terms{color:#ffb426;font-weight:700}.sign-label.response{background:transparent;width:100%}.sign-label.bottom{width:100%}.box-line{cursor:pointer}",""]),n.locals={},t.exports=n},558:function(t,e,r){"use strict";r.r(e);r(58);var n=r(8),o=r(16),l=(r(49),r(20),r(94),r(13),r(30),r(31),r(424),r(240),r(41),r(26),r(350)),c=r(349),d={data:function(){return{banner:"",response:"",isError:!1,showResponse:!1,onRequest:!1,countryFlag:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645c2c8b29453fbe1844d43f_flag.svg",documents:["Drivers Licence","National ID","International Passport"],firstName:"",lastName:"",username:"",email:"",phoneNumber:"",country:"Select Country",documentName:"Select Document",documentFile:"",profilePicture:"",avatar:"",passport:"",password:"",cPassword:"",isChecked:!1,referral:"",showCountryList:!1,showDocumentList:!1,firstNameError:!1,lastNameError:!1,usernameError:!1,emailError:!1,phoneNumberError:!1,countryError:!1,documentError:!1,passportError:!1,passwordError:!1,cPasswordError:!1,signup:""}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},checkErrorInputs:function(input,data){if("firstName"==input){if(""==data||!data||data.length<2||!/^[a-zA-Z0-9]+$/.test(data))return this.$el.querySelector(".firstName").classList.add("error"),this.isError=!1,this.firstNameError=!0,void(this.onRequest=!1);this.$el.querySelector(".firstName").classList.remove("error"),this.isError=!0,this.firstNameError=!1}else if("lastName"==input){if(""==data||!data||data.length<2||!/^[a-zA-Z0-9]+$/.test(data))return this.$el.querySelector(".lastName").classList.add("error"),this.isError=!1,this.lastNameError=!0,void(this.onRequest=!1);this.$el.querySelector(".lastName").classList.remove("error"),this.isError=!0,this.lastNameError=!1}else if("username"==input){if(!data||data.length<2||!/^\w+$/.test(data))return this.$el.querySelector(".username").classList.add("error"),this.isError=!1,this.usernameError=!0,void(this.onRequest=!1);this.$el.querySelector(".username").classList.remove("error"),this.isError=!0,this.usernameError=!1}else if("phoneNumber"==input){if(""==data||!data||!/^[0-9+]+$/.test(data))return this.$el.querySelector(".phoneNumber").classList.add("error"),this.isError=!1,this.phoneNumberError=!0,void(this.onRequest=!1);this.$el.querySelector(".phoneNumber").classList.remove("error"),this.isError=!0,this.phoneNumberError=!1}else if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("error"),this.isError=!0,this.passwordError=!0,this.onRequest=!1,!1;this.$el.querySelector(".password").classList.remove("error"),this.isError=!0,this.passwordError=!1}else if("cPassword"==input){if(data!=this.password||""==data)return this.$el.querySelector(".cPassword").classList.add("error"),this.isError=!1,this.cPasswordError=!0,void(this.onRequest=!1);this.$el.querySelector(".cPassword").classList.remove("error"),this.isError=!0,this.cPasswordError=!1}},callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},clearInputs:function(){this.firstName="",this.lastName="",this.username="",this.phoneNumber="",this.email="",this.password="",this.cPassword="",this.isChecked=!1},selectDocumentFile:function(t){this.documentFile=t.target.files[0]},setProfile:function(t){var e=Object(o.a)(passport.files,1)[0];this.profilePicture=e,this.avatar=URL.createObjectURL(e)},setArray:function(){this.checkArray=[{name:"firstName",data:this.firstName},{name:"lastName",data:this.lastName},{name:"username",data:this.username},{name:"email",data:this.email},{name:"phoneNumber",data:this.phoneNumber},{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},selectCountry:function(data){this.country=data.country,this.countryFlag=data.flagUrl,this.showCountryList=!1},selectDocumentName:function(data){this.documentName=data,this.showDocumentList=!1},getBanner:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Signup");case 3:r=e.sent,t.banner=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getSignupSettings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/signup");case 3:r=e.sent,t.signup=r.data.data,t.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.callResponse(e.t0.response.data.message,!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},processUserData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var form,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.onRequest=!0,t.setArray(),t.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),t.isError){e.next=5;break}return e.abrupt("return");case 5:if(t.isChecked){e.next=9;break}return t.onRequest=!1,t.callResponse("Please read and accept the terms and conditions to continue",!0),e.abrupt("return");case 9:return(form=new FormData).append("firstName",t.firstName),form.append("lastName",t.lastName),form.append("username",t.username),form.append("email",t.email),form.append("phoneNumber",t.phoneNumber),form.append("documentName",t.documentName),form.append("documentFile",t.documentFile),form.append("profilePicture",t.profilePicture),form.append("country",t.country),form.append("countryFlag",t.countryFlag),form.append("regDate",(new Date).getTime()),form.append("referredBy",t.referral),form.append("totalAmount",0),form.append("password",t.password),form.append("cPassword",t.cPassword),e.prev=25,e.next=28,t.$axios.post("/users/signup",form);case 28:r=e.sent,t.onRequest=!1,n=r.data.message,t.callResponse(n,!1),t.clearInputs(),e.next=38;break;case 35:e.prev=35,e.t0=e.catch(25),t.callResponse(e.t0.response.data.message,!0);case 38:case"end":return e.stop()}}),e,null,[[25,35]])})))()}},mounted:function(){this.getSignupSettings(),this.getBanner(),this.$route.query.username&&(this.referral=this.$route.query.username)},computed:{countries:function(){return this.$store.state.registrationDetails.countries},FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeFooter:l.default,HomeNavigation:c.default}},m=(r(502),r(57)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"create-account client-wrapper"},[e("home-navigation"),t._v(" "),e("div",{staticClass:"about-us-section faq",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-section"},[e("h1",{staticClass:"heading-21 faq"},[t._v(t._s(t.banner.bannerTitle))])])]),t._v(" "),e("div",{staticClass:"hero-section-cover"})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"login-section3 create-account"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-48"},[e("div",{staticClass:"form-block-3 w-form"},[e("div",{staticClass:"form-3"},[e("div",{staticClass:"form-input"},[e("label",{staticClass:"firstName",attrs:{for:""}},[t._v("First name must be at least 2 characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter First Name"},domProps:{value:t.firstName},on:{blur:function(e){return t.checkErrorInputs("firstName",t.firstName)},input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"lastName",attrs:{for:""}},[t._v("Last name must be at least 2 characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Last Name"},domProps:{value:t.lastName},on:{blur:function(e){return t.checkErrorInputs("lastName",t.lastName)},input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"username",attrs:{for:""}},[t._v("Username must be a word of at least 5 characters long")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Username"},domProps:{value:t.username},on:{blur:function(e){return t.checkErrorInputs("username",t.username)},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"email",attrs:{for:""}},[t._v("Please enter a valid email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field-5 w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email 4",placeholder:"Enter Email"},domProps:{value:t.email},on:{blur:function(e){return t.checkErrorInputs("email",t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"phoneNumber",attrs:{for:""}},[t._v("Please enter a valid phone number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"text-field-5 w-input",attrs:{type:"tel",maxlength:"256",name:"phone",placeholder:"Enter Phone Number"},domProps:{value:t.phoneNumber},on:{blur:function(e){return t.checkErrorInputs("phoneNumber",t.phoneNumber)},input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"password",attrs:{for:""}},[t._v("Password must be at least 6 characters long")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-field-5 w-input",attrs:{type:"password",maxlength:"256",name:"password",placeholder:"Enter Password"},domProps:{value:t.password},on:{blur:function(e){return t.checkErrorInputs("password",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",{staticClass:"cPassword",attrs:{for:""}},[t._v("Password do not match")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"text-field-5 w-input",attrs:{type:"password",maxlength:"256",name:"password","data-name":"Confirm Password",placeholder:"Password"},domProps:{value:t.cPassword},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processUserData.apply(null,arguments)},blur:function(e){return t.checkErrorInputs("cPassword",t.cPassword)},input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"div-block-47"},[e("div",{staticClass:"div-block-46",class:{active:t.isChecked},on:{click:function(e){t.isChecked=!t.isChecked}}},[e("div",{staticClass:"dot"})]),t._v(" "),e("span",{staticClass:"link-block-7 w-inline-block"},[e("h1",{staticClass:"heading-35"},[t._v("\n                  By signing in you have agreed to our\n                  "),e("nuxt-link",{staticClass:"terms",attrs:{to:"/terms-conditions"}},[t._v("Terms and Conditions.")])],1)])]),t._v(" "),t.showResponse?e("div",[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),t.onRequest?e("input",{staticClass:"submit-button-3 w-button stop",attrs:{type:"button",value:"Processing..."}}):e("input",{staticClass:"submit-button-3 w-button",attrs:{type:"button",value:"Submit"},on:{click:t.processUserData}}),t._v(" "),e("h1",{staticClass:"heading-36"},[t._v("Already have an account?")]),t._v(" "),e("nuxt-link",{staticClass:"link-block-8 b w-inline-block",attrs:{to:"/login"}},[e("h1",{staticClass:"heading-36"},[t._v("Sign in")])])],1)])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-section2 create-account"},[e("div",{staticClass:"custom-container"},[e("div",[e("div",{staticClass:"div-block-27 faq"},[e("div",{staticClass:"div-block-28"},[e("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-24"},[t._v("Create an account")])])])]),t._v(" "),e("div",{staticClass:"div-block-29"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:r(349).default,HomeFooter:r(350).default})}}]);