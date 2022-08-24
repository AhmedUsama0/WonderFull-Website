var boxIndex = 1;
function showBoxes(b) {
  let boxes = document.querySelectorAll(".right-box .box");
  if (b > boxes.length) {
    boxIndex = 1;
  }
  if (b < 1) {
    boxIndex = boxes.length;
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.opacity = "0";
    boxes[boxIndex - 1].style.opacity = "1";
  }
  boxIndex = boxIndex + 1;
}

setInterval(() => {
  showBoxes(boxIndex);
}, 4000);

window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  const y = window.scrollY;
  if (y >= 300) {
    nav.classList.add("sticky-nav-down");
  } else {
    nav.classList.remove("sticky-nav-down");
  }
});
function scrollToPricing() {
  const pricing = document.getElementById("pricing");
  pricing.scrollIntoView({ behavior: "smooth" });
}
function scrollToAbout() {
  const about = document.getElementById("about");
  about.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  const contact = document.getElementById("contact");
  contact.scrollIntoView({ behavior: "smooth" });
}
