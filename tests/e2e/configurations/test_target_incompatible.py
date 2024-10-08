# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


import pytest

from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.asserts import expect_failure
from buck2.tests.e2e_util.buck_workspace import buck_test


@buck_test(inplace=False)
async def test_incompatible_target_skipping(buck: Buck) -> None:
    # incompatible target should be skipped when a package
    result = await buck.build("//:")
    assert "Skipping target incompatible node `root//:incompatible (" in result.stderr
    # when explicitly requested, it should be a failure
    await expect_failure(buck.build("//:incompatible"))
    # should be a failure if it's both explicitly requested and part of a package/recursive pattern
    # TODO(cjhopman): this doesn't work correctly yet
    # await expect_failure(
    # buck.build("//:", "//:incompatible")
    # )


INCOMPATIBLE_ERROR = "root//:incompatible is incompatible with"


@buck_test(inplace=False)
@pytest.mark.parametrize(  # type: ignore
    "target_pattern",
    [
        "//dep_incompatible:",
        "//dep_incompatible:dep_incompatible",
        "//dep_incompatible:transitive_dep_incompatible",
    ],
)
async def test_dep_incompatible_target(buck: Buck, target_pattern: str) -> None:
    # a compatible target with incompatible deps should always fail no matter what.
    await expect_failure(
        buck.cquery(target_pattern),
        stderr_regex=INCOMPATIBLE_ERROR,
    )
    await expect_failure(
        buck.build(target_pattern, "--skip-incompatible-targets"),
        stderr_regex=INCOMPATIBLE_ERROR,
    )


@buck_test(inplace=False)
async def test_incompatible_target_with_incompatible_dep(buck: Buck) -> None:
    target = "//dep_incompatible:target_and_dep_incompatible"
    await buck.cquery(target)
    await buck.build(target, "--skip-incompatible-targets")
    await expect_failure(
        buck.build(target),
        stderr_regex=f"{target} is incompatible with",
    )


@buck_test(inplace=False)
async def test_exec_dep_transitive_incompatible(buck: Buck) -> None:
    await buck.cquery("//exec_dep:one_exec_platform_transitive_incompatible")
