/* Script */

let result = document.getElementById('result');
let search_btn = document.getElementById('search_btn');
let city = document.getElementById('city');


let getWeather = () => {
    let cityValue = city.value;
    if (cityValue.length == 0){
        result.innerHTML=`<h3>Please, enter a city name</h3>`
    } else{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>  {
            console.log(data);
            result.innerHTML = `
            <p class="name">${data.name}</p>
            <p class=weather>${data.weather[0].description}</p>
            <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}.png"}>
            <p class="temp">${data.main.temp} &#176;</p>
            <div class="block_temperatures">
                <div class="min_temp">
                    <p class="caption">Min:</p>
                    <p class="temp1">${data.main.temp_min}</p>
                </div>
                <div class="max_temp">
                    <p class="caption">Max:</p>
                    <p class="temp2">${data.main.temp_max}</p>
                </div>
            </div>
            
            
            
            `;
        })
        .catch(() => {
            result.innerHTML=`<h3>City not found</h3>`
        })
    }
}

search_btn.addEventListener('click',getWeather);
window.addEventListener("load", getWeather);

