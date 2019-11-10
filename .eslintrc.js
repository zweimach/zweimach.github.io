module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  plugins: ["import"],
  overrides: [
    {
      files: ["src/**/*.js"],
      env: {
        browser: true,
        node: false
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: ["plugin:react/recommended", "plugin:jsx-a11y/strict"],
      plugins: ["react", "react-hooks", "graphql", "jsx-a11y"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    }
  ]
};