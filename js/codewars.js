function twoSum(numbers, target) {

    numbers.forEach(function(num, index) {
        let newTarget = target - num;
        let remainingNums = numbers.filter(item => item !== num);
        for (let i = 0; i < remainingNums.length; i++) {
            if (remainingNums[i] === newTarget) {
                // console.log(`(${index}, ${i + 1})`);
                return [index, i+1];
            }
        }
    })
}

function tribonacci(signature,n) {
    if (n === 0) {
        return [];
    }
    let newArr = signature;
    while (newArr.length !== n) {
        let counter = 0;
        for (let i = newArr.length - 1; i > newArr.length - 4; i--) {
            counter += newArr[i];
        }
        console.log(counter);
        newArr.push(counter);
    }
    return newArr;
}

function nbYear(p0, percent, aug, p) {
    let currentGrowth = 0;
    let years = 0;
    while (p >= p0) {
        currentGrowth = (p0 * percent / 100) + aug;
        p0 = p0 + currentGrowth;
        years += 1;
    }
    return years;
}

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    } else {
        cc = cc.split('');
        for (let i = 0; i < cc.length; i++) {
            if (i < cc.length - 4) {
                cc[i] = '#';
            }
        }
        return cc.join('');
    }
}

function pangram(sentence) {
    let alphabet ="abcdefghijklmnopqrstuvwxyz".split('');
    sentence = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        if (alphabet.includes(sentence[i])) {
            let index = alphabet.indexOf(sentence[i]);
            alphabet.splice(index,1);
        }
    }
    return alphabet.length === 0;
}

function findShort(s){
    s = s.split(" ");
    let length = 10 ** 30;
    let word = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].length < length) {
            length = s[i].length;
            word = s[i];
        }
    }
    return length;
}

function findUniq(arr) {
    let myDict = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in myDict) {
            myDict[arr[i]] += 1;
        } else {
            myDict[arr[i]] = 1;
        }
    }
    return parseInt(Object.keys(myDict).find(key => myDict[key] === 1));
}

function pigIt(str){
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        if (/\W/.test(str[i])) {

        } else {
            let firstLetter = str[i][0];
            str[i] = str[i].slice(1) + firstLetter + 'ay';
        }
    }
    return str.join(' ');
}

function findMissingLetter(array) {
    array = array.map(letter => letter.charCodeAt(0));
    let answer;
    for (let i = 0; i < array.length; i++) {
        if (array[i] + 1 !== array[i + 1]) {
            answer = array[i] + 1;
            break;
        }
    }
    answer = String.fromCharCode(answer);
    return answer;
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function isValidWalk(walk) {
    let northSouth = 0;
    let westEast = 0;
    for (const letter of walk) {
        if (letter === 'n') {
            northSouth += 1;
        } else if (letter === 's') {
            northSouth -= 1;
        } else if (letter === 'w') {
            westEast += 1;
        } else if (letter === 'e') {
            westEast -= 1;
        }
    }
    return northSouth === 0 && westEast === 0 && walk.length === 10;
}

function dirReduc(arr){
    for (let i = 0; i < arr.length; i++) {
        let testArr = [];
        let finalArr = [];
        testArr.push(arr[i], arr[i + 1]);
        if (testArr.includes("NORTH") && testArr.includes("SOUTH")) {

        } else {
            finalArr.push(arr[i], arr[i+1]);
        }
    }
}

function count (string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in obj) {
            obj[string[i]] += 1;
        } else {
            obj[string[i]] = 1;
        }
    }
    return obj;
}

function deleteNth(arr,n){
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        arr[i] in count ? count[arr[i]]++ : count[arr[i]] = 1;
    }
    let returnArr = [];
    for (let elem in count) {
        let x = 0;
        while (x < n && x < count[elem]) {
            returnArr.push(parseInt(elem));
            x++;
        }
    }
    return returnArr;
}

var uniqueInOrder=function(iterable){
    let newArr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i + 1]) {

        } else {
            newArr.push(iterable[i])
        }
    }
    return newArr;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
