<template>
  <!-- Get Started Section -->
  <section
    id="getstarted"
    class="py-5 text-center separatorArrow bg-white infected"
    :style="{
      backgroundImage:
        'url(' + publicPath + 'assets/imgs/getstarted/getstarted.png)',
    }"
  >
    <header>
      <b-img
        :src="publicPath + '/assets/imgs/logo/greendivider.png'"
        alt=""
        height="90"
        class="pt-3"
      ></b-img>
      <h2 class="insight2 text-dark mb-5 pb-2 pt-3">
        <small class="text-muted mt-5"><span v-html="this.jsonData.sections.getstarted.title"></span></small><br />
          
          <strong>{{ this.jsonData.sections.getstarted.subtitle }}</strong>
      </h2>
    </header>

    <b-container>
      <b-row>
        <b-col cols="12" md="6" class="mb-5 mb-md-0 text-md-right">
          <a role="button" class="btn btn-success py-3 px-5 text-dark border-0 font-weight-normal" href="#contact" >REQUEST CONSULTATION</a>
        </b-col>
        <b-col cols="12" md="6" class="text-md-left">
          <a role="button" class="btn btn-danger py-3 px-5 text-white border-0 font-weight-normal" :href="publicPath + this.jsonData.sections.getstarted.content.profile_link">
            <i class="far fa-file-pdf mr-2"></i> DOWNLOAD PROFILE</a>
        </b-col>
      </b-row>
    </b-container>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-5 mb-md-0 text-md-right"></div>
        <div class="col-12 col-md-6 text-md-left"></div>
      </div>
    </div>
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
