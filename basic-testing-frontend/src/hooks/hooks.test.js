import {
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
} from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user = new User(testEmail);

// 全てのテストを実行する前に1度だけ実行
beforeAll(() => {});
// 各テストを実行する前に毎回実行
beforeEach(() => {
  user = new User(testEmail);
});
// 各テストを実行した後に毎回実行
afterAll(() => {});
// 全てのテストを実行した後に1度だけ実行
afterEach(() => {});

describe.concurrent('メールの更新', () => {
  it('should update the email', () => {
    const newTestEmail = 'test2@test.com';
    user.updateEmail(newTestEmail);
    expect(user.email).toBe(newTestEmail);
  });

  it('should have an email property', () => {
    expect(user).toHaveProperty('email');
  });

  it('should store the provided email value', () => {
    expect(user.email).toBe(testEmail);
  });

  it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
  });

  it('should still have an email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });
});
