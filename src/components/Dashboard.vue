<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="checkUser()">
      <router-link to="/products">Products</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/logout">Log out</router-link>
    </div>
    <div v-else>
      <p>You need to login first.</p>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {
    checkUser() {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>