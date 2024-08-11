let navLink = document.querySelectorAll(".navLink");
let resIcon = document.querySelector(".icon");
let topNav = document.getElementById("myTopNav");
navLink[0].classList.add("active");

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    for (i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

resIcon.addEventListener("click", function () {
  topNav.classList.toggle("responsive");
});
