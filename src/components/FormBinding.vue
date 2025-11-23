<template>
  <div>
    <h2>Form Binding</h2>
    <span>Bình luận :</span>
    <span> {{ comment }}</span>
    <div><textarea rows="4" placeholder="Nhập Bình luận" v-model="comment"></textarea></div>
    {{ isChecked }}
    <input type="checkbox" v-model="isChecked" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const comment = ref('')
const isChecked = ref(false)
</script>

<style scoped></style>
