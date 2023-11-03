console.log("heloo")
const spi = "7f25580e5be5ae1c900766320379432d"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=germany"
const api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.getElementById('search-box')
const button = document.getElementById('butn')
const cityName = document.querySelector(".city-name")
const temp = document.querySelector(".weather h1")


async function weather (city){
    const response = await fetch(api + city + `&appid=${spi}`)
    const  data = await response.json()
    console.log(data)
    cityName.innerHTML=data.name
    temp.innerHTML= Math.round(data.main.temp)   
}

button.addEventListener("click",()=>{
    let value = search.value
    weather(value)
    console.log(value)
    search.value=""
    search.focus()
    // demo.innerHTML="changed"
})
