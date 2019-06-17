<template>
    <div>
    <Navbar />
    <feedProvider />
    </div>
</template>

<script>

import Navbar from './components/nav-bar.vue'
import feedProvider from './components/feed-provider-selector.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    feedProvider
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
