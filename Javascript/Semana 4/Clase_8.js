let mostrar = (ar) => {
    console.log(`**************IVA****************`)
    console.log(ar * 1.21)
    console.log(`*********************************`)
    console.log(``)
}

let porCadaUno = (arr,fn) => { //Forma de hacer un foreach canonica
    for (let idx = 0; idx < arr.length; idx++) {
        fn(arr[idx])
    }   
}

let xs = [2,3,4,9]
console.log(`Formato no recomendable para realizar el calculo`)
porCadaUno(xs, z => mostrar(z))
console.log(``)
console.log(``) 
console.log(`Formato mas recomendable de como relizar esta cuenta`)
xs.forEach(item => mostrar(item))