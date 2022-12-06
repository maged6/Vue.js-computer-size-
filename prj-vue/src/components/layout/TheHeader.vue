<template>
  <location> </location>

  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-lg-0 px-3 px-lg-0 sticky-top"
  >
    <div class="container-fluid p-0">
      <a
        class="navbar-brand d-inline-flex align-items-left ms-lg-5"
        href="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
          />
        </svg>
        <h1 class="m-o text-dark">PET SHOP</h1>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-2">
            <a class="nav-link mt-3" href="Home"> HOME </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link mt-3" href="About"> ABOUT</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link mt-3" href="Service"> SERVICE </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link mt-3" href="Product">PRODUCT </a>
          </li>

          <li
            class="nav-item dropdown px-2"
            @click="navbarDropdown = !navbarDropdown"
          >
            <a class="nav-link dropdown-toggle mt-3"> PAGES </a>
            <div class="navbar-dropdown" v-if="navbarDropdown">
              <a class="dropdown-item" href="PricingPlan">Pricing Plan </a>
              <a class="dropdown-item" href="TheTeam">The Team</a>
              <a class="dropdown-item" href="Testimonial">Testimonial </a>
              <a class="dropdown-item" href="PlogGrid">Blog Grid </a>
              <a class="dropdown-item" href="PlogDetail">Blog Detail</a>
            </div>
          </li>

          <div class="contact nav-item ms-4 px-5 py-3">
            <a class="nav-item nav-link text-white" href="Contact">
              CONTACT <span class="entities">&rarr;</span>
            </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Location from './Location.vue';

export default {
  components: {
    Location,
  },
  data() {
    return {
      navbarDropdown: false,
    };
  },
};
</script>

<style scoped>
.icon {
  color: #7ab730;
  font-size: calc(1.375rem + 1.5vw);
  margin-right: 1rem;
}
.nav-item {
  border-top: 5px solid transparent;
}
.nav-item:hover {
  border-top: 5px solid #7ab730;
}

a {
  color: black;
  font-size: 20px;
  font-weight: 500;
}
.dropdown-item {
  border-bottom: 5px solid transparent;
}
.dropdown-item:hover {
  border-bottom: 5px solid #7ab730;
}
.contact {
  background-color: #7ab730;
}
.entities {
  font-family: 'wide font';
  font-size: 20px;
}
.navbar-dropdown {
  position: absolute;
  text-align: left;
  padding: 10%;
  background-color: white;
  top: calc(100%);
  width: max-content;
}

@media only screen and (max-width: 991px) {
  .navbar-dropdown {
    position: relative;
    padding: 0%;
    border: none;
  }
}
</style>
