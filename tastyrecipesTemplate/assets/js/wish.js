function getProductsWish() {
    wishProducts.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index) => {
        let wishDiv = document.createElement("div")
        wishDiv.className = "wishDiv"
        wishDiv.innerHTML = `
    <img src="${item.image}" alt="">
    <h2>${item.title}</h2>
    <h2>${item.count} piece</h2>
        <button onclick="removeItem(${index})">+Add to Cart</button>
    `
    wishProducts.appendChild(wishDiv)
    })
}
function removeItem(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProductsWish()
}


window.onload = () => {
    getProductsWish()
}