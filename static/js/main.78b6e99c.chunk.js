(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(8),c=n.n(a),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),d=(n(7),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={today:new Date},t.intervalId=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalId=window.setInterval((function(){t.setState({today:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t,e){this.props.name!==t.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name)),this.state.today!==e.today&&console.info(this.state.today.toUTCString().slice(-12,-4))}},{key:"componentWillUnmount",value:function(){this.intervalId&&window.clearInterval(this.intervalId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this,e=this.state,n=e.clockName,a=e.hasClock;return document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),a&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))},7:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.78b6e99c.chunk.js.map