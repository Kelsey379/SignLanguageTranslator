let currentSlide = 0;
let slides = document.getElementsByClassName("slide")

function moveSlide() {
    currentSlide++
    if (currentSlide == slides.length){
        currentSlide = 0
    }

    for (let i=0; i<slides.length; i++){
        if(i != currentSlide){
            slides[i].style.display = "none";
        }
        else{
            
            slides[i].style.display = "block";

        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    slides[0].style.display = "block";
  })