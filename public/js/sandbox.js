const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// model


// Get the modal


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

// var img = document.getElementById("myImg");
// var dnBtn = document.querySelectorAll('a.donateNow-btn');




var donateNowSection = document.querySelector('div.donateNowSec');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// dnBtn.onclick = function () {
//     // modal.style.display = "block";
//     // modalImg.src = this.src;
//     // captionText.innerHTML = this.alt;
//     console.log('clicked on btn')
// }

donateNowSection.addEventListener('click', (e) => {

  if (e.target.classList.contains('donateNow-btn')) {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = "block";
  }
  console.log('event captured');
  console.log(e.target.classList.contains('donateNow-btn'));
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-donatenow")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}



// Gallery Sandbox

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}




// Copy Account details


function copy2clpbd(element) {
  
  let copyTxt = document.querySelector(`${element}`);
  navigator.clipboard.writeText(copyTxt.textContent);

}