<template>
  <div>
    <h1>Hello vietnames</h1>
    <div @click="handleDivClick">
      <button @click.stop="handleButtonClick">Click Me</button>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

function handleDivClick() {
  console.log("parent");
  //   message.value = 'Div clicked!';
}

function handleButtonClick() {
  console.log("child");
  //   message.value = 'Button clicked!';
}
</script>