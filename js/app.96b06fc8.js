(function(e){function t(t){for(var o,s,m=t[0],c=t[1],i=t[2],r=0,v=[];r<m.length;r++)s=m[r],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(v.length)v.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,m=1;m<n.length;m++){var c=n[m];0!==a[c]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},l=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/capture-event/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],c=m.push.bind(m);m.push=t,m=m.slice();for(var i=0;i<m.length;i++)t(m[i]);var u=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("8a23"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[[n("v-list-item")],e._l(e.menuList,(function(t){var o=t[0],a=t[1];return n("v-list",{key:a,attrs:{dense:""}},[n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(o))])],1),n("v-list-item-content",[n("v-list-item-title",e._g({},l),[e._v(e._s(a))])],1)],1)]}}],null,!0)},[n("span",[e._v(e._s(a))])])],1)}))],2),n("v-app-bar",{attrs:{app:"",color:"rgb(4,96,237)",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.title))])],1),n("v-content",[n("CaptureMovementEvent")],1),n("v-footer",{staticClass:"justify-center",attrs:{color:"rgb(4,96,237)",app:""}},[n("span",{staticClass:"white--text"},[e._v("OneOperation © 2020")])])],1)},l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("CaptureMovementEventHeader")],1)],1),n("v-row",[n("v-col",[n("CaptureMovementEventDetail")],1)],1)],1)},m=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{attrs:{hover:"",accordion:!0,flat:!0,focusable:!0,tile:!0,value:0}},[n("v-expansion-panel",{staticStyle:{border:"1px solid #546E7A"}},[n("v-expansion-panel-header",{staticClass:"blue-grey darken-1 ma-0",attrs:{ripple:!0},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"white"}},[e._v("$expand")])]},proxy:!0}])},[n("span",{staticClass:"white--text subtitle-1"},[e._v("Capture Movement Event")])]),n("v-expansion-panel-content",{staticClass:"py-2"},[n("CaptureMovementEventHeaderItem")],1)],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CaptureMovementEventCommonValues")},r=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.commonValuesChoices,(function(t){var o=t.eqpList,a=t.ladenEmptyList,l=t.conditionList,s=t.vgmMethodList,m=t.authTypeList,c=t.eventTypeList,i=t.sealTypeList,u=t.facilityList;return n("div",{key:u.length},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{maxlength:"20",label:"Customer"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.customer,callback:function(t){e.$set(e.commonValues,"customer",t)},expression:"commonValues.customer"}}),n("v-select",{attrs:{items:o,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eqpType,callback:function(t){e.$set(e.commonValues,"eqpType",t)},expression:"commonValues.eqpType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"Authorization Number"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.authNo,callback:function(t){e.$set(e.commonValues,"authNo",t)},expression:"commonValues.authNo"}}),n("v-select",{attrs:{items:s,"menu-props":{maxHeight:"400"},label:"VGM Method","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmMethod,callback:function(t){e.$set(e.commonValues,"vgmMethod",t)},expression:"commonValues.vgmMethod"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-text-field",e._g({attrs:{label:"Event Date",readonly:""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}},o))]}}],null,!0),model:{value:e.menu2Event,callback:function(t){e.menu2Event=t},expression:"menu2Event"}},[n("v-date-picker",{on:{input:function(t){e.menu2Event=!1}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}})],1),n("v-select",{attrs:{items:l,"menu-props":{maxHeight:"400"},label:"Equipment Condition","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.condition,callback:function(t){e.$set(e.commonValues,"condition",t)},expression:"commonValues.condition"}}),n("v-select",{attrs:{items:m,"menu-props":{maxHeight:"400"},label:"Authorization Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.authType,callback:function(t){e.$set(e.commonValues,"authType",t)},expression:"commonValues.authType"}}),n("v-select",{attrs:{items:c,"menu-props":{maxHeight:"400"},label:"Event Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eventType,callback:function(t){e.$set(e.commonValues,"eventType",t)},expression:"commonValues.eventType"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-text-field",e._g({attrs:{label:"VGM Date",readonly:""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}},o))]}}],null,!0),model:{value:e.menu2Vgm,callback:function(t){e.menu2Vgm=t},expression:"menu2Vgm"}},[n("v-date-picker",{on:{input:function(t){e.menu2Vgm=!1}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}})],1),n("v-text-field",{attrs:{maxlength:"20",label:"Carrier"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.carrier,callback:function(t){e.$set(e.commonValues,"carrier",t)},expression:"commonValues.carrier"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Responsible Party"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmResParty,callback:function(t){e.$set(e.commonValues,"vgmResParty",t)},expression:"commonValues.vgmResParty"}}),n("v-select",{attrs:{items:u,"menu-props":{maxHeight:"400"},label:"Facility","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.facility,callback:function(t){e.$set(e.commonValues,"facility",t)},expression:"commonValues.facility"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{items:a,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.ladenEmpty,callback:function(t){e.$set(e.commonValues,"ladenEmpty",t)},expression:"commonValues.ladenEmpty"}}),n("v-select",{attrs:{items:i,"menu-props":{maxHeight:"400"},label:"Seal Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.sealType,callback:function(t){e.$set(e.commonValues,"sealType",t)},expression:"commonValues.sealType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Authorized Official"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmOfficial,callback:function(t){e.$set(e.commonValues,"vgmOfficial",t)},expression:"commonValues.vgmOfficial"}})],1)],1),n("v-row",[n("v-btn",{staticClass:"ma-2",attrs:{small:"",tile:"",outlined:"",color:"blue-grey darken-1"},on:{click:e.reset}},[e._v("Clear Common Values ")])],1)],1)})),0)},p=[],d=n("2f62"),V={name:"CaptureMovementEventCommonValues",created(){this.fetchCommonValuesList()},computed:{...Object(d["c"])(["commonValuesChoices"])},methods:{...Object(d["b"])(["fetchCommonValuesList","applyCommonValues"]),reset(e){e.preventDefault();for(let t in this.commonValues)this.commonValues[t]=""}},data(){return{menu2Event:!1,menu2Vgm:!1,commonValues:{customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}}}},f=V,y=n("2877"),h=n("6544"),g=n.n(h),b=n("8336"),C=n("62ad"),x=n("2e4b"),E=n("e449"),M=n("0fd9"),k=n("b974"),T=n("8654"),D=Object(y["a"])(f,v,p,!1,null,null,null),O=D.exports;g()(D,{VBtn:b["a"],VCol:C["a"],VDatePicker:x["a"],VMenu:E["a"],VRow:M["a"],VSelect:k["a"],VTextField:T["a"]});var _={name:"CaptureMovementEventHeaderItem",components:{CaptureMovementEventCommonValues:O}},w=_,R=Object(y["a"])(w,u,r,!1,null,null,null),A=R.exports,S={name:"CaptureMovementEventHeader",components:{CaptureMovementEventHeaderItem:A},data(){return{}}},$=S,P=n("cd55"),L=n("49e2"),j=n("c865"),q=n("0393"),H=n("132d"),N=Object(y["a"])($,c,i,!1,null,null,null),I=N.exports;g()(N,{VExpansionPanel:P["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:j["a"],VExpansionPanels:q["a"],VIcon:H["a"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CaptureMovementEventDetailItem")],1)},K=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-btn",{staticClass:"mr-2",attrs:{small:"",tile:"",outlined:"",color:"info"},on:{click:function(t){return e.addRows(2)}}},[e._v("Add Rows")]),n("v-btn",{staticClass:"mr-2",attrs:{small:"",tile:"",outlined:"",color:"success"},on:{click:e.clickEditRows}},[e._v("Edit Rows")]),n("v-btn",{staticClass:"mr-2",attrs:{small:"",tile:"",outlined:"",color:"warning"},on:{click:e.clickRemove}},[e._v("Remove Rows")]),n("v-btn",{staticClass:"mr-2",attrs:{small:"",tile:"",outlined:"",color:"error"},on:{click:e.clickResetRows}},[e._v("Reset Rows")])],1),n("br"),n("span",[e._v(e._s(e.selected))]),n("v-data-table",{staticClass:"elevation-1",attrs:{id:"inputtedEvents",headers:e.headers,items:e.inputtedEvents,"single-select":e.singleSelect,"show-select":"","item-key":"dumbKey"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-switch",{staticClass:"pa-3",attrs:{label:"Single select"},model:{value:e.singleSelect,callback:function(t){e.singleSelect=t},expression:"singleSelect"}})]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-btn",{staticClass:"mt-5",attrs:{small:"",tile:"",color:"primary"},on:{click:e.logger}},[e._v("Submit")]),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"1161px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-container",[n("CaptureMovementEventCommonValuesModal")],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.clickEditCancel}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.clickEditSave}},[e._v("Save")])],1)],1)],1)],1)],1)},z=[],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.commonValuesChoices,(function(t){var o=t.eqpList,a=t.ladenEmptyList,l=t.conditionList,s=t.vgmMethodList,m=t.authTypeList,c=t.eventTypeList,i=t.sealTypeList,u=t.facilityList;return n("div",{key:u.length},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{maxlength:"20",label:"Customer"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.customer,callback:function(t){e.$set(e.commonValues,"customer",t)},expression:"commonValues.customer"}}),n("v-select",{attrs:{items:o,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eqpType,callback:function(t){e.$set(e.commonValues,"eqpType",t)},expression:"commonValues.eqpType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"Authorization Number"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.authNo,callback:function(t){e.$set(e.commonValues,"authNo",t)},expression:"commonValues.authNo"}}),n("v-select",{attrs:{items:s,"menu-props":{maxHeight:"400"},label:"VGM Method","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmMethod,callback:function(t){e.$set(e.commonValues,"vgmMethod",t)},expression:"commonValues.vgmMethod"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-text-field",e._g({attrs:{label:"Event Date",readonly:""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}},o))]}}],null,!0),model:{value:e.menu2Event,callback:function(t){e.menu2Event=t},expression:"menu2Event"}},[n("v-date-picker",{on:{input:function(t){e.menu2Event=!1}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}})],1),n("v-select",{attrs:{items:l,"menu-props":{maxHeight:"400"},label:"Equipment Condition","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.condition,callback:function(t){e.$set(e.commonValues,"condition",t)},expression:"commonValues.condition"}}),n("v-select",{attrs:{items:m,"menu-props":{maxHeight:"400"},label:"Authorization Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.authType,callback:function(t){e.$set(e.commonValues,"authType",t)},expression:"commonValues.authType"}}),n("v-select",{attrs:{items:c,"menu-props":{maxHeight:"400"},label:"Event Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eventType,callback:function(t){e.$set(e.commonValues,"eventType",t)},expression:"commonValues.eventType"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-text-field",e._g({attrs:{label:"VGM Date",readonly:""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}},o))]}}],null,!0),model:{value:e.menu2Vgm,callback:function(t){e.menu2Vgm=t},expression:"menu2Vgm"}},[n("v-date-picker",{on:{input:function(t){e.menu2Vgm=!1}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}})],1),n("v-text-field",{attrs:{maxlength:"20",label:"Carrier"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.carrier,callback:function(t){e.$set(e.commonValues,"carrier",t)},expression:"commonValues.carrier"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Responsible Party"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmResParty,callback:function(t){e.$set(e.commonValues,"vgmResParty",t)},expression:"commonValues.vgmResParty"}}),n("v-select",{attrs:{items:u,"menu-props":{maxHeight:"400"},label:"Facility","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.facility,callback:function(t){e.$set(e.commonValues,"facility",t)},expression:"commonValues.facility"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{items:a,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.ladenEmpty,callback:function(t){e.$set(e.commonValues,"ladenEmpty",t)},expression:"commonValues.ladenEmpty"}}),n("v-select",{attrs:{items:i,"menu-props":{maxHeight:"400"},label:"Seal Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.sealType,callback:function(t){e.$set(e.commonValues,"sealType",t)},expression:"commonValues.sealType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Authorized Official"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmOfficial,callback:function(t){e.$set(e.commonValues,"vgmOfficial",t)},expression:"commonValues.vgmOfficial"}})],1)],1),n("v-row",[n("v-btn",{staticClass:"ma-2",attrs:{small:"",tile:"",outlined:"",color:"blue-grey darken-1"},on:{click:e.reset}},[e._v("Clear Common Values ")])],1)],1)})),0)},B=[],W={name:"CaptureMovementEventCommonValuesModal",created(){this.fetchCommonValuesList()},computed:{...Object(d["c"])(["commonValuesChoices","commonValuesModal"])},methods:{...Object(d["b"])(["fetchCommonValuesList","applyCommonValuesModal"]),reset(){for(let e in this.commonValues)this.commonValues[e]=""},clickApplyCommonValuesModal(){this.applyCommonValuesModal(this.commonValues)}},data(){return{menu2Event:!1,menu2Vgm:!1,commonValues:{customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}}}},J=W,Y=Object(y["a"])(J,F,B,!1,null,null,null),Q=Y.exports;g()(Y,{VBtn:b["a"],VCol:C["a"],VDatePicker:x["a"],VMenu:E["a"],VRow:M["a"],VSelect:k["a"],VTextField:T["a"]});var X={name:"CaptureMovementEventDetailItem",components:{CaptureMovementEventCommonValuesModal:Q},computed:{...Object(d["c"])(["commonValuesChoices","commonValues","inputtedEvents"])},methods:{...Object(d["b"])(["addRows","resetRows","removeRows","editRows","applyCommonValues","resetCommonValuesModal"]),clickEditCancel(){this.dialog=!1,this.resetCommonValuesModal()},clickEditSave(){this.editRows(this.selected),this.selected=[],this.dialog=!1,this.resetCommonValuesModal()},logger(){},clickResetRows(){0!==this.selected.length&&(this.resetRows(this.selected),this.selected=[])},clickRemove(){0!==this.selected.length&&(this.removeRows(this.selected),this.selected=[])},clickEditRows(){0!==this.selected.length&&(this.dialog=!0)}},data(){return{singleSelect:!1,dialog:!1,selected:[],headers:[{text:"Customer",value:"customer"},{text:"Equipment Type",value:"eqpType"},{text:"Authorization Number",value:"authNo"},{text:"VGM Method",value:"vgmMethod"},{text:"Event Date",value:"eventDate"},{text:"Equipment Condition",value:"condition"},{text:"Authorization Type",value:"authType"},{text:"Event Type",value:"eventType"},{text:"VGM Date",value:"vgmDate"},{text:"Carrier",value:"carrier"},{text:"VGM Responsible Party",value:"facility"},{text:"Facility",value:"vgmResParty"},{text:"Equipment Type",value:"ladenEmpty"},{text:"Seal Type",value:"sealType"},{text:"VGM Authorized Official",value:"vgmOfficial"}]}}},Z=X,ee=n("b0af"),te=n("99d9"),ne=n("a523"),oe=n("8fea"),ae=n("169a"),le=n("2fa4"),se=n("b73d"),me=Object(y["a"])(Z,U,z,!1,null,null,null),ce=me.exports;g()(me,{VBtn:b["a"],VCard:ee["a"],VCardActions:te["a"],VCardText:te["b"],VContainer:ne["a"],VDataTable:oe["a"],VDialog:ae["a"],VRow:M["a"],VSpacer:le["a"],VSwitch:se["a"]});var ie={name:"CaptureMovementEventDetail",components:{CaptureMovementEventDetailItem:ce},methods:{...Object(d["b"])(["addRows","resetRows"])},data(){return{}}},ue=ie,re=Object(y["a"])(ue,G,K,!1,null,null,null),ve=re.exports,pe={name:"CaptureMovementEvent",components:{CaptureMovementEventHeader:I,CaptureMovementEventDetail:ve}},de=pe,Ve=Object(y["a"])(de,s,m,!1,null,null,null),fe=Ve.exports;g()(Ve,{VCol:C["a"],VContainer:ne["a"],VRow:M["a"]});var ye={name:"App",components:{CaptureMovementEvent:fe},data:()=>({drawer:!0,title:"Smart Vendor Platform",menuList:[["mdi-home","Capture Movement Event"],["mdi-home","Capture Creation/Termination Event"],["mdi-home","Event Enquiry"],["mdi-home","Booking Enquiry"]]})},he=ye,ge=(n("034f"),n("7496")),be=n("40dc"),Ce=n("5bc1"),xe=n("a75b"),Ee=n("553a"),Me=n("8860"),ke=n("da13"),Te=n("1800"),De=n("5d23"),Oe=n("f774"),_e=n("2a7f"),we=n("3a2f"),Re=Object(y["a"])(he,a,l,!1,null,null,null),Ae=Re.exports;g()(Re,{VApp:ge["a"],VAppBar:be["a"],VAppBarNavIcon:Ce["a"],VContent:xe["a"],VFooter:Ee["a"],VIcon:H["a"],VList:Me["a"],VListItem:ke["a"],VListItemAction:Te["a"],VListItemContent:De["a"],VListItemTitle:De["b"],VNavigationDrawer:Oe["a"],VToolbarTitle:_e["a"],VTooltip:we["a"]});var Se=n("bc3a"),$e=n.n(Se);const Pe={commonValuesChoices:[],commonValues:[],commonValuesModal:[],events:[]},Le={commonValuesChoices:e=>e.commonValuesChoices,commonValues:e=>e.commonValues,commonValuesModal:e=>e.commonValuesModal,inputtedEvents:e=>{for(event of e.events)event.dumbKey=(new Date).getFullYear()+(new Date).getMilliseconds()+(new Date).getTime()+e.events.indexOf(event),event.customer=event.customer?event.customer:e.commonValues.customer,event.eqpType=event.eqpType?event.eqpType:e.commonValues.eqpType,event.authNo=event.authNo?event.authNo:e.commonValues.authNo,event.vgmMethod=event.vgmMethod?event.vgmMethod:e.commonValues.vgmMethod,event.eventDate=event.eventDate?event.eventDate:e.commonValues.eventDate,event.condition=event.condition?event.condition:e.commonValues.condition,event.authType=event.authType?event.authType:e.commonValues.authType,event.eventType=event.eventType?event.eventType:e.commonValues.eventType,event.vgmDate=event.vgmDate?event.vgmDate:e.commonValues.vgmDate,event.carrier=event.carrier?event.carrier:e.commonValues.carrier,event.facility=event.facility?event.facility:e.commonValues.facility,event.vgmResParty=event.vgmResParty?event.vgmResParty:e.commonValues.vgmResParty,event.ladenEmpty=event.ladenEmpty?event.ladenEmpty:e.commonValues.ladenEmpty,event.sealType=event.sealType?event.sealType:e.commonValues.sealType,event.vgmOfficial=event.vgmOfficial?event.vgmOfficial:e.commonValues.vgmOfficial;return e.events}},je={async fetchCommonValuesList({commit:e}){const t=await $e.a.get("dummyData.json");e("FETCH_COMMONVALUESCHOICES",t.data)},applyCommonValues({commit:e},t){e("UPDATE_COMMONVALUES",t)},applyCommonValuesModal({commit:e},t){e("UPDATE_COMMONVALUESMODAL",t)},resetCommonValuesModal({commit:e}){for(let t in Pe.commonValuesModal)Pe.commonValuesModal[t]="";e("UPDATE_COMMONVALUESMODAL",Pe.commonValuesModal)},addRows({commit:e},t){if(!(t<1)){while(0!==t)Pe.events.unshift({dumbKey:"",customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}),t--;e("ADD_ROWS",Pe.events)}},removeRows({commit:e},t){if(t.length<1)return;let n=[],o=[];Object.values(Pe.events).map(e=>n.push(e.dumbKey)),Object.values(t).map(e=>o.push(e.dumbKey));const a=n.filter(e=>!o.some(t=>e===t));let l=Pe.events.filter(e=>a.includes(e.dumbKey));e("REMOVE_ROWS",l)},resetRows({dispatch:e},t){t.length<1||e("editAdaptor",{checked:t,cvalues:Pe.commonValues})},editRows({dispatch:e},t){t.length<1||e("editAdaptor",{checked:t,cvalues:Pe.commonValuesModal})},editAdaptor({commit:e},t){const{checked:n,cvalues:o}=t;let a=[],l=[];const{dumbKey:s,customer:m,eqpType:c,vgmMethod:i,eventDate:u,condition:r,authType:v,eventType:p,vgmDate:d,carrier:V,facility:f,vgmResParty:y,ladenEmpty:h,sealType:g,vgmOfficial:b}=o;Object.values(Pe.events).map(e=>a.push(e.dumbKey)),Object.values(n).map(e=>l.push(e.dumbKey)),Pe.events.map((e,t)=>{l.includes(e.dumbKey)&&(e.dumbKey=e.dumbKey,e.customer=m||e.customer,e.eqpType=c||e.eqpType,e.vgmMethod=i||e.vgmMethod,e.eventDate=u||e.eventDate,e.condition=r||e.condition,e.authType=v||e.authType,e.eventType=p||e.eventType,e.vgmDate=d||e.vgmDate,e.carrier=V||e.carrier,e.facility=f||e.facility,e.vgmResParty=y||e.vgmResParty,e.ladenEmpty=h||e.ladenEmpty,e.sealType=g||e.sealType,e.vgmOfficial=b||e.vgmOfficial)}),e("EDIT_ROWS",Pe.events)}},qe={FETCH_COMMONVALUESCHOICES:(e,t)=>{e.commonValuesChoices=t},UPDATE_COMMONVALUES:(e,t)=>{e.commonValues=t},UPDATE_COMMONVALUESMODAL:(e,t)=>{e.commonValuesModal=t},ADD_ROWS:(e,t)=>{e.events=t},REMOVE_ROWS:(e,t)=>{e.events=t},EDIT_ROWS:(e,t)=>{e.events=t}};var He={state:Pe,getters:Le,actions:je,mutations:qe};o["a"].use(d["a"]);var Ne=new d["a"].Store({modules:{movementEvents:He}}),Ie=n("f309");o["a"].use(Ie["a"]);var Ge=new Ie["a"]({});o["a"].config.productionTip=!1,new o["a"]({store:Ne,vuetify:Ge,render:function(e){return e(Ae)}}).$mount("#app")},"8a23":function(e,t,n){}});
//# sourceMappingURL=app.96b06fc8.js.map