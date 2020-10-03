<template>
  <div class="comment"></div>
  <h2>Comment</h2>
  <p>{{comment.message}}</p>
</template>

<script>
const axios = require('axios');
export default {
  name: "Comment",
  data() {
    return {
      comment: {},
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      var url = `http://localhost:3333/comment/${this.$route.params.comment_id}`;
      axios
        .get(url, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.comment = response.data.comment;
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