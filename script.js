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
    console.log('ern')
    document.querySelector('html').style.backgroundColor = '#2c2ec7'
    document.getElementById("slide1").classList.remove('hidden')
    document.getElementById("slide1").classList.add('slide1')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${keys.WEATHER_API}&units=metric`);
    const weather = await response.json();
    console.log(weather);

    document.getElementById("slide1_title").innerText = weather.name


    document.getElementById("current_temp_slide1").innerHTML = `${weather.main.temp}°C `

    document.getElementById("feels_like_slide1").innerHTML = `Feels Like: ${weather.main.feels_like}`
    document.getElementById("current_condition_slide1").innerHTML = weather.weather[0].description
    document.getElementById("high_slide1").innerHTML = `Todays high: ${weather.main.temp_max}`
    document.getElementById("low_slide1").innerHTML = `Todays low: ${weather.main.temp_min}`
    document.getElementById("humidity_slide1").innerHTML = `Humidity: ${weather.main.humidity}%`
    document.getElementById("wind_speed_slide1").innerHTML = `Wind Speed: ${weather.wind.speed}km/h`










}






async function current_conditions() {

    





}
  
