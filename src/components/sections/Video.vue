<template>
  <!-- Youtube Video Section -->
  <section id="video" class="py-2 py-md-5">
    <div class="row mx-0">
      <!-- it overflows because it is not inside a contianer thus adding mx-0 -->
      
      <b-col md="4" offset-md="1" class="p-2 p-md-5 text-center text-md-right">
        <header>
            <b-img src="@/assets/imgs/logo/greendivider.png" alt="" height="90" class="pt-3" ></b-img>
            <h2 class="insight2 text-dark mb-1 mb-md-5 pb-2 pt-3">
              <small class="text-muted mt-5"><strong>PROMO VIDEO</strong></small><br />
              It could be <br /><strong>YOURS</strong>
            </h2>
        </header>
        
      </b-col>

      <b-col md="7" class="youtube-video">
        <b-embed type="video" aspect="16by9" controls :poster="require('@/assets/imgs/youtube/youtube-video1600.png')">
          <source src="@/assets/videos/Photography.mp4" type="video/mp4">
        </b-embed>
      </b-col>
    </div>
  </section>
</template>

<script>
export default {
};
</script>
