<!-- eslint-disable max-len -->
<template>
<div class="flex justify-center text-secondary">
      <div class="flex justify-center w-[90rem] p-2 rounded-md bg-gray-200 drop-shadow-md">
          <div class="w-full p-5 text-left">
            <h1 class="mb-2 text-5xl font-medium text-center">Add TV</h1>
              <div class="bg-primary" v-if="isSuccess">
                <h1 class="m-2 text-lg text-center text-white">TV added successfully</h1>
              </div>
              <div class="bg-quaternary" v-if="isFail">
                <h1 class="m-2 text-lg text-center text-white">An error occurred: TV not added</h1>
              </div>
                <div class="flex flex-row justify-evenly">
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="name" class="text-sm font-medium">TV Name:<br>
                        <input v-model="name" type="text" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" required placeholder="TV Name">
                        </label>
                    </div>
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="group-team" class="text-sm font-medium">Group/Team:<br>
                            <select id="group-team" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" required placeholder="Group/Team">
                                <option selected disabled>Choose a Team</option>
                                <option>No Team</option>
                                <option>Omen Gaming</option>
                                <option>AldiStrijders</option>
                                <option>Groepje 6</option>
                            </select>
                        </label>
                    </div>
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="ipaddress" class="text-sm font-medium">Ip adress:<br>
                        <input v-model="ipaddress" type="text" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" required placeholder="Ip adress">
                        </label>
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-2">
                        <button v-on:click="addTv" class="w-40 p-2 font-medium text-center border-2 rounded-md border-secondary bg-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-enable max-len -->

<script>
import axios from 'axios';

export default {
  name: 'AddTvForm',
  props: {
    msg: String,
  },
  data() {
    return {
      name: '',
      ipaddress: '',
      isSuccess: false,
      isFail: false,
    };
  },
  methods: {
    addTv() {
      axios.post('http://localhost:3000/api/tv/', {
        name: this.name,
        ipaddress: this.ipaddress,
      })
        .then((response) => {
          console.log(response.status);
          this.isSuccess = true;
        })
        .catch((error) => {
          console.log(error);
          this.isFail = true;
        });
    },
  },
};
</script>
