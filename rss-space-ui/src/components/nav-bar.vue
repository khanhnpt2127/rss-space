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
          <b-nav-item  v-show="isLogin" v-b-modal.addNewProviderModal>
            <span>
              <font-awesome-icon icon="plus-square"/>
            </span> New Feed
          </b-nav-item>
          <b-nav-item v-if="!isLogin" v-b-modal.LoginModal>
            <span>
              <font-awesome-icon icon="sign-in-alt"/>
            </span> Login
          </b-nav-item>

          <b-nav-item v-if="!isLogin" v-b-modal.SignUpModal>
            <span>
              <font-awesome-icon icon="user-plus"/>
            </span> Sign Up
          </b-nav-item>
          

          <b-nav-item v-show="isLogin" v-on:click="handleLogout" >
            <span>
              <font-awesome-icon icon="sign-out-alt"/>
            </span> Logout
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-modal id="addNewProviderModal" @ok="handleNewFeed" title="Add New Feed Provider">
      <!--TODO: Add Validation-->
      <label for="input-name">Name:</label>
      <b-form-input id="input-name" :state="null" placeholder v-model="feedName"></b-form-input>

      <label for="input-link" style="margin-top:10px">Link:</label>
      <b-form-input id="input-link" :state="null" placeholder v-model="feedLink"></b-form-input>
    </b-modal>

    <b-modal id="LoginModal" @ok="handleOk" title="Login">
      <!--TODO: Add Validation-->
      <label for="input-username">UserName:</label>
      <b-form-input id="input-username" v-model="username" :state="null" placeholder></b-form-input>

      <label for="input-password" style="margin-top:10px">Password:</label>
      <b-form-input id="input-password" v-model="password" type="password" :state="null" placeholder></b-form-input>
    </b-modal>

    <b-modal id="SignUpModal" @ok="handleSignUpOK" title="Sign Up">
      <!--TODO: Add Validation-->
      <label for="input-usernameSignUp">UserName:</label>
      <b-form-input id="input-usernameSignUp" v-model="usernameSignUp" :state="null" placeholder></b-form-input>

      <label for="input-passwordSignUp" style="margin-top:10px">Password:</label>
      <b-form-input id="input-passwordSignUp" v-model="passwordSignUp" type="password" :state="null" placeholder></b-form-input>
    </b-modal>




  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
     handleLogout() {
       this.isLogin = false
     },
     handleNewFeed(bvModalEvt) {
          const bodyData = `{ "name": "${this.feedName}", "link": "${this.feedLink}"}`
          
          fetch('http://localhost:3000/api/feed/', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then((data) => {
                if(data.msg != "duplicated") {
                  // success
                  console.log((this.$refs))
                }
            })

        // Prevent modal from closing
        bvModalEvt.preventDefault() 
     },
     handleOk(bvModalEvt) {
       
        // Trigger submit handler
        //this.handleSubmit()
        const bodyData = `{ "email": "${this.username}", "password": "${this.password}"}`
         
         fetch('http://localhost:3000/api/user/authenticate', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then((data) => {
              if (data.msg == "OK") {
              this.isLogin = true 
            } 
                

            })
        // Prevent modal from closing
        if(!this.isLogin)  bvModalEvt.preventDefault() 
     },

     handleSignUpOK(bvModalEvt) {
         const bodyData = `{ "email": "${this.usernameSignUp}", "password": "${this.passwordSignUp}"}`
          console.log(bodyData)
         fetch('http://localhost:3000/api/user/', {
            method: 'POST',
            body: bodyData,
            headers:{
              'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then((data) => {
              console.log(data)
             if (data.msg == "OK") {
              this.isLogin = true 
            } 
                
            })
        // Prevent modal from closing
        if(!this.isLogin)  bvModalEvt.preventDefault() 
     }
  }
  ,
  data() {
    return {
      isLogin: false,
      username: '',
      password: '',
      feedName: '',
      feedLink: '',
      usernameSignUp: '',
      passwordSignUp: ''
    };
  }
};
</script>