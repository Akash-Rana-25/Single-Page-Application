let slide = 1;
showSlides(slide);


function next(n) {
  showSlides(slide += n);
}

function display(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slide-1].style.display = "block";
}

function myFunction(content) {
 document.getElementById(content).scrollIntoView(); 
}