// Script para actualizar la fecha y hora en la pagina web.

const tiempoActual = document.getElementById('tiempo');
const fechaActual = document.getElementById('fecha');

const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

setInterval(() => {
  const tiempo = new Date();
  const mes = tiempo.getMonth();
  const fecha = tiempo.getDate();
  const dia = tiempo.getDay();
  const hora = tiempo.getHours();
  const horasEn12Horas = hora >= 13 ? hora % 12 : hora;
  let minutos = tiempo.getMinutes();
  minutos = minutos < 10 ? '0' + minutos : minutos;
  const ampm = hora >= 12 ? 'PM' : 'AM';

  tiempoActual.innerHTML =
    horasEn12Horas + ':' + minutos + ' ' + `<span id="am-pm">${ampm}</span>`;

  fechaActual.innerHTML = dias[dia] + ', ' + fecha + ' ' + meses[mes];
}, 1000);

export { tiempoActual, fechaActual };
