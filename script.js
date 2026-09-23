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

    t_onReady(function () {
        var prodcard_optsObj = {
            blockId: '',
            hasWrap: 'true',
            txtPad: '',
            bgColor: '',
            borderRadius: '',
            shadow: '',
            shadowSize: '',
            shadowOpacity: '',
            shadowHover: '',
            shadowSizeHover: '',
            shadowOpacityHover: '',
            shadowShiftyHover: '',
            btnTitle1: '',
            btnLink1: 'popup',
            btnTitle2: '',
            btnLink2: 'popup',
            showOpts: false,
            style: '',
            hasImg: true,
            hasDescr: true,
            hasSeparator: true
        };
        var price_optsObj = {color: '', colorOld: '', position: '', priceRange: ''};
        var popup_optsObj = {
            popupContainer: '',
            columns: '6',
            columns2: '6',
            isVertical: '',
            align: '',
            btnTitle: 'Запросить объект',
            closeText: 'More products',
            iconColor: '#000000',
            containerBgColor: '#ffffff',
            overlayBgColor: '#ffffff',
            overlayBgColorRgba: 'rgba(255,255,255,1)',
            popupStat: '',
            tabsPosition: '',
            fixedButton: false,
            mobileGalleryStyle: ''
        };
        var slider_optsObj = {
            anim_speed: '',
            videoPlayerIconColor: '',
            cycle: '',
            controls: 'arrowsthumbs',
            bgcolor: '#ebebeb'
        };
        var slider_dotsOptsObj = {size: '', bgcolor: '', bordersize: '', bgcoloractive: ''};
        var slider_slidesOptsObj = {zoomable: true, bgsize: 'cover', ratio: '1'};
        var typography_optsObj = {descrColor: '', titleColor: '', optionsColor: ''};
        var default_sort = {default: null, in_stock: false};
        var options = {
            recid: '4071407101',
            storepart: '478140529053',
            previewmode: 'yes',
            prodCard: prodcard_optsObj,
            popup_opts: popup_optsObj,
            defaultSort: default_sort,
            galleryStyle: '',
            slider_opts: slider_optsObj,
            slider_dotsOpts: slider_dotsOptsObj,
            slider_slidesOpts: slider_slidesOptsObj,
            typo: typography_optsObj,
            price: price_optsObj,
            blocksInRow: '3',
            colClass: 't-col t-col_4',
            sidebar: false,
            colWidth: '360',
            colClassFullWidth: 't-col t-col_12',
            imageHover: true,
            imageHeight: '',
            imageWidth: '',
            imageRatio: '1',
            imageRatioClass: '',
            align: 'left',
            vindent: '',
            isHorizOnMob: false,
            itemsAnim: '',
            hasOriginalAspectRatio: false,
            size: 36,
            markColor: '#ffffff',
            markBgColor: '#ff4a4a',
            currencySide: 'r',
            currencyTxt: 'р.',
            currencySeparator: ',',
            currencyDecimal: '',
            btnSize: 'xs',
            buttonRadius: '5px',
            buttonBgColor: '#000000',
            isFlexCols: '',
            hideStoreParts: false,
            verticalAlignButtons: false,
            hideFilters: false,
            titleRelevants: '',
            showRelevants: '',
            showPagination: '',
            tabs: '',
            relevants_slider: false,
            relevants_quantity: '4',
            sliderthumbsside: '',
            showStoreBtnQuantity: '',
            verticalAlign: '',
            rightColumnWidth: '',
            isTitleClip: false,
            horizontalScrollHint: 'hand'
        };
        t_onFuncLoad('t_store_init', function () {
            t_store_init('4071407101', options);
        });
    });

    fetch('https://store.tildaapi.com/api/getproductslist/?storepartuid=478140529053&recid=4071407101&c=1790064169845&getparts=true&getoptions=true&slice=1&size=36&flag_root=withroot')
        .then((response) => {
            response.json()
                .then((productsResponse) => {
                    if (productsResponse.products && productsResponse.products.length) {
                        const products = productsResponse.products
                        const originURL = window.location.href.origin
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
                                const productURL = originURL + '/tproduct/' + product.url.split('/').pop()
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
                                        <a href="${ productURL }">
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
// class="js-product t-store__card t-col t-col_4 t-align_left t-item"
// data-product-inv=""
// data-product-lid="570895560693"
// data-product-uid="570895560693"
// data-product-gen-uid="570895560693"
// data-product-pack-label="lwh"
// data-product-pack-m="0"
// data-product-pack-x="0"
// data-product-pack-y="0"
// data-product-pack-z="0"
// data-product-url="https://estate.leasing-trade.ru/test/tproduct/570895560693-ofisnoe-pomeschenie-g-kazan"
// data-product-part-uid="478140529053"
// data-card-size="small"
// data-product-img="https://static.tildacdn.com/stor6539-3836-4166-b637-653461396435/5a6e219791e81f86eab62c9fdb339a11.jpg"
const test = {
    "uid": 570895560693,
    "title": "Офисное помещение г. Казань",
    "sku": "LT-ASK-KZN-0147",
    "text": "",
    "mark": "Строится",
    "quantity": "",
    "portion": 0,
    "unit": "",
    "single": "",
    "price": "0.0000",
    "priceold": "",
    "descr": "г. Казань, ул. Татарстан, д. 10",
    "gallery": "[{\"img\":\"https:\\/\\/static.tildacdn.com\\/stor6539-3836-4166-b637-653461396435\\/5a6e219791e81f86eab62c9fdb339a11.jpg\"},{\"img\":\"https:\\/\\/static.tildacdn.com\\/stor3334-6364-4036-b439-303036383464\\/e93f3368e14b324b5012632c661851fa.jpg\"}]",
    "buttonlink": "",
    "buttontarget": "",
    "json_options": "",
    "sort": 1000850,
    "url": "https://estate.leasing-trade.ru/test/tproduct/570895560693-ofisnoe-pomeschenie-g-kazan",
    "pack_label": "lwh",
    "pack_x": 0,
    "pack_y": 0,
    "pack_z": 0,
    "pack_m": 0,
    "partuids": "[478140529053]",
    "externalid": "I00oMRkLZN551E0IFt7a",
    "editions": [
        {
            "uid": 570895560693,
            "price": "0.0000",
            "priceold": "",
            "sku": "LT-ASK-KZN-0147",
            "quantity": "",
            "img": "https://static.tildacdn.com/stor6539-3836-4166-b637-653461396435/5a6e219791e81f86eab62c9fdb339a11.jpg"
        }
    ]
}