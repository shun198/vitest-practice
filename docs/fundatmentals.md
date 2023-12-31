# テストコードの書き方

- テストコードを記載するファイルを作成するときにファイル名を〇〇.test.js にしておく

# フロントエンドの一般的なテストケース

## 表示と UI のテスト

- コンポーネントが正しく表示されているか（正しい DOM 要素、スタイリングなど）
- ボタンやフォームなどの UI 要素が正しく動作しているか（クリックや入力などのイベント）

## ユーザーアクションのテスト

- ユーザーがページ上で行う操作（クリック、入力、ナビゲーション）に対する応答をテストする
- フォームの送信やボタンのクリックなど、ユーザーアクションに対する期待される結果

## 状態管理のテスト

- 状態管理ライブラリ（React Context、Redux など）が正しく機能しているか
- コンポーネントの状態が正しく変更され、表示が更新されているか

## API 通信のテスト

- バックエンドからデータを正しく取得できているか
- API エンドポイントに対するリクエストとレスポンスが期待通りか

## エラー処理のテスト

- エラーが発生した場合、適切なエラーメッセージが表示されているか
- エラーが正しく処理され、ユーザーにフレンドリーなメッセージが表示されているか

## モバイルレスポンシブデザインのテスト

- レスポンシブデザインが正しく機能しているか、異なる画面サイズやデバイスでの表示を確認する

## ナビゲーションとルーティングのテスト

- ナビゲーションが正しく機能しているか。
- URL の変更によって正しいコンポーネントが表示されているか。

## モックやスタブを使用したテスト:

- バックエンドや他の依存関係をモックやスタブで置き換えて、単体テストを行う

# はじめてのテスト

```javascript
import { test, expect } from 'vitest';
import { add } from './math';

test('配列内の数字の合計を計算', () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
```

# テストの実行方法

```
npm run test
```

でテストを実行する

# テスト用メソッド

## describe

テストをカテゴライズする

```javascript
describe('validateStringNotEmpty()', () => {
  test('文字列であるときの正常系テスト', () => {
    const input = 'string value';
    const validationFunction = () => validateStringNotEmpty(input);
    expect(validationFunction).not.toThrowError();
  });

  test('文字列が空の異常系テスト', () => {
    const input = '';
    const validationFunction = () => validateStringNotEmpty(input);
    expect(validationFunction).toThrowError(
      'Invalid input - must not be empty.'
    );
  });
});
```
