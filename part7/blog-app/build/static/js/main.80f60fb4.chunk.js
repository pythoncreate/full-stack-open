(this["webpackJsonpblog-test"]=this["webpackJsonpblog-test"]||[]).push([[0],{201:function(e,t,n){e.exports=n(355)},355:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),l=n.n(c),u=n(18),o=n(21),i=n(44),s=n(364),m=function(e){return{type:"RESET_SEARCH",search:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return t.search;case"RESET_SEARCH":return null;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DESC",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.filter;default:return e}},d=Object(u.b)((function(e){return{search:e.search,filter:e.filter}}),{searchChange:function(e){return{type:"SET_SEARCH",search:e}},filterChange:function(e){return{type:"SET_FILTER",filter:e}},clearSearch:m})((function(e){return r.a.createElement("div",{style:{marginBottom:10}},"search",r.a.createElement("input",{onChange:function(t){e.searchChange(t.target.value.toLowerCase())}}),r.a.createElement("select",{onChange:function(t){e.filterChange(t.target.value)}},r.a.createElement("option",{value:"DESC"},"Sort Likes Descending"),r.a.createElement("option",{value:"ASC"},"Sort Likes Ascending")))})),E=n(367),g=function(e){var t=e.blogs,n=e.search;return n?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):t},b={clearSearch:m},h=Object(u.b)((function(e){return{blogs:e.blogs,filter:e.filter,blogsToShow:g(e)}}),b)((function(e){var t=e.blogsToShow,n=e.filter,a=e.clearSearch,c=function(){a()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",null,r.a.createElement("h3",null,"Blogs"),r.a.createElement(o.b,{onClick:function(){return c()},to:"/newblog"},"create a new blog post"),r.a.createElement(E.a,{striped:!0,celled:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,null,"Blog Title"))),r.a.createElement(E.a.Body,null,"DESC"===n?t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(E.a.Row,{key:e.id},r.a.createElement(E.a.Cell,null,r.a.createElement(o.b,{onClick:function(){return c()},to:"/blogs/".concat(e.id)},e.title)))})):t.sort((function(e,t){return e.likes-t.likes})).map((function(e){return r.a.createElement(E.a.Row,{key:e.id},r.a.createElement(E.a.Cell,null,r.a.createElement(o.b,{onClick:function(){return c()},to:"/blogs/".concat(e.id)},e.title)))}))))))})),v=n(8),w=n.n(v),O=n(16),y=n(365),k=n(33),j=n(69),S=n(25),x=n.n(S),C="/api/blogs",T=null,U=function(){var e=Object(O.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(C+"/"+t+"/comments",{comment:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:T}},e.next=3,x.a.post(C,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(C,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B={getAll:function(){return x.a.get(C).then((function(e){return e.data}))},create:I,comment:U,updateLikes:function(){var e=Object(O.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(C,"/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),update:N,remove:function(e){var t={headers:{Authorization:T}};return x.a.delete("".concat(C,"/").concat(e.id),t).then((function(e){return e.data}))},setToken:function(e){T="bearer ".concat(e)}},_=null,R={getAll:function(){return x.a.get("/api/users").then((function(e){return e.data}))},create:function(){var e=Object(O.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:_}},e.next=3,x.a.post("/api/users",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat("/api/users","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(e){var t={headers:{Authorization:_}};return x.a.delete("".concat("/api/users","/").concat(e.id),t).then((function(e){return e.data}))},setToken:function(e){_="bearer ".concat(e)}};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return[].concat(Object(j.a)(e),[t.data]);case"DELETE_BLOG":var n=t.data;return e.filter((function(e){return e.id!==n.id}));case"ADD_COMMENT":return e.map((function(e){return e.id===t.data.id?L({},e,{comments:e.comments.concat(t.data.comment)}):e}));case"LIKE":var a=t.data.id,r=e.find((function(e){return e.id===a})),c=L({},r,{likes:r.likes});return e.map((function(e){return e.id!==a?e:c}));case"INIT_BLOGS":return t.data;default:return e}},F=function(e,t){return function(n){n({type:"SET_NOTIFICATION",data:e}),setTimeout((function(){n({type:"REMOVE_NOTIFICATION",data:null})}),1e3*t)}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return e=t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},P=n(191),z=function(e){var t=Object(a.useState)(""),n=Object(P.a)(t,2),r=n[0],c=n[1],l=function(e){c(e.target.value)};return{type:e,value:r,onChange:l,reset:function(){c("")},omitreset:{type:e,value:r,onChange:l}}},G=function(e){var t=e.history,n=e.addComment,a=e.addLike,c=e.removeBlog,l=e.setNotification,u=e.blog,o=e.user,i=z("text");if(!u)return null;var s=function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={id:u.id,comment:i.value},e.next=4,n(t);case 4:i.reset(),l("New Comment Added",4),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Sorry, couldn't submit comment.",5);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",null,r.a.createElement("h3",{id:"title"},u.title," by ",u.author),r.a.createElement("div",null,r.a.createElement("p",null,u.likes," likes"," ",r.a.createElement("button",{onClick:function(){return function(e){a(e),l("You just liked ".concat(e.title,"!"),5)}(u)}},"like")),r.a.createElement("p",null,"Added by ",u.user.name),r.a.createElement("p",null,function(){if(u.user.username===o.username)return r.a.createElement("button",{onClick:function(){return function(e){window.confirm("Do you really want to delete?")&&(c(e),t.push("/"),l("You deleted ".concat(e.title,"!"),5))}(u)}},"remove")}()),r.a.createElement(y.a,{onSubmit:s},r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},i.omitreset,{reset:null,label:"Comment"}))),r.a.createElement(y.a.Button,{type:"submit"},"add comment")),r.a.createElement("h4",null,"Comments"),r.a.createElement("p",null,u.comments?u.comments.map((function(e){return r.a.createElement("p",null,e.comment)})):r.a.createElement("p",null,"No Comments Yet")))):null)},M={addLike:function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.likes++,t.next=3,B.updateLikes(e.id,e);case 3:n({type:"LIKE",data:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeBlog:function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.remove(e);case 2:n({type:"DELETE_BLOG",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:F,addComment:function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.comment(e.id,e.comment);case 2:a=t.sent,n({type:"ADD_COMMENT",data:{id:e.id,comment:a}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}};G=Object(i.g)(G);var W=Object(u.b)((function(e){return{blogs:e.blogs,likes:e.likes,notification:e.notification}}),M)(G),Y={createBlog:function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.create(e);case 2:return a=t.sent,n({type:"NEW_BLOG",data:a}),t.next=6,R.getAll();case 6:r=t.sent,n({type:"USER_POSTED_BLOG",data:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:F},J=Object(i.g)((function(e){var t=z("text"),n=z("text"),a=z("text"),c=function(){var r=Object(O.a)(w.a.mark((function r(c){var l;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),l={url:a.value,title:t.value,author:n.value},r.next=4,e.createBlog(l);case 4:e.history.push("/blogs"),F("New Blog Created!",4);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return r.a.createElement(y.a,{onSubmit:c},r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},t,{reset:null,label:"Title",id:"title"}))),r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},n,{reset:null,label:"Author",id:"author"}))),r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},a,{reset:null,label:"URL",id:"url"}))),r.a.createElement(y.a.Button,{type:"submit"},"add blog"))})),K=Object(u.b)((function(e){return{loggedUser:e.loggedUser}}),Y)(J),V=Object(u.b)((function(e){return{users:e.users}}))((function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement("h2",{id:"title"},"Name: ",t.name),r.a.createElement("h3",{id:"title"},"Username: ",t.username),r.a.createElement("h4",null,"These are the Blogs ",t.name," has added"),r.a.createElement(E.a,{striped:!0,celled:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,null,"Blog Title"))),r.a.createElement(E.a.Body,null,t.blogs.length>0?t.blogs.map((function(e){return r.a.createElement(E.a.Row,{key:e.id},r.a.createElement(E.a.Cell,null,e.title))})):r.a.createElement("span",null,"No Blogs Added Yet!")))):null})),q=n(370),Q=n(369),X={login:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.login({username:e.username,password:e.password});case 2:a=t.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),n({type:"SET_USER",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(){return function(e){window.localStorage.removeItem("loggedBlogAppUser"),e({type:"SET_USER",data:null})}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data&&B.setToken(t.data.token),t.data;default:return e}},te={clearSearch:m,logout:$},ne=Object(u.b)((function(e){return{loggedUser:e.loggedUser}}),te)((function(e){var t=function(){e.clearSearch()};return r.a.createElement(q.a,{inverted:!0},r.a.createElement(q.a.Item,{link:!0},r.a.createElement(o.b,{onClick:function(){return t()},to:"/"},"home")),r.a.createElement(q.a.Item,{link:!0},r.a.createElement(o.b,{onClick:function(){return t()},to:"/blogs"},"blogs")),r.a.createElement(q.a.Item,{link:!0},r.a.createElement(o.b,{onClick:function(){return t()},to:"/users"},"users")),r.a.createElement(q.a.Item,{link:!0},e.loggedUser?r.a.createElement("span",null,r.a.createElement("em",null,"Hi ",e.loggedUser.name," you're logged in!")," ",r.a.createElement(Q.a,{size:"mini",onClick:function(){e.logout()}},"logout")):r.a.createElement(o.b,{onClick:function(){return t()},to:"/login"},"login")))})),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(j.a)(e),[t.data]);case"USER_POSTED_BLOG":return Object(j.a)(t.data);case"DELETE_USER":var n=t.data;return e.filter((function(e){return e.id!==n.id}));case"INIT_USERS":return t.data;default:return e}},re={createUser:function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.create(e);case 2:a=t.sent,n({type:"NEW_USER",data:a}),Z(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},login:Z,setNotification:F},ce=Object(i.g)((function(e){var t=z("text"),n=z("text"),a=z("text"),c=function(){var r=Object(O.a)(w.a.mark((function r(c){var l,u;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c.preventDefault(),l={name:t.value,username:n.value,password:a.value},u={username:n.value,password:a.value},r.next=6,e.createUser(l);case 6:return r.next=8,e.login(u);case 8:e.history.push("/"),e.setNotification("You've added a new account!",4),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log("Error",r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Create a New Blog Account"),r.a.createElement(y.a,{onSubmit:c},r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},t,{reset:null,label:"Name"}))),r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},n,{reset:null,label:"Username"}))),r.a.createElement(y.a.Field,null,r.a.createElement(y.a.Input,Object.assign({},a,{reset:null,label:"Password"}))),r.a.createElement(y.a.Button,{type:"submit"},"sign up")))})),le=Object(u.b)(null,re)(ce),ue=Object(u.b)((function(e){return{users:e.users}}))((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement(E.a,{striped:!0,celled:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,null,"Name"),r.a.createElement(E.a.HeaderCell,null,"# Blogs"))),r.a.createElement(E.a.Body,null,e.users.map((function(e){return r.a.createElement(E.a.Row,{key:e.id},r.a.createElement(E.a.Cell,null,r.a.createElement(o.b,{onClick:function(){m()},to:"/users/".concat(e.id)},e.name)),r.a.createElement(E.a.Cell,null,e.blogs.length," "))})))))})),oe=n(368),ie=Object(u.b)((function(e){return{notification:e.notification}}))((function(e){var t=e.notification;return t&&r.a.createElement(s.a,null,r.a.createElement(oe.a,null,t))})),se={login:Z,setNotification:F,logout:$},me=Object(i.g)((function(e){var t=z("text"),n=z("password"),a=function(){var a=Object(O.a)(w.a.mark((function a(r){var c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,c={username:t.value,password:n.value},a.next=5,e.login(c);case 5:t.reset(),n.reset(),e.history.push("/"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),e.setNotification("Sorry wrong username or password.",5);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return e.loggedUser?r.a.createElement("p",null,"You are currently logged in. Would you like to"," ",r.a.createElement(o.b,{onClick:function(){e.logout()},to:"/"},"logout?")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login To Blog Application"),r.a.createElement(y.a,{onSubmit:a},r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"username"),r.a.createElement("input",Object.assign({},t.omitreset,{name:"username",id:"username"}))),r.a.createElement(y.a.Field,null,r.a.createElement("label",null,"password"),r.a.createElement("input",Object.assign({},n.omitreset,{type:"password",id:"password"}))),r.a.createElement(Q.a,{type:"submit",id:"login"},"login"),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(o.b,{to:"/newuser"},"or signup to become a new user"))))})),fe=Object(u.b)((function(e){return{notification:e.notification,loggedUser:e.loggedUser}}),se)(me),pe={setNotification:F,initializeBlogs:function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},initializeUsers:function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchUser:function(){return function(e){var t=window.localStorage.getItem("loggedBlogAppUser"),n=JSON.parse(t);n&&e({type:"SET_USER",data:n})}},setUser:function(e){return function(t){t({type:"SET_USER",data:e})}},logout:$,login:Z},de=Object(u.b)((function(e){return{blogs:e.blogs,loggedUser:e.loggedUser,users:e.users,filter:e.filter,search:e.search,notification:e.notification}}),pe)((function(e){var t=e.initializeBlogs,n=e.initializeUsers,c=e.fetchUser;Object(a.useEffect)((function(){t()}),[t]),Object(a.useEffect)((function(){n()}),[n]),Object(a.useEffect)((function(){c()}),[c]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);e.setUser(n),B.setToken(n.token)}}),[]);return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(ie,null),r.a.createElement("div",null,r.a.createElement(ne,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(fe,null)),e.loggedUser&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(i.b,{exact:!0,path:"/blogs"},r.a.createElement(h,null)),r.a.createElement(i.b,{exact:!0,path:"/newblog"},r.a.createElement(K,null)),r.a.createElement(i.b,{exact:!0,path:"/blogs/:id",render:function(t){var n,a=t.match;return r.a.createElement(W,{blog:(n=a.params.id,e.blogs.find((function(e){return e.id===n}))),user:e.loggedUser,history:e.history})}}),r.a.createElement(i.b,{exact:!0,path:"/users"},r.a.createElement(ue,null)),r.a.createElement(i.b,{exact:!0,path:"/users/:id",render:function(t){var n,a=t.match;return r.a.createElement(V,{user:(n=a.params.id,e.users.find((function(e){return e.id===n})))})}})),r.a.createElement(i.b,{exact:!0,path:"/newuser"},r.a.createElement(le,null)),r.a.createElement(i.a,{to:"/login"},r.a.createElement(fe,null)),")}"))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("em",null,"Blog app, Chris Stuart 2019")))})),Ee=n(50),ge=n(188),be=n(189),he=Object(Ee.combineReducers)({blogs:D,notification:H,search:f,filter:p,users:ae,loggedUser:ee}),ve=Object(Ee.createStore)(he,Object(be.composeWithDevTools)(Object(Ee.applyMiddleware)(ge.a))),we=function(){l.a.render(r.a.createElement(u.a,{store:ve},r.a.createElement(de,null)),document.getElementById("root"))};we(),ve.subscribe(we)}},[[201,1,2]]]);
//# sourceMappingURL=main.80f60fb4.chunk.js.map