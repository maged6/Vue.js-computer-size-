<template>
  <section class="plog-grid">
    <div class="container d-flex py-5">
      <div class="div1">
        <div class="d-flex mb-5" v-for="blog in plogGrid" :key="blog">
          <div class="w-50 d-flex">
            <img :src="blog.img" />
          </div>
          <div class="w-50 bg-light p-4">
            <div>
              <img class="mx-2" src="../assets/images/bookMark.svg" />Web Design
              <img class="mx-2" src="../assets/images/calendar.svg" alt="" /> 01
              Jan, 2045
            </div>
            <h5 class="text-uppercase my-3">
              Dolor sit magna rebum clita rebum dolor
            </h5>
            <p>
              Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet
              tempor eos dolor
            </p>
            <a class="entities" href="#"> READ MORE <span>&rarr;</span> </a>
          </div>
        </div>
        <div>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item disabled">
                <a class="page-link pagin" href="#" tabindex="-1">
                  <span> &larr; </span></a
                >
              </li>
              <li class="page-item active">
                <a class="page-link pagin-active" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link pagin" href="#">2 </a>
              </li>
              <li class="page-item">
                <a class="page-link pagin" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link pagin" href="#"> <span>&rarr;</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="div2">
        <div class="input-group mb-5">
          <input
            type="text"
            class="form-control"
            placeholder="keyword"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn pagin-active" type="button">
              <img class="search-svg" src="../assets/images/search.svg" />
            </button>
          </div>
        </div>

        <div class="mb-5">
          <h3 class="text-uppercase ps-3 mb-4">Categories</h3>
          <div class="d-flex flex-column justify-content-start">
            <a class="categories bg-light py-2 px-3 mb-2" href="#"
              ><span>&rarr;</span> Web Design</a
            >
            <a class="categories bg-light py-2 px-3 mb-2" href="#"
              ><span>&rarr;</span> Web Development</a
            >
            <a class="categories bg-light py-2 px-3 mb-2" href="#"
              ><span>&rarr;</span> Web Development</a
            >
            <a class="categories bg-light py-2 px-3 mb-2" href="#"
              ><span>&rarr;</span> Keyword Research</a
            >
            <a class="categories bg-light py-2 px-3 mb-2" href="#"
              ><span>&rarr;</span> Email Marketing</a
            >
          </div>
        </div>
        <div class="mb-5">
          <h3 class="text-uppercase ps-3 mb-4">RECENT POST</h3>
          <div class="d-flex justify-content-start">
            <div class="d-flex overflow-hidden mb-3">
              <img
                class="img-fluid"
                src="../img/blog-1.jpg"
                style="width: 100px; height: 100px; object-fit: cover"
                alt=""
              />
              <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >Lorem ipsum dolor sit amet adipis elit
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="d-flex overflow-hidden mb-3">
              <img
                class="img-fluid"
                src="../img/blog-2.jpg"
                style="width: 100px; height: 100px; object-fit: cover"
                alt=""
              />
              <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >Lorem ipsum dolor sit amet adipis elit
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="d-flex overflow-hidden mb-3">
              <img
                class="img-fluid"
                src="../img/blog-3.jpg"
                style="width: 100px; height: 100px; object-fit: cover"
                alt=""
              />
              <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >Lorem ipsum dolor sit amet adipis elit
              </a>
            </div>
          </div>
        </div>
        <div class="mb-5">
                    <h3 class="text-uppercase  ps-3 mb-4">Tag Cloud</h3>
                    <div class="d-flex flex-wrap m-n1">
                        <a href="" class="btn pagin-active m-1">Design</a>
                        <a href="" class="btn pagin-active m-1">Development</a>
                        <a href="" class="btn pagin-active m-1">Marketing</a>
                        <a href="" class="btn pagin-active m-1">SEO</a>
                        <a href="" class="btn pagin-active m-1">Writing</a>
                        <a href="" class="btn pagin-active m-1">Consulting</a>
                        <a href="" class="btn pagin-active m-1">Design</a>
                        <a href="" class="btn pagin-active m-1">Development</a>
                        <a href="" class="btn pagin-active m-1">Marketing</a>
                        <a href="" class="btn pagin-active m-1">SEO</a>
                        <a href="" class="btn pagin-active m-1">Writing</a>
                        <a href="" class="btn pagin-active m-1">Consulting</a>
                    </div>
                </div>
                <div>
                    <h3 class="text-uppercase ps-3 mb-4">Plain Text</h3>
                    <div class="bg-light text-center" style="padding: 30px;">
                        <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                        <a href="" class="btn pagin-active py-2 px-4">Read More</a>
                    </div>
                </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plogGrid: [
        { id: 1, 
          img: require("../img/blog-1.jpg")
         },
        { id: 2, 
          img: require("../img/blog-2.jpg")
         },
        { id: 3, 
          img: require("../img/blog-3.jpg")
        },
        { id: 4, 
          img: require("../img/blog-4.jpg")
        },
        { id: 5,
          img: require("../img/blog-5.jpg")
         },
        { id: 6, 
          img: require("../img/blog-6.jpg")
         },
      ],
    };
  },
};
</script>

<style scoped>
.div1 {
  width: 70%;
  margin-right: 2%;
}
.div2 {
  width: 30%;
  margin-left: 2%;
}
.entities {
  color: #7ab730;
  text-decoration: none;
}
.pagin {
  color: #7ab730;
}
.pagin-active {
  background-color: #7ab730;
  border: solid #7ab730;
  color:white;
}
.search-svg {
  color: white;
}
h3 {
  border-left: thick solid #7ab730;
}
.categories {
  font-size: large;
  font-weight: bolder;
  text-decoration-line: none;
  color: black;
}
</style>
