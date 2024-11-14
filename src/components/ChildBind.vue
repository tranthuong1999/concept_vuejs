<script setup>
import {defineModel} from "vue";

const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>


<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
</template>