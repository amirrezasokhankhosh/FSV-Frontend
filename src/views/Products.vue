<template>
  <div class="products">
      <Products/>
  </div>
</template>

<script>

import Products from '@/components/Product/Products.vue'
export default {
    name: 'Products_view',
    components: {
        Products
    }
}
</script>