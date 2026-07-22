// 2つの数値を足し算する関数
function add(a, b) {
  // 関数の呼び出し元へ計算結果を返す
  return a + b;
}

// 1つ目の数値から2つ目の数値を引く関数
function subtract(a, b) {
  // 引き算の結果を呼び出し元へ返す
  return a - b;
}

// 別のファイルから関数を読み込めるように公開する
// 現在のpackage.jsonがCommonJS形式なのでmodule.exportsを使う
module.exports = {
  add,
  subtract,
};
