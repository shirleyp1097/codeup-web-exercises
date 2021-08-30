function getGithubUsernames(username) {
    fetch(`https://api.github.com/users/${String(username)}/events/public`, {headers: {'Authorization': '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'}})
        .then(response => response.json())
        .then(data =>
            console.log(data[0]['created_at']))
        .catch(error => console.log(error));


}

// getGithubUsernames().then(users => {
//    users.forEach( userObj => {
//        console.log(userObj.login);
//    })
// });
getGithubUsernames('george-tudor');



