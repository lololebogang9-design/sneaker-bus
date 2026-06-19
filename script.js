console.log("Script loaded ");
const form = document.getElementById("enquiryForm");
console.log(form);
const messageBox = document.getElementById("message-box");

// define the code that will run as soon as user clicks submit button
// click submit button
 if (form) {
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the page from refreshing

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name== "") {
        messageBox.textContent = "Please enter your name.";
        return;
    }
    if (email == "") {
        messageBox.textContent = "Please enter your email.";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        messageBox.textContent = "Please enter a valid email address.";
        return;
    }
    if (message == "") {
        messageBox.textContent = "Please state your enquiry ";
        return;
    }
    const myEmail = "lololeleb@gmail.com";
    const subject = "New Enquiry from " + name;
    const body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    window.location.href = 
        "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    //if all is well 
    messageBox.textContent = "Your enquiry has been sent successfully!"; 
       })
}
const contactForm = document.getElementById("contactForm");
const contactMessageBox = document.getElementById("contact-message-box");

if (contactForm) {
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
    const body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;

     window.location.href = 
        "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    contactMessageBox.textContent = "Your message has been sent successfully!";
});
}
const likeCount = document.getElementById("likeCount");
const cartCount = document.getElementById("cartCount");
const productMessage = document.getElementById("productMessage");

console.log("Product section running");
console.log(likeCount);
console.log(cartCount);
console.log(productMessage);
document.addEventListener("click", function(event) {
    console.log("Clicked:", event.target);

    if (event.target.classList.contains("like-btn")) {
        console.log("LIKE CLICKED");
    }

    if (event.target.classList.contains("cart-btn")) {
        console.log("CART CLICKED");
    }
});

const likeCount = document.getElementById("likeCount");
const cartCount = document.getElementById("cartCount");
const productMessage = document.getElementById("productMessage");

if (likeCount && cartCount && productMessage) {
    let likes = 0;
    let cart = 0;

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

function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}