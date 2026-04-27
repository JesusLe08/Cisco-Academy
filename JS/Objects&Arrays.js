//OBJECTS
let ticket = {
    from: "Berlin",
    to: "Postdam",
    price: 11
};

console.log(ticket.from);
console.log(ticket.to);
console.log(ticket.price);


let person = {};
person.name = "Mary";
person.surname = "Stuart";
console.log(`${person.name} ${person.surname}`);

//ARRAYS and OBJECTS
let books = [
    {
        Title: "Hablando de JavaScript",
        Autor: "Axel Raushmayer",
        Pages: 460
    },
    {
        Title: "Programacion de aplicaciones JavaScript",
        Autor: "Eric Elliot",
        Pages: 254
    },
    {
        Title: "Comprendiendo ECMAScript",
        Autor: "Nicholas C. Zakas",
        Pages: 352
    }
];

books[3] = {
    Title: "Aprendiendo patrones de diseño JavaScript",
    Autor: "Addy Osmani",
    Pages: 254
};

console.log(books.length);
console.log(books[0].Title);
console.log(books[1].Title);
console.log(books[2].Title);
console.log(books[3].Title);

let selectedBooks = books.slice(-2);

books.shift();

console.log(books.length);
console.log(books[0].Title);
console.log(books[1].Title);
console.log(books[2].Title);

let sum = books[1].Pages + books[0].Pages + books[1].Pages;
console.log(`pages: ${sum}`);