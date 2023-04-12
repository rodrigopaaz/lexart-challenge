const { default: axios } = require("axios")
const cheerio = require('cheerio')
const fs = require('fs')

const FreeMarketProducts = async (category) => {
    const {data} = await axios.get('https://lista.mercadolivre.com.br/geladeira')
    const $ = cheerio.load(data)
    const allProducts = []
    $('ol li').each((e,i) => {
        const product = {
            description: $(i).find(".ui-search-item__group a h2").text(),
            price: $(i).find(".ui-search-price__second-line .price-tag .price-tag-amount").text().split('R$').slice(1),
            category,
            img: $(i).find(".ui-search-result__image div img").data('src'),
        }
        if(product.description && product.price && product.img){
            allProducts.push(product)}
        return product
    })
    return allProducts
}

const buscapeProducts = async () => {
    const {data} = await axios.get('https://www.buscape.com.br/geladeira')
    const $ = cheerio.load(data)
    const allProducts = []
    $('div div div div div').each((e,i) => {
        
        const product = {
            description: $(i).find(".Text_Text__h_AF6.Text_MobileLabelXs__ER_cD.Text_DesktopLabelSAtLarge__baj_g.SearchCard_ProductCard_Name__ZaO5o").text(),
            price: $(i).find(".Text_Text__h_AF6.Text_MobileHeadingS__Zxam2").text(),
            img: $(i).find("a .SearchCard_ProductCard_Body__2wM_H .SearchCard_ProductCard_Image__ffKkn span img").attr('src'),
        }
        if(product.description && product.price && product.img){
            allProducts.push(product)

        }
        
    })

    const filteredProducts = allProducts.filter((_e, i) => i !== 0)
    return filteredProducts
}



const editRequest = async() => {
    const response1 =     await FreeMarketProducts()
    fs.writeFile('freeMarket.json', JSON.stringify(response1), (err) => {
        if(err) console.log(err);
        else {
            console.log(fs.readFileSync('buscape.json', 'utf8'))
        }
    })

    const response = await buscapeProducts()
    fs.writeFile('buscape.json', JSON.stringify(response), (err) => {
        if(err) console.log(err);
        else {
            console.log(fs.readFileSync('buscape.json', 'utf8'))
        }
    })
}

editRequest()