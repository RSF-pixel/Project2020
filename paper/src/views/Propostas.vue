<template>
    <SideBar />
    <!--
    <h1>Propostas</h1>
    <router-link :to="{ name: 'Submeter' }">Submeter</router-link> |
    <router-link :to="{ name: 'GestaoP' }">Gerir</router-link>
    -->
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>
<style>
  .testing{
    height: 100%;
  }
</style>
