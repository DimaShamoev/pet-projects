let wrapper = document.querySelector(".wrapper");

let input = document.querySelector(".search-input input");
let btn = document.querySelector(".search-btn button");

let weatherTemperature = document.querySelector(".teperature");
let weatherTempInfo = document.querySelector(".temp-info");
let weatherHumidity = document.querySelector(".hum-info-1");
let weatherWindSpeed = document.querySelector(".wind-info-1");

let weatherActive = document.querySelector(".weather-active");
let notFound = document.querySelector(".weather-not-found");

let showWeather = () => {
    let APIkey = "974ce70cfe2d525375e9ca9721d26361";
    let city = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            if (json.cod == '404' || json.cod == "400") {
                wrapper.classList.add("active");
                wrapper.style.height = "530px"
                weatherActive.classList.add("deactive");
                notFound.classList.add("active");
                return;
            }

            weatherActive.classList.remove("deactive");
            notFound.classList.remove("active");
            wrapper.style.height = "680px"

            let img = document.querySelector(".weather-img img");
            
            switch (json.weather[0].main) {
                case 'Clear':
                    img.src = "../../img/sun-img.png";
                    break;
                case 'Rain':
                    img.src = "../../img/rain-img.png";
                    break;
                case 'Snow':
                    img.src = "../../img/snow-img.png";
                    break;
                case 'Clouds':
                    img.src = "../../img/cloudy-img-2.png";
                    break;
                case 'Mist':
                    img.src = "../../img/cloudy-img.png";
                    break;
                default:
                    img.src = "../../img/cloudy-img.png";
            }

            weatherTemperature.innerHTML = `${parseInt(json.main.temp)}°C`;
            weatherTempInfo.innerHTML = `${json.weather[0].description}`;
            weatherHumidity.innerHTML = `${json.main.humidity}%`;
            weatherWindSpeed.innerHTML = `${json.wind.speed}Km/H`;

            img.addEventListener("load", () => {
                wrapper.classList.add("active");
            });


        })
};

btn.addEventListener("click", showWeather);
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        showWeather();
    }
});
