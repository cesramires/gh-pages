(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}},"20a2":function(e,t,r){e.exports=r("nOHt")},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";var n=r("lSNA");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(o=r("Xuae"))&&o.__esModule?o:{default:o},s=r("lwAK"),u=r("FYa8"),l=r("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var f=a.props[l],d=n[l]||new Set;"name"===l&&c||!d.has(f)?(d.add(f),n[l]=d):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}function b(e){var t=e.children,r=(0,c.useContext)(s.AmpStateContext),n=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}b.rewind=function(){};var v=b;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,r){"use strict";r.d(t,"b",(function(){return x})),r.d(t,"a",(function(){return g}));var n=r("nKUr"),a=r("g4pe"),o=r.n(a),c=r("rePB"),i=r("20a2"),s=r("YFqc"),u=r.n(s),l=r("q1tI");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r("EWaS"),h={main:[{name:"Projetos",href:"/portfolio/residencial"},{name:"Escrit\xf3rio",href:"/about"},{name:"Contato",href:"/contact"}],social:[{name:"Facebook",href:"#",icon:function(e){return Object(n.jsx)("svg",d(d({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M9.21567432,23 L9.21567432,12.4986746 L7,12.4986746 L7,8.88027013 L9.21567432,8.88027013 L9.21567432,6.70790204 C9.21567432,3.75618531 10.4660977,2 14.0209307,2 L16.9796789,2 L16.9796789,5.61972987 L15.1304613,5.61972987 C13.7465962,5.61972987 13.6551514,6.12537869 13.6551514,7.06907978 L13.6490551,8.88027013 L17,8.88027013 L16.6078033,12.4986746 L13.6490551,12.4986746 L13.6490551,23 L9.21567432,23 Z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"#",icon:function(e){return Object(n.jsx)("svg",d(d({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}},{name:"Twitter",href:"#",icon:function(e){return Object(n.jsx)("svg",d(d({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",clipRule:"evenodd"})}))}}]};function m(){var e=Object(i.useRouter)().asPath,t=Object(l.useState)(!1),r=t[0],a=t[1];return Object(n.jsxs)("nav",{className:"flex items-center bg-white flex-wrap justify-between p-1 drop-shadow-lg",children:[Object(n.jsx)("div",{className:"md:order-1 w-auto md:w-1/6",children:Object(n.jsx)(u.a,{href:"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{style:{width:78,height:78},src:p,alt:"Odilon Santos Pereira + Gabriela Leme"})})})}),Object(n.jsx)("div",{className:"block md:hidden self-center",children:Object(n.jsx)("button",{className:"flex items-center py-2 px-3 text-gray-800 rounded hover:bg-gray-400 outline-none",onClick:function(){a(!r)},children:Object(n.jsxs)("svg",{className:"fill-current h-9 w-9",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("title",{children:"Menu"}),Object(n.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),Object(n.jsx)("div",{className:"".concat(r?"":"hidden"," order-2 md:flex md:items-center w-full md:w-4/6"),children:h.main.map((function(t){return Object(n.jsx)(u.a,{activeClassName:"text-gray-900 border-gray-900",href:t.href,children:Object(n.jsxs)("a",{className:"text-base font-extrabold uppercase border-b-2 block md:inline-flex md:w-full sm:mx-6 md:ml-1.5 mt-4 md:mt-0 transition delay-150 duration-150 ease-in-out ".concat(e===t.href?"text-gray-900 border-gray-900":"border-gray-100 text-gray-400 hover:hover:text-gray-500 hover:border-black"),children:[Object(n.jsx)("span",{className:"inline-block capitalize bg-current rounded-full w-2 h-2 self-center mx-2"}),t.name]})})}))}),Object(n.jsx)("div",{className:"".concat(r?"":"hidden"," order-3 md:flex md:justify-end w-full md:w-1/6 md:text-right space-x-2 sm:mx-6 md:mx-0"),children:h.social.map((function(e){return Object(n.jsxs)("a",{href:e.href,target:"_blank",className:"rounded-full border-2 border-transparent text-gray-400 hover:text-white hover:bg-gray-500 inline-block mt-4 md:mt-0 transform delay-150 duration-150 ease-in-out",children:[Object(n.jsx)("span",{className:"sr-only",children:e.name}),Object(n.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))})]})}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={main:[{name:"Projetos",href:"/portfolio/residencial"},{name:"Escrit\xf3rio",href:"/about"},{name:"Contato",href:"/contact"}],social:[{name:"Facebook",href:"#",icon:function(e){return Object(n.jsx)("svg",v(v({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"#",icon:function(e){return Object(n.jsx)("svg",v(v({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}},{name:"Twitter",href:"#",icon:function(e){return Object(n.jsx)("svg",v(v({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(n.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}))}}]};function y(){return Object(n.jsx)("footer",{className:"mt-24 bg-gray-900 sm:mt-12",children:Object(n.jsxs)("div",{className:"mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",children:[Object(n.jsx)("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer",children:j.main.map((function(e){return Object(n.jsx)("div",{className:"px-5 py-2",children:Object(n.jsx)(u.a,{href:e.href,children:Object(n.jsx)("a",{className:"text-lg text-gray-400 hover:text-gray-300",children:e.name})})},e.name)}))}),Object(n.jsx)("div",{className:"mt-8 flex justify-center space-x-2",children:j.social.map((function(e){return Object(n.jsxs)("a",{href:e.href,target:"_blank",className:"rounded-full border-2 border-transparent text-gray-400 hover:text-white hover:bg-gray-400",children:[Object(n.jsx)("span",{className:"sr-only",children:e.name}),Object(n.jsx)(e.icon,{className:"h-8 w-8","aria-hidden":"true"})]},e.name)}))}),Object(n.jsx)("p",{className:"text-lg mt-8 text-center text-gray-400",children:"\xa9 2021 OSP+GL Arquitetura. Todos direitos reservados."})]})})}var x="Next.js Sample Website";function g(e){var t=e.children;e.home;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("link",{rel:"icon",href:"../assets/images/favicon.ico"}),Object(n.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),Object(n.jsx)("meta",{name:"og:title",content:x}),Object(n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(n.jsx)(m,{}),Object(n.jsx)("main",{className:"container mx-auto transform duration-500 p-10 py-6 lg:py-12 px-0 lg:px-10",children:t}),Object(n.jsx)(y,{})]})}},EWaS:function(e,t){e.exports="/gh-pages/_next/static/images/logo_bg_light-0cd2a9c4972fb9203f75b88ed88ba872.svg"},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||c()}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),o=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),i=r("a1gu"),s=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),f=function(e){c(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),a=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),c=r("elyg"),i=r("nOHt"),s=r("vNVm"),u={};function l(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.asPath||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,b=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=o.Children.only(h),x=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=n(g,2),w=O[0],M=O[1],P=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,o.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof j?j:r&&r.locale,a=u[d+"%"+p+(n?"%"+n:"")];e&&!a&&l(r,d,p,{locale:n})}),[p,d,M,j,t,r]);var C={ref:P,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:i}))}(e,r,d,p,m,b,v,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof j?j:r&&r.locale,k=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,_,r&&r.locales,r&&r.domainLocales);C.href=k||(0,c.addBasePath)((0,c.addLocale)(p,_,r&&r.defaultLocale))}return o.default.cloneElement(y,C)};t.default=f},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=n(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r("q1tI"),o=r("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}}]);