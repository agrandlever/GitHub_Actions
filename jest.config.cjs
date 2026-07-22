/** @type {import("jest").Config} */
module.exports = {
  // Node.js上で動くプログラムとしてテストする
  testEnvironment: "node",

  // テスト実行時にカバレッジを収集する
  collectCoverage: true,

  // srcフォルダ内のJavaScriptをカバレッジ対象にする
  // テストから読み込まれなかったファイルも確認対象になる
  collectCoverageFrom: ["src/**/*.js"],

  // カバレッジレポートの出力先
  coverageDirectory: "coverage",

  // ターミナル表示、HTML、JSON形式のレポートを作成する
  coverageReporters: ["text", "html", "json-summary"],

  // カバレッジが75%未満の場合はテストを失敗させる
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
