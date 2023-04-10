
                            /*GESTIÓN NAV BAR**/
/*Botones Nav*/
const navToggle=document.querySelector(".nav_toggle") //botón nav
const navMenu=document.querySelector(".nav_div1_div_ul") //contenedor links nav
const botonMenu = document.querySelectorAll(".nav_div1_div_ul--li") // links nav
const botonMenuContacto = document.querySelector(".nav_div1_div_ul--buttom") //link contacto nav
const icono = document.querySelector(".icon") //icono nav

/*Función abrir y cerrar el menú móvil**/
function cerrarMenu(){
    navMenu.classList.toggle("nav-menu_visible")
    icono.classList.toggle("open")    
}
/*Eventos abrir y cerrar menú móvil*/
navToggle.addEventListener("click",cerrarMenu);
botonMenuContacto.addEventListener("click",cerrarMenu);
botonMenu.forEach(boton =>{
    boton.addEventListener("click",cerrarMenu);
})



                            /*GESTIÓN SECCIÓN SERVICIOS**/
/******botones sección servicios*******/
const cardContenedor = document.querySelectorAll(".container__div1__ul--li");
const cabeceraCard = document.querySelectorAll(".container__div1__ul__li--imgAndTitle")
const bottonsServices = document.querySelectorAll(".bottonsServices");
const pServices = document.querySelectorAll(".pServices");


for (let i = 0; i < cabeceraCard.length; i++) {
    cabeceraCard[i].addEventListener("click",function(){

        bottonsServices[i].classList.toggle("girar");
        pServices[i].classList.toggle("noVisible");
        cardContenedor[i].classList.toggle("cardActive");
    })
    
}


                            /*EFECTO SCROLL**/


const aparecer = document.getElementById("aparecer");
const aparecer2 = document.getElementById("imgJoven");
const cards = document.querySelectorAll(".container__div1__ul--li")

const cardDerecha = document.querySelector(".cardsc4-1")
const cardDerecha2 = document.querySelector(".cardsc4-2")
const cardIzquierd = document.querySelector(".cardsc4-3")
const cardIzquierd2 = document.querySelector(".cardsc4-4")

window.addEventListener('load', function() {
    if (!window.matchMedia("(min-width: 788px)").matches) {
        cardDerecha.classList.add("desaparecerDerecha")
        cardDerecha2.classList.add("desaparecerDerecha")
        cardIzquierd.classList.add("desaparecerDerecha")
        cardIzquierd2.classList.add("desaparecerDerecha")
    }
  });




aparecer.classList.add("desaparecerAbajo")
aparecer2.classList.add("desaparecerArriba")

const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecerXoY");
            observador.unobserve(entrada.target);
        }
    });
    }, {  root:null,
        threshold: 0.5,
        rootMargin: "0px 0px" });

        
        
        
        
observador.observe(cardDerecha)
observador.observe(cardDerecha2)
observador.observe(cardIzquierd)
observador.observe(cardIzquierd2)
observador.observe(aparecer) //Este método es el que ejecuta el observador
observador.observe(aparecer2,{threshold: 0.9})
cards.forEach((card)=>{
    card.classList.add("desaparecerArriba")
    observador.observe(card,{threshold: 1, rootMargin: "0px 0px"})
});





    // const cargarElemento =(entradas,observador)=>{ //Esta función recibe dos parámetros, entradas y observador, siempre
    //     //El parámetro entradas es un arreglo, por lo que se debe iterar en el para usarlo
    //     entradas.forEach((entrada)=>{
    //         if (entrada.isIntersecting) { //Este if confirma si el elemento entro en pantalla
    //             entrada.target.classList.add("aparecerXoY");
    //             observador.unobserve(entrada.target);
    //         }
    //         // else{//Recordar que isIntersecting es un boleano, si está en pantalla haz algo, sino haz lo otro, esto por si queremos que el efecto se vea de abajo para arriba
    //         //     entrada.target.classList.remove("aparecerXoY")
    //         // }
    //     })

    // }

    // const observador = new IntersectionObserver(cargarElemento,{ //Este es quien ve el objeto que entra en la pantalla
    //     root: null, //Este siempre debe quedar en null
    //     rootMargin: "0px 0px -50px 0px", //Este crea un margen, y cuando el elemento entre en ese margen, se ejecuta el código, por defecto si no se le pone nada queda en 0, pero si le queremos pasar un dato entonces rootMargin: "100px 0px 0px 0px", como en css
    //     threshold:0.5 // Cuando el objeto ya esté entrando al margen, este indica cuanto debe tardar para que inicie, los valores son números como 1.0 ó 0.5
    // }); 


    // observador.observe(aparecer) //Este método es el que ejecuta el observador
    // observador.observe(aparecer2)
    // cards.forEach((card)=>{
    //     card.classList.add("desaparecerArriba")
    //     observador.observe(card)
    // });




                            /*VIRTUAL SCROLL**/
const cardBanner1 = document.getElementById("cardMain1")
const cardBanner2 = document.getElementById("cardMain2")
const nosotrosItems = document.querySelector(".button2")
const circleLogo = document.querySelector(".circle")
const title = document.getElementById("main_div1--h2")




window.addEventListener("scroll",function(){
    if (window.matchMedia("(min-width: 850px)").matches) {
      // Ejecutar la animación solo si la pantalla es lo suficientemente grande (mayor o igual a 768px)
      let value = window.scrollY;
      cardBanner1.style.top = value * 0.1 + 'px';
      cardBanner2.style.bottom = value * 0.3 + 'px';
      circleLogo.style.transform = `rotate(${value * 0.5}deg)`;
      title.style.top = value * 0.5 + 'px';
      ;
      
    }
  });


window.addEventListener("scroll",function(){
    let value = Math.max(0, window.scrollY - 500) * 0.050;
    nosotrosItems.style.right = value * 1+ 'px';
    cardDerecha.style.right = value * -0.3 + 'px';
    
    
    

});

window.addEventListener("scroll",function(){
    if (window.matchMedia("(min-width: 788px)").matches) {
        let value = Math.max(0, window.scrollY - 100) * 0.050;
        cardDerecha.style.left = value * 0.4 + 'px'
        cardDerecha2.style.left = value * 0.7 + 'px'
        cardIzquierd.style.right = value * 0.4 + 'px'
        cardIzquierd2.style.right = value * 0.7 + 'px'

              
      }

    

});



let lastScrollPosition = 0;

window.addEventListener("scroll", function() {
  let currentScrollPosition = window.scrollX || window.pageXOffset;
  if (currentScrollPosition != lastScrollPosition) {
    window.scrollTo(lastScrollPosition, 0);
  }
  lastScrollPosition = currentScrollPosition;
});




