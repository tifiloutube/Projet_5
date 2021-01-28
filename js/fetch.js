function fetchData() {
    fetch("http://localhost:3000/api/teddies")
        .then(response => {
            if(!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data
                .map(product => {
                    return `
                    <div class="product">
                        <p class ="image"><img src ="${product.imageUrl}" alt="" /></p>
                        <p class ="name">Name: ${product.name}</p>
                        <p class ="price">Price: ${product.price} €</p>
                        <p class ="description">Description : ${product.description}</p>
                    </div>
                    `;
                })
                .join("");
                console.log(html);
                document.querySelector("#teddies").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error)
        });
}

fetchData();