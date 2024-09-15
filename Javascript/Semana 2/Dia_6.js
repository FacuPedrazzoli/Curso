let primos = [2, 3];
let noPrimos = [1,4]
let verificarNumero = 3;
let pruebas = 100;

for (; verificarNumero < pruebas; verificarNumero++) {
    let esPrimo = true;

    for (let i = 0; i < primos.length; i++) {
        if (verificarNumero % primos[i] === 0) {
            esPrimo = false;
            noPrimos.push(verificarNumero)
            break;
        }
    }
    if (esPrimo) {
        primos.push(verificarNumero);
    }
}
console.log(`Lista de los numeros que SI son primos hasta ${verificarNumero}`)
console.log(primos);
console.log(`Lista de los numeros que NO son primos hasta ${verificarNumero}`)
console.log(noPrimos);