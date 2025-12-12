<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
import NavContent from "./components/layout/NavContent.vue";
import AppBarContent from "./components/layout/AppBarContent.vue";
import {AuthService} from "./stores/AuthService.js";
import {storeToRefs} from "pinia";

const drawer = ref(true)

const authService = AuthService()
const {isAuthenticated} = storeToRefs(authService)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer class="bg-grey-lighten-4" v-model="drawer" border="0" v-if="isAuthenticated">
      <NavContent></NavContent>
    </v-navigation-drawer>

    <v-app-bar class="bg-grey-lighten-4 pe-3" elevation="0" v-if="isAuthenticated">
      <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <AppBarContent></AppBarContent>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <RouterView/>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
