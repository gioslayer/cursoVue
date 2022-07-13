
const miPromesa = () => {
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            //resolve('Tenemos un valor en la promesa')
            reject('REJECT en miPromesa')
        }), 1000;
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')
        const respuesta = await miPromesa()
        console.log(respuesta)
        console.log('Fin')
        return 'Fin de medir tiempo async'
    } catch (error) {
        throw 'Error en medirTIemposAsync'
    }
}

medirTiempoAsync()
    .then(valor => console.log('THEN exitoso', valor))
    .catch(err => console.log('Error:', err))