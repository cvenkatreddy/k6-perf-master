"use strict";

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    /**
     * TODO: temporary workaround for vsocde complaining about parsing error
     * which can only be fixed by restarting vscode. I should try to upgrade
     * @typescript-eslint/parser to see if it's still happening.
     */
    createDefaultProgram: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "linebreak-style": ["error", "unix"],
    "no-constant-condition": "error",
    semi: "error",
    "no-extra-semi": "error",
    "prefer-const": "error",
    "eol-last": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "no-console": 0,
    "prettier/prettier": "error",
    curly: "error",
  },
};
