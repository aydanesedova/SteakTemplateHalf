let nameinp = document.getElementById("nameinp")
let titleinp = document.getElementById("titleinp")
let priceinp = document.getElementById("priceinp")
let myForm = document.getElementById("myForm")
let addBtn = document.getElementById("addBtn")


myForm.addEventListener("submit", function (event) {
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e9b.mockapi.io/products", {
        name: nameinp.value,
        title: titleinp.value,
        price: priceinp.value,
    })
        .then((res) => {
            console.log(res.data);
            myForm.reset()
        })
})

// addBtn.addEventListener('click', myForm) 



const renderProducts = () => {
    addPage.innerHTML = ``
    axios.get(`https://655c83b725b76d9884fd6e9b.mockapi.io/products`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("tr")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
            <h2>Title: ${item.title}</h2>
            <h2>price: ${item.price} $</h2>



                <button onclick="deleteAddPage(${item.id})">Delete</button>
            `
                addPage.appendChild(miniDiv)

            })

        })
}

function deleteAddPage(id) {
    axios.delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
        .then((res) => {
            renderProducts()
            console.log(deleteAddPage);
        })
}


window.onload = () => {
    renderProducts()
}


const sortAZBtn = document.getElementById("sortAZBtn")
function sortAZ() {
    addPage.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortDataAz = db.sort((a, b) => a.title.localeCompare(b.title))
            sortDataAz.map((item) => {
                let miniDiv = document.createElement("tr")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
        <h2>Title: ${item.title}</h2>
        <h2>price: ${item.price} $</h2>
            <button onclick="deleteAddPage(${item.id})">Delete</button>
        `
                addPage.appendChild(miniDiv)
            })
        })
}

sortAZBtn.addEventListener("click", sortAZ)




function sortZA() {
    addPage.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortDataZa = db.sort((a, b) => b.title.localeCompare(a.title))
            sortDataZa.map((item) => {
                let miniDiv = document.createElement("tr")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
        <h2>Title: ${item.title}</h2>
        <h2>price: ${item.price} $</h2>
            <button onclick="deleteAddPage(${item.id})">Delete</button>
        `
                addPage.appendChild(miniDiv)
            })
        })
}

sortZABtn.addEventListener("click", sortZA)


const sortDefBtn = document.getElementById("sortDefBtn")
sortDefBtn.addEventListener("click", renderProducts)
