<script setup>
// enables v-highlight in templates
const vHighlight = {
  mounted: (el) => {
    el.classList.add("is-highlight");
  },
};

const vDemo = {
  mounted: (el, binding) => {
    console.log(binding.value.color); // => "white"
    console.log(binding.value.text);
  },
};
</script>

<template>
  <div>
    <h1>Custom directive</h1>
    <p v-highlight>This sentence is important!</p>
    <div v-demo="{ color: 'white', text: 'hello!' }"></div>
  </div>
</template>

<style scoped>
.is-highlight {
  color: red;
}
</style>