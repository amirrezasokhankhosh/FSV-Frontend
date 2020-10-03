<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="loginCheck">
      <router-link to="/products">Products</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/cities">Cities</router-link> |
      <router-link to="/logout">Log out</router-link> |
      <div v-if="customerRole">
        <router-link to="/customer_dashboard">Customer dashboard</router-link>
      </div>
      <!-- if adminrole -> admin dashboard -->
    </div>
    <div v-else>
      <p>You need to login first.</p>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: "Dashboard",
  data() {
    return {
      customerRole : false,
      adminRole : false,
      loginCheck : false,
    };
  },
  mounted : function(){
    var userToken = localStorage.getItem("userToken");
      if (userToken) {
        this.loginCheck = true
        axios
          .get(
            "http://127.0.0.1:3333/roles",
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then((response) => {
            var roles = response.data.roles;
            for (var i = 0 ; roles[i] ; i++){
              if(roles[i].name == 'Customer'){
                this.customerRole = true;
              }
              if(roles[i].name == 'Admin'){
                this.adminRole = true;
              }
            }
          });
      }
  }
};
</script>

<style>
</style>