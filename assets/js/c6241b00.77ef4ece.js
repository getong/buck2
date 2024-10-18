"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[963],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,a({},t,{components:n}))}},s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const a={id:"bootstrapping",title:"Bootstrapping Buck2"},i="Bootstrapping Buck2",p={unversionedId:"about/bootstrapping",id:"about/bootstrapping",title:"Bootstrapping Buck2",description:"To generate BUCK files for buck2's dependencies, we use",source:"@site/../docs/about/bootstrapping.md",sourceDirName:"about",slug:"/about/bootstrapping",permalink:"/docs/about/bootstrapping",draft:!1,tags:[],version:"current",frontMatter:{id:"bootstrapping",title:"Bootstrapping Buck2"},sidebar:"mainSidebar",previous:{title:"Benefits When Compared to Buck1",permalink:"/docs/about/benefits/compared_to_buck1"},next:{title:"Key Concepts",permalink:"/docs/concepts/key_concepts"}},c={},l=[],u={toc:l},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.mdx)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"bootstrapping-buck2"},"Bootstrapping Buck2"),(0,o.mdx)("p",null,"To generate ",(0,o.mdx)("inlineCode",{parentName:"p"},"BUCK")," files for ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2"),"'s dependencies, we use\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/reindeer"},"reindeer"),"."),(0,o.mdx)("p",null,"Note that the resulting binary will be compiled without optimisations or\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/jemalloc/jemalloc"},"jemalloc"),", so we recommend using the\nCargo-produced binary in further development."),(0,o.mdx)("p",null,"First, install ",(0,o.mdx)("inlineCode",{parentName:"p"},"reindeer")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"Cargo"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"cargo install --locked --git https://github.com/facebookincubator/reindeer reindeer\n")),(0,o.mdx)("p",null,"Next, run the following to buckify dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"cd buck2/\nreindeer --third-party-dir shim/third-party/rust buckify\n")),(0,o.mdx)("p",null,"Build ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 build //:buck2\n")))}d.isMDXComponent=!0}}]);