console.log("heloo")
const spi = "7f25580e5be5ae1c900766320379432d"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=germany"
const api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="



const search = document.getElementById('search-box')
const button = document.getElementById('butn')
const cityName = document.querySelector(".city-name")
const temp = document.querySelector(".weather h1")
const humidity = document.querySelector(".humdity")
const windSpeed = document.querySelector(".wind-speed")
const wetherIcon = document.querySelector(".weather-icon")


async function weather (city){
    const response = await fetch(api + city + `&appid=${spi}`)
    if (response.status == 404){
        alert("invalid city name")
    }
    const  data = await response.json()
    console.log(data.weather[0])
    cityName.innerHTML=data.name
    temp.innerHTML= Math.round(data.main.temp) + "°C"
       windSpeed.innerHTML = data.wind.speed + "km/hr"
       humidity.innerHTML = data.main.humidity +"%"
        if(data.weather[0].main == "Clouds"){
       wetherIcon.src ="pic/clouds.png"
     }
     else if (data.weather[0].main == "Clear"){
        wetherIcon.src ="pic/clear.png"
     }
     else if (data.weather[0].main == "Snow")
     {
        wetherIcon.src ="pic/snow.png"

     }
     else if (data.weather[0].main == "Rain")
     {
        wetherIcon.src ="pic/rain.png"

     }
     else if (data.weather[0].main == "Drizzle")
     {
        wetherIcon.src ="pic/drizzle.png"

     }
     else if (data.weather[0].main == "Mist")
     {
        wetherIcon.src ="pic/mist.png"

     }
}

button.addEventListener("click",()=>{
    let value = search.value
    weather(value)
    console.log(value)
    search.value=""
    search.focus()
    // demo.innerHTML="changed"
})
