const menuIcon = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const navbar = document.getElementById("tag");

menuIcon.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    navbar.style.display = navbar.style.display === "none" ? "flex" : "none";
});

const close = document.getElementsByClassName("close")[0];
const aboutBox = document.getElementsByClassName("about-box")[0];
const aboutBtn = document.getElementsByClassName("my-self-btn")[0];

aboutBtn.onclick = function () {
    aboutBox.style.display = "block";
};

close.onclick = function () {
    aboutBox.style.display = "none";
};