$("button").on("click", function() {
  var person = $(this).attr("data-person");
  var apiKey = "&api_key=W6tKfO9fAxQyTk238cVwxFP7ieO8fOLF&limit=10";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + apiKey + "&rating=pg";

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
        var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);
        
            gifDiv.append(p);
            gifDiv.append(personImage);

        // $("#giphys-view").empty();
        $("#giphys-view").prepend(gifDiv);
      }
    });
  });
    var giphyButtons = [""];

    function renderButtons() {
      for (i = 0; i < giphyButtons.length; i++) {
          console.log(giphyButtons[i]);
          $("#buttons").append("<button> " + giphyButtons[i] + "</button>");
      
      $("#add-giphy").on("click", function(event) {
        event.preventDefault();

        var userInput = $("#giphy-input").val().trim();
          console.log(userInput);
          giphyButtons.push(userInput);
          renderButtons();
});
}}
renderButtons();

  $("<img>").on("click", function() {
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



// // Initial array 
// var giphys = ["giphy0", "giphy1", "giphy2", "giphy3"];
            
// // Function for displaying movie data
// function renderButtons() {

// // Delete the content inside the giphys-view div prior to adding new giphys
//   $("#giphys-view").empty();

//   // Loop through the array, then generate buttons for each item in the array
//   for (i = 0; i < results.length; i++) {
//   console.log(giphys[i]);
//   $("#giphys-view").append("<button> " + giphys[i] + "</button> ");
//     }}

// // This function handles events where the add giphy button is clicked

// $("#add-giphy").on("click", function(event) {

//   // event.preventDefault() prevents submit button from trying to send a form.
//   // Using a submit button instead of a regular button allows the user to hit
//   // "Enter" instead of clicking the button if desired

//   event.preventDefault();

//   // Write code to grab the text the user types into the input field
//   // Write code to add the new movie into the giphys array

//   var userInput = $("#giphy-input").val();
//     console.log(userInput);
//     giphys.push(userInput);

//   // The renderButtons function is called, rendering the list of giphy buttons
//   renderButtons();
// });

// // Calling the renderButtons function to display the initial list of gipys
// renderButtons();
