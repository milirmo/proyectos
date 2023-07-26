function Elegirdivs() {
  let selector = document.getElementById("seleccion");
  let opcion = parseInt(selector.value);

  let divs = document.querySelectorAll(".tarjeta");
  for (i = 0; i < divs.length; i++) {
    if (i < opcion) {
      divs[i].classList.remove("hidden");
    } else {
      divs[i].classList.add("hidden");
    }
  }
}

function Elegirtipo() {
  let selectortipo = document.getElementById("seleccion2");
  let opcion = parseInt(selectortipo.value);

  let razachica = document.querySelectorAll(".chico");
  let razamediana = document.querySelectorAll(".mediano");
  let razagrande = document.querySelectorAll(".grande");

  if (opcion === 3) {
    for (i = 0; i < razachica.length; i++) {
      razachica[i].classList.remove("hidden");
    }
    for (c = 0; c < razamediana.length; c++) {
      razamediana[c].classList.add("hidden");
    }
    for (k = 0; k < razagrande.length; k++) {
      razagrande[k].classList.add("hidden");
    }
  } else {
    if (opcion === 2) {
      for (i = 0; i < razamediana.length; i++) {
        razamediana[i].classList.remove("hidden");
      }
      for (k = 0; k < razagrande.length; k++) {
        razagrande[k].classList.add("hidden");
      }
      for (c = 0; c < razachica.length; c++) {
        razachica[c].classList.add("hidden");
      }
    } else {
      if (opcion === 1) {
        for (i = 0; i < razagrande.length; i++) {
          razagrande[i].classList.remove("hidden");
        }
        for (c = 0; c < razachica.length; c++) {
          razachica[c].classList.add("hidden");
        }
        for (k = 0; k < razamediana.length; k++) {
          razamediana[k].classList.add("hidden");
        }
      }
    }
  }
}

let contador=11;
function Agregarazas() {
  const tarjetanueva = document.createElement("div");
  tarjetanueva.classList.add("tarjeta");

  let titulo = document.createElement("h1");
  let tl = document.getElementById("titulo").value;
  titulo.innerHTML = tl;

  let imagen = document.createElement("img");
  let im = document.getElementById("imagen").value;
  imagen.setAttribute("src", im);

  let texto = document.createElement("p");
  let tx = document.getElementById("texto").value;
  texto.innerHTML = tx;

  let botoneliminar = document.createElement("input");
  botoneliminar.setAttribute("type", "button");
  botoneliminar.setAttribute("value", "Eliminar");

  botoneliminar.addEventListener("click", () => {
    tarjetanueva.style.display = "none";
  });

  tarjetanueva.append(titulo, imagen, texto, botoneliminar);

  const tarjetas = document.getElementById("general");
  tarjetas.appendChild(tarjetanueva);
}
