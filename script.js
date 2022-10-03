let slidePosition = 0;
let slidePosition1=1;
let slides = document.getElementsByClassName('carousel__item');
let totalSlides = slides.length;
console.log("running");
// console.log(slides);
console.log(slides.length);
setInterval(moveToNextSlide, 2500);
document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    console.log("clicked");
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
  slides[slidePosition1].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  }
  else if(slidePosition1===totalSlides-1){
    slidePosition1=0;
  }

  else {
    slidePosition++;
    slidePosition1++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  }
  else if(slidePosition1 === 0){
    slidePosition1 = totalSlides - 1;
  }
  else {
    slidePosition--;
    slidePosition1--;
  }

  updateSlidePosition();
}

let temps=document.getElementsByClassName('ham-links');
let x=0;

document.getElementById('ham').addEventListener("click",function(){
  if(x===1) x=0;
  else x=1;
  console.log("hi");
  toggle();
});

function toggle(){
  if(x===1)
  for (let temp of temps) {
    temp.classList.add('ham-links-show');
  }

  else
  for (let temp of temps) {
    temp.classList.remove('ham-links-show');
  }
}
// temp.classList.add('ham-links-show');
