(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),l=(n(12),n(6)),i=n(2),u=(n(13),function(e){var t=e.children;return c.a.createElement("div",{className:"TodoTemplate"},c.a.createElement("div",{className:"app-title"},"Todo"),c.a.createElement("div",{className:"content"},t))}),s=n(1),m=(n(14),function(e){var t=e.onInsert,n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],l=o[1],u=Object(a.useCallback)((function(e){l(e.target.value)}),[]),m=Object(a.useCallback)((function(e){t(r),l(""),e.preventDefault()}),[t,r]);return c.a.createElement("form",{className:"TodoInsert",onSubmit:m},c.a.createElement("input",{placeholder:"Input Todo",value:r,onChange:u}),c.a.createElement("button",{type:"submit"},c.a.createElement(s.a,null)))}),d=n(5),f=n.n(d),v=(n(15),function(e){var t=e.todo,n=e.onRemove,a=e.onToggle,o=t.id,r=t.text,l=t.checked;return c.a.createElement("div",{className:"TodoListItem"},c.a.createElement("div",{className:f()("checkbox",{checked:l}),onClick:function(){return a(o)}},l?c.a.createElement(s.b,null):c.a.createElement(s.c,null),c.a.createElement("div",{className:"text"},r)),c.a.createElement("div",{className:"remove",onClick:function(){return n(o)}},c.a.createElement(s.d,null)))}),b=(n(16),function(e){var t=e.todos,n=e.onRemove,a=e.onToggle;return c.a.createElement("div",{className:"TodoList"},t.map((function(e){return c.a.createElement(v,{todo:e,key:e.id,onRemove:n,onToggle:a})})))}),p=function(){var e=Object(a.useState)([{id:1,text:"React Basic",checked:!0},{id:2,text:"Component Styling",checked:!0},{id:3,text:"Todo App",checked:!1}]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useRef)(4),s=Object(a.useCallback)((function(e){var t={id:r.current,text:e,checked:!1};o(n.concat(t)),r.current+=1}),[n]),d=Object(a.useCallback)((function(e){o(n.filter((function(t){return t.id!==e})))}),[n]),f=Object(a.useCallback)((function(e){o(n.map((function(t){return t.id===e?Object(l.a)({},t,{checked:!t.checked}):t})))}),[n]);return c.a.createElement(u,null,c.a.createElement(m,{onInsert:s}),c.a.createElement(b,{todos:n,onRemove:d,onToggle:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.41024c79.chunk.js.map