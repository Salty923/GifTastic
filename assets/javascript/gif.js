// alert("connected");

var topics =["New Years","fishing","music"];


//// Api Key: AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x

$(document).ready(function () {

    //reset function to clear previously called gifs
    function reset(){
        $("#gif-view").empty();
    }

    //create button for html by looping through array
    function buttonDisplay(){
        $("#button-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("gifbutton btn btn-lg btn-primary");
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
        //clear input and show pladeholder
        document.getElementById("gif-form").reset();
    });
    


    //on click delegated to div as button is dynamic
    $("#button-view").on("click",".gifbutton", function () {
    
        reset();

        var topic = $(this).attr("data-name");
            
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topic + "&api_key=AmOqTbPtuhUYCwI707dfOP5Lby5BLU0x&limit=10&rating=pg";

            //Performing our AJAX GET request
            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function (response) {
                    //Storing an array of results in the results variable
                    var results = response.data;
                    console.log(results);

                for (var i = 0; i < results.length; i++) {
                        var div = $("<div class='topic'>");
                        var gifs = $("<img class='gifs'>");
                        var gifa = $("<img class='gifa'>");
                        //still state image
                        gifs.attr("src", results[i].images.fixed_height_still.url);
                        //animate state image
                        gifa.attr("src", results[i].images.fixed_height.url);
                        //add gif still to new div
                        div.append(gifs);
                        //add new div to html
                        $("#gif-view").append(div);  
                }

            })
     })
        buttonDisplay();


    //document ready closing
 });