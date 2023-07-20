# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load(
    "@prelude//utils:utils.bzl",
    "expect",
    "flatten",
)

ArtifactInfo = record(
    label = field("label"),
    artifacts = field(["artifact"]),
)

def _get_artifacts(entries: [ArtifactInfo.type]) -> ["artifact"]:
    return flatten([entry.artifacts for entry in entries])

_ArtifactTSet = transitive_set(
    args_projections = {
        "artifacts": _get_artifacts,
    },
)

ArtifactTSet = record(
    _tset = field([_ArtifactTSet.type, None], None),
)

def make_artifact_tset(
        actions: "actions",
        # Must be non-`None` if artifacts are passed in to `artifacts`.
        label: ["label", None] = None,
        artifacts: ["artifact"] = [],
        infos: [ArtifactInfo.type] = [],
        children: [ArtifactTSet.type] = []) -> ArtifactTSet.type:
    expect(
        label != None or not artifacts,
        "must pass in `label` to associate with artifacts",
    )

    # As a convenience for our callers, filter our `None` children.
    children = [c._tset for c in children if c._tset != None]

    # Build list of all non-child values.
    values = []
    if artifacts:
        values.append(ArtifactInfo(label = label, artifacts = artifacts))
    values.extend(infos)

    # If there's no children or artifacts, return `None`.
    if not values and not children:
        return ArtifactTSet()

    # We only build a `_ArtifactTSet` if there's something to package.
    kwargs = {}
    if values:
        kwargs["value"] = values
    if children:
        kwargs["children"] = children
    return ArtifactTSet(
        _tset = actions.tset(_ArtifactTSet, **kwargs),
    )

def project_artifacts(
        actions: "actions",
        tsets: [ArtifactTSet.type] = []) -> ["transitive_set_args_projection"]:
    """
    Helper to project a list of optional tsets.
    """

    tset = make_artifact_tset(
        actions = actions,
        children = tsets,
    )

    if tset._tset == None:
        return []

    return [tset._tset.project_as_args("artifacts")]
