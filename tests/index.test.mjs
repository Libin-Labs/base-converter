import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('converts hexadecimal to binary', () => {
  assert.equal(api.convertBase('ff', 16, 2), '11111111');
});
test('converts binary to decimal', () => {
  assert.equal(api.convertBase('101010', 2, 10), '42');
});
test('preserves a negative sign', () => {
  assert.equal(api.convertBase('-ff', 16, 10), '-255');
});
test('normalizes leading zeros and case', () => {
  assert.equal(api.convertBase('00FF', 16, 10), '255');
});
test('converts zero', () => {
  assert.equal(api.convertBase('-000', 10, 2), '0');
});
test('rejects invalid digits', () => {
  assert.throws(() => api.convertBase('2', 2, 10), RangeError);
});
