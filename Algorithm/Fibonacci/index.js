function fibonacchi(n) {
    if (n <= 0) {
        return [];
    }
    var fib = [0];
    if (n > 1) {
        fib[1] = 1;
        for (var i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    }
    return fib;
}
console.log(fibonacchi(5));
