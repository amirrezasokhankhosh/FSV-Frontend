<template>
  <div class="new_order">
    <h1>New order</h1>
    <p>Select a checkout info :</p>
    <div v-if="checkout_infos[0]">
      <select v-model="checkout_infoSelected" >
        <option
          v-for="checkout_info in checkout_infos"
          v-bind:key="checkout_info.id"
          v-bind:value="checkout_info.id"
        >
          {{ checkout_info.address }} | {{checkout_info.phone}}
        </option>
      </select>
      <button type="submit" @click="saveOrder()">Save order</button>
    </div>
    <div v-else>
        <p>You need to add a checkout info</p>
        <router-link to="/new_checkout_info">Add a checkout info</router-link>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "New_order",
  data() {
    return {
      checkout_infos: [],
      checkout_infoSelected: null,
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
          console.log(this.checkout_infos);
        });
    } else {
      alert("You need to login first!");
      this.$router.push("http://localhost:8080/login");
    }
  },
  methods: {
    saveOrder() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post(
            "http://127.0.0.1:3333/order",
            {
              checkoutinfo_id: this.checkout_infoSelected,
              shoppingcard_id: this.$route.params.shopping_card_id,
            },
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push("/orders");
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