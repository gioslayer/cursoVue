
console.log('Hola Gio, bienvenido a Vue!!')


function saludar(nombre){
    return `Hola ${nombre}`
}

console.log(saludar("Gio"));


const saludar2 = function(cadena){
    return `Hola ${cadena}`
}

console.log(saludar2("Gio"));


const saludarArrowFunction = ( cadena ) => {
    return `Hola ${cadena}`
}

console.log(saludarArrowFunction("Giovanni"))


const saludarArrowFunction2 = ( cadena ) => `Hola ${cadena}`

console.log(saludarArrowFunction2("Giovanni"))


const getUser = () => {
    return {
        uid : 'ABC123',
        name : 'Giovanni Peña'
    }
}

console.log(getUser())


const getUser2 = () => ({ uid : 'ABC124', name : 'Giovanni Peña 2' })

console.log(getUser2())


const heroes = [
    {
        id : 1,
        name : "Batman"
    },
    {
        id : 2,
        name : "Superman"
    }
]


const existe = (name) => heroes.some( (heroe) => heroe.name === name ) 
const nombre = 'Aquaman'
console.log(`El personaje ${nombre} ${existe(nombre)}`);