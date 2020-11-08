<template>
  <!-- Services Section -->
  <section id="services" class="py-1 pb-5 py-lg-5 bg-white overflow-hidden">
    <header class="py-2 py-lg-3 text-center bg-white pt-5">
      <b-img :src="publicPath + '/assets/imgs/logo/greendivider.png'" alt="" height="90" class="pt-3 d-none d-lg-inline" ></b-img>

      <h2 class="insight2 text-dark mb-2 mb-lg-5 pb-2 pt-3">
        <strong v-html="this.jsonData.sections.services.title"></strong><br />
        <small class="text-muted"><strong v-html="this.jsonData.sections.services.subtitle"></strong></small>
      </h2>
    </header>

    <b-container>
      <b-row class="text-center">
        <b-col cols="12">
          <carousel :loop="true" :paginationEnabled="false"  :perPage="1" :perPageCustom="[[600, 2], [900, 3], [1199, 4]]">
            <slide class="p-1" v-for="service in this.jsonData.sections.services.content" v-bind:key="service.title">
              <b-card class="py-3" :style="{ backgroundImage: 'url(' + publicPath + service.background }">
                <b-card-text>
                  <h4 class="mb-4" v-text="service.title"></h4>
                  <p v-text="service.breif"></p>
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
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
 methods: {
    letterIcon: function(path) {
      return require("@" + path);
    },
    imglink: function(someImageName) { 
      return require(`..${someImageName}`);
    }
  },
};
</script>
