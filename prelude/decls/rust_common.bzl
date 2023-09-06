# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load("@prelude//rust:link_info.bzl", "RustProcMacroPlugin")
load(":toolchains_common.bzl", "toolchains_common")

def rust_target_dep(is_binary: bool) -> Attr:
    return attrs.dep(
        pulls_and_pushes_plugins = [] if is_binary else [RustProcMacroPlugin],
        pulls_plugins = [RustProcMacroPlugin] if is_binary else [],
    )

def _deps_arg(is_binary: bool):
    return {
        "deps": attrs.list(
            rust_target_dep(is_binary),
            default = [],
            doc = """
    The set of dependencies of this rule. Currently, this supports rust\\_library
     and prebuilt\\_rust\\_library rules.
""",
        ),
    }

def _srcs_arg():
    return {
        "srcs": attrs.list(attrs.source(), default = [], doc = """
    The set of Rust source files to be compiled by this rule.


     One of the source files is the root module of the crate. By default this is `lib.rs` for libraries, `main.rs` for executables, or
     the crate's name with `.rs` appended. This can be overridden with the `crate_root` rule parameter.
"""),
    }

def _features_arg():
    return {
        "features": attrs.list(attrs.string(), default = [], doc = """
    The set of features to be enabled for this rule.


     These are passed to `rustc` with `--cfg feature="{feature}"`, and can be used in the code with `#[cfg(feature = "{feature}")]`.
"""),
    }

def _edition_arg():
    return {
        "edition": attrs.option(attrs.string(), default = None, doc = """
    Set the language edition to be used for this rule. Can be set to any edition the
     compiler supports (`2018` right now). If unset it uses the compiler's default
     (`2015`).
"""),
    }

def _rustc_flags_arg():
    return {
        "rustc_flags": attrs.list(attrs.arg(), default = [], doc = """
    The set of additional compiler flags to pass to `rustc`.
"""),
    }

def _linker_flags_arg():
    return {
        "linker_flags": attrs.list(attrs.arg(), default = [], doc = """
    The set of additional flags to pass to the linker.
"""),
    }

def _crate(crate_type):
    return {
        "crate": crate_type,
    }

def _crate_root():
    return {
        "crate_root": attrs.option(attrs.string(), default = None, doc = """
    Set the name of the top-level source file for the crate, which can be used to override the
     default (see `srcs`).
"""),
    }

def _env_arg():
    return {
        "env": attrs.dict(key = attrs.string(), value = attrs.arg(), sorted = False, default = {}, doc = """
    Set environment variables for this rule's invocations of rustc. The environment variable
     values may include macros which are expanded.
"""),
    }

def _mapped_srcs_arg():
    return {
        "mapped_srcs": attrs.dict(key = attrs.source(), value = attrs.string(), sorted = False, default = {}, doc = """
    Add source files along with a local path mapping. Rust is sensitive to the layout of
     source files, as the directory structure follows the module structure. However this is
     awkward if the source file is, for example, generated by another rule. In this case, you
     can set up a mapping from the actual source path to something that makes sense locally.
     For example `mapped_srcs = {":generate-module", "src/generated.rs" }`.
     These are added to the regular `srcs`, so a file should not be listed in
     both.
"""),
    }

def _named_deps_arg(is_binary: bool):
    return {
        "named_deps": attrs.dict(key = attrs.string(), value = rust_target_dep(is_binary), sorted = False, default = {}, doc = """
    Add crate dependencies and define a local name by which to use that dependency by. This
     allows a crate to have multiple dependencies with the same crate name. For example:
     `named_deps = {"local_name", ":some_rust_crate" }`.
     The dependencies may also be non-Rust, but the alias is ignored. It has no effect on the
     symbols provided by a C/C++ library.
"""),
    }

def _toolchains_args():
    return {
        "_cxx_toolchain": toolchains_common.cxx(),
        "_rust_toolchain": toolchains_common.rust(),
    }

def _workspaces_arg():
    return {
        "_workspaces": attrs.list(attrs.label(), default = [], doc = """
    Internal implementation detail of Rust workspaces. This should not be set manually and will be
     replaced in favor of metadata in a future version of buck2.
"""),
    }

rust_common = struct(
    deps_arg = _deps_arg,
    srcs_arg = _srcs_arg,
    features_arg = _features_arg,
    edition_arg = _edition_arg,
    rustc_flags_arg = _rustc_flags_arg,
    linker_flags_arg = _linker_flags_arg,
    crate = _crate,
    crate_root = _crate_root,
    env_arg = _env_arg,
    mapped_srcs_arg = _mapped_srcs_arg,
    named_deps_arg = _named_deps_arg,
    toolchains_args = _toolchains_args,
    workspaces_arg = _workspaces_arg,
)
