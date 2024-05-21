function commonFactors(a, b) {
    var cout = 0;
    for (var x = 1; x <= a || x <= b; x++) {
        if (a % x === 0 && b % x === 0) {
            cout++;
        }
    }
    return cout;
}
console.log(commonFactors(25, 30));
//? GCD
function GCD(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(GCD(12, 15));
