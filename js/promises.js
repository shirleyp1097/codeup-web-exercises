// function getGithubUsernames(username) {
//     fetch(`https://api.github.com/users/${String(username)}/events/public`, {headers: {'Authorization': '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'}})
//         .then(response => response.json())
//         .then(data =>
//             console.log(data[0]['created_at']))
//         .catch(error => console.log(error));
//
//
// }
//
// // getGithubUsernames().then(users => {
// //    users.forEach( userObj => {
// //        console.log(userObj.login);
// //    })
// // });
// getGithubUsernames('george-tudor');


const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);


