"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3959],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var o=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=o.createContext({}),p=function(e){return function(n){var t=m(n.components);return o.createElement(e,i({},n,{components:t}))}},m=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(d.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=l,u=p["".concat(r,".").concat(c)]||p[c]||h[c]||i;return t?o.createElement(u,a(a({ref:n},d),{},{components:t})):o.createElement(u,a({ref:n},d))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:l,r[1]=a;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(58168),l=(t(96540),t(15680));const i={id:"interactive_console",title:"Buck2 Consoles"},r=void 0,a={unversionedId:"users/build_observability/interactive_console",id:"users/build_observability/interactive_console",title:"Buck2 Consoles",description:"Buck2 offers several console types for build-like commands (e.g. build,",source:"@site/../docs/users/build_observability/interactive_console.md",sourceDirName:"users/build_observability",slug:"/users/build_observability/interactive_console",permalink:"/docs/users/build_observability/interactive_console",draft:!1,tags:[],version:"current",frontMatter:{id:"interactive_console",title:"Buck2 Consoles"},sidebar:"mainSidebar",previous:{title:"Why is Buck2 hanging?",permalink:"/docs/users/faq/buck_hanging"},next:{title:"Logging",permalink:"/docs/users/build_observability/logging"}},s={},d=[{value:"Simpleconsole",id:"simpleconsole",level:2},{value:"Demo",id:"demo",level:3},{value:"Superconsole",id:"superconsole",level:2},{value:"Demo",id:"demo-1",level:3},{value:"Toggles",id:"toggles",level:3},{value:"No console",id:"no-console",level:2}],p={toc:d},m="wrapper";function c(e){let{components:n,...i}=e;return(0,l.mdx)(m,(0,o.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Buck2 offers several console types for build-like commands (e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"build"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"install"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"test"),", etc.). The console is always written to stderr."),(0,l.mdx)("p",null,"The console can be specified via the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--console")," flag, or the ",(0,l.mdx)("inlineCode",{parentName:"p"},"BUCK_CONSOLE")," env\nvariable. The default console type is ",(0,l.mdx)("inlineCode",{parentName:"p"},"auto"),". Supported ",(0,l.mdx)("inlineCode",{parentName:"p"},"--console")," types:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"auto")," - Default console type. Auto defaults to the superconsole if the stderr\nis a TTY. Otherwise will uses simple console"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"simple")," - Build a simpleconsole with TTY, if TTY is supported by the OS. See\n",(0,l.mdx)("a",{parentName:"li",href:"#simpleconsole"},"Simpleconsole")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"simplenotty")," - Build a simpleconsole without TTY. See\n",(0,l.mdx)("a",{parentName:"li",href:"#simpleconsole"},"Simpleconsole")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"simpletty")," - Build a simpleconsole with TTY. See\n",(0,l.mdx)("a",{parentName:"li",href:"#simpleconsole"},"Simpleconsole")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"super")," - Build a superconsole regardless of whether stderr is a TTY. See\n",(0,l.mdx)("a",{parentName:"li",href:"#superconsole"},"Superconsole")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"none")," - See ",(0,l.mdx)("a",{parentName:"li",href:"#no-console"},"No console"))),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"simplenotty")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"none")," are specified, or if TTY is not supported by the OS,\nthen we strip out any color within the error messages."),(0,l.mdx)("p",null,"All console options will output the build result, whether succeeded or not, to\nstdout. Note that action execution stderr is hidden if the build succeeded."),(0,l.mdx)("p",null,"The simple and superconsole will also print metadata about the build itself,\nsuch as the Buck2 UUID, the percentage of cache hits, and the number of action\ncommands ran. In addition, they will print the event spans detected within the\nbuild."),(0,l.mdx)("h2",{id:"simpleconsole"},"Simpleconsole"),(0,l.mdx)("p",null,"The simpleconsole prints the stdout/stderr messages and event spans, line by\nline. There is no resource usage telemetry emitted."),(0,l.mdx)("h3",{id:"demo"},"Demo"),(0,l.mdx)("p",null,(0,l.mdx)("img",{alt:"Simpleconsole running a build",src:t(51342).A,width:"1006",height:"266"})),(0,l.mdx)("h2",{id:"superconsole"},"Superconsole"),(0,l.mdx)("p",null,"The superconsole uses the\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/superconsole"},"superconsole")," library to\nprovide an interactive console which shows the event spans going on within\nBuck2."),(0,l.mdx)("h3",{id:"demo-1"},"Demo"),(0,l.mdx)("p",null,(0,l.mdx)("img",{alt:"Superconsole running a build",src:t(46781).A,width:"1465",height:"452"})),(0,l.mdx)("h3",{id:"toggles"},"Toggles"),(0,l.mdx)("p",null,"The superconsole also provides several toggles to inspect ongoing Buck2\ntelemetry."),(0,l.mdx)("p",null,"To see what's available you can press ",(0,l.mdx)("inlineCode",{parentName:"p"},"?")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"h"),". This will work as long as\nstdin is a TTY, which will be true most of the time if you're not piping\nanything into Buck2. To disable to allow alternate use of stdin, or for follow\nup pasted commands to not get swallowed, you can set the\n",(0,l.mdx)("inlineCode",{parentName:"p"},"BUCK_NO_INTERACTIVE_CONSOLE")," environment variable, or use the flag\n",(0,l.mdx)("inlineCode",{parentName:"p"},"--no-interactive-console"),"."),(0,l.mdx)("p",null,"We support the following toggles:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"c")," - toggle commands (shown in superconsole by default)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"d")," - toggle DICE key states"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"e")," - toggle debugging events, such as spans and instant event counts"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"2")," - toggle two lines mode when showing events"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"r")," - toggle detailed remote execution info, such as uploads, downloads, and\naction cache calls"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"i")," - toggle I/O counters"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"p")," - display target configurations"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"+")," - show more lines"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"-")," - show fewer lines"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"h")," - show help")),(0,l.mdx)("p",null,"Note: Not available yet for Windows"),(0,l.mdx)("h2",{id:"no-console"},"No console"),(0,l.mdx)("p",null,"When specifying the ",(0,l.mdx)("inlineCode",{parentName:"p"},"none")," console type, Buck2 will only print if the build\nsucceeded, or the error if the build failed."))}c.isMDXComponent=!0},51342:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/simpleconsole-5bfa37b932256fce081a21ce4f4c4b92.gif"},46781:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/superconsole-71265cd99fd66f981336092604efff94.gif"}}]);