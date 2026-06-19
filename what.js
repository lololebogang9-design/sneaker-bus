// =====================
// ENQUIRY FORM
// =====================
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    const messageBox = document.getElementById("message-box");

    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

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
        const body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        messageBox.textContent = "Your enquiry has been sent successfully!";
    });
}

// =====================
// CONTACT FORM
// =====================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    const contactMessageBox = document.getElementById("contact-message-box");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

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
            contactMessageBox.textContent = "Please enter a valid 10-digit phone number.";
            return;
        }
        if (message === "") {
            contactMessageBox.textContent = "Please enter your message.";
            return;
        }

        const myEmail = "sneakerbussa@gmail.com";
        const subject = "New Contact Message from " + name;
        const body = "Name: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nMessage: " + message;

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        contactMessageBox.textContent = "Your message has been sent successfully!";
    });
}

// =====================
// PRODUCTS PAGE - LIKES & CART
// =====================
const likeCount = document.getElementById("likeCount");
const cartCount = document.getElementById("cartCount");
const productMessage = document.getElementById("productMessage");

if (likeCount && cartCount && productMessage) {
    let likes = 0;
    let cart = 0;

    // Use event delegation on the whole document
    // This works even if buttons are inside broken/nested containers
    document.addEventListener("click", function(event) {

        if (event.target.classList.contains("like-btn")) {
            likes++;
            likeCount.textContent = likes;
            productMessage.textContent = "❤️ Thank you for liking our products!";
        }

        if (event.target.classList.contains("cart-btn")) {
            cart++;
            cartCount.textContent = cart;
            productMessage.textContent = "🛒 Item added to cart. Thank you for shopping with Sneaker Bus SA!";
        }

    });
}

// =====================
// SEARCH (Products Page)
// =====================
function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}