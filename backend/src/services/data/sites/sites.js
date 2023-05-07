const buscape = (category, { id: searchId, description: search }) => ({
  siteUrl: 'https://buscape.com.br', // URL base do site
  endpoint: `search?q=${category} ${search}`, // Endpoint específico para o site
  category,
  searchId,
  siteId: 2,
  selectors: { // Seletores para extrair os dados do site
    productContainerSelector: '.col-lg-9 div', // Seletor para o contêiner de cada produto
    productLinkSelector: '.SearchCard_ProductCard_Inner__7JhKb', // Seletor para o link do produto
    productTitleSelector: 'a h2', // Seletor para o título do produto
    productPriceSelector: 'a .SearchCard_ProductCard_Description__fGXI3 .Text_Text__h_AF6.Text_MobileHeadingS__Zxam2', // Seletor para o preço do produto
    productImageContainerSelector: 'div:nth-child(2)', // Seletor para o contêiner da imagem do produto
    productImageSelector: 'img', // Seletor para a imagem do produto
  },
});

const mercadoLivre = (category, { id: searchId, description: search }) => ({
  siteUrl: 'https://lista.mercadolivre.com.br', // URL base do site
  endpoint: `${category} ${search}`, // Endpoint específico para o site
  category,
  searchId,
  siteId: 1,
  selectors: { // Seletores para extrair os dados do site
    productContainerSelector: 'ol li', // Seletor para o contêiner de cada produto
    productLinkSelector: 'div .ui-search-result__image a', // Seletor para o link do produto
    productTitleSelector: '.ui-search-item__group a h2', // Seletor para o título do produto
    productPriceSelector: '.ui-search-price__second-line .price-tag .price-tag-amount', // Seletor para o preço do produto
    productImageContainerSelector: '.ui-pdp .ui-pdp-container ui-pdp-container--pdp ', // Seletor para o contêiner da imagem do produto
    productImageSelector: '.ui-pdp-gallery__wrapper img', // Seletor para a imagem do produto
  },
});

module.exports = { buscape, mercadoLivre };
