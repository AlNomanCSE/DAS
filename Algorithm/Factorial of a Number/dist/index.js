"use strict";
//?---------Itative way---------?//
function factorial(n) {
    let fact = 1;
    for (let x = 1; x <= n; x++) {
        fact = fact * x;
    }
    return fact;
}
console.log(factorial(100));
//?---------Itative way using BigInt---------?//
function factorialBigInt(n) {
    let fact = 1n;
    for (let x = 1; x <= n; x++) {
        fact = fact * BigInt(x);
    }
    return fact;
}
console.log(factorialBigInt(100).toString());
