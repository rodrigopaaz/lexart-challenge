import axios from 'axios'

const cheerio = require('cheerio')

const request = async () => {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const {data} = await axios.get('https://lista.mercadolivre.com.br/geladeira')
    const $ = cheerio.load(data)
    const elements = $('.ui-search-layout--stack div')
    return elements
}

const editRequest = async() => {
    const data = await request()
    console.log(data)
}

export default editRequest