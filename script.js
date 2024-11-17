const cartBtn = document.getElementById("cart-btn");
let cartCount = 0;

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartBtn.textContent = `Cart (${cartCount})`;
    alert("Product added to cart!");
  });
});
