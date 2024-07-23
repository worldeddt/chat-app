<script setup lang="ts">
defineProps<{
  id: string,
  password: string
}>()
</script>

<template>
  <div>
    <label>아이디 : <input type="text"> </label><br>
    <label>비밀번호 : <input type="text"> </label>
    <button>로그인</button>
  </div>
</template>

<style scoped>

</style>