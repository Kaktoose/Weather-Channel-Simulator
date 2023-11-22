import { keys } from "./keys.js";





//on load add classes


//on load show title

document.getElementById("title").classList.add('fadeIn')
setTimeout( () =>{
    document.getElementById("title").classList.remove('fadeIn')
    document.getElementById("title").classList.add('hidden')
    document.getElementById("slide1").classList.remove('hidden')
    document.getElementById("slide1").classList.add('slide1')

}, 5000)


async function current_conditions() {

    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=${keys.WEATHER_API}&units=metric`);
    const weather = await response.json();
    console.log(weather);

    let current_temperature = weather.main.temp
    console.log(current_temperature)





}
  
