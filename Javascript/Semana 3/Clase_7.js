
const fs = require('node:fs');
const EOL = require('node:os')

let cotizaciones = 
    fs.readFileSync('C:/Programacion/Javascript/Semana 3/TSLA.csv', 
    { encoding: 'utf8'})

let lineasDelYahooFinance = cotizaciones.split('\n')
let concatenado = ''

for (let linea of lineasDelYahooFinance){
    if (linea.indexOf("Close") > 0){
        continue
    }
    let datos = linea.split(',')
    let formateado = ['[', datos[0], '."', datos[4], '],']
    concatenado = concatenado + formateado.join('') + "\n"
}

let contenidoTemplateGoogle = 
    fs.readFileSync('C:/Programacion/Javascript/Semana 3/graficoTSLA.html',
    { encoding: 'utf8'})

contenidoTemplateGoogle = contenidoTemplateGoogle.replace('replazatePAPA', concatenado)

console.log(concatenado)