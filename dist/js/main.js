

var myNav = document.querySelector("nav");

window.onscroll = function () {
    "use strict";
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop >= 280) {
        myNav.classList.add("scrolled");
    } else {
        myNav.classList.remove("scrolled");
    }
};

const links = document.querySelectorAll('a[href^="#"]');
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 80;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}