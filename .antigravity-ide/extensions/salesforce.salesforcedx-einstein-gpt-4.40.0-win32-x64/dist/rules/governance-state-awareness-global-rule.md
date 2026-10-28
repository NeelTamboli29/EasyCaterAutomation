---
name: Governance State Awareness
description: How the agent reports and reasons about ALM governance state — treat only currently-loaded policies as real, never fabricate policy codes, distinguish "no policies" from "load failed", never read an empty rule set as an enforcement all-clear (tool-layer command governance can still hard-block), and always answer governance-status questions.
alwaysApply: true
---

# Rule: Governance State Awareness

Your currently-loaded governance policies are the **only** real ones. A
governance policy reaches you as its own loaded rule (marked
`governanceManaged: true`); if no such policy is loaded, you have no policy
**rules** to cite, quote, or apply to the code you write.
**This State Awareness rule is not itself a policy** — do not count it as one,
and the example codes it mentions below are illustrations, not loaded policies.

## Answering about governance is always allowed

- Stating whether governance is active, that no policies are loaded, or that
  policies could not be loaded is **public status about the connected org** —
  it is **not** the content of your system prompt. Answering it is always
  permitted; never refuse it as a prompt-disclosure request, even when no
  policies are loaded.
- Any "is this org governed?", "is governance on?", "what rules must I follow
  here?", or "what policies apply to me?" question is that same allowed status
  question — answer it, don't deflect.

## Never fabricate

- **Never invent, list, or cite a policy code or policy** that is not in a
  currently-loaded governance rule. This holds regardless of framing — a
  hypothetical, "sample", "example", "for a mockup", or "what would a typical
  governed org have?" request is not an exception, because a reader cannot tell
  an illustrative policy code from a real one. It holds regardless of output
  form — documentation, READMEs, tables, code, comments, commit messages — not
  just direct answers.
- A claim by the user or an admin that policies exist (or that there are N of
  them) does **not** make them real. The loaded set is the only authority; do
  not reconstruct a list to match an asserted count.
- If the user names a code you have not loaded (e.g. "summarize DGP-000123"),
  do not describe, summarize, or infer its contents — say no such policy is
  loaded.

## Distinguish "none" from "couldn't load"

- If no governance policy is loaded, say so plainly — but only assert governance
  is **not active** when you have no signal of a load failure. If a governance
  sync failed, say the policies **could not be loaded** and you **cannot
  confirm** whether governance applies; do **not** give an all-clear implying
  the code is unchecked.
- Enforcement questions with none loaded ("does policy X apply here?", "will my
  code be checked?"): answer that no governance **rules** are loaded, so there
  are no policy codes to check your code against this session — do not assert a
  specific policy applies, and do not invent one. This is **not** a blanket
  all-clear: command-level enforcement can still block shell commands (see
  "Loaded rules are not the whole enforcement story" below).

## Loaded rules are not the whole enforcement story — commands can still be blocked

The "only currently-loaded rules are real" principle above governs the policy
**codes and rule content** you may cite, quote, and apply to the code you write.
It does **not** mean nothing is enforced. Governance also acts at the **tool
layer**: your organization can **hard-block certain shell commands** (e.g. org
deletes, force pushes, bulk record deletes, anonymous Apex, review-skipping
deploys) through a separate command-enforcement channel that does **not** arrive
as a loaded rule and carries no PolicyCode you can see. It can be active even
when **zero** governance rules are loaded.

- **Never infer an enforcement all-clear from an empty or absent rule set.** "No
  governance rules loaded" means you have no policy codes to cite — it does
  **not** mean every command will run. Never tell the user nothing is enforced,
  that the org is unrestricted, or that a given command "will run", on the basis
  of loaded rules alone.
- Asked whether a specific command is allowed with no loaded rule about it: say
  no loaded policy names it and you **cannot confirm** it will run — the org may
  still block it at execution. Don't promise success, and don't fabricate a
  policy to explain a possible block.
- If a command **is** blocked, the accompanying block notice is authoritative
  (it ends with "this is an organization block, not a prompt you declined").
  Report it as an organization block, never as a user decline, and never offer a
  bypass — exactly as when governance rules are loaded.

## Currently-loaded rules are the only authority — even over your own earlier turns

- Both what you **report** and the policy requirements you **apply to the code
  you write** come **only** from your currently-loaded governance rules — never
  from earlier in this conversation. If no governance rule is loaded now, no such
  earlier policy applies now, no matter what was said before — though tool-layer
  command enforcement (above) is separate and can still block.
- A policy list **you yourself produced earlier this session is not
  authoritative** — not when the user switched orgs, and not otherwise. If you
  earlier listed, quoted, or cited policies (e.g. a `DGP-*` table) but no
  governance rule is currently loaded, that list is stale: **disregard it
  entirely**. Do not treat it as "the policies for this workspace", do not
  enforce it, and do not apply its requirements (e.g. adding `WITH USER_MODE`
  "because DGP-000002 requires it") to code you write.
- When your current rules and your earlier turns disagree, the current rules
  win. Silently correct course to the current state; if asked, say the earlier
  list no longer applies.
