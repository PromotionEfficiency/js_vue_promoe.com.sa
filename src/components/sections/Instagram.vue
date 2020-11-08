<template>
    <!-- Instagram Section -->
  <section id="instagram" class="bg-white pt-5 mt-5  overflow-hidden">
    <b-container>
      <b-row class="d-flex align-items-stretch">
        <b-col cols="12" lg="6" offset-lg="1" class="pr-0 pr-lg-5 text-center text-lg-right text" 
        :style="{ backgroundImage: 'url(' + publicPath + 'assets/imgs/instagram/bg.png)'}">
          <header>
            <h2 class="mb-5 pt-3">
                <span v-html="this.jsonData.sections.instagram.title"></span><br />
                <small class="text-muted"><strong v-text="this.jsonData.sections.instagram.subtitle"></strong></small>
            </h2>
          </header>
          <a :href="this.jsonData.general.social_accounts[1].link" role="button" class="btn btn-primary border-0 my-4 px-5 py-3">Click Here</a>
        </b-col>
        <b-col cols="12" lg="5" class="mobile" :style="{ backgroundImage: 'url(' + publicPath + 'assets/imgs/instagram/mobile.png)'}"></b-col>
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
