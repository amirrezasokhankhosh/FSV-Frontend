<template>
  <div class="orders">
    <h1>Orders</h1>
    <div v-if="orders[0]">
      <ul>
        <div v-for="order in orders" v-bind:key="order.id">
          <li>
            {{order}}
          </li>
        </div>
      </ul>
    </div>
    <div v-else>
      <p>No orders added yet.</p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Orders",
  data() {
    return {
      orders: [],
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/orders", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.orders = response.data;
          console.log(this.orders);
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