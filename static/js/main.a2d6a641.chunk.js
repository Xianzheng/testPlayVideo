(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{48:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(20),o=c.n(a),r=c(21),d=c(8),u=c(0),s=c(7),l=c.n(s),b=function(e){var t=e.addSong,c=Object(n.useState)(""),i=Object(d.a)(c,2),a=i[0],o=i[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={title:a,completed:!1};l.a.post("http://127.0.0.1:8000/api/task-create/",c).then((function(e){t(e.data)})).catch((function(e){return e}))},children:[Object(u.jsx)("label",{children:"add youtube url"}),Object(u.jsx)("input",{type:"text",value:a,required:!0,onChange:function(e){o(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"add URL"})]})},j=(c(45),function(e){var t=e.embedId;return Object(u.jsx)("div",{className:"video-responsive",children:Object(u.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})});function p(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){l.a.get("http://127.0.0.1:8000/api/task-list/").then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Youtube Embed"}),Object(u.jsx)(j,{embedId:"NdwFmtLgDVU"}),Object(u.jsx)("div",{children:c.map((function(e){return Object(u.jsx)("li",{children:e.title},e.id)}))}),Object(u.jsx)(b,{addSong:function(e){console.log(e),i([].concat(Object(r.a)(c),[{id:e.id,title:e.title,completed:e.completed}]))}})]})}o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a2d6a641.chunk.js.map