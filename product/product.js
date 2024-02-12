const productId = localStorage.getItem('productId')

const title = document.getElementById("title")
const price = document.getElementById("price")
const img = document.getElementById("img")
const description = document.getElementById("description")
const lokacija = document.getElementById("lokacija")

const deleteProduct = document.getElementById("delete-product-btn") 

const message = document.getElementById("message"); 
message.setAttribute("class", "message")

const fetchProduct = async ()=>{
const response = await fetch(`https://65bb503452189914b5bbb46b.mockapi.io/products/${productId}`)

const product = await response.json()

console.log(product);

title.innerText = product.title
price.innerText = `${product.price} €`
img.src = product.product_img
description.innerText = product.description
lokacija.innerText = product.lokacija
}

fetchProduct() 

deleteProduct.addEventListener('click', async ()=>{
const response = await fetch(`https://65bb503452189914b5bbb46b.mockapi.io/products/${productId}`, {
method: 'DELETE'
}
)

const product = await response.json()
console.log(product)

// const deletedProduct = await response.json() 

message.innerText = 'Skelbimas ištrintas!'

setTimeout(()=>{
  window.location.assign("../index.html")
}, 2000)
})



