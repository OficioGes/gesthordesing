
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
const bottonsServices = document.querySelectorAll(".bottonsServices");
const pServices = document.querySelectorAll(".pServices");


for (let i = 0; i < bottonsServices.length; i++) {
    bottonsServices[i].addEventListener("click",function(){

        bottonsServices[i].classList.toggle("girar");
        pServices[i].classList.toggle("noVisible");
        cardContenedor[i].classList.toggle("cardActive");
    })
    
}


                            /*EFECTO SCROLL**/

(function(){
    const aparecer = document.getElementById("aparecer");
    const aparecer2 = document.getElementById("imgJoven");
    const cards = document.querySelectorAll(".container__div1__ul--li")
    
    aparecer2.classList.add("desaparecerAbajo")
    aparecer.classList.add("desaparecerArriba")
    
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecerXoY");
                observador.unobserve(entrada.target);
          }
        });
      }, {  root:null,
            threshold: 0.3,
            rootMargin: "0px 0px" });
    
    
    observador.observe(aparecer) //Este método es el que ejecuta el observador
    observador.observe(aparecer2)
    cards.forEach((card)=>{
        card.classList.add("desaparecerArriba")
        observador.observe(card,{threshold: 1, rootMargin: "-50px 0px"})
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
})();

