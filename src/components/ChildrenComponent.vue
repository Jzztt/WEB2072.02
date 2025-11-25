<template>
  <div style="background-color: blue">
    <h2>children Component</h2>
    <slot name="header"></slot>
    {{ message }}

    <!-- Bước 1: Khi sự kiện click được kích hoạt => handleClick được chạy -->
    <button @click="handleClick">Click</button>
    <slot name="footer"></slot>
    {{ noti }}
  </div>
</template>

<script setup>
import { inject } from 'vue'

// định nghĩa biến nhận giá triwj từ cha
defineProps({
  message: String,
})
// định nghĩa sự kiện nhận vào từ cha
const emit = defineEmits(['notify'])
const handleClick = () => {
  // alert('Button in Children Component clicked!')
  // emit dùng kích hoạt sự kiện
  emit('notify', 'Button in Children Component clicked! aaaaa')
}
// inject lấy giá trị có key là noti được cung cấp từ provide nếu k có lấy tham số thứ 2
const noti = inject('noti', 'No notification')
</script>

<style lang="scss" scoped></style>
