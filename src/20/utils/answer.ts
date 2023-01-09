import { decrypt } from './decrypt';

export function answer(...parameters: Parameters<typeof decrypt>) {
  const decrypted = decrypt(...parameters);

  return [1000, 2000, 3000].reduce((sum, offset) => {
    const zeroIndex = decrypted.findIndex((digit) => digit === 0);
    return sum + (decrypted[(zeroIndex + offset) % decrypted.length] ?? 0);
  }, 0);
}
