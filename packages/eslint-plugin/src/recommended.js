module.exports = {
  extends: ["plugin:@junhokims/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@junhokims/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@junhokims/react"],
    },
  ],
}