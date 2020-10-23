const ProductApi = {
    baseUrl: 'http://localhost:3000/teddies',

    getProducts: async function () {
        //const products = await fetch(ProductApi.baseUrl)
        // fetch une vrai api
        /*fetch('baseUrl')
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)
            })*/
        const products = [
            {
                title: 'teddie',
                description: 'magnifique',
                price: 20
            },
            {
                
                title: 'teddie',
                description: 'jerem',
                price: 20
            },
            {
                title: 'teddie',
                description: 'PSG',
                price: 20
            },
            {
                title: 'teddie',
                description: 'Bayern',
                price: 20
            },
            {
                title: 'teddie',
                description: 'Barca',
                price: 20
            },
            {
                title: 'teddie',
                description: 'City',
                price: 20
            },

        
        ]

        },

        /*var img = document.createElement ("img");
        img.src = "http://localhost:3000/images/teddy_1.jpg";
        var div = document.getElementById ("teddies");
        div.appendChild(img);*/

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