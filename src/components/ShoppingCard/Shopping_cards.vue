<template>
  <div class="shopping_cards">
    <h1>Shopping cards</h1>
    <div v-if="shopping_cards[0]">
      <ul>
        <div
          v-for="shopping_card in shopping_cards"
          v-bind:key="shopping_card.id"
        >
          <ul>
            Shopping card from day :
            {{
              shopping_card.created_at
            }}
          </ul>
          <router-link v-bind:to="'/update_shopping_card/' + shopping_card.id"> Update this shopping card</router-link> |
          <router-link v-bind:to="'/new_order/' + shopping_card.id"> Move this to order</router-link>
        </div>
      </ul>
    </div>
    <div v-else>
      <p>No shopping cards added yet.</p>
    </div>
    <router-link to="/new_shopping_card">Add a shopping card</router-link>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Shopping_cards",
  data() {
    return {
      shopping_cards: [],
    };
  },
  mounted: function () {
    var userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios
        .get("http://127.0.0.1:3333/shoppingcards", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          this.shopping_cards = response.data;
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