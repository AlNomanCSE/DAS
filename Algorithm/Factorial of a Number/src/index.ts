//? #1 ---------Itative way---------?//
function factorial(n: number): number {
  let fact = 1;
  for (let x = 1; x <= n; x++) {
    fact = fact * x;
  }
  return fact;
}
console.log(factorial(100));

//?  #2 ---------Itative way using BigInt---------?//
function factorialBigInt(n: number): bigint {
  let fact = 1n;
  for (let x = 1; x <= n; x++) {
    fact = fact * BigInt(x);
  }
  return fact;
}

console.log(factorialBigInt(100).toString());
