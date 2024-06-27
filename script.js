const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');

search.addEventListener('click',() =>{
    const APIKey='385b4eaed525e0979dff5b98c4ef862f';
    const city=document.querySelector('.search-box input').value;

    if(city=='')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => { 
        
        
        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box img.description');
        const humidity=document.querySelector('.weather-details .humidity span');
        const wind=document.querySelector('..weather-details .wind span');
    })

})
