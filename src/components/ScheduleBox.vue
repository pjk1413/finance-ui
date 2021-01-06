<template>
  <div class="flex-container">
    <div class="center">
      <button
        class="chivo"
        v-on:click="toggle"
        v-bind:class="{ btn_on: is_on, btn_off: is_off }"
      >
        {{ run }}
      </button>
      <button class="btn_add pink-bg">Add</button>
      <br/>
      <input v-model="description" class="w40 input-box chivo" placeholder="description"/>
      <select class="w20 input-box chivo" v-model="selected_time" >
          <option v-for="time in times" :key="time">{{time}}</option>
      </select>
      <select v-model="frequency" class="w40 input-box chivo">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>M-W-F</option>
          <option>T-Th</option>
      </select>
      
      <table class="table chivo">
        <tr class="tb_head">
          <th>Description</th>
          <th>Time</th>
          <th>Frequency</th>
          <th></th>
        </tr>
        <tr v-for="schedule in schedules" :key="schedule.id">
          <td>{{schedule.description}}</td>
          <td>{{schedule.time}}</td>
          <td>{{schedule.frequency}}</td>
          <td>
              <button v-on:click="del(schedule.id)" class="btn_small red-bg chivo">X</button>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../assets/data/data.js'
import {times} from '../assets/data/data.js'

export default {
  name: "ScheduleBox",
  data() {
    return {
      selected_time: '',
      description: '',
      times: times,
      frequency: '',
      schedules: [],
      run: "OFF",
      is_on: false,
      is_off: true,
    };
  },
  created() {
      this.get_data()
      this.status()
  },
  methods: {
    status: function() {
        axios.get(url.base + '/schedule/status').then((response) => {
            console.log(response.data)
        })
    },
    del: function(id) {
        axios.get(url.base + '/schedule/delete/'+id).then((response) => {
            console.log(response.data)
            // return true or something like that if successful
        })
    },
    get_data: function() {
        axios.get(url.base + '/schedule/get').then((response) => {
            this.schedules = response.data.schedules
        })
    },
    toggle: function () {
      (this.is_on = !this.is_on), (this.is_off = !this.is_off);
      if (this.run === "OFF") {
        this.run = "ON";
      } else {
        this.run = "OFF";
      }
    },
  },
};
</script>

<style scoped>
.w40 {
    width: 35%;
}

.w20 {
    width: 20%;
}

.btn_add {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 3px;
    width: 81%;
    transition-duration: .5s;
    border: none;
    color: white;
}

.btn_add:focus {
    outline: none;
}

.btn_add:hover {
    opacity: .5;
    transition-duration: .5s;
}

.table {
    margin-top: 10px;
    width: 100%;
}

.btn_small:hover {
    opacity: .5;
    transition-duration: .5s;
}

.btn_small:focus {
    outline: none;
}

.btn_small {
    border: none;
    color: white;
    transition-duration: .5s;
}

.btn_on {
  margin-top: 10px;
  background-color: #50c082; /* Green */
  border: none;
  color: white;
  padding: 15px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 300px;
  transition-duration: 0.5s;
}

.btn_off {
  margin-top: 10px;
  background-color: #c07450; /* Green */
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 150px;
  transition-duration: 0.5s;
}

.btn:hover {
  transition-duration: 0.5s;
  background-color: #faaa8d;
}

.btn_on:focus {
  outline: none;
}

.btn_off:focus {
  outline: none;
}

.flex-container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
}

.input-box {
  margin: 1px;
  padding: 2px;
  border: 2px solid #023c40;
  border-radius: 1px;
  font-size: 10px;
  transition-duration: 0.5s;
}

.input-box:focus {
  border: 2px solid #50b2c0;
  background-color: #ffe7df;
  transition-duration: 0.5s;
  outline: none;
}

.center {
  margin: 50px;
  padding: 10px;
  border: 5px solid #50b2c0;
  width: 500px;
  height: 400px;
}
</style>