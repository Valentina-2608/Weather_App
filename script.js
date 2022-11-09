/* Script */

let result = document.getElementById('result');
let search_btn = document.getElementById('search_btn');
let city = document.getElementById('city');


let getWeather = () => {
    let cityValue = city.value;
    if (cityValue.length == 0){
        result.innerHTML=`<h3>Please, enter a city name</h3>`
    } else{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>  {
            console.log(data);
            result.innerHTML = `
            <p class="name">${data.name}</p>
            <p class=weather>${data.weather[0].description}</p>
            <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}.png"}>
            <p class="temp">${data.main.temp}</p>
            
            
            
            `;
        })
        .catch(() => {
            result.innerHTML=`<h3>City not found</h3>`
        })
    }
}


window.addEventListener("load", getWeather);

