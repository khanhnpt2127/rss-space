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
              <b-card style="max-height: 10rem;max-width: 20rem;" img-src="" img-alt="Image" img-top v-bind:title="feed.feedName" class="text-center text-break text-truncate" >

                <b-card-text> {{ feed.name }}</b-card-text>
                <b-button v-if="!feed.isSub" v-on:click="handleSub(feed._id)" href="#" style="background-color: #17a2b8; border: none; display: block; margin-left: 20px; margin-right: 30px" variant="primary">Subcribe</b-button>

                <b-button v-if="feed.isSub" v-on:click="handleUnSub(feed._id)" href="#" style="background-color: #17a2b8; border: none; display: block; margin-left: 20px; margin-right: 30px" variant="primary"> Unsubcribe </b-button>
              </b-card>
            </swiper-slide>





            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </md-card-media>
      </md-card>
    </b-container>
      <b-modal id="errLogin" title="BootstrapVue">
    <p class="my-4">Please Login to Subscribe !!!</p>
  </b-modal>
  </div>
</template>

<script>

// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: "feedProvideUser",
    components: {
        swiper,
        swiperSlide
    },
        mounted() {

          const bodyData = `{ "userId": "${this.$userId}"}`
          //console.log(bodyData)
         fetch('http://localhost:3000/api/feed/getByUser', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then((data) => {
                //console.log(data)
                 this.feedProviders = data
                
            })

        }
    ,
    methods: {
      handleSub(id) {
        if(this.$isLoginMain) {
          //console.log(id)
         
          const bodyData = `{ "userId": "${this.$userId}", "feedProviderId": "${id}"}`
          //console.log(bodyData)
         fetch('http://localhost:3000/api/user/subscribe', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then((data) => {
              //TODO: Need To re-Render All Conponent
            }) 


          //this.$forceUpdate()
        } else {
          //console.log("test")
          this.$bvModal.show("errLogin")

        }
      },
      handleUnSub(id) {
        if(this.$isLoginMain) {
          //console.log(id)
         
          const bodyData = `{ "userId": "${this.$userId}", "feedProviderId": "${id}"}`
          //console.log(bodyData)
         fetch('http://localhost:3000/api/user/unsubscribe', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then((data) => {
              //TODO: Need To re-Render All Conponent
            }) 


          //this.$forceUpdate()
        } else {
          //console.log("test")
          this.$bvModal.show("errLogin")

        }
      }
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
          feedProviders: [],
          
        }
    },
}
</script>

