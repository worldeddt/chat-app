<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";
import {useRouter} from "vue-router";
const username = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");

const router = useRouter();



const login = () => {
  errorMessage.value = "";

  console.log('로그인 시도:', { username: username.value, password: password.value });

  AuthService.login(username.value, password.value)
      .then((response) => {
        console.log(response);
        if (response) {
          alert("로그인 성공");
          router.push('/rooms');
        }
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
  background-color: #f5f5f5;
  color: #007aff;

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #007aff;
  }

  .session-expired {
    color: #ff6b6b;
    margin-bottom: 15px;
  }

  .input-group {
    margin-bottom: 15px;
    width: 100%;
    max-width: 400px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #007aff;
      border-radius: 5px;
      font-size: 16px;
    }
  }

  button {
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007aff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005bb5;
    }
  }
}
</style>