
var apiKey = "&api_key=W6tKfO9fAxQyTk238cVwxFP7ieO8fOLF&limit=10";
var giphyButtons = ["Jerry Seinfeld", "Brian Regan", "Rodney Dangerfield", "Whitney Cummings", "George W Bush", "Tim Allen", "Johnny Knoxville", "Steve Martin"];

function buttonDisplay() {
  $("#buttons").empty()
  // for loop through your array of buttons
  for (i = 0; i < giphyButtons.length; i++) {
    $("#buttons").append("<button id='gifButton'>" + giphyButtons[i]+ "</button>")
  }
}
buttonDisplay();

$("#buttons").on("click", "#gifButton", function() {
  $("#giphys-view").empty();
  var person = $(this).attr("data-person");
  var imageType = $(this).text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + imageType + apiKey + "&rating=pg";
// main function to for working buttons 

// function for pulling pictures when button is clicked
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
      console.log(response);

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");
        
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var personImage = $("<img id='gifImg'>");
          personImage.attr("src", results[i].images.fixed_width_still.url);
        // insert data attributes here for still and animate
            personImage.attr("data-still", results[i].images.fixed_width_still.url);
            personImage.attr("data-animate", results[i].images.fixed_width.url);
            personImage.attr("data-state", "still");
            
            gifDiv.append(p);
            gifDiv.append(personImage);
        // prepending newly made div to the HTML page, and going to the next one.
        $("#giphys-view").prepend(gifDiv);
      }

     
    });
  });
$("#giphys-view").on("click", "#gifImg", function() {
     console.log("img clicked");
        var state = $(this).attr("data-state");
            console.log(state);
    
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
      });  
  // function that is on click the submit button
    $("#add-giphy").on("click", function(event) {
      event.preventDefault();
      var newButtonText = $("#giphy-input").val();
      console.log(newButtonText);
      giphyButtons.push(newButtonText)
      buttonDisplay(); 
    })
    // add info from the form userInput to the giphyArray