<template>
    <!-- Our Address Section -->
  <section id="ouraddress" class="bg-white infected">

    <b-row no-gutters>
      <b-col cols="12" md="3" offset-md="2" class="py-5 text-center text-md-right px-5">
        <header class="py-2 pt-2 py-md-3 pt-md-5">
          <b-img src="@/assets/imgs/logo/greendivider.png" height="90" alt=""></b-img>

          <h2 class="mb-5 pt-3">
            <small class="text-muted"><strong>OUR ADDRESS</strong></small><br />
            We are very close <strong>to you</strong>
          </h2>
          <address><strong>KHOBAR</strong><br />T4405 Mall Blvd. STE 140 Union City, GA 30291 | 404.795.4235</address>
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
  components: {
    GoogleMaps
  },
};
</script>
