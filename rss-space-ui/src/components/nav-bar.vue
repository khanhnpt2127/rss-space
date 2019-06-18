<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">RSS-Space</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="#">
            <span>
              <font-awesome-icon icon="newspaper"/>
            </span> News
          </b-nav-item>
          <b-nav-item href="#">
            <span>
              <font-awesome-icon icon="burn"/>
            </span> Hot
          </b-nav-item>
          <b-nav-item v-if="isLogin" v-b-modal.addNewProviderModal>
            <span>
              <font-awesome-icon icon="plus-square"/>
            </span> New Feed
          </b-nav-item>
          <b-nav-item v-if="!isLogin" v-b-modal.LoginModal>
            <span>
              <font-awesome-icon icon="sign-in-alt"/>
            </span> Login
          </b-nav-item>
          <b-nav-item v-if="isLogin">
            <span>
              <font-awesome-icon icon="sign-out-alt"/>
            </span> Logout
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-modal id="addNewProviderModal" title="Add New Feed Provider">
      <!--TODO: Add Validation-->
      <label for="input-name">Name:</label>
      <b-form-input id="input-name" :state="null" placeholder></b-form-input>

      <label for="input-link" style="margin-top:10px">Link:</label>
      <b-form-input id="input-link" :state="null" placeholder></b-form-input>
    </b-modal>

    <b-modal id="LoginModal" title="Add New Feed Provider">
      <!--TODO: Add Validation-->
      <label for="input-username">UserName:</label>
      <b-form-input id="input-username" :state="null" placeholder></b-form-input>

      <label for="input-password" style="margin-top:10px">Password:</label>
      <b-form-input id="input-password" type="password" :state="null" placeholder></b-form-input>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLogin: false,
    };
  }
};
</script>