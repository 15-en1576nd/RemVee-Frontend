<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <ApiData />
</template>

<script>
import ApiData from '@/components/ApiData.vue';

export default {
  name: 'AboutView',
  mounted() {
    document.title = 'RemVee - About';
  },
  components: {
    ApiData,
  },
};
</script>
