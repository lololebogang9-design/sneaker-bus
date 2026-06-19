const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");

// define the code that will run as soon as user clicks submit button
// click submit button
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
const contactForm = document.getElementById("contactForm");
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
     window.location.href = 
        "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    contactMessageBox.textContent = "Your message has been sent successfully!";
});