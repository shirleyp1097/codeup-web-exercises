function showMultiplicationTable(num) {
    for (i=1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

for (i=1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 == 0) {
        console.log(`${random} is even`)
    } else {
        console.log(`${random} is odd`)
    }
}


for (i=1; i <= 9; i++) {
    for (j=1; j<=i; j++) {
        console.log(i);
    }
}


for (i=100; i>= 5; i-=5) {
    console.log(i)
}