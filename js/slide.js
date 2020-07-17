const slideContainer = document.getElementsByClassName("TREDING-POSTS");
const slidewin = document.getElementsByClassName("slide_box");
const slideRight = document.getElementById("POST_right");
const slideLeft = document.getElementById("POST_left");
let currentIndex = 0;

function goToSlide(idx) {
  slideContainer[0].style.left = idx * -100 + "%";
  currentIndex = idx;
  updateBtt();
}

slideRight.addEventListener("click", function () {
  goToSlide(currentIndex + 1);
});
slideLeft.addEventListener("click", function () {
  goToSlide(currentIndex - 1);
});

function updateBtt() {
  if (currentIndex == slidewin.length - 1) {
    slideRight.classList.add("disabled");
  } else {
    slideRight.classList.remove("disabled");
  }

  if (currentIndex == 0) {
    slideLeft.classList.add("disabled");
  } else {
    slideLeft.classList.remove("disabled");
  }
}
goToSlide(0);
