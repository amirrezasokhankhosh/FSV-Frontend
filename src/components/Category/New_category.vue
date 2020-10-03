<template>
  <div class="new_category">
    <h1>New category</h1>
    <input type="text" v-model="name" />
    <button type="submit" @click="saveCategory()">Submit</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "New_category",
  data() {
    return {
      name: null,
    };
  },
  methods: {
    saveCategory() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post(
            "http://127.0.0.1:3333/category",
            {
              name: this.name,
            },
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push("/categories");
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