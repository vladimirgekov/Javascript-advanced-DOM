function toggle() {
  let x = document.getElementById("extra");

  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else {
    x.style.display = "none";
    document.getElementsByClassName("button")[0].innerHTML = "More";
  }
}
