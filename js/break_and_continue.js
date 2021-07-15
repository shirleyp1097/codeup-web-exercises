while (true) {
    var userInput = parseFloat(prompt("Enter an odd number between 1 and 50."));
    if (isNaN(userInput)) {
        continue;
    } else if ((userInput > 50) || (userInput < 1) || (userInput % 2 == 0)) {
        continue;
    } else {
        break;
    }
}

console.log(`The number to skip is: ${userInput}`)
for (i=1;i<=50; i+=2) {
    if (i == userInput) {
        console.log(`Yikes! Skipping number: ${userInput}`);
        continue;
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}
