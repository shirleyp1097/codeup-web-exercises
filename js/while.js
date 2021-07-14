// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i*=2;
// }
var conesLeft = Math.floor(Math.random() * 50) + 50;
var conesSold = 0;

do {
    var nextOrder = Math.floor(Math.random() * 5) + 1;
    if (conesLeft > nextOrder) {
        conesLeft -= nextOrder;
        conesSold += nextOrder;
        console.log(`${conesSold} cones sold`)
        console.log(`${conesLeft} cones left`)
    } else {
        console.log(`Cannot sell you ${nextOrder} cones I only have ${conesLeft}`);
    }

} while (conesLeft !== 0);

