<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";

const username = ref<string>("");
const password = ref<string>("");
const userType = ref<string>("");
const tel = ref<string>("")


const signUp = () => {
  const usernameValue = username.value;
  const passwordValue = password.value;
  const userTypeValue = userType.value;
  const telValue = tel.value;
  AuthService.signUp(
      {
        username : usernameValue,
        password : passwordValue,
        userType : userTypeValue,
        tel : telValue
      }
  )
}



</script>

<template>
  <div class="signup-container">
    <h1>가입</h1>
    <form @submit.prevent="signUp">
      <div class="input-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="input-group">
        <label for="tel">전화번호</label>
        <input type="tel" id="tel" v-model="tel" required />
      </div>
      <div class="input-group">
        <label for="userType">사용자 타입</label>
        <select id="userType" v-model="userType" required>
          <option value="HOST" selected>호스트</option>
          <option value="GUEST">게스트</option>
        </select>
      </div>
      <button type="submit">가입</button>
    </form>
  </div>
  <p>
    {{username}}
    {{password}}
    {{userType}}
    {{tel}}
  </p>
</template>
<style scoped lang="scss">
.signup-container {
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

    input,
    select {
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