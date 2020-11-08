/* eslint-disable max-len */
<template>
  <!-- HERO Section -->
  <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden">
    <Navbar />
    <div class="layer layer_1" :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/hero/layer_1.png)' }"></div>
    <div class="layer layer_2" :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/hero/layer_2.png)' }"></div>
    <div class="layer layer_3" :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/hero/layer_3.png)' }"></div>
    <div class="layer layer_4" :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/hero/layer_4.png)' }"></div>
    <div class="layer layer_5 animate__animated animate__shakeX animate__infinite" :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/hero/layer_5.png)' }"></div>
    <h1 v-html="this.jsonData.general.slogan" class="text-center mt-5" style="z-index: 6; position: relative">
    </h1>
  </section>
</template>

<script>
import Navbar from "@/components/_Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      myData : this.myData,
      publicPath: process.env.BASE_URL,
    }
  },
  mounted() {
  }
};
// Set Background Images for team members
</script>