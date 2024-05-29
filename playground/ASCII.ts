
function scoreOfString(s: string): number {
  let index = 0;
  let adjacentSum = 0;

  while (index < s.length - 1) {
    adjacentSum =
      adjacentSum + Math.abs(s.charCodeAt(index) - s.charCodeAt(index + 1));
    index++;
  }
  return adjacentSum;
}

console.log(scoreOfString("hello"));
