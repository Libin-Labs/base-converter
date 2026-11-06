const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
export function convertBase(value: string, fromBase: number, toBase: number): string {
  if (typeof value !== 'string') throw new TypeError('Value must be text');
  if (
    !Number.isInteger(fromBase) ||
    !Number.isInteger(toBase) ||
    fromBase < 2 ||
    fromBase > 36 ||
    toBase < 2 ||
    toBase > 36
  )
    throw new RangeError('Bases must be between 2 and 36');
  const text = value.trim().toLowerCase(),
    match = /^([+-]?)([0-9a-z]+)$/.exec(text);
  if (!match || text.length > 4096) throw new RangeError('Invalid or oversized integer');
  let n = 0n;
  for (const char of match[2]!) {
    const digit = digits.indexOf(char);
    if (digit < 0 || digit >= fromBase) throw new RangeError('Digit is not valid for source base');
    n = n * BigInt(fromBase) + BigInt(digit);
  }
  if (match[1] === '-') n = -n;
  if (n === 0n) return '0';
  const sign = n < 0n ? '-' : '',
    magnitude = n < 0n ? -n : n;
  return sign + magnitude.toString(toBase);
}
