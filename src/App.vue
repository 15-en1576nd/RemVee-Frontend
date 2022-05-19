<template>
<div>
<link rel="stylesheet" href="/css/">
<!-- eslint-disable max-len -->
  <div class="flex flex-row items-center p-2 bg-emerald-600">
    <div class="flex w-1/4">
        <h1 class="text-xl font-semibold">Remvee</h1>
    </div>
    <div class="flex flex-row justify-end float-right w-3/4 text-right text-gray-700">
        <router-link class="w-1/12 mx-2 font-semibold text-center bg-white border-2 border-gray-700 rounded-md" to="/">Home</router-link>
        <router-link class="w-1/12 mx-2 font-semibold text-center bg-white border-2 border-gray-700 rounded-md" to="/about">About</router-link>
    </div>
  </div>
  <router-view/>
<!-- eslint-enable max-len -->
</div>
</template>

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
