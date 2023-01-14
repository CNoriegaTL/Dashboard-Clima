window.addEventListener('load', setup);

setup();

async function setup() {
  const ctx = document.getElementById('myChart');
  const data = await getData();
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [
        {
          label:
            'Aumento de la temperatura global promedio en °C desde 1920 a 2020',
          data: data.ys,
          fill: false,
          backgroundColor: 'rgb(255,165,0)',
          borderColor: 'rgb(255,165,0)',
          tension: 0.1,
          borderWitdh: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function (value, index, ticks) {
              return value + '°C';
            },
          },
        },
      },
    },
  });
}

async function getData() {
  const response = await fetch('assets/clima_historico.csv');
  const data = await response.text();
  const xs = [];
  const ys = [];
  const tabla = data.split('\n').slice(1);
  tabla.forEach((row) => {
    const columnas = row.split(',');
    const años = columnas[0];
    xs.push(años);
    const temperaturas = columnas[1];

    ys.push(parseFloat(temperaturas) + 14);
  });

  return { xs, ys };
}
