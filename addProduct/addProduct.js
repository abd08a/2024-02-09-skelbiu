const burgerButton = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

const button = document.getElementById("btn"); 
const message = document.getElementById("message"); 
message.setAttribute("class", "message")

const title = document.getElementById("title"); 
const price = document.getElementById("price"); 
const product_img = document.getElementById("product_img"); 
const description = document.getElementById("description"); 
const lokacija = document.getElementById("lokacija"); 

burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


button.addEventListener('click', async ()=>{
  if (!title.value || !description.value || !price.value || !lokacija.value || !product_img.value) {
    console.log('Please fill all the inputs');
    return
  }

  const productData = {
    title: title.value,
    price: price.value,
    product_img: product_img.value,
    description: description.value, 
    lokacija: lokacija.value,
  }
  console.log(productData); 

 
  const response = await fetch("https://65bb503452189914b5bbb46b.mockapi.io/products", {
    method: 'POST', 
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(productData),
  })

  const addedProduct = await response.json() 

  message.innerText = 'Skelbimas įkeltas sėkmingai!'

  setTimeout(()=>{
    window.location.assign("../index.html")
  }, 2000)
})


