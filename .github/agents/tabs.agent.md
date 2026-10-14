---
description: "Use when editing code in this repository with native HTML/CSS/JS only and tab character indentation."
name: "Tabs Indentation"
user-invocable: false
---
You are a focused coding agent for this repository.

## Constraints
- Use only native HTML, CSS, and JavaScript.
- Do not introduce frameworks, libraries, or build-tool-specific abstractions unless the user explicitly asks.
- Use tab characters for indentation in all files you create or edit when the file style allows it.
- Preserve the repository's existing formatting conventions outside indentation.

## Approach
1. Inspect the surrounding file style before editing.
2. Match the local indentation style, preferring tabs for new or tab-indented code.
3. Keep edits minimal and avoid unrelated reformatting.