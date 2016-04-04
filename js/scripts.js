function place(country,city,landmark,time,note) {
  this.country = country;
  this.city = city;
  this.landmark = landmark;
  this.time = time;
  this.note = note;
}

place.prototype.fullName = function() {
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
    var newPlace = new place(newCountry,newCity, newLandmark, newTime, newNote, newPlace);
    console.log(newPlace);


    $("ul#places").append("<li><span class='Place'>" + newPlace + "</span></li>");
  });
});
