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
