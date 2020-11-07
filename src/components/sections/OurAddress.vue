<template>
    <!-- Our Address Section -->
  <section id="ouraddress" class="bg-white infected">

    <b-row no-gutters>
      <b-col cols="12" md="3" offset-md="2" class="py-5 text-center text-md-right px-5">
        <header class="py-2 pt-2 py-md-3 pt-md-5">
          <b-img :src="publicPath + 'assets/imgs/logo/greendivider.png'" height="90" alt=""></b-img>

          <h2 class="mb-5 pt-3">
            <small class="text-muted"><strong>{{ this.jsonData.sections.address.subtitle }}</strong></small><br />
            <span v-html="this.jsonData.sections.address.title"></span>
          </h2>
          <address>
            <strong>{{ this.jsonData.sections.address.content.city }}</strong><br />
            <span>{{ this.jsonData.sections.address.content.address }}</span><br />
            <a :href="'tel:' + this.jsonData.sections.address.content.phone.link">{{ this.jsonData.sections.address.content.phone.number }}</a>

          </address>
        </header>
        
      </b-col>

      <b-col cols="12" md="7" class="px-0">
        <GoogleMaps />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import GoogleMaps from '@/components/_gMaps.vue';

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  components: {
    GoogleMaps
  },
};
</script>
