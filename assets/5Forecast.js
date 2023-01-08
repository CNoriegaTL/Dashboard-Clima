// import { KelvinACentigrados } from "..app.js";
// import { ciudad } from "..app.js";

// function forecastAPI(ciudad) {
//     const appId ='45ef79a15574fd2f0643500a864f1492';
//     let url
// }




// function mostrarForecast(data) {
//     const { icon, description } = data.list[0].weather[0];
//     const { temp, temp_min, temp_max} = data.list[0].main;

//     const gradosFcst = KelvinACentigrados(temp);
//     const minFcst = KelvinACentigrados(temp_max);
//     const maxFcst = KelvinACentigrados(temp_min);


// }

// -----------------------------------------------------------------------------------------------------

const appId ='45ef79a15574fd2f0643500a864f1492';

var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + ciudad + "&appid=" + appId;



$.ajax ({
    url: URLForecast,
    method: "GET"
})
    .then // desde aqui estamos testeand

