document.querySelector("#aboutMeBtn").addEventListener("click", function () {
  const description = document.querySelector("#aboutMe");
  const btnText = document.querySelector("#aboutMeP");
  const btnArrow = document.querySelector("#aboutMeArrow");
  mutateDescription(description, btnText, btnArrow);
});

function mutateDescription(description, btnText, btnArrow) {
  description.classList.toggle("closedDescription");
  btnArrow.classList.toggle("rotate180");
  if (description.classList.contains("closedDescription")) {
    btnText.textContent = "Ver Mas";
  } else {
    btnText.textContent = "Ver Menos";
  }
}
