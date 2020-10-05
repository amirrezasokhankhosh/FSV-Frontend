<template>
  <div class="new_checkout_info">
    <h1>New checkout info</h1>
    <input type="text" v-model="address" placeholder="Address">
    <input type="text" v-model="phone" placeholder="Phone">
    <button type="submit" @click="saveCheckout_info()">Save</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "New_checkout_info",
  data() {
    return {
      address: null,
      phone: null,
    };
  },
  methods: {
    saveCheckout_info() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post(
            "http://127.0.0.1:3333/checkoutinfo",
            {
              address : this.address,
              phone : this.phone
            },
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push('/checkout_infos');
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