<template>
  <div class="new_product">
    <h1>New product</h1>
    <input type="text" v-model="name" placeholder="Name" />
    <input type="number" v-model="price" placeholder="Price" />
    <select v-model="categoriesSelected[0]">
      <option v-for="category in categories" v-bind:key="category.id" v-bind:value="category.id">
        {{ category.name }}
      </option>
    </select>
    <br />
    <button type="submit" @click="saveProduct()">Submit</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "New_product",
  data() {
    return {
      name: null,
      price: null,
      categoriesSelected: [],
      categories: [],
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/categories", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.categories = response.data;
        });
    } else {
      alert("You need to login first!");
      this.$router.push("http://localhost:8080/login");
    }
  },

  methods: {
    saveProduct() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .post("http://127.0.0.1:3333/product",{
            name : this.name,
            price : this.price,
            categories : this.categoriesSelected
          } ,{
            headers: { authorization: `Bearer ${userToken}` },
          })
          .then(() => {
            this.$router.push('/products')
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