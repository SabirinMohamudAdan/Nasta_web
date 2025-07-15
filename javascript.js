//  // Cart functionality
//  let cart = [];
        
//  // DOM Elements
//  const cartIcon = document.getElementById('cart-icon');
//  const cartCount = document.getElementById('cart-count');
//  const cartSidebar = document.querySelector('.cart-sidebar');
//  const closeCart = document.getElementById('close-cart');
//  const cartOverlay = document.getElementById('cart-overlay');
//  const cartItems = document.getElementById('cart-items');
//  const cartTotal = document.getElementById('cart-total');
//  const cartNotification = document.getElementById('cart-notification');
//  const orderButtons = document.querySelectorAll('.order-btn');
//  const productCards = document.querySelectorAll('.product-card');
 
//  // Initialize cart from localStorage
//  function initCart() {
//      const savedCart = localStorage.getItem('cart');
//      if (savedCart) {
//          cart = JSON.parse(savedCart);
//          updateCartCount();
//      }
//  }
 
//  // Save cart to localStorage
//  function saveCart() {
//      localStorage.setItem('cart', JSON.stringify(cart));
//  }
 
//  // Update cart count display
//  function updateCartCount() {
//      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//      cartCount.textContent = totalItems;
//  }
 
//  // Add to cart function
//  function addToCart(product) {
//      // Check if product already in cart
//      const existingItem = cart.find(item => item.name === product.name);
     
//      if (existingItem) {
//          existingItem.quantity++;
//      } else {
//          cart.push({...product, quantity: 1});
//      }
     
//      // Update UI
//      updateCartCount();
//      saveCart();
     
//      // Show notification
//      showNotification();
//  }
 
//  // Show cart notification
//  function showNotification() {
//      cartNotification.classList.add('show');
//      setTimeout(() => {
//          cartNotification.classList.remove('show');
//      }, 2000);
//  }
 
//  // Toggle cart sidebar
//  function toggleCart() {
//      cartSidebar.classList.toggle('open');
//      cartOverlay.classList.toggle('show');
     
//      if (cartSidebar.classList.contains('open')) {
//          renderCartItems();
//      }
//  }
 
//  // Render cart items
//  function renderCartItems() {
//      cartItems.innerHTML = '';
     
//      if (cart.length === 0) {
//          cartItems.innerHTML = '<p class="text-gray-500 text-center py-10">Your cart is empty</p>';
//          cartTotal.textContent = '$0.00';
//          return;
//      }
     
//      let total = 0;
     
//      cart.forEach(item => {
//          const itemTotal = item.price * item.quantity;
//          total += itemTotal;
         
//          const cartItem = document.createElement('div');
//          cartItem.className = 'flex items-center justify-between py-3 border-b border-gray-200';
//          cartItem.innerHTML = `
//              <div class="flex items-center">
//                  <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
//                  <div class="ml-3">
//                      <h4 class="font-semibold">${item.name}</h4>
//                      <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
//                  </div>
//              </div>
//              <div class="flex items-center">
//                  <span class="font-bold mr-3">$${itemTotal.toFixed(2)}</span>
//                  <button class="remove-item text-red-500 hover:text-red-700" data-name="${item.name}">
//                      <i class="fa-solid fa-trash"></i>
//                  </button>
//              </div>
//          `;
         
//          cartItems.appendChild(cartItem);
//      });
     
//      cartTotal.textContent = `$${total.toFixed(2)}`;
     
//      // Add event listeners to remove buttons
//      document.querySelectorAll('.remove-item').forEach(button => {
//          button.addEventListener('click', function() {
//              const itemName = this.getAttribute('data-name');
//              removeFromCart(itemName);
//          });
//      });
//  }
 
//  // Remove item from cart
//  function removeFromCart(name) {
//      cart = cart.filter(item => item.name !== name);
//      saveCart();
//      updateCartCount();
//      renderCartItems();
//  }
 
//  // Initialize cart on page load
//  document.addEventListener('DOMContentLoaded', function() {
//      initCart();
     
//      // Add event listeners to order buttons
//      orderButtons.forEach(button => {
//          button.addEventListener('click', function() {
//              const productCard = this.closest('.product-card');
//              const name = productCard.dataset.name;
//              const price = parseFloat(productCard.dataset.price);
//              const image = productCard.dataset.image;
             
//              addToCart({name, price, image});
//          });
//      });
     
//      // Cart icon click event
//      cartIcon.addEventListener('click', toggleCart);
     
//      // Close cart events
//      closeCart.addEventListener('click', toggleCart);
//      cartOverlay.addEventListener('click', toggleCart);
//  });




// // javascript.js

// // Cart functionality
// let cart = [];
// let currentCategory = 'all';

// // DOM Elements
// const cartIcon = document.getElementById('cart-icon');
// const cartCount = document.getElementById('cart-count');
// const cartSidebar = document.querySelector('.cart-sidebar');
// const closeCart = document.getElementById('close-cart');
// const cartOverlay = document.getElementById('cart-overlay');
// const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const cartNotification = document.getElementById('cart-notification');
// const productsContainer = document.getElementById('products-container');
// const loadingIndicator = document.getElementById('loading');
// const categoryButtons = document.querySelectorAll('.category-btn');

