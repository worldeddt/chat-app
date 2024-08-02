<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";
const username = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");



const login = () => {
  errorMessage.value = "";

  console.log('로그인 시도:', { username: username.value, password: password.value });

  AuthService.login(username.value, password.value)
      .then((response) => {
        (window as any).$router.push('/');
      })
      .catch(() => {
        errorMessage.value = 'Invalid username or password';
      })
}
</script>

<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
  <div>
    <p>{{username}}</p>
    <p>{{password}}</p>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #3b5998, #8b9dc3);
  color: #fff;

  h1 {
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 15px;
    width: 100%;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #2a4887;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1a3767;
    }
  }
}
</style>