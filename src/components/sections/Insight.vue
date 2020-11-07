<template>
  <!-- Insight Section -->
  <section id="insight" class="pb-3 pb-md-5 text-center infected" 
  :style="{ backgroundImage: 'url(' + publicPath + '/assets/imgs/insight/insight_dot_map.png)' }">
  <div class="tt-shape tt-shape-top tt-shape-flip" data-negative="false">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style="width:calc(100% + 1.3px); height:150px;">
    <path class="tt-shape-fill" style="fill:#ffffff;" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path> 
    <path class="tt-shape-fill" style="fill:#ffffff;" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path> 
    <path class="tt-shape-fill" style="fill:#ffffff;" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path> 
    </svg></div>
    <header>
      <b-img :src="publicPath + 'assets/imgs/logo/whitedivider.png'" alt="" height="90" class="pt-3"></b-img>
      <h2 class="insight2 text-white mb-5 pb-2 pt-3">
        <small class="mt-5"><strong>{{this.jsonData.sections.insight.subtitle }}</strong></small><br />
        <span v-html="this.jsonData.sections.insight.title"></span>
      </h2>
    </header>

    <b-container>
        <b-card-group id="insightcard" class="mb-md-5 py-3 py-md-5" deck>
          <b-card v-for="item in this.jsonData.sections.insight.content" v-bind:key="item.title" :class="item.class">
            <b-row no-gutters>
              <b-col cols="12" md="4">
                <b-img fluid :src="publicPath + item.icon" alt="item.title"></b-img>
              </b-col>
              <b-col cols="12" md="8">
                <h4 class="counter"><ICountUp :delay="delay" :endVal="item.number" :options="options" @ready="onReady" /></h4>
                <small>TOTAL CLIENTS</small>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
    </b-container>
  </section>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {  
  components: {
      ICountUp
    },
 data() {
    return {
      publicPath: process.env.BASE_URL,
      delay: 1000,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: '',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    };
  },
  methods: {
      onReady: function(instance, CountUp) {
        const that = this;
        //instance.update(that.endVal + 100);
      }
    }

};
</script>
