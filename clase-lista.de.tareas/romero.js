function Agregartarea() {
    let tarea = document.getElementById('tarea').value;

    if (tarea!="") {
    let elementopadre = document.getElementById('padre');

    let divnuevo = document.createElement('div');
    divnuevo.classList.add("hijo");

    let tareanueva = document.createElement('p');
    tareanueva.textContent = tarea;

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-bookmark-check', 'completa');
    completar.addEventListener('click', Completar);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3', 'eliminada');
    eliminar.addEventListener('click', Eliminar);

    let editar = document.createElement('i');
    editar.classList.add('bi', 'bi-pencil', 'editada');
    editar.addEventListener('click', Editar);

    iconos.append(completar, eliminar,editar);
    divnuevo.append(tareanueva, iconos);
    elementopadre.appendChild(divnuevo);
    } else {
        alert ("ingrese una tarea a realizar");
    }
}

function Completar(e) {
    let tareacompleta = e.target.parentNode.parentNode;
    tareacompleta.classList.toggle('completa');
}

function Eliminar(e) {
    let tareaeliminar = e.target.parentNode.parentNode;
    tareaeliminar.remove();
}

function Editar(e) {
    let tareaeditar = e.target.parentNode.parentNode;
    let textodetarea = tareaeditar.querySelector('p');
    textodetarea.contentEditable = true;
    textodetarea.focus();

    textodetarea.addEventListener("blur", () => {
        textodetarea.contentEditable = false;
    })
}
