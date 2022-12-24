import { getData } from './api.js';

const miArchivo = document.getElementById('camilo');

const llamado = getData();
const arregloLavel = llamado.map((objeto) => objeto.label);
const arregloValue = llamado.map((objeto) => objeto.value);

new Chart(miArchivo, {
  type: 'bar',
  data: {
    labels: arregloLavel,
    datasets: [
      {
        label: 'migrafica',
        backgraunColor: 'red',
        data: arregloValue, //datos
      },
    ],
  },
});
