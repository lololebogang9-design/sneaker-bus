
// ENQUIRY FORM
const enquiryForm = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            messageBox.textContent = "Please enter your name.";
            return;
        }

        if (email === "") {
            messageBox.textContent = "Please enter your email.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            messageBox.textContent = "Please enter a valid email address.";
            return;
        }

        if (message === "") {
            messageBox.textContent = "Please state your enquiry.";
            return;
        }

        const myEmail = "lololeleb@gmail.com";
        const subject = "New Enquiry from " + name;
        const body =
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message;

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const contactMessageBox = document.getElementById("contact-message-box");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            contactMessageBox.textContent = "Please enter your name.";
            return;
        }

        if (email === "") {
            contactMessageBox.textContent = "Please enter your email.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            contactMessageBox.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            contactMessageBox.textContent =
                "Please enter a valid 10-digit phone number.";
            return;
        }

        if (message === "") {
            contactMessageBox.textContent = "Please enter your message.";
            return;
        }

        const myEmail = "sneakerbussa@gmail.com";
        const subject = "New Contact Message from " + name;
        const body =
            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nMessage: " + message;

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}

// PRODUCTS PAGE

const likeCount = document.getElementById("likeCount");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const productMessage = document.getElementById("productMessage");
const cartList = document.getElementById("cartList");

if (likeCount && cartCount && cartTotal && productMessage) {

    let likes = 0;
    let cart = 0;
    let total = 0;

    document.addEventListener("click", function(event) {

        if (event.target.classList.contains("like-btn")) {
            likes++;
            likeCount.textContent = likes;

            productMessage.textContent =
                "❤️ Thank you for liking our products!";
        }

       if (event.target.classList.contains("cart-btn")) {

    const productCard =
        event.target.closest(".product-card");

    const priceText =
        productCard.querySelector(".price").textContent;

    const price =
        parseInt(priceText.replace("R", ""));

    const productName =
        productCard.querySelector("h3").textContent;

    cart++;
    total += price;

    cartCount.textContent = cart;
    cartTotal.textContent = total;

    const listItem =
        document.createElement("li");

    listItem.textContent =
        productName + " - R" + price;

    cartList.appendChild(listItem);

    productMessage.textContent =
        "🛒 " + productName + " added to cart!";
}
        }
    ) 

    
// SEARCH PRODUCTS


function searchProducts() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const input = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const productName =
            card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    
    });
} } 