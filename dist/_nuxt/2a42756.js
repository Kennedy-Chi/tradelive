(window.webpackJsonp=window.webpackJsonp||[]).push([[59,21,25,26],{344:function(t,n,e){var content=e(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("073be26d",content,!0,{sourceMap:!1})},345:function(t,n,e){var content=e(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("45a7f63c",content,!0,{sourceMap:!1})},349:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(49),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(e(360),e(57)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"nav-flex"},[n("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[n("img",{staticClass:"brand-img",attrs:{src:"/Cryptobit-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?n("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):n("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"top-header"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"top-header-flex"},[n("div",{staticClass:"top-header-right"},[n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("support@cryptobitlimited.com")])]),t._v(" "),n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},350:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(49),{data:function(){return{company:"",address:"",phone:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/company");case 3:return e=n.sent,n.next=6,e.data.data;case 6:t.company=n.sent,t.address=e.data.data.media[0],t.phone=e.data.data.media[2],n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.response.data);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=(e(358),e(57)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"footer1",attrs:{id:"footer"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"div-block-25"},[n("div",{staticClass:"div-block-20"},[n("div",{staticClass:"div-block-19"},[n("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),n("div",{staticClass:"div-block-21"},[n("div",{staticClass:"link-block-3 w-inline-block"},[n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),n("div",{staticClass:"link-block-3 w-inline-block"},[n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),n("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"div-block-23"},[n("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?n("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),n("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),n("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),n("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]),t._v(" "),t.address?n("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),n("div",{staticClass:"footer-line"}),t._v(" "),n("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-22"},[n("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),n("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),n("div",{staticClass:"form-block w-form"},[n("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[n("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),n("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),n("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,n=t._self._c;return n("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),n("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,n=t._self._c;return n("h1",{staticClass:"heading-16"},[t._v("\n              Email "),n("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);n.default=component.exports},358:function(t,n,e){"use strict";e(344)},359:function(t,n,e){var l=e(150)((function(i){return i[1]}));l.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),l.locals={},t.exports=l},360:function(t,n,e){"use strict";e(345)},361:function(t,n,e){var l=e(150)((function(i){return i[1]}));l.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),l.locals={},t.exports=l},379:function(t,n,e){"use strict";e.r(n);var l={},o=e(57),component=Object(o.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-51"},[n("div",{staticClass:"div-block-53"},[n("h1",{staticClass:"heading-38"},[t._v("RECENT POSTS")]),t._v(" "),n("div",{staticClass:"div-block-52"}),t._v(" "),n("div",[n("a",{staticClass:"link-block-10 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-40"},[t._v("Why to invest in Bitcoin?")])]),t._v(" "),n("h1",{staticClass:"heading-41"},[t._v("14 January 2018")]),t._v(" "),n("div",{staticClass:"div-block-52"})]),t._v(" "),n("div",[n("a",{staticClass:"link-block-10 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-40"},[t._v("How do Bitcoin transactions work?")])]),t._v(" "),n("h1",{staticClass:"heading-41"},[t._v("14 January 2018")]),t._v(" "),n("div",{staticClass:"div-block-52"})]),t._v(" "),n("div",[n("a",{staticClass:"link-block-10 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-40"},[t._v("Bitcoin transaction fees")])]),t._v(" "),n("h1",{staticClass:"heading-41"},[t._v("14 January 2018")]),t._v(" "),n("div",{staticClass:"div-block-52"})]),t._v(" "),n("div",[n("a",{staticClass:"link-block-10 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-40"},[t._v("3 things to know about Bitcoin")])]),t._v(" "),n("h1",{staticClass:"heading-41"},[t._v("14 January 2018")]),t._v(" "),n("div",{staticClass:"div-block-52"})]),t._v(" "),n("div",[n("a",{staticClass:"link-block-10 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-40"},[t._v("\n          Why Bitcoin transaction taking so long?\n        ")])]),t._v(" "),n("h1",{staticClass:"heading-41"},[t._v("14 January 2018")]),t._v(" "),n("div",{staticClass:"div-block-52"})])]),t._v(" "),n("div",{staticClass:"div-block-53 b"},[n("h1",{staticClass:"heading-38"},[t._v("TAGS")]),t._v(" "),n("div",{staticClass:"div-block-52"}),t._v(" "),n("div",{staticClass:"div-block-56"},[n("a",{staticClass:"link-block-13 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-45"},[t._v("Bitcoin")])]),n("a",{staticClass:"link-block-13 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-45"},[t._v("Currency")])]),n("a",{staticClass:"link-block-13 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-45"},[t._v("Coin")])]),n("a",{staticClass:"link-block-13 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-45"},[t._v("Money")])]),n("a",{staticClass:"link-block-13 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-45"},[t._v("Insurance")])])])])])}],!1,null,null,null);n.default=component.exports},577:function(t,n,e){"use strict";e.r(n);e(58);var l=e(8),o=(e(49),e(379)),c=e(350),r=e(349),v={data:function(){return{blog:""}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var n=document.querySelector("#footer");n?n.appendChild(script):console.error("Could not find app node to append script element")},getBlog:function(t){var n=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$axios.get("/blog/".concat(t));case 3:l=e.sent,n.blog=l.data.data,n.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getBlog(this.$route.params.id)},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeFooter:c.default,HomeNavigation:r.default,AsideNews:o.default}},d=e(57),component=Object(d.a)(v,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"blog full-blog"},[n("home-navigation"),t._v(" "),n("div",{staticClass:"about-us-section faq",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.blog.banner,")")}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"hero-section"},[n("h1",{staticClass:"heading-21 faq"},[t._v(t._s(t.blog.title))])])]),t._v(" "),n("div",{staticClass:"hero-section-cover"})]),t._v(" "),n("div",{staticClass:"about-us-section2"},[n("div",{staticClass:"custom-container"},[n("div",[n("div",{staticClass:"div-block-27"},[t._m(0),t._v(" "),n("nuxt-link",{staticClass:"link-block-5 w-inline-block",attrs:{to:"/"}},[n("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),n("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),n("h1",{staticClass:"heading-24"},[t._v("Blog Details")])],1)])]),t._v(" "),n("div",{staticClass:"div-block-29"})]),t._v(" "),n("div",{staticClass:"blog-section3"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"div-block-49"},[n("div",{staticClass:"div-block-50"},[n("img",{staticClass:"image-7",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.blog.banner),loading:"lazy",alt:""}}),t._v(" "),n("div",[n("h1",{staticClass:"heading-42"},[t._v(t._s(t.blog.title))]),t._v(" "),n("div",{staticClass:"heading-43",domProps:{innerHTML:t._s(t.blog.content)}})])]),t._v(" "),n("aside-news")],1)])]),t._v(" "),n("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-28"},[t("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeNavigation:e(349).default,AsideNews:e(379).default,HomeFooter:e(350).default})}}]);