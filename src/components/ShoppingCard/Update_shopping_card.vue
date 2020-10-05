<template>
  <div class="update_shopping_card">
    <h1>Update the shopping card</h1>
    <!-- show what products that are selected now -->
    <select v-model="productsSelected" multiple >
      <option
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:value="product.id"
      >
        {{ product.name }}
      </option>
    </select>
    <button type="submit" @click="updateShopping_card()">Save</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Update_shopping_card",
  data() {
    return {
      products: [],
      productsSelected : [],
    };
  },
  mounted: function () {
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
  methods: {
    updateShopping_card() {
      var userToken = localStorage.getItem("userToken");
      if (userToken) {
        axios
          .put(
            `http://127.0.0.1:3333/shoppingcard/${this.$route.params.shopping_card_id}`,
            {
                products : this.productsSelected,
            },
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
  },
};
</script>

<style>
</style>