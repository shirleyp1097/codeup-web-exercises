var i = 2;
while (i <= 65536) {
    console.log(i);
    i*=2;
}




var conesLeft = Math.floor(Math.random() * 50) + 50;
var conesSold = 0;

do {
    var nextOrder = Math.floor(Math.random() * 5) + 1;
    if (conesLeft < nextOrder) {
        console.log("Sorry I only have " + conesLeft + " cones left")
    } else {
        conesLeft -= nextOrder;
        console.log("There are " + conesLeft + " cones left");
    }
} while (conesLeft > 0)
console.log("Yay, I sold them all")


