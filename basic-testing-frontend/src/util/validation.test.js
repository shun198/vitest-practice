import { test, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

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

describe('validateNumber()', () => {
  test('数字であるときの正常系テスト', () => {
    const input = 1;
    const validationFunction = () => validateNumber(input);
    expect(validationFunction).not.toThrowError();
  });

  test('数字ではなく、文字列であるときの異常系テスト', () => {
    const input = 'invalid';
    const validationFunction = () => validateNumber(input);
    expect(validationFunction).toThrowError('Invalid number input.');
  });
});
