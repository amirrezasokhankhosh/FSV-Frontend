<template>
  <div class="new_comment">
      <h1>New comment</h1>
      <input type="text" v-model="message" placeholder="Your comment">
      <button type="submit" @click="saveComment()">Submit</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "New_comment",
  data() {
    return {
      message: null,
    };
  },
  methods: {
    saveComment() {
      var userToken = localStorage.getItem("userToken");
      var url = `http://localhost:3333/comment/${this.$route.params.product_id}`;
      if (userToken) {
        axios
          .post(
            url,
            {
              message : this.message,
            },
            {
              headers: { authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push(`/product/${this.$route.params.product_id}`);
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