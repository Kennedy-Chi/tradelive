(window.webpackJsonp=window.webpackJsonp||[]).push([[56,25,26,27],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("03ede850",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("53ca1ba4",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(360),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("div",[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"brand-img",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("info@tradinglivelimited.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:"",address:"",phone:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getCompany()}}),c=(n(358),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?e("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),t.company?e("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]):t._e(),t._v(" "),t.address?e("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),t.company?e("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),r.locals={},t.exports=r},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),r.locals={},t.exports=r},376:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("7829ae84",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n.r(e);n(58);var r=n(8),o=(n(49),{data:function(){return{reviews:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getReviews:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/review/?commented=true");case 3:return r=e.sent,e.next=6,null===(n=r.data)||void 0===n?void 0:n.data;case 6:t.reviews=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getReviews()},computed:{FILE_URL:function(){return this.$store.state.fileURL}}}),c=(n(383),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"company-skills-and-client-testimonial"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"staff-skills"},[t._m(0),t._v(" "),e("div",{staticClass:"div-block-3"},[e("h2",{staticClass:"title-header company-skillb"},[t._v("Client Testimonials")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"slider-2 w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"w-slider-mask"},t._l(t.reviews,(function(n){return e("div",{key:n._id,staticClass:"slide w-slide"},[e("div",{staticClass:"div-block-10"},[e("div",{staticClass:"div-block-11"},[e("h1",{staticClass:"heading-5"},[t._v("\n                    "+t._s(n.comment)+"\n                  ")])]),t._v(" "),e("div",{staticClass:"div-block-12"},[e("div",{staticClass:"div-block-13"},[e("img",{staticClass:"image review",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.profilePicture),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-15"},[e("h1",{staticClass:"heading-6"},[t._v("\n                      "+t._s(n.username)+"\n                      "),e("span",{staticClass:"text-span-2"},[t._v("Cryptobit Investor")])]),t._v(" "),e("div",{staticClass:"div-block-14"},[e("span",[t._v(t._s(n.rating))]),t._v(" "),e("img",{staticClass:"image-2",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645c12b2516edcf87d2a2876_star-symbol-icon.svg",loading:"lazy",alt:""}})])])])])])})),0),t._v(" "),e("div",{staticClass:"w-slider-arrow-left"}),t._v(" "),e("div",{staticClass:"w-slider-arrow-right"}),t._v(" "),e("div",{staticClass:"w-slider-nav w-round w-num"})])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-2"},[e("h2",{staticClass:"title-header company-skilla"},[t._v("Company's Progress")]),t._v(" "),e("h1",{staticClass:"heading-3"},[t._v("\n          Our long years of success has also been based on our distribution of\n          labour across our work force. While our overall goal per year has\n          been splitted into units we are hoping to reach 100% completion of\n          our yearly goal, yet our current stats is below.\n        ")]),t._v(" "),e("div",{staticClass:"div-block-4"},[e("div",{staticClass:"line company-skills"})]),t._v(" "),e("div",{staticClass:"div-block-5"},[e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Crypto Mining")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("95%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9"})])]),t._v(" "),e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Cloud Hosting")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("78%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9 _2"})])]),t._v(" "),e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Secured Exchange")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("60%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9 _3"})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-4 _2"},[t("div",{staticClass:"line company-skills"})])}],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n(376)},384:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".slider-2.w-slider{height:auto}",""]),r.locals={},t.exports=r},444:function(t,e,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("5626edac",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";n(444)},541:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".each-get-started .get-started-body{transition:all .4s}.each-get-started.active .get-started-body{opacity:1;z-index:2}.div-block-5 .div-block-6{width:100%}.image.review{-o-object-fit:cover;object-fit:cover}.mask.w-slider-mask{min-height:70vh}",""]),r.locals={},t.exports=r},582:function(t,e,n){"use strict";n.r(e);n(58),n(26);var r,o=n(28),c=n(8),l=(n(49),n(13),n(41),n(350)),d=n(349),v=n(381),m={data:function(){return{banners:[],first:!1,second:!1,third:!1,staffs:[],reviews:[],companyBlogs:[],firstBlog:"",twoBlogs:[],news:[]}},methods:(r={loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},loadCoin:function(){var t=document.getElementById("bitcoin");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/bitcoin.js",script.async=!0,script.id="bitcoin";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getTwoBlogs:function(data){for(var t=[],i=0;i<3;i++)t.push(data[i]);return t},getCompanyBlogs:function(data){var t=[];return data.forEach((function(e){"Crypto"!=e.category&&t.push(e)})),t},getNews:function(data){var t=[];return data.forEach((function(e){"Crypto"==e.category&&t.push(e)})),t},getStaffs:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/staffs");case 3:n=e.sent,t.staffs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBlogs:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/blog");case 3:n=e.sent,t.companyBlogs=t.getCompanyBlogs(n.data.data),t.firstBlog=n.data.data[0],t.secondBlog=n.data.data[1],t.twoBlogs=t.getTwoBlogs(n.data.data),t.news=t.getNews(n.data.data),t.blogs=n.data.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getBanner:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Home");case 3:n=e.sent,t.banners=n.data.data,t.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.time=t.company.dayStarted,t.startClock(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},Object(o.a)(r,"getStaffs",(function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/staffs");case 3:n=e.sent,t.staffs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),Object(o.a)(r,"getPartners",(function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/partners");case 3:n=e.sent,t.partners=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),Object(o.a)(r,"getEvents",(function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/events");case 3:n=e.sent,t.events=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),r),mounted:function(){this.getBanner(),this.getBlogs(),this.loadCoin(),this.getStaffs()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeNavigation:d.default,HomeFooter:l.default,Testimony:v.default}},h=(n(540),n(57)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page client-wrapper"},[e("home-navigation"),t._v(" "),e("div",{staticClass:"home-slider w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"mask w-slider-mask"},t._l(t.banners,(function(n){return e("div",{key:n._id,staticClass:"slider w-slide",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(n.bannerImage,")"),backgroundSize:"cover"}},[e("div",{staticClass:"hero-cover"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-flex"},[e("div",{staticClass:"hero-container"},[e("h1",{staticClass:"main-heading"},[t._v("\n                  "+t._s(n.bannerTitle)+"\n                ")]),t._v(" "),e("div",{staticClass:"colored-hero-text"},[t._v("\n                  "+t._s(n.bannerSubtitle)+"\n                ")]),t._v(" "),e("nuxt-link",{staticClass:"hero-button w-button",attrs:{to:"/about"}},[t._v("READ MORE")])],1)])])])])})),0),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"slide-nav w-slider-nav w-round"})]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"get-started-section"},[e("div",{staticClass:"custom-container"},[e("h2",{staticClass:"title-header"},[t._v("What We Offer")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"why-us-text"},[t._v("\n        Trade Live Limited Offers services more than just depositing funds and\n        withdrawing capital, our services provides privacy & security to your\n        data, bonus incentives for your referral efforts and good customer\n        support to your needs.\n      ")]),t._v(" "),e("div",{staticClass:"get-started-flex"},[e("div",{staticClass:"each-get-started second",class:{active:t.second},on:{mouseenter:function(e){t.second=!0},mouseleave:function(e){t.second=!1}}},[t._m(3),t._v(" "),e("div",{staticClass:"board-title white"},[t._v("Easy Deposit")]),t._v(" "),t._m(4)]),t._v(" "),e("div",{staticClass:"each-get-started",class:{active:t.first},on:{mouseenter:function(e){t.first=!0},mouseleave:function(e){t.first=!1}}},[t._m(5),t._v(" "),e("div",{staticClass:"board-title white"},[t._v("Financial Growth")]),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"each-get-started",class:{active:t.third},style:{backgroundImage:"url(/images/bit03.jpg)"},on:{mouseenter:function(e){t.third=!0},mouseleave:function(e){t.third=!1}}},[t._m(7),t._v(" "),e("div",{staticClass:"board-title white"},[t._v("Bitcoin Transaction")]),t._v(" "),t._m(8)])])])]),t._v(" "),e("div",{staticClass:"brief-services"},[e("div",{staticClass:"custom-container"},t._l(t.companyBlogs,(function(n,r){return e("div",{key:n._id,staticClass:"each-service-flex",class:{reverse:r%2==0}},[e("div",{staticClass:"each-flex-img"},[e("img",{staticClass:"service-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.banner),loading:"lazy",sizes:"(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1279px) 47vw, (max-width: 1439px) 43vw, 49vw",srcset:"\n              ".concat(t.FILE_URL,"/").concat(n.banner," 500w,\n              ").concat(t.FILE_URL,"/").concat(n.banner,"      585w\n            "),alt:""}})]),t._v(" "),e("div",{staticClass:"each-service-content",class:{reverse:r%2==0}},[e("h2",{staticClass:"title-header left"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"line left"}),t._v(" "),n.content?e("div",{staticClass:"text-custom",domProps:{innerHTML:t._s("".concat(n.content.substring(0,300),"..."))}}):t._e(),t._v(" "),e("nuxt-link",{staticClass:"hero-button w-button",attrs:{to:"/news-details/".concat(n._id)}},[t._v("Read More")])],1)])})),0)]),t._v(" "),e("div",{staticClass:"staffs"},[e("div",{staticClass:"custom-container"},[e("h2",{staticClass:"title-header"},[t._v("Our Members")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"why-us-text"},[t._v("\n        We are happy to present you our the Executive Staff Members of Trade\n        Live Limited, the engines behind our platform's daily profits.\n      ")]),t._v(" "),e("div",{staticClass:"staff-flex"},t._l(t.staffs,(function(n){return e("div",{key:n._id,staticClass:"each-staff-wrapper"},[e("div",{staticClass:"each-staff-img",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(n.image,")")}}),t._v(" "),e("h1",{staticClass:"heading"},[t._v(t._s(n.name))]),t._v(" "),e("h1",{staticClass:"heading"},[t._v(t._s(n.position))]),t._v(" "),e("h1",{staticClass:"heading-2"},[t._v("\n            "+t._s(n.quote)+"\n          ")])])})),0)])]),t._v(" "),e("testimony"),t._v(" "),e("div",{staticClass:"our-news"},[e("div",{staticClass:"custom-container"},[e("div",[e("h2",{staticClass:"title-header our-news"},[t._v("Our News")]),t._v(" "),e("h1",{staticClass:"heading-7"},[t._v("\n          Get the latest updates about the trends in the global market and\n          explore to make profitable investment decisions.\n        ")]),t._v(" "),e("div",{staticClass:"line our-news"}),t._v(" "),e("div",{staticClass:"div-block-16"},t._l(t.news,(function(n,r){return e("div",{key:r,staticClass:"div-block-17"},[n?e("nuxt-link",{staticClass:"link-block w-inline-block",attrs:{to:"/news-details/".concat(n._id)}},[e("img",{staticClass:"image-3",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.banner),loading:"lazy",sizes:"(max-width: 479px) 96vw, (max-width: 767px) 45vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, (max-width: 1439px) 28vw, 31vw",srcset:"\n                  ".concat(t.FILE_URL,"/").concat(n.banner,"  500w,\n                  ").concat(t.FILE_URL,"/").concat(n.banner,"  800w,\n                  ").concat(t.FILE_URL,"/").concat(n.banner,"       1170w\n                "),alt:""}})]):t._e(),t._v(" "),e("div",{staticClass:"div-block-18"},[n?e("nuxt-link",{staticClass:"link-block-2 w-inline-block",attrs:{to:"/news-details/".concat(n._id)}},[e("h1",{staticClass:"heading-8"},[t._v("\n                  "+t._s(n.title)+"\n                ")])]):t._e(),t._v(" "),n?e("div",{staticClass:"heading-9",domProps:{innerHTML:t._s(n.content.substring(0,150))}}):t._e()],1)],1)})),0)])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"nav-arrow w-slider-arrow-left"},[t("div",{staticClass:"nav-arrow-icon w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"nav-arrow w-slider-arrow-right"},[t("div",{staticClass:"nav-left-icon w-icon-slider-right"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"video-section"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"video-flex"},[e("div",{staticClass:"video-top-board"},[e("h2",{staticClass:"board-heading"},[t._v("\n            Invest now in\n            "),e("span",{staticClass:"text-span"},[t._v("bitcoin")]),t._v(" currency"),e("br"),t._v("and earn more\n            later.\n          ")]),t._v(" "),e("div",{staticClass:"each-board-wrapper"},[e("div",{staticClass:"each-board-container"},[e("img",{attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458d4d5c2dd95017d34228d_server-lock-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"board-title"},[t._v("Safe & Secure"),e("br")]),t._v(" "),e("div",[t._v("\n                Trade Live Limited prioritizes the security of its clients'\n                funds. We have implemented robust security measures, including\n                advanced encryption protocols and multi-factor authentication,\n                to safeguard your cryptocurrencies against potential threats.\n              ")])]),t._v(" "),e("div",{staticClass:"each-board-container"},[e("img",{attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458d4d58291486186b7b989_crypto-exchange-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"board-title"},[t._v("Instant Exchange"),e("br")]),t._v(" "),e("div",[t._v("\n                Instant exchange allows for immediate and real-time\n                transactions within the blockchain network. Traditional\n                financial systems often involve delays, intermediaries, and\n                settlement periods, whereas instant exchanges leverage the\n                decentralized nature of blockchain technology to enable\n                instant value transfer.\n              ")])])])]),t._v(" "),e("div",{staticClass:"why-us"},[e("h2",{staticClass:"title-header"},[t._v("Why Choose Us?")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"why-us-text"},[t._v("\n            We understand that investors seek profitable returns on their\n            investments. At Trade Live Limited, we strive to offer attractive\n            interest rates to our clients, ensuring that their investments\n            grow over time. Our team of experienced financial experts\n            carefully analyzes market trends to make informed investment\n            decisions, maximizing the potential returns for our clients.\n          ")]),t._v(" "),e("img",{staticClass:"why-us-img",attrs:{src:"/images/building.webp",loading:"lazy",sizes:"(max-width: 479px) 96vw, (max-width: 767px) 94vw, 638.9931030273438px",srcset:"/images/building.webp 500w, /images/building.webp 639w",alt:""}})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"rounded-holder"},[t("img",{staticClass:"rounded-icon",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458e105c2dd95555b351ea1_wallet.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"get-started-body"},[e("div",{staticClass:"board-title white"},[t._v("Easy Deposit")]),t._v(" "),e("div",{staticClass:"custom-text white"},[t._v("\n              With our multiple payment systems and an automatic scan code\n              generator, you can deposit with ease in your dashboard to fund\n              your account.\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"rounded-holder"},[t("img",{staticClass:"rounded-icon",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458df162bbaac80e39a9bb8_investment.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"get-started-body"},[e("div",{staticClass:"board-title white"},[t._v("Financial Growth")]),t._v(" "),e("div",{staticClass:"custom-text white"},[t._v("\n              Our fidelity to our client can be seen after 24 hours of your\n              investment which you will see steady daily growth of your\n              capital for your investment duration.\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"rounded-holder"},[t("img",{staticClass:"rounded-icon",attrs:{src:"/images/grow.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"get-started-body"},[e("div",{staticClass:"board-title white"},[t._v("Bitcoin Transaction")]),t._v(" "),e("div",{staticClass:"custom-text white"},[t._v("\n              Successful businesses have many things in common, today we’ll\n              look at the big ‘R’of recognitional advertising network may\n              help."),e("br")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,Testimony:n(381).default,HomeFooter:n(350).default})}}]);