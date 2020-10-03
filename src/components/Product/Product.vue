<template>
  <div class="product">
    <h1>{{ product.name }}</h1>
    <h3>Price : {{ product.price }}</h3>
    <div v-if="comments[0]">
			<h3>Comments :</h3>
      <ul>
        <li v-for="comment in comments" v-bind:key="comment.id">
          <router-link v-bind:to="'/comment/'+ comment.id">{{comment.message}}</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No comments added yet.</p>
    </div>
    <router-link v-bind:to="'/new_comment/' + this.$route.params.product_id">add a comment</router-link>
    <ul>
			<h3>Categories :</h3>
      <li v-for="category in categories" v-bind:key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Product",
  data() {
    return {
      product: {},
      comments: [],
      categories: [],
    };
  },
  mounted() {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      var url = `http://localhost:3333/product/${this.$route.params.product_id}`;
      axios
        .get(url, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.product = response.data;
          this.comments = response.data.comments;
					this.categories = response.data.categories;
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