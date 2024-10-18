"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=t(96540);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,d=function(e,n){if(null==e)return{};var t,r,d={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(d[t]=e[t]);return d}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var l=r.createContext({}),c=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,d=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(t),s=d,y=c["".concat(p,".").concat(s)]||c[s]||m[s]||a;return t?r.createElement(y,o(o({ref:n},l),{},{components:t})):r.createElement(y,o({ref:n},l))}));function b(e,n){var t=arguments,d=n&&n.mdxType;if("string"==typeof e||d){var a=t.length,p=new Array(a);p[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[y]="string"==typeof e?e:d,p[1]=o;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(58168),d=(t(96540),t(15680));const a={id:"dependency"},p="dependency type",o={unversionedId:"api/build/dependency",id:"api/build/dependency",title:"dependency type",description:"Dependency type. In Starlark typing it can be represented with Dependency global.",source:"@site/../docs/api/build/dependency.generated.md",sourceDirName:"api/build",slug:"/api/build/dependency",permalink:"/docs/api/build/dependency",draft:!1,tags:[],version:"current",frontMatter:{id:"dependency"},sidebar:"apiSidebar",previous:{title:"context type",permalink:"/docs/api/build/context"},next:{title:"digest_config type",permalink:"/docs/api/build/digest_config"}},i={},l=[{value:"dependency.get",id:"dependencyget",level:2},{value:"dependency.label",id:"dependencylabel",level:2},{value:"dependency.providers",id:"dependencyproviders",level:2},{value:"dependency.sub_target",id:"dependencysub_target",level:2}],c={toc:l},u="wrapper";function s(e){let{components:n,...t}=e;return(0,d.mdx)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"dependency-type"},(0,d.mdx)("inlineCode",{parentName:"h1"},"dependency")," type"),(0,d.mdx)("p",null,"Dependency type. In Starlark typing it can be represented with ",(0,d.mdx)("inlineCode",{parentName:"p"},"Dependency")," global."),(0,d.mdx)("h2",{id:"dependencyget"},"dependency.get"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},"def dependency.get(index) -> None | provider\n")),(0,d.mdx)("p",null,"Gets a provider by indexing on a ",(0,d.mdx)("inlineCode",{parentName:"p"},"ProviderCallable")," object."),(0,d.mdx)("p",null,"e.g."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-ignore"},'FooInfo = provider(fields=["bar"])\n....\ncollection.get(FooInfo) # None if absent, a FooInfo instance if present\n')),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"dependencylabel"},"dependency.label"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},"dependency.label: label\n")),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"dependencyproviders"},"dependency.providers"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},"dependency.providers: list\n")),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"dependencysub_target"},"dependency.sub","_","target"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},"def dependency.sub_target(subtarget: str, /) -> dependency\n")),(0,d.mdx)("p",null,"Obtain the dependency representing a subtarget. In most cases you will want to use ",(0,d.mdx)("inlineCode",{parentName:"p"},'x[DefaultInfo].sub_targets["foo"]')," to get the ",(0,d.mdx)("em",{parentName:"p"},"providers")," of the subtarget, but if you need a real ",(0,d.mdx)("inlineCode",{parentName:"p"},"Dependency")," type (e.g. for use with ",(0,d.mdx)("inlineCode",{parentName:"p"},"ctx.action.anon_target"),") then use this method."))}s.isMDXComponent=!0}}]);