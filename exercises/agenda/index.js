const actualOperacion = null;

class Usuario {}

const agenda = [];

function agregar() {
  // ¡¡¡ NO TOCAR !!!
  // Generar ID
  const id = generarId();
  // !!!!!!!!!!!!!!!
}

function eliminar(evento) {
  // ¡¡¡ NO TOCAR !!!
  // Traer los datos de la fila
  const { id, nombre, apellido, telefono } = traerDatos(evento);
  // !!!!!!!!!!!!!!!
}

function editar(evento) {
  // ¡¡¡ NO TOCAR !!!
  // Traer los datos de la fila
  const { id, nombre, apellido, telefono } = traerDatos(evento);
  // !!!!!!!!!!!!!!!
}

function realizarOperacion() {}

/*
  ¡¡¡ NO TOCAR !!!
  FUNCIONES DE UTILIDAD
  !!!!!!!!!!!!!!!!
*/

function traerDatos(icon) {
  const tr = icon.closest('tr');
  const [id, nombre, apellido, telefono] = Array.from(tr.children)
    .slice(0, -1)
    .map((a) => a.innerText);
  return { id, nombre, apellido, telefono };
}

function limpiarInputs() {
  document.getElementById('formulario').reset();
}

function rellenarInputs(nombre, apellido, telefono) {
  document.querySelector('#formulario > div:nth-child(1) > input').value = nombre;
  document.querySelector('#formulario > div:nth-child(2) > input').value = apellido;
  document.querySelector('#formulario > div:nth-child(3) > input').value = telefono;
}

function popularTabla(datos) {
  const tbodyNuevo = document.createElement('tbody');
  datos
    .map((d) => crearTr(d))
    .forEach((tr) => {
      tbodyNuevo.appendChild(tr);
    });
  const tbodyAnterior = document.getElementById('tabla-contenido');
  tbodyAnterior.parentNode.replaceChildren(tbodyNuevo, tbodyAnterior);
}

function crearTr(dato) {
  const tr = document.createElement('tr');
  tr.appendChild((document.createElement('td').innerText = dato.nombre));
  tr.appendChild((document.createElement('td').innerText = dato.apellido));
  tr.appendChild((document.createElement('td').innerText = dato.telefono));
  return tr;
}

function generarId() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = ' ';
  for (let i = 0; i < 5; i++) {
    result += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}