// // Initialize cart from localStorage
// function initCart() {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//         cart = JSON.parse(savedCart);
//         updateCartCount();
//     }
// }

// // Save cart to localStorage
// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Update cart count display
// function updateCartCount() {
//     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//     cartCount.textContent = totalItems;
// }

// // Add to cart function
// function addToCart(product) {
//     // Check if product already in cart
//     const existingItem = cart.find(item => item.id === product.id);
    
//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({...product, quantity: 1});
//     }
    
//     // Update UI
//     updateCartCount();
//     saveCart();
    
//     // Show notification
//     showNotification();
// }

// // Show cart notification
// function showNotification() {
//     cartNotification.classList.add('show');
//     setTimeout(() => {
//         cartNotification.classList.remove('show');
//     }, 2000);
// }

// // Toggle cart sidebar
// function toggleCart() {
//     cartSidebar.classList.toggle('open');
//     cartOverlay.classList.toggle('show');
    
//     if (cartSidebar.classList.contains('open')) {
//         renderCartItems();
//     }
// }

// // Render cart items
// function renderCartItems() {
//     cartItems.innerHTML = '';
    
//     if (cart.length === 0) {
//         cartItems.innerHTML = '<p class="text-gray-500 text-center py-10">Your cart is empty</p>';
//         cartTotal.textContent = '$0.00';
//         return;
//     }
    
//     let total = 0;
    
//     cart.forEach(item => {
//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;
        
//         const cartItem = document.createElement('div');
//         cartItem.className = 'flex items-center justify-between py-3 border-b border-gray-200';
//         cartItem.innerHTML = `
//             <div class="flex items-center">
//                 <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
//                 <div class="ml-3">
//                     <h4 class="font-semibold">${item.name}</h4>
//                     <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
//                 </div>
//             </div>
//             <div class="flex items-center">
//                 <span class="font-bold mr-3">$${itemTotal.toFixed(2)}</span>
//                 <div class="flex items-center">
//                     <button class="decrease-item text-gray-500 hover:text-gray-700" data-id="${item.id}">
//                         <i class="fa-solid fa-minus"></i>
//                     </button>
//                     <span class="mx-2">${item.quantity}</span>
//                     <button class="increase-item text-gray-500 hover:text-gray-700" data-id="${item.id}">
//                         <i class="fa-solid fa-plus"></i>
//                     </button>
//                     <button class="remove-item text-red-500 hover:text-red-700 ml-3" data-id="${item.id}">
//                         <i class="fa-solid fa-trash"></i>
//                     </button>
//                 </div>
//             </div>
//         `;
        
//         cartItems.appendChild(cartItem);
//     });
    
//     cartTotal.textContent = `$${total.toFixed(2)}`;
    
//     // Add event listeners to buttons
//     document.querySelectorAll('.remove-item').forEach(button => {
//         button.addEventListener('click', function() {
//             const itemId = parseInt(this.getAttribute('data-id'));
//             removeFromCart(itemId);
//         });
//     });
    
//     document.querySelectorAll('.increase-item').forEach(button => {
//         button.addEventListener('click', function() {
//             const itemId = parseInt(this.getAttribute('data-id'));
//             updateItemQuantity(itemId, 1);
//         });
//     });
    
//     document.querySelectorAll('.decrease-item').forEach(button => {
//         button.addEventListener('click', function() {
//             const itemId = parseInt(this.getAttribute('data-id'));
//             updateItemQuantity(itemId, -1);
//         });
//     });
// }

// // Update item quantity
// function updateItemQuantity(id, change) {
//     const item = cart.find(item => item.id === id);
//     if (item) {
//         item.quantity += change;
        
//         if (item.quantity <= 0) {
//             cart = cart.filter(item => item.id !== id);
//         }
        
//         saveCart();
//         updateCartCount();
//         renderCartItems();
//     }
// }

// // Remove item from cart
// function removeFromCart(id) {
//     cart = cart.filter(item => item.id !== id);
//     saveCart();
//     updateCartCount();
//     renderCartItems();
// }

// // Render products from data.js
// function renderProducts() {
//     // Hide loading indicator
//     loadingIndicator.style.display = 'none';
    
//     // Clear container
//     productsContainer.innerHTML = '';
    
//     // Filter products by category
//     const filteredProducts = currentCategory === 'all' 
//         ? products 
//         : products.filter(p => p.category === currentCategory);
    
//     if (filteredProducts.length === 0) {
//         productsContainer.innerHTML = '<p class="text-center text-gray-500 py-10 text-xl">No products found in this category</p>';
//         return;
//     }
    
//     // Create product cards
//     filteredProducts.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.className = 'bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition product-card';
//         productCard.dataset.id = product.id;
        
