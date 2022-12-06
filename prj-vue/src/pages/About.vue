<template>
    <section>
        <div class="container-fluid d-inline-flex py-5">
            <div class="container  col-lg-5 mb-5 mb-lg-0" > 
                <img src="../img/about.jpg" >
   
            </div>
            <div class="container col-lg-7" > 
                <div class="about-us "> 
                 <h5 class="ms-5">ABOUT US </h5>
                 <h1 class="  text-dar-lg fw-bold ms-5" >  WE KEEP YOUR PETS HAPPY ALL TIME </h1>
                </div>
                
                    <h4 class="text my-4"> Diam dolor diam ipsum tempor sit. Clita erat ipsum et 
                     lorem stet no labore lorem sit clita duo justo magna </h4>

                <div class=" bg-light  text-dark p-4 " > 
                    <div class="d-flex flex-row  justify-content-center">
                     <button type="button" :style="{'background-color' : !showVision ? '#7AB730' : '#E5E4E2' , 'color' : showVision ? '#7AB730' : 'white'}" class="btn   btn-lg  my-3 ms-3  w-50 " @click="handelShowMission"> OUR MISSION </button>
                     <button type="button" :style="{'background-color': showVision ? '#7AB730' : '#E5E4E2' , 'color' : !showVision ? '#7AB730' : 'white'}" class="btn  btn-lg my-3 ml-3  w-50 " @click="handelShowVision" > OUR VISSION </button>

                    </div>
                
                     <p class=" mx-3"    v-if="showVision" > Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, 
                        tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.
                         Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                          tempor consetetur takimata eirmod, dolores takimata
                         consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                   
                        
                     <p class=" mx-3"   v-else> .
                         Diam dolor diam ipsum et, 
                        tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.
                         Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                          tempor consetetur takimata eirmod, dolores takimata.Tempor erat elitr at rebum at at clita aliquyam consetetur
                         consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    

                        </div>

               
            </div>

        </div>
    </section>

</template>

<script>

export default {

    data(){
        return{
            showVision:true,
        }
    },
    methods:{
        handelShowVision() {
            this.showVision =true;
        },
        handelShowMission() {
             this.showVision =false;
        },
    }
 
}
</script>



<style scoped>
.container-fluid{
padding: 8%;
}
img{
    width: 100%;
    height: 100%;
}
.text{
    color: #656565;
}
    
h5{
    color:  #7AB730;

}
.about-us{
border-left: thick solid #7AB730;
}
.btn{
    border-radius: 0% ;
    background-color:  #7AB730;
    color: white;

}
</style>