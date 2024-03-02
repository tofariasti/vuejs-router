<template>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <routerLink to="/product">Product</routerLink> -->
  
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink :to="{name: 'product', params:{id:12,name:'Alexandre'}}">Product</RouterLink>

  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="css" scoped>

</style>