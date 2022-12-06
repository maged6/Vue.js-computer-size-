<template>

    <div class="container">
      <div class="about-us">
        <h5 class="ms-5">TEAM MEMBERS</h5>
        <h1 class="text-dar-lg fw-bold ms-5">
          QUALIFIED PETS CARE <br />
          PROFESSIONALS
        </h1>
      </div>
    </div>
    
    <swiper
      class="parallax-slider show "
      :spaceBetween="60"
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
      <div class="parallax-slider-navigation showButton d-flex align-items-start flex-column ">
        <div class="nav-dinav-indicator prevArrow m-2 px-3">
          <span> &larr; </span>
        </div>
        <div class="nav-dinav-indicator nextArrow m-2 px-3">
          <span> &rarr; </span>
        </div>
      </div>
  
      <swiper-slide
        class="  bg-light  "
        v-for="member in swiperMember"
        :key="member.id"
      >
          <div class="  d-flex flex-column">
            <div class="down  d-flex flex-column"> 
              <img  :src="member.img" alt="imge" />
              <div class="on "> 
                <div class="icon-control   "> 
                  <img class="bi" src="../assets/images/facebook.svg"/>
                  <img class="bi" src="../assets/images/twitter.svg"/>
                  <img class="bi"  src="../assets/images/linkdin.svg" >
                </div>
        
              </div>
            </div>
          
          
  
            <div class="d-flex align-items-center flex-column mt-3">
              <h1>{{ member.auther }}</h1>
              <p>{{ member.price }}</p>
            </div>
  

        </div>
      </swiper-slide>
    </swiper>

    <div class="container">
      <div class="about-us">
        <h5 class="ms-5">TEAM INFO</h5>
        <h1 class="text-dar-lg fw-bold ms-5">
          TEAM INFO TO <br />
           COMMUNICATION
        </h1>
      </div>
      <swiper-api></swiper-api>
    </div>
   

  </template>
  
  <script>
  import SwiperCore, { Navigation, Autoplay, Parallax } from 'swiper';
  
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
  
  import 'swiper/swiper.min.css';
  
  import 'swiper/modules/navigation/navigation.min.css';
  
  SwiperCore.use([Navigation, Parallax, Autoplay]);

  import SwiperApi from '../components/carousel/swiperApi.vue';

  
  export default {
    components: {
      Swiper,
      SwiperSlide,
      SwiperApi

    },
    data(){
      return{
        swiperMember: [
          {
            auther: 'full Name',
            price: 'Designation',
            img: require('../img/team-1.jpg'),
          },
          {
            auther: 'full Name',
            price: ' Designation',
            img: require('../img/team-2.jpg'),
          },
          {
            auther: 'full Name',
            price: 'Designation',
            img: require('../img/team-3.jpg'),
          },
  
          {
            auther: 'full Name',
            price: 'Designation',
            img: require('../img/team-4.jpg'),
          },
        ],
      }
    }
  
  };
  </script>
  
  <style scoped>

  .nav-dinav-indicator {
    color: white;
    background-color: #7ab730;
  }
  span {
    font-family: 'wide font';
    font-size: 30px;
  }
  .container {
  margin: 5%;
}
.about-us {
  border-left: thick solid #7ab730;
}
h5 {
  color: #7ab730;
}
.show{
  margin: 6%;
  padding-right:2% ;
}
.showButton{
  position: absolute;
    width: 70px;
    height: 160px;
    top: calc(50% - 80px);
    right: 0;
    z-index: 1;
}
.bi{
  background-color: white;
  color: black;
  border: 5px solid white ;
  margin: 3px;
  opacity: 2;

}
.icon-control{
  display: flex;
  margin-top: 40%;
  margin-left: 25%;
}
.on{
  background: #7ab730;
   width: 100% ;
   height:  100% ;
   opacity: 0.7;
   position: absolute;
   display: none;
   
   
}
.down{
  position: relative;
  color:  white ;

}
img:hover + .on{
  display: block;
}
  </style>

   
  