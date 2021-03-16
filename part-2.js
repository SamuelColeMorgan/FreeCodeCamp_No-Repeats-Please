function getStringWithSwappedChars(string, swapIdx1, swapIdx2) {
    const toArray = string.split("");
    const temp = toArray[swapIdx1];
    toArray[swapIdx1] = toArray[swapIdx2];
    toArray[swapIdx2] = temp;
    return toArray.join("");
}

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

function permAlone(string) {
    const permutations = [];

    function populatePermutations(str, startIdx) {
        let pointerA = startIdx;
        let pointerB = startIdx;
        while (pointerB < str.length) {
            const swappedString = getStringWithSwappedChars(
                str,
                pointerA,
                pointerB
            );
            permutations.push(swappedString);
            pointerB++;
        }
    }

    populatePermutations(string, 0);
    console.log(permutations);
}

permAlone("abc");