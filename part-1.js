function getStringWithSwappedChars(string, swapIdx1, swapIdx2) {
    const toArray = string.split("");
    const temp = toArray[swapIdx1];
    toArray[swapIdx1] = toArray[swapIdx2];
    toArray[swapIdx2] = temp;
    return toArray.join("");
}

console.log(getStringWithSwappedChars("Pizza", 0, 1)); // iPzza
console.log(getStringWithSwappedChars("Calzone", 1, 2)); // Clazone

function stringHasConsecutiveRepeats(string) {
    let pointerA = 0;
    let pointerB = 1;
    while (pointerB < string.length) {
        const charAtPointerA = string[pointerA];
        const charAtPointerB = string[pointerB];
        if (charAtPointerA === charAtPointerB) return true;
        pointerA++;
        pointerB++;
    }
    return false;
}

console.log(stringHasConsecutiveRepeats("Sam")); // false
console.log(stringHasConsecutiveRepeats("Samm")); // true
console.log(stringHasConsecutiveRepeats("Pizza")); // true
console.log(stringHasConsecutiveRepeats("Pasta")); // false

function permAlone(str) {
    return str;
}

permAlone("aab");