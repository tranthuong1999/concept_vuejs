

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["title", "name"]);
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <h5>{{ name }}</h5>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>