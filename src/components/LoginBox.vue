<template>
  <div class="flex-container">
    <div class="center">
      <label for="username" class="dark courier">Username</label><br/>
      <input type="text" class="input-box chivo" id="username" v-model="username"><br/>
      
      <label for="password" class="dark courier">Password</label><br/>
      <input type="password" class="input-box chivo" id="password" v-model="password"><br/>
      
      <a v-on:click="login" class="btn courier" href="/home" >Sign In</a>
    </div>
  </div> 
</template>


// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
<script>
import axios from 'axios';
import baseUrl from '../assets/data/data/finnUrl'

export default {
  name: 'LoginbBox',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      axios.post('/auth/login', {
        username: this.username,
        password: this.password
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error)
      })

      if(this.user == this.username && this.pass == this.password) {
        sessionStorage.setItem("auth", 'true')
      } else {
        sessionStorage.setItem("auth", "")
      }
    }
  }
}
</script>




<style scoped>
.btn {
  margin-top: 10px;
  background-color: #50B2C0; /* Green */
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 80%;
  transition-duration: .5s;
}

.btn:hover {
  transition-duration: .5s;
  background-color:  #FAAA8D;
}

.btn:focus {
  outline: none;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.input-box {
  margin: 5px;
  padding: 5px;
  border: 2px solid  #023c40;
  border-radius: 1px;
  font-size: 15px;
  transition-duration: .5s;
}

.input-box:focus {
  border: 2px solid  #50B2C0;
  background-color: #ffe7df;
  transition-duration: .5s;
  outline: none;
}

.center {
  margin: 0;
  padding: 40px;
  border: 5px solid #50B2C0;
}
</style>