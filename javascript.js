// AGREGAR COMENTARIO Y USUARIO
function agregarComentario(evento) {
    evento.preventDefault();

    let usuario = document.getElementById('nombreUsuario').value;

    if (usuario === '') {
        document.getElementById('nombreUsuario').focus();
        document.getElementById('nombreUsuario').setAttribute('placeholder', 'No ha ingresado su usuario');
        return;
    }

    let comentario = document.getElementById('comentario').value;
    
    if (comentario === '') {
        document.getElementById('comentario').setAttribute('placeholder', 'No ha ingresado un comentario');
        return;
    }

    let btnBorrar = document.createElement("button");
    btnBorrar.id = "eliminar";
    btnBorrar.textContent = "Eliminar";
    

    let text = document.createElement("p");
    text.innerHTML = "<span id='usuario'>" + usuario + ': ' + "</span>" + comentario + "                 ";
    text.appendChild(btnBorrar);

    let listItem = document.createElement('li');
    listItem.appendChild(text);

    
    document.getElementById('lista_comentarios').appendChild(listItem);
}

document.getElementById('btnComentarios').addEventListener('click', agregarComentario);

function BtnBorrar(){
    document.getElementById('lista_comentarios').removeChild(listItem);
}

document.getElementById('eliminar').addEventListener('click', BtnBorrar);

// BOTÓN SEGUIR
  function BtnSeguir() {
    let seguido = document.getElementById("btnSeguir");
    if (seguido.textContent == "Dejar de seguir") {
        seguido.textContent = "Seguir";
    }else {
        seguido.textContent = "Dejar de seguir";
    }
  }

  // BOTÓN ME GUSTA
  function BtnMeGusta() {
    let likes = document.getElementById("likes").textContent = "201";
    
    document.getElementById("btnMeGusta").style.color = "white"; 
    document.getElementById("btnMeGusta").style.backgroundColor = "#2a7010";
   }

   