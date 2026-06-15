let numero = 1;

function registrar() {
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    alert("Escribe tu nombre");
    return;
  }

  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    🎉 ${nombre}, estás dentro<br>
    Tu número es:
    <div class="numero">${numero}</div>
  `;

  numero++;
}

function volverInicio() {
  document.getElementById("registro").style.display = "none";
  document.querySelector(".main").style.display = "flex";
  document.body.style.overflow = "hidden";
}

let presionando;
let tiempo = 2000; // 2 segundos

const zona = document.getElementById("secretZone");

zona.addEventListener("mousedown", iniciar);
zona.addEventListener("mouseup", cancelar);
zona.addEventListener("mouseleave", cancelar);

zona.addEventListener("touchstart", iniciar);
zona.addEventListener("touchend", cancelar);

function iniciar() {
  presionando = setTimeout(() => {
    let clave = prompt("🔒 Ingresa la clave secreta");

    if (clave === "1234") {  // ← puedes cambiar la clave
      if (confirm("¿Borrar todos los registros?")) {
        borrarTodo();
      }
    } else {
      alert("Clave incorrecta");
    }

  }, tiempo);
}

function cancelar() {
  clearTimeout(presionando);
}

/* FUNCIÓN BORRAR */
function borrarTodo() {
  localStorage.removeItem("corredores");
  participantes = [];
  numero = 1;

  document.getElementById("lista").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  alert("✅ Registros eliminados");
}
``