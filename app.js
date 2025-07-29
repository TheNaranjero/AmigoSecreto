// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



 /*   Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

    Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let listaDeAmigos = [];

function asignarTextoElemento(texto, elemento){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function vaciarCaja(){
     document.getElementById("amigo").value = "";

}

function visualizarListaDeAmigos(){
    asignarTextoElemento( listaDeAmigos, "#resultado");
}

function sortearAmigo(){
    // chequea que haya al menos un amigo en la lista, de ser así elige un amigo al azar y lo muestra en pantalla.
    let cantidadDeAmigos = listaDeAmigos.length;
    if( cantidadDeAmigos == 0){
        alert("Por favor añada al menos un amigo a la lista.");
    } else {
        let amigoSeleccionado = listaDeAmigos[ Math.floor(Math.random()*cantidadDeAmigos) ];
        alert( `¡Felicidades! Te ha tocado ${amigoSeleccionado}.` );
    }
}

function agregarAmigo(){
    /* Obtiene el input con id amigo y le quita los espacios vacíos con trim()
    vacía la caja de input
    si el nombre está vacío emite un alert
    si el nombre está repetido emite un alert (chequea listaDeAmigos)
    si pasa los chequeos, añade el nombre a la listaDeAmigos y actualiza la visualización
    */
    let amigo = document.getElementById("amigo").value.trim();
    vaciarCaja();
    if(amigo == ""){
        alert("Por favor ingrese un nombre válido");
    } else if(listaDeAmigos.includes(amigo)){
        alert(`Alguien llamado ${amigo} ya está en la lista, por favor ingrese un nombre diferente.`);
    } else{
        listaDeAmigos.push(amigo);
        visualizarListaDeAmigos();


    }
   // console.log(listaDeAmigos)
}

