<template>
  <div class="products">
    <h1>Products</h1>
    <div v-if="products[0]">
      <ul>
        <div v-for="product in products" v-bind:key="product.id">
          <li>
            <router-link v-bind:to="'/product/' + product.id">{{
              product.name
            }}</router-link>
          </li>
        </div>
      </ul>
    </div>
    <div v-else>
      <p>No products added yet!</p>
    </div>
    <router-link to="/new_product">Add a product</router-link>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Products",
  data() {
    return {
      products: Array,
    };
  },
  mounted: function () {
    // get Products with axios from adonis. (remember the auth tokens!).
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/products", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.products = response.data;
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