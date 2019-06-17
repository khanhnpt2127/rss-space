<template>
  <div style="margin-top: 20px;">
    <b-container>
      <!--Template-->
      <div style="margin-right: 36px;">
        <div>
            <div style="width: 10px; height: 30px ; background-color: red; display:inline-block" />
            <h3 style="display:inline-block; vertical-align: center; margin-left: 10px; text-align: center">BBC <span> <font-awesome-icon icon="cog" /> </span></h3>
        </div>
        <b-list-group>

          <b-list-group-item href="#" target="_blank" class="flex-column align-items-start" style="padding:20px; padding-right: 20px">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Feed Title </h5>
              <small class="text-muted">Time</small>
            </div>

            <p class="mb-1"> Feed Description </p>

          </b-list-group-item>



        </b-list-group>
      </div>
    </b-container>
  </div>
</template>




<script>
export default {
  name: "FeedContent"
};
</script>
