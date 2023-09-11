let mobileMenu = document.querySelector(".mobile-menu");
let navList = document.querySelector(".menu-navegacao-lista");

mobileMenu.addEventListener("click", () => navList.classList.toggle("active"));

mobileMenu.addEventListener("click", () => mobileMenu.classList.toggle("active"));