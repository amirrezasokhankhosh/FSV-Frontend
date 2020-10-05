<template>
  <div class="new_shopping_card"></div>
</template>

<script>
const axios = require('axios');
export default {
  name: "New_shopping_card",
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .post(
          "http://127.0.0.1:3333/shoppingcard",
          {},
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        )
        .then(() => {
          this.$router.push('/shopping_cards');
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