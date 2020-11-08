<template>
  <div class="tos">
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100">
    <Navbar />
    </section>
    <section id="content" class="py-2 py-lg-5 bg-white mb-5">
      <b-container>
      <h1>Terms & Conditions</h1>
      <hr />
      <p class="text-muted">Some text that will be Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, at, corrupti quo sed aut nobis doloremque odit accusantium iusto et quos provident voluptatem reprehenderit beatae quisquam consequatur dolorem perspiciatis earum.</p>
    </b-container>

    </section>
    
    <Footer />
    
  </div>
</template>

<script>
import Navbar from '@/components/_Navbar.vue';
import Footer from '@/components/_CleanFooter.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
};
</script>
