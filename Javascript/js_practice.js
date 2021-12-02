function add7(number) {
    return number+7;
}

function multiply(num1, num2) {
    return num1*num2;
}

function capitalize(word) {
    let new_word = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
    return new_word;
}

function lastLetter(word) {
    return word[word.length-1];
}