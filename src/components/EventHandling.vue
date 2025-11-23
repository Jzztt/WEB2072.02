<template>
  <div>
    <h2>Event Handling Component</h2>
    <button @click="handleIncrement">Increment</button>
    <button v-on:click="handleIncrement">Increment</button>
    <!-- inline handler -->
    <button @click="count++">Increment</button>
    <!--  method handler -->
    <button @click="handleIncrement(2)">Increment</button>
    <button
      @keyup.enter="console.log('Key Up')"
      @keydown.enter="console.log('key down')"
      @click="console.log('click')"
    >
      Key Up
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const handleIncrement = (param) => {
  count.value = countvalue + param
  console.log('Count incremented to:', count.value)
}
</script>

<style scoped></style>
