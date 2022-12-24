import { getData } from './api.js';

const ctx = document.getElementById('moises');

const data = getData();

const labelsObjects = data.map((objeto) => {
  const { label } = objeto;
  return label;
});

const values = data.map((objeto) => {
  const { value } = objeto;
  return value;
});

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsObjects,
    datasets: [
      {
        label: "Moises's Chart",
        data: values,
        borderwidth: 1,
      },
    ],
  },
});
