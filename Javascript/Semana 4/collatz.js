let collatz = (n) => {
    let value = []  // Almacena el valor
    let counts = [] // Almacena la cantidad de iteraciones

    let count = 0   // Contador para las iteraciones

    while (n !== 1) {
        value.push(n)  // Agrega el valor actual de n a la secuencia
        count++        // Incrementa el contador de iteraciones
        counts.push(count) // Agrega el valor del contador al array counts
        if (n % 2 === 0) {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }
 
    value.push(1)  // Agrega el 1 al final de la secuencia
    count++        // Contabiliza la última iteración
    counts.push(count) // Agrega la última iteración al array counts

    return {
        sequence: value,  // Devuelve la secuencia de números
        iterations: counts // Devuelve el array con el número de iteraciones
    }
}

let resultado = collatz(6)

let valores = resultado.sequence
let iteraciones = resultado.iterations

console.log(valores)
console.log(iteraciones)
