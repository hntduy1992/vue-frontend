<script setup>

</script>

<template>
  <v-menu >
    <template v-slot:activator="{ props }">
     <v-badge content="10"  class="mr-5">
       <v-btn color="warning" variant="tonal" icon="mdi-bell-outline" v-bind="props" ></v-btn>
     </v-badge>
    </template>

    <v-list>

    </v-list>
  </v-menu>
</template>

<style scoped>

</style>