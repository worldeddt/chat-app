<script setup lang="ts">
import AuthService from "@/services/AuthService";
import {ref} from "vue";

const username = ref<string>("");
const password = ref<string>("");
const userType = ref<string>("");

AuthService.login()


</script>

<template>
  <div style="display: block">
    <div>
      <select id="userType">
        <optgroup label="userTypeGroup">
          <option value="GUEST" selected>
            guest
          </option>
          <option value="HOST">
            host
          </option>
        </optgroup>
      </select>
    </div>
    <div>
      <label for="username">Username</label>
      <input type="text" id="id" v-model="username" required />
    </div>
    <div>
      <label for="password">password</label>
      <input type="text" id="id" v-model="password" required />
    </div>
  </div>
  <div>
    <button id="signUpButton"> 가입
    </button>
  </div>
</template>

<style scoped>

</style>