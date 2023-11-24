import { describe, expect, test } from 'vitest';
import { HttpError } from './errors';

describe('class HttpError', () => {
  test('statusCode,message,dataを保持する必要がある', () => {
    const testStatus = 200;
    const testMessage = '正常実行';
    const testData = { msg: '成功' };

    const testError = new HttpError(testStatus, testMessage, testData);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  test('データがなければundefinedになる', () => {
    const testStatus = 200;
    const testMessage = '正常実行';
    const testError = new HttpError(testStatus, testMessage);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});
