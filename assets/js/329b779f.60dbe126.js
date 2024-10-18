"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4342],{15680:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){return function(r){var t=u(r.components);return n.createElement(e,o({},r,{components:t}))}},u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},74928:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={},c="Starlark Language Specification",i={unversionedId:"developers/starlark/spec",id:"developers/starlark/spec",title:"Starlark Language Specification",description:"The Starlark language spec can be found in the",source:"@site/../docs/developers/starlark/spec.md",sourceDirName:"developers/starlark",slug:"/developers/starlark/spec",permalink:"/docs/developers/starlark/spec",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Heaps and Heap References",permalink:"/docs/developers/starlark/heaps"},next:{title:"Starlark Types",permalink:"/docs/developers/starlark/types"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.mdx)(u,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"starlark-language-specification"},"Starlark Language Specification"),(0,a.mdx)("p",null,"The Starlark language spec can be found in the\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md"},"Bazel GitHub repository"),"."))}f.isMDXComponent=!0}}]);