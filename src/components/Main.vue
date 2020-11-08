<template>
  <div class="MainTemplate">
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
    <Work />
    <Clients />
    <GetStarted />
    <Instagram />
    <ContactUs />
    <Address />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/sections/Hero.vue';
import AboutUs from '@/components/sections/AboutUs.vue';
import Video from '@/components/sections/Video.vue';
import Services from '@/components/sections/Services.vue';
import Insight from '@/components/sections/Insight.vue';
import Work from '@/components/sections/Work.vue';
import Clients from '@/components/sections/Clients.vue';
import GetStarted from '@/components/sections/GetStarted.vue';
import Instagram from '@/components/sections/Instagram.vue';
import ContactUs from '@/components/sections/ContactUs.vue';
import Address from '@/components/sections/Address.vue';
import Footer from '@/components/_CleanFooter.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    AboutUs,
    Video,
    Services,
    Insight,
    Work,
    Clients,
    GetStarted,
    Instagram,
    Address,
    ContactUs,
    Footer
  },
};
</script>
