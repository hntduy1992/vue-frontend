<script setup>

import {router} from "../../router/index.js";

const items = [
  {
    text: 'User', href: '', child: [
      {text: 'List', href: '/users'},
      {text: 'New', href: '/user/new'},
    ]
  }
]
</script>

<template>
  <v-list>
    <template v-for="(item,index) of items">
      <v-list-group v-if="item.child" :value="item.text" >
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              :title="item.text"
              :key="index"
              class="custom-list-group"
          ></v-list-item>
        </template>

        <v-list-item v-if="item.child"
                     v-for="(subItem, i) in item.child"
                     :key="index + '_' + i"
                     :title="subItem.text"
                     link
                     @click="router.push(subItem.href)"
        ></v-list-item>
      </v-list-group>
      <v-list-item v-else
                   :key="index"
                   :title="item.text"
                   link
                   @click="router.push(item.href)"
      ></v-list-item>
    </template>
  </v-list>
</template>

<style scoped>
.custom-list-group:hover  .v-list-item{
  background-color: red;
  //border-top-right-radius: 30px;
  //border-bottom-right-radius: 30px;
}
</style>