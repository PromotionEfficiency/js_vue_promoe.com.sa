<template>
  <div class="hello">
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
    <AboutUs />
    <Video />
    <Services />
    <Insight />
    <OurWork />
    <Clients />
    <GetStarted />
    <ContactUs />
    <OurAddress />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/sections/Hero.vue';
import AboutUs from '@/components/sections/AboutUs.vue';
import Video from '@/components/sections/Video.vue';
import Services from '@/components/sections/Services.vue';
import Insight from '@/components/sections/Insight.vue';
import OurWork from '@/components/sections/OurWork.vue';
import Clients from '@/components/sections/Clients.vue';
import GetStarted from '@/components/sections/GetStarted.vue';
import ContactUs from '@/components/sections/ContactUs.vue';
import OurAddress from '@/components/sections/OurAddress.vue';
import Footer from '@/components/_Footer.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    AboutUs,
    Video,
    Services,
    Insight,
    OurWork,
    Clients,
    GetStarted,
    OurAddress,
    ContactUs,
    Footer
  },
};
</script>
