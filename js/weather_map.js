
// ***** WEATHER CARD DATA FUNCTION *****
function weatherCardData(lng, lat) {
    // CREATES AN EMPTY HTML STRING
    let html = "";
    // OPEN WEATHER GET REQUEST WITH lat AND lng REFERENCING weatherCardData FUNCTION PARAMETERS
    $.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + WEATHER_MAP_KEY, {
        units: "imperial"
    // RETRIEVES DATA(weatherData) FROM GET REQUEST
    }).done(function (weatherData) {
        // console.log(weatherData);

        // APPENDING CITY NAME TO <DIV> TAG INT HTML FILE WITH AN ID OF cityName
        $('#cityName').html("<h1>" + "Today's weather in " + weatherData.city.name + "</h1>");
        // console.log(data.list);
        // console.log(data.list[0]);

        // LOOPING THROUGH weatherData AND RETRIEVING THE DATA REQUIRED BY ME TO POPULATE MY WEATHER CARDS
        // AND THEM TO MY EMPTY HTML STRING (LINE 5)
        for (let i = 0; i <= 39; i += 8) {
            // console.log(weatherData.list[i])
            // CONVERTING OPEN WEATHER GIVEN DATE/TIME FORMAT TO A MORE HUMAN READABLE FORMAT
            const date = new Date(weatherData.list[i].dt_txt).toDateString();
            // console.log(date);

            //CREATING WEATHER CARDS WITH DATA(weatherData) RETRIEVED FROM MY GET REQUEST
            html += "<div class='card' style= 'width: 18rem;'>"
            html += "<div class='card-body mx-auto'>"
            html += "<h5 class='card-title'>" + date + "</h5>"
            html += "<p class='card-text'>" + "High: " + weatherData.list[i].main.temp_max + "<br>" + "Low: " + weatherData.list[i].main.temp_min + "</p>"
            html += "<img className='card-img-top' style='width 100% height: auto' src='http://openweathermap.org/img/wn/" + weatherData.list[i].weather[0].icon + "@2x.png' alt='Card image cap'>"
            html += "<p class='card-text'>" + "Description: " + weatherData.list[i].weather[0].description + "</p>"
            html += "<p class='card-title'>" + "Humidity: " + weatherData.list[i].main.humidity + "</p>"
            html += "<p class='card-title'>" + "Wind: " + weatherData.list[i].wind.speed + "</p>"
            html += "<p class='card-title'>" + "Pressure: " + weatherData.list[i].main.pressure + "</p>"
            html += "</div>"
            html += "</div>"

        }
        // POPULATING <DIV> WITH AN ID OF weather-card WITH WEATHER CARDS BEING CRATED ABOVE
        $('#weather-card').html(html);
    })
}
