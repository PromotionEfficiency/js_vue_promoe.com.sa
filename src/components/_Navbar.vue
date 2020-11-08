<template>
  <header class="container">
    <b-navbar type="dark" class="shadow text-white p-2 rounded-lg">
        <b-navbar-brand href="/">
            <b-img :src="publicPath + '/assets/imgs/logo/pe_logo_primary_dark_bg.svg'" fluid alt="Promo Logo" height="55" width="55"></b-img>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-button variant="transparent" right v-b-toggle.sidebar-variant><span class="navbar-toggler-icon"></span></b-button>
            <b-sidebar id="sidebar-variant" title="" backdrop width="100%" bg-variant="dark" text-variant="light" shadow >
              <div class="overlay-content">
                <router-link to="/">Home</router-link>
                <b-link :href="publicPath + '#whyus'">- Why Us</b-link>
                <b-link :href="publicPath + '#services'">- Services</b-link>
                <b-link :href="publicPath + '#work'">- Portfolio</b-link>
                <b-link :href="publicPath + '#contact'">- Contact Us</b-link>
                <hr />
                <router-link to="/jobs">Jobs Application</router-link>
              </div>
            </b-sidebar>
        </b-navbar-nav>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  mounted(){
    document.addEventListener('scroll', () => {
        stick_or_not()
    });
    stick_or_not()

    function stick_or_not() {
      const header = document.querySelector('section#hero header')
      const nav = document.querySelector('section#hero header nav')
      var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 100) {
          header.classList.add('sticky')
          nav.classList.remove('navbar-dark')
          nav.classList.add('navbar-light')
          nav.classList.add('text-white')
          nav.classList.remove('navbar-dark')

      } 
      else {
          header.classList.remove('sticky')
          nav.classList.add('navbar-dark')
          nav.classList.remove('navbar-light')
          nav.classList.remove('text-white')
          nav.classList.add('navbar-dark')
      }
    }
  },
  methods:{
    
  }
}
</script>