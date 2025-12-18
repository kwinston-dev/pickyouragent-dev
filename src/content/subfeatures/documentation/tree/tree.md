---
featureName: documentation
subfeatureName: tree
---

If a file isn't part of the context, you don't need its documentation included either.

If your agent adds a file to the context, it will also include any documentation files from the same directory.

For example:

```
root
├── lib1
│   ├── Claude.md
│   └── lib1.source
├── lib2
│   ├── Claude.md
│   └── lib2.source
└── code.source
```

If `root/code.source` only uses `root/lib1/lib1.source`, then only `root/lib1/Claude.md` is added to the context. `root/lib2/Claude.md` is skipped.

Only this agents supports this feature:

- Claude Code
- Cursor

