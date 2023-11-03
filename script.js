console.log("heloo")
const spi = "7f25580e5be5ae1c900766320379432d"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=germany"
const api ="https://api.openweathermap.org/data/2.5/weather?q=germany&appid="


async function weather (){
    const response = await fetch(api + spi)
    const  data = await response.json()
    console.log(data)
}
weather()