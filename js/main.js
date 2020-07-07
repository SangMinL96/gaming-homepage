/*
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

function TredingPostsSlide() {
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
TredingPostsSlide();

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
*/

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

const form = document.querySelector(".js-form");
const input = document.querySelector(".formInput");
const toDoli = document.querySelector(".js-toDoList");
const todo = "todo";

function askForName() {
  form.addEventListener("submit", function hendlerSubmit(ev) {
    ev.preventDefault();
    const toToName = input.value;
    addName(toToName);
  });
}

const toDos = [];

function saveTodo() {
  localStorage.setItem(todo, JSON.stringify(toDos));
}

function addName(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  toDoli.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  const toDoObj = {
    text: text,
    Id: newId,
  };
  toDos.push(toDoObj);
  saveTodo();
}

function loadToDo() {
  const loadedToDos = localStorage.getItem(todo);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    for (var w = 0; w < parsedToDos.length; w++) {
      addName(parsedToDos[w].text);
    }
  }
}
function init() {
  loadToDo();
  askForName();
}
init();
/*
function hendlerSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintNaming(currentValue);
}

function askUserName() {
  form.classList.add(showingg);
  form.addEventListener("submit", hendlerSubmit);
}

function paintNaming(text) {
  form.classList.remove(showingg);
  naming.classList.add(showingg);
  naming.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askUserName();
  } else {
    paintNaming(currentUser);
  }
}
*/
