<template>
  <div class="delete_checkout_info">
    <h1>Delete</h1>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Delete_checkout_info",
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .delete(`http://127.0.0.1:3333/checkoutinfo/${this.$route.params.checkout_info_id}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(() => {
          this.$router.push('/checkout_infos');
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