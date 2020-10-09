function getRandomPart(generators: Object, categorie: string, key: string): string {
  const max = generators[categorie][key].length;
  const idx = Math.floor(Math.random() * (max - 0));
  return generators[categorie][key][idx];
}

export {getRandomPart}
