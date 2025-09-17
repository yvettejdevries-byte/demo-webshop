const PRODUCTS = {
  apple: { name: "Apple", emoji: "🍏" },
  banana: { name: "Banana", emoji: "🍌" },
  lemon: { name: "Lemon", emoji: "🍋" },
};

function getBasket() {
  const basket = localStorage.getItem("basket");
<<<<<<< HEAD
  if (!basket) return [];

  const parsedBasket = JSON.parse(basket);

  // Check if this is the old format (array of strings) and migrate it
  if (parsedBasket.length > 0 && typeof parsedBasket[0] === "string") {
    // Migrate old format to new format
    const newBasket = [];
    const productCounts = {};

    parsedBasket.forEach((product) => {
      productCounts[product] = (productCounts[product] || 0) + 1;
    });

    Object.keys(productCounts).forEach((product) => {
      newBasket.push({ product: product, quantity: productCounts[product] });
    });

    // Save the migrated basket
    localStorage.setItem("basket", JSON.stringify(newBasket));
    return newBasket;
  }

  return parsedBasket;
=======
  return basket ? JSON.parse(basket) : {};
>>>>>>> a128cb716d78558406ce320a5c491f46a413151c
}

function addToBasket(product) {
  const basket = getBasket();
<<<<<<< HEAD
  const existingItem = basket.find((item) => item.product === product);

  if (existingItem) {
    // Increment quantity if product already exists
    existingItem.quantity += 1;
  } else {
    // Add new item with quantity 1
    basket.push({ product: product, quantity: 1 });
  }

=======
  if (basket[product]) {
    basket[product] += 1;
  } else {
    basket[product] = 1;
  }
>>>>>>> a128cb716d78558406ce320a5c491f46a413151c
  localStorage.setItem("basket", JSON.stringify(basket));
}

function clearBasket() {
  localStorage.removeItem("basket");
}

function renderBasket() {
  const basket = getBasket();
  const basketList = document.getElementById("basketList");
  const cartButtonsRow = document.querySelector(".cart-buttons-row");
  if (!basketList) return;
  basketList.innerHTML = "";

  const basketKeys = Object.keys(basket);
  if (basketKeys.length === 0) {
    basketList.innerHTML = "<li>No products in basket.</li>";
    if (cartButtonsRow) cartButtonsRow.style.display = "none";
    return;
  }
<<<<<<< HEAD
  basket.forEach((basketItem) => {
    const item = PRODUCTS[basketItem.product];
    if (item) {
      const li = document.createElement("li");
      li.innerHTML = `<span class='basket-emoji'>${item.emoji}</span> <span>${basketItem.quantity}x ${item.name}</span>`;
=======

  basketKeys.forEach((productKey) => {
    const quantity = basket[productKey];
    const item = PRODUCTS[productKey];
    if (item) {
      const li = document.createElement("li");
      li.innerHTML = `<span class='basket-emoji'>${item.emoji}</span> <span>${quantity}x ${item.name}</span>`;
>>>>>>> a128cb716d78558406ce320a5c491f46a413151c
      basketList.appendChild(li);
    }
  });
  if (cartButtonsRow) cartButtonsRow.style.display = "flex";
}

function renderBasketIndicator() {
  const basket = getBasket();
  let indicator = document.querySelector(".basket-indicator");
  if (!indicator) {
    const basketLink = document.querySelector(".basket-link");
    if (!basketLink) return;
    indicator = document.createElement("span");
    indicator.className = "basket-indicator";
    basketLink.appendChild(indicator);
  }
<<<<<<< HEAD

  // Calculate total quantity across all items
  let totalQuantity = 0;
  if (Array.isArray(basket)) {
    totalQuantity = basket.reduce((sum, item) => {
      return sum + (item.quantity || 0);
    }, 0);
  }

  if (totalQuantity > 0) {
=======
  const basketKeys = Object.keys(basket);
  if (basketKeys.length > 0) {
    const totalQuantity = basketKeys.reduce((sum, key) => sum + basket[key], 0);
>>>>>>> a128cb716d78558406ce320a5c491f46a413151c
    indicator.textContent = totalQuantity;
    indicator.style.display = "flex";
  } else {
    indicator.style.display = "none";
  }
}

// Call this on page load and after basket changes
if (document.readyState !== "loading") {
  renderBasketIndicator();
} else {
  document.addEventListener("DOMContentLoaded", renderBasketIndicator);
}

// Patch basket functions to update indicator
const origAddToBasket = window.addToBasket;
window.addToBasket = function (product) {
  origAddToBasket(product);
  renderBasketIndicator();
};
const origClearBasket = window.clearBasket;
window.clearBasket = function () {
  origClearBasket();
  renderBasketIndicator();
};