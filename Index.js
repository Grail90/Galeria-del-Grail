var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
  
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active"); // it will go through all the elements that has a class activeElements.

     }
})