(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),o=c(18),a=c.n(o),r=c(19),d=c(8),u=c(4),l=c.n(u),s=c(0),b=function(e){var t=e.addSong,c=Object(n.useState)(""),i=Object(d.a)(c,2),o=i[0],a=i[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c="https://pickend.herokuapp.com".concat("/api/task-create/"),n={title:o,completed:!1};l.a.post(c,n).then((function(e){t(e.data)})).catch((function(e){return e}))},children:[Object(s.jsx)("label",{children:"add youtube url"}),Object(s.jsx)("input",{type:"text",value:o,required:!0,onChange:function(e){a(e.target.value)}}),Object(s.jsx)("input",{type:"submit",value:"add URL"})]})},j=function(e){var t=e.embedId;return Object(s.jsx)("div",{className:"video-responsive",children:Object(s.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},p="https://pickend.herokuapp.com";function h(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){l.a.get(p.concat("/api/task-list/")).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Youtube Embed"}),Object(s.jsx)("div",{children:c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("li",{style:{display:"inline-block"},children:[e.title," "]}),Object(s.jsx)(j,{embedId:e.title}),Object(s.jsx)("button",{onClick:function(){return function(e){var t=p.concat("/api/task-delete/"+e+"/");l.a.delete(t).then((function(t){i(c.filter((function(t){return t.id!==e})))})).catch((function(e){console.log(e)}))}(e.id)},children:"Delete"})]},e.id)}))}),Object(s.jsx)(b,{addSong:function(e){console.log(e),i([].concat(Object(r.a)(c),[{id:e.id,title:e.title,completed:e.completed}]))}})]})}a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.08724d6e.chunk.js.map