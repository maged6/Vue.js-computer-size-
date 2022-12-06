<template>
    <section >
     <div class="container-fluid bg-image position-relative">

      <div id="carouselExampleControls" class="carousel slide client-profession" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active bg-light">
      <img src="../img/testimonial-2.jpg" class="d-block w-5 pt-5 m-auto"  alt="...">
      <p class=" my-3 mx-5 p-3"> Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
      <hr class="w-25 mx-auto"/>
      <div class="client-name"> 
        <h5 > <strong> Client Name </strong> </h5>
      <span > Profession</span>
      </div>
    
    </div>
    <div class="carousel-item bg-light">
      <img src="../img/testimonial-1.jpg" class="d-block w-5 pt-5 m-auto" alt="...">
      <p class=" my-3 mx-5 p-3"> Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
      <hr class="w-25 mx-auto"/>
      <div class="client-name"> 
        <h5 ><strong> Client Name </strong>  </h5>
      <span > Profession</span>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev carousel-button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carousel-button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  </section>
    
</template>



<style scoped>
.bg-image {
    margin-top: 5% ;
    margin-bottom: 5% ;
  background: url('../img/testimonial.jpg') top right no-repeat;
  padding: 8em;
  background-size: 100% 100%;
}
.client-name{
  text-align: center;
  padding: 3%;
  margin-bottom: 4%;
}
.client-profession{
  left: 40%;
  width: 65%;
  padding-left: 0%;
  padding-right: 0%;


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

.carousel-button{
  background-color: #7ab730;
  position: absolute ;
  margin-top: 30%;
  margin-bottom: 30%;
  width: 8%;
}

</style>