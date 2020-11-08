<template>
  <!-- Youtube Video Section -->
  <section id="video" class="py-2 py-xl-5">
    <b-row no-gutters>
      <b-col xl="3" offset-xl="1" class="p-2 p-xl-5 text-center text-xl-right">
        <header>
            <b-img :src="publicPath + 'assets/imgs/logo/greendivider.png'" alt="" height="90" class="pt-3 d-none d-lg-inline" ></b-img>
            <h2 class="insight2 text-dark mb-1 mb-lg-5 pb-2 pt-3">
              <small class="text-muted mt-5"><strong>{{ this.jsonData.sections.video.subtitle }}</strong></small><br />
              <span v-html="this.jsonData.sections.video.title"></span>
            </h2>
        </header>
      </b-col>

      <b-col xl="8" class="youtube-video">
        <b-embed type="video" aspect="16by9" controls :poster=" publicPath + this.jsonData.sections.video.content.poster ">
          <source :src="publicPath + this.jsonData.sections.video.content.url " type="video/mp4">
        </b-embed>
      </b-col>
    </b-row>
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
