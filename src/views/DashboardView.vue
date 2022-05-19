<!-- eslint-disable max-len -->
<template>
  <div class="flex justify-center text-secondary">
    <div class="w-11/12">
        <div class="flex flex-row items-center mt-10">
            <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-2/3 h-2/3" viewBox="0 0 77.883 63.722">
                <path id="Icon_material-tv" data-name="Icon material-tv" d="M72.3,4.5H8.58A7.1,7.1,0,0,0,1.5,11.58V54.062a7.1,7.1,0,0,0,7.08,7.08h17.7v7.08H54.6v-7.08H72.3a7.071,7.071,0,0,0,7.045-7.08l.035-42.482A7.1,7.1,0,0,0,72.3,4.5Zm0,49.562H8.58V11.58H72.3Z" transform="translate(-1.5 -4.5)" fill="#34495e"/>
              </svg>
            </div>
            <h1 class="ml-5 text-3xl font-semibold">Televisions</h1>
        </div>
      <TvComp class="mt-10" />
      </div>
  </div>
</template>
<!-- eslint-enable max-len -->

<script>
import TvComp from '@/components/TvComp.vue';

export default {
  name: 'DashboardView',
  mounted() {
    document.title = 'RemVee - Dashboard';
  },
  components: {
    TvComp,
  },
};
</script>
