<template>
  <!-- Our Work Section -->
  <section id="work" class="pb-5">
    <header class="py-3 text-center bg-white pt-5">
      <b-img :src="publicPath + 'assets/imgs/logo/greendivider.png'" alt="" height="90" class="pt-3" ></b-img>

      <h2 class="insight2 text-dark mb-5 pb-2 pt-3">
        <small class="text-muted mt-5"><strong>{{this.jsonData.sections.work.subtitle }}</strong></small><br />
        <span v-html="this.jsonData.sections.work.title"></span>
      </h2>
    </header>

    <b-row class="pt-1 pt-md-5" no-gutters>
      <b-col v-for="(item, index) in this.jsonData.sections.work.content" v-bind:key="item.title" cols="12" md="3" :class="{ 'd-none d-md-block': index+1 > 3 }" class="px-0">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + publicPath + item.picture }">
          <div class="bio p-4">
            <div>
              <h6>{{ item.project_name }}</h6>
              <p>{{ item.client_name }}</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3 d-block d-md-none py-5 text-center" no-gutters>
      <b-col>
        <a role="button" class="btn btn-primary py-3 px-4 border-0 text-dark font-weight-normal" href="#">SEE MORE</a>
      </b-col>
    </b-row>

    <svg id="special" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
      <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
    </svg>


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
