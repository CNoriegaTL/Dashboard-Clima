let weather = {
    "apikey": "45ef79a15574fd2f0643500a864f1492",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apikey)
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max } = data.main;
        console.log(name, icon, description, temp, temp_min, temp_max);
        document.querySelector(".info-dia0").innerText = name;
        document.querySelector("icon0").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".degree-dia0").innerText = temp;

    }
}

