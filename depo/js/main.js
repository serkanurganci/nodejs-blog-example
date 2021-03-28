$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay:true,
  smartSpeed: 300
  });
});

const navbar = document.getElementById("mainNav");

window.addEventListener("resize",function(){

    console.log(windiw.scrollY)

})

console.log(window.scrollY)