function commonFactors(a: number, b: number): number {
  let cout = 0;
  for (let x = 1; x <= a || x <= b; x++) {
    if (a % x === 0 && b % x === 0) {
      cout++;
    }
  }

  return cout;
}
console.log(commonFactors(25, 30));

//? GCD
function GCD(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(GCD(12, 15));
