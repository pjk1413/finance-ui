<template>
  <div>
    <div v-show="!display()">
      <div class="flex-container">
        <div class="center">
          <label for="username" class="dark courier">Username</label><br />
          <input
            type="text"
            class="input-box chivo"
            id="username"
            v-model="username"
          /><br />

          <label for="password" class="dark courier">Password</label><br />
          <input
            type="password"
            class="input-box chivo"
            id="password"
            v-model="password"
          /><br />

          <button v-on:click="login" class="btn courier">Sign In</button>
        </div>
      </div>
    </div>
    <div v-show="display()">
      <ScheduleBox />
    </div>
  </div>
</template>

<script>
import ScheduleBox from "../components/ScheduleBox.vue";
import axios from 'axios';

export default {
  components: { ScheduleBox },
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    display: function () {
      const auth = parseInt(sessionStorage.getItem("auth"));
      if (auth > 99 && auth < 99999) {
        return true;
      } else {
        return false;
      }
    },
    login: function() {
      axios.post('http://192.168.1.57:5000/auth/login', {
        username: this.username,
        password: this.password
      }).then((response) => {

        if (parseInt(response.data['token']) > 99) {
          sessionStorage.setItem('auth', response.data['token'])
          this.$forceUpdate()
        } else {
          alert('Incorrect username or password')
        }
      }, (error) => {
        console.log(error)
      })
    }
  },
};
</script>

<style>
.w50 {
  width: 20% !important;
}

.upper-space {
  padding-top: 40px;
}
</style>