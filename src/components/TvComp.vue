<!-- eslint-disable max-len -->
<template>
  <div>
    <div v-for="item in list" :key='item'>
      <div class="my-2 p-3 w-full border-[3px] flex-row flex rounded-md border-primary bg-tertiary items-center">
        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2/3 h-2/3" viewBox="0 0 77.883 63.722">
              <path id="Icon_material-tv" data-name="Icon material-tv" d="M72.3,4.5H8.58A7.1,7.1,0,0,0,1.5,11.58V54.062a7.1,7.1,0,0,0,7.08,7.08h17.7v7.08H54.6v-7.08H72.3a7.071,7.071,0,0,0,7.045-7.08l.035-42.482A7.1,7.1,0,0,0,72.3,4.5Zm0,49.562H8.58V11.58H72.3Z" transform="translate(-1.5 -4.5)" fill="#34495e"/>
            </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 ml-5" viewBox="0 0 41.087 54.783">
          <path id="Icon_awesome-id-badge" data-name="Icon awesome-id-badge" d="M35.951,0H5.136A5.137,5.137,0,0,0,0,5.136V49.647a5.137,5.137,0,0,0,5.136,5.136H35.951a5.137,5.137,0,0,0,5.136-5.136V5.136A5.137,5.137,0,0,0,35.951,0ZM15.408,3.424H25.68a1.712,1.712,0,0,1,0,3.424H15.408a1.712,1.712,0,1,1,0-3.424Zm5.136,13.7A6.848,6.848,0,1,1,13.7,23.968,6.854,6.854,0,0,1,20.544,17.12ZM32.528,42.457a2.244,2.244,0,0,1-2.4,2.054H10.957a2.244,2.244,0,0,1-2.4-2.054V40.4c0-3.4,3.221-6.163,7.19-6.163h.535a11.021,11.021,0,0,0,8.517,0h.535c3.97,0,7.19,2.761,7.19,6.163Z" fill="#34495e"/>
        </svg>
        <h1 class="mx-2 text-2xl font-medium">{{ item.name }}</h1>
      </div>
    </div>
  </div>
</template>
<!-- eslint-enable max-len -->
<script>
import axios from 'axios';

export default {
  name: 'TvComp',
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    const result = await axios.get('http://localhost:3000/api/tv');
    console.warn(result);
    // convert the result to json
    this.list = result.data.list;
  },
};
</script>
