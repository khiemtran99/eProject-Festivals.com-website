// JavaScript Document
//1. Countdown Function
function setTimer(elem_id, date) {
// set the date we're counting down to
    var target_date = new Date(date).getTime();
    // variables for time units
    var days, hours, minutes, seconds;
    // get tag element

    var countDownElem = document.getElementById(elem_id);
    //update the tag with id "countdown" every 1 second
    setInterval(function () {
       // find the amount of "seconds" between now and target
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;
      // do some time calculations
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;
      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;
      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);
      // format countdown string + set tag value
      countDownElem.innerHTML = days + "D : " + hours + "H : " + minutes + "M : " + seconds + "S";
    }, 1000);
   }
setTimer("count1","May 30, 2019");
setTimer("count2","May 31, 2019");
setTimer("count3","June 02, 2019");
setTimer("count4","June 03, 2019");
setTimer("down1","May 30, 2019");
setTimer("down2","June 09, 2019");
setTimer("down3","June 15, 2019");
setTimer("down4","June 16, 2019");
setTimer("down5","June 03, 2019");
setTimer("down6","June 04, 2019");
setTimer("down7","June 16, 2019");
setTimer("down8","Aug 05, 2019");
setTimer("down9","May 31, 2019");
setTimer("down10","June 04, 2019");
setTimer("down11","Aug 10, 2019");
setTimer("down12","Aug 11, 2019");
setTimer("down13","May 31, 2019");
// 2. Search function
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//page content 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}