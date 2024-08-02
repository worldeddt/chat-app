<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";

const username = ref<string>("");
const password = ref<string>("");
const userType = ref<string>("");
const tel = ref<string>("")


const signUpRequest = () => {

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
  <div style="display: block">
    <div>
      <select id="userType" v-model="userType">
        <option value="GUEST" selected>
          guest
        </option>
        <option value="HOST">
          host
        </option>
      </select>
    </div>
    <div>
      <label for="username">Username</label>
      <input type="text" v-model="username" required />
    </div>
    <div>
      <label for="password">password</label>
      <input type="text" id="password" v-model="password" required />
    </div>
    <div>
      <label for="tel">tel</label>
      <input type="text" id="tel" v-model="tel" required />
    </div>
  </div>
  <div>
    <button id="signUpButton" @click="signUpRequest()"> 가입
    </button>
  </div>
  <p>
    {{username}}
    {{password}}
    {{userType}}
    {{tel}}
  </p>
</template>

<style scoped>

</style>