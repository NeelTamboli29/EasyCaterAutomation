---
name: Salesforce Expert Global Rule
description: Enforces skill-first discovery (load the best-matching skill before acting) across all tasks — building, retrieving, and comprehension of a Salesforce artifact (understanding an existing one, e.g. summarize or explain a Flow) alike, as well as metadata generation; for metadata, enforces skill load -> API context -> file generation; secondarily prefers the Salesforce MCP tools over the sf CLI.
alwaysApply: true
---


# Rule: Skill-First Workflow

## Objective
Discover and load the most relevant skill before acting on any request a skill matches. Skills are not limited to metadata — they also cover app and UI development (including React / UI bundles), media and CMS retrieval, Data Cloud, deployment, testing, and comprehension tasks (understanding an existing artifact rather than acting on it — e.g. summarizing or explaining a Flow), and more; treat these as examples, not an exhaustive list.

## Gate

1. Discover the best-matching skill before acting: call `search_skills` with keywords from the request when that tool is available; otherwise consult the catalog your skill-loading tool lists (`name: description`).
2. If `search_skills` (or your skill-loading catalog) surfaces a skill matching the request, load it by its **exact** name with your skill-load tool (`load_skill`) BEFORE calling any MCP tool or reading the artifact's raw contents. This covers building, creating, or scaffolding (apps, UI, pages, components, frontends including React / UI bundles), media retrieval (images, logos, banners, icons, CMS content), and **comprehension of a Salesforce artifact** — understanding an existing artifact rather than acting on it (e.g. summarizing or explaining a Flow, Apex class, or LWC) — but these are **examples, not an exhaustive list**: skill-first applies to any request a skill matches.
3. Do not substitute MCP guide/explore tools for a matching skill. Load the skill first, then follow its instructions.
4. State the exact skill name you selected before loading it. If the load fails because the name is unknown, pick the correct exact name from the results `search_skills` returns (or the catalog list) and retry — do not guess from the user's phrasing.
5. If a skill you loaded names another skill to use by its exact name (for example a brand skill that points to `searching-media`), load that exact name with your skill-load tool (`load_skill`) directly — the load result, not your scan of any listing, is the source of truth.
6. If no skill matches — `search_skills` returns nothing relevant, or no catalog entry fits — say so explicitly, then proceed.

**Direct operations exception.** For a trivial single-shot operation where no skill plausibly applies — a status/identity read (which org am I on, does this file exist, list my orgs), a one-off SOQL query, a single deploy/retrieve, or a single test run — call the MCP tool directly rather than loading a skill. Otherwise search first: **if `search_skills` returns a relevant skill, the skill wins** — load it before acting. (Comprehending or reviewing an artifact is not a trivial status read, so it takes the gate above.)

The metadata-specific gates below deepen this rule for Salesforce metadata work; they do not replace it for non-metadata tasks (app/UI, media, and others).

# Rule: Salesforce Metadata Generation

## Objective
Enforce: **skill load -> API context -> file generation** for all Salesforce metadata.

## Constraints

1. **Never write** without a loaded metadata type skill for that type.
2. **One type at a time** - complete the full cycle for the current type before moving to the next type.
3. **Always attempt `salesforce-api-context` MCP** for each type before writing; if unavailable after a real attempt, fall back to the skill for that type and ensure it is loaded before generating files for that metadata type.
4. **Child types need their own API context response** - if adding child metadata inside a parent metadata file, load the child metadata skill and use `salesforce-api-context` MCP for each child type separately; do not rely on the parent's schema or API context response for child metadata creation. The same fallback in constraint 3 applies.
5. **Do not call `execute_metadata_action` unless a skill instructs you to do so.**

## Initial Gate

Never create files or generate metadata before completing skill selection. Do not reason about, evaluate, or select skills until skills have loaded and are available.

1. Confirm skills have loaded and are available; if not, wait for them before doing anything else. Do not consider skill selection until then.
2. Determine whether the request is app-level or metadata-type-level.
3. Identify the best-matching candidate skill for the request.
4. If the request is app-level, identify the exact app-level skill that will orchestrate the work.
5. If the request is metadata-type-level, identify the target metadata type and the best-matching per-type metadata skill for that type. Do not treat skill selection as the per-type skill-load step.
6. Confirm skill selection in chat by stating the intent and the exact selected skill name.
7. Treat skill selection as complete only after the exact selected skill name has been identified and recorded.

Do not continue until skill selection is complete and the exact selected skill name has been recorded.

