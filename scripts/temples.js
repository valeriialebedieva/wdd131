const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();


const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
