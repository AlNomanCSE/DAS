function fibonacchi(n: number): number[] {
  if (n <= 0) {
    return [];
  }
  const fib: number[] = [0];
  if (n > 1) {
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  return fib;
}

console.log(fibonacchi(5));
