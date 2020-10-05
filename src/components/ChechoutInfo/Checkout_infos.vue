<template>
  <div class="checkout_infos">
    <h1>Checkout infos</h1>
    <div v-if="checkout_infos[0]">
      <ul>
        <div
          v-for="checkout_info in checkout_infos"
          v-bind:key="checkout_info.id"
        >
          <li>
            Address : {{ checkout_info.address }} | Phone :
            {{ checkout_info.phone }}
          </li>
          <router-link
            v-bind:to="'/delete_checkout_info/' + checkout_info.id"
          >
          delete this
          </router-link>
        </div>
      </ul>
    </div>
    <div v-else>
      <p>No checkout infos added yet!</p>
    </div>
    <router-link to="/new_checkout_info">Add a checkout info</router-link>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Checkout_infos",
  data() {
    return {
      checkout_infos: [],
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/checkoutinfos", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.checkout_infos = response.data;
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