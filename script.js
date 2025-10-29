// 🌍 Global Offer (admin can update this)
let globalOffer = 20; // percentage
document.getElementById('offerDisplay').innerText = globalOffer;

// 💾 Check if products exist in LocalStorage
let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

// If not found, create default products
if (storedProducts.length === 0) {
  storedProducts = [
    {
      id: 1,
      imageurl: "https://wallpapers.com/images/hd/brown-heart-cookies-x7zrbvs784hz5c1e.jpg",
      title: "Cookies",
      description: "Cookies made with love.",
      price: 550,
      favourite: false
    },
    {
      id: 2,
      imageurl: "https://cakofy.com/cdn/shop/files/A_luxurious_Ferrero_Rocher_Cake_Gurgaon_Delhi_NCR_Cakofy.png?v=1754377693",
      title: "Chocolate Cake",
      description: "Delicious chocolate cake with the goodness of nuts.",
      price: 1200,
      favourite: false
    },
    {
      id: 3,
      imageurl: "https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-coffee-beans-and-coffee-grinder-image_15739969.jpg",
      title: "Coffee Beans",
      description: "Healthy handpicked coffee beans",
      price: 850,
      favourite: false
    },
    {
      id: 4,
      imageurl: "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-coffee-beans-coffee-grounds-container-image_2206184.jpg",
      title: "Ground Coffee",
      description: "Good Natural coffee",
      price: 800,
      favourite: false
    },
    {
      id: 5,
      imageurl: "https://media.istockphoto.com/id/1366672341/photo/glass-with-ice-and-coffee.jpg?s=612x612&w=0&k=20&c=lR7zj__gNDmO0aXfjV8N9Ti-WnOx2iuNxRRyEDvFCi4=",
      title: "Cold Coffee",
      description: "Tasty coffee",
      price: 250,
      favourite: false
    },
  ];
  localStorage.setItem('products', JSON.stringify(storedProducts));
}

const container = document.getElementById('productContainer');

// 💰 Function to calculate discounted price
function getDiscountedPrice(price) {
  return (price - (price * globalOffer / 100)).toFixed(2);
}

// ❤️ Toggle Favourite
function toggleFavourite(id) {
  storedProducts = storedProducts.map(product => {
    if (product.id === id) product.favourite = !product.favourite;
    return product;
  });
  localStorage.setItem('products', JSON.stringify(storedProducts));
  displayProducts();
}

// 🖼️ Display Products
function displayProducts() {
  container.innerHTML = '';
  storedProducts.forEach(product => {
    const discountedPrice = getDiscountedPrice(product.price);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${product.imageurl}" alt="${product.title}">
      <div class="card-body">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">₹${discountedPrice} <span style="text-decoration: line-through; color: grey;">₹${product.price}</span></div>
        <button class="like-btn ${product.favourite ? 'liked' : ''}" onclick="toggleFavourite(${product.id})">
            &#10084;
        </button>

      </div>
    `;
    container.appendChild(card);
  });
}

// Initial Display
displayProducts();
