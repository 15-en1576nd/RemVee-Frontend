<!-- eslint-disable max-len -->
<template>
  <div class="flex justify-center mb-10 text-secondary">
    <div class="w-11/12">
        <div class="flex flex-row items-center mt-10">
            <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2/3 h-2/3" viewBox="0 0 77.883 63.722">
                    <path id="Icon_material-tv" data-name="Icon material-tv" d="M72.3,4.5H8.58A7.1,7.1,0,0,0,1.5,11.58V54.062a7.1,7.1,0,0,0,7.08,7.08h17.7v7.08H54.6v-7.08H72.3a7.071,7.071,0,0,0,7.045-7.08l.035-42.482A7.1,7.1,0,0,0,72.3,4.5Zm0,49.562H8.58V11.58H72.3Z" transform="translate(-1.5 -4.5)" fill="#34495e"/>
                    <path id="Icon_awesome-cog" data-name="Icon awesome-cog" d="M34.27,22.2l-3-1.73a13.544,13.544,0,0,0,0-4.936l3-1.73a.85.85,0,0,0,.387-.984,17.512,17.512,0,0,0-3.846-6.652A.846.846,0,0,0,29.77,6l-3,1.73A13.27,13.27,0,0,0,22.5,5.266V1.814a.842.842,0,0,0-.661-.823,17.676,17.676,0,0,0-7.678,0,.842.842,0,0,0-.661.823V5.273A13.688,13.688,0,0,0,9.225,7.741L6.237,6.012A.835.835,0,0,0,5.2,6.173,17.407,17.407,0,0,0,1.35,12.825a.841.841,0,0,0,.387.984l3,1.73a13.544,13.544,0,0,0,0,4.936l-3,1.73a.85.85,0,0,0-.387.984A17.512,17.512,0,0,0,5.2,29.841.846.846,0,0,0,6.237,30l3-1.73a13.27,13.27,0,0,0,4.275,2.468V34.2a.842.842,0,0,0,.661.823,17.676,17.676,0,0,0,7.678,0,.842.842,0,0,0,.661-.823V30.741a13.688,13.688,0,0,0,4.275-2.468l3,1.73a.835.835,0,0,0,1.041-.162,17.407,17.407,0,0,0,3.846-6.652.868.868,0,0,0-.394-.991ZM18,23.625A5.625,5.625,0,1,1,23.625,18,5.632,5.632,0,0,1,18,23.625Z" transform="translate(21.293 10.854)" fill="#34495e"/>
                </svg>
            </div>
            <h1 class="ml-5 text-3xl font-semibold">Manage Televisions</h1>
        </div>
      <div class="flex flex-col">
        <AddTvForm class="mt-10" />
        <TvItemComp class="flex justify-center"/>
      </div>
    </div>
  </div>
</template>
<!-- eslint-enable max-len -->

<script>
import AddTvForm from '@/components/AddTvForm.vue';
import TvItemComp from '@/components/Admin/TvItemComp.vue';

export default {
  name: 'AdminDashboardView',
  mounted() {
    document.title = 'RemVee - Admin Dashboard';
  },
  components: {
    AddTvForm,
    TvItemComp,
  },
};
</script>
