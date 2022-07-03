import axios from 'axios'

const apikey = '3hDpQ4U02x3Uhma0uy7mlXC9SwmBFQek'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
})


giphyApi.get('/random')
    .then(resp => {

        const { data } = resp.data
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        console.log(url)
        /*Esta es una solución valida pero quizas pueda ser un tanto dificil de manejar
        al querer entrar a una nueva propiedad, de nuevo tendriamos que usar
        resp.data.data.images.original.height
        const url = resp.data.data.images.original.url
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
        console.log(resp.data.data.images.original.url)

        */
    })