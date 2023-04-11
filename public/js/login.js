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
//let url = `http://127.0.0.1:8000/`;
let userStatusElement = document.getElementById("user-status")
let sesionOn = document.querySelector(".sesionOn")
let sesionOff = document.querySelector(".sesionOff")
let form = document.getElementById('formLogin');


(function() {
    fetch(`${url}usuarios/?sessionid=${getCookie('session_id')}`, {
        method: 'get',
        mode: 'cors',
        credentials: 'include', // incluir cookies
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
    .then(response => response.json())
    .then(data => {
        if(userStatusElement){
            userStatusElement.innerText = data.is_logged_in ? data.username : 'login';
            !data.is_logged_in ?  sesionOn.style.display = "none" : sesionOn.style.display = "flex";
            data.is_logged_in ?  sesionOff.style.display = "none": sesionOff.style.display = "flex";
        }
        

    })
    .catch(error => {
        console.error('Error al obtener el estado del usuario:', error);
    });
})();




/****************************************Iniciar sesión*****************************/
if(form){
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
            document.cookie = `session_id=${data.session_id}; path=/`;
            Swal.fire({
                title: "Bienvenido",
                text: `Te haz logueado como ${data.username}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            function redireccionar(){
                window.location.href = "index.html"
            }
            setTimeout(redireccionar, 2000)
        })
        .catch(error => {
            console.error('Error al obtener el estado del usuario:', error);
        });
    });
    
}



/***************************************Desloguear*****************************/

function desloguear(){
    fetch(`${url}usuarios/?sessionid=${getCookie('session_id')}`,{
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
        userStatusElement.innerText = data.username;
        userStatusElement.innerText = "Login";
        Swal.fire({
            title: "Haz finalizado la sesión",
            text: `Vuelve pronto`,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        })
        if(sesionOn || sesionOff){
            !data.is_logged_in ?  sesionOn.style.display = "none" : sesionOn.style.display = "flex";
            data.is_logged_in ?  sesionOff.style.display = "none": sesionOff.style.display = "flex";
        }
        
      })
      .catch(error => {
        console.error('Error al desloguear:', error);
      });
}