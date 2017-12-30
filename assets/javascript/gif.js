// alert("connected");



var topics =["sports","fishing","music"];


//// Api Key: AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x

$(document).ready(function () {

    function buttonDisplay(){
        $(".buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("gifbutton");
            button.attr("data-name",topics[i]);
            button.text(topics[i]);
            $(".buttons").append(button);
            
        }
    }

    $("#add-gif").on("click",function(event) {
        event.preventDefault();
        var submitted = $("#giff-add").val();
        topics.push(submitted); 
        buttonDisplay();
    });
    


    // $(".buttons").on("click", function () {
  
    // var topic = $(this).attr("data-call");
        
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     topic + "&api_key=AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x&limit=10";

    // Performing our AJAX GET request
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).done(function (response) {
            // Storing an array of results in the results variable
    //         var results = response.data;
    //         console.log(results);
    //         console.log(topic);

    //     for (var i = 0; i < results.length; i++) {
    //         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    //             var div = $("<div class='topic'>");
    //             var gif = $("<img class='gif'>");
    //             gif.attr("src",results[i].images.fixed_height.url);
    //             div.append(gif);  
    //             $(".gifs").append(div); 
                
    //         }
            
    //     }


    // })
    buttonDisplay();














//document ready closing
});