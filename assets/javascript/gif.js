// alert("connected");



var topics =["sports","fishing","music"];


//// Api Key: AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x

$(document).ready(function () {

    $(".buttons").on("click", function () {
  
    var topic = $(this).attr("data-call");
        
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
            // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
            console.log(topic);

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var div = $("<div class='topic'>");
                var gif = $("<img class='gif'>");
                gif.attr("src",results[i].images.fixed_height.url);
                div.append(gif);  
                $(".gifs").append(div); 
                
            }
            
        }


    })
});













//document ready closing
});