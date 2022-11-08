const body = document.body;
const btn = document.querySelector("#btn");
const btnClose = document.querySelector("#btn_close");
const modal = document.querySelector("#modal");

btn.addEventListener("click", btnHandler);
btnClose.addEventListener("click", btnCloseHandler);

function btnHandler(e) {
  e.preventDefault();
  body.classList.add("lock");
  modal.classList.add("modal--open");
}

function btnCloseHandler(e) {
  e.preventDefault();
  body.classList.remove("lock");
  modal.classList.remove("modal--open");
}

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    body.classList.remove("lock");
    modal.classList.remove("modal--open");
  }
});
