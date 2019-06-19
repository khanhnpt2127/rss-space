<template>
  <!--
    <div
      style="background-color: #E9ECEF; padding-top: 20px; padding-bottom: 20px; padding-left: 10px; padding-right:10px">
      <b-container>
        <b-card-group deck>
          <b-card style="max-width: 15rem; background-color: " title="BBC" class="text-center">
            <b-card-text>Politics</b-card-text>
            <b-button href="#" variant="primary">Follow</b-button>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
  -->
  <div
    style="background-color: #E9ECEF; padding-top: 20px; padding-bottom: 20px; padding-left: 10px; padding-right:10px">
    <b-container>
      <md-card>
        <md-card-media>
          <!-- swiper -->
          <swiper :options="swiperOption">
            

            <swiper-slide v-for="feed in feedProviders" :key="feed._id">
              <b-card style="max-width: 20rem; background-color: " img-src="" img-alt="Image" img-top v-bind:title="feed.feedName" class="text-center">

                <b-card-text> {{ feed.name }}</b-card-text>
                <b-button href="#" variant="primary">Follow</b-button>
              </b-card>
            </swiper-slide>





            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </md-card-media>
      </md-card>
    </b-container>
  </div>
</template>

<script>

// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: "feedProvide",
    components: {
        swiper,
        swiperSlide
    },
        mounted() {
            fetch("http://localhost:3000/api/feed/")
            .then(res => res.json())
            .then((data) => {
                this.feedProviders = data
            })
        }
    , 
    data() {
        return {
          swiperOption: {
          slidesPerView: 3,
          spaceBetween: 5,
          slidesPerGroup: 3,
          loop: false,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
          },
          feedProviders: []
        }
    },
}
</script>

