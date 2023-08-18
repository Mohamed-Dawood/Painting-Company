let btn = document.getElementById("btn-icon");
let uln = document.getElementById("uln");
let home = document.getElementById("home");


btn.addEventListener("click", function() {
    btn.classList.toggle("toggle-i");
    uln.classList.toggle("toggle");
})



home.onclick = function() {
    scroll({
        top: 0,
        behavior: "smooth"
    })
}