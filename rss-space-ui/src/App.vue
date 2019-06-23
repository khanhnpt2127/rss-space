<template>
    <div >
    <Navbar  />
    <feedProvider v-if="!$isLoginMain" />
    <feedProviderUser v-if="$isLoginMain" />
    <FeedContent v-if="$isLoginGlobal && !$isLoginMain" />
    <FeedNoContent v-if="!$isLoginGlobal && !$isLoginMain" />
     <FeedContentUser v-if="$isLoginMain" />
    <go-top bg-color="#16A2B8"></go-top>
    </div>
</template>
<script src="vue.js"></script>
<script src="vue-go-top.min.js"></script>
<script>

import Navbar from './components/nav-bar.vue'
import feedProvider from './components/feed-provider-selector.vue'
import FeedContent from './components/feed-content.vue'
import FeedNoContent from './components/feed-nocontent.vue'
import GoTop from '@inotom/vue-go-top';
import FeedContentUser from './components/feed-content.user.vue'
import feedProviderUser from './components/feed-provider-selector.user' 
export default {
  name: 'app',
  mounted() {
    this.$userId = $cookies.get('userId')
    if(this.$userId) {
      this.$isLoginGlobal = true
      this.$isLoginMain = true
    } 
    //console.log($cookies.get('userId'))
    // 30 day after, expire
    this.$cookies.config('30d')

  }
  ,
  components: {
    Navbar,
    feedProvider,
    FeedContent,
    GoTop,
    FeedNoContent,
   FeedContentUser,
   feedProviderUser 
  },
  data() {
    return {
      isShowContent: this.store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
