
<template>
<main class="m-auto text-gray-900">
<div class="form-signin">
  <div class="flex flex-col place-items-center">
    <p class="text-5xl text-center mt-64 font-semibold">관리자 시스템</p>
    <div class="card grid max-w-xl grid-cols-1 gap-4 content-center w-full mt-6 px-6">
      <div class="field grid">
        <label class="text-left text-xl font-semibold">ID</label>
        <InputText
          class="flex items-center justify-center shadow-lg rounded-lg"
          id="id"
          type="text"
          placeholder="아이디를 입력하세요"
        />
      </div>
      <div class="field grid">
        <label class="text-left text-xl font-semibold">PASSWORD</label>
        <InputText
          class="flex items-center justify-center shadow-lg rounded-lg"
          id="pwd"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div class="field grid">
        <label class="text-left text-xl font-semibold">OTP</label>
        <InputText
          class="flex items-center justify-center shadow-lg rounded-lg"
          id="password"
          type="password"
          placeholder="OTP번호를 입력하세요"
        />
      </div>
      <div class="field grid">
        <Button
          class="flex items-center justify-center shadow-lg rounded-lg text-xl"
          label="Login"
          @click="login"
        />
      </div>
    </div>
  </div>
  </div>
</main>
</template>

<script>
import { CheckOnLogin } from "@/common/CheckAuth";
export default {
  setup(){
    const {
      login
    } = CheckOnLogin();
    return{
      login
    }
  }
};
</script>

<style scoped>
.form-signin {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: auto;
}

.main{
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;}

</style>