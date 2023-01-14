import { KelvinACentigrados } from './app.js';

const diaUno = document.querySelector('#card-day1');
const diaDos = document.querySelector('#card-day2');
const diaTres = document.querySelector('#card-day3');
const diaCuatro = document.querySelector('#card-day4');
const diaCinco = document.querySelector('#card-day5');
const ciudad = document.querySelector('#ciudad').value;

console.log(ciudad);

function forecastAPI(ciudad) {
  const forecastId = '45ef79a15574fd2f0643500a864f1492';
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},&appid=${forecastId}&lang=es`;

  limpiarForecast();

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      limpiarForecast();
      mostrarForecast(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarForecast(data) {
  console.log(data);

  function datosDia1(data) {
    const { dt_txt } = data.list[0];
    const { icon, description } = data.list[0].weather[0];
    const { temp_min, temp_max } = data.list[0].main;

    const maxFcst = KelvinACentigrados(temp_max);
    const minFcst = KelvinACentigrados(temp_min);

    const fechaUno = document.createElement('p');
    fechaUno.innerHTML = `${dt_txt}`;

    const icon1 = document.createElement('img');
    icon1.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `Se espera ${description}`;

    const tempMax1 = document.createElement('p');
    tempMax1.innerHTML = `Max: ${maxFcst} &#8451;`;

    const tempMin1 = document.createElement('p');
    tempMin1.innerHTML = `Min: ${minFcst} &#8451;`;

    const infoFcst1 = document.createElement('div');
    infoFcst1.classList.add('cardContainer1');
    infoFcst1.appendChild(fechaUno);
    infoFcst1.appendChild(icon1);
    infoFcst1.appendChild(descripcion);
    infoFcst1.appendChild(tempMax1);
    infoFcst1.appendChild(tempMin1);

    diaUno.appendChild(infoFcst1);
  }

  function datosDia2(data) {
    const { dt_txt } = data.list[8];
    const { icon, description } = data.list[8].weather[0];
    const { temp_min, temp_max } = data.list[8].main;

    const maxFcst = KelvinACentigrados(temp_max);
    const minFcst = KelvinACentigrados(temp_min);

    const fechaDos = document.createElement('p');
    fechaDos.innerHTML = `${dt_txt}`;

    const icon2 = document.createElement('img');
    icon2.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `Se espera ${description}`;

    const tempMax2 = document.createElement('p');
    tempMax2.innerHTML = `Max: ${maxFcst} &#8451;`;

    const tempMin2 = document.createElement('p');
    tempMin2.innerHTML = `Min: ${minFcst} &#8451;`;

    const infoFcst2 = document.createElement('div');
    infoFcst2.classList.add('cardContainer2');
    infoFcst2.appendChild(fechaDos);
    infoFcst2.appendChild(icon2);
    infoFcst2.appendChild(descripcion);
    infoFcst2.appendChild(tempMax2);
    infoFcst2.appendChild(tempMin2);

    diaDos.appendChild(infoFcst2);
  }

  function datosDia3(data) {
    const { dt_txt } = data.list[16];
    const { icon, description } = data.list[16].weather[0];
    const { temp_min, temp_max } = data.list[16].main;

    const maxFcst = KelvinACentigrados(temp_max);
    const minFcst = KelvinACentigrados(temp_min);

    const fechaTres = document.createElement('p');
    fechaTres.innerHTML = `${dt_txt}`;

    const icon3 = document.createElement('img');
    icon3.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `Se espera ${description}`;

    const tempMax3 = document.createElement('p');
    tempMax3.innerHTML = `Max: ${maxFcst} &#8451;`;

    const tempMin3 = document.createElement('p');
    tempMin3.innerHTML = `Min: ${minFcst} &#8451;`;

    const infoFcst3 = document.createElement('div');
    infoFcst3.classList.add('cardContainer3');
    infoFcst3.appendChild(fechaTres);
    infoFcst3.appendChild(icon3);
    infoFcst3.appendChild(descripcion);
    infoFcst3.appendChild(tempMax3);
    infoFcst3.appendChild(tempMin3);

    diaTres.appendChild(infoFcst3);
  }

  function datosDia4(data) {
    const { dt_txt } = data.list[24];
    const { icon, description } = data.list[24].weather[0];
    const { temp_min, temp_max } = data.list[24].main;

    const maxFcst = KelvinACentigrados(temp_max);
    const minFcst = KelvinACentigrados(temp_min);

    const fechaCuatro = document.createElement('p');
    fechaCuatro.innerHTML = `${dt_txt}`;
    
    const icon4 = document.createElement('img');
    icon4.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `Se espera ${description}`;

    const tempMax4 = document.createElement('p');
    tempMax4.innerHTML = `Max: ${maxFcst} &#8451;`;

    const tempMin4 = document.createElement('p');
    tempMin4.innerHTML = `Min: ${minFcst} &#8451;`;

    const infoFcst4 = document.createElement('div');
    infoFcst4.classList.add('cardContainer4');
    infoFcst4.appendChild(fechaCuatro);
    infoFcst4.appendChild(icon4);
    infoFcst4.appendChild(descripcion);
    infoFcst4.appendChild(tempMax4);
    infoFcst4.appendChild(tempMin4);

    diaCuatro.appendChild(infoFcst4);
  }

  function datosDia5(data) {
    const { dt_txt } = data.list[32];
    const { icon, description } = data.list[32].weather[0];
    const { temp_min, temp_max } = data.list[32].main;

    const maxFcst = KelvinACentigrados(temp_max);
    const minFcst = KelvinACentigrados(temp_min);

    const fechaCinco = document.createElement('p');
    fechaCinco.innerHTML = `${dt_txt}`;

    const icon5 = document.createElement('img');
    icon5.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `Se espera ${description}`;

    const tempMax5 = document.createElement('p');
    tempMax5.innerHTML = `Max: ${maxFcst} &#8451;`;

    const tempMin5 = document.createElement('p');
    tempMin5.innerHTML = `Min: ${minFcst} &#8451;`;

    const infoFcst5 = document.createElement('div');
    infoFcst5.classList.add('cardContainer5');
    infoFcst5.appendChild(fechaCinco);
    infoFcst5.appendChild(icon5);
    infoFcst5.appendChild(descripcion);
    infoFcst5.appendChild(tempMax5);
    infoFcst5.appendChild(tempMin5);

    diaCinco.appendChild(infoFcst5);
  }

  datosDia1(data);
  datosDia2(data);
  datosDia3(data);
  datosDia4(data);
  datosDia5(data);
}

function limpiarForecast() {
  while (diaUno.firstChild) {
    diaUno.removeChild(diaUno.firstChild);
  }
  while (diaDos.firstChild) {
    diaDos.removeChild(diaDos.firstChild);
  }
  while (diaTres.firstChild) {
    diaTres.removeChild(diaTres.firstChild);
  }
  while (diaCuatro.firstChild) {
    diaCuatro.removeChild(diaCuatro.firstChild);
  }
  while (diaCinco.firstChild) {
    diaCinco.removeChild(diaCinco.firstChild);
  }
}
export { forecastAPI };
// -----------------------------------------------------------------------------------------------------

// const appId ='45ef79a15574fd2f0643500a864f1492';

// var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + ciudad + "&appid=" + appId;

// $.ajax ({
//     url: URLForecast,
//     method: "GET"
// })
//     .then // desde aqui estamos testeand
