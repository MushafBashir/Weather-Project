let apiKey = "e33d0566cb8e397a97e21af7f7b70498";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let search = document.getElementById('search');
let btn = document.getElementById('btn');
let weatherImg = document.getElementById('weatherImg');

async function checkWeather(city){

    let response = await fetch(apiUrl + city+`&appid=${apiKey}`)

    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".errormsg").style.display = "block";
        document.querySelector(".mainscreen").style.display = "none";
    }else{

    document.getElementById('city').innerHTML= data.name;
    document.getElementById('wind').innerHTML= Math.round((data.wind.speed*3600)/1000) + "km/h";
    document.getElementById('humidity').innerHTML= data.main.humidity + "%";
    document.getElementById('temp').innerHTML= Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
    }else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
    }else if(data.weather[0].main == "Smoke"){
        weatherImg.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherImg.src = "images/snow.png";
    }

    document.querySelector(".mainscreen").style.display = "block";
    document.querySelector(".errormsg").style.display = "none";
}
console.log(data);
}

btn.addEventListener('click', call)

function call(){

    checkWeather(search.value);
}