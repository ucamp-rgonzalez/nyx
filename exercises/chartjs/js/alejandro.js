import { getData } from './api.js';

const ctx = document.getElementById('alejandro');

const datos = getData();
const arreglo = datos.map(
  (objeto) => objeto.label,
); /*{ return objeto.label; });*/
const arreglo2 = datos.map((objeto) => objeto.value);

new Chart(ctx, {
  type: 'line',
  data: {
    labels: arreglo,
    datasets: [
      {
        label: 'Datos :v',
        data: arreglo2,
        borderWidth: 5,
      },
    ],
  },
});
