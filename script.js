window.addEventListener('DOMContentLoaded', () => {
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
                                productCard.innerHTML = `
                                    <div class="custom-card__label">${ product.mark }</div>
                                        <a href="/tproduct/570895560693-ofisnoe-pomeschenie-g-kazan">
                                            <div class="custom-card__top">
                                                <img
                                                    src="https://optim.tildacdn.com/stor6332-6361-4932-b232-363131303830/-/cover/360x396/center/center/-/format/webp/3cfa2d46a4680474e26c6430f4737e70.jpg.webp"
                                                    alt="Товар"
                                                >
                                            </div>
                            
                                            <div
                                                class="custom-card__info"
                                            >
                                                <div class="custom-card__flex">
                                                    <div class="custom-card__type">Офисная</div>
                                                    <p>240 м<sup>2</sup></p>
                                                </div>
                                                <div class="custom-card__city">
                                                    Казань
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Цена:</span>
                                                    <span class="custom-card__price">от 24 500 000 ₽</span>
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Платеж:</span>
                                                    <span class="custom-card__price">от 512 000 ₽</span>
                                                </div>
                            
                                                <div class="custom-card__flex">
                                                    <span>Вернется налогами:</span>
                                                    <span class="custom-card__price">от 512 000 ₽</span>
                                                </div>
                            
                                                <span class="custom-card__sku">LT-ASK-KZN-0147</span>
                                            </div>
                                        </a>
                            
                                        <a
                                            class="custom-card__request-button"
                                            href="#real_estate_feedback"
                                        >
                                            Запросить объект
                                        </a>
                                    `
                                return productCard
                            })

                            console.log(composedCards)

                            if (composedCards.length) {
                                customCardsPlace.appendChild(...composedCards)
                            }
                        }
                        console.log(productsResponse.products)
                    }
                })
        })
})