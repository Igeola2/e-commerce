const products = [
  {
    id: 1,
    name: "Sneakers",
    price: 60.00,
    image: "./images/sneakers.jpg?text=Sneakers",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 50.00,
    image: "./images/t-shirt.jpg?text=T-Shirt",
  },
  {
    id: 3,
    name: "Backpack",
    price: 40.00,
    image: "./images/bag.jpg?text=Backpack",
  },
  {
    id: 4,
    name: "Phone",
    price: 120.00,
    image: "./images/phone.jpg?text=Phone",
  },
  {
    id: 5,
    name: "Kitchen-Utensil",
    price: 25.00,
    image: "./images/kitchen.jpg?text=Kitchen-Utensil",
  },
  {
    id: 6,
    name: "Furniture",
    price: 65.50,
    image: "./images/furniture.jpg?text=Furniture",
  },
];

const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary" onclick="addToCart(${
            product.id
          })">Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-2";
    div.innerHTML = `
      <div>
        ${item.name} - $${item.price.toFixed(2)}
      </div>
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function checkout() {
  alert("Thank you for your patronage @Amityville!");
  cart.length = 0;
  updateCartUI();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("cartModal")
  );
  modal.hide();
}

// Init
displayProducts();
