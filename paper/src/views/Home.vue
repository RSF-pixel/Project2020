<template>
  <div>
    <SideBar />
    <h1>Home</h1>
    <span>
      <router-link @click.native='desconectar' to="/autenticacao">Descontectar</router-link>
    </span>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Home",
  methods:{
    desconectar(){
      this.$store.dispatch("desconectar")
    }
  },
  components: {
    SideBar
  }
};
</script>
