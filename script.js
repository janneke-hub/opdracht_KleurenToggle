const toggleNavStatus = false;
const getSidebar = document.querySelector(".colorMenu");
const getSidebarUl = document.querySelector(".colorMenu ul");
const getSidebarLinks = document.querySelectorAll(".colorMenu a");

function changeColor(color) {
  document.body.style.background = color;
  getSidebarUl.style.visibility = "hidden";
}

const toggleNav = function() {
  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    let arrayLength = getSidebarLinks.length;
  }
};