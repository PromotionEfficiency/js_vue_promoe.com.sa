<template>
<!-- Why Us Section -->
  <section id="whyus" class="px-2 py-md-5  bg-white infected">
    <b-container>
      <header>
        <h2 class="text-center mb-5 pt-3">
          <small class="text-muted"><strong v-html="this.jsonData.sections.aboutus.subtitle"></strong></small><br />
          <span v-html="this.jsonData.sections.aboutus.title"></span>
        </h2>
      </header>
      <b-container>
        <b-row class="my-2 my-md-5 py-2 py-md-5">
          <b-col v-for="about in this.jsonData.sections.aboutus.content" v-bind:key="about.number" cols="12" md="6" class="px-2 px-md-5">
            <div class="icon">
              <span class="text-muted pr-3 d-none d-md-inline">{{ about.number }}</span>
              <b-img :src="publicPath + about.icon" fluid height="54" alt="Responsive image"></b-img>
            </div>
            <h4 class="text-muted my-4"><strong>{{ about.title }}</strong></h4>
            <div class="p-0 pl-md-5">{{ about.text }}</div>
          </b-col>
          <div class="line"></div>
        </b-row>
      </b-container>
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
