const fetchProducts = async ()=>{
  const response = await fetch(
    "https://65bb503452189914b5bbb46b.mockapi.io/products"
    );

    const products = await response.json() 

    console.log(products);

    products.forEach((product)=>{
      const card = document.createElement('a') 
      card.href = './product.html'
      card.addEventListener('click', ()=>{
        localStorage.setItem('productId', product.id)
      })

      card.setAttribute("class", 'card')
      const title = document.createElement('h2')
      const price = document.createElement('p')
      const img = document.createElement('img')
      const description = document.createElement('p')
      const location = document.createElement('p')
    
      title.innerText = product.title 
      price.innerText = product.price
      img.src = product.product_img
      description.innerText = product.description
      location.innerText = product.location 
    
      card.append(title)    
      card.append(price)    
      card.append(img)    
      card.append(description)    
      card.append(location)    

      wrapper.append(card)
    })
}

fetchProducts()