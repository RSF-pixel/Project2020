<template>
  <div>
    <SideBar />
    <!-- Temporary REMOVE LATER -->
    <h1>Adicionar Docente</h1>
    <router-link :to="{ name: 'Aprovar' }">Aprovar</router-link> |
    <router-link :to="{ name: 'Utilizadores' }">Utilizadores</router-link> |
    <router-link :to="{ name: 'Inscricoes' }">Inscrições</router-link> |
    <router-link :to="{ name: 'AdicionarDocentes' }"
      >Adicionar Docente</router-link
    >
    |
    <router-link :to="{ name: 'Prazos' }">Prazos</router-link>

    <div>
      <!-- FIXME:Probaly remove later with CSS -->
      <br>
      <br>
      <!-- TODO: prevent.default the when everything is working -->
      <form>
        <label for="professores"></label>
        <select name="professores" id="professoresID">
          <option value="" disabled selected>Selecione o docente</option>
          <!-- TODO: Make this work with Vue store  -->
          <!-- For now the register is not ready yet to make that  -->
          <!-- The idea is to have a getter that can filter every user that isn't a professor neither a member of an outside group -->
          <option value="">Teste</option>
        </select>
        <div>
          <br>
          <input type="submit" value="Adicionar o docente" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
