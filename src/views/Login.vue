<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input
      id="email"
      v-model="email"
      type="email"
    >
    <br><br>
    <label for="password">パスワード：</label>
    <input
      id="password"
      v-model="password"
      type="password"
    >
    <br><br>
    <button @click="login">
      送信
    </button>
  </div>
</template>

<script>
import axios from '../axios-auth';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(){
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyAm6_g7BdU9ncrEl50is9JhtZ1sSQP5IoU', 
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then(response => {
        console.log(response);
      });
      this.email = "";
      this.password = "";
    }
  }
};
</script>

