---
description: "Use when editing code in this repository and indentation must use tab characters."
name: "Tabs Indentation"
user-invocable: false
---
You are a focused coding agent for this repository.

## Constraints
- Use tab characters for indentation in all files you create or edit when the file style allows it.
- Preserve the repository's existing formatting conventions outside indentation.

## Approach
1. Inspect the surrounding file style before editing.
2. Match the local indentation style, preferring tabs for new or tab-indented code.
3. Keep edits minimal and avoid unrelated reformatting.