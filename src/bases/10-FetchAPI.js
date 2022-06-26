console.log('Hola Mundo')

const apikey = '3hDpQ4U02x3Uhma0uy7mlXC9SwmBFQek'

const endpoint = 'https://api.giphy.com/v1/gifs/random'

/*
fetch(`${endpoint}?api_key=${apikey}`)
    .then( resp => {
        console.log(resp)
    })
    .catch( e => console.log('No se pudo obtener información de la petición: '+e))

*/

fetch(`${endpoint}?api_key=${apikey}`)
    .then( resp => resp.json() )
    .then( ( {data} ) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })