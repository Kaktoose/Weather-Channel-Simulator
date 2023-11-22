import { keys } from "./keys.js";





//on load add classes


//on load show title

document.getElementById("title").classList.add('fadeIn')
setTimeout( () =>{
    document.getElementById("title").classList.remove('fadeIn')
    document.getElementById("title").classList.add('hidden')
    slide1()

    
}, 1000)




async function slide1(){
    document.getElementById("slide1").classList.remove('hidden')
    document.getElementById("slide1").classList.add('slide1')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=${keys.WEATHER_API}&units=metric`);
    const weather = await response.json();
    console.log(weather);

    document.getElementById("current_conditions_slide1").innerText = `${weather.name}:   ${weather.main.temp}°C`
    console.log(current_temperature)

}






async function current_conditions() {

    





}
  
