<template>
  <div class="new_city">
      <h1>New city</h1>
      <input type="text" v-model="name" placeholder="Name">
      <button type="submit" @click="saveCity()">Submit</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "New_city",
  data() {
    return {
      name: null,
    };
  },
  methods: {
    saveCity() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post(
            "http://127.0.0.1:3333/city",
            {
              name: this.name,
            },
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push("/cities");
          });
      } else {
        alert("You need to login first!");
        this.$router.push("http://localhost:8080/login");
      }
    },
  },
};
</script>

<style>
</style>