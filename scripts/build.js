// Node.js標準のファイル操作機能を読み込む
const fs = require("node:fs");

// WindowsとLinuxの両方で安全にパスを作る機能
const path = require("node:path");

// コピー元となるsrcフォルダの絶対パス
const sourceDirectory = path.resolve(__dirname, "../src");

// コピー先となるdistフォルダの絶対パス
const outputDirectory = path.resolve(__dirname, "../dist");

// srcフォルダが存在しない場合は、分かりやすいエラーで終了する
if (!fs.existsSync(sourceDirectory)) {
  console.error("Build failed: src folder was not found.");

  // 終了コード1は、処理が失敗したことを表す
  process.exit(1);
}

// 前回作ったdistフォルダを削除する
// force: trueにより、存在しなくてもエラーにしない
fs.rmSync(outputDirectory, {
  recursive: true,
  force: true,
});

// srcフォルダをdistフォルダへコピーする
fs.cpSync(sourceDirectory, outputDirectory, {
  recursive: true,
});

console.log("Build completed: src -> dist");
