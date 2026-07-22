// テスト対象のadd関数とsubtract関数を読み込む
const { add, subtract } = require("../src/calculator");

// 関連するテストをcalculatorというグループにまとめる
describe("calculator", () => {
  // add関数についてのテスト
  test("2と3を足すと5になる", () => {
    // add(2, 3)の結果が5と一致することを確認する
    expect(add(2, 3)).toBe(5);
  });

  // subtract関数についてのテスト
  test("5から2を引くと3になる", () => {
    // subtract(5, 2)の結果が3と一致することを確認する
    expect(subtract(5, 2)).toBe(3);
  });
});
