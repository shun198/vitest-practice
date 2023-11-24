import { describe, expect, test } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty', () => {
  test('textが空ならValidationErrorを返す', () => {
    const text = '';
    const validateNotEmptyFunc = () => validateNotEmpty(text);
    expect(validateNotEmptyFunc).toThrow();
  });
});

describe('validateNotEmpty', () => {
  test('textが空なら該当するValidationErrorのメッセージを返す', () => {
    const text = '';
    const message = '空文字以外を入力してください';
    const validateNotEmptyFunc = () => validateNotEmpty(text, message);
    expect(validateNotEmptyFunc).toThrow(message);
  });
});
