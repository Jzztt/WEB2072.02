<template>
  <div>
    <div style="background-color: lime">
      <h2>Parent Component</h2>
      <p>This is the parent component.</p>
    </div>
    <ChildrenComponent :message="msg" @notify="handleChildEvent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildrenComponent from './ChildrenComponent.vue'
const msg = ref('Hello')
const name = ref('Vue3')

const handleChildEvent = (msg) => {
  alert(msg)
}
</script>

<style scoped></style>
