import { test, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

// jest.mock('fs')
vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

test('writeFileを実行', () => {
  const testData = 'Test';
  const testFileName = 'test.txt';
  writeData(testData, testFileName);
  //expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  //expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
