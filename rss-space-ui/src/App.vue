<template>
    <div>
    <Navbar />
    <feedProvider />
    <FeedContent />
    <go-top bg-color="#16A2B8"></go-top>
    </div>
</template>
<script src="vue.js"></script>
<script src="vue-go-top.min.js"></script>
<script>

import Navbar from './components/nav-bar.vue'
import feedProvider from './components/feed-provider-selector.vue'
import FeedContent from './components/feed-content.vue'
import GoTop from '@inotom/vue-go-top';


export default {
  name: 'app',
  components: {
    Navbar,
    feedProvider,
    FeedContent,
    GoTop
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
