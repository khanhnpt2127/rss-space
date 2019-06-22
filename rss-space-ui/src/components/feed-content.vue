<template>
  <div style="margin-top: 20px;">
    <b-container>
      <!--Template-->
      <div style="margin-top: 10px;margin-right: 36px;">
        <div style="text-align: center">
          <img src='../../public/103.gif' style="text-align: center" v-if="!isLoaded"/>
        </div>
        <div v-for="(feed,index) in feedData" :key="feed.feedId">
        <div style="margin-top: 20px;">
            <b-button size="sm" v-b-toggle="'accordion-' + index" style="margin-right: 10 px; background-color:  ;border: none; "> <font-awesome-icon style="font-size: 30px;" icon="caret-down" /> </b-button>
            <div style="display:inline-block; vertical-align: center; margin-left: 10px; text-align: center"> <span style="font-size: 20px; font-weight: bold" > {{feed.feedName}} </span> <span> <font-awesome-icon style="font-size: 18px;" icon="cog" /> </span></div>
        </div>
        <b-collapse v-bind:id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
        <b-list-group  style="padding: 20px;">

          <b-list-group-item v-for="feedArticle in feed.articles" v-on:click="handleItemClick(feedArticle._id)" :key="feedArticle._id" v-bind:href="feedArticle.link"  target="_blank" class="flex-column align-items-start" style="padding:20px; padding-right: 20px; margin-top: 10px;">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{feedArticle.title}} </h5>
              <small class="text-muted">{{feedArticle.pubDate}}</small>
            </div>

            <p class="mb-1"> <span v-html="feedArticle.description"> </span></p>

          </b-list-group-item>



        </b-list-group>
        </b-collapse>
      </div>
      </div>
    </b-container>
  </div>
</template>




<script>
export default {
  name: "FeedContent",
  mounted() {
       fetch("http://localhost:3000/api/feedArticles/")
            .then(res => res.json())
            .then((data) => {
                this.feedData = data
                this.isLoaded = true
            })
  },
  methods: {
    handleItemClick() {

      //console.log(id)
    }
  },
  data() {
      return {
        feedData: [],
        isLoaded: false
       
      }
  }
};



</script>
