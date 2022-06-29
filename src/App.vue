<template>
<div class="text-secondary">
<link rel="stylesheet" href="/css/">
<!-- eslint-disable max-len -->
  <div class="flex flex-row items-center p-2 bg-primary">
    <div class="flex w-1/4">
        <h1 class="text-xl font-semibold">RemVee</h1>
    </div>
    <div class="flex flex-row justify-end float-right w-3/4 text-right text-secondary">
        <router-link class="w-1/12 mx-2 font-semibold text-center bg-white border-2 rounded-md border-secondary" to="/">Home</router-link>
        <router-link class="w-1/12 mx-2 font-semibold text-center bg-white border-2 rounded-md border-secondary" to="/dashboard">Dashboard</router-link>
    </div>
  </div>
  <router-view/>
<!-- eslint-enable max-len -->
</div>
</template>

<script>
import { publicIpv4 } from 'public-ip';
import axios from 'axios';

export default {
  async mounted() {
    // Get public IPv4 address
    const ip = await publicIpv4();
    console.log(ip);
    console.log('Test');
    axios.post('http://localhost:3000/api/ip', {
      message: ip,
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
