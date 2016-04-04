function Place(country,city,landmark,time,note) {
  this.country = country;
  this.city = city;
  this.landmark = landmark;
  this.time = time;
  this.note = note;
}

function PlaceName(city,country) {
  this.city = city;
  this.country = country;

}

Place.prototype.fullName = function() {
  return this.city + ", " + this.country;
}


//user logic

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newCountry = $("input#new-country").val();
    var newCity = $("input#new-city").val();
    var newLandmark = $("input#new-landmark").val();
    var newTime = $("input#new-time").val();
    var newNote = $("input#new-note").val();
    var newPlace = new Place(newCountry, newCity, newLandmark, newTime, newNote);
    $("#show-places").show();
    $('#show-places h2').text(newPlace.fullName());
    $(".new-country").text(newPlace.country);
    $(".new-city").text(newPlace.city);
    $(".new-landmark").text(newPlace.landmark);
    $(".new-time").text(newPlace.time);
    $(".new-note").text(newPlace.note);





        // $("ul#places").append("<li>" + new + "</li>");
      });
//     var newPlaceName = new PlaceName(newCity, newCountry)
// console.log(newPlace);
//     debugger;
//  $("ul#places").append("<li><span class=''" + newPlaceName + "</li>");

 });

// });
