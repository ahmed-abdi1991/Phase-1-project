let weather = {
  "apikey": "38732f8a80baa1076a6124eaa353a557",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + this.apikey
    ).then((response) => response.json())
    .then((data) => this.displayweather(data));
  },
  displayweather: function(data){
    const { name } = data;
    const { icon,description } = data.weather[0];
    const { temp,humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed) 
  }
};