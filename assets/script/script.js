var cityname = $("#cityname");
var tempcity = $("#tempcity");
var humcity = $("#humcity");
var windspeed = $("#windsped");
var uvindex = $("#uvindex");
var savecity = $("#savecity");


//funtion to display the Daily Weather

function displaydailyweather() {

    var city = $("#entercity").value;

    var queryURL = "https://www.omdbapi.com/?t=" + city + "&apikey=trilogy";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {




    })
}