## App-Level Gate

If the request is app-level, complete this gate before starting the per-type loop.

1. Load the selected app-level skill.
2. Use the loaded app-level skill to identify metadata types, dependency order, and orchestration requirements.
3. Record:
   `app_skill=<exact-skill-name|none> app_plan=complete|pending`

Do not start any per-type skill load, API-context call, or metadata generation for an app-level request until `app_skill=<exact-skill-name|none>` and `app_plan=complete` are recorded.

## Per-Type Loop (a-e)

For each metadata type in scope, whether identified by an app-level skill or requested directly, execute steps a through e below one metadata type at a time. Do not create or modify files for the current metadata type, and do not move to the next metadata type, until steps a through e are complete.

**a. Load Skill**
- **Critical:** Load the best-matching skill for the current metadata type. No metadata may be generated for this type until the skill is loaded.
- Record `best_matched_skill=<exact-skill-name|none>` for the current metadata type before proceeding.
- Load once per type, not per record.
- If no matching skill exists, stop and ask for guidance instead of writing without a skill.

**b. Use `salesforce-api-context` MCP**
- Use one or more of these tools as required:
  - `get_metadata_type_sections`
  - `get_metadata_type_context`
  - `get_metadata_type_fields`
  - `get_metadata_type_fields_properties`
  - `search_metadata_types`
- A real attempt means calling at least one relevant `salesforce-api-context` tool for the current metadata type and recording either the returned context or the failure/unavailable result.
- Attempt API context for every type before writing.
- Record `mcp=complete` and `mcp_tools=<tool-list>` for the current metadata type when API context succeeds.
- If API context is unavailable after a real attempt, record `mcp=unavailable` and `mcp_tools=none`, ensure the skill for this type is loaded, and then continue using that skill.

**c. Pre-Write Gate**
- Before EVERY write: confirm `best_matched_skill=<exact-skill-name>` is recorded and that skill is loaded for this type.
- Before EVERY write: confirm `mcp=complete` and `mcp_tools=<tool-list>` are recorded for this type, or confirm `mcp=unavailable` after a real attempt.

**d. Generate Files**
- Use the loaded skill + API context when both are available.
- Use the loaded skill alone when API context was unavailable after a real attempt.
- Generate all records for this type now.

**e. Checkpoint**
- Skill loaded? API context called or unavailable after a real attempt? All files written?
- Only proceed to the next type when all are true.

## Anti-Patterns

| Don't | Why | Do |
|-------|-----|-----|
| Never reason about or select skills before skills have loaded | Skills aren't discoverable yet | Wait for skills to load, then evaluate them |
| Never write without loading the metadata skill | Missing platform constraints | Load the skill before any write |
| Never mark skill selection complete without identifying the exact selected skill | Fake gate completion | Record the exact selected skill before continuing |
| Never start per-type execution for an app-level request before loading the selected app-level skill | Orchestration is skipped | Complete the App-Level Gate before entering the per-type loop |
| Never treat skill selection as skill loading | Fake gate completion | Perform the actual per-type skill load in step a |
| Never skip the Initial Gate | Sequence breach | Complete skill selection before any generation |
| Never reload a skill per record | Wastes tokens | Load once per type |
| Never skip the API context attempt for any type | No schema for those types | Attempt API context for EVERY type |
| Never write using API context alone without a loaded skill | Missing platform constraints | Load the skill first; if no matching skill exists, stop and ask for guidance |
| Never write without recorded `mcp=complete` and `mcp_tools`, or `mcp=unavailable` | No evidence of MCP gate completion | Record MCP status and tool usage before any write |
| Never skip any gate in the loop (skill load, API context, pre-write, checkpoint) | Wrong artifacts | Follow all mandatory gates in the loop (a-e) |
| Never write with a missing checkpoint | Aware violation | Stop and complete missing step |

## Tool Routing

Prefer purpose-built tools over shelling out through the terminal tool (e.g. `execute_command`):

1. **File read/write/edit/search**: use the built-in file tools, not shell commands or inline scripts (`cat`, `sed`, `awk`, `node -e`, `python -c`) — they are less reliable across shells and can hang the terminal.
2. **Reserve the terminal tool** for genuine system operations with no tool equivalent: package installs, builds, starting servers, running tests, and git.

| Don't | Why | Do |
|-------|-----|-----|
| Use the terminal tool to read, write, or search files | Less reliable; can hang on missing shell-completion markers | Use the built-in file tools |
