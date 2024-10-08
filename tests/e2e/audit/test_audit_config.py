# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


import tempfile
from pathlib import Path

from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test
from buck2.tests.e2e_util.helper.assert_occurrences import assert_occurrences


@buck_test(
    inplace=True,
    extra_buck_config={
        "test": {
            "foo": "bar",
        }
    },
)
async def test_extra_buck_config(buck: Buck) -> None:
    """
    Assert that our testing framework works as expected.
    """

    cfg = (await buck.audit_config("--style=json")).get_json()
    assert cfg.get("test.foo") == "bar"


@buck_test(inplace=True)
async def test_audit_config_json(buck: Buck) -> None:
    result = await buck.audit_config("--style=json")
    result_json = result.get_json()
    assert result_json is not None


@buck_test(inplace=False, data_dir="cells")
async def test_audit_config_cell_json(buck: Buck) -> None:
    out = await buck.audit_config(
        "--style",
        "json",
    )
    out_json = out.get_json() or {}
    assert out_json.get("test.is_root") == "yes"
    assert out_json.get("test.is_code") is None

    out = await buck.audit_config("--style", "json", "--cell", "code")
    out_json = out.get_json() or {}
    assert out_json.get("test.is_code") == "yes"
    assert out_json.get("test.is_root") is None

    out = await buck.audit_config(
        "--style",
        "json",
        rel_cwd=Path("fbc"),
    )
    out_json = out.get_json() or {}
    assert out_json.get("test.is_code") == "yes"
    assert out_json.get("test.is_root") is None


@buck_test(inplace=False, data_dir="cells")
async def test_audit_config_all_cells(buck: Buck) -> None:
    out = await buck.audit_config(
        "--all-cells",
        "--style",
        "json",
    )
    out_json = out.get_json() or {}
    print(out_json)
    assert out_json.get("code//bar.a") == "2"
    assert out_json.get("source//bar.a") == "1"
    assert out_json.get("root//bar.a") == "1"
    assert out_json.get("b//bar.a") is None

    out = await buck.audit_config(
        "--all-cells",
        "--style",
        "json",
        "code//bar.a",
    )
    out_json = out.get_json() or {}
    assert out_json.get("code//bar.a") == "2"
    assert out_json.get("source//bar.a") is None

    out = await buck.audit_config(
        "--all-cells",
    )
    assert "# Cell: source\n[bar]\n    a = 1\n" in out.stdout


@buck_test(inplace=True)
async def test_audit_config_with_config_value(buck: Buck) -> None:
    result_config = await buck.audit_config(
        "python",
        "--style",
        "json",
        "-cpython.helpers=true",
    )
    result_config_json = result_config.get_json()
    result_override = await buck.audit_config(
        "python",
        "--style",
        "json",
        "--config",
        "python.check_srcs_ext=",
    )
    result_override_json = result_override.get_json()

    assert result_config_json is not None
    assert result_override_json is not None

    assert result_config_json.get("python.helpers") == "true"
    assert result_override_json.get("python.check_srcs_ext") is None


