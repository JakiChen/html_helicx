(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{312:function(t,e,o){"use strict";var n=o(29),l=o(30),r=function(){function t(e){Object(n.a)(this,t),this.opts=e||{},this.elem=0===document.querySelectorAll(this.opts.elem).length?document.querySelectorAll(".js-helix-wave"):document.querySelectorAll(this.opts.elem),this.resolution=this.opts.resolution||window.devicePixelRatio>1?this.resolution=2:this.resolution=1,this.colors=this.opts.colors||["#7C4DFF","#448AFF","#1DE9B6"],this.diff=this.opts.diff||1,this.amplitude=this.opts.amplitude*this.resolution||5*this.resolution,this.frequency=this.opts.frequency*this.resolution||10*this.resolution,this.wavelength=this.opts.wavelength*this.resolution||40*this.resolution,this.lineWidth=this.opts.lineWidth*this.resolution||1*this.resolution,this.lineInterval=this.opts.lineInterval*this.resolution||20*this.resolution,this.lineShift=this.opts.lineShift*this.resolution||0,this.colors.reverse(),this.frames=0,this.helixes=[],this.canvases=[],this.ctxs=[],this.init()}return Object(l.a)(t,[{key:"init",value:function(){this.initObserver(),this.handleEvents(),this.createCanvas(),this.updateCanvas()}},{key:"initObserver",value:function(){this.observer=new IntersectionObserver(this.observer.bind(this),this.inViewOptions);for(var i=0;this.elem.length>i;i++){var t=this.elem[i];this.observer.observe(t)}}},{key:"observer",value:function(t){for(var i=0;t.length>i;i++){var e=t[i],o=e.target;switch(e.isIntersecting){case!0:o.isInView=!0;break;case!1:o.isInView=!1}}}},{key:"destroyObserver",value:function(){if(this.observer){for(var i=0;this.elem.length>i;i++){var t=this.elem[i];this.observer.disconnect(t)}this.observer=null}}},{key:"createCanvas",value:function(){for(var i=0;i<this.elem.length;i++){var t=this.elem[i],canvas=document.createElement("canvas"),e=canvas.getContext("2d");this.canvases.push(canvas),this.ctxs.push(e),t.appendChild(canvas),e.clearRect(0,0,canvas.width,canvas.height)}}},{key:"updateCanvas",value:function(){for(var i=0;i<this.elem.length;i++){var t=this.elem[i],canvas=this.canvases[i],e=this.ctxs[i];2===this.resolution&&e.scale(.5,.5),canvas.width=t.clientWidth*this.resolution,canvas.height=t.clientHeight*this.resolution,canvas.setAttribute("style","display: block; width: ".concat(canvas.width/this.resolution,"px; height: ").concat(canvas.height/this.resolution,"px;")),canvas.classList.add("helix-wave-".concat(i+1));var o=canvas.width/2*this.diff,n=.5*canvas.width,l=.5*canvas.height;canvas.diffX=o,canvas.posX=n,canvas.posY=l,e.fillRect(0,0,canvas.width,canvas.height),e.moveTo(n,l)}}},{key:"destroyCanvas",value:function(){for(var i=0;i<this.elem.length;i++){var t=this.elem[i],canvas=this.canvases[i];this.ctxs[i].clearRect(0,0,canvas.width,canvas.height),t.removeChild(canvas),this.elem.length===i&&(this.elem=null,this.canvases=null,this.ctxs=null)}}},{key:"tick",value:function(){for(var i=0;i<this.elem.length;i++){var t=this.elem[i],canvas=this.canvases[i],e=this.ctxs[i];if(e.clearRect(0,0,canvas.width,canvas.height),t.isInView)for(var o=0;o<this.colors.length;o++){e.beginPath(),e.lineCap="round",e.strokeStyle=this.colors[o],e.lineWidth=this.lineWidth;for(var n=canvas.posX-canvas.diffX-this.lineShift*(o-1);n<canvas.width/2+canvas.diffX;n++){var l=this.calcPosY(n,o*this.lineInterval);e.lineTo(n,l+canvas.posY)}e.stroke()}}this.frames-=.5*this.resolution}},{key:"calcPosY",value:function(t,e){return Math.sin(t/this.wavelength*(2*Math.PI)+(this.frames-e)/this.frequency)*this.amplitude}},{key:"handleEvents",value:function(){this.raf=this.tick.bind(this),this.start()}},{key:"removeEvents",value:function(){this.stop()}},{key:"destroy",value:function(){var t=this;this.removeEvents(),this.destroyObserver(),requestTimeout((function(){t.destroyCanvas()}),240)}},{key:"start",value:function(){gsap.ticker.add(this.raf)}},{key:"stop",value:function(){gsap.ticker.remove(this.raf)}}]),t}();e.a=r},325:function(t,e,o){var content=o(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("2e5cf436",content,!0,{sourceMap:!1})},326:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"Account Executive","jobDescription":"新規クライアントの獲得から、既存クライアントのフォローアップまで、クライアントの抱えている課題にたいしてソリューションを提案するアカウントエグゼクティブ業務。 クリエイティブディレクター、ストラテジックプランナーとタッグを組み、各種クリエイティブ制作やSNS、イベントなど、固定の枠組みにとどまらない様々な企画をクライアントに提案、交渉を進めて頂きます。","jobOutlineTtl":{"1":"雇用形態","2":"勤務地","3":"給与"},"jobOutlineTxt":{"1":"正社員 (中途)<br/>契約社員<br/>業務委託<br/><span class=\\"note\\">(試用期間 3か月)</span>","2":"東京","3":"要相談"},"jobMoreOutlineLabel":"詳細","jobMoreOutlineTtl":{"1":"フレックス制","2":"待遇","3":"休日 • 休暇"},"jobMoreOutlineTxt":{"1":"10:00 ~ 19:00 (休憩1時間)<br/>(10:00 ~ 22:00 のフレックスタイム)","2":"給与は当社規定により経験・能力、前職給与を考慮し、面談後に決定いたします。<br/>交通費全額支給 • 各種保険完備","3":"週休2日制 • 夏季休暇• 年次有給休暇 • 年末年始休暇 • 振替休日"},"jobDo":{"1":"クライアントの抱える課題のヒアリング","2":"課題に対するソリューションのアイデア出し","3":"クライアントへの企画提案、交渉","4":"新規クライアントの獲得","5":"既存クライアントのフォローアップ","6":"クリエイティブ制作チーム設計"},"jobSkillTtl":{"1":"基本条件","2":"必須条件","3":"歓迎条件"},"jobBasicSkills":{"1":"学歴 / 性別不問","2":"ものづくりが好きな方","3":"新しいものや技術を貪欲に取り入れていく方","4":"情熱を持って業務に取り組める方"},"jobRequiredSkills":{"1":"アカウントとして営業経験のある方","2":"映像、広告など制作業務における予算 / 進行管理の経験がある方","3":"Excel、Wordなど業務上基本的なPCスキル","4":"基本的なビジネスマナーを身につけている方"},"jobEntrySkills":{"1":"エージェンシーやクリエイティブエージェンシーでの勤務経験がある方","2":"コミュニケーション能力が高い方","3":"明るく柔軟で、対応力の高い方","4":"Adobeソフトを使用出来る方","5":"第二言語を習得されている方","6":"デジタル領域に造詣が深い方"}},"en":{"title":"Account Executive","jobDescription":"Carry out account executive operations, proposing solutions for problems faced in business as both a method for new client acquisition and a means of following up with existing clients.<br/>In cooperation with creative directors and strategic planners, propose a wide variety of project to clients without the limitation of framing such as creative content, social media, and events, and promote negotiations.","jobOutlineTtl":{"1":"Contract type","2":"Location","3":"Salary"},"jobOutlineTxt":{"1":"Full-time employee (mid-career)<br/>Contract employee<br/>Business consignment<br/><span class=\\"note\\">(Trial period: 3 months)</span>","2":"Tokyo","3":"Ask"},"jobMoreOutlineLabel":"Details","jobMoreOutlineTtl":{"1":"Flextime","2":"Benefits","3":"Holiday"},"jobMoreOutlineTxt":{"1":"10:00 a.m. to 7:00 p.m.（1 hour break）<br/>*Flextime between 10:00 a.m. to 10:00 p.m.","2":"The salary will be decided after the interview based on company regulations considering your experience, skills, and pay at your previous job.<br/><br/>Transportation: fully paid<br/>Various insurances: fully covered","3":"Five-day work week, summer holidays, annual paid holidays, New Year Holidays, compensatory holidays"},"jobDo":{"1":"Conducting interviews related to client problems","2":"Propose ideas for solutions to these problems","3":"Proposing projects to clients, negotiating","4":"Acquiring new clients","5":"Following-up with existing clients","6":"Designing a creative content team"},"jobSkillTtl":{"1":"Basic","2":"Requirements","3":"Entry Conditions"},"jobBasicSkills":{"1":"Educational History / Gender unnecessary","2":"Likes making things","3":"Shows great desire to take in new technologies","4":"Works with passion"},"jobRequiredSkills":{"1":"Business experience with accounts","2":"Experience in budget/progress management in production work such as video and advertisement","3":"Basic PC skills for business such as Excel and Word","4":"Basic business manners"},"jobEntrySkills":{"1":"Work experience at agencies or creative agencies","2":"High communication skills","3":"Cheerful, flexible, and highly responsive","4":"Capable of using Adobe software","5":"Knows a second language","6":"Deep knowledge in the digital domain"}}}'),delete t.options._Ctor}},366:function(t,e,o){"use strict";var n=o(325);o.n(n).a},367:function(t,e,o){(e=o(12)(!1)).push([t.i,"",""]),t.exports=e},368:function(t,e,o){"use strict";var n=o(326),l=o.n(n);e.default=l.a},412:function(t,e,o){"use strict";o.r(e);o(23),o(14),o(11),o(6),o(19);var n=o(4),l=o(9),r=o(312);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var h={data:function(){var t=this.$t.bind(this);return{title:t("title"),description:"ja"===this.$i18n.locale?"Helicx Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。":"Helicx Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",className:"careers-details",headerTitle:"Account Executive",headerSubTitle:"Tokyo",jobsEmail:"",isMoreClicked:!1,helixWave:null,jobDoLists:[{txt:t("jobDo.1")},{txt:t("jobDo.2")},{txt:t("jobDo.3")},{txt:t("jobDo.4")},{txt:t("jobDo.5")},{txt:t("jobDo.6")}],jobBasicSkills:[{txt:t("jobBasicSkills.1")},{txt:t("jobBasicSkills.2")},{txt:t("jobBasicSkills.3")},{txt:t("jobBasicSkills.4")}],jobRequiredSkills:[{txt:t("jobRequiredSkills.1")},{txt:t("jobRequiredSkills.2")},{txt:t("jobRequiredSkills.3")},{txt:t("jobRequiredSkills.4")}],jobEntrySkills:[{txt:t("jobEntrySkills.1")},{txt:t("jobEntrySkills.2")},{txt:t("jobEntrySkills.3")},{txt:t("jobEntrySkills.4")},{txt:t("jobEntrySkills.5")},{txt:t("jobEntrySkills.6")}]}},head:function(){return{title:this.title,titleTemplate:"%s - Helixes",htmlAttrs:{lang:this.$i18n.locale},bodyAttrs:{class:this.className},meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"itemprop:name",itemprop:"name",content:this.title},{hid:"itemprop:description",itemprop:"description",content:this.description}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({loaded:"loaded",user:"user",page:"page"})),watch:{loaded:function(t){t&&this.init("first")}},beforeMount:function(){$g.fn.utility.resetScrollPosition(),$g.fn.utility.setViewportHeight()},mounted:function(){var t=this;this.$nextTick((function(){t.setData(),$g.fn.utility.updateViewType(),$g.fn.utility.staggerElement(".subpage-hero-sub-ttl"),$g.fn.utility.staggerElement(".subpage-hero-ttl"),t.$eventHub.$emit("helixSetState",!1),t.helixWave=new r.a($g.configs.helixWaveSettings()),t.setMoreOutlineHeight(),observer.init($g.configs.observerSettings),t.loaded&&t.init("default"),t.$eventHub.$on("onScroll",t.onScroll),t.$eventHub.$on("onResize",t.onResize)}))},beforeDestroy:function(){observer.destroy(),this.helixWave.destroy(),this.$eventHub.$off("onScroll",this.onScroll),this.$eventHub.$off("onResize",this.onResize)},methods:{setData:function(){this.jobsEmail=$g.configs.emails.jobs},init:function(t){var e=this;switch(t){case"first":$g.fn.utility.staggerAnimation({el:".m-subpage-hero .l-relative",delay:.85}),this.$eventHub.$emit("glInit"),this.$eventHub.$emit("glTick"),this.$eventHub.$emit("helixSetDefault"),this.$eventHub.$emit("helixSetState",!1),this.$eventHub.$emit("helixStop"),this.$refs.white&&this.$refs.white.classList.add("is-white"),requestTimeout((function(){$g.fn.utility.setFooterTop(),fakeScroll.isActive&&fakeScroll.update()}),300),ua.windows&&$g.fn.utility.windowsUpdate(450);break;default:$g.fn.utility.staggerAnimation({el:".m-subpage-hero .l-relative",delay:.2}),this.$eventHub.$emit("glReInit"),this.$eventHub.$emit("glTick"),requestTimeout((function(){$g.fn.utility.setFooterTop(),fakeScroll.isActive&&fakeScroll.update()}),300),ua.windows&&$g.fn.utility.windowsUpdate(450),requestTimeout((function(){e.$refs.white&&e.$refs.white.classList.add("is-white")}),650),requestTimeout((function(){e.$eventHub.$emit("helixSetState",!1),e.$eventHub.$emit("helixStop")}),1650)}},setMoreOutlineHeight:function(t){var e=this.$refs.moreOutline,o=e.getBoundingClientRect().height;e.setAttribute("data-height",o),e.style.height="0px"},openMoreOutline:function(t){if(!this.isMoreClicked){this.isMoreClicked=!0;var e=this.$refs.moreOutline,o=e.getAttribute("data-height"),n=this.$refs.moreOutlineBtn;gsap.to(n,{duration:.65,autoAlpha:0,ease:"power1.out"}),gsap.to(e,{duration:.8,height:o,ease:"power2.inOut",clearProps:"height",onComplete:function(){$g.fn.utility.setFooterTop(),fakeScroll.isActive&&fakeScroll.update()}})}},onClickEmail:function(t,e){var o=this.$refs[t];$g.fn.utility.onClickEmail({isDesktop:this.user.desktop,target:o,evt:e})},onMouseEnterEmail:function(t){$g.fn.utility.onMouseEnterEmail({isDesktop:this.user.desktop,evt:t})},onMouseLeaveEmail:function(t){$g.fn.utility.onMouseLeaveEmail({isDesktop:this.user.desktop,evt:t})},onScroll:function(t){t._y;t.y>t.height&&(this.$eventHub.$emit("helixSetState",!1),this.$eventHub.$emit("helixStop"))},onResize:function(t){t.width,t.height},goTo:function(t){this.$router.push({path:t})},scrollToElement:function(t){var e=t.id;t.duration,t.ease;$g.fn.utility.scrollToElement({id:e})}},transition:{mode:"out-in",css:!1,beforeEnter:function(t){this.$store.getters.loaded&&$g.fn.transition.beforeEnter({el:t})},enter:function(t,e){var o=this;this.$store.getters.loaded&&(requestTimeout((function(){o.$store.dispatch("maskOff")}),250),$g.fn.transition.enter({el:t,done:e}))},leave:function(t,e){if(this.$store.getters.loaded){this.$store.dispatch("maskOn"),$g.fn.transition.leave({el:t,done:e,callback:function(){}})}}}},d=(o(366),o(8)),v=o(368),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:"p-"+t.className},[o("section",{ref:"white",class:t.className+"-hero | m-subpage-hero | subpage-child",attrs:{"data-fs-section":""}},[o("div",{ref:"hero",staticClass:"subpage-hero-height"},[o("div",{staticClass:"back-to-link"},[o("nuxt-link",{staticClass:"back-to",attrs:{to:t.localePath("careers"),"data-ma-hover":"fixed-link-border-light-gray","data-ma-fixed":""}},[o("span",{staticClass:"arrow"},[o("svg",{staticClass:"arrow-back",attrs:{viewBox:"0 0 18 12"}},[o("path",{attrs:{d:"M18,5H3.8l3.6-3.6L6,0L0,6l6,6l1.4-1.4L3.8,7H18V5z"}})]),t._v(" "),o("span",{staticClass:"point",attrs:{"data-ma-fixed-target":""}})]),t._v(" "),o("span",{staticClass:"txt"},[t._v("Back")])])],1),t._v(" "),o("div",{staticClass:"subpage-hero-inner"},[o("div",{staticClass:"subpage-hero-body | l-relative"},[o("h4",{staticClass:"subpage-hero-sub-ttl"},[t._v(t._s(t.headerSubTitle))]),t._v(" "),o("h1",{staticClass:"subpage-hero-ttl"},[t._v(t._s(t.headerTitle))]),t._v(" "),o("div",{staticClass:"helix-wave | js-helix-wave"})])])])]),t._v(" "),o("section",{staticClass:"m-subpage-sections",attrs:{"data-fs-section":""}},[o("div",{staticClass:"subpage-section-narrow"},[o("div",{staticClass:"subpage-section-narrow-body"},[o("div",{staticClass:"careers-details-description"},[o("p",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("jobDescription"))}}),t._v(" "),o("div",{staticClass:"apply-btn-wrap"},[o("div",{staticClass:"ui-scroll-down",attrs:{"data-ma-hover":"fixed-link-small","data-ma-fixed":""},on:{click:function(e){return t.scrollToElement({id:"scroll-to"})}}},[o("span",{staticClass:"txt",attrs:{"data-txt":"Apply this job"}},[t._v("Apply this job")]),t._v(" "),o("span",{staticClass:"point",attrs:{"data-ma-fixed-target":""}})])])]),t._v(" "),o("div",{staticClass:"m-subpage-child-content"},[t._m(0),t._v(" "),o("div",{staticClass:"content-body"},[o("ul",{staticClass:"m-outline-lists"},[o("li",{staticClass:"outline-list"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobOutlineTtl.1")))]),t._v(" "),o("p",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("jobOutlineTxt.1"))}})]),t._v(" "),o("li",{staticClass:"outline-list"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobOutlineTtl.2")))]),t._v(" "),o("p",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("jobOutlineTxt.2"))}})]),t._v(" "),o("li",{staticClass:"outline-list"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobOutlineTtl.3")))]),t._v(" "),o("p",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("jobOutlineTxt.3"))}})])]),t._v(" "),o("div",{ref:"moreOutlineBtn",staticClass:"more-outline-btn-wrap"},[o("div",{staticClass:"more-btn | ui-link",attrs:{"data-ma-hover":"plus-link"},on:{click:function(e){return t.openMoreOutline(e)}}},[o("span",{staticClass:"txt",attrs:{"data-txt":"More"}},[t._v("More")]),t._v(" "),o("span",{staticClass:"line"})])]),t._v(" "),o("div",{ref:"moreOutline",staticClass:"more-outline-wrap"},[o("div",{staticClass:"more-outline"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobMoreOutlineLabel")))]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"left"},[t._v(t._s(t.$t("jobMoreOutlineTtl.1")))]),t._v(" "),o("div",{staticClass:"right",domProps:{innerHTML:t._s(t.$t("jobMoreOutlineTxt.1"))}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"left"},[t._v(t._s(t.$t("jobMoreOutlineTtl.2")))]),t._v(" "),o("div",{staticClass:"right",domProps:{innerHTML:t._s(t.$t("jobMoreOutlineTxt.2"))}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"left"},[t._v(t._s(t.$t("jobMoreOutlineTtl.3")))]),t._v(" "),o("div",{staticClass:"right",domProps:{innerHTML:t._s(t.$t("jobMoreOutlineTxt.3"))}})])])])])]),t._v(" "),o("div",{staticClass:"m-subpage-child-content"},[t._m(1),t._v(" "),o("div",{staticClass:"content-body"},[o("ol",{staticClass:"m-do-lists"},t._l(t.jobDoLists,(function(e,n){return o("li",{staticClass:"do-list"},[o("p",{staticClass:"txt",domProps:{innerHTML:t._s(e.txt)}})])})),0)])]),t._v(" "),o("div",{staticClass:"m-subpage-child-content"},[t._m(2),t._v(" "),o("div",{staticClass:"content-body"},[o("div",{staticClass:"skill-lists-wrap"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobSkillTtl.1")))]),t._v(" "),o("ul",{staticClass:"m-skill-lists"},t._l(t.jobBasicSkills,(function(e,n){return o("li",{staticClass:"skill-list"},[o("p",{staticClass:"txt",domProps:{innerHTML:t._s(e.txt)}})])})),0)]),t._v(" "),o("div",{staticClass:"skill-lists-wrap"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobSkillTtl.2")))]),t._v(" "),o("ul",{staticClass:"m-skill-lists"},t._l(t.jobRequiredSkills,(function(e,n){return o("li",{staticClass:"skill-list"},[o("p",{staticClass:"txt",domProps:{innerHTML:t._s(e.txt)}})])})),0)]),t._v(" "),o("div",{staticClass:"skill-lists-wrap"},[o("h5",{staticClass:"ui-line-ttl"},[t._v(t._s(t.$t("jobSkillTtl.3")))]),t._v(" "),o("ul",{staticClass:"m-skill-lists"},t._l(t.jobEntrySkills,(function(e,n){return o("li",{staticClass:"skill-list"},[o("p",{staticClass:"txt",domProps:{innerHTML:t._s(e.txt)}})])})),0)])])])])])]),t._v(" "),o("section",{staticClass:"m-subpage-link",attrs:{id:"scroll-to","data-fs-section":""}},[o("div",{staticClass:"subpage-link-inner"},[o("div",{staticClass:"l-relative | no-link"},[t._m(3),t._v(" "),o("div",{staticClass:"ttl"},[o("span",{staticClass:"txt-wrap"},[o("div",{ref:"emailContact",staticClass:"m-email-copy",attrs:{"data-email-to":t._f("email")(t.jobsEmail)},on:{click:function(e){return t.onClickEmail("emailContact",e)},mouseenter:function(e){return t.onMouseEnterEmail(e)},mouseleave:function(e){return t.onMouseLeaveEmail(e)}}},[o("a",{staticClass:"email",attrs:{href:t._f("email")("mailto:"+t.jobsEmail)}},[o("span",{staticClass:"txt | active"},[t._v(t._s(t._f("email")(t.jobsEmail)))]),t._v(" "),o("span",{staticClass:"txt | hover"},[t._v("Copy to clipboard")]),t._v(" "),o("span",{staticClass:"txt | done"},[t._v("E-mail copied")])])])])])])])]),t._v(" "),t._m(4)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-label"},[e("h4",{staticClass:"ttl"},[this._v("Outline")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-label"},[e("h4",{staticClass:"ttl"},[e("span",{staticClass:"row"},[this._v("What")]),this._v(" "),e("span",{staticClass:"row"},[this._v("you’ll do")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-label"},[e("h4",{staticClass:"ttl"},[e("span",{staticClass:"row"},[this._v("Basic &")]),this._v(" "),e("span",{staticClass:"row"},[this._v("Skills")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sub-ttl ui-link"},[e("span",{staticClass:"txt",attrs:{"data-txt":"Apply now"}},[this._v("Apply now")]),this._v(" "),e("span",{staticClass:"line"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fake-footer",attrs:{"data-fs-section":""}},[e("div",{staticClass:"fake-footer-height"})])}],!1,null,"00530f04",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports}}]);