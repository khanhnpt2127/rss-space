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
            <swiper-slide>
              <b-card style="max-width: 15rem; background-color: " img-src="http://i2.cdn.turner.com/cnn/2015/images/09/24/cnn.digital.png" img-alt="Image" img-top title="BBC 2" class="text-center">

                <b-card-text>Politics</b-card-text>
                <b-button href="#" variant="primary">Follow</b-button>
              </b-card>
            </swiper-slide>

            <swiper-slide>
              <b-card style="max-width: 15rem; background-color: " title="BBC 1" class="text-center">
                <b-card-text>Politics</b-card-text>
                <b-button href="#" variant="primary">Follow</b-button>
              </b-card>
            </swiper-slide>

            <swiper-slide>
              <b-card style="max-width: 15rem; background-color: " title="BBC 3" class="text-center">
                <b-card-text>Politics</b-card-text>
                <b-button href="#" variant="primary">Follow</b-button>
              </b-card>
            </swiper-slide>

            <swiper-slide>
              <b-card style="max-width: 15rem; background-color: " title="BBC 3" class="text-center">
                <b-card-text>Politics</b-card-text>
                <b-button href="#" variant="primary">Follow</b-button>
              </b-card>
            </swiper-slide>


            <swiper-slide>
              <b-card style="max-width: 15rem; background-color: " title="BBC 3" class="text-center">
                <b-card-text>Politics</b-card-text>
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

<<script>

// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: "feedProvide",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
          swiperOption: {
          slidesPerView: 4,
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
        }
        }
    },
}
</script>

