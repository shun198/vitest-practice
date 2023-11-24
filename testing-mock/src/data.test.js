import { describe, test, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  test('should exec logFn if provided', () => {
    // const logger = jest.fn();
    const logger = vi.fn(() => {});
    generateReportData(logger);
    // loggerが実行されたかテストする
    expect(logger).toBeCalled;
  });
});
