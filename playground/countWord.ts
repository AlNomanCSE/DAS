function countword(words: string): number {
  const wordCount = words.replace(/[,.;]/g, " ").trim().split(/\s+/);
  return wordCount.length;
}
function mostWordsFound(sentences: string[]): number {
  let maxNumber = 0;
  for (const sentence of sentences) {
    let wordCount = countword(sentence);
    if (maxNumber < wordCount) {
      maxNumber = wordCount;
    }
  }
  return maxNumber;
}
