let limit = 3
let page = 1



const renderProducts = () => {
    axios.get(`https://655c83b725b76d9884fd6e9b.mockapi.io/products?limit=${limit}&page=${page}`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <div class="wishhAdd">
                <button onclick="addToCart(${item.id})">+Add to Cart</button>
                <button onclick="addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
            </div>
            `
                productsAll.appendChild(miniDiv)

            })
            page++
        })
}

loadMore.addEventListener("click", renderProducts)

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    productItem = cart.find(item => item.id == id)
    if (productItem) {
        productItem.count = (productItem.count || 1) + 1
    }
    else {
        cart.push(db.find(item => item.id == id))
        
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}


const addToWish = (id) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    productItem = wish.find(item => item.id == id)
    if (productItem) {
        alert("Favorilere elave edilib!")
    }
    else {
        wish.push(db.find(item => item.id == id))
        localStorage.setItem("wish", JSON.stringify(wish))
    }

    console.log(wish);
}

window.onload = () => {
    renderProducts()
}