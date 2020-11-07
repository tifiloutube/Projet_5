const ProductApi = {
    baseUrl: "http://localhost:3000/api/teddies",

    getProducts: async function () {
        fetch("http://localhost:3000/api/teddies")
        .then(function (response) {
            return response.json()
        }).then(function(data) {
            console.log(data)
        })
        const products = [
            {
                name: 'Norbert',
                //picture: 'http://localhost:3000/images/teddy_4.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                price: 2900
            },
            {
                name: 'Arnold',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 3900
            },
            {
                name: 'Lenny and Carl',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 5900
            },
            {
                name: 'Gustav',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 4500
            },
            {
                name: 'Garfunkel',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 5500
            },
        ]

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