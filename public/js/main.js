function fixNavWidth() {
    if(window.innerWidth < 991 || window.scrollY > 50){
        document.getElementById('mainNav').classList.add('shrink')
    }else{
        document.getElementById('mainNav').classList.remove('shrink')
    }
}

console.log(window.scrollY)

window.addEventListener('resize',fixNavWidth)
window.addEventListener('scroll',fixNavWidth)
document.addEventListener('DOMContentLoaded',()=>{
    fixNavWidth();
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay:true,
  smartSpeed: 300
  });
});











