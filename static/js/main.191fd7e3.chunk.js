(this["webpackJsonpTo-Do"]=this["webpackJsonpTo-Do"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(13),n(2)),s=n(3),c=n(1),u=n(5),d=n(4),m=(n(14),[]);if(""!==document.cookie){var p=JSON.parse(document.cookie.split(";").filter((function(e){return e.startsWith("JSONData")}))[0].split("=")[1]);m=p}var h=[],g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={style:{display:"inline-block",margin:"0.5rem",textDecoration:"none",width:"85%"}},e.clickHandler=e.clickHandler.bind(Object(c.a)(e)),e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e.style!==this.props.style&&this.setState({display:"inline-block",margin:"0.5rem",textDecoration:"none"})}},{key:"clickHandler",value:function(){"none"===this.state.style.textDecoration?h.push(this.props.message):h.splice(h.indexOf(this.props.message),1),this.props.del()}},{key:"render",value:function(){return o.a.createElement("li",{style:{overflowWrap:"break-word",overflow:"auto"}},o.a.createElement("div",{style:{overflowWrap:"break-word"}},o.a.createElement("p",{style:this.state.style},this.props.message)),o.a.createElement("img",{src:"https://img.icons8.com/metro/26/000000/trash.png",style:{float:"right"},onClick:this.clickHandler,alt:""}))}}]),n}(o.a.Component),f={backgroundColor:"#e1b382",border:"#2d545e 25px solid",padding:"15px 32px",textAlign:"center",fontSize:"16px",margin:"2em",borderRadius:"5px",width:"40%"},b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={Input:""},e.getVal=e.getVal.bind(Object(c.a)(e)),e}return Object(s.a)(n,[{key:"getVal",value:function(e){this.setState({Input:e.target.value}),console.log(this.state.Input)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("form",{onSubmit:function(){return e.props.add(e.state.Input)}},o.a.createElement("input",{type:"text",onChange:this.getVal,style:f,placeholder:"enter To-Do items here"}),o.a.createElement("br",null)))}}]),n}(o.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e.delToDo=e.delToDo.bind(Object(c.a)(e)),e.addToDo=e.addToDo.bind(Object(c.a)(e)),e}return Object(s.a)(n,[{key:"delToDo",value:function(){var e=this;h.map((function(e){return-1===m.map((function(e){return e.message})).indexOf(e)?null:m.splice(m.map((function(e){return e.message})).indexOf(e),1)})),h.splice(0),document.cookie="JSONData="+JSON.stringify(m)+"; expires=Fri, 31 Dec 2037 23:59:59 GMT",this.setState({data:m.map((function(t){return o.a.createElement(g,{message:t.message,key:t.id,del:e.delToDo})}))})}},{key:"addToDo",value:function(e){var t=this;return""===e?null:m.filter((function(t){return t.message===e})).length>0?(alert("please enter non-duplicate values"),null):-1!==e.indexOf(";")?(alert("semicolons break the script, pls refrain from using them"),null):(m.push({id:m.length<1?1:m[m.length-1].id+1,message:e}),document.cookie="JSONData="+JSON.stringify(m)+"; expires=Fri, 31 Dec 2037 23:59:59 GMT",void this.setState({data:m.map((function(e){return o.a.createElement(g,{message:e.message,key:e.id,del:t.delToDo})}))}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({data:m.map((function(t){return o.a.createElement(g,{message:t.message,key:t.id,del:e.delToDo})}))})}},{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"#12343b",height:"100%",position:"absolute",left:"0px",width:"100%",overflow:"auto"}},o.a.createElement("h1",{style:{backgroundColor:"#c89666",margin:"0px",padding:"0.5em"}},"To Do List"),m.length>0?o.a.createElement("ul",{id:"box",style:{margin:"1.5em auto",padding:"1em",backgroundColor:"#2d545e"}},this.state.data):null,o.a.createElement(b,{add:this.addToDo}),o.a.createElement("div",{style:{height:"57%"}}),o.a.createElement("footer",{style:{backgroundColor:"#101010",color:"white",float:"bottom",padding:"2em",width:"100%"}},"copyleft \xa9 thesrsbuvttchi"))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.191fd7e3.chunk.js.map