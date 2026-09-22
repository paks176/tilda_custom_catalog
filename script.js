window.addEventListener('DOMContentLoaded', () => {
    const feedbackModal = document.getElementById('rec4069882301')

    window.passObjectDataInModal = function (sku, title) {
        if (feedbackModal) {
            const SKUInput = feedbackModal.querySelector('input[name="estate_sku"]')
            if (SKUInput) {
                SKUInput.value = sku
            }
            const titleInput = feedbackModal.querySelector('input[name="estate_title"]')
            if (titleInput) {
                titleInput.value = title
            }
        }
    }

    fetch('https://store.tildaapi.com/api/getproductslist/?storepartuid=478140529053&recid=4071407101&c=1790064169845&getparts=true&getoptions=true&slice=1&size=36&flag_root=withroot')
        .then((response) => {
            response.json()
                .then((productsResponse) => {
                    if (productsResponse.products && productsResponse.products.length) {
                        const products = productsResponse.products
                        const customCardsPlace = document.querySelector('.custom-card__container')
                        if (customCardsPlace) {
                            const composedCards = products.map((product) => {
                                const productCard = document.createElement('div')
                                productCard.className = 'custom-card'
                                const rawChars = product.characteristics
                                const chars = {}
                                if (rawChars && rawChars.length) {
                                    rawChars.forEach(char => {
                                        chars[char.title] = char.value
                                    })
                                }
                                const productURL = product.url.split('/').pop()
                                let productImage
                                if (product.gallery && product.gallery.length) {
                                    productImage = JSON.parse(product.gallery)[0].img
                                } else {
                                    productImage = 'https://static.tildacdn.com/tild6339-3134-4430-b338-333965313536/logo_clean.svg'
                                }
                                productCard.innerHTML = `
                                    <div
                                      class="${ chars["Статус"] === 'Строится' ? 'custom-card__label custom-card__label--in-progress' : 'custom-card__label custom-card__label--ready' }"
                                      >
                                        ${ product.mark }
                                      </div>
                                        <a href="/tproduct/${ productURL }">
                                            <div class="custom-card__top">
                                                <img
                                                    src="${ productImage }"
                                                    alt="${ product.title }"
                                                >
                                            </div>
                            
                                            <div
                                                class="custom-card__info"
                                            >
                                                <div class="custom-card__flex">
                                                    <div class="custom-card__type">${ chars["Тип недвижимости"] }</div>
                                                    <p>${ chars["Площадь"] } м<sup>2</sup></p>
                                                </div>
                                                
                                                <div class="custom-card__city">
                                                    ${ chars["Город"] }
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Цена:</span>
                                                    <span class="custom-card__price">от ${ chars["Город"] } ₽</span>
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Платеж:</span>
                                                    <span class="custom-card__price">от ${ chars["Ежемесячный платеж"] } ₽</span>
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Вернется налогами:</span>
                                                    <span class="custom-card__price">от ${ chars["Сумма НДС к возмещению"] } ₽</span>
                                                </div>
                            
                                                <span class="custom-card__sku">${ product.sku }</span>
                                            </div>
                                        </a>
                            
                                        <a
                                            onclick="window.passObjectDataInModal('${ product.sku }', '${ product.title }')"
                                            class="custom-card__request-button"
                                            href="#real_estate_feedback"
                                        >
                                            Запросить объект
                                        </a>
                                    `
                                return productCard
                            })

                            if (composedCards.length) {
                                customCardsPlace.append(...composedCards)
                            }
                        }
                    }
                })
        })
})