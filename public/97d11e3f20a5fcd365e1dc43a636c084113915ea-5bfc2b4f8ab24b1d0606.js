(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Bl7J:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),i=(n("HMs9"),n("JX7q")),s=n("dI71"),l=(n("cRmv"),function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"buttonTop"},r.a.createElement("button",{className:"navButton",onMouseDown:this.props.handleMouseDown},r.a.createElement(a.Link,{to:"/mobilemenu"},r.a.createElement("p",{className:"icon"}),r.a.createElement("p",{className:"icon"}))))},t}(r.a.Component)),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!1},n.handleMouseDown=n.handleMouseDown.bind(Object(i.a)(n)),n.toggleMenu=n.toggleMenu.bind(Object(i.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.handleMouseDown=function(e){this.toggleMenu(),console.log("clicked",this.state.show),e.stopPropagation()},n.toggleMenu=function(){this.setState({show:!this.state.show})},n.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navWrapper"},r.a.createElement("div",{className:"navListwrapper"},r.a.createElement("a",{className:"logo",href:"/"},r.a.createElement("span",{className:"mid"},"at"),r.a.createElement("span",{className:"darker"},"home"),r.a.createElement("span",{className:"mid"},"middleschool")),r.a.createElement("ul",{className:"navList"},r.a.createElement("li",{className:"navItem"},r.a.createElement("a",{className:"navLink",href:"/"},"home")),r.a.createElement("li",{className:"navItem"},r.a.createElement(a.Link,{to:"/resources",className:"navLink"},"resources")),r.a.createElement("li",{className:"navItem"},r.a.createElement(a.Link,{to:"/about",className:"navLink"},"about")),r.a.createElement("li",{className:"navItem"},r.a.createElement(a.Link,{to:"/sixth",className:"navLink"},"6th")),r.a.createElement("li",{className:"navItem"},r.a.createElement(a.Link,{to:"/seventh",className:"navLink"},"7th")),r.a.createElement("li",{className:"navItem"},r.a.createElement(a.Link,{to:"/eighth",className:"navLink"},"8th")))),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement(l,{handleMouseDown:this.handleMouseDown}))))},t}(r.a.Component),u=function(e){e.data;return r.a.createElement("header",{className:"headerScoll"},r.a.createElement(c,null))};var f=n("UNbL"),d=n.n(f),m=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.a.createElement("footer",{className:d.a.colophon},"SimpleDzn © ",(new Date).getFullYear(),r.a.createElement(a.Link,{style:{paddingLeft:"4em",color:"#9e9d9d"},to:"/termsofuse"},"Terms of Use "))},p=(n("Wotd"),n("wG6h"),n("sVds"),n("aT6C"),n("fcpr")),h=n.n(p);t.a=function(e){var t=e.children,n=Object(a.useStaticQuery)("256249292");return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"skip-link screen-reader-text",href:"#primary"}," Skip to the content "),r.a.createElement(u,{siteTitle:n.site.siteMetadata.title,siteDescription:n.site.siteMetadata.description}),r.a.createElement("main",{id:"primary",className:h.a.site_main},t),r.a.createElement(m,{siteTitle:n.site.siteMetadata.title}))}},HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=f(r),i=f(n("17x9")),s=n("Seim"),l=f(n("tvXG")),c=f(n("PTkm")),u=f(n("uUxy"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,b=0,w=0,y="data-lazyload-listened",E=[],g=[],N=!1;try{var M=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,M)}catch(C){}var k=!!N&&{capture:!1,passive:!0},L=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,a=void 0,i=void 0;try{var s=t.getBoundingClientRect();o=s.top,r=s.left,a=s.height,i=s.width}catch(C){o=h,r=v,a=w,i=b}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(o,0),f=Math.max(r,0),d=Math.min(l,o+a)-u,m=Math.min(c,r+i)-f,p=void 0,y=void 0,E=void 0,g=void 0;try{var N=n.getBoundingClientRect();p=N.top,y=N.left,E=N.height,g=N.width}catch(C){p=h,y=v,E=w,g=b}var M=p-u,k=y-f,L=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return M-L[0]<=d&&M+E+L[1]>=0&&k-L[0]<=m&&k+g+L[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(C){n=h,o=w}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+o+i[1]>=0}(e))?e.visible||(e.props.once&&g.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},O=function(){g.forEach((function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)})),g=[]},P=function(){for(var e=0;e<E.length;++e){var t=E[e];L(t)}O()},_=void 0,T=null,x=function(e){function t(e){d(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return p(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",T,k),(0,s.off)(window,"resize",T,k),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(P,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(P,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):T=P),this.props.overflow){var o=(0,l.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(y)+1;1===r&&o.addEventListener("scroll",T,k),o.setAttribute(y,r)}}else if(0===E.length||n){var a=this.props,i=a.scroll,f=a.resize;i&&(0,s.on)(e,"scroll",T,k),f&&(0,s.on)(window,"resize",T,k)}E.push(this),L(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",T,k),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!=typeof window&&((0,s.off)(window,"resize",T,k),(0,s.off)(window,"scroll",T,k))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,i=e.classNamePrefix,s=e.style;return a.default.createElement("div",{className:i+"-wrapper "+r,ref:this.setRef,style:s},this.visible?n:o||a.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(r.Component);x.propTypes={className:i.default.string,classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool,style:i.default.object},x.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var j=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=m(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+j(t),e}return p(r,n),o(r,[{key:"render",value:function(){return a.default.createElement(x,e,a.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=x,t.forceCheck=P,t.forceVisible=function(){for(var e=0;e<E.length;++e){var t=E[e];t.visible=!0,t.forceUpdate()}O()}},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,a=void 0,i=void 0,s=void 0,l=function l(){var c=+new Date-i;c<t&&c>=0?o=setTimeout(l,t-c):(o=null,n||(s=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var c=n&&!o;return o||(o=setTimeout(l,t)),c&&(s=e.apply(a,r),a=null,r=null),s}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},UNbL:function(e,t,n){e.exports={colophon:"footer-module--colophon--17Qs1",customMedia:{},customProperties:{},customSelectors:{}}},Wotd:function(e,t,n){e.exports={customMedia:{},customProperties:{},customSelectors:{}}},aT6C:function(e,t,n){e.exports={customMedia:{},customProperties:{},customSelectors:{}}},cRmv:function(e,t,n){e.exports={customMedia:{},customProperties:{},customSelectors:{}}},fcpr:function(e,t,n){e.exports={customMedia:{},customProperties:{},customSelectors:{}}},sVds:function(e,t,n){e.exports={customMedia:{},customProperties:{"--primary-font":'"Nunito", sans-serif',"--highlight-font":'"Roboto", sans-serif',"--content-w-wide":"80rem","--content-w-regular":"60rem","--content-w-narrow":"40rem"},customSelectors:{}}},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,i=r.overflow,s=r["overflow-x"],l=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(i)&&n.test(s)&&n.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var a=n||this,i=+new Date,s=arguments;o&&i<o+t?(clearTimeout(r),r=setTimeout((function(){o=i,e.apply(a,s)}),t)):(o=i,e.apply(a,s))}}},wG6h:function(e,t,n){e.exports={customMedia:{},customProperties:{},customSelectors:{}}}}]);
//# sourceMappingURL=97d11e3f20a5fcd365e1dc43a636c084113915ea-5bfc2b4f8ab24b1d0606.js.map