//         productCard.innerHTML = `
//             <img class="w-full h-48 object-cover rounded-t-md" src="${product.image}" alt="${product.name}">
//             <div class="p-4">
//                 <div class="flex justify-between items-start">
//                     <div>
//                         <h3 class="font-bold text-lg">${product.name}</h3>
//                         <p class="text-gray-600 text-sm mt-1">${product.description}</p>
//                     </div>
//                     <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                         $${product.price.toFixed(2)}
//                     </span>
//                 </div>
//                 <div class="mt-4">
//                     <button class="w-full order-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 text-sm transition">
//                         Order Now
//                     </button>
//                 </div>
//             </div>
//         `;
        
//         productsContainer.appendChild(productCard);
        
//         // Add event listener to the button
//         const orderBtn = productCard.querySelector('.order-btn');
//         orderBtn.addEventListener('click', () => {
//             addToCart(product);
//         });
//     });
// }

// // Set active category
// function setActiveCategory(category) {
//     currentCategory = category;
    
//     // Update UI
//     categoryButtons.forEach(btn => {
//         if (btn.dataset.category === category) {
//             btn.classList.add('active');
//         } else {
//             btn.classList.remove('active');
//         }
//     });
    
//     // Show loading indicator
//     loadingIndicator.style.display = 'block';
//     productsContainer.innerHTML = '';
    
//     // Simulate loading delay
//     setTimeout(() => {
//         renderProducts();
//     }, 500);
// }

// // Initialize app
// document.addEventListener('DOMContentLoaded', function() {
//     initCart();
    
//     // Cart icon click event
//     cartIcon.addEventListener('click', toggleCart);
    
//     // Close cart events
//     closeCart.addEventListener('click', toggleCart);
//     cartOverlay.addEventListener('click', toggleCart);
    
//     // Category buttons
//     categoryButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const category = this.dataset.category;
//             setActiveCategory(category);
//         });
//     });
    
//     // Load products
//     loadingIndicator.style.display = 'block';
//     setTimeout(() => {
//         renderProducts();
//     }, 1000); // Simulate network delay
// });

// --------////

// script.js
// Cart functionality
let cart = [];
let currentCategory = 'all';

// DOM Elements
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartNotification = document.getElementById('cart-notification');
const productsContainer = document.getElementById('products-container');
const loadingIndicator = document.getElementById('loading');
const categoryButtons = document.querySelectorAll('.category-btn');

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Add to cart function
function addToCart(product) {
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    // Update UI
    updateCartCount();
    saveCart();
    
    // Show notification
    showNotification();
}

// Show cart notification
function showNotification() {
    cartNotification.classList.add('show');
    setTimeout(() => {
        cartNotification.classList.remove('show');
    }, 2000);
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
    
    if (cartSidebar.classList.contains('open')) {
        renderCartItems();
    }
}

// Render cart items
function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-10">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between py-3 border-b border-gray-200';
        cartItem.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="ml-3">
                    <h4 class="font-semibold">${item.name}</h4>
                    <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                </div>
            </div>
            <div class="flex items-center">
                <span class="font-bold mr-3">$${itemTotal.toFixed(2)}</span>
                <div class="flex items-center">
                    <button class="decrease-item text-gray-500 hover:text-gray-700" data-id="${item.id}">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="increase-item text-gray-500 hover:text-gray-700" data-id="${item.id}">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <button class="remove-item text-red-500 hover:text-red-700 ml-3" data-id="${item.id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners to buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
    
    document.querySelectorAll('.increase-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            updateItemQuantity(itemId, 1);
        });
    });
    
    document.querySelectorAll('.decrease-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            updateItemQuantity(itemId, -1);
        });
    });
}

// Update item quantity
function updateItemQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
        
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Render products from data.js
function renderProducts() {
    // Hide loading indicator
    loadingIndicator.style.display = 'none';
    
    // Clear container
    productsContainer.innerHTML = '';
    
    // Filter products by category
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p class="text-center text-gray-500 py-10 text-xl">No products found in this category</p>';
        return;
    }
    
    // Create product cards
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition product-card';
        productCard.dataset.id = product.id;
        
        productCard.innerHTML = `
            <img class="w-full h-48 object-cover rounded-t-md" src="${product.image}" alt="${product.name}">
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-lg">${product.name}</h3>
                        <p class="text-gray-600 text-sm mt-1">${product.description}</p>
                    </div>
                    <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        $${product.price.toFixed(2)}
                    </span>
                </div>
                <div class="mt-4">
                    <button class="w-full order-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 text-sm transition">
                        Order Now
                    </button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
        
        // Add event listener to the button
        const orderBtn = productCard.querySelector('.order-btn');
        orderBtn.addEventListener('click', () => {
            addToCart(product);
        });
    });
}

// Set active category
function setActiveCategory(category) {
    currentCategory = category;
    
    // Update UI
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show loading indicator
    loadingIndicator.style.display = 'block';
    productsContainer.innerHTML = '';
    
    // Simulate loading delay
    setTimeout(() => {
        renderProducts();
    }, 500);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    // Cart icon click event
    cartIcon.addEventListener('click', toggleCart);
    
    // Close cart events
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveCategory(category);
        });
    });
    
    // Load products
    loadingIndicator.style.display = 'block';
    setTimeout(() => {
        renderProducts();
    }, 1000); // Simulate network delay
});











