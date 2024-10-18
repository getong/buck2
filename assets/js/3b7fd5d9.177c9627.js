"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8231],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>c});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){return function(t){var a=u(t.components);return n.createElement(e,r({},t,{components:a}))}},u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,p=c["".concat(o,".").concat(m)]||c[m]||h[m]||r;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function x(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},10440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(96540),a(15680));const r={id:"actions"},o="actions type",l={unversionedId:"api/build/actions",id:"api/build/actions",title:"actions type",description:"actions.anon\\_target",source:"@site/../docs/api/build/actions.generated.md",sourceDirName:"api/build",slug:"/api/build/actions",permalink:"/docs/api/build/actions",draft:!1,tags:[],version:"current",frontMatter:{id:"actions"},sidebar:"apiSidebar",previous:{title:"StackFrame type",permalink:"/docs/api/build/StackFrame"},next:{title:"anon_target type",permalink:"/docs/api/build/anon_target"}},s={},d=[{value:"actions.anon_target",id:"actionsanon_target",level:2},{value:"actions.anon_targets",id:"actionsanon_targets",level:2},{value:"actions.artifact_tag",id:"actionsartifact_tag",level:2},{value:"actions.assert_short_path",id:"actionsassert_short_path",level:2},{value:"actions.cas_artifact",id:"actionscas_artifact",level:2},{value:"actions.copied_dir",id:"actionscopied_dir",level:2},{value:"actions.copy_dir",id:"actionscopy_dir",level:2},{value:"actions.copy_file",id:"actionscopy_file",level:2},{value:"actions.declare_output",id:"actionsdeclare_output",level:2},{value:"actions.digest_config",id:"actionsdigest_config",level:2},{value:"actions.download_file",id:"actionsdownload_file",level:2},{value:"actions.dynamic_output",id:"actionsdynamic_output",level:2},{value:"actions.dynamic_output_new",id:"actionsdynamic_output_new",level:2},{value:"actions.run",id:"actionsrun",level:2},{value:"actions.symlink_file",id:"actionssymlink_file",level:2},{value:"actions.symlinked_dir",id:"actionssymlinked_dir",level:2},{value:"actions.tset",id:"actionstset",level:2},{value:"actions.write",id:"actionswrite",level:2},{value:"actions.write_json",id:"actionswrite_json",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.mdx)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"actions-type"},(0,i.mdx)("inlineCode",{parentName:"h1"},"actions")," type"),(0,i.mdx)("h2",{id:"actionsanon_target"},"actions.anon","_","target"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.anon_target(\n    rule: def(**kwargs: typing.Any) -> None,\n    attrs: dict[str, typing.Any],\n) -> anon_target\n")),(0,i.mdx)("p",null,"An anonymous target is defined by the hash of its attributes, rather than its name. During analysis, rules can define and access the providers of anonymous targets before producing their own providers. Two distinct rules might ask for the same anonymous target, sharing the work it performs."),(0,i.mdx)("p",null,"For more details see ",(0,i.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/rule_authors/anon_targets/"},"https://buck2.build/docs/rule_authors/anon_targets/")),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsanon_targets"},"actions.anon","_","targets"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.anon_targets(\n    rules: list[(def(**kwargs: typing.Any) -> None, dict[str, typing.Any])] | tuple[(def(**kwargs: typing.Any) -> None, dict[str, typing.Any]), ...],\n) -> anon_targets\n")),(0,i.mdx)("p",null,"Generate a series of anonymous targets."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsartifact_tag"},"actions.artifact","_","tag"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.artifact_tag() -> artifact_tag\n")),(0,i.mdx)("p",null,"Allocate a new input tag. Used with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dep_files")," argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"run"),"."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsassert_short_path"},"actions.assert","_","short","_","path"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.assert_short_path(artifact: artifact, short_path: str) -> artifact\n")),(0,i.mdx)("p",null,"Generate a promise artifact that has short path accessible on it. The short path's correctness will be asserted during analysis time."),(0,i.mdx)("p",null,"TODO - we would prefer the API to be ",(0,i.mdx)("inlineCode",{parentName:"p"},'ctx.actions.anon_target(xxx).artifact("foo", short_path=yyy)'),", but\nwe cannot support this until we can get access to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AnalysisContext")," without passing it into this method."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionscas_artifact"},"actions.cas","_","artifact"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.cas_artifact(\n    output: artifact | output_artifact | str,\n    digest: str,\n    use_case: str,\n    /,\n    *,\n    expires_after_timestamp: int,\n    is_executable: bool = False,\n    is_tree: bool = False,\n    is_directory: bool = False,\n) -> artifact\n")),(0,i.mdx)("p",null,"Downloads a CAS artifact to an output"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"digest"),": must look like ",(0,i.mdx)("inlineCode",{parentName:"li"},"SHA1:SIZE")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"use_case"),": your RE use case"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"expires_after_timestamp"),": must be a UNIX timestamp. Your digest's TTL must exceed this\ntimestamp. Your build will break once the digest expires, so make sure the expiry is long\nenough (preferably, in years)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_executable"),": indicates the resulting file should be marked with executable\npermissions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_tree"),": digest must point to a blob of type\n",(0,i.mdx)("a",{parentName:"li",href:"https://fburl.com/code/95rqgju0"},"RE.Tree")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_directory"),": digest must point to a blob of type\n",(0,i.mdx)("a",{parentName:"li",href:"https://fburl.com/code/4eg40nnp"},"RE.Directory"))),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionscopied_dir"},"actions.copied","_","dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.copied_dir(\n    output: artifact | output_artifact | str,\n    srcs: dict[str, artifact],\n    /,\n) -> artifact\n")),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," which is a directory containing copied files. The srcs must be a dictionary of path (as string, relative to the result directory) to the bound ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),", which will be laid out in the directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionscopy_dir"},"actions.copy","_","dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.copy_dir(\n    dest: artifact | output_artifact | str,\n    src: artifact,\n    /,\n) -> artifact\n")),(0,i.mdx)("p",null,"Make a copy of a directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionscopy_file"},"actions.copy","_","file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.copy_file(\n    dest: artifact | output_artifact | str,\n    src: artifact,\n    /,\n) -> artifact\n")),(0,i.mdx)("p",null,"Copies the source ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," to the destination (which can be a string representing a filename or an output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),") and returns the output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),". The copy works for files or directories."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsdeclare_output"},"actions.declare","_","output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.declare_output(\n    prefix: str,\n    filename: str = ...,\n    /,\n    *,\n    dir: bool = False,\n) -> artifact\n")),(0,i.mdx)("p",null,"Returns an unbound ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),", representing where a file will go, which must be bound before analysis terminates. The usual way of binding an artifact is with ",(0,i.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),". As an example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'my_output = ctx.actions.declare_output("output.o")\nctx.actions.run(["gcc", "-c", my_source, "-o", my_output.as_output()], category = "compile")\n')),(0,i.mdx)("p",null,"This snippet declares an output with the filename ",(0,i.mdx)("inlineCode",{parentName:"p"},"output.o")," (it will be located in the output directory\nfor this target). Note the use of ",(0,i.mdx)("inlineCode",{parentName:"p"},"as_output")," to tag this artifact as being an output in\nthe action. After binding the artifact you can subsequently use ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_output")," as either an\ninput for subsequent actions, or as the result in a provider."),(0,i.mdx)("p",null,"Artifacts from a single target may not have the same name, so if you then want a second\nartifact also named ",(0,i.mdx)("inlineCode",{parentName:"p"},"output.o")," you need to supply a prefix, e.g.\n",(0,i.mdx)("inlineCode",{parentName:"p"},'ctx.actions.declare_output("directory", "output.o")'),". The artifact will still report having\nname ",(0,i.mdx)("inlineCode",{parentName:"p"},"output.o"),", but will be located at ",(0,i.mdx)("inlineCode",{parentName:"p"},"directory/output.o"),"."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"dir")," argument should be set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"True")," if the binding will be a directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsdigest_config"},"actions.digest","_","config"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.digest_config() -> digest_config\n")),(0,i.mdx)("p",null,"Obtain this daemon's digest configuration. This allows rules to discover what digests the daemon may be able to e.g. defer download because they conform to its RE backend's expected digest format."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsdownload_file"},"actions.download","_","file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.download_file(\n    output: artifact | output_artifact | str,\n    url: str,\n    /,\n    *,\n    vpnless_url: None | str = None,\n    sha1: None | str = None,\n    sha256: None | str = None,\n    is_executable: bool = False,\n    is_deferrable: bool = False,\n) -> artifact\n")),(0,i.mdx)("p",null,"Downloads a URL to an output (filename as string or output artifact). The file at the URL must have the given sha1 or the command will fail. The optional parameter is_executable indicates whether the resulting file should be marked with executable permissions. (Meta-internal) The optional parameter vpnless_url indicates a url from which this resource can be downloaded off VPN; this has the same restrictions as ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," above."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsdynamic_output"},"actions.dynamic","_","output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.dynamic_output(\n    *,\n    dynamic: list[artifact] | tuple[artifact, ...],\n    inputs: list[artifact] | tuple[artifact, ...] = ...,\n    outputs: list[output_artifact] | tuple[output_artifact, ...],\n    f: typing.Callable[[typing.Any, dict[artifact, artifact_value], dict[artifact, artifact]], None],\n) -> None\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output")," allows a rule to use information that was not available when the rule was first run at analysis time. Examples include things like Distributed ThinLTO (where the index file is created by another action) or OCaml builds (where the dependencies are created by ",(0,i.mdx)("inlineCode",{parentName:"p"},"ocamldeps"),")."),(0,i.mdx)("p",null,"The arguments are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dynamic")," - a list of artifacts whose values will be available in the function. These will\nbe built before the function is run."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"inputs")," - parameter is ignored."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"outputs")," - a list of unbound artifacts (created with ",(0,i.mdx)("inlineCode",{parentName:"li"},"declare_artifact"),") which will be\nbound by the function."),(0,i.mdx)("li",{parentName:"ul"},"The function argument is given 3 arguments:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"ctx")," (context) - which is the same as that passed to the initial rule analysis."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"artifacts")," - using one of the artifacts from ",(0,i.mdx)("inlineCode",{parentName:"li"},"dynamic")," (example usage:\n",(0,i.mdx)("inlineCode",{parentName:"li"},"artifacts[artifact_from_dynamic])")," gives an artifact value containing the methods\n",(0,i.mdx)("inlineCode",{parentName:"li"},"read_string"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"read_lines"),", and ",(0,i.mdx)("inlineCode",{parentName:"li"},"read_json")," to obtain the values from the disk in\nvarious formats.  Anything too complex should be piped through a Python script for\ntransformation to JSON."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"outputs")," - using one of the artifacts from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"dynamic_output"),"'s ",(0,i.mdx)("inlineCode",{parentName:"li"},"outputs")," (example\nusage: ",(0,i.mdx)("inlineCode",{parentName:"li"},"outputs[artifact_from_dynamic_output_outputs]"),") gives an unbounded artifact. The\nfunction argument must use its ",(0,i.mdx)("inlineCode",{parentName:"li"},"outputs")," argument to bind output artifacts, rather than\nreusing artifacts from the outputs passed into ",(0,i.mdx)("inlineCode",{parentName:"li"},"dynamic_output")," directly."))),(0,i.mdx)("li",{parentName:"ul"},"The function must call ",(0,i.mdx)("inlineCode",{parentName:"li"},"ctx.actions")," (probably ",(0,i.mdx)("inlineCode",{parentName:"li"},"ctx.actions.run"),") to bind all outputs. It\ncan examine the values of the dynamic variables and depends on the inputs.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The function will usually be a ",(0,i.mdx)("inlineCode",{parentName:"li"},"def"),", as ",(0,i.mdx)("inlineCode",{parentName:"li"},"lambda")," in Starlark does not allow statements,\nmaking it quite underpowered. For full details see\n",(0,i.mdx)("a",{parentName:"li",href:"https://buck2.build/docs/rule_authors/dynamic_dependencies/"},"https://buck2.build/docs/rule_authors/dynamic_dependencies/"),".")))),(0,i.mdx)("p",null,"Besides dynamic dependencies, there is a second use case for ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),": say that you\nhave some output artifact, and that the analysis to produce the action that outputs that\nartifact is expensive, ie takes a lot of CPU time; you would like to skip that work in\nbuilds that do not actually use that artifact."),(0,i.mdx)("p",null,"This can be accomplished by putting the analysis for that artifact behind a ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),"\nwith an empty ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic")," list. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),"'s function will not be run unless one of\nthe actions it outputs is actually requested as part of the build."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsdynamic_output_new"},"actions.dynamic","_","output","_","new"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.dynamic_output_new(\n    dynamic_actions: DynamicAction,\n    /,\n) -> DynamicValue\n")),(0,i.mdx)("p",null,"New version of ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),"."),(0,i.mdx)("p",null,"This is work in progress, and will eventually replace the old ",(0,i.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),"."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionsrun"},"actions.run"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.run(\n    arguments: CellPath | artifact | cell_root | cmd_args | label | output_artifact | project_root | resolved_macro | str | tagged_command_line | target_label | transitive_set_args_projection | write_json_cli_args | list | RunInfo,\n    /,\n    *,\n    category: str,\n    identifier: None | str = None,\n    env: dict[str, CellPath | artifact | cell_root | cmd_args | label | output_artifact | project_root | resolved_macro | str | tagged_command_line | target_label | transitive_set_args_projection | write_json_cli_args | RunInfo] = ...,\n    local_only: bool = False,\n    prefer_local: bool = False,\n    prefer_remote: bool = False,\n    low_pass_filter: bool = True,\n    always_print_stderr: bool = False,\n    weight: int = ...,\n    weight_percentage: int = ...,\n    dep_files: dict[str, artifact_tag] = ...,\n    metadata_env_var: str = ...,\n    metadata_path: str = ...,\n    no_outputs_cleanup: bool = False,\n    allow_cache_upload: bool = False,\n    allow_dep_file_cache_upload: bool = False,\n    force_full_hybrid_if_capable: bool = False,\n    exe: RunInfo | WorkerRunInfo = ...,\n    unique_input_inodes: bool = False,\n    error_handler: typing.Callable = ...,\n    remote_execution_dependencies: list[dict[str, str]] = [],\n) -> None\n")),(0,i.mdx)("p",null,"Runs a command"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"arguments"),": must be of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"cmd_args"),", or a type convertible to such (such as a list of\nstrings and artifacts) and must contain at least one ",(0,i.mdx)("inlineCode",{parentName:"li"},".as_output()")," artifact"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"category"),": category and identifier - when used together, identify the action in Buck2's\nevent stream, and must be unique for a given target"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"weight"),": used to note how heavy the command is and will typically be set to a higher\nvalue to indicate that less such commands should be run in parallel (if running locally)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"no_outputs_cleanup"),": if this flag is set then Buck2 won't clean the outputs of a previous\nbuild that might be present on a disk; in which case, command from arguments should be\nresponsible for the cleanup (that is useful, for example, when an action is supporting\nincremental mode and its outputs are based on result from a previous build)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"meadata_path")," should be used together: both set or both unset",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_path"),": defines a path relative to the result directory for a file with\naction metadata, which will be created right before the command will be run."),(0,i.mdx)("li",{parentName:"ul"},"Metadata contains the path relative to the Buck2 project root and hash digest for\nevery action input (this excludes symlinks as they could be resolved by a user script\nif needed). The resolved path relative to the Buck2 project for the metadata file will\nbe passed to command from arguments, via the environment variable, with its name set\nby ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")),(0,i.mdx)("li",{parentName:"ul"},"Both ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_path")," are useful when making actions behave in\nan incremental manner (for details, see ",(0,i.mdx)("a",{parentName:"li",href:"https://buck2.build/docs/rule_authors/incremental_actions/"},"Incremental\nActions"),")"))),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"prefer_local"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"prefer_remote")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"local_only")," options allow selecting where the\naction should run if the executor selected for this target is a hybrid executor.",(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre"},'* All those options disable concurrent execution: the action will run on the preferred\nplatform first (concurrent execution only happens with a "full" hybrid executor).\n* Execution may be retried on the "non-preferred" platform if it fails due to a\ntransient error, except for `local_only`, which does not allow this.\n* If the executor selected is a remote-only executor and you use `local_only`, that\'s an\nerror. The other options will not raise errors.\n* Setting more than one of those options is an error.\n* Those flags behave the same way as the equivalent `--prefer-remote`, `--prefer-local`\nand `--local-only` CLI flags. The CLI flags take precedence.\n* The `force_full_hybrid_if_capable` option overrides the `use_limited_hybrid` hybrid.\nThe options listed above take precedence if set.\n'))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"remote_execution_dependencies"),": list of dependencies which is passed to Remote Execution.\nEach dependency is dictionary with the following keys:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"smc_tier"),": name of the SMC tier to call by RE Scheduler."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"id"),": name of the dependency.")))),(0,i.mdx)("p",null,"When actions execute, they'll do so from the root of the repository. As they execute,\nactions have exclusive access to their output directory."),(0,i.mdx)("p",null,'Actions also get exclusive access to a "scratch" path that is exposed via the environment\nvariable ',(0,i.mdx)("inlineCode",{parentName:"p"},"BUCK_SCRATCH_PATH"),". This path is expressed as a path relative to the working\ndirectory (i.e. relative to the project). This path is guaranteed to exist when the action\nexecutes."),(0,i.mdx)("p",null,"When actions run locally, the scratch path is also used as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TMPDIR"),"."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionssymlink_file"},"actions.symlink","_","file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.symlink_file(\n    dest: artifact | output_artifact | str,\n    src: artifact,\n    /,\n) -> artifact\n")),(0,i.mdx)("p",null,"Creates a symlink to the source ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," at the destination (which can be a string representing a filename or an output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),") and returns the output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),". The symlink works for files or directories."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionssymlinked_dir"},"actions.symlinked","_","dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.symlinked_dir(\n    output: artifact | output_artifact | str,\n    srcs: dict[str, artifact],\n    /,\n) -> artifact\n")),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," that is a directory containing symlinks. The srcs must be a dictionary of path (as string, relative to the result directory) to bound ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),", which will be laid out in the directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionstset"},"actions.tset"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.tset(\n    definition: transitive_set_definition,\n    /,\n    *,\n    value = ...,\n    children: typing.Iterable = ...,\n) -> transitive_set\n")),(0,i.mdx)("p",null,"Creates a new transitive set. For details, see ",(0,i.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/rule_authors/transitive_sets/"},"https://buck2.build/docs/rule_authors/transitive_sets/"),"."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionswrite"},"actions.write"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.write(\n    output: artifact | output_artifact | str,\n    content: CellPath | artifact | cell_root | cmd_args | label | output_artifact | project_root | resolved_macro | str | tagged_command_line | target_label | transitive_set_args_projection | write_json_cli_args | list | RunInfo,\n    /,\n    *,\n    is_executable: bool = False,\n    allow_args: bool = False,\n    with_inputs: bool = False,\n    absolute: bool = False,\n) -> artifact | (artifact, list[artifact])\n")),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," whose contents are ",(0,i.mdx)("inlineCode",{parentName:"p"},"content")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_executable")," (optional): indicates whether the resulting file should be marked with\nexecutable permissions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"allow_args")," (optional): must be set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"True")," if you want to write parameter arguments to\nthe file (in particular, macros that write to file)",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If it is true, the result will be a pair of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"artifact")," containing content and a\nlist of artifact values that were written by macros, which should be used in hidden\nfields or similar"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"absolute")," (optional): if set, this action will produce absolute paths in its output when\nrendering artifact paths. You generally shouldn't use this if you plan to use this action\nas the input for anything else, as this would effectively result in losing all shared\ncaching.")),(0,i.mdx)("p",null,"The content is often a string, but can be any ",(0,i.mdx)("inlineCode",{parentName:"p"},"ArgLike")," value. This is occasionally useful\nfor generating scripts to run as a part of another action. ",(0,i.mdx)("inlineCode",{parentName:"p"},"cmd_args")," in the content are\nnewline separated unless another delimiter is explicitly specified."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"actionswrite_json"},"actions.write","_","json"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def actions.write_json(\n    output: artifact | output_artifact | str,\n    content: CellPath | None | artifact | bool | cell_root | cmd_args | enum | int | label | output_artifact | project_root | record | resolved_macro | str | tagged_command_line | tagged_value | target_label | transitive_set_args_projection | transitive_set_json_projection | write_json_cli_args | list | tuple | dict | struct(..) | RunInfo | provider,\n    /,\n    *,\n    with_inputs: bool = False,\n    pretty: bool = False,\n    absolute: bool = False,\n) -> artifact | write_json_cli_args\n")),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," whose contents are ",(0,i.mdx)("inlineCode",{parentName:"p"},"content")," written as a JSON value."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"output"),": can be a string, or an existing artifact created with ",(0,i.mdx)("inlineCode",{parentName:"li"},"declare_output")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"content"),":  must be composed of the basic json types (boolean, number, string, list/tuple,\ndictionary) plus artifacts and command lines",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"An artifact will be written as a string containing the path"),(0,i.mdx)("li",{parentName:"ul"},"A command line will be written as a list of strings, unless ",(0,i.mdx)("inlineCode",{parentName:"li"},"joined=True")," is set, in\nwhich case it will be a string"))),(0,i.mdx)("li",{parentName:"ul"},"If you pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"with_inputs = True"),", you'll get back a ",(0,i.mdx)("inlineCode",{parentName:"li"},"cmd_args")," that expands to the JSON\nfile but carries all the underlying inputs as dependencies (so you don't have to use, for\nexample, ",(0,i.mdx)("inlineCode",{parentName:"li"},"hidden")," for them to be added to an action that already receives the JSON file)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"pretty")," (optional): write formatted JSON (defaults to ",(0,i.mdx)("inlineCode",{parentName:"li"},"False"),")"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"absolute")," (optional): if set, this action will produce absolute paths in its output when\nrendering artifact paths. You generally shouldn't use this if you plan to use this action\nas the input for anything else, as this would effectively result in losing all shared\ncaching. (defaults to ",(0,i.mdx)("inlineCode",{parentName:"li"},"False"),")")))}m.isMDXComponent=!0}}]);