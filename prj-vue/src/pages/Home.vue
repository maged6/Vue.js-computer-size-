<template>
  <section>
    <div class="container-fluid bg-image position-relative">
      <div class="container position-absolute">
        <div class="row justify-content-start">
          <h1 class="display-1 text-dar-lg fw-bold mb-lg-4">PET SHOP</h1>
          <h1 class="text-white mb-lg-4">MAKE YOUR PETS HAPPY</h1>
          <p class="fs-4 text-white mb-lg-4">
            Dolore tempor clita lorem rebum kasd eirmod dolore diam <br />
            eos kasd. Kasd clita ea justo est sed kasd erat clita sea
          </p>
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5"
          >
            <a class="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">
              RED MORE
            </a>
            <button
              class="play"
              type="button"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/"
              data-bs-target="#videoModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox=" 0 0 15 15"
              >
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                />
              </svg>
            </button>
            <h5
              class="font-weight-normal text-white m-0 ms-4 d-none d-sm-block"
            >
              PLAY VIDEO
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <about> </about>
  <server> </server>
  <product> </product>
  <special-offer> </special-offer>
  <pricing-plan></pricing-plan>
  <the-team> </the-team>
  <testimonial> </testimonial>
  <plog-detail></plog-detail>

</template>

<script>
import About from './About.vue';
import Server from './Service.vue';
import Product from './Product.vue';
import SpecialOffer from './../pagesContant/SpecialOffer.vue';
import PricingPlan from './../pagesContant/PricingPlan.vue';
import TheTeam from './../pagesContant/TheTeam.vue';
import Testimonial from './../pagesContant/Testimonial.vue';
import PlogDetail from './../pagesContant/PlogDetail.vue';

export default {
  components: {
    About,
    Server,
    Product,
    SpecialOffer,
    PricingPlan,
    TheTeam,
    Testimonial,
    PlogDetail
  },
};
</script>

<style scoped>
.bg-image {
  background: url('../img/hero.jpg') top right no-repeat;
  padding: 20em;
  background-size: 100% 100%;
}
.container {
  top: 16%;
  left: 8%;
}
.play {
  color: #7ab730;
  border: #7ab730;
  border-radius: 50%;
  padding: 1.5%;
}
</style>
