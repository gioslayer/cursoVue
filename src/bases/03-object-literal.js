
console.log('Hola Gio, bienvenido a Vue!!')


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 764,
        lat: 14.674,
        lng: 83.97
    }
}

const persona2 = {...persona}
persona2.nombre = 'Giovanni'

console.log(persona)
console.log(persona2)