<template>
  <div class="customer">
    <h1>Register to a customer</h1>
    <select v-model="citySelected">
      <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{city.name}}</option>
    </select>
    <button type="submit" @click="saveCustomer()">Submit</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Customer",
  data() {
    return {
      cities: [],
      citySelected: null,
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/cities", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.cities = response.data;
        });
    } else {
      alert("You need to login first!");
      this.$router.push("http://localhost:8080/login");
    }
  },
  methods: {
    saveCustomer() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post(
            "http://127.0.0.1:3333/customer",
            {
              city: this.citySelected,
            },
            {
              headers: { Authorization: `Bearer ${userToken}` },
            }
          )
          .then(() => {
            this.$router.push("/customer_dashboard");
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