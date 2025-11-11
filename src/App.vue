<script setup>
import { reactive, ref } from 'vue'
import { RouterView } from 'vue-router'

// thầy có 1 biến đèn có gía trị ban đầu False
const light = ref(false)
// => light = { value: false }

// viết 1 hàm @click sao cho khi click thì chuyển biến đèn có giá trị từ False sang True
// Nếu đèn có giá trị False thì màn hình hiển thị chữ " Đèn Tắt" và ngược lại
const handleChange = () => {
  light.value = !light.value
}
// reactive
const count = reactive({ state: 0 })
const handleCount = () => {
  count.state += 1
}
</script>

<template>
  <div>
    <p>Header</p>
    <RouterView />
    <p>Footer</p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
