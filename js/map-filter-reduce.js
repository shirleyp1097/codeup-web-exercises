const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLangs = users.filter(user => (user.languages.length >= 3))
// console.log(threeLangs);

let emailArr = users.map(user => user.email);
// console.log(emailArr);

let totalExperience = users.reduce(
    (total, user) => {
        return total + user.yearsOfExperience
    }, 0
)
// console.log(totalExperience)
// let longestEmail = '';
// for (let i=0;i<users.length;i++) {
//     if (users[i].email.length > longestEmail.length) {
//         longestEmail = users[i].email
//     }
// }
// console.log(longestEmail)

// let longestEmail = users.reduce((a,b) => {
//     if (a.length < b.email.length) {
//         a = b.email
//     }
//     return a
// }, '')
// console.log(longestEmail)
let longestEmail = users.reduce((previous, current) => {
    previous.length < current.email.length ? previous = current.email : null;
    return previous;
}, '')
console.log(longestEmail)

let nameString = users.reduce((previous, user) => {
    return previous + user.name + ', ';
}, 'Your instructors are: ')
console.log(nameString)



const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];




// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
console.log(dogs.filter((dog) => dog.dogName == 'Lexie'));

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
console.log(dogs.filter((dog) => dog.isTrained === true && dog.age < 10));

// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
const allDogsNames = dogs.reduce((acc, current) => {
    return acc + current.dogName
}, '');
console.log(allDogsNames)

// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');
console.log(dogs.reduce((previous, current) => {
    return previous + current.age;
}, 0))

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');
console.log(dogs.reduce((previous, current) => {
    let trainedDog = current;
    trainedDog.isTrained = true;
    previous.push(trainedDog);
    return previous;
}, []))

// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');
console.log(dogs.reduce((previous, current, index, arr) => {
    return previous + current.age / arr.length;
}, 0))

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');

// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');



