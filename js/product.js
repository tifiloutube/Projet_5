const ProductApi = {
    baseUrl: "http://localhost:3000/api/teddies",

    getProducts: async function() {
        fetch("http://localhost:3000/api/teddies")
        .then(function (response) {
            return response.json()
        }).then(function(data) {
            console.log(data)
        })

        let products =  [];

        console.log(this.data)
        
        console.log(products)
        return products
        console.log('List all products')
    },

    getProduct: function (id) {
        console.log('Get a single product')
    },

    createOrder: function () {
        console.log('Create an order')
    }
}