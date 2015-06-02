function Ticket(movieName, movieNewRelease, age, timeOfDay) {
    this.movieName = movieName;
    this.movieNewRelease = movieNewRelease;
    this.age = age;
    this.timeOfDay = timeOfDay;
    this.ticketPrice = function() {
    var totalPrice= 8.00;
        if(age <= 12 || age >= 65) {
            totalPrice -= 2.00;
        }
        if(movieNewRelease === false) {
            totalPrice -= 1.00;
        }
        if(timeOfDay <= 1700) {
            totalPrice -= 2.00;
        }

        return totalPrice;
    }
}


$(document).ready(function(){
  $("form#new-movie").submit(function(event){
    event.preventDefault();

    var movieName = $('input[name="movie-choices"]:checked').val();
    alert(movieName);

  });

  $("form#new-times").submit(function(event){
    event.preventDefault();

    var TimeOfDay = $('input[name="time-choices"]:checked').val();
    alert(TimeOfDay);

  });

  $("form#new-ages").submit(function(event){
    event.preventDefault();

    var age = parseInt($("input.ages").val());
    alert(age);

  });

  $("form#movie-special").submit(function(event){
    event.preventDefault();

    var movieSpecial = $('input[name="movie-type"]:checked').val();
    alert(movieSpecial);

  });

});
