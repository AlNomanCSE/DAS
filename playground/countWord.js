function countword(words) {
    var wordCount = words.replace(/[,.;]/g, ' ').trim().split(/\s+/);
    console.log(wordCount);
    return 0;
}
countword("alice , and. ;bob love leetcode");
