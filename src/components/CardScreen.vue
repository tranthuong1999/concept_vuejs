

<template>
  <div>
    <h1>Card Screen checking {{initTitle}}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  computed: {
    initTitle() {
      return this.title;
    },
  },
  mounted() {
    console.log("checking", this.title);
  },
});
</script>
