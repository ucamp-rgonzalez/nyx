import { getData } from './api.js';

const grafica = document.getElementById('luis');

const labels = getData().map((item) => item.label);
const values = getData().map((item) => item.value);

new Chart(grafica, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      //datos
      {
        label: 'Mi Grafica',
        backgraunColor: 'red',
        data: values,
      },
    ],
  },
});
