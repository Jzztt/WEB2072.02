<script setup>
import { ref } from 'vue'

const name = ref('Nguyen Van A')
const handleChange = () => {
  name.value = 'Nguyen Van B'
}
const inputValue = ref('')
const className = ref('active')
</script>

<template>
  <div>
    <p>Name : {{ name }}</p>
    <button @click="handleChange">Change</button>
    <p>input : {{ inputValue }}</p>
    <input type="text" v-model="inputValue" />
    <p v-bind:class="className">Avtive</p>
    <!-- <p class="active">Avtive</p> -->
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
