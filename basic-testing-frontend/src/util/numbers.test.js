import { test, expect } from 'vitest';
import { transformToNumber } from './numbers';

test('StringからIntegerに変換する', () => {
  const input = '1';
  const result = transformToNumber(input);
  expect(result).toBeTypeOf('number');
});

test('StringからIntegerに変換できなかったらNanを返す', () => {
  const input = 'invalid';
  const result = transformToNumber(input);
  expect(result).toBeNaN;
});
