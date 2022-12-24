import { getData, getCanadaCovid } from './api.js';

const canvas = document.getElementById('raul');

(async () => {
  //
  const dataCovid = await getCanadaCovid();
  console.log(dataCovid);

  const labels = dataCovid.map((item) => item.date);
  const values = dataCovid.map((item) => item.outcomes.death.total.value);

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Covid Fallecimientos',
          data: values,
        },
      ],
    },
  });
})();

// const { labels, values } = getData().reduce(
//   (acc, curr) => {
//     acc.labels.push(curr.label);
//     acc.values.push(curr.value);
//     return acc;
//   },
//   { labels: [], values: [] },
// );

// new Chart(canvas, {
//   type: 'line',
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Lenguajes',
//         data: values,
//       },
//     ],
//   },
// });
