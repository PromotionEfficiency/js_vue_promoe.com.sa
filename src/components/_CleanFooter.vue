<template>
  <!-- Footer -->
  <footer class="pt-5 pb-3 text-white">

    <b-container class="text-center">
      <b-row>
        <b-col cols="12" md="12" class="text-md-center mb-md-0 mb-2">
          <b-img :src="publicPath + '/assets/imgs/logo/logo-footer.svg'" alt="logo" class="" ></b-img>
          <h6 class="mt-4">Your Hike to <span>PEAK!</span></h6>
        </b-col>
      </b-row>

      <div>
        <ul class="inline-list social mt-4 px-0 pt-3 pb-0 mb-0 text-center">
          <li v-for="item in this.jsonData.general.social_accounts" v-bind:key="item.title" class="list-inline-item mx-2">
            <a :href="item.link" class="text-white">
              <i :class="item.fav_icon"></i>
            </a>
          </li>
        </ul>
        <p class="copyright pt-0 text-center">
          <a class="text-light" :href="this.jsonData.general.url">{{ this.jsonData.general.site_name }}</a> All right reserved. copyright 2020
        </p>
      </div>
    </b-container>
  </footer>
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
