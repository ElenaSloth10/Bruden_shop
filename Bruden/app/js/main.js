const button = document.querySelector(".header-inner__info-button");
const input = document.querySelector(".header-inner__info-input");

button.addEventListener("mouseover", () => {
    input.classList.toggle("header-inner__info-input--block");
},false);

console.log("12");

const burgerBtn = document.querySelector(".header-inner__list-icon");
const burgerMenu = document.querySelector(".header-inner__nav");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active-icon");
    burgerMenu.classList.toggle("header-inner__list-icon--active");
},false);



const swiperBruden = new Swiper('.bruden-swiper', {
    direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });



  const sectionCategorySwiper = new Swiper('.section-category__swiper', {

    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  let sectionCategorywrapper = document.querySelector(".wrapper");
  
  if(sectionCategorywrapper.offsetWidth < 700){
    const sectionCategorySwiper = new Swiper('.section-category__swiper', {

      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 2,
      spaceBetween: 20,
 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  };

  if(sectionCategorywrapper.offsetWidth < 500){
    const sectionCategorySwiper = new Swiper('.section-category__swiper', {

      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 1,
      spaceBetween: 10,
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  };





  const sectionDealSwiper = new Swiper('.section-deal__swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 40,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  if(sectionCategorywrapper.offsetWidth < 900){

    const sectionDealSwiper = new Swiper('.section-deal__swiper', {
      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 1,
      spaceBetween: 10,
   
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  }





  const sectionNewsSwiper = new Swiper('.section-news__swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if(sectionCategorywrapper.offsetWidth < 900){
    const sectionNewsSwiper = new Swiper('.section-news__swiper', {
      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 2,
      spaceBetween: 20,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if(sectionCategorywrapper.offsetWidth < 500){
    const sectionNewsSwiper = new Swiper('.section-news__swiper', {
      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 1,
      spaceBetween: 10,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }



  const sectionLatestProductsSwiper = new Swiper('.section-latest-products__swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  if(sectionCategorywrapper.offsetWidth < 1000){
    const sectionLatestProductsSwiper = new Swiper('.section-latest-products__swiper', {
      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 2,
      spaceBetween: 40,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if(sectionCategorywrapper.offsetWidth < 700){
    const sectionLatestProductsSwiper = new Swiper('.section-latest-products__swiper', {
      direction: 'horizontal',
      loop: true,
  
      slidesPerView: 1,
      spaceBetween: 10,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  
