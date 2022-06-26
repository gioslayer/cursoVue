
console.log('Hola Gio, bienvenido a Vue!!')


const nombre = 'Gio'
const apellido = 'Peña'

const nombreCompletoMal = nombre + ' ' + apellido

console.log(nombreCompletoMal)

const nombreCompletoBien = `${nombre} ${apellido}`

console.log(nombreCompletoBien)

function getSaludo(nombre){
    return 'Hola '+nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
