
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const menuBurger = document.querySelector('.burger__menu');
    iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBurger.classList.toggle('_active');
    });
}



const footerMenu = document.querySelector('.column__title1');
const footerList = document.querySelector('.fList1');
footerMenu.addEventListener("click", function(e){
      
      footerList.classList.toggle('_active');
      
});



const footerMenu2 = document.querySelector('.column__title2');
const footerList2 = document.querySelector('.fList2');
footerMenu2.addEventListener("click", function(e){
      
      footerList2.classList.toggle('_active');
      
});

const footerMenu3 = document.querySelector('.column__title3');
const footerList3 = document.querySelector('.fList3');
footerMenu3.addEventListener("click", function(e){
      
      footerList3.classList.toggle('_active');
      
});














new Swiper('.image-slider',
{
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },
    effect: 'fade',
  
    fadeEffect: {
    crossFade:true
    },
      
}
);

new Swiper('.example__slider',
{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
 spaceBetween: 1000,
  
  centeredSlides: true,
  slidesPerView: 1,
  
}
);

new Swiper('.news__slider',
{
  slidesPerView: 2,
  slidesPerGroup: 2,
  
  effect: 'fade',
  
  fadeEffect: {
    crossFade:true
  },

  loop: true,

  autoplay: {
    delay:4000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },

}
);


new Swiper('.newspage__slider', 
{
  effect: 'fade',
  
  fadeEffect: {
    crossFade:true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
  }


}
);