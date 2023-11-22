const keys = require("./keys.json")
console.log(keys)





async function current_conditions() {

    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=${keys.WEATHER_API}&units=metric`);
    const weather = await response.json();
    console.log(weather);

    let current_temperature = weather.main.temp
    console.log(current_temperature)





}
  
