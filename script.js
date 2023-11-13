const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "60428c4efamsh4bd610c8b317733p1fdcb7jsn61d54e25e103",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
	cityName.innerHTML=city;
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value)
});

getWeather("Mathura");