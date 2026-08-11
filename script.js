/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";
    }

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const words = [
    "CREATIVE DEVELOPER",
    "AI / ML DEVELOPER",
    "WEB DEVELOPER",
    "UI DESIGNER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


if (typingElement) {
    typeEffect();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const hiddenElements =
    document.querySelectorAll(".hidden");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


hiddenElements.forEach((element) => {
    observer.observe(element);
});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


/* =========================================================
   CONTACT FORM → EMAIL
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const subject =
            `Portfolio Contact - ${name}`;


        const body =
`Hello Sparsh,

You have received a new message from your portfolio website.

Name: ${name}

Email: ${email}

Message:
${message}

-------------------------
Sent from Sparsh Portfolio`;


        const mailtoURL =
            `mailto:sparshshri5182@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        window.location.href = mailtoURL;

    });

}