let weather = {
  "apikey": "38732f8a80baa1076a6124eaa353a557",
  fetchWeather: function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=metric&appid=38732f8a80baa1076a6124eaa353a557"
    ).then((response) => response.json())
    .then((data) => console.log(data));
  }
}