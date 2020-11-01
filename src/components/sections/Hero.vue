/* eslint-disable max-len */
<template>
  <!-- HERO Section -->
  <section id="hero" class="p-2 py-md-3 bg-white overflow-hidden infected">
    <Navbar />
    <div class="layer layer_1" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/hero/layer_1.png') + ')' }"></div>
    <div class="layer layer_2" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/hero/layer_2.png') + ')' }"></div>
    <div class="layer layer_3" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/hero/layer_3.png') + ')' }"></div>
    <div class="layer layer_4" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/hero/layer_4.png') + ')' }"></div>
    <div class="layer layer_5 animate__animated animate__shakeX animate__infinite" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/hero/layer_5.png') + ')' }"></div>
    <h1 class="text-center mt-5" style="z-index: 6; position: relative">
      Your <strong>Hike</strong> to <strong>PEAK!</strong>
    </h1>
  </section>
</template>

<script>
import Navbar from "@/components/_Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
// Set Background Images for team members
</script>