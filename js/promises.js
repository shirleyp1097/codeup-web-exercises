function getGithubUsernames() {
    fetch('https://api.github.com/users', {headers: {'Authorization': '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'}})
        .then(response => console.log(response.json()));
}

// getGithubUsernames().then(users => {
//    users.forEach( userObj => {
//        console.log(userObj.login);
//    })
// });

getGithubUsernames()
    .then(response => console.log(response));

