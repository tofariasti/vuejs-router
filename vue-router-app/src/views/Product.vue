<template>
  <h3>Product</h3>
</template>
  
<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.params.id);
</script>

<style lang="css" scoped>

</style>