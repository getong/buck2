"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6995],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>l,withMDXComponents:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){return function(t){var n=l(t.components);return r.createElement(e,a({},t,{components:n}))}},l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"buck_out",title:"buck-out"},c="buck-out",u={unversionedId:"concepts/buck_out",id:"concepts/buck_out",title:"buck-out",description:"Buck2 stores build artifacts in a directory named buck-out in the root of your",source:"@site/../docs/concepts/buck_out.md",sourceDirName:"concepts",slug:"/concepts/buck_out",permalink:"/docs/concepts/buck_out",draft:!1,tags:[],version:"current",frontMatter:{id:"buck_out",title:"buck-out"},sidebar:"mainSidebar",previous:{title:"Target Pattern",permalink:"/docs/concepts/target_pattern"},next:{title:"Visibility",permalink:"/docs/concepts/visibility"}},i={},p=[],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"buck-out"},"buck-out"),(0,o.mdx)("p",null,"Buck2 stores build artifacts in a directory named ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck-out")," in the root of your\n",(0,o.mdx)("a",{parentName:"p",href:"/docs/concepts/glossary#project"},"project"),". You should not make assumptions about where\nBuck2 places your build artifacts within the directory structure beneath\n",(0,o.mdx)("inlineCode",{parentName:"p"},"buck-out")," as these locations depend on Buck2's implementation and could\npotentially change over time. Instead, to obtain the location of the build\nartifact for a particular target, you can use one of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--show-*-output"),"\noptions with the ",(0,o.mdx)("a",{parentName:"p",href:"../../users/commands/build"},(0,o.mdx)("inlineCode",{parentName:"a"},"buck2 build"))," or\n",(0,o.mdx)("a",{parentName:"p",href:"../../users/commands/targets"},(0,o.mdx)("inlineCode",{parentName:"a"},"buck2 targets"))," commands, most commonly\n",(0,o.mdx)("inlineCode",{parentName:"p"},"--show-output"),". For the full list of ways to show the output location, you can\nrun ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 build --help")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 targets --help"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"buck2 targets --show-output <target>\nbuck2 build --show-output <target>\n")))}l.isMDXComponent=!0}}]);