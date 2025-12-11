<script setup>

import {router} from "../../router/index.js";
import {useRoute} from "vue-router";

const route = useRoute()
const items = [
  {
    text: 'User', href: '', icon:"mdi-account-group", child: [
      {text: 'List', href: '/users'},
      {text: 'New', href: '/user/new'},
    ]
  }
]
</script>

<template>
  <v-list class="pe-3">
    <template v-for="(item,index) of items">
      <v-list-group v-if="item.child" :value="item.text">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              :title="item.text"
              :key="index"
              :prepend-icon="item.icon"
          ></v-list-item>
        </template>

        <v-list-item v-if="item.child"
                     v-for="(subItem, i) in item.child"
                     :key="index + '_' + i"
                     :title="subItem.text"
                     link
                     @click="router.push(subItem.href)"
                     prepend-icon="mdi-circle-medium"
                     :class="{
    active: route.fullPath===subItem.href
  }"
        ></v-list-item>
      </v-list-group>
      <v-list-item v-else
                   :key="index"
                   :title="item.text"
                   link
                   @click="router.push(item.href)"
                   :class="{
    active: route.fullPath===item.href
  }"
      ></v-list-item>
    </template>
  </v-list>
</template>

<style scoped>
.v-list-item{
  border-bottom-right-radius: 25px!important;
  border-top-right-radius: 25px!important;
}
.active {
  background-color: rgb(var(--v-theme-primary));
  color: white;
}
.v-list-group__items .v-list-item{
  padding-inline-start:15px !important;
}
</style>