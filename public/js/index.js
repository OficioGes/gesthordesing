
const navToggle=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav_div1_div_ul")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")

})


const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
