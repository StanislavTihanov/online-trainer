$(function(){

  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();


});

const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu");
const body = document.querySelector('#body');
hamb.addEventListener("click", hambHandler);

function hambHandler(event) {
    hamb.classList.toggle("active");
    menu.classList.toggle("open");
    body.classList.toggle("lock");
}