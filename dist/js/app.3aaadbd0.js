(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],r=0,v=[];r<i.length;r++)s=i[r],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(v.length)v.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},l=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/capture-event/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[[n("v-list-item")],e._l(e.menuList,(function(t){var a=t[0],o=t[1];return n("v-list",{key:o,attrs:{dense:""}},[n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(a))])],1),n("v-list-item-content",[n("v-list-item-title",e._g({},l),[e._v(e._s(o))])],1)],1)]}}],null,!0)},[n("span",[e._v(e._s(o))])])],1)}))],2),n("v-app-bar",{attrs:{app:"",color:"rgb(4,96,237)",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.title))])],1),n("v-content",[n("CaptureMovementEvent")],1),n("v-footer",{staticClass:"justify-center",attrs:{color:"rgb(4,96,237)",app:""}},[n("span",{staticClass:"white--text"},[e._v("OneOperation © 2020")])])],1)},l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("CaptureMovementEventHeader")],1)],1),n("v-row",[n("v-col",[n("CaptureMovementEventDetail")],1)],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{attrs:{hover:"",accordion:!0,flat:!0,focusable:!0,tile:!0,value:0}},[n("v-expansion-panel",{staticStyle:{border:"1px solid #CFD8DC"}},[n("v-expansion-panel-header",{staticClass:"blue-grey darken-1 ma-0",attrs:{ripple:!0},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"white"}},[e._v("$expand")])]},proxy:!0}])},[n("span",{staticClass:"white--text subtitle-1"},[e._v("Capture Movement Event")])]),n("v-expansion-panel-content",{staticClass:"py-2"},[n("CaptureMovementEventHeaderItem")],1)],1)],1)},c=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CaptureMovementEventCommonValues")},r=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.commonValuesChoices,(function(t){var a=t.eqpList,o=t.ladenEmptyList,l=t.conditionList,s=t.vgmMethodList,i=t.authTypeList,u=t.eventTypeList,c=t.sealTypeList,m=t.facilityList;return n("div",{key:m.length},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{maxlength:"20",label:"Customer"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.customer,callback:function(t){e.$set(e.commonValues,"customer",t)},expression:"commonValues.customer"}}),n("v-select",{attrs:{items:a,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eqpType,callback:function(t){e.$set(e.commonValues,"eqpType",t)},expression:"commonValues.eqpType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"Authorization Number"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.authNo,callback:function(t){e.$set(e.commonValues,"authNo",t)},expression:"commonValues.authNo"}}),n("v-select",{attrs:{items:s,"menu-props":{maxHeight:"400"},label:"VGM Method","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmMethod,callback:function(t){e.$set(e.commonValues,"vgmMethod",t)},expression:"commonValues.vgmMethod"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Event Date",readonly:""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}},a))]}}],null,!0),model:{value:e.menu2Event,callback:function(t){e.menu2Event=t},expression:"menu2Event"}},[n("v-date-picker",{on:{input:function(t){e.menu2Event=!1}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}})],1),n("v-select",{attrs:{items:l,"menu-props":{maxHeight:"400"},label:"Equipment Condition","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.condition,callback:function(t){e.$set(e.commonValues,"condition",t)},expression:"commonValues.condition"}}),n("v-select",{attrs:{items:i,"menu-props":{maxHeight:"400"},label:"Authorization Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.authType,callback:function(t){e.$set(e.commonValues,"authType",t)},expression:"commonValues.authType"}}),n("v-select",{attrs:{items:u,"menu-props":{maxHeight:"400"},label:"Event Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.eventType,callback:function(t){e.$set(e.commonValues,"eventType",t)},expression:"commonValues.eventType"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"VGM Date",readonly:""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}},a))]}}],null,!0),model:{value:e.menu2Vgm,callback:function(t){e.menu2Vgm=t},expression:"menu2Vgm"}},[n("v-date-picker",{on:{input:function(t){e.menu2Vgm=!1}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}})],1),n("v-text-field",{attrs:{maxlength:"20",label:"Carrier"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.carrier,callback:function(t){e.$set(e.commonValues,"carrier",t)},expression:"commonValues.carrier"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Responsible Party"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmResParty,callback:function(t){e.$set(e.commonValues,"vgmResParty",t)},expression:"commonValues.vgmResParty"}}),n("v-select",{attrs:{items:m,"menu-props":{maxHeight:"400"},label:"Facility","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.facility,callback:function(t){e.$set(e.commonValues,"facility",t)},expression:"commonValues.facility"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{items:o,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.ladenEmpty,callback:function(t){e.$set(e.commonValues,"ladenEmpty",t)},expression:"commonValues.ladenEmpty"}}),n("v-select",{attrs:{items:c,"menu-props":{maxHeight:"400"},label:"Seal Type","persistent-hint":""},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.sealType,callback:function(t){e.$set(e.commonValues,"sealType",t)},expression:"commonValues.sealType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Authorized Official"},on:{change:function(t){return e.applyCommonValues(e.commonValues)}},model:{value:e.commonValues.vgmOfficial,callback:function(t){e.$set(e.commonValues,"vgmOfficial",t)},expression:"commonValues.vgmOfficial"}})],1)],1),n("v-row",[n("v-btn",{staticClass:"ma-2",attrs:{small:"",tile:"",outlined:"",color:"blue-grey darken-1"},on:{click:e.reset}},[e._v("Clear Common Values")])],1)],1)})),0)},p=[],d=n("2f62"),f={name:"CaptureMovementEventCommonValues",created(){this.fetchCommonValuesList()},computed:{...Object(d["c"])(["commonValuesChoices"])},methods:{...Object(d["b"])(["fetchCommonValuesList","applyCommonValues","resetCommonValues"]),reset(e){e.preventDefault(),this.resetCommonValues()}},data(){return{menu2Event:!1,menu2Vgm:!1,commonValues:{customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}}}},y=f,V=n("2877"),h=n("6544"),g=n.n(h),b=n("8336"),x=n("62ad"),k=n("2e4b"),T=n("e449"),C=n("0fd9"),E=n("b974"),M=n("8654"),_=Object(V["a"])(y,v,p,!1,null,null,null),D=_.exports;g()(_,{VBtn:b["a"],VCol:x["a"],VDatePicker:k["a"],VMenu:T["a"],VRow:C["a"],VSelect:E["a"],VTextField:M["a"]});var O={name:"CaptureMovementEventHeaderItem",components:{CaptureMovementEventCommonValues:D}},$=O,w=Object(V["a"])($,m,r,!1,null,null,null),R=w.exports,S={name:"CaptureMovementEventHeader",components:{CaptureMovementEventHeaderItem:R},data(){return{}}},A=S,P=n("cd55"),q=n("49e2"),L=n("c865"),N=n("0393"),j=n("132d"),H=Object(V["a"])(A,u,c,!1,null,null,null),I=H.exports;g()(H,{VExpansionPanel:P["a"],VExpansionPanelContent:q["a"],VExpansionPanelHeader:L["a"],VExpansionPanels:N["a"],VIcon:j["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CaptureMovementEventDetailItem")],1)},K=[],G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-btn",{staticClass:"mr-2",attrs:{disabled:e.commonValues.length<1,small:"",tile:"",outlined:"",color:"teal lighten-1"},on:{click:e.clickAddRows}},[e._v("Add Common Values")]),n("v-btn",{staticClass:"mr-2",attrs:{disabled:e.events.length<1,small:"",tile:"",color:"primary"},on:{click:e.clickSubmit}},[e._v("Submit Events")]),n("v-text-field",{attrs:{label:"Paste events here...",id:"contentPasted",type:"text"},on:{paste:e.clickContentPaste},model:{value:e.contentPaste,callback:function(t){e.contentPaste=t},expression:"contentPaste"}})],1),n("br"),n("v-data-table",{attrs:{headers:e.headers,items:e.inputtedEvents},scopedSlots:e._u([{key:"item.action",fn:function(t){var a=t.item;return[n("v-icon",{attrs:{small:"",color:"error"},on:{click:function(t){return e.clickDeleteItem(a.dumbKey)}}},[e._v("mdi-delete")])]}},{key:"item.customer",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.customer},on:{"update:returnValue":function(n){return e.$set(t.item,"customer",n)},"update:return-value":function(n){return e.$set(t.item,"customer",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.customer,callback:function(n){e.$set(t.item,"customer",n)},expression:"props.item.customer"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.customer)+" ")])]}},{key:"item.eqpType",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.eqpType},on:{"update:returnValue":function(n){return e.$set(t.item,"eqpType",n)},"update:return-value":function(n){return e.$set(t.item,"eqpType",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.eqpType,callback:function(n){e.$set(t.item,"eqpType",n)},expression:"props.item.eqpType"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.eqpType)+" ")])]}},{key:"item.authNo",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.authNo},on:{"update:returnValue":function(n){return e.$set(t.item,"authNo",n)},"update:return-value":function(n){return e.$set(t.item,"authNo",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.authNo,callback:function(n){e.$set(t.item,"authNo",n)},expression:"props.item.authNo"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.authNo)+" ")])]}},{key:"item.vgmMethod",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.vgmMethod},on:{"update:returnValue":function(n){return e.$set(t.item,"vgmMethod",n)},"update:return-value":function(n){return e.$set(t.item,"vgmMethod",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.vgmMethod,callback:function(n){e.$set(t.item,"vgmMethod",n)},expression:"props.item.vgmMethod"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.vgmMethod)+" ")])]}},{key:"item.eventDate",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.eventDate},on:{"update:returnValue":function(n){return e.$set(t.item,"eventDate",n)},"update:return-value":function(n){return e.$set(t.item,"eventDate",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.eventDate,callback:function(n){e.$set(t.item,"eventDate",n)},expression:"props.item.eventDate"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.eventDate)+" ")])]}},{key:"item.condition",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.condition},on:{"update:returnValue":function(n){return e.$set(t.item,"condition",n)},"update:return-value":function(n){return e.$set(t.item,"condition",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.condition,callback:function(n){e.$set(t.item,"condition",n)},expression:"props.item.condition"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.condition)+" ")])]}},{key:"item.authType",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.authType},on:{"update:returnValue":function(n){return e.$set(t.item,"authType",n)},"update:return-value":function(n){return e.$set(t.item,"authType",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.authType,callback:function(n){e.$set(t.item,"authType",n)},expression:"props.item.authType"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.authType)+" ")])]}},{key:"item.eventType",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.eventType},on:{"update:returnValue":function(n){return e.$set(t.item,"eventType",n)},"update:return-value":function(n){return e.$set(t.item,"eventType",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.eventType,callback:function(n){e.$set(t.item,"eventType",n)},expression:"props.item.eventType"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.eventType)+" ")])]}},{key:"item.vgmDate",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.vgmDate},on:{"update:returnValue":function(n){return e.$set(t.item,"vgmDate",n)},"update:return-value":function(n){return e.$set(t.item,"vgmDate",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.vgmDate,callback:function(n){e.$set(t.item,"vgmDate",n)},expression:"props.item.vgmDate"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.vgmDate)+" ")])]}},{key:"item.carrier",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.carrier},on:{"update:returnValue":function(n){return e.$set(t.item,"carrier",n)},"update:return-value":function(n){return e.$set(t.item,"carrier",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.carrier,callback:function(n){e.$set(t.item,"carrier",n)},expression:"props.item.carrier"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.carrier)+" ")])]}},{key:"item.facility",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.facility},on:{"update:returnValue":function(n){return e.$set(t.item,"facility",n)},"update:return-value":function(n){return e.$set(t.item,"facility",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.facility,callback:function(n){e.$set(t.item,"facility",n)},expression:"props.item.facility"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.facility)+" ")])]}},{key:"item.vgmResParty",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.vgmResParty},on:{"update:returnValue":function(n){return e.$set(t.item,"vgmResParty",n)},"update:return-value":function(n){return e.$set(t.item,"vgmResParty",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.vgmResParty,callback:function(n){e.$set(t.item,"vgmResParty",n)},expression:"props.item.vgmResParty"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.vgmResParty)+" ")])]}},{key:"item.ladenEmpty",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.ladenEmpty},on:{"update:returnValue":function(n){return e.$set(t.item,"ladenEmpty",n)},"update:return-value":function(n){return e.$set(t.item,"ladenEmpty",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.ladenEmpty,callback:function(n){e.$set(t.item,"ladenEmpty",n)},expression:"props.item.ladenEmpty"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.ladenEmpty)+" ")])]}},{key:"item.sealType",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.sealType},on:{"update:returnValue":function(n){return e.$set(t.item,"sealType",n)},"update:return-value":function(n){return e.$set(t.item,"sealType",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.sealType,callback:function(n){e.$set(t.item,"sealType",n)},expression:"props.item.sealType"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.sealType)+" ")])]}},{key:"item.vgmOfficial",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.vgmOfficial},on:{"update:returnValue":function(n){return e.$set(t.item,"vgmOfficial",n)},"update:return-value":function(n){return e.$set(t.item,"vgmOfficial",n)},save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.vgmOfficial,callback:function(n){e.$set(t.item,"vgmOfficial",n)},expression:"props.item.vgmOfficial"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.vgmOfficial)+" ")])]}}])}),n("v-snackbar",{attrs:{timeout:3e3,color:e.snackColor},model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v(" "+e._s(e.snackText)+" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.snack=!1}}},[e._v("Close")])],1),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"1161px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-container",[n("CaptureMovementEventCommonValuesModal")],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.clickEditCancel}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.clickEditSave}},[e._v("Save")])],1)],1)],1)],1)],1)},F=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.commonValuesChoices,(function(t){var a=t.eqpList,o=t.ladenEmptyList,l=t.conditionList,s=t.vgmMethodList,i=t.authTypeList,u=t.eventTypeList,c=t.sealTypeList,m=t.facilityList;return n("div",{key:m.length},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{maxlength:"20",label:"Customer"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.customer,callback:function(t){e.$set(e.commonValues,"customer",t)},expression:"commonValues.customer"}}),n("v-select",{attrs:{items:a,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eqpType,callback:function(t){e.$set(e.commonValues,"eqpType",t)},expression:"commonValues.eqpType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"Authorization Number"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.authNo,callback:function(t){e.$set(e.commonValues,"authNo",t)},expression:"commonValues.authNo"}}),n("v-select",{attrs:{items:s,"menu-props":{maxHeight:"400"},label:"VGM Method","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmMethod,callback:function(t){e.$set(e.commonValues,"vgmMethod",t)},expression:"commonValues.vgmMethod"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Event Date",readonly:""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}},a))]}}],null,!0),model:{value:e.menu2Event,callback:function(t){e.menu2Event=t},expression:"menu2Event"}},[n("v-date-picker",{on:{input:function(t){e.menu2Event=!1}},model:{value:e.commonValues.eventDate,callback:function(t){e.$set(e.commonValues,"eventDate",t)},expression:"commonValues.eventDate"}})],1),n("v-select",{attrs:{items:l,"menu-props":{maxHeight:"400"},label:"Equipment Condition","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.condition,callback:function(t){e.$set(e.commonValues,"condition",t)},expression:"commonValues.condition"}}),n("v-select",{attrs:{items:i,"menu-props":{maxHeight:"400"},label:"Authorization Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.authType,callback:function(t){e.$set(e.commonValues,"authType",t)},expression:"commonValues.authType"}}),n("v-select",{attrs:{items:u,"menu-props":{maxHeight:"400"},label:"Event Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.eventType,callback:function(t){e.$set(e.commonValues,"eventType",t)},expression:"commonValues.eventType"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"VGM Date",readonly:""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}},a))]}}],null,!0),model:{value:e.menu2Vgm,callback:function(t){e.menu2Vgm=t},expression:"menu2Vgm"}},[n("v-date-picker",{on:{input:function(t){e.menu2Vgm=!1}},model:{value:e.commonValues.vgmDate,callback:function(t){e.$set(e.commonValues,"vgmDate",t)},expression:"commonValues.vgmDate"}})],1),n("v-text-field",{attrs:{maxlength:"20",label:"Carrier"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.carrier,callback:function(t){e.$set(e.commonValues,"carrier",t)},expression:"commonValues.carrier"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Responsible Party"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmResParty,callback:function(t){e.$set(e.commonValues,"vgmResParty",t)},expression:"commonValues.vgmResParty"}}),n("v-select",{attrs:{items:m,"menu-props":{maxHeight:"400"},label:"Facility","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.facility,callback:function(t){e.$set(e.commonValues,"facility",t)},expression:"commonValues.facility"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{items:o,"menu-props":{maxHeight:"400"},label:"Equipment Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.ladenEmpty,callback:function(t){e.$set(e.commonValues,"ladenEmpty",t)},expression:"commonValues.ladenEmpty"}}),n("v-select",{attrs:{items:c,"menu-props":{maxHeight:"400"},label:"Seal Type","persistent-hint":""},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.sealType,callback:function(t){e.$set(e.commonValues,"sealType",t)},expression:"commonValues.sealType"}}),n("v-text-field",{attrs:{maxlength:"20",label:"VGM Authorized Official"},on:{change:function(t){return e.clickApplyCommonValuesModal()}},model:{value:e.commonValues.vgmOfficial,callback:function(t){e.$set(e.commonValues,"vgmOfficial",t)},expression:"commonValues.vgmOfficial"}})],1)],1),n("v-row",[n("v-btn",{staticClass:"ma-2",attrs:{small:"",tile:"",outlined:"",color:"blue-grey darken-1"},on:{click:e.reset}},[e._v("Clear Common Values ")])],1)],1)})),0)},W=[],B={name:"CaptureMovementEventCommonValuesModal",created(){this.fetchCommonValuesList()},computed:{...Object(d["c"])(["commonValuesChoices","commonValuesModal"])},methods:{...Object(d["b"])(["fetchCommonValuesList","applyCommonValuesModal"]),reset(){for(let e in this.commonValues)this.commonValues[e]=""},clickApplyCommonValuesModal(){this.applyCommonValuesModal(this.commonValues)}},data(){return{menu2Event:!1,menu2Vgm:!1,commonValues:{customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}}}},J=B,Y=Object(V["a"])(J,z,W,!1,null,null,null),Q=Y.exports;g()(Y,{VBtn:b["a"],VCol:x["a"],VDatePicker:k["a"],VMenu:T["a"],VRow:C["a"],VSelect:E["a"],VTextField:M["a"]});var X={name:"CaptureMovementEventDetailItem",components:{CaptureMovementEventCommonValuesModal:Q},computed:{...Object(d["c"])(["commonValuesChoices","commonValues","inputtedEvents","events"]),isDisabled(){return 0===this.selected.length}},methods:{...Object(d["b"])(["addRows","resetCommonValues","resetRows","removeRows","editRows","applyCommonValues","resetCommonValuesModal","removeItem"]),clickAddRows(){this.addRows(5)},clickEditCancel(){this.dialog=!1,this.resetCommonValuesModal()},clickEditSave(){this.editRows(this.selected),this.selected=[],this.dialog=!1,this.resetCommonValuesModal()},clickResetRows(){0!==this.selected.length&&(this.resetRows(this.selected),this.selected=[])},clickRemove(){0!==this.selected.length&&(this.removeRows(this.selected),this.selected=[])},clickEditRows(){0!==this.selected.length&&(this.dialog=!0)},clickContentPaste(e){let t=e.clipboardData,n=t.getData("text/plain"),a=n.split("\n");a.forEach(e=>{if(e){let t=e.split("\t"),n={customer:t[0],eqpType:t[1],authNo:t[2],vgmMethod:t[3],eventDate:t[4],condition:t[5],authType:t[6],eventType:t[7],vgmDate:t[8],carrier:t[9],facility:t[10],vgmResParty:t[11],ladenEmpty:t[12],sealType:t[13],vgmOfficial:t[14]};this.events.unshift(n)}})},clickSubmit(){this.snack=!0,this.snackColor="success",this.snackText="Events submitted"},save(){this.snack=!0,this.snackColor="info",this.snackText="Saved"},cancel(){this.snack=!0,this.snackColor="warning",this.snackText="Canceled"},delete(){this.snack=!0,this.snackColor="error",this.snackText="Event deleted"},clickDeleteItem(e){let t=confirm("Are you sure you want to delete this item?");t&&(this.removeItem(e),this.delete())}},data(){return{snack:!1,snackColor:"",snackText:"",singleSelect:!1,dialog:!1,selected:[],contentPaste:[],headers:[{text:"Action",value:"action"},{text:"Customer",value:"customer"},{text:"Equipment Type",value:"eqpType"},{text:"Authorization Number",value:"authNo"},{text:"VGM Method",value:"vgmMethod"},{text:"Event Date",value:"eventDate"},{text:"Equipment Condition",value:"condition"},{text:"Authorization Type",value:"authType"},{text:"Event Type",value:"eventType"},{text:"VGM Date",value:"vgmDate"},{text:"Carrier",value:"carrier"},{text:"VGM Responsible Party",value:"facility"},{text:"Facility",value:"vgmResParty"},{text:"Equipment Type",value:"ladenEmpty"},{text:"Seal Type",value:"sealType"},{text:"VGM Authorized Official",value:"vgmOfficial"}]}}},Z=X,ee=n("b0af"),te=n("99d9"),ne=n("a523"),ae=n("8fea"),oe=n("169a"),le=n("7679"),se=n("2db4"),ie=n("2fa4"),ue=Object(V["a"])(Z,G,F,!1,null,null,null),ce=ue.exports;g()(ue,{VBtn:b["a"],VCard:ee["a"],VCardActions:te["a"],VCardText:te["b"],VContainer:ne["a"],VDataTable:ae["a"],VDialog:oe["a"],VEditDialog:le["a"],VIcon:j["a"],VRow:C["a"],VSnackbar:se["a"],VSpacer:ie["a"],VTextField:M["a"]});var me={name:"CaptureMovementEventDetail",components:{CaptureMovementEventDetailItem:ce},methods:{...Object(d["b"])(["addRows","resetRows"])},data(){return{}}},re=me,ve=Object(V["a"])(re,U,K,!1,null,null,null),pe=ve.exports,de={name:"CaptureMovementEvent",components:{CaptureMovementEventHeader:I,CaptureMovementEventDetail:pe}},fe=de,ye=Object(V["a"])(fe,s,i,!1,null,null,null),Ve=ye.exports;g()(ye,{VCol:x["a"],VContainer:ne["a"],VRow:C["a"]});var he={name:"App",components:{CaptureMovementEvent:Ve},data:()=>({drawer:!0,title:"Smart Vendor Platform",menuList:[["mdi-home","Capture Movement Event"],["mdi-home","Capture Creation/Termination Event"],["mdi-home","Event Enquiry"],["mdi-home","Booking Enquiry"]]})},ge=he,be=(n("034f"),n("7496")),xe=n("40dc"),ke=n("5bc1"),Te=n("a75b"),Ce=n("553a"),Ee=n("8860"),Me=n("da13"),_e=n("1800"),De=n("5d23"),Oe=n("f774"),$e=n("2a7f"),we=n("3a2f"),Re=Object(V["a"])(ge,o,l,!1,null,null,null),Se=Re.exports;g()(Re,{VApp:be["a"],VAppBar:xe["a"],VAppBarNavIcon:ke["a"],VContent:Te["a"],VFooter:Ce["a"],VIcon:j["a"],VList:Ee["a"],VListItem:Me["a"],VListItemAction:_e["a"],VListItemContent:De["a"],VListItemTitle:De["b"],VNavigationDrawer:Oe["a"],VToolbarTitle:$e["a"],VTooltip:we["a"]});var Ae=n("bc3a"),Pe=n.n(Ae);const qe={commonValuesChoices:[],commonValues:[],commonValuesModal:[],events:[]},Le={commonValuesChoices:e=>e.commonValuesChoices,commonValues:e=>e.commonValues,commonValuesModal:e=>e.commonValuesModal,inputtedEvents:e=>{for(event of e.events)event.dumbKey=(new Date).getFullYear()+(new Date).getMilliseconds()+(new Date).getTime()+e.events.indexOf(event),event.customer=event.customer?event.customer:e.commonValues.customer,event.eqpType=event.eqpType?event.eqpType:e.commonValues.eqpType,event.authNo=event.authNo?event.authNo:e.commonValues.authNo,event.vgmMethod=event.vgmMethod?event.vgmMethod:e.commonValues.vgmMethod,event.eventDate=event.eventDate?event.eventDate:e.commonValues.eventDate,event.condition=event.condition?event.condition:e.commonValues.condition,event.authType=event.authType?event.authType:e.commonValues.authType,event.eventType=event.eventType?event.eventType:e.commonValues.eventType,event.vgmDate=event.vgmDate?event.vgmDate:e.commonValues.vgmDate,event.carrier=event.carrier?event.carrier:e.commonValues.carrier,event.facility=event.facility?event.facility:e.commonValues.facility,event.vgmResParty=event.vgmResParty?event.vgmResParty:e.commonValues.vgmResParty,event.ladenEmpty=event.ladenEmpty?event.ladenEmpty:e.commonValues.ladenEmpty,event.sealType=event.sealType?event.sealType:e.commonValues.sealType,event.vgmOfficial=event.vgmOfficial?event.vgmOfficial:e.commonValues.vgmOfficial;return e.events},events:e=>e.events},Ne={async fetchCommonValuesList({commit:e}){const t=await Pe.a.get("dummyData.json");e("FETCH_COMMONVALUESCHOICES",t.data)},applyCommonValues({commit:e},t){e("UPDATE_COMMONVALUES",t)},resetCommonValues({commit:e}){for(let t in qe.commonValues)qe.commonValues[t]="";qe.commonValues=[],e("UPDATE_COMMONVALUES",qe.commonValues)},applyCommonValuesModal({commit:e},t){e("UPDATE_COMMONVALUESMODAL",t)},resetCommonValuesModal({commit:e}){for(let t in qe.commonValuesModal)qe.commonValuesModal[t]="";qe.commonValuesModal=[],e("UPDATE_COMMONVALUESMODAL",qe.commonValuesModal)},addRows({commit:e},t){if(!(t<1)){while(0!==t)qe.events.unshift({dumbKey:"",customer:"",eqpType:"",authNo:"",vgmMethod:"",eventDate:"",condition:"",authType:"",eventType:"",vgmDate:"",carrier:"",facility:"",vgmResParty:"",ladenEmpty:"",sealType:"",vgmOfficial:""}),t--;e("ADD_ROWS",qe.events)}},removeRows({commit:e},t){if(t.length<1)return;let n=[],a=[];Object.values(qe.events).map(e=>n.push(e.dumbKey)),Object.values(t).map(e=>a.push(e.dumbKey));const o=n.filter(e=>!a.some(t=>e===t));let l=qe.events.filter(e=>o.includes(e.dumbKey));e("REMOVE_ROWS",l)},removeItem({commit:e},t){let n=qe.events.filter(e=>e.dumbKey!==t);e("REMOVE_ROWS",n)},resetRows({dispatch:e},t){t.length<1||e("editAdaptor",{checked:t,cvalues:qe.commonValues})},editRows({dispatch:e},t){t.length<1||e("editAdaptor",{checked:t,cvalues:qe.commonValuesModal})},editAdaptor({commit:e},t){const{checked:n,cvalues:a}=t;let o=[],l=[];const{dumbKey:s,customer:i,eqpType:u,authNo:c,vgmMethod:m,eventDate:r,condition:v,authType:p,eventType:d,vgmDate:f,carrier:y,facility:V,vgmResParty:h,ladenEmpty:g,sealType:b,vgmOfficial:x}=a;Object.values(qe.events).map(e=>o.push(e.dumbKey)),Object.values(n).map(e=>l.push(e.dumbKey)),qe.events.map((e,t)=>{l.includes(e.dumbKey)&&(e.dumbKey=e.dumbKey,e.customer=i||e.customer,e.eqpType=u||e.eqpType,e.authNo=c||e.authNo,e.vgmMethod=m||e.vgmMethod,e.eventDate=r||e.eventDate,e.condition=v||e.condition,e.authType=p||e.authType,e.eventType=d||e.eventType,e.vgmDate=f||e.vgmDate,e.carrier=y||e.carrier,e.facility=V||e.facility,e.vgmResParty=h||e.vgmResParty,e.ladenEmpty=g||e.ladenEmpty,e.sealType=b||e.sealType,e.vgmOfficial=x||e.vgmOfficial)}),e("EDIT_ROWS",qe.events)}},je={FETCH_COMMONVALUESCHOICES:(e,t)=>{e.commonValuesChoices=t},UPDATE_COMMONVALUES:(e,t)=>{e.commonValues=t},UPDATE_COMMONVALUESMODAL:(e,t)=>{e.commonValuesModal=t},ADD_ROWS:(e,t)=>{e.events=t},REMOVE_ROWS:(e,t)=>{e.events=t},EDIT_ROWS:(e,t)=>{e.events=t}};var He={state:qe,getters:Le,actions:Ne,mutations:je};a["a"].use(d["a"]);var Ie=new d["a"].Store({modules:{movementEvents:He}}),Ue=n("f309");a["a"].use(Ue["a"]);var Ke=new Ue["a"]({});a["a"].config.productionTip=!1,new a["a"]({store:Ie,vuetify:Ke,render:function(e){return e(Se)}}).$mount("#app")},"8a23":function(e,t,n){}});
//# sourceMappingURL=app.3aaadbd0.js.map