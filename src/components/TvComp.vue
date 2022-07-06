<!-- eslint-disable -->
<template>
  <div>
    <div v-for="item in list" :key='item'>
      <div class="my-2 p-3 w-full border-[3px] flex-row flex rounded-md border-primary bg-tertiary items-center">
        <div class="w-1/7">
          <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-2/3 h-2/3" viewBox="0 0 77.883 63.722">
                <path id="Icon_material-tv" data-name="Icon material-tv" d="M72.3,4.5H8.58A7.1,7.1,0,0,0,1.5,11.58V54.062a7.1,7.1,0,0,0,7.08,7.08h17.7v7.08H54.6v-7.08H72.3a7.071,7.071,0,0,0,7.045-7.08l.035-42.482A7.1,7.1,0,0,0,72.3,4.5Zm0,49.562H8.58V11.58H72.3Z" transform="translate(-1.5 -4.5)" fill="#34495e"/>
              </svg>
          </div>
        </div>
        <div class="flex flex-row items-center w-4/5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 ml-5" viewBox="0 0 41.087 54.783">
            <path id="Icon_awesome-id-badge" data-name="Icon awesome-id-badge" d="M35.951,0H5.136A5.137,5.137,0,0,0,0,5.136V49.647a5.137,5.137,0,0,0,5.136,5.136H35.951a5.137,5.137,0,0,0,5.136-5.136V5.136A5.137,5.137,0,0,0,35.951,0ZM15.408,3.424H25.68a1.712,1.712,0,0,1,0,3.424H15.408a1.712,1.712,0,1,1,0-3.424Zm5.136,13.7A6.848,6.848,0,1,1,13.7,23.968,6.854,6.854,0,0,1,20.544,17.12ZM32.528,42.457a2.244,2.244,0,0,1-2.4,2.054H10.957a2.244,2.244,0,0,1-2.4-2.054V40.4c0-3.4,3.221-6.163,7.19-6.163h.535a11.021,11.021,0,0,0,8.517,0h.535c3.97,0,7.19,2.761,7.19,6.163Z" fill="#34495e"/>
          </svg>
          <h1 class="mx-2 text-2xl font-medium">{{ item.name }}</h1>
        </div>
        <div class="flex justify-end w-1/5 items-right">
          <button v-on:click="toggleTv(item.ipaddress)">
            <svg xmlns="http://www.w3.org/2000/svg" class="justify-end w-20 h-20 p-4 rounded-full bg-primary" viewBox="0 0 32.25 32.771"><path id="Icon_awesome-power-off" data-name="Icon awesome-power-off" d="M26.051,3.518a16.123,16.123,0,1,1-18.739.007,1.565,1.565,0,0,1,2.276.5l1.027,1.827a1.56,1.56,0,0,1-.429,2.016,10.923,10.923,0,1,0,13-.007,1.551,1.551,0,0,1-.423-2.009l1.027-1.827a1.559,1.559,0,0,1,2.263-.507ZM19.289,17.166V1.561A1.557,1.557,0,0,0,17.728,0H15.647a1.557,1.557,0,0,0-1.561,1.561V17.166a1.557,1.557,0,0,0,1.561,1.561h2.081A1.557,1.557,0,0,0,19.289,17.166Z" transform="translate(-0.562)" fill="#34495e"/></svg>
          </button>
        </div>
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
  methods: {
    async toggleTv(ip) {
      const TvIp = ip;
      const body = { command: 'TvPower', ipaddress: TvIp };
      const headers = { 'Content-Type': 'application/json' };
      await axios.post('http://localhost:3000/api/tv/command', body, headers)
        .then((response) => {
          this.response = response.data;
          console.log(this.getStatusTv(TvIp));
        }).catch((error) => {
          console.log(error);
        });
    },
    async getStatusTv(ip) {
      const TvIp = ip;
      const body = { ipaddress: TvIp, method: 'getPowerStatus' };
      const headers = { 'Content-Type': 'application/json' };
      await axios.post('http://localhost:3000/api/tv/status', body, headers)
        .then((response) => {
          this.response = response.result.status;
        }).catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    const result = await axios.get('http://localhost:3000/api/tv');
    console.warn(result);
    // convert the result to json
    this.list = result.data.list;
  },
};
</script>
