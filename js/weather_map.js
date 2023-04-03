

// IFEE FUNCTION
(function (){



    var html = "";
//     OPEN WEATHER API CALL
    $.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + WEATHER_MAP_KEY, {
        // APPID: "WEATHER_MAP_KEY",
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function(weatherData) {
        console.log(weatherData);
        // console.log(data.list);
        // console.log(data.list[0]);
        for (let i = 0; i <= 39; i+=8) {
            console.log(weatherData.list[i])

            html += "<div class='card row' style= 'width: 18rem;'>"
                html += "<div class='card-body col'>"
                    html += "<h5 class='card-title'>" + "Date: " + weatherData.list[i].dt_txt + "</h5>"
                    html += "<p class='card-text'>" + "High: " + weatherData.list[i].main.temp_max + "<br>" + "Low: " + weatherData.list[i].main.temp_min + "</p>"
                    html += "<img className='card-img-top' src='http://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon +".png' alt='Card image cap'>"
                    html += "<p class='card-text'>" + "Description: " + weatherData.list[i].weather[0].description + "</p>"
                    html += "<p class='card-title'>" + "Humidity: " + weatherData.list[i].main.humidity + "</p>"
                    html += "<p class='card-title'>" + "Wind: " + weatherData.list[i].wind.speed + "</p>"
                    html += "<p class='card-title'>" + "Pressure: " + weatherData.list[i].main.pressure + "</p>"
                html += "</div>"
            html += "</div>"
        }
        $('#weather-card').html(html);
    })



})();