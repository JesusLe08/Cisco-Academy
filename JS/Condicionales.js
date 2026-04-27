// let numero = prompt("Introduzca un número aleatorio");

// if (numero > 90 && numero < 110) {
//     alert("Bingo")
// } else {
//     alert("Miss")
// }

// let numero = prompt("Introduzca un número aleatorio");
// let message = (numero > 90 && numero < 110) ? "Bingo" : "Miss";

// alert(message);

let FirstNumber = Number(prompt("Escriba el primer numero"));
let SecondNumber = Number(prompt("Escriba el segundo numero"));
let operacion = prompt("Escriba la operacion que desea realizar (+, -, * or /)");
let result;

if( !Number.isNaN(FirstNumber) && !Number.isNaN(SecondNumber)) {
    switch (operacion) {
        case "+": result = FirstNumber + SecondNumber; break;
        case "-": result = FirstNumber - SecondNumber; break;
        case "*": result =  FirstNumber * SecondNumber; break;
        case "/": result =  FirstNumber / SecondNumber; break;
        default: result = "Error: Operacion desconocida";
    }
} else{
    result = "Error: Alguno de los valores no es un numero.";
}

alert(result);