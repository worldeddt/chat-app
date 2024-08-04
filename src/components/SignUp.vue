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
  ).then(response => {
    if (response.status == 200) {
      alert("저장 성공");
      router.push("/");
      return;
    }

    alert("저장 실패");
  }).catch(e => {
    alert("저장 실패");
  })
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
</template>
<style scoped lang="scss">
.signup-container {
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

  .input-group {
    margin-bottom: 15px;
    width: 100%;
    max-width: 400px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    select {
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