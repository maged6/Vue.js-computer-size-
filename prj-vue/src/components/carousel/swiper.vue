<template>
  <swiper
    class="parallax-slider "
    :spaceBetween="40"
    :slidesPerView="4"
    :navigation="{
      nextEl: '.nextArrow',
      prevEl: '.prevArrow',
    }"
    :loop="true"
    :autoplay="{
      delay: 3000,
    }"

  >
    <div class="parallax-slider-navigation d-flex justify-content-center mt-4">
      <div class="nav-dinav-indicator prevArrow m-2 px-3">
        <span> &larr; </span>
      </div>
      <div class="nav-dinav-indicator nextArrow m-2 px-3">
        <span> &rarr; </span>
      </div>
    </div>

    <swiper-slide
      class="bg-light m-3 pb-3"
      v-for="text in swiperTextBase"
      :key="text.price"
    >
      <div class="d-flex flex-column">
        <div class="products-slide d-flex flex-column">
          <img class="product-img   mt-3" :src="text.img" alt="imge" />

        <div class="btn-action" >
          <a class="btn" ref="">
           <img class="icon" src="../../assets/images/cart.svg"/>
          </a>
          <a class="btn" ref="">
           <img class="icon" src="../../assets/images/eyes.svg"/>
          </a>
        </div>
        
          <div class="d-flex align-items-center flex-column mt-3">
            <h6>{{ text.auther }}</h6>
            <h5>{{ text.price }}</h5>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Autoplay, Parallax } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.min.css';

import 'swiper/modules/navigation/navigation.min.css';

SwiperCore.use([Navigation, Parallax, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      swiperTextBase: [
        {
          auther: 'Quality Pet Foods',
          price: '$199',
          img:require("../../img/product-1.png"),
        },
        {
          auther: 'Quality Pet Foods',
          price: ' $1500',
          img: require("../../img/product-2.png") ,
        },
        {
          auther: 'Quality Pet Foods',
          price: ' $135',
          img: require("../../img/product-3.png") ,
        },

        {
          auther: 'Quality Pet Foods',
          price: '$200',
          img: require("../../img/product-4.png") ,
        }
      ],
    }
  },


};
</script>

<style scoped>
.products-slide:hover .btn-action {
  display: block;
}
h5 {
  color: #7ab730;
}
.nav-dinav-indicator {
  color: white;
  background-color: #7ab730;
}
span {
  font-family: 'wide font';
  font-size: 30px;
}
.icon {
  color: white;
  font-size: calc(1.375rem + 1.5vw);
  margin-right: 1rem;
}
.btn-action {
  display: none;
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: -6%;
}

.btn {
  background-color: #7ab730;
  text-align: center;
  padding-right: 0;
  border-radius: 0%;
  cursor: pointer;
}
.product-img{
  height: 100;
    width: 200;
}
@media only screen and (max-width: 1200px) {
  .product-img {
    height: 150;
    width: 150;
  }
}
</style>

