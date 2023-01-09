export function decrypt(buffer: number[], rounds = 1, key = 1) {
  const initialList = buffer.map((v) => [v * key]);
  const decrypted = [...initialList];

  while (rounds--) {
    for (const list of initialList) {
      const first = list[0];
      if (first !== undefined) {
        const currentIndex = decrypted.indexOf(list);
        const nextIndex = (currentIndex + first) % (decrypted.length - 1);

        decrypted.splice(currentIndex, 1);
        decrypted.splice(nextIndex, 0, list);
      }
    }
  }

  return decrypted.flat();
}
