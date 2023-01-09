import { KelvinACentigrados } from "./app.js";

const diaUno = document.querySelector('.card-day1');
const ciudad = document.querySelector('#ciudad').value;

console.log(ciudad);

function forecastAPI(ciudad) {
    const forecastId ='45ef79a15574fd2f0643500a864f1492';
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},&appid=${forecastId}&lang=es`;

    limpiarForecast();

    fetch(url)
        .then ((response) => {
            return response.json();
        })
        .then ((data) => {
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
        const { icon, description } = data.list[0].weather[0];
        const { temp, temp_min, temp_max} = data.list[0].main;
    
        const gradosFcst = KelvinACentigrados(temp);
        const maxFcst = KelvinACentigrados(temp_max);
        const minFcst = KelvinACentigrados(temp_min);

        const actualUno = document.createElement('h4');
        actualUno.innerHTML = `${gradosFcst} &#8451;`;

        const icon1 = document.createElement('img');
        icon1.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;

        const descripcion = document.createElement('p');
        descripcion.innerHTML = `${description}`;
        
        const tempMax1 = document.createElement('p');
        tempMax1.innerHTML = `Max: ${maxFcst} &#8451;`;

        const tempMin1 = document.createElement('p');
        tempMin1.innerHTML = `Min: ${minFcst} &#8451;`;

        const infoFcst1 = document.createElement('div');
        infoFcst1.classList.add('cardContainer1');
        infoFcst1.appendChild(actualUno);
        infoFcst1.appendChild(icon1);
        infoFcst1.appendChild(descripcion);
        infoFcst1.appendChild(tempMax1);
        infoFcst1.appendChild(tempMin1);

        diaUno.appendChild(infoFcst1);
    }

    datosDia1(data);

}

function limpiarForecast() {
    while (diaUno.firstChild) {
        diaUno.removeChild(diaUno.firstChild)
    }
}
export { forecastAPI, mostrarForecast }
// -----------------------------------------------------------------------------------------------------

// const appId ='45ef79a15574fd2f0643500a864f1492';

// var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + ciudad + "&appid=" + appId;



// $.ajax ({
//     url: URLForecast,
//     method: "GET"
// })
//     .then // desde aqui estamos testeand

