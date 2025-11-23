const { getESLintConfig, getPrettierConfig } = require("@applint/spec");

module.exports = getPrettierConfig("react", {
  semi: false,
  singleQuote: true,
});
