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
            const item= template .getElementById("product")
            picture = template.getElementById(("picture"))
            name = template.getElementById(("name"))
            description = template.getElementById(("description"))
            price = template.getElementById(("price"))

            //picture.innerHTML = img.src
            name.innerHTML = p.name
            description.innerHTML = p.description
            price.innerHTML = p.price
            item.setAttribute("data-product-id", i)
            item.addEventListener('click', Init.showProductPage)
            Init.teddiesList.appendChild(template)
        })
    },

    showProductPage: function (e) {
        const productId = e.currenTarget.dataset.productId
        console.log(`hello world ${productId}`)
    }
}

window.onload = Init.buildTeddiesItems()
