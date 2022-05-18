<template>
  <div>
    <h1>Data</h1>
    <p>{{ list }}</p>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ApiData',
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    const result = await axios.get('http://localhost:3000/api');
    console.warn(result);
    // convert the result to json
    this.list = result.data.data;
  },
};
</script>
