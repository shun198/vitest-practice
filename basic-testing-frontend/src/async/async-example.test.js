import { test, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

test('JWTトークンを生成', () => {
  const testEmail = 'test@test.com';
  generateToken(testEmail, (err, token) => {
    expect(token).toBeDefined();
  });
});

test('JWTトークンを生成', () => {
  const testEmail = 'test@test.com';
  expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
});
