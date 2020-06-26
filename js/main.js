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
/*
slideRight.addEventListener("click", function () {
  for (var i = 1; i < slidewin.length - 1; i++) {
    slideContainer[0].style.left = i * -100 + "%";
  }
});




 for (var i = 1; i < slidewin.length - 1; i++) {
    slideContainer.style.left = i * -100 + "%";
  }
            var mhover=document.getElementById("mhover");
           var mover=document.getElementById("mover");
           mhover.addEventListener("mouseover", function(){
           mover.style.display='block';
           mover.classList.add('ani');

           })


           var mhover=document.getElementById("mhover");
           var mover=document.getElementById("mover");
           var nav_header=document.getElementById("nav_header");
           function goto(){

            mover.style.opacity='1';
            mover.classList.add('ani');

           }
           mhover.addEventListener('mouseover',function(){
           goto();
           }
           */
