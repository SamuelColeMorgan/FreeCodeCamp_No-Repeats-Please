// get string with swapped characters

function getStringWithSwappedChars(string, idx1, idx2) {
    const toArray = string.split("");
    [toArray[idx1], toArray[idx2]] = [toArray[idx2], toArray[idx1]];
    return toArray.join("");
}

// -------------------------------------

// get string with swapped characters

function stringHasConsecutiveRepeats(string) {
    let currentChar, nextChar;
    for (let i = 0; i < string.length - 1; i++) {
        currentChar = string[i];
        nextChar = string[i + 1];
        if (currentChar === nextChar) return true;
    }
    return false;
}

// -------------------------------------

// get string permutations

function permAlone(string) {
    let permutations = [];

    // recursive helper function to populate permutations array

    function populatePermutations(str, startIdx) {
        if (startIdx === str.length - 1) permutations.push(str);
        if (startIdx < str.length - 1) {
            for (let i = startIdx; i < str.length; i++) {
                const swappedStr = getStringWithSwappedChars(str, startIdx, i);
                populatePermutations(swappedStr, startIdx + 1);
            }
        }
    }

    // -------------------------------------

    populatePermutations(string, 0);
    permutations = permutations.filter((permutation) => {
        return !stringHasConsecutiveRepeats(permutation);
    });
    return permutations.length;
}

// -------------------------------------

permAlone("abc");