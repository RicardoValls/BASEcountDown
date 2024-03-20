// Set the date we're counting down to
var releaseDate = new Date("Apr 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
var refresh = setInterval(function baseCountDown() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let timeLeft = releaseDate - now;

  //Check if the date has expired
  if (timeLeft < 0) {
    clearInterval(refresh);
    document.getElementById("countMessage").innerHTML = "<div class='col-12 rounded p-1 p-md-3 mx-1 bg-black'>Stay tunned for news!</div>";
  }  else {
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="countDown"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    }
}, 1000);
