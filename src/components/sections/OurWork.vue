<template>
  <!-- Our Work Section -->
  <section id="work" class="pb-5 infected">
    <header class="py-3 text-center bg-white pt-5">
      <b-img src="@/assets/imgs/logo/greendivider.png" alt="" height="90" class="pt-3" ></b-img>

      <h2 class="insight2 text-dark mb-5 pb-2 pt-3">
        <small class="text-muted mt-5"><strong>PORTFOLIO</strong></small><br />
        Our<strong>WORK</strong>
      </h2>
    </header>

    <b-row class="pt-1 pt-md-5">
      <b-col cols="12" md="3" class="px-0">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/1.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/2.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/3.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0 d-none d-md-block">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/1.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0 d-none d-md-block">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/2.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0 d-none d-md-block">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/3.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0 d-none d-md-block">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/1.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="3" class="px-0 d-none d-md-block">
        <div class="member-bg" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/work/1.png') + ')' }">
          <div class="bio p-4 ">
            <div class="vertical-center">
              <h6>Project Name</h6>
              <p>Client Name</p>

            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mx-0 mb-5 d-none py-5 text-center">
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
};
</script>
