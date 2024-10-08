# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.asserts import expect_failure
from buck2.tests.e2e_util.buck_workspace import buck_test


@buck_test(inplace=True)
async def test_lint_buck2(buck: Buck) -> None:
    await buck.starlark(
        "lint",
        "buck2",
        "-c",
        "project.ignore=buck2/tests/e2e/test_lsp_data,buck2/tests/e2e/test_starlark_data",
    )


@buck_test(inplace=False)
async def test_lint_fails(buck: Buck) -> None:
    await expect_failure(
        buck.starlark("lint", "bad_warning.bzl"),
        stderr_regex="Found 3 lints",
    )


@buck_test(inplace=True)
async def test_typecheck_prelude_lightweight(buck: Buck) -> None:
    await buck.starlark("typecheck", "buck2/prelude/prelude.bzl")


@buck_test(inplace=True)
async def test_typecheck_prelude_compiler(buck: Buck) -> None:
    await buck.uquery("fbcode//buck2:buck2", "--unstable-typecheck")


@buck_test(inplace=False)
async def test_typecheck_fails(buck: Buck) -> None:
    await buck.starlark("typecheck", "good.bzl")
    await expect_failure(
        buck.starlark("typecheck", "bad.bzl"),
        stderr_regex="Detected 2 errors",
    )
