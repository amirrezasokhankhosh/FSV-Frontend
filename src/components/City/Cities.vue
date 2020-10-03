<template>
  <div class="cities">
    <h1>Cities</h1>
    <div v-if="cities[0]">
      <ul>
        <li v-for="city in cities" v-bind:key="city.id">{{city.name}}</li>
      </ul>
    </div>
    <div v-else>
      <p>No cities added yet!</p>
    </div>
    <router-link to="/new_city">Add a city</router-link>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Cities",
  data() {
    return {
      cities: [],
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get(
          "http://127.0.0.1:3333/cities",
          {
            headers: { authorization: `Bearer ${userToken}` },
          }
        )
        .then((response) => {
          this.cities = response.data
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