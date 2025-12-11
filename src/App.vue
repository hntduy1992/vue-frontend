<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
import NavContent from "./components/layout/NavContent.vue";
import AppBarContent from "./components/layout/AppBarContent.vue";

const drawer = ref(true)
</script>

<template>
  <v-app id="inspire" class="bg-color">
    <v-navigation-drawer v-model="drawer" class="bg-transparent" border="0">
      <NavContent></NavContent>
    </v-navigation-drawer>

    <v-app-bar class="bg-transparent" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <AppBarContent></AppBarContent>
    </v-app-bar>

    <v-main class="bg-transparent">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo"/>
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
        </a>
      </div>
      <HelloWorld msg="Vite + Vue"/>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-color {
  background-color: #f4f5fb;
}
</style>
