const Init = {
    teddiesList: document.getElementById("teddies"),
    product: document.getElementById("productrow"),
    
    buildTeddiesItems: async function() {
        console.log("loading")
        const product = await ProductApi.getProducts()
        //let picture
        let name
        let description 
        let price

        product.forEach((p, i) => {
            const template = document.importNode(Init.product.content, true)
            const item= template.querySelector(".product")
            picture = template.querySelector(".picture")
            name = template.querySelector(".name")
            description = template.querySelector(".description")
            price = template.querySelector(".price")

            picture.src = p.img
            name.innerHTML = p.name
            description.innerHTML = p.description
            price.innerHTML = p.price
            item.setAttribute("data-product-id", i)
            item.addEventListener('click', Init.showProductPage)
            Init.teddiesList.appendChild(template)
        })
    },

    showProductPage: function (e) {
        const productId = e.currentTarget.dataset.productId
        console.log(`je suiss clické depuis le produit numéro ${productId}`)
    }
}

window.onload = Init.buildTeddiesItems
