# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


import json

from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test


@buck_test(inplace=True)
async def test_target_call_stacks_default(buck: Buck) -> None:
    out = await buck.cquery(
        "--stack",
        "fbcode//buck2/tests/e2e/query/cquery/test_target_call_stacks_data:test",
    )

    assert "export_file" in out.stdout


@buck_test(inplace=True)
async def test_target_call_stacks_json(buck: Buck) -> None:
    out = await buck.cquery(
        "--stack",
        "--output-attribute=.*",
        "fbcode//buck2/tests/e2e/query/cquery/test_target_call_stacks_data:test",
    )

    out = json.loads(out.stdout)
    call_stack = list(out.values())[0]["buck.target_call_stack"]
    assert "export_file" in call_stack
