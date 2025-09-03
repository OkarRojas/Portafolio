window.addEventListener("scroll", () => {
    const navbar = document.getElementById("main-navbar");
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    const navbarr = document.getElementById("nav-menu-a");
    if (window.scrollY > 30) {
        navbarr.classList.add("scrolled");
    } else {
        navbarr.classList.remove("scrolled");
    }
});

let subMenu = document.querySelector(".sub-menu");

window.addEventListener("click", (e) => {
    if (e.target.closest(".toggle")) {
        subMenu.style.position = "fixed";
        subMenu.style.display = "flex";
    } else {
        subMenu.style.position = "absolute";
        subMenu.style.display = "none";
    }
});

const caja = document.getElementById('texto-scroll');
const imagen = document.getElementById('img2');

caja.addEventListener("scroll", () => {
  console.log("caja.scrollTop:", caja.scrollTop); // Depura el scroll
  if (caja.scrollTop > 50 && caja.scrollTop <= 200) {
    imagen.src = 'src/perfil.jpg'; // Imagen de prueba
  } else if (caja.scrollTop > 200) {
    imagen.src = 'src/img3.jpeg';
  } else {
    imagen.src = 'src/img2.jpeg';
  }
});


