<template>
  <footer class="bg-light">
    <div class="container pt-5">
      <div class="row g-5 m-4">
        <div class="col-lg-3 ">
          <h5 class="text-uppercase contact-us ps-3 mb-4">Get In Touch</h5>
          <p class="mb-4">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor
          </p>

          <p class="mb-2">
            <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
            123 Street, cairo, Egypt
          </p>

          <p class="mb-2">
            <font-awesome-icon class="icon " icon=" fa-solid fa-envelope" />
            Maged@gmail.com
          </p>

          <p class="mb-0">
            <font-awesome-icon
              class="icon"
              icon=" fa-solid fa-mobile-screen"
            />0127 6488 051
          </p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-uppercase contact-us ps-3 mb-4">Quick Links</h5>
          <div class="d-flex flex-column justify-content-start">
            <a class="text-body mb-2" href="#">Home</a>
            <a class="text-body mb-2" href="#">About Us</a>
            <a class="text-body mb-2" href="#">Our Services</a>
            <a class="text-body mb-2" href="#">Meet The Team</a>
            <a class="text-body mb-2" href="#">Latest Blog</a>
            <a class="text-body" href="#">Contact Us</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-uppercase contact-us ps-3 mb-4">Popular Links</h5>
          <div class="d-flex flex-column justify-content-start">
            <a class="text-body mb-2" href="#">Home</a>
            <a class="text-body mb-2" href="#">About Us</a>
            <a class="text-body mb-2" href="#">Our Services</a>
            <a class="text-body mb-2" href="#">Meet The Team</a>
            <a class="text-body mb-2" href="#">Latest Blog</a>
            <a class="text-body" href="#">Contact Us</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-uppercase contact-us ps-3 mb-4">Newsletter</h5>
          <form action="">
            <div class="input-group">
              <input
                type="text"
                class="form-control p-3"
                placeholder="Your Email"
              />
              <button class="btn btn-contact">Sign Up</button>
            </div>
          </form>
          <h6 class="text-uppercase mt-4 mb-3">Follow Us</h6>
          <div class="d-flex">
            <img class="icon" src="../../assets/images/facebook.svg" />
            <img class="icon" src="../../assets/images/twitter.svg" />
            <img class="icon" src="../../assets/images/linkdin.svg" />
            <img class="icon" src="../../assets/images/instgram.svg" />
          </div>
        </div>
        <div class="col-12 text-center text-body">
          <a class="text-body" href="">Terms &amp; Conditions</a>
          <span class="mx-1">|</span>
          <a class="text-body" href="">Privacy Policy</a>
          <span class="mx-1">|</span>
          <a class="text-body" href="">Customer Support</a>
          <span class="mx-1">|</span>
          <a class="text-body" href="">Payments</a>
          <span class="mx-1">|</span>
          <a class="text-body" href="">Help</a>
          <span class="mx-1">|</span>
          <a class="text-body" href="">FAQs</a>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-dark text-white-50 py-4">
      <div class="container">
        <div class="row g-5">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-md-0">
              © <a class="text-white" href="#">Your Site Name</a>. All Rights
              Reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="mb-0">
              Designed by
              <a class="text-white" href="https://github.com/maged6">Maged</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>
<style scoped>
.contact-us {
  border-left: solid thick #7ab730;
}

.btn-contact {
  background: #7ab730;
  color: white;
}
.icon {
  color: #7ab730;
  background: white;
  margin: auto;
  border: solid white;
}
</style>
