import { keys } from "./keys.js";


const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${keys.WEATHER_API}&units=metric`);
const weather = await response.json();
console.log(weather);

let current_gmt_time = new Date().getTime();




//on load add classes


//on load show title
document.querySelector("html").style.backgroundColor = '#020024'
document.getElementById("title").classList.add('fadeIn')

setTimeout( () =>{
    document.getElementById("title").classList.remove('fadeIn')
    document.getElementById("title").classList.add('hidden')
    document.getElementById("title").classList.remove('title')

    slide1()
    

    
}, 5000)

//Main: google icon name
let icons = {
    "Thunderstorm": 'thunderstorm',
    "Clouds": 'cloud'

}


async function slide1(){
    setTimeout(slide2, 5000)



    document.querySelector('html').style.backgroundColor = '#020024'
    document.getElementById("slide1").classList.remove('hidden')
    document.getElementById("slide1").classList.add('slide1')

 
  
    let convertedTime = current_gmt_time + weather.timezone

    const humanTime = new Date(convertedTime);
    const year = humanTime.getFullYear();
    const month = humanTime.getMonth() + 1; // Months are zero-indexed
    const day = humanTime.getDate();
    const hours = humanTime.getHours();
    const minutes = humanTime.getMinutes();
    const seconds = humanTime.getSeconds();
    let ampm;

    if(hours > 12){
        hours-12
        ampm = 'pm'
    }else{
        ampm = 'am'
    }
    document.getElementById("slide1_time").innerText = `${hours}:${minutes}${ampm} ${month}/${day}/${year}`





    document.getElementById("slide1_title").innerText = weather.name


    document.getElementById("current_temp_slide1").innerHTML = `${weather.main.temp}°C `

    document.getElementById("feels_like_slide1").innerHTML = `Feels Like: ${weather.main.feels_like}`
    document.getElementById("current_condition_slide1").innerHTML = weather.weather[0].description
    document.getElementById("high_slide1").innerHTML = `Todays high: ${weather.main.temp_max}`
    document.getElementById("low_slide1").innerHTML = `Todays low: ${weather.main.temp_min}`
    document.getElementById("humidity_slide1").innerHTML = `Humidity: ${weather.main.humidity}%`
    document.getElementById("wind_speed_slide1").innerHTML = `Wind Speed: ${weather.wind.speed}km/h`
    let mainCondition = weather.weather[0].main
    console.log(mainCondition)

    document.getElementById("icon_slide1").innerHTML = icons[mainCondition]

    








}


async function slide2(){



    document.querySelector('html').style.backgroundColor = '#020024'
    document.getElementById("slide1").classList.add('hidden')
    document.getElementById("slide1").classList.remove('slide1')
    document.getElementById("slide2").classList.remove("hidden")
    document.getElementById("slide2").classList.add("slide2")



 

}
  
