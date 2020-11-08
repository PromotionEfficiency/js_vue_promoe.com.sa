<template>
  <div class="SecondaryTemplate">
    <vue-headful
      title="Promotion Efficiency"
      description="Your Hike to PEAK"
      keywords="business, promo, promotion, efficiency, center, khobar"
      lang="en"
      url="https://www.promoe.com.sa/"
      twitter:url="https://twitter.com/promoefficiency/"
      image="https://www.promoe.com.sa/public/assets/imgs/favicon/OGImage.png"
    />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/sections/Hero.vue';
import Footer from '@/components/_CleanFooter.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Footer
  },
};
</script>
