(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],s=0,f=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},d=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"046f":function(t,e,o){},"3a93":function(t,e,o){"use strict";var n=o("046f"),r=o.n(n);r.a},5502:function(t,e,o){"use strict";var n=o("c29b"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},d=[],i=(o("99af"),o("4de4"),o("2909")),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},c=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},u=[],s={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},f=s,p=(o("3a93"),o("2877")),m=Object(p["a"])(f,l,u,!1,null,"409b77a8",null),v=m.exports,h={name:"Todos",components:{TodoItem:v},props:["todos"]},b=h,T=Object(p["a"])(b,a,c,!1,null,"2bfc2b30",null),_=T.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("TodoList")])])}],g={name:"Header"},j=g,x=(o("8f2d"),Object(p["a"])(j,y,O,!1,null,"0b0a60ca",null)),w=x.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},k=[],P=o("ec26"),E={name:"addTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:Object(P["a"])(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},S=E,C=(o("5502"),Object(p["a"])(S,$,k,!1,null,"209c66ef",null)),A=C.exports,M={name:"App",components:{Todos:_,Header:w,AddTodo:A},data:function(){return{todos:[{id:1,title:"Todo One",completed:!1},{id:2,title:"Todo Two",completed:!0},{id:3,title:"Todo Three",completed:!1}]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){this.todos=[].concat(Object(i["a"])(this.todos),[t])}}},H=M,I=(o("034f"),Object(p["a"])(H,r,d,!1,null,null,null)),J=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"85ec":function(t,e,o){},"8f2d":function(t,e,o){"use strict";var n=o("e5da"),r=o.n(n);r.a},c29b:function(t,e,o){},e5da:function(t,e,o){}});
//# sourceMappingURL=app.2f1da979.js.map