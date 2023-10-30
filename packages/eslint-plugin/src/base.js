module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "import/order": [
      "error",
      {
        warnOnUnassignedImports: true,
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "{.,..}/**/*.+(css|sass|less|scss|pcss|styl|svg)",
            patternOptions: { dot: true, nocomment: true },
            group: "unknown",
            position: "after",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
}