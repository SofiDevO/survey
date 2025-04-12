export const UUID = (length = 16) => {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);

    return Array.from(bytes)
      .map(b => b.toString(36).padStart(2, '0')) // base 36 con relleno
      .join('')
      .slice(0, length);
  }

  console.log(UUID().length);