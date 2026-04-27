//Ejercicio1
// for (i=100; i>=0; i-=10) {
//     console.log(i);
// }

//Ejercicio2
// let upperLimit = Number(prompt("Enter upper limit"));
// let lowerLimit = Number(prompt("Enter lower limit"));

// if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) 
// {
//     for (i = upperLimit; i >= lowerLimit; i -= 10) 
//     {
//         console.log(i);
//     }
// }

//Ejercicio3
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for (number of numbers) {
//     console.log(number);
// }

// for (number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// for (number of numbers) {
//     if (number > 10 && number < 60) {
//         console.log(number);
//     }
// }

let movies = [];
while (true) {
    let title = prompt("Introduce el nombre de la pelicula");
    let rating = prompt("Introduce Rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("Todos los raitings abajo de 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("Todos los raitings arriba de 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}