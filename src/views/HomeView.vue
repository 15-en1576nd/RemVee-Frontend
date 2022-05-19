<template>
  <div class="text-secondary">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  mounted() {
    document.title = 'RemVee - Home';
  },
  components: {
    HelloWorld,
  },
};
</script>
