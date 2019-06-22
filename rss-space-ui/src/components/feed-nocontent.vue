<template>
        <div style="text-align: center; background-color: rgb(215, 216, 216)">
        <b-container fluid style=" height: 100%; min-height: 100%; height:auto !important; padding: 100px">
            <h2 style="text-align: center; color: #636161"> oops !!! Please Login to subscribe New Feed</h2>
            <h2 style="text-align: center; color: #636161"> or </h2>
            <b-button variant="success" v-on:click="handleItemClick" style="text-align: center">Get All Feed</b-button>
        </b-container>
        </div> 
</template>




<script>

import { isShowAllContent } from '../shared/isLogin.js'

export default {
  name: "FeedNoContent",
  methods: {
    handleItemClick() {
       this.$isLoginGlobal = true
        
    }
  },
 
  data() {
      return {
        isShowAllContentN: isShowAllContent 
       
      }
  }
};



</script>

<style>
 
</style>
