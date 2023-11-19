import { test, expect } from 'vitest';
import { add } from './math';

test('配列内の数字の合計を計算', () => {
  const numbers = [1, 2, 3];
  const initialValue = 0;
  const expectedResult = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const result = add(numbers);
  expect(result).toBe(expectedResult);
});

test('配列内に数字以外が存在するときNaNを返す', () => {
  const inputs = ['invalid', 1, 2];
  const result = add(inputs);
  expect(result).toBeNaN;
});
