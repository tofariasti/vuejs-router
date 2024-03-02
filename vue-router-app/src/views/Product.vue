<template>
  <h3>Product</h3>
</template>
  
<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.params);
  console.log(route.query);
  console.log(route.meta);
</script>

<style lang="css" scoped>

</style>