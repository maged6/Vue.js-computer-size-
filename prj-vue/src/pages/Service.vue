<template>
  <section>
    <div class="container-fluid py-5">
      <div class="container mt-5">
        <div class="about-us">
          <h5 class="ms-5">SERVICE</h5>
          <h1 class="text-dar-lg fw-bold ms-5">
            OUR EXCELLENT PET <br />
            CARE SERVICES
          </h1>
        </div>
      </div>
      <div class="service row g-5 mt-0">
        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon=" fa-solid fa-house" />

            <div>
              <h5 class="mb-3">Pet Boarding</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon=" fa-solid fa-truck-fast" />
            <div>
              <h5 class="mb-3">PET FEEDING</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon=" fa-solid fa-lemon" />

            <div>
              <h5 class="mb-3">PET GROOMING</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon="fa-solid fa-ticket" />

            <div>
              <h5 class="mb-3">PET TRAINING</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon=" fa-solid fa-briefcase" />

            <div>
              <h5 class="mb-3">PET EXERCISE</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-item bg-light d-flex p-4">
            <font-awesome-icon class="icon" icon=" fa-solid fa-compass" />

            <div>
              <h5 class="mb-3">PET TREATMENT</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


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
.about-us {
  border-left: thick solid #7ab730;
}
.service {
  margin: 5%;
}
h5 {
  color: #7ab730;
}
.entities {
  color: #7ab730;
  text-decoration: none;
}
.icon {
  color: #7ab730;
  font-size: calc(1.375rem + 1.5vw);
  margin-right: 1rem;
}
.iconnn {
  color: #7ab730;
}
</style>
