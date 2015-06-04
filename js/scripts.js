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

    var timeOfDay = $('input[name="time-choices"]:checked').val();

    var age = parseInt($("input.ages").val());

    var movieSpecial = $('input[name="movie-type"]:checked').val();

    var newTicket = new Ticket(movieName, movieSpecial, age, timeOfDay);

    $(".movie-name").append("<span>" + newTicket.movieName + "</span>");
    $(".movie-times").append("<span>" + newTicket.timeOfDay + "</span>");
    $(".user-age").append("<span>" + newTicket.age + "</span>");
    $(".ticket-price").append("<span> $" + newTicket.ticketPrice() + "</span>");
  });

});
