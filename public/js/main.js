

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay:true,
  smartSpeed: 300
  });
});



function fixNav(){
    if(window.innerWidth < 991){
        document.getElementById('mainNav').classList.add('shrink')
    }else{
        document.getElementById('mainNav').classList.remove('shrink')
    }
}



window.addEventListener('resize',fixNav)
document.addEventListener('DOMContentLoaded',()=>{
    fixNav();
})



