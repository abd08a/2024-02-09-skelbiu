const burgerButton = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu"); 

const titles = document.querySelectorAll('.title');

const fetchProducts = async ()=>{
  const response = await fetch(
    "https://65bb503452189914b5bbb46b.mockapi.io/products"
    );

    const products = await response.json() 

    products.sort((a, b) => a.price - b.price)

    console.log(products);

    products.forEach((product)=>{
      const card = document.createElement('a') 
      card.href = './product/product.html'
      card.addEventListener('click', ()=>{
        localStorage.setItem('productId', product.id)
      })

      card.setAttribute("class", 'card')
      const title = document.createElement('h2')
      const price = document.createElement('p')
      const img = document.createElement('img')
      const description = document.createElement('p')
      const lokacija = document.createElement('p')

      title.classList.add('title')
      price.classList.add('price')
    
      title.innerText = product.title 
      price.innerText = `${product.price} €`
      img.src = product.product_img
      description.innerText = product.description
      lokacija.innerText = product.lokacija 
    
      card.append(title)    
      card.append(price)    
      card.append(img)    
      // card.append(description)    
      // card.append(lokacija)    

      wrapper.append(card); 
    });

      changeTitleColor();
    }; 
      
    const changeTitleColor = () => {
      titles.forEach((title, index) => {
        if (index % 2 === 1) {
            title.style.color = 'rgb(16, 112, 111)';
        }
      });
    };


burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

fetchProducts()