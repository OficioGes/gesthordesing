function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

/****************************Validador de sesión iniciada*****************************/

let url = `https://apispruebas.pythonanywhere.com/`;
let userStatusElement = document.getElementById("user-status")
let sesionOn = document.querySelector(".sesionOn")
let sesionOff = document.querySelector(".sesionOff")
let form = document.getElementById('formLogin');


(function() {
    fetch(`${url}usuarios/`, {
        method: 'get',
        mode: 'cors',
        credentials: 'include', // incluir cookies
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
            "X-Requested-With": "XMLHttpRequest"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let formularioIng = document.querySelector(".formLogin") 
        userStatusElement.innerText = data.is_logged_in ? data.username : 'Iniciar';
        !data.is_logged_in ?  sesionOn.style.display = "none" : sesionOn.style.display = "flex";
        data.is_logged_in ?  sesionOff.style.display = "none": sesionOff.style.display = "flex";
        if  (formularioIng){
            data.is_logged_in ? formularioIng.classList.add("noVisible") : "";
        }
    })
    .catch(error => {
        console.error('Error al obtener el estado del usuario:', error);
    });
})();
  



/****************************************Iniciar sesión*****************************/

form.addEventListener('submit', function(e,callback){
    e.preventDefault();
    let usuario = document.getElementById("username").value;
    let contraseña =  document.getElementById("password").value;
    form = {
        "usuario":usuario,
        "contraseña":contraseña
    }

    fetch((`${url}usuarios/`), {
                method: 'post',
                body: JSON.stringify(form),
                mode: 'cors',
                headers: {
                    "X-CSRFToken": getCookie('csrftoken'),
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
    .then((resp) => resp.json())
    .then(function(data){
        contenido = JSON.stringify(data);
        console.log(contenido)
        document.cookie = `session_id=${data.session_id}; path=/`;
        data.is_logged_in ? userStatusElement.innerText = data.username : "Iniciar";
        let formularioIng = document.querySelector(".formLogin")
        Swal.fire({
            title: "Bienvenido",
            text: `Te haz logueado como ${data.username}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        if  (formularioIng){
            data.is_logged_in ? formularioIng.classList.add("noVisible") : "";
        }
        window.location.href = "index.html"
        


    })
    .catch(error => {
        console.error('Error al obtener el estado del usuario:', error);
    });
});



/***************************************Desloguear*****************************/

function desloguear(){
    fetch(`${url}usuarios/`,{
        method: 'delete',
        mode: 'cors',
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
            "X-Requested-With": "XMLHttpRequest"
        }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        userStatusElement.innerText = data.username;
        let formularioIng = document.querySelector(".formLogin")
        userStatusElement.innerText = "Iniciar";
        if  (formularioIng){
            !data.is_logged_in ? formularioIng.classList.remove("noVisible") : "";
            }
        Swal.fire({
            title: "Haz finalizado la sesión",
            text: `Vuelve pronto`,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        })
        !data.is_logged_in ?  sesionOn.style.display = "none" : sesionOn.style.display = "flex";
        data.is_logged_in ?  sesionOff.style.display = "none": sesionOff.style.display = "flex";
      })
      .catch(error => {
        console.error('Error al desloguear:', error);
      });
}
