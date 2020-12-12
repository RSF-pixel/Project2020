<template>
    <div>
        <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>
        <b-sidebar id="sidebar" title="paper" shadow>
            <div class="px-3 py-2">
                <router-link :to="{ name: 'Propostas' }">Propostas</router-link> |
                <router-link :to="{ name: 'Gestao' }">Gestão</router-link> |
                <router-link :to="{ name: 'Agenda' }">Agenda</router-link> |
                <router-link :to="{ name: 'Perfil' }">Perfil</router-link>
            </div>
        </b-sidebar>
    </div>
</template>

<style>
    #sidebar {
    padding: 30px;
    }

    #sidebar a {
    font-weight: bold;
    color: #2c3e50;
    }

    #sidebar a.router-link-exact-active {
    color: #42b983;
    }
</style>