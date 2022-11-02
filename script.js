
// window.onload=defaultcity();
// function defaultcity({

    
    
// })

let submit =document.getElementById("submit");
let temp = document.getElementById("temp");
let search = document.getElementById("search");
let city=document.getElementById("city");
let clouds=document.getElementById("clouds");
let conditions=document.getElementById("conditions");
let description=document.getElementById("description");
let mintemp = document.getElementById("mintemp");
let maxtemp = document.getElementById("maxtemp");
let pressure = document.getElementById("pressure");
let windspeed = document.getElementById("windspeed");
let humidity=document.getElementById("humidity");
let uvindex = document.getElementById("uvindex");


let date1=document.getElementById("date1");
let date2=document.getElementById("date2");
let date3=document.getElementById("date3");
let date4=document.getElementById("date4");
let date5=document.getElementById("date5");
let date6=document.getElementById("date6");
let date7=document.getElementById("date7");


let desc1=document.getElementById("desc1");
let desc2=document.getElementById("desc2");
let desc3=document.getElementById("desc3");
let desc4=document.getElementById("desc4");
let desc5=document.getElementById("desc5");
let desc6=document.getElementById("desc6");
let desc7=document.getElementById("desc7");
let mainimg=document.getElementById("mainimg");










let forecastday1maxtemp=document.getElementById("forecastday1maxtemp");
let forecastday2maxtemp=document.getElementById("forecastday2maxtemp");
let forecastday3maxtemp=document.getElementById("forecastday3maxtemp");
let forecastday4maxtemp=document.getElementById("forecastday4maxtemp");
let forecastday5maxtemp=document.getElementById("forecastday5maxtemp");
let forecastday6maxtemp=document.getElementById("forecastday6maxtemp");
let forecastday7maxtemp=document.getElementById("forecastday7maxtemp");



let forecastday1mintemp=document.getElementById("forecastday1mintemp");
let forecastday2mintemp=document.getElementById("forecastday2mintemp");
let forecastday3mintemp=document.getElementById("forecastday3mintemp");
let forecastday4mintemp=document.getElementById("forecastday4mintemp");
let forecastday5mintemp=document.getElementById("forecastday5mintemp");
let forecastday6mintemp=document.getElementById("forecastday6mintemp");
let forecastday7mintemp=document.getElementById("forecastday7mintemp");















console.log(submit);
// let img = document.getElementById("img");

// let value='';
submit.addEventListener("click",(e)=>{
    let value = search.value;
    e.preventDefault();    
console.log("clicked")  ;  

let link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+value+'?unitGroup=metric&include=days&key=GBCBEUJ9TCBS4NKGE322NBP4S&contentType=json';
console.log(link)

fetch(link, {
  "method": "GET",
  "headers": {
  }
  })
.then(response => response.json())
// console.log(response)
.then((data)=>{
    let diffimg = data.days[0].conditions;
    if(diffimg==="Clear"){
        mainimg.src="https://bit.ly/3eOKNSS";
    }
    else if(diffimg==="Partially cloudy"){
        mainimg.src="https://cdn-icons-png.flaticon.com/512/252/252035.png";
    }
    else if (diffimg==="Rain"){
        mainimg.src="https://bit.ly/3eVDGrJ";
    }
    else if (diffimg==="Rain, Partially cloudy"){
        mainimg.src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG.png";
    }
    temp.innerHTML=data.days[0].temp;
    city.innerHTML=data.address;
    clouds.innerHTML=data.days[0].conditions;
    conditions.innerHTML=data.days[0].conditions;
    description.innerHTML=data.days[0].description;
    windspeed.innerHTML=data.days[0].windspeed;
    mintemp.innerHTML=data.days[0].tempmin;
    maxtemp.innerHTML=data.days[0].tempmax;
    uvindex.innerHTML=data.days[0].uvindex;
    pressure.innerHTML=data.days[0].pressure;
    humidity.innerHTML=data.days[0].humidity;
    forecastday1maxtemp.innerHTML=data.days[1].tempmax;
    forecastday1mintemp.innerHTML=data.days[1].tempmin;
    forecastday2maxtemp.innerHTML=data.days[2].tempmax;
    forecastday2mintemp.innerHTML=data.days[2].tempmin;
    forecastday3maxtemp.innerHTML=data.days[3].tempmax;
    forecastday3mintemp.innerHTML=data.days[3].tempmin;
    forecastday4maxtemp.innerHTML=data.days[4].tempmax;
    forecastday4mintemp.innerHTML=data.days[4].tempmin;
    forecastday5maxtemp.innerHTML=data.days[5].tempmax;
    forecastday5mintemp.innerHTML=data.days[5].tempmin;
    forecastday6maxtemp.innerHTML=data.days[6].tempmax;
    forecastday6mintemp.innerHTML=data.days[6].tempmin;
    forecastday7maxtemp.innerHTML=data.days[7].tempmax;
    forecastday7mintemp.innerHTML=data.days[7].tempmin;
    date1.innerHTML=data.days[1].datetime;
    date2.innerHTML=data.days[2].datetime;
    date3.innerHTML=data.days[3].datetime;
    date4.innerHTML=data.days[4].datetime;
    date5.innerHTML=data.days[5].datetime;
    date6.innerHTML=data.days[6].datetime;
    date7.innerHTML=data.days[7].datetime;

    desc1.innerHTML=data.days[1].conditions;
    desc2.innerHTML=data.days[2].conditions;
    desc3.innerHTML=data.days[3].conditions;
    desc4.innerHTML=data.days[4].conditions;
    desc5.innerHTML=data.days[5].conditions;
    desc6.innerHTML=data.days[6].conditions;
    desc7.innerHTML=data.days[7].conditions;

    console.log(date)
    // date.innerText=data.days[1].datetime;
    // date.innerHTML=data.days[2].datetime;
    // date.innerHTML=data.days[3].datetime;
    // date.innerHTML=data.days[4].datetime;
    // date.innerHTML=data.days[5].datetime;
    // date.innerHTML=data.days[6].datetime;
    // date.innerHTML=data.days[7].datetime;

    
    console.log(data);
})
.catch(err => {
  console.error(err);
});

})


