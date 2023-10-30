module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
};