/* JavaScript codes for:
   (1) count to event dates,
   (2) search bar
   (3) photo selection in festival sub-pages.
*/
/*************************************************/

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
/*festival-sub*/
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
setTimer("down14","Jun 3, 2019");
setTimer("down15","Jul 01, 2019");
setTimer("down16","Jul 09, 2019");
setTimer("down17","Jul 15, 2019");
setTimer("down18","Jun 3, 2019");
setTimer("down19","Jul 09, 2019");

/*buddhist*/
setTimer("bdown1","Jan 21, 2020");
setTimer("bdown2","Feb 05, 2020");
setTimer("bdown3","Feb 08, 2020");
setTimer("bdown4","Mar 21, 2020");
setTimer("bdown5","Apr 19, 2020");
setTimer("bdown6","May 18, 2020");
setTimer("bdown7","Jul 13, 2019");
setTimer("bdown8","Jul 16, 2019");
setTimer("bdown9","Dec 08, 2019");
setTimer("bdown10","Jul 16, 2019");
setTimer("bdown11","Dec 08, 2019");
setTimer("bdown12","Feb 25, 2020");
setTimer("bdown13","Mar 21, 2020");
setTimer("bdown14","Jan 21, 2020");
setTimer("bdown15","Feb 08, 2020");

/*Jewish*/
setTimer("jdown1","Jun 02, 2019");
setTimer("jdown2","June 09, 2019");
setTimer("jdown3","Jun 10, 2019");
setTimer("jdown4","Aug 11, 2019");
setTimer("jdown5","Sep 09, 2019");
setTimer("jdown6","June 04, 2019");
setTimer("jdown7","June 16, 2019");
setTimer("jdown8","Aug 05, 2019");
setTimer("jdown9","May 31, 2019");
setTimer("jdown10","June 04, 2019");
setTimer("jdown11","Aug 10, 2019");
setTimer("jdown12","Aug 11, 2020");
setTimer("jdown13","May 31, 2020");
setTimer("jdown14","Jun 3, 2020");
setTimer("jdown15","Jul 01, 2020");
setTimer("jdown16","Jul 09, 2020");
setTimer("jdown17","Jul 15, 2020");
setTimer("jdown18","Jun 3, 2020");
setTimer("jdown19","Jul 09, 2020");

/*islamic*/
setTimer("idown1","Sep 09, 2019");
setTimer("idown2","Aug 11, 2019");
setTimer("idown3","June 04, 2019");
setTimer("idown4","Aug 31, 2019");
setTimer("idown5","Apr 20, 2019");
setTimer("idown6","Apr 03, 2019");
setTimer("idown7","Nov 09, 2019");
setTimer("idown8","Aug 05, 2019");
setTimer("idown9","Aug 10, 2019");

/*jain*/
setTimer("jadown1","Jul 09, 2019");
setTimer("jadown2","Jul 15, 2019");
setTimer("jadown3","Oct 05, 2019");
setTimer("jadown4","Apr 19, 2019");
setTimer("jadown5","Oct 29, 2019");
setTimer("jadown6","Nov 03, 2019");
setTimer("jadown7","Nov 11, 2019");
setTimer("jadown8","Nov 01, 2019");
setTimer("jadown9","Oct 27, 2019");
setTimer("jadown10","Apr 17, 2019");
setTimer("jadown11","May 14, 2019");
setTimer("jadown12","Feb 02, 2019");
setTimer("jadown13","Aug 27, 2019");
setTimer("jadown14","Mar 13, 2019");
setTimer("jadown15","Mar 20, 2019");
setTimer("jadown16","Sep 03, 2019");
setTimer("jadown17","Mar 21, 2019");
setTimer("jadown18","May 07, 2019");

/*jewish*/
setTimer("jedown1","Jun 02, 2019");
setTimer("jedown2","June 09, 2019");
setTimer("jedown3","Jun 10, 2019");
setTimer("jedown4","Aug 11, 2019");
setTimer("jedown5","Oct 02, 2019");
setTimer("jedown6","June 04, 2019");
setTimer("jedown7","June 16, 2019");
setTimer("jedown8","Aug 05, 2019");
setTimer("jedown9","May 31, 2019");
setTimer("jedown10","June 04, 2019");
setTimer("jedown11","Aug 10, 2019");
setTimer("jedown12","Aug 11, 2019");
setTimer("jedown13","May 31, 2019");
setTimer("jedown14","Jun 3, 2019");
setTimer("jedown15","Jul 01, 2019");
setTimer("jedown16","Jul 09, 2019");
setTimer("jedown17","Jul 15, 2019");
setTimer("jedown18","Jun 3, 2019");
setTimer("jedown19","May 31, 2019");
setTimer("jedown20","June 04, 2019");
setTimer("jedown21","Aug 10, 2019");

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

// (3) photo selection in festival sub-pages.
/*image liveshow*/
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
