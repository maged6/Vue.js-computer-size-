<template>
  <swiper
    class="parallax-slider"
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
      v-for="swip in swiperTextBase"
      :key="swip.id"
    >
      <div>
        <div class="user-info">
          <h5>Name: {{ swip.username }}</h5>
          <p>EMail: {{ swip.email }}</p>
          <p>Phone: {{ swip.phone }}</p>
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
import axios from 'axios';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperTextBase: [],
    };
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.swiperTextBase = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.user-info {
  font-size: small;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  text-align: center;
  height: 200px;
}
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
</style>
