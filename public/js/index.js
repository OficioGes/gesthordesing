// Con esta funcion al hacer click se llama al menú oculto de css y html
const navToggle=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav_div1_div_ul")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")

// con el siguiente if hacemos que la página se pueda usar con el tabulador
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
    } else{
        navToggle.setAttribute("aria-label","Abrir Menú");
    }

})



const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
