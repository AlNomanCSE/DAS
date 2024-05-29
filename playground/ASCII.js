function ASCII(char) {
    return char.charCodeAt(0);
}
function scoreOfString(s) {
    var index = 0;
    var adjacentSum = 0;
    while (index < s.length - 1) {
        adjacentSum =
            adjacentSum + Math.abs(s.charCodeAt(index) - s.charCodeAt(index + 1));
        index++;
    }
    return adjacentSum;
}
console.log(scoreOfString("hello"));
