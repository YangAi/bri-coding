(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{329:function(t,e,r){"use strict";r.r(e);var o={name:"SCardSubtitle",props:{noMargin:{type:Boolean,default:!1}},computed:{classList:function(){return this.noMargin?"tw-p-0":""}}},n=r(36),c=r(39),l=r.n(c),d=r(122),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("v-card-subtitle",{staticClass:"tw-text-xs",class:this.classList},[this._t("default")],2)}),[],!1,null,"7d780a62",null);e.default=component.exports;l()(component,{VCardSubtitle:d.a})},338:function(t,e,r){var content=r(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3d6dd77a",content,!0,{sourceMap:!1})},375:function(t,e,r){"use strict";r(338)},376:function(t,e,r){(e=r(16)(!1)).push([t.i,'em{font-weight:700;padding-left:.25rem;padding-right:.25rem;color:rgba(244,67,54,var(--tw-text-opacity))}em,em.location{--tw-text-opacity:1}em.location{color:rgba(63,81,181,var(--tw-text-opacity))}p{font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;font-size:.875rem;line-height:1.25rem}',""]),t.exports=e},399:function(t,e,r){"use strict";r.r(e);r(15),r(56),r(38),r(63),r(57);var o=r(1),n=(r(65),r(12));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{timeout:void 0,loading:!0,record:{section:""},form:{actualParticipated:0,specificProjects:"",subsidyAmounts:"",locationMentioned:"",comment:"",codedBy:this.$route.params.name,questionMark:0}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.bri.show("new",{exclude:(null===(r=t.record)||void 0===r?void 0:r._id)||""});case 3:t.record=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,t.loading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},watch:{"form.actualParticipated":{handler:function(t){1===t&&this.form.locationMentioned.length<1?this.form.locationMentioned=this.record.locationMentioned||"":this.form.locationMentioned=""}}},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$api.bri.update(t.record._id,l(l(l({},t.record),t.form),{},{specificProjects:t.form.specificProjects||"0",subsidyAmounts:t.form.subsidyAmounts||"0"}));case 3:t.form={actualParticipated:0,specificProjects:"",subsidyAmounts:"",locationMentioned:"",comment:"",codedBy:t.form.codedBy,questionMark:0},t.$fetch(),t.setTimeoutAlert();case 6:case"end":return e.stop()}}),e)})))()},isImportantSection:function(section){if("string"!=typeof section)return!1;for(var t=0,e=["财务报告","重要事项","经营情况"];t<e.length;t++){var r=e[t];if(section.includes(r))return!0}return!1},checkProgress:function(){var t=this;this.$api.bri.show("coder/".concat(this.form.codedBy)).then((function(data){t.$toast.success("".concat(t.form.codedBy," 已完成 ").concat(data," 条"))})),this.$api.bri.show("coder/empty").then((function(data){t.$toast("总共剩余 ".concat(data," 条"))}))},setTimeoutAlert:function(){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.$router.go(0),t.$toast("超时，请重新加载")}),297e3)}}},f=(r(375),r(36)),m=r(39),v=r.n(m),h=r(326),w=r(403),y=r(394),x=r(327),_=r(396),k=r(386),P=r(397),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"tw-bg-indigo-500 tw-min-h-screen"},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:9}},[r("s-card",{staticClass:"tw-my-2"},[r("v-container",[r("p",{staticClass:"tw-text-sm tw-text-gray-600",domProps:{innerHTML:t._s(t.record.mentionPrevious)}}),t._v(" "),r("p",{class:{"tw-text-red-500 tw-font-bold":t.isImportantSection(t.record.section)}},[t._v("\n              "+t._s(t.record.section)+"\n            ")]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.record.mention)}}),t._v(" "),r("p",{staticClass:"tw-text-gray-600",domProps:{innerHTML:t._s(t.record.mentionNext)}})])],1)],1),t._v(" "),r("v-col",{staticClass:"tw-fixed tw-top-0 tw-right-0",attrs:{cols:3}},[r("s-card",{staticClass:"tw-my-2"},[r("v-container",{staticClass:"extended right"},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:12}},[r("v-checkbox",{attrs:{dense:"","hide-details":"",label:"实际参与","true-value":1,"false-value":0},model:{value:t.form.actualParticipated,callback:function(e){t.$set(t.form,"actualParticipated",e)},expression:"form.actualParticipated"}})],1),t._v(" "),1===t.form.actualParticipated?[r("v-col",{attrs:{cols:12}},[r("v-textarea",{attrs:{dense:"","hide-details":"",rows:2,label:"具体项目"},model:{value:t.form.specificProjects,callback:function(e){t.$set(t.form,"specificProjects",e)},expression:"form.specificProjects"}})],1),t._v(" "),r("v-col",{attrs:{cols:12}},[r("v-text-field",{attrs:{dense:"",label:"补助金额"},model:{value:t.form.subsidyAmounts,callback:function(e){t.$set(t.form,"subsidyAmounts",e)},expression:"form.subsidyAmounts"}})],1),t._v(" "),r("v-col",{attrs:{cols:12}},[r("v-textarea",{attrs:{dense:"","hide-details":"",clearable:"",rows:2,label:"参与地区"},model:{value:t.form.locationMentioned,callback:function(e){t.$set(t.form,"locationMentioned",e)},expression:"form.locationMentioned"}})],1)]:t._e(),t._v(" "),r("v-col",{attrs:{cols:12}},[r("v-textarea",{attrs:{dense:"","hide-details":"",rows:1,label:"备注"},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}}),t._v(" "),r("v-checkbox",{attrs:{dense:"",label:"不确定","true-value":1,"false-value":0},model:{value:t.form.questionMark,callback:function(e){t.$set(t.form,"questionMark",e)},expression:"form.questionMark"}})],1)],2),t._v(" "),r("v-btn",{attrs:{block:"",color:"accent",loading:t.$fetchState.pending||t.loading},on:{click:t.submit}},[t._v("\n              保存\n            ")])],1)],1),t._v(" "),r("s-card",{staticClass:"tw-my-2"},[r("s-card-title",[t._v(t._s(t.record.title))]),t._v(" "),r("s-card-subtitle",[t._v(t._s(t.record.sourceYear)+" · "+t._s(t.record.industry)+" · "+t._s(t.record.actualControllerType))]),t._v(" "),r("s-card-subtitle",[r("a",{attrs:{href:t.record.docLink||t.record.link,target:"_blank"}},[t._v("\n              查看原文\n            ")])])],1),t._v(" "),r("v-btn",{attrs:{block:""},on:{click:t.checkProgress}},[t._v("\n          查看我的进度\n        ")]),t._v(" "),r("s-card",{staticClass:"tw-my-2"},[r("v-container",[r("v-text-field",{attrs:{dense:"","hide-details":"",label:"Coder"},model:{value:t.form.codedBy,callback:function(e){t.$set(t.form,"codedBy",e)},expression:"form.codedBy"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{SCard:r(217).default,SCardTitle:r(216).default,SCardSubtitle:r(329).default}),v()(component,{VBtn:h.a,VCheckbox:w.a,VCol:y.a,VContainer:x.a,VRow:_.a,VTextField:k.a,VTextarea:P.a})}}]);