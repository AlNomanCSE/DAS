function isOdd(n: number): boolean {
  if (n & 1) {
    return true;
  } else return false;
}

console.log(isOdd(10));

// //! ith bit

function iThBit(n: number, i: number): number {
  let mask = 1 << i;
  if ((n & mask) > 1) return 1;
  else return 0;
}

console.log(iThBit(5, 2));

//? --------Prime Number of Set Bits in Binary Representation

function primeOrNot(n: number): boolean {
  let count = 0;
  for (let i = 0; n > 0; i++) {
    if ((n & 1) > 0) {
      count++;
    }
    n = n >> 1;
  }

  if (count <= 1) return false;
  if (count === 2) return true;
  for (let x = 2; x * x <= count; x++) {
    if (count % x === 0) return false;
  }
  return true;
}
function leftToRight(left: number, right: number): number {
  let coutPrime = 0;
  for (let x = left; x <= right; x++) {
    if (primeOrNot(x)) coutPrime++;
  }
  return coutPrime;
}

console.log(leftToRight(10, 15));
