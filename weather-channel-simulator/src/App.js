import './App.css';

import { keys } from './keys.js'


import Header from './components/Header.jsx'


const fetchCurrentConditions = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${keys.WEATHER_API}&units=metric`)
const currentConditions = await fetchCurrentConditions.json() 

console.log(currentConditions)









function App() {
    return( 
    <>    
        <Header city={currentConditions.name} currentConditions={currentConditions} />
    </>
  )
}

export default App;

