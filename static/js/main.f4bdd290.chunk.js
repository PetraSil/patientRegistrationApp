(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,n){e.exports=n(67)},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=n(10),i=n(14),u=n(9),p=n(31),s=n(32),m=n(35),E={loading:!1,patients:[],error:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PATIENTS_REQUEST":return Object(m.a)({},e,{loading:!0});case"FETCH_PATIENTS_SUCCESS":return{loading:!1,patients:t.payload,error:""};case"FETCH_PATIENTS_FAILURE":return{loading:!1,patients:[],error:t.payload};default:return e}},f=Object(u.combineReducers)({patient:d}),_=Object(u.createStore)(f,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(p.a))),h=n(33),g=n.n(h),T=function(){return{type:"FETCH_PATIENTS_REQUEST"}},y=function(e){var t=e.content;return r.a.createElement("div",{className:"block__patient"},t)},S=Object(i.b)((function(e){return{patientData:e.patient}}),(function(e){return{fetchPatients:function(){return e((function(e){e(T),g.a.get("http://localhost:8000/api/getPatients").then((function(t){var n=t.data;console.log(n),e(function(e){return{type:"FETCH_PATIENTS_SUCCESS",payload:e}}(n))})).catch((function(t){var n=t.message;e(function(e){return{type:"FETCH_PATIENTS_FAILURE",payload:e}}(n))}))}))}}}))((function(e){var t=e.patientData,n=e.fetchPatients;return Object(a.useEffect)((function(){n()}),[]),t.loading?r.a.createElement("h2",null,"Loading"):t.error?r.a.createElement("h2",null,t.error):r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Patient List"),r.a.createElement("div",null,t.patients&&t.patients.map((function(e){return r.a.createElement(y,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"".concat(e.firstName," ").concat(e.lastName)),r.a.createElement("h3",null,e.socialSecurityNumber))})}))))})),b=(n(62),n(63),n(64),function(e){var t=e.content;return r.a.createElement("button",{type:"submit"},t)}),v=function(){return r.a.createElement("div",{className:" page page__login"},r.a.createElement("section",{className:"page__login_section"},r.a.createElement("div",{className:"page__login_section_intro"},r.a.createElement("h1",null,"MYRA"),r.a.createElement("p",null,'"The modern, streamlined way of tracking and reporting your patient work."')),r.a.createElement("form",null,r.a.createElement("label",{for:"input__username"},"USERNAME"),r.a.createElement("input",{type:"text",placeholder:"Input your username",id:"input__username",required:!0}),r.a.createElement("label",{for:"input__password"},"PASSWORD"),r.a.createElement("input",{type:"password",placeholder:"Input your password",id:"input__password",required:!0}),r.a.createElement("div",null,r.a.createElement(b,{content:"LOGIN"}),r.a.createElement("a",null,"Forgot your password?")))))},N=function(){return r.a.createElement("div",null,"Home")},A=function(){return r.a.createElement(i.a,{store:_},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:v}),r.a.createElement(l.a,{path:"/home",component:N}),r.a.createElement(l.a,{path:"/patients",component:S})))},I=(n(66),n(16));o.a.render(r.a.createElement(I.a,{basename:"/"},r.a.createElement(A,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f4bdd290.chunk.js.map