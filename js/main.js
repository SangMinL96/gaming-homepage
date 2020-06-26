function login_ev() {
  var login = document.getElementById("login-signup"),
    logWindow = document.getElementById("login"),
    logclose = document.getElementById("login_close");
  login.addEventListener("click", function () {
    logWindow.style.opacity = "1";
    logWindow.style.top = "10%";
  });

  logclose.addEventListener("click", function () {
    logWindow.style.opacity = "0";
    logWindow.style.top = "-100%";
  });
}
login_ev();

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

const imgbtt = document.getElementsByClassName("img_nav");
const imghover = document.getElementById("main_img-nav");

for (var i = 0; i < imgbtt.length; i++) {
  imgbtt[i].addEventListener("click", function (ev) {
    for (var z = 0; z < imgbtt.length; z++) {
      imgbtt[z].classList.remove("hover");
      ev.target.classList.add("hover");
    }
  });
}

add();
