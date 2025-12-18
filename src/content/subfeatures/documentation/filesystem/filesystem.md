---
featureName: documentation
subfeatureName: filesystem
---

You can create an `AGENTS.md` file in the root of your project to tell the LLM how to use the agents.

Your agent will include this file in the context for each session. It acts as the system context for the project.
You can declare anything in it: how to call local tools, what steps to create in [plan mode](../../../features/planmode), which files to generate, or any instructions you want.

More info: https://agents.md/

Note: Claude Code doesn't support this feature. Instead, it uses a different filename, `CLAUDE.md`.

Note: Cursor also supports a `.cursor/rules/` folder, which is a similar feature. More info: https://cursor.com/docs/context/rules

