(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,a,t){e.exports=t.p+"static/media/logo.fdaab9ad.jpg"},53:function(e,a,t){e.exports=t(79)},58:function(e,a,t){},60:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(41),l=t.n(r),s=(t(58),t(10)),m=t(11),u=t(21),i=t(12),o=t(22),h=(t(60),t(42)),d=t.n(h),p=t(51),E=t(83),g=t(84),b=t(13),f=t(25),y=t(9),_=t.n(y),k=t(26),v=t.n(k),N=t(48),j=t.n(N),w=t(82);function O(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3 bg-dark"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9 text-white"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:v()({"text-success":l,"text-danger":!l})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(j.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(w.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch details"))))}function x(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-2 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-2 mr-2 bg-danger"})," = Failed"))}function L(){var e=Object(f.a)(["\n    query LaunchesQuery{\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return L=function(){return e},e}var F=_()(L()),q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,"Launches"),c.a.createElement(x,null),c.a.createElement(b.Query,{query:F},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(O,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function Y(){var e=Object(f.a)(["\n    query LaunchQuery ($flight_number : Int!) {\n        launch(flight_number : $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return Y=function(){return e},e}var D=_()(Y()),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(b.Query,{query:D,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,r=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=r.launch,s=l.mission_name,m=l.flight_number,u=l.launch_year,i=l.launch_success,o=l.rocket,h=o.rocket_id,d=o.rocket_name,p=o.rocket_type;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-body bg-dark text-white my-2"},c.a.createElement("h1",{className:"my-3"},c.a.createElement("span",{className:"text-warning"},"Mission : "),s),c.a.createElement("h4",{className:"mb-3"},"Launch details"),c.a.createElement("ul",{className:"list-group text-dark"},c.a.createElement("li",{className:"list-group-item"},"Flight number : ",m),c.a.createElement("li",{className:"list-group-item"},"Launch year : ",u),c.a.createElement("li",{className:"list-group-item"},"Launch successful : ",c.a.createElement("span",{className:v()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket details"),c.a.createElement("ul",{className:"list-group text-dark"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID : ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket name : ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket type : ",p))),c.a.createElement(w.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),M=new p.a({uri:"/graphql"}),Q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(b.ApolloProvider,{client:M},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:d.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(g.a,{exact:!0,path:"/",component:q}),c.a.createElement(g.a,{exact:!0,path:"/launch/:flight_number",component:I}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.e731574b.chunk.js.map