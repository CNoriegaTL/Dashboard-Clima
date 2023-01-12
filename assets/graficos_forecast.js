const graficosForecast = document.getElementById('graficoForecast');
console.log(graficosForecast);

const labels = ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5']; //? Array de fechas
const ejeYTemperaturaMaxima = 'Array de temperaturas maximas del forecast';
const ejeYTemperaturaMinima = 'Array de temperaturas minima del forecast';

const lineChart = new Chart(graficosForecast, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura maxima de los proximos 5 dias', //? Array de forecast temp. maxima
        data: [28, 31, 29, 30, 30],
        fill: false,
        backgroundColor: 'rgba(30,144,255)',
        borderColor: 'rgb(30,144,255',
        tension: 0.5, //? Para suavizar la linea
        borderWidth: 3.5,
      },
      {
        label: 'Temperatura minima de los proximos 5 dias.', //? Array de forecast temp. minima
        data: [16, 14, 14, 14, 15],
        fill: false,
        backgroundColor: 'rgb(0,0,128)',
        borderColor: 'rgb(0, 0, 128)',
        tension: 0.5, //? Para suavizar la linea
        borderWidth: 3.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, ticks) {
            return value + '°C';
          },
          display: true,
        },
      },
    },
  },
});
