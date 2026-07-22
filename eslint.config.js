// ESLintが提供する標準的なJavaScriptルールを読み込む
const js = require("@eslint/js");

// Node.jsやJestで使われるグローバル変数を読み込む
const globals = require("globals");

module.exports = [
  {
    // 自動生成されるフォルダはLintの対象外にする
    ignores: ["node_modules/**", "coverage/**", "dist/**", ".history/**"],
  },

  {
    // JavaScriptファイルとCommonJSファイルを検査する
    files: ["**/*.js", "**/*.cjs"],

    // ESLintの推奨ルールを利用する
    ...js.configs.recommended,

    languageOptions: {
      // 現在のJavaScript構文を使用できるようにする
      ecmaVersion: "latest",

      // 現在のpackage.jsonがCommonJS形式なので合わせる
      sourceType: "commonjs",

      globals: {
        // require、module、processなどを認識させる
        ...globals.node,

        // test、expectなどを認識させる
        ...globals.jest,
      },
    },
  },
];
