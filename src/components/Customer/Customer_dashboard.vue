<template>
  <div class="customer_dashboard">
      <h1>Customer Dashboard</h1>
      <router-link to="/checkout_infos">Checkout infos</router-link> | 
      <router-link to="/shopping_cards">Shopping cards</router-link> |
      <router-link to="/orders">Orders</router-link>
  </div>
</template>

<script>
export default {
    name:'customer_dashboard',
    data(){
        return{

        };
    }
}
</script>

<style>

</style>