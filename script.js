let rangoNumero = [10, 20, 30, 40];
let numero;

numero = prompt('Dime un numero del 0 al 100:');

if (numero == rangoNumero[0]) {
    console.log(`El número que has elegido es ${numero}.`);
} else if (numero == rangoNumero[1]) {
    console.log(`El número que has elegido es ${numero}.`);
} else if (numero == rangoNumero[2]) {
    console.log(`El número que has elegido es ${numero}.`);
} else if (numero == rangoNumero[3]) {
    console.log(`El número que has elegido es ${numero}.`);
} else if (numero < rangoNumero[0]) {
    console.log(`${numero} es menor que ${rangoNumero[0]}.`);
} else if (numero >= rangoNumero[0] && numero < rangoNumero[1]) {
    console.log(`${numero} es mayor que ${rangoNumero[0]}, pero más pequeño que ${rangoNumero[1]}.`);
} else if (numero >= rangoNumero[1] && numero < rangoNumero[2]) {
    console.log(`${numero} es mayor que ${rangoNumero[1]}, pero más pequeño que ${rangoNumero[2]}.`);
} else if (numero >= rangoNumero[2] && numero < rangoNumero[3]) {
    console.log(`${numero} es mayor que ${rangoNumero[2]}, pero más pequeño que ${rangoNumero[3]}.`)
} else {
    console.log(`${numero} es mayor que ${rangoNumero[3]}.`)
}