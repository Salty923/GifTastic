// alert("connected");



var topics =["sports","fishing","music"];


//// Api Key: AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x

$(document).ready(function () {

    //create button for html by looping through array
    function buttonDisplay(){
        $("#button-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("gifbutton btn btn-primary");
            button.attr("data-name",topics[i]);
            button.text(topics[i]);
            $("#button-view").append(button);
            
        }
    }

    //input box add gif button
    $("#add-gif").on("click",function(event) {
        event.preventDefault();
        var gif = $("#gif-input").val();
        topics.push(gif); 
        buttonDisplay();
    });
    


    //on click delegated to div as button is dynamic
    $("#button-view").on("click",".gifbutton", function () {
        alert("clicked");
  
    var topic = $(this).attr("data-name");
        
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x&limit=10";

    //Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
            //Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
            console.log(topic);

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var div = $("<div class='topic'>");
                var gif = $("<img class='gif'>");
                gif.attr("src",results[i].images.fixed_height.url);
                div.append(gif);  
                $("#gif-view").append(div); 
                
            }
            
        }


    })
})
    buttonDisplay();


//document ready closing
});