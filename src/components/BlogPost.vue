

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const first = ref("John");
const last = ref("Doe");
defineProps(["title", "name"]);
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <h5>{{ name }}</h5>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <h1>Blog post {{ first }} {{ last }}</h1>
  </div>
</template>

/*
 setup : tức là không cần phải export default 

 1. Less boilderplate
 2.Cleaner structure
 3. Automatic context

*/
