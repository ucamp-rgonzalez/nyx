class Usuario {}

let agenda = [];

function agregar() {
  // ¡¡¡ NO TOCAR !!!
  // Generar ID
  const id = generarId();
  // Traer datos de los inputs
  const { nombres, apellidos, telefono } = traerDatosInputs();
  // !!!!!!!!!!!!!!!
}

function eliminar(evento) {
  // ¡¡¡ NO TOCAR !!!
  // Traer los datos de la fila
  const { id } = traerDatosTr(evento);
  // !!!!!!!!!!!!!!!
}

function editar(evento) {
  // ¡¡¡ NO TOCAR !!!
  // Traer los datos de la fila
  const { id, nombres, apellidos, telefono } = traerDatosTr(evento);
  // !!!!!!!!!!!!!!!
}

function actualizar(evento) {
  // ¡¡¡ NO TOCAR !!!
  // Traer los datos de los inputs
  const { id, nombres, apellidos, telefono } = traerDatosInputs(evento);
  // !!!!!!!!!!!!!!!
}

/*
  ¡¡¡ NO TOCAR !!!
  FUNCIONES DE UTILIDAD
  !!!!!!!!!!!!!!!!
*/

function traerDatosTr(icon) {
  const tr = icon.closest('tr');
  const [id, nombres, apellidos, telefono] = Array.from(tr.children)
    .slice(0, -1)
    .map((a) => a.innerText);
  return { id, nombres, apellidos, telefono };
}

function traerDatosInputs() {
  const formData = new FormData(document.getElementById('formulario'));
  return {
    id: formData.get('id'),
    nombres: formData.get('nombres'),
    apellidos: formData.get('apellidos'),
    telefono: formData.get('telefono'),
  };
}

function limpiarInputs() {
  document.getElementById('formulario').reset();
}

function rellenarInputs(id, nombres, apellidos, telefono) {
  document.querySelector('#formulario > input').value = id;
  document.querySelector('#formulario > div:nth-child(2) > input').value = nombres;
  document.querySelector('#formulario > div:nth-child(3) > input').value = apellidos;
  document.querySelector('#formulario > div:nth-child(4) > input').value = telefono;
}

function popularTabla(datos) {
  const tbody = document.getElementById('tabla-contenido');
  tbody.innerHTML = '';

  datos
    .map((d) => crearTr(d))
    .forEach((tr) => {
      tbody.appendChild(tr);
    });
}

function crearTr(dato) {
  const tdHTML = `
    <td>${dato.id}</td>
    <td>${dato.traerNombres()}</td>
    <td>${dato.traerApellidos()}</td>
    <td>${dato.traerTelefono()}</td>
    <td>
      <i class="bi bi-pencil-square" onclick="editar(this)"></i>
      <i class="bi bi-trash3" onclick="eliminar(this)"></i>
    </td>
  `;
  const td = document.createElement('tr');
  td.innerHTML = tdHTML;
  return td;
}

function generarId() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < 5; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}
