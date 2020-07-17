function TredingPosts() {
  var slideContainer = document.getElementsByClassName("TREDING-POSTS");
  var slidewin = document.getElementsByClassName("slide_box");
  var slideRight = document.getElementById("POST_right");
  var slideLeft = document.getElementById("POST_left");
  var currentIndex = 0;

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
}
TredingPosts();

function PreviewSlide() {
  var slideContainer = document.getElementById("TREDING_silde-container");
  var slidewin = document.getElementsByClassName("TREDING_silde-list");
  var slideRight = document.getElementById("TREDING_right");
  var slideLeft = document.getElementById("TREDING_left");
  var currentIndex = 0;

  function goToSlide(idx) {
    slideContainer.style.left = idx * -25 + "%";
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
    if (currentIndex == slidewin.length - 4) {
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
}
PreviewSlide();
