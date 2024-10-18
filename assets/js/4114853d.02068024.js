"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8225],{15680:(e,t,i)=>{i.r(t),i.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>d});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){return function(t){var i=u(t.components);return n.createElement(e,r({},t,{components:i}))}},u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(i),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||r;return i?n.createElement(m,s(s({ref:t},l),{},{components:i})):n.createElement(m,s({ref:t},l))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},17215:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(58168),a=(i(96540),i(15680));const r={},o="buck2 audit visibility command",s={unversionedId:"rfcs/audit_visibility",id:"rfcs/audit_visibility",title:"buck2 audit visibility command",description:"Context",source:"@site/../docs/rfcs/audit_visibility.md",sourceDirName:"rfcs",slug:"/rfcs/audit_visibility",permalink:"/docs/rfcs/audit_visibility",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Context",id:"context",level:2},{value:"Proposed Solution: <code>audit visibility</code> command",id:"proposed-solution-audit-visibility-command",level:2},{value:"Usage and Invocation",id:"usage-and-invocation",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.mdx)(u,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"buck2-audit-visibility-command"},(0,a.mdx)("inlineCode",{parentName:"h1"},"buck2 audit visibility")," command"),(0,a.mdx)("h2",{id:"context"},"Context"),(0,a.mdx)("p",null,"Buck has a concept of Visibility for every target. It allows users to define,\nfor each target, the targets it can depend on and targets that can depend on it.\nVisibility is specified as an allowlist of targets/target patterns, and any\ntarget used that falls outside of the allowlist fails visibility checking.\nVisibility pattern can be specified on ",(0,a.mdx)("inlineCode",{parentName:"p"},"visibility")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"within_view")," attributes\nin buildfiles and\n",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Buck-users/Key_Concepts/Package_Files/"},"PACKAGE files"),"."),(0,a.mdx)("p",null,"Visibility is important to lots of codebase maintainers because it can be used\nto keep projects from pulling in unwanted dependencies. As some examples, App\nCore teams are using Buck visibility as a\n",(0,a.mdx)("a",{parentName:"p",href:"https://fb.prod.workplace.com/groups/2292177024436518/permalink/3112235492430663/"},"replacement to current supermodules for protecting app modularity"),".\nInstagram's using visibility to\n",(0,a.mdx)("a",{parentName:"p",href:"https://fb.prod.workplace.com/groups/devx.build.bffs/posts/5169450219756775/?comment_id=5169500636418400"},"protect modularity and define Link Groups used for build speed optimizations"),".\nThere's interest from various DevX teams in using Buck visibility on\n",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Buck-users/Key_Concepts/Package_Files/"},"PACKAGE files"),"\nto\n",(0,a.mdx)("a",{parentName:"p",href:"https://fb.prod.workplace.com/groups/devx.build.bffs/posts/5169450219756775/"},"enforce repo boundaries, which will allow target determinators to migrate off of sparse profiles and onto Eden"),",\nalthough visibility in its current form is likely not fit for enforcing such\nrepo boundaries. Visibility has also been used to enforce\n",(0,a.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/groups/buckeng/permalink/4392940254087889/"},"requirements that only certain targets are allowed to depend on targets in fbcode/scripts"),"."),(0,a.mdx)("p",null,"For perf reasons, buck2 doesn't always enforce visibility. Instead, it only\nenforces visibility on construction of the configured target graph. Visibility\nchecking is expensive memory-wise because it requires tracking all deps at each\nnode. When constructing configured target graph, this cost is already paid for\nwhen buck2 checks transitive target compatibility. When constructing the\nunconfigured target graph, however, this is costly, so we avoid checking\nvisibility there. (Note that buck does not allow you to specify selects in\nvisibility attributes.)"),(0,a.mdx)("p",null,"In practice, this means that commands like ",(0,a.mdx)("inlineCode",{parentName:"p"},"cquery")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"build")," can enforce\nvisibility whereas commands like ",(0,a.mdx)("inlineCode",{parentName:"p"},"uquery")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"targets")," cannot. Having\nvisibility checked only on the configured target graph is problematic for 2\nreasons:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Visibility is only checked on configured deps after selects are resolved, so\nit's possible for a target to pass visibility checking in one configuration\nbut fail visibility checking in another. For example, a target may pass\nvisibility checking on a linux configuration but fail visibility checking on\nmac configuration if it has a bad mac-only dependency. This makes visibility\nenforcement more difficult because now you have to query the same graph in\nboth linux and mac configuration before you know that visibility is always\nvalid.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Uquery (querying the unconfigured target graph) has better performance than\ncquery (querying the configured target graph). Big-O wise, uquery scales with\nO(# of targets) whereas cquery scales with O((# number of configurations) x\n(# of targets)). Having a way to check visibility on unconfigured target\ngraph can be much cheaper than doing so on configured target graph."))),(0,a.mdx)("h2",{id:"proposed-solution-audit-visibility-command"},"Proposed Solution: ",(0,a.mdx)("inlineCode",{parentName:"h2"},"audit visibility")," command"),(0,a.mdx)("p",null,"It's clear that we need a way to check visibility on the unconfigured target\ngraph, but we don't want ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 uquery")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 targets")," to regress in memory\nuse. To get the best of both worlds, I propose adding a separate command to\nbuck2, ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 audit visibility"),", that will check visibility on the unconfigured\ntarget graph. Instead of checking on construction of the unconfigured target\ngraph, this command will check after construction, which will avoid any memory\nregression. The tradeoff is that the visibility checking won't be cached, and\nrerunning ",(0,a.mdx)("inlineCode",{parentName:"p"},"audit visibility")," will rerun visibility checking on each invocation."),(0,a.mdx)("h2",{id:"usage-and-invocation"},"Usage and Invocation"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 audit visibility")," command will take in a list of target patterns as well\nas common build args like config flags and mode files as args. It will construct\nthe unconfigured target graph based on the ",(0,a.mdx)("strong",{parentName:"p"},"transitive deps")," of those targets\nand check that this graph has valid visibility. Checking transitive deps matches\nthe behavior of visibility checking on cquery, but we may revisit this decision\nin the future if there is a need for just verifying the immediate dependencies."),(0,a.mdx)("p",null,"For example, an invocation to check visibility on the transitive closure of\nfbobjc can be"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"buck2 audit visibility fbsource//fbobjc/...\n")),(0,a.mdx)("p",null,"It cannot be used to check that a target has a valid visibility with respect to\ntargets outside of the transitive closure of its deps. For example,\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 audit visibility fbcode//buck2/starlark-rust/starlark:starlark")," will just\ncheck that all transitive deps of ",(0,a.mdx)("inlineCode",{parentName:"p"},"starlark")," target (including ",(0,a.mdx)("inlineCode",{parentName:"p"},"starlark"),"\ntarget) have valid visibility with respect to each other. It will not check that\nany targets that depend on ",(0,a.mdx)("inlineCode",{parentName:"p"},"starlark")," respect ",(0,a.mdx)("inlineCode",{parentName:"p"},"starlark")," target's visibility\nattribute."))}p.isMDXComponent=!0}}]);