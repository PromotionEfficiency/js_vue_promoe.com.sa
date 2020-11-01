<template>
  <!-- Services Section -->
  <section id="services" class="py-5 bg-white infected">
    <header class="py-2 py-md-3 text-center bg-white pt-5">
      <b-img src="@/assets/imgs/logo/greendivider.png" alt="" height="90" class="pt-3" ></b-img>

      <h2 class="insight2 text-dark mb-2 mb-md-5 pb-2 pt-3">
        <strong>SERVICES</strong><br />
        <small class="text-muted"><strong>THAT YOU'LL ENJOY</strong></small>
      </h2>
    </header>

    <b-container>
      <b-row class="text-center">
      <b-col cols="12">
        <carousel :loop="true" :paginationEnabled="false" :autoplay="true" :perPage="1" :perPageCustom="[[600, 1], [900, 3], [1199, 4]]">
          <slide class="p-2">
            <b-card>
              <b-card-text>
                <b-img src="@/assets/imgs/services/marketing.png" fluid></b-img>

                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>

          </slide>

          <slide class="p-2">
            <b-card>
              <b-card-text>
                <b-img src="@/assets/imgs/services/marketing.png" fluid></b-img>

                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>

          </slide>

           <slide class="p-2">
            <b-card>
              <b-card-text>
                <b-img src="@/assets/imgs/services/marketing.png" fluid></b-img>

                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>

          </slide>

           <slide class="p-2">
            <b-card>
              <b-card-text>
                <b-img src="@/assets/imgs/services/run-of-site.png" fluid></b-img>

                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>

          </slide>
          <slide class="p-2">
            <b-card>
              <b-card-text>
              <b-img src="@/assets/imgs/services/crisis.png" fluid></b-img>

                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>

          </slide>

          <slide class="p-2">
            <b-card>
              <b-card-text>
                <b-img src="@/assets/imgs/services/cpcv.png" fluid></b-img>
                <h4 class="my-5">MEDIA PRODUCTION</h4>
              </b-card-text>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
    </b-container>
  </section>
</template>

<script>
export default {  
 
};
</script>
