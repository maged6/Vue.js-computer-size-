<template>
  <section> 
  <div class="container-fluid">
    <div class="container">
      <div class="about-us">
        <h5 class="ms-5">PRPDUCT</h5>
        <h1 class="text-dar-lg fw-bold ms-5">
          PRODUCTS FOR YOUR <br />
          BEST FRIENDS
        </h1>
      </div>
      <div class="mt-5"> 
        <swiper> </swiper>
      </div>
    
    </div>

  </div>
</section>

</template>

<script>
import Swiper from '../components/carousel/swiper.vue';




export default {
  components: {
    Swiper,

  },
};
</script>

<style scoped>
.container {
  margin: 5%;
}
.about-us {
  border-left: thick solid #7ab730;
}
h5 {
  color: #7ab730;
}
</style>
