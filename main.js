let btn = document.getElementById("btn-icon");
let uln = document.getElementById("uln");
let home = document.getElementById("home");

btn.addEventListener("click", function () {
  btn.classList.toggle("toggle-i");
  uln.classList.toggle("toggle");
});

home.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};

// start copy right date
const copyRight_date = document.querySelector(".copyRight_date");
const currentYear = new Date().getFullYear();
copyRight_date.textContent = currentYear;
// end copy right date
