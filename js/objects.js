(function() {
    "use strict";

var person = {
    firstName: "Paris",
    lastName: "Shirley"
};



person.sayHello = function() {
    return `Hello ${person.firstName} ${person.lastName}!`;
}

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function(shopper) {
    shopper.discount = 0;
    if (shopper.amount > 200) {
        shopper.discount = shopper.amount * .12;
    }
    shopper.finalPrice = shopper.amount - shopper.discount;
    console.log(shopper.name, shopper.amount, shopper.discount, shopper.finalPrice)
});

var books = [
    {title:'Holes', author: {
            firstName: 'Louis',
            lastName: 'Sachar'}
    },
    {title:'The Autobiography of Malcolm X', author: {
            firstName: 'Malcolm',
            lastName: 'X'}
    },
    {title:'East of Eden', author: {
            firstName: 'John',
            lastName: 'Steinbeck'}
    },
    {title:'The Plague', author: {
            firstName: 'Albert',
            lastName: 'Camus'}
    },
    {title:'Fun with Dick and Jane', author: {
            firstName: 'William',
            lastName: 'Gray'}
    },
];

books.forEach(function(book, index) {
    console.log(`Book # ${index}`);
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);
    console.log('---');
})

function Book(title,author) {
    this.title = title
    this.author = author
}

var books = [
    new Book('title2','author2'),
    new Book('title3','author3')

]

function showBookInfo(book) {
    console.log(book.title)
    console.log(book.author)
}

books.forEach(showBookInfo)
})();





