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

//?  #3 ---------Itative way using recursion---------?//
function recursiveFactorial(n: number): bigint {
  if (n == 0 || n == 1) return 1n;
  else return BigInt(n) * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(50).toString());
