import { Swiper } from './swiper/swiper-js';


// headerSlider
function headerSliderInit() {
   const swiperContent = new Swiper('.header-slider', {
      spaceBetween: 30,
      effect: 'fade',
      speed: 1500,
      fadeEffect: {
         crossFade: true
      },

      autoplay: {
         delay: 2000,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   })

}
headerSliderInit();


function header_show_menu() {
   const headerBtnDecor = document.querySelectorAll('.header__top-btn--decor');
   const headerTopList = document.querySelectorAll(".header__top-list");

   headerBtnDecor.forEach(function (element) {
      element.addEventListener('click', disable)
   })

   function disable(evt) {
      headerTopList.forEach(function (item) {
         item.classList.toggle('header__top-list--active');
         console.log(item.classList.contains("header__top-list--active"))

      });
   }

}
header_show_menu()


// headerSlider
function shopSliderInit() {
   const swiperContent = new Swiper('.shop-swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesPerColumn: 1,
      speed: 1500,
      autoplay: {
         delay: 1500,
         disableOnInteraction: false,
      },
      // centeredSlides: true,
      // slidesPerView: 2,
      // freeMode: true,
      // watchSlidesProgress: true,
      // pagination: {
      //    el: ".swiper-pagination",
      //    clickable: true,
      // },
      // navigation: {
      //    nextEl: ".swiper-button-next",
      //    prevEl: ".swiper-button-prev",
      // },

      breakpoints: {
         320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
         },

         700: {
            slidesPerView: 2.2,
            spaceBetween: 10,
         },
         1100: {
            slidesPerView: 'auto',
            spaceBetween: 30,
         },
      },
   })

}
shopSliderInit();




function get_rezalt_bmi() {
   const bmi_data_heigth = document.querySelector(".heigth");
   const bmi_data_age = document.querySelector(".age");
   const bmi_data_weigth = document.querySelector(".weigth");
   const bmi_data_gender = document.querySelector(".gender");

   let dataHeigth = Number(bmi_data_heigth.value)
   let dataAge = Number(bmi_data_age.value)
   let dataWeigth = Number(bmi_data_weigth.value)
   // let dataGender = bmi_data_gender.value;
   let heigth = (dataHeigth / 100)
   let rezult = dataWeigth / (heigth * heigth)
   rezult = rezult.toFixed(1)

   let message = (rezult < 18.5) ? rezult + " - Underweight" :
      (rezult > 18.5 && rezult < 24.9) ? rezult + " - Healthy" :
         (rezult > 24.9 && rezult < 29.9) ? rezult + " - Overweight" :
            (rezult >= 30) ? rezult + " - Obese" : rezult + " - Не коректно введены данные";
   alert(message);
}

const bmi_data_button = document.querySelector(".shop-input__wrap")
bmi_data_button.addEventListener('click', get_rezalt_bmi);






















// const headerBtnDecor = document.querySelectorAll('.header__top-btn--decor');
// const headerTopList = document.querySelectorAll(".header__top-list");

// headerBtnDecor.forEach(function (element) {
//    element.addEventListener('click', disable)
// })

// function disable(evt) {
//    headerTopList.forEach(function (item) {
//       item.classList.toggle('header__top-list--active');
//       console.log(item.classList.contains("header__top-list--active"))

//    });
// }






