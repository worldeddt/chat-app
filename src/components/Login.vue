<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
const id = ref<string>('');
const password = ref<string>('');

const login = () => {
  console.log('로그인 시도:', { id: id.value, password: password.value });
  // 여기에 로그인 로직 추가

  axios.post("http://localhost:8081", {
    "userId":id,
    "password":password
  }).then((response) => {
    console.log(response);
  }).catch((e) => {
    console.error(e);
  })

};
</script>

<template>
  <div>
    <label>아이디 : <input type="text" v-model="id"> </label><br>
    <label>비밀번호 : <input type="text" v-model="password"> </label>
    <button @click="login">로그인</button>
    <p>{{id}}</p>
  </div>
</template>

<style scoped>

</style>