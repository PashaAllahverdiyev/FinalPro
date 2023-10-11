// Örnek sepet verisi
const cartItems = [
    { name: "Deluxe Oda", price: 200 },
    { name: "Lüks Süit", price: 350 },
    { name: "Standart Oda", price: 150 },
];

// Sepet içeriğini listeleme
const cart = document.getElementById("cart");
const totalPriceElement = document.getElementById("total-price");

function displayCartItems() {
    cart.innerHTML = ""; // Önceki içeriği temizle

    let totalPrice = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
        `;

        cart.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}

displayCartItems();

// Ödeme yapma işlevi
const checkoutButton = document.getElementById("checkout");

checkoutButton.addEventListener("click", () => {
    if (cartItems.length === 0) {
        alert("Sepetiniz boş. Ödeme yapabilmek için ürün ekleyin.");
    } else {
        alert("Ödeme işlemi tamamlandı. Teşekkür ederiz!");
        cartItems.length = 0; // Sepeti sıfırla
        displayCartItems();
    }
});
