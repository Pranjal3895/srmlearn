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
      imageurl: "https://media.gettyimages.com/id/185332097/photo/backpack-isolated-on-a-white-background.jpg?s=612x612&w=gi&k=20&c=lNJhEhYvJAGe0BrTe0lEKim_lENIjU8VG7wi9moG1DI=",
      title: "School Bag",
      description: "Stylish and durable backpack for everyday use.",
      price: 999,
      favourite: false
    },
    {
      id: 2,
      imageurl: "https://static.vecteezy.com/system/resources/thumbnails/069/256/955/small/elegant-black-dress-shoe-for-formal-occasions-free-photo.jpg",
      title: "Casual Shoes",
      description: "Comfortable and trendy shoes for all-day wear.",
      price: 1499,
      favourite: false
    },
    {
      id: 3,
      imageurl: "https://media.istockphoto.com/id/924702024/photo/ground-coffee-in-spoon-coffee-beans.jpg?s=612x612&w=0&k=20&c=dvNz-rl2D8B1DFGDFAHqmWKAOtyMJi9oy2IbOEMIkH0=",
      title: "Coffee",
      description: "Creator: kot63 Credit: Getty Images/iStockphoto.",
      price: 699,
      favourite: false
    },
    {
      id: 4,
      imageurl: "https://media.istockphoto.com/id/924702024/photo/ground-coffee-in-spoon-coffee-beans.jpg?s=612x612&w=0&k=20&c=dvNz-rl2D8B1DFGDFAHqmWKAOtyMJi9oy2IbOEMIkH0=",
      title: "Coffee2",
      description: "Creator: kot63 Credit: Getty Images/iStockphoto.",
      price: 679,
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
