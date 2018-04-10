let rangoNumeros = [10, 20, 30, 40];
let numero = 27;
if (numero < rangoNumeros[0]) {
    console.log(`${numero} es menor que ${rangoNumeros[0]}.`);
} else if (numero >= rangoNumeros[0] && numero < rangoNumeros[1]) {
    console.log(`${numero} es mayor que ${rangoNumeros[0]}, pero más pequeño que ${rangoNumeros[1]}.`);
} else if (numero >= rangoNumeros[1] && numero < rangoNumeros[2]) {
    console.log(`${numero} es mayor que ${rangoNumeros[1]}, pero más pequeño que ${rangoNumeros[2]}.`);
} else if (numero >= rangoNumeros[2] && numero < rangoNumeros[3]) {
    console.log(`${numero} es mayor que ${rangoNumeros[2]}, pero más pequeño que ${rangoNumeros[3]}.`)
} else {
    console.log(`${numero} es mayor que ${rangoNumeros[3]}.`)
}