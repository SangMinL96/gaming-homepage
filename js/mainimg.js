const imgbtt = document.getElementsByClassName("img_nav");
const imghover = document.getElementById("main_img-nav");

for (var i = 0; i < imgbtt.length; i++) {
  imgbtt[i].addEventListener("click", function (ev) {
    for (var z = 0; z < imgbtt.length; z++) {
      imgbtt[z].classList.remove("hover");
      ev.target.classList.add("hover");
      console.dir(ev.target);
    }
  });
}
imgbtt[0].addEventListener("click", function () {
  document.getElementById("main_img").style.backgroundImage =
    "url('img/blog-4.jpg')";
});
imgbtt[1].addEventListener("click", function () {
  document.getElementById("main_img").style.backgroundImage =
    "url('img/blog-5.jpg')";
});
imgbtt[2].addEventListener("click", function () {
  document.getElementById("main_img").style.backgroundImage =
    "url('img/blog-6.jpg')";
});