@buck_test(inplace=True)
async def test_audit_config_with_config_file(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "@fbcode//mode/opt",
        "project.buck_out",
        "--style",
        "json",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/opt"


@buck_test(inplace=True)
async def test_audit_config_argfile_outside_repo(buck: Buck) -> None:
    with tempfile.NamedTemporaryFile(mode="w") as argfile:
        argfile.write("@fbcode//mode/opt")
        argfile.flush()
        result_file = await buck.audit_config(
            f"@{argfile.name}",
            "project.buck_out",
            "--style",
            "json",
        )
        result_file_json = result_file.get_json()

        assert result_file_json is not None
        assert result_file_json.get("project.buck_out") == "buck-out/opt"


@buck_test(inplace=True)
async def test_audit_config_executable_argfile(buck: Buck) -> None:
    result = await buck.audit_config(
        "@buck2/tests/targets/configurations_uncategorized/executable_argfiles/test_ex_argfile.py#iphonesimulator-x86_64",
        "cxx",
        "apple",
        "--style",
        "json",
    )
    result_json = result.get_json()

    assert result_json is not None
    assert result_json.get("cxx.default_platform") == "iphonesimulator-x86_64"
    assert result_json.get("apple.xctool_zip_target") is None
    assert result_json.get("apple.xctool_path") == "/usr/bin/true"


@buck_test(inplace=True)
async def test_audit_config_buck2_only_executable_argfile(buck: Buck) -> None:
    result = await buck.audit_config(
        "@buck2/tests/targets/configurations_uncategorized/executable_argfiles/test_buck2_only_argfile.py",
        "user",
        "--style",
        "json",
    )
    result_json = result.get_json()

    assert result_json is not None
    assert result_json.get("user.buck2_arg_file") == "1"


@buck_test(inplace=True)
async def test_audit_config_stdin_argfile_simple(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "--style=json",
        "@-",
        input="\n".join(
            [
                "@fbcode//mode/opt",
                "project.buck_out",
            ]
        ).encode(),
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/opt"


@buck_test(inplace=True)
async def test_audit_config_stdin_argfile_cell_from_cwd(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "--style=json",
        "@-",
        input="\n".join(
            [
                # Should resolve to `fbcode//mode/opt` because
                # the cwd is `fbcode/buck2`.
                "@//mode/opt",
                "project.buck_out",
            ]
        ).encode(),
        rel_cwd=Path("buck2"),
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/opt"


@buck_test(inplace=True)
async def test_audit_config_location_extended(buck: Buck) -> None:
    result = await buck.audit_config(
        "@fbcode//buck2/tests/targets/configurations_uncategorized/executable_argfiles/jackalope",
        "apple.xctool_path",
        "--location=extended",
    )
    assert "xctool_path = /usr/bin/true" in result.stdout
    assert (
        "fbcode/buck2/tests/targets/configurations_uncategorized/executable_argfiles/jackalope-apple-toolchain.bcfg:2"
        in result.stdout
    )


@buck_test(inplace=True)
async def test_audit_config_gets_correct_cell_from_cwd(buck: Buck) -> None:
    result = await buck.audit_config("repositories.fbcode", "--style=json")
    assert result.get_json() == {"repositories.fbcode": "."}

    result = await buck.audit_config(
        "repositories.fbsource",
        "--style=json",
        rel_cwd=Path(".."),
    )
    assert result.get_json() == {"repositories.fbsource": "."}


@buck_test(inplace=True)
async def test_audit_config_with_cell_syntax(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "fbcode//project.buck_out",
        "--style",
        "json",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("fbcode//project.buck_out") == "buck-out/dev"


@buck_test(inplace=False, data_dir="cells")
async def test_cell_relative_configs(buck: Buck) -> None:
    result_root_cell = await buck.audit_config(
        "--config",
        "root//bar.a=5",
        "--style",
        "json",
    )
    result_root_cell_json = result_root_cell.get_json()

    assert result_root_cell_json is not None
    assert result_root_cell_json.get("foo.b") == "5"

    result_nonroot_cell = await buck.audit_config(
        "foo",
        "--config",
        "code//bar.a=5",
        "--style",
        "json",
        "--cell",
        "code",
    )
    result_nonroot_cell_json = result_nonroot_cell.get_json()

    assert result_nonroot_cell_json is not None
    assert result_nonroot_cell_json.get("foo.b") == "5"

    result_diff_cell = await buck.audit_config(
        "foo",
        "--config",
        "code//bar.a=5",
        "--style",
        "json",
        "--cell",
        "source",
    )
    result_diff_cell_json = result_diff_cell.get_json()

    assert result_diff_cell_json is not None
    assert result_diff_cell_json.get("foo.b") == "1"

    result_all_cell = await buck.audit_config(
        "foo",
        "--config",
        "bar.a=5",
        "--style",
        "json",
        "--cell",
        "source",
    )
    result_all_cell_json = result_all_cell.get_json()

    assert result_all_cell_json is not None
    assert result_all_cell_json.get("foo.b") == "5"


@buck_test(inplace=True)
async def test_reuse_current_config_with_config_overrides_and_previous_invocation(
    buck: Buck,
) -> None:
    result_file = await buck.audit_config(
        "@fbcode//mode/dev",
        "project.buck_out",
        "--style",
        "json",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/dev"

    result_file = await buck.audit_config(
        "@fbcode//mode/opt",
        "--config",
        "foo.bar=foobar",
        "--config-file",
        "fbsource//tools/buckconfigs/fbcode/modes/dev.bcfg",
        "project.buck_out",
        "--reuse-current-config",
        "--style",
        "json",
    )

    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/dev"

    default_to_use_current_config = "using current config instead"
    opt_override = "tools/buckconfigs/fbcode/modes/opt.bcfg"
    dev_override = "tools/buckconfigs/fbcode/modes/dev.bcfg"
    foobar_override = "foo.bar=foobar"
    assert_occurrences(default_to_use_current_config, result_file.stderr, 1)
    assert_occurrences(opt_override, result_file.stderr, 1)
    assert_occurrences(dev_override, result_file.stderr, 1)
    assert_occurrences(foobar_override, result_file.stderr, 1)


@buck_test(inplace=True)
async def test_reuse_current_config_with_config_overrides_and_no_previous_invocation(
    buck: Buck,
) -> None:
    result_file = await buck.audit_config(
        "project.buck_out",
        "--style",
        "json",
        "--reuse-current-config",
        "@fbcode//mode/opt",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/opt"

    both_set_no_prev_invocation = "Ignoring --reuse-current-config flag"
    assert_occurrences(both_set_no_prev_invocation, result_file.stderr, 1)


@buck_test(inplace=True)
async def test_reuse_current_config_with_no_previous_invocation(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "project.buck_out",
        "--style",
        "json",
        "--reuse-current-config",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/dev"

    no_previous_invocation_detected = "Ignoring --reuse-current-config flag"
    assert_occurrences(no_previous_invocation_detected, result_file.stderr, 1)


@buck_test(inplace=True)
async def test_reuse_current_config_with_previous_invocation(buck: Buck) -> None:
    result_file = await buck.audit_config(
        "@fbcode//mode/opt",
        "project.buck_out",
        "--style",
        "json",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    assert result_file_json.get("project.buck_out") == "buck-out/opt"

    result_file = await buck.audit_config(
        "project.buck_out",
        "--style",
        "json",
        "--reuse-current-config",
    )
    result_file_json = result_file.get_json()

    assert result_file_json is not None
    # assert it does not revert back to @//mode/dev by default
    assert result_file_json.get("project.buck_out") == "buck-out/opt"
