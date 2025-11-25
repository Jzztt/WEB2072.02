<template>
  <div>
    <div style="background-color: lime">
      <h2>Parent Component</h2>
      <p>This is the parent component.</p>
    </div>
    <ChildrenComponent :message="msg" @notify="handleChildEvent">
      <template v-slot:header> Đây là header </template>
      <template v-slot:footer> Đây là Footer </template>
    </ChildrenComponent>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import ChildrenComponent from './ChildrenComponent.vue'
const msg = ref('Hello')
const name = ref('Vue3')

const notification = ref('Parent call children')

provide('notis', notification.value)

const handleChildEvent = (msg) => {
  alert(msg)
}
</script>

<style scoped></style>
