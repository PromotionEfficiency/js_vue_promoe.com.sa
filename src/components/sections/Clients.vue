<template>
  <!-- Clients Section -->
  <section id="ourclients" class="py-2 py-md-5 bg-white text-center">
    <header>
      <b-img
        :src="publicPath + 'assets/imgs/logo/greendivider.png'" alt="" height="90" class="d-none d-md-inline pt-3"></b-img>

      <h2 class="pt-3">
        <strong>{{ this.jsonData.sections.clients.title }}</strong><br />
        <small class="text-muted"><strong>{{ this.jsonData.sections.clients.subtitle }}</strong></small>
      </h2>
    </header>

    <b-container class="py-3 py-md-5">
      <b-row class="text-center justify-content-md-center" no-gutters>
        <b-col v-for="item in this.jsonData.sections.clients.content" v-bind:key="item.client_name" cols="4" md="3" lg="2">
          <b-img :src="publicPath + item.logo" fluid  :alt="item.client_name"></b-img>
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
};
</script>
