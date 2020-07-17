function login_ev() {
  const login = document.getElementById("login-signup"),
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
function init() {
  login_ev();
}
init();
