<template>
  <div>
    <h1>Conditional Rendering</h1>
    <p v-show="isLogin">Bạn đã đăng nhập 2</p>
    <p v-if="isLogin">Bạn đã đăng nhập</p>
    <!-- <p v-else>Bạn chưa đăng nhập</p> -->

    <p v-if="score > 4">Bạn đã qua môn</p>
    <p v-else>Bạn đã trượt môn</p>
    <form action="" @submit.prevent="handleLogin">
      <div>
        <label for="username">User</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="user.passwwod" />
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// ref có thể nhận vào bất kì kiểu dữ liệu nào
const isLogin = ref(false)
// reactive chỉ nhận  object và array
const score = ref(5)
const user = ref({
  username: '',
  passwwod: '',
})

const handleLogin = () => {
  if (user.value.username === 'admin@gmail.com' && user.value.passwwod === '12355678') {
    isLogin.value = true
  }
}

// viết cho thầy 1 hàm check userName = "admin@gmail.com" và password ="12355678"
// thì sửa  isLogin thành true, còn nếu ko thì f
</script>

<style scoped></style>
