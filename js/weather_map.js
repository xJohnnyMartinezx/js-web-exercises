

// IFEE FUNCTION
// (function (){


// function getWeatherForecast(lng, lat) {
// //     OPEN WEATHER API CALL
//     $.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + WEATHER_MAP_KEY, {
//         // APPID: "WEATHER_MAP_KEY",
//         // q:     "San Antonio, US",
//         units: "imperial"
//     }).done(function (weatherLocData) {
//         console.log(weatherLocData);
//         console.log(weatherLocData.name)
//         console.log(weatherLocData.sys.id)
//
//         weatherCardData(weatherLocData.sys.id);
//
//     })
// }



function weatherCardData(lng, lat) {

    let html = "";

    $.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + WEATHER_MAP_KEY, {
        // APPID: "WEATHER_MAP_KEY",
        units: "imperial"
    }).done(function (weatherData) {
        console.log(weatherData);

        $('#cityName').html("<h1>" + "Today's weather in " + weatherData.city.name + "</h1>");


        // console.log(data.list);
        // console.log(data.list[0]);
        for (let i = 0; i <= 39; i += 8) {
            console.log(weatherData.list[i])

            html += "<div class='card' style= 'width: 18rem;'>"
            html += "<div class='card-body mx-auto'>"
            html += "<h5 class='card-title'>" + "Date: " + weatherData.list[i].dt_txt + "</h5>"
            html += "<p class='card-text'>" + "High: " + weatherData.list[i].main.temp_max + "<br>" + "Low: " + weatherData.list[i].main.temp_min + "</p>"
            html += "<img className='card-img-top' style='width 100% height: auto' src='http://openweathermap.org/img/wn/" + weatherData.list[i].weather[0].icon + "@2x.png' alt='Card image cap'>"
            html += "<p class='card-text'>" + "Description: " + weatherData.list[i].weather[0].description + "</p>"
            html += "<p class='card-title'>" + "Humidity: " + weatherData.list[i].main.humidity + "</p>"
            html += "<p class='card-title'>" + "Wind: " + weatherData.list[i].wind.speed + "</p>"
            html += "<p class='card-title'>" + "Pressure: " + weatherData.list[i].main.pressure + "</p>"
            html += "</div>"
            html += "</div>"

        }
        $('#weather-card').html(html);
    })
}

// })();