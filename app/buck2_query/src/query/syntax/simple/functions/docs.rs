/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::fmt::Write;

use indexmap::IndexMap;
use itertools::Itertools;

use crate::query::syntax::simple::functions::helpers::QueryArgType;

pub struct MarkdownOptions {
    /// Whether to include alt text (used for expression type links).
    pub include_alt_text: bool,
}

// Instances created by #[query_module]
pub struct ArgDescription {
    pub name: String,
    pub repr_format: String,
    pub arg_type: QueryArgType,
}

impl ArgDescription {
    pub fn render_markdown(&self) -> String {
        format!(
            "{}: {}",
            &self.name,
            self.repr_format
                .replace("{}", &format!("*{}*", self.arg_type.repr()))
        )
    }
}

// Instances created by #[query_module]
pub struct FunctionDescription {
    pub name: &'static str,
    pub args: Vec<ArgDescription>,

    pub short_help: Option<String>,
    pub details: Option<String>,
}

impl FunctionDescription {
    pub fn render_short_markdown(&self) -> String {
        format!(
            " - {}({}){}",
            self.name,
            self.args.iter().map(|v| v.render_markdown()).join(", "),
            &match &self.short_help {
                None => "".to_owned(),
                Some(v) => format!(": {}", v),
            }
        )
    }

    pub fn render_markdown(&self) -> String {
        let mut rendered = format!(
            "### {}({})\n\n",
            self.name,
            self.args.iter().map(|v| v.render_markdown()).join(", ")
        );
        if let Some(v) = &self.short_help {
            writeln!(rendered, "{}\n", v).unwrap();
        }

        if let Some(v) = &self.details {
            writeln!(rendered, "{}\n", v).unwrap();
        }
        rendered
    }
}

// Instances created by #[query_module]
pub struct ModuleDescription {
    pub functions: IndexMap<&'static str, FunctionDescription>,

    pub short_help: Option<String>,
    pub details: Option<String>,
}

impl ModuleDescription {
    pub fn render_markdown(&self) -> String {
        let mut rendered = format!(
            "## {}\n\n",
            match &self.short_help {
                Some(v) => v,
                None => "Query functions",
            }
        );
        if let Some(v) = &self.details {
            writeln!(rendered, "{}\n", v).unwrap();
        }

        for (_, func) in &self.functions {
            writeln!(rendered, "{}\n", func.render_short_markdown()).unwrap();
        }

        for (_, func) in &self.functions {
            writeln!(rendered, "{}\n", func.render_markdown()).unwrap();
        }

        rendered
    }
}

pub struct QueryEnvironmentDescription {
    pub name: String,
    pub mods: Vec<ModuleDescription>,
}

impl QueryEnvironmentDescription {
    pub fn render_markdown(&self, options: &MarkdownOptions) -> String {
        format!(
            indoc::indoc! {r#"
            # {}

            ## Query Value Types
            {}

            {}
            "#},
            &self.name,
            enum_iterator::all::<QueryArgType>()
                .map(|v| render_arg_type_markdown(v, options))
                .join("\n\n"),
            self.mods.iter().map(|v| v.render_markdown()).join("\n\n")
        )
    }
}

fn render_arg_type_markdown(v: QueryArgType, options: &MarkdownOptions) -> String {
    let mut rendered = format!("- *{}*: ", v.repr());
    match (options.include_alt_text, v.short_description()) {
        (true, Some(short_description)) => {
            rendered.push_str(short_description);
        }
        _ => {}
    };
    rendered.push_str(&format!("\n\n  {}", v.description()));
    rendered
}
