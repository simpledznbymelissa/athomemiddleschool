(window.webpackJsonp=window.webpackJsonp||[]).push([[57,56],{CwUx:function(e,a,t){"use strict";var n=t("dI71"),o=t("q1tI"),r=t.n(o),l=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).onClose=function(e){a.props.onClose&&a.props.onClose(e)},a}return Object(n.a)(a,e),a.prototype.render=function(){return this.props.show?r.a.createElement("div",{id:"modal"},r.a.createElement("div",{className:"content"},this.props.children),r.a.createElement("div",{className:"actions"})):null},a}(r.a.Component),c={backgroundColor:"#a6ddd9",padding:".5rem 0",width:"9em",fontSize:"1rem",color:"#fff",margin:"2rem 0",borderRadius:"0.25em",border:"1px solid #fff"},s={color:"#6aaca7",padding:"1em 1em 0"},i=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={show:!1},a.showModal=function(e){a.setState({show:!a.state.show})},a}return Object(n.a)(a,e),a.prototype.render=function(){var e=this;return r.a.createElement("div",null,r.a.createElement(l,{onClose:this.showModal,show:this.state.show},r.a.createElement("p",{style:s},this.props.solution)),r.a.createElement("button",{style:c,type:"button",className:"toggle-button",id:"centered-toggle-button",onClick:function(a){e.showModal(a)}}," ","Show Answer"," "))},a}(r.a.Component);a.a=i},Tly4:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n);t("37Ea");a.a=function(e){var a=e.checked,t=e.label,n=e.id,r=e.disabled,l=e.ariaInvalid,c=e.ariaLabelledby,s=e.onChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:n,className:"ToggleSwitch ToggleSwitch_label checkcontainer"},t,o.a.createElement("span",{className:"ToggleSwitch_switch checkmark"},o.a.createElement("input",{type:"checkbox",checked:a,id:n,className:"ToggleSwitch_checkbox",disabled:r,onChange:s,"aria-invalid":l,"aria-labelledby":c}),o.a.createElement("span",{className:"checkmark"}))))}},"rui/":function(e,a,t){"use strict";var n=t("zLVn"),o=t("q1tI"),r=t.n(o),l=t("HMs9"),c=t.n(l),s=(t("37Ea"),["videoUrl"]);a.a=function(e){var a=e.videoUrl;Object(n.a)(e,s);return r.a.createElement("div",{className:"videoMargins"},r.a.createElement(c.a,{className:"videoWrapper",offset:100},r.a.createElement("iframe",{src:a,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),r.a.createElement("p",{className:"videoBottomMarg"}))}}}]);
//# sourceMappingURL=57-6ede2668b337537d7743.js.map