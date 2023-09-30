let mobileMenu = document.querySelector(".mobile-menu");
let navList = document.querySelector(".menu-navegacao-lista");
let minhaFoto = document.querySelector(".minha-foto");
let linkRedeSocial = document.querySelectorAll(".link-rede-social");

mobileMenu.addEventListener("click", () => navList.classList.toggle("active"));

mobileMenu.addEventListener("click", () => mobileMenu.classList.toggle("active"));