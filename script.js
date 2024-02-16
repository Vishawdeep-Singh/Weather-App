const apiKey = "84e7a8b62f03ccc65768ea1492c8d4b2";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apiUrl1="https://api.openweathermap.org/data/2.5/forecast?&units=metric&q="

async function checkWeather(city){
    const response  =  await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status==404) {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather-card").style.display="none";
    }
    let data = await response.json();
    let heading  = document.querySelector(".location");
heading.innerHTML= data.name;
document.querySelector(".temperature").innerHTML= Math.round(data.main.temp)+"°C";
let desc=document.querySelector(".description");
desc.innerHTML=data.weather[0].main;
let img=document.querySelector("img");
if(desc.innerHTML=="Clouds"){
img.setAttribute("src","clouds.png");
}
else if(desc.innerHTML=="Clear"){
    img.setAttribute("src","clear.png");
}
else if(desc.innerHTML=="Drizzle"){
    img.setAttribute("src","drizzle.png");
}
else if(desc.innerHTML=="Mist"){
    img.setAttribute("src","mist.png");
}
else if(desc.innerHTML=="Rain"){
    img.setAttribute("src","rain.png");
}
else if(desc.innerHTML=="Snow"){
    img.setAttribute("src","snow.png");
}

document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
document.querySelector(".visi").innerHTML=data.visibility+"m";
document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".weather-card").style.display="block";


}

async function checkForecast(city){
    const response  =  await fetch(apiUrl1 + city + `&appid=${apiKey}`);
    let data = await response.json();
   console.log(data);
   
    let j=8;
       for (let i = 1; i <= 4; i++) {
        let temp = document.querySelector(".temperature"+i);
        temp.innerHTML=Math.round(data.list[j].main.temp)+"°C";
        let desc = document.querySelector(".description"+i);
        desc.innerHTML=(data.list[j].weather[0].main);
        let img = document.querySelector(".weatherimg"+i);
        if(desc.innerHTML=="Clouds"){
            img.setAttribute("src","clouds.png");
            }
            else if(desc.innerHTML=="Clear"){
                img.setAttribute("src","clear.png");
            }
            else if(desc.innerHTML=="Drizzle"){
                img.setAttribute("src","drizzle.png");
            }
            else if(desc.innerHTML=="Mist"){
                img.setAttribute("src","mist.png");
            }
            else if(desc.innerHTML=="Rain"){
                img.setAttribute("src","rain.png");
            }
            else if(desc.innerHTML=="Snow"){
                img.setAttribute("src","snow.png");
            }
            document.querySelector(".wind"+i).innerHTML=data.list[j].wind.speed+"km/h";
document.querySelector(".visi"+i).innerHTML=data.list[j].visibility+"m";
document.querySelector(".Humidity"+i).innerHTML=data.list[j].main.humidity+"%";
        j=j+8;
        
        
       }
       document.querySelector(".forecast-card").style.display="flex";
       
    

}

let search = document.querySelector("#searchbar");
let btn = document.querySelector(".searchbtn");
 btn.addEventListener("click", async ()=>{
   await checkWeather(search.value);
    checkForecast(search.value);
 })



