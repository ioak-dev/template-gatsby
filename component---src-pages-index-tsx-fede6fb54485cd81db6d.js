(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/T1x":function(e,a,t){},D6QE:function(e,a,t){},GrZB:function(e,a,t){},HxC6:function(e,a,t){},NDxd:function(e,a,t){e.exports=t.p+"static/taskview-bee14602595ecd0226258923ddb3b80d.jpg"},QeBL:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),r=t("vrFN"),i=(t("Y+83"),t("TZXa")),c=t("UdF0"),l=t.n(c),s=t("Yax/"),d=t.n(s),u=t("NDxd"),m=t.n(u);function p(){return o.a.createElement("div",{className:"app-preview"},o.a.createElement("div",{className:"app-preview--container"},o.a.createElement("img",{className:"preview-mobile desktop-only",src:m.a,alt:"Janus board view"}),o.a.createElement("img",{className:"preview-desktop desktop-only",src:l.a,alt:"Janus board view"}),o.a.createElement("img",{className:"preview-mobile mobile-only",src:d.a,alt:"Janus board view"})))}var f=t("RZaL"),h=(t("/T1x"),t("pWEt"),function(e){return o.a.createElement("button",{className:"oak-button "+function(){var a=e.theme?e.theme:"";return a+=e.darkMode?"":" light",a+=e.variant?" "+e.variant:"",e.children||(a+=" icon"),a}(),onClick:e.action},o.a.createElement("div",{className:"button-label-container"},e.faIcon&&o.a.createElement("i",{className:e.faIcon}),e.children&&e.children))});function b(e){return o.a.createElement("div",{className:"call-to-action"},o.a.createElement(h,{action:function(){return window.location.href="https://janus.ioak.org"},faIcon:e.data.faIcon,theme:"secondary",darkMode:!0,variant:"regular"},e.data.label))}function E(){return o.a.createElement("div",{className:"hero-section-group"},o.a.createElement("div",{className:"hero-section"},o.a.createElement("div",{className:"hero-section--container column-layout"},o.a.createElement(f.a,null),o.a.createElement("h1",{className:"heading--1 hero-section--container--title"},i.title),o.a.createElement("p",{className:"heading--2 hero-section--container--subtitle"},i.subtitle),o.a.createElement("div",null,o.a.createElement(b,{data:i.callToAction})))),o.a.createElement(p,null))}t("jdbl");function v(e){return o.a.createElement("div",{className:"sectiontile"},o.a.createElement("i",{className:e.data.faIcon}),o.a.createElement("h3",{className:"heading--3"},e.data.title),o.a.createElement("p",null,e.data.description))}var g=t("zUbB");function y(){return o.a.createElement("div",{className:"key-section"},o.a.createElement("div",{className:"key-section--container column-layout"},g.data.map((function(e){return o.a.createElement(v,{data:e,key:e.title})}))))}t("avjx");var w=t("ytt+");function N(){return o.a.createElement("div",{className:"demo-section"},o.a.createElement("div",{className:"column-layout"},o.a.createElement("div",{className:"demo-section--container"},o.a.createElement("div",{className:"demo-section--container-content"},o.a.createElement("h3",{className:"heading--3"},w.title),o.a.createElement("p",null,w.description)),o.a.createElement(h,{theme:"primary",variant:"drama",faIcon:w.callToAction.faIcon,action:function(){console.log("*** redirect to demo")}},w.callToAction.label))))}t("HxC6");function k(e){return o.a.createElement("div",{className:"onboard-sectiontile"},o.a.createElement("div",{className:"onboard-sectiontile--left"},o.a.createElement("span",{className:"onboard-sectiontile--left--step-number"},e.order)),o.a.createElement("div",{className:"onboard-sectiontile--right"},o.a.createElement("h3",{className:"heading--3"},e.step.title),o.a.createElement("p",null,e.step.description)))}var j=t("ctFH");function I(){var e;return o.a.createElement("div",{className:"onboard-section"},o.a.createElement("div",{className:"onboard-section--container column-layout"},o.a.createElement("h2",{className:"heading--2"},j.title),o.a.createElement("div",{className:"onboard-section--container--steps"},null===(e=j.steps)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(k,{step:e,key:e.title,order:a+1})})))))}t("tPDY");var S=t("jjYM"),x=(t("f3/d"),t("91GP"),t("GrZB"),function(e){return o.a.createElement("div",{className:"oak-text-plain"},e.label&&o.a.createElement("label",{htmlFor:e.id},e.label),!e.multiline&&o.a.createElement("input",{disabled:e.disabled,autoComplete:"off",className:(e.errorFields&&e.errorFields[e.id]?"error":"")+(e.disabled?" disabled":""),type:e.type?e.type:"text",name:e.id,id:e.id,value:e.data[e.id],onChange:e.handleChange,placeholder:e.placeholder}),e.multiline&&o.a.createElement("textarea",{disabled:e.disabled,className:(e.errorFields&&e.errorFields[e.id]?"error":"")+(e.disabled?" disabled":""),id:e.id,name:e.id,value:e.data[e.id],onChange:e.handleChange}))});function O(e){var a=Object(n.useState)({name:"",email:"",description:""}),t=a[0],r=a[1],i=function(e){var a;r(Object.assign({},t,((a={})[e.target.name]=e.target.value,a)))};return o.a.createElement("div",{className:"contact-form"},o.a.createElement("form",null,o.a.createElement(x,{id:"name",data:t,handleChange:i,label:"Name"}),o.a.createElement(x,{id:"email",data:t,handleChange:i,label:"Email"}),o.a.createElement(x,{id:"description",data:t,handleChange:i,label:"Description",multiline:!0,rows:5})),o.a.createElement("div",{className:"contact-form--action"},o.a.createElement(h,{theme:"primary",variant:"appear",faIcon:"fas fa-paper-plane",action:function(){console.log("send email to support"),console.log(t)}},"Send"),o.a.createElement(h,{theme:"default",variant:"block",faIcon:"fas fa-ban",action:e.closeForm},"Cancel")))}function J(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return o.a.createElement("div",{className:"contact-section"},o.a.createElement("div",{className:"column-layout"},o.a.createElement("div",{className:"contact-section--container"},o.a.createElement("div",{className:"contact-section--container--wrapper"},o.a.createElement("div",{className:"contact-section--container--wrapper-content"},o.a.createElement("h3",{className:"heading--3"},S.title),o.a.createElement("p",null,S.description)),!a&&o.a.createElement(h,{theme:"primary",variant:"drama",faIcon:"fas fa-paper-plane",action:function(){return t(!0)}},"Send inquiry")),a&&o.a.createElement("div",{className:"contact-section--container--form"},o.a.createElement(O,{closeForm:function(){return t(!1)}})))))}t("D6QE");function C(e){return o.a.createElement("div",{className:"sectiontile"},o.a.createElement("p",{className:"sectiontile--faq-title"},e.data.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.description}}))}var F=t("wBPi");function q(){return o.a.createElement("div",{className:"faq-section"},o.a.createElement("div",{className:"faq-section--container column-layout"},o.a.createElement("h2",{className:"heading--2 faq-section--container--title"},"Frequently asked questions"),F.data.map((function(e){return o.a.createElement(C,{data:e,key:e.title})}))))}var T=t("c1hw"),Y=t("bA9j");a.default=function(){return o.a.createElement("div",{className:"page-home"},o.a.createElement(r.a,{title:"Features and getting started"}),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement(N,null),o.a.createElement(I,null),o.a.createElement(J,null),o.a.createElement(q,null),o.a.createElement(T.a,null),o.a.createElement(Y.a,null))}},TZXa:function(e){e.exports=JSON.parse('{"title":"Free and fully featured agile tool","subtitle":"Whether you are a startup or an established business, Janus will enhance your agile project management workflow","callToAction":{"label":"Start a new project","faIcon":"fas fa-play"}}')},UdF0:function(e,a,t){e.exports=t.p+"static/boardview-93e3ec8f8d62ab25d8b106e16c0debe7.jpg"},"Y+83":function(e,a,t){},"Yax/":function(e,a,t){e.exports=t.p+"static/boardview_mobile-289b2906b2043316259f490384839504.jpg"},avjx:function(e,a,t){},ctFH:function(e){e.exports=JSON.parse('{"title":"Getting started","steps":[{"title":"Setup a space for your organization","description":"Janus is powered by Oneauth for user authentication. Get started by creating a space in Oneauth for your organization. Space can be used across all products offered by IOAK. One user account across all products and supports Single sign on (SSO)."},{"title":"Provision users","description":"Users can sign up for a user account in Oneauth by themselves. Once a user account is signed up for, you can add them to a team."},{"title":"Setup your team","description":"Create one or more teams and add members into the team, allowing them to access all projects to which the team is associated. You can create any number of teams with different members in each team. Team administrators can be configured to manage the team."},{"title":"Create a project","description":"Create a project and add one or more teams to work on the project. You can configure project administrators and an image background to the project task board."},{"title":"Define project workflow","description":"Setup different stages that symbolizes the life cycle of a task. You can move a task between these workflow stages as needed."},{"title":"Start rocking","description":"Start managing your project with Epics and different types of tasks (User Story, Task, Sub-task, Defect)."}]}')},jdbl:function(e,a,t){},jjYM:function(e){e.exports=JSON.parse('{"title":"Contact Us","description":"If you have any questions / feedback, please feel free to let us know. We will get back to you shortly"}')},pWEt:function(e,a,t){},tPDY:function(e,a,t){},wBPi:function(e){e.exports=JSON.parse('{"data":[{"title":"How do I onboard my organization to Janus?","description":"Janus is powered by Oneauth for user authentication. When you onboard your organization to use Janus, you setup a space for your organization in Oneauth. All your organization members will be part of this space that is isolated to your organization."},{"title":"How do I request for a feature that is not available currently?","description":"Janus is a free tool that is maintained by IOAK developer community. If you would like to include a feature that is not currently supported, you can contact us by sending an inquiry or post a question on our <a href=\'https://mirror.ioak.org/#/a1/post/create\' title=\'Submit feature request\'>forum</a> section. We will respond back to you on the feasibility and the expected time to add the feature."},{"title":"How do I contribute to the project, as a developer?","description":"Janus is a open source initiative and we welcome you to post your code changes as a pull request on our github repository. We will review the code and merge it to the main branch on successful testing and validation."},{"title":"Why do I not see a user that I am looking for in Janus?","description":"Once a user signs up for a user account in Oneauth, the user should login to Janus once to get the user listed within janus app. If the user has no account in Oneauth, then ask theuser to create a user account in Oneauth first."}]}')},"ytt+":function(e){e.exports=JSON.parse('{"title":"Looking for a demo?","description":"Take a live tour of the application. Explore all of the application features, in the fully functional demo space.","callToAction":{"label":"Live tour","faIcon":"fas fa-snowman"}}')},zUbB:function(e){e.exports=JSON.parse('{"data":[{"faIcon":"fas fa-palette","title":"Modern UI","description":"Sleek and clean user interface allows you to focus on the task at hand. Allows you to choose between light and dark modes based on your personal preference."},{"faIcon":"fas fa-hand-holding-usd","title":"Free","description":"This is an open community initiative and it\'s absolutely free for personal and commercial purposes. You can create as many number of projects and teams as you need without limit."},{"faIcon":"fab fa-superpowers","title":"Advanced","description":"Support for Kanban and Scrum methodologies. You can use story points or time estimates. We are continously working towards improving the application and adding new features."}]}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fede6fb54485cd81db6d.js.map