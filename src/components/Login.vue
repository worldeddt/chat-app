<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";
import axios from "axios";
const id = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");

const handleLogin = () => {
  errorMessage.value = "";

  console.log('로그인 시도:', { id: id.value, password: password.value });

  AuthService.login(id.value, password.value)
      .then(() => {
        (window as any).$router.push('/');
      })
      .catch(() => {
        errorMessage.value = 'Invalid username or password';
      })

  // axios.post("http://localhost:8081", {
  //   "userId":id,
  //   "password":password
  // }).then((response) => {
  //   console.log(response);
  // }).catch((e) => {
  //   console.error(e);
  // })
}
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input type="text" id="id" v-model="id" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
  <div>
    <p>{{id}}</p>
    <p>{{password}}</p>
  </div>
</template>

<style scoped>

</style>