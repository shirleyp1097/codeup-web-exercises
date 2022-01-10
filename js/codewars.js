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

function rot13(message){
    message = message.split();
    message = message.map(letter => letter.charCodeAt(0));
}


console.log(pigIt("my name is Paris Shirley"));
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));