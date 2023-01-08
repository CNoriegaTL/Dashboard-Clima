const solicitud = document.getElementById('solicitud');
const cardResume = document.getElementById('cardResume');
// const search = document.getElementById('search');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', buscarClima)
  

function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('#ciudad').value

    console.log(ciudad);

    if(ciudad === '') {
        mostrarError('Campo Obligatorio')
        return;
    }

    consultarAPI(ciudad);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.alert');
    if (!alerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('.alert');
        alerta.innerHTML = `<strong>Error! ${mensaje}</strong>`;
        solicitud.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
        // *****Falta diseño, usar Bootstrap*****
    }
}

function consultarAPI(ciudad) {
    const appId ='45ef79a15574fd2f0643500a864f1492';
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},&appid=${appId}`;

    limpiarHTML();

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            limpiarHTML();
            if(data.cod === "404") {
                mostrarError('Ciudad No Encontrada')
            } else {
                mostrarClima(data)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function mostrarClima(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_min, temp_max } = data.main;

    const grados = KelvinACentigrados(temp);
    const min = KelvinACentigrados(temp_max);
    const max = KelvinACentigrados(temp_min)

    const icon0 = document.createElement('div');
    icon0.classList.add('card-icon0');
    var imagen = document.createElement('img');
    imagen.src = `http://openweathermap.org/img/wn/` + `${icon}` + `.png`;
    icon0.appendChild(imagen);

    const actual = document.createElement('h4');
    actual.innerHTML = `${grados} &deg C`;

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `${description}`;

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `${max} &deg C`;

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `${min} &deg C`;

    const nombre = document.createElement('h4');
    nombre.innerHTML = `${name}`;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('cardContainer0');
    cardInfo.appendChild(actual);
    cardInfo.appendChild(descripcion);
    cardInfo.appendChild(tempMaxima);
    cardInfo.appendChild(tempMinima);
    cardInfo.appendChild(nombre);

    cardResume.appendChild(icon0)
    cardResume.appendChild(cardInfo)

}

function KelvinACentigrados(grados) {
    return parseInt( grados - 273.15);
}

function limpiarHTML() {
    while(cardResume.firstChild) {
        cardResume.removeChild(cardResume.firstChild);
    }
}

// export { KelvinACentigrados };
// export { ciudad };

