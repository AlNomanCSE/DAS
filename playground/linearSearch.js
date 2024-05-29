function generateRandomArray(length, min, max) {
    var randomArray = [];
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}
var ARray = generateRandomArray(10, 0, 20);
for (var _i = 0, ARray_1 = ARray; _i < ARray_1.length; _i++) {
    var x = ARray_1[_i];
    if (x == 12) {
        console.log("Yes");
    }
}
