const navToggle=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav_div1_div_ul")
const botonMenu = document.querySelectorAll(".nav_div1_div_ul--li")
const botonMenuContacto = document.querySelector(".nav_div1_div_ul--buttom")
const icono = document.querySelector(".icon")

function cerrarMenu(){
    navMenu.classList.toggle("nav-menu_visible")
    icono.classList.toggle("open")
    
}

navToggle.addEventListener("click",cerrarMenu)
botonMenuContacto.addEventListener("click",cerrarMenu)
botonMenu.forEach(boton =>{
    boton.addEventListener("click",cerrarMenu);
})



