const productId = localStorage.getItem('productId')

const title = document.getElementById("title")
const price = document.getElementById("price")
const img = document.getElementById("img")
const description = document.getElementById("description")
const Location = document.getElementById("location")

const deleteProduct = document.getElementById("delete-product-btn") 

const message = document.getElementById("message"); 
message.setAttribute("class", "message")

const fetchProduct = async ()=>{
const response = await fetch(`https://65bb503452189914b5bbb46b.mockapi.io/products/${productId}`)

const product = await response.json()

console.log(product);

title.innerText = product.title
price.innerText = product.price
img.src = product.product_img
description.innerText = product.description
Location.innerText = product.location
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

message.innerText = 'product deleted successfully'

setTimeout(()=>{
  window.location.assign("../index.html")
}, 2000)
})



