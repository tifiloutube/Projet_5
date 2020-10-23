const Dom = {
    teddiesList: document.getElementById('teddies'),
    product: document.getElementById('template-product'),

    buildTeddiesItems: async function () {
        console.log('loading ...')
        // call la datasource
        const products = await ProductApi.getProducts()
        let title
        let description
        let price

        products.forEach((p, i) => {
            const template = document.importNode(Dom.product.content, true)
            const item = template.getElementById('product')
            img = template.getElementById(('image'))
            title = template.getElementById(('title'))
            description = template.getElementById(('description'))
            price = template.getElementById(('price'))


            title.innerHTML = p.title
            description.innerHTML = p.description
            price.innerHTML = p.price
            item.setAttribute('data-product-id', i)
            item.addEventListener('click', Dom.showProductPage)
            Dom.teddiesList.appendChild(template)
        })

        img-teddies.forEach((src) => {
            img = teddies.getElementById(('img-teddies'))
        })
    },

    showProductPage: function (e) {
        const productId = e.currentTarget.dataset.productId
        console.log(`je suis clické depuis le produit numéro ${productId}`)
            window.open("/product.html?ID="+productId)
    }
}

window.onload = Dom.buildTeddiesItems()