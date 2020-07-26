const PV_slideContainer = document.getElementById("TREDING_silde-container");
const PV_nav = document.querySelectorAll(".TREDING_nav .TREDING_nav-list");

function onChack() {
  PV_nav.forEach((eee) => {
    eee.addEventListener("click", (ev) => {
      PV_nav.forEach((eee) => {
        eee.classList.remove("active");
        ev.target.classList.add("active");
        goToChack(ev.target.id);
      });
    });
  });
}
function goToChack(id) {
  PV_slideContainer.style.left = id * -25 + "%";
}

/*
function onChack() {
  for (let a = 0; a < PV_nav.length; a++) {
    PV_nav[a].addEventListener("click", (ev) => {
      for (let z = 0; z < PV_nav.length; z++) {
        PV_nav[z].classList.remove("active");
        ev.target.classList.add("active");
        goToChack(ev.target.id);
      }
    });
  }

function goToChack(id) {
  PV_slideContainer.style.left = id * -25 + "%";
}
*/
function init() {
  onChack();
}
init();
