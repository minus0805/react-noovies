module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 2],
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
    },
    parser: "babel-eslint",
};
