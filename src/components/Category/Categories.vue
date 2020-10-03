<template>
  <div class="categories">
    <h1>Categories</h1>
    <div v-if="categories[0]">
      <ul>
        <li v-for="category in categories" v-bind:key="category.id">
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No categories added yet!</p>
    </div>
    <router-link to="/new_category">Add a Category</router-link>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Categories",
  data() {
    return {
      categories: Array,
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/categories", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.categories = response.data;
        });
    } else {
      alert("You need to login first!");
      this.$router.push("http://localhost:8080/login");
    }
  },
};
</script>

<style>
</style>