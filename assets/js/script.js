$(document).ready(function () {
  $("#carrossel-depoimentos").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoPlayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  });
});

function myFunction() {
  var x = document.getElementById("menu-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}