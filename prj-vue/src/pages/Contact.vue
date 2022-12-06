<template>
  <div class="container-fluid pt-5">
    <div class="container">
      <div class="contact-us ps-5 mb-5" style="max-width: 600px">
        <h6 class="contact text-uppercase">Contact Us</h6>
        <h1 class="font-weight-bold text-uppercase mb-0">
          Please Feel Free To Contact Us
        </h1>
      </div>
      <div class="row g-5">
        <div class="col-lg-7">
          <form>
            <div class="row g-3">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control bg-light border-0 px-4"
                  placeholder="Your Name"
                  style="height: 55px"
                />
              </div>
              <div class="col-12">
                <input
                  type="email"
                  class="form-control bg-light border-0 px-4"
                  placeholder="Your Email"
                  style="height: 55px"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control bg-light border-0 px-4"
                  placeholder="Subject"
                  style="height: 55px"
                />
              </div>
              <div class="col-12">
                <textarea
                  class="form-control bg-light border-0 px-4 py-3"
                  rows="8"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-contact w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-5">
          <div class="bg-light mb-5 p-5">
            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
              <div class="text-start">
                <h6 class="text-uppercase mb-1">Our Office</h6>
                <span>123 Street, cairo, Egypt</span>
              </div>
            </div>
            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon class="icon" icon=" fa-solid fa-envelope" />
              <div class="text-start">
                <h6 class="text-uppercase mb-1">Email Us</h6>
                <span>Magedabdalmashi66@gmail.com</span>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <font-awesome-icon class="icon" icon=" fa-solid fa-mobile-screen" />
              <div class="text-start">
                <h6 class="text-uppercase mb-1">Call Us</h6>
                <span> +0127 6488 051</span>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709965053!2d31.223444799685!3d30.05948381031422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sKair%2C%20Egipt!5e0!3m2!1spl!2spl!4v1669556452088!5m2!1spl!2spl"
                width="350"
                height="250"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.contact {
  color: #7ab730;
}
.contact-us {
  border-left: solid thick #7ab730;
}
.btn-contact {
  background: #7ab730;
  color: white;
}
.icon{
  color: #7ab730;
  margin-right:5% ;
  font-size: xx-large;
}
</style>
