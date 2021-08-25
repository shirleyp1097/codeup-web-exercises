// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//         yearsOfExperience: 5
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//         yearsOfExperience: 6
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//         yearsOfExperience: 7
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//         yearsOfExperience: 8
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//         yearsOfExperience: 9
//     }
// ];
//
// let threeLangs = users.filter(user => (user.languages.length >= 3))
// // console.log(threeLangs);
//
// let emailArr = users.map(user => user.email);
// // console.log(emailArr);
//
// let totalExperience = users.reduce(
//     (total, user) => {
//         return total + user.yearsOfExperience
//     }, 0
// )
// // console.log(totalExperience)
// // let longestEmail = '';
// // for (let i=0;i<users.length;i++) {
// //     if (users[i].email.length > longestEmail.length) {
// //         longestEmail = users[i].email
// //     }
// // }
// // console.log(longestEmail)
//
// let longestEmail = users.reduce((a,b) => {
//     if (a.length < b.email.length) {
//         a = b.email
//     }
//     return a
// }, '')
// console.log(longestEmail)
//
// let nameString = users.reduce((previous, user) => {
//     return previous + user.name + ', ';
// }, 'Your instructors are: ')
// console.log(nameString)
//
//
//
// // let uniqueLangs = []
// // users.forEach(item => {
// //     item.languages.forEach(lang => {
// //         uniqueLangs.includes(lang) ? undefined : uniqueLangs.push(lang)
// //     })
// // });
// // console.log(uniqueLangs)

const data = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];



const iceCreamTotals = data.reduce((totals, superhero) => {
    superhero.favoriteIceCreams.map((iceCreamType) => {
        totals[iceCreamType] = (totals[iceCreamType] || 0) + 1;
        // return iceCreamType;
    });

    return totals;
}, {});
console.log(iceCreamTotals);



