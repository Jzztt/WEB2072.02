<template>
  <div style="background-color: blue">
    <h2>children Component</h2>
    {{ message }}

    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
defineProps({
  message: String,
})
const emit = defineEmits(['notify'])
const handleClick = () => {
  // alert('Button in Children Component clicked!')
  emit('notify', 'Button in Children Component clicked! aaaaa')
}
</script>

<style lang="scss" scoped></style>
