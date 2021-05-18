<template>
  <div>
    <div class="container">

    <div class="h-screen">
      <HeroOne />
    </div>

    <div class="m-auto max-w-12xl px-24 py-12 bg-gray-100 h-screen" id="about-us">
      <div class="text-indigo-600 font-light text-xl md:text-2xl">
        Apa smart landing-page itu?
      </div>
      <div class="max-w-lg">
        <div class="text-gray-900 font-extrabold text-2xl md:text-5xl">
        <h1>LANDING-PAGE VS WEBSITE</h1>
        </div>
        <div class="text-gray-900 font-normal mt-10">
        <p>Pada dasarnya landing-page adalah bagian dari sebuah website. <b>Tetapi untuk sekedar kebutuhan
          beriklan Anda hanya membutuhkan sebuah landing-page.</b><br> <br>
          Harga sebuah website untuk <i>Profile Company</i> biasanya berharga minimal Rp. 3.000.000
          <br> <br>
          Tetapi yang Anda butuhkan saat ini hanyalah landing-page untuk beriklan. <br>
          jadi apakah Anda ingin membuang uang minimal Rp. 3.000.000 untuk kebutuhan landing-page Anda?
        </p>
      </div>
      <div class="my-5 h-16">
               <div class="shadow-md font-medium py-2 px-4 text-indigo-100
               cursor-pointer bg-indigo-600 hover:bg-indigo-500 rounded text-lg text-center w-56">Pelajari selengkapnya →
               </div>
         </div>
      </div>
    </div>

    <div class="feature">
      <feature-card/>
    </div>

    <div class="step bg-gray-100">
      <StepLandingPage/>
    </div>
    
    <div class="staticCounter">
      <StaticCounter/>
    </div>

  </div>
  <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import featureCard from '../components/feature-card.vue'
import StepLandingPage from '../components/StepLandingPage.vue'
export default {
  components: { featureCard },}
</script>

<style>
.cont
    StepLandingPageainer {
  margin: 0 auto;
  min-height: 100vh;
  display: 'flex-col';
  justify-content: center;
  align-items: center;
}
</style>
