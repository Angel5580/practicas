// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//challenge del amigo secreto el desafio consiste en crean una aplicacion que permita 
// a los usuarios poner nombres de sus amigos y realizar un sorteo aleatorio para 
// determinar el amigo secreto validar los datos de entrada poner un mensaje de alerta 
// indicando que se ingrese un nombre al darle click al boton de sortear amigo 
// aleatorio y sortearlo en pantalla 

let nombres = [];

function agregarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        document.getElementById("mensaje").textContent = "Por favor, ingresa un nombre.";
        return;
    }
    nombres.push(nombre);
    actualizarLista();
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").textContent = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    for (let nombre of nombres) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa al menos un nombre.";
        return;
    }
    let indice = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indice];
    document.getElementById("resultado").textContent = "El amigo secreto es: " + nombreSorteado;
    document.getElementById("mensaje").textContent = "";
}