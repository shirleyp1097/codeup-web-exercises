function returnFive() {
    return 5;
}


function isFive() {
    var input = parseInt(prompt("Type a number:"))
    if (input == 5) {
        return true;
    } else {
        return false;
    }
}

function isShortWord(word) {
    if (word.length < 5) {
        return true;
    } else {return false;}
}

function isSameLength(first_word, second_word) {
    if (first_word.length == second_word.length) {
        return true;
    } else {return false;}
}

function getSmallerSegment(str, number) {
    return str.substring(0, number);
}

function addTwo(var_1, var_2) {
    var total = var_1 + var_2
    console.log("The result of num1 + num2 is: " + total)
}

