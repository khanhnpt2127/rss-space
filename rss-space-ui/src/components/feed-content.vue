<template>
  <div style="margin-top: 20px;">
    <b-container>
      <!--Template-->
      <div style="margin-top: 10px;margin-right: 36px;">
        
        <div v-for="feed in feedData" :key="feed.feedId">
        <div>
            <div style="width: 10px; height: 30px ; background-color: red; display:inline-block" />
            <h3 style="display:inline-block; vertical-align: center; margin-left: 10px; text-align: center"> {{feed.feedName}} <span> <font-awesome-icon icon="cog" /> </span></h3>
        </div>
        <b-list-group>

          <b-list-group-item v-for="feedArticle in feed.articles" :key="feedArticle._id" v-bind:href="feedArticle.link"  target="_blank" class="flex-column align-items-start" style="padding:20px; padding-right: 20px; margin-top: 10px;">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{feedArticle.title}} </h5>
              <small class="text-muted">{{feedArticle.pubDate}}</small>
            </div>

            <p class="mb-1"> <span v-html="feedArticle.description"> </span></p>

          </b-list-group-item>



        </b-list-group>
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
            })
  },
  data() {
      return {
        feedData: []
      }
  }
};
</script>
