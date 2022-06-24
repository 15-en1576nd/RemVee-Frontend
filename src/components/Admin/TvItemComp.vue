<!-- eslint-disable max-len -->
<template>
    <div class="flex justify-center mt-10 text-secondary">
        <div class="flex flex-row flex-wrap items-center justify-between py-3 rounded-md min-w-[25rem] max-w-[90rem] mx-[2rem] bg-gray-200">
        <div v-for="item in list" :key='item' class="flex flex-col mx-5 my-2">
            <div class="flex flex-col justify-center w-[24rem] h-60 p-2 bg-gray-200 rounded-md drop-shadow-md border-2 border-primary">
                <div class="flex flex-row items-center">
                    <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2/3 h-2/3" viewBox="0 0 77.883 63.722">
                            <path id="Icon_material-tv" data-name="Icon material-tv" d="M72.3,4.5H8.58A7.1,7.1,0,0,0,1.5,11.58V54.062a7.1,7.1,0,0,0,7.08,7.08h17.7v7.08H54.6v-7.08H72.3a7.071,7.071,0,0,0,7.045-7.08l.035-42.482A7.1,7.1,0,0,0,72.3,4.5Zm0,49.562H8.58V11.58H72.3Z" transform="translate(-1.5 -4.5)" fill="#34495e"/>
                        </svg>
                    </div>
                    <h1 class="mx-2 text-2xl font-medium">{{ item.name }}</h1>
                </div>
                    <div class="flex flex-col mb-2 justify-evenly">
                        <div class="text-gray-700 md:flex md:items-center">
                            <div class="mb-1 md:mb-0">
                                <p class="m-0 text-sm font-medium">TV Name:</p>
                            </div>
                            <div class="text-right md:flex-grow">
                                <input v-show="item.isShow" :value="item.name" class="p-[2px] mt-[2px] font-semibold bg-transparent border-2 focus-visible:outline-none border-b-secondary rounded-md w-70" type="text" placeholder="TV Name" aria-labelledby="TV Name">
                                <p v-show="!item.isShow" class="text-lg text-right mt-[2px] p-[2px]">{{item.name}}</p>
                            </div>
                        </div>
                        <div class="text-gray-700 md:flex md:items-center">
                            <div class="mb-1 md:mb-0">
                                <p class="m-0 text-sm font-medium">Group/Team:</p>
                            </div>
                            <div class="text-right md:flex-grow">
                                <select v-show="item.isShow" id="group-team" class="p-[2px] mt-[2px] font-semibold bg-transparent border-2 focus-visible:outline-none border-b-secondary rounded-md w-70" placeholder="Group/Team" aria-labelledby="Group or Team">
                                    <option>No team</option>
                                    <option>Omen Gaming</option>
                                    <option>AldiStrijders</option>
                                    <option>Groepje 6</option>
                                </select>
                                <p v-show="!item.isShow" class="text-lg text-right mt-[2px] p-[2px]">No Team</p>
                            </div>
                        </div>
                        <div class="text-gray-700 md:flex md:items-center">
                            <div class="mb-1 md:mb-0">
                                <p class="m-0 text-sm font-medium">Ip adress:</p>
                            </div>
                            <div class="text-right md:flex-grow">
                                <input v-show="item.isShow" class="p-[2px] mt-[2px] font-semibold bg-transparent border-2 focus-visible:outline-none border-b-secondary rounded-md w-70" :value="item.ipaddress" type="text" placeholder="Ipadress" aria-labelledby="Ipadress">
                                <p v-show="!item.isShow" class="text-lg text-right mt-[2px] p-[2px]">{{item.ipaddress}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-center">
                        <div v-show="item.isShow" class="px-2 py-2 mx-1 font-bold text-white rounded-full bg-primary hover:drop-shadow-lg hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 27">
                                <path id="Icon_material-save" data-name="Icon material-save" d="M25.5,4.5H7.5a3,3,0,0,0-3,3v21a3,3,0,0,0,3,3h21a3.009,3.009,0,0,0,3-3v-18ZM18,28.5A4.5,4.5,0,1,1,22.5,24,4.494,4.494,0,0,1,18,28.5Zm4.5-15H7.5v-6h15Z" transform="translate(-4.5 -4.5)" fill="#34495e"/>
                            </svg>
                        </div>
                        <button @click="item.isShow = !item.isShow" v-show="item.isShow" type="reset" class="px-2 py-2 mx-1 font-bold text-white rounded-full bg-quaternary hover:drop-shadow-lg hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.119" height="20.119" viewBox="0 0 29.119 29.119">
                                <path id="Icon_material-cancel" data-name="Icon material-cancel" d="M17.56,3a14.56,14.56,0,1,0,14.56,14.56A14.546,14.546,0,0,0,17.56,3Zm7.28,19.786-2.053,2.053L17.56,19.612l-5.227,5.227L10.28,22.786l5.227-5.227L10.28,12.333l2.053-2.053,5.227,5.227,5.227-5.227,2.053,2.053L19.612,17.56Z" transform="translate(-3 -3)" fill="#34495e"/>
                            </svg>
                        </button>
                    </div>
                <div class="flex flex-row justify-center">
                    <button @click="item.isShow = !item.isShow" v-show="!item.isShow" type="reset" class="px-2 py-2 mx-1 font-bold text-white rounded-full bg-primary hover:drop-shadow-lg hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.6 26.306">
                            <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M20.689,4.277l4.635,4.635a.5.5,0,0,1,0,.709L14.1,20.845l-4.769.529a1,1,0,0,1-1.1-1.1L8.757,15.5,19.98,4.277A.5.5,0,0,1,20.689,4.277ZM29.014,3.1,26.506.593a2.01,2.01,0,0,0-2.837,0L21.85,2.412a.5.5,0,0,0,0,.709l4.635,4.635a.5.5,0,0,0,.709,0l1.819-1.819a2.01,2.01,0,0,0,0-2.837ZM19.733,17.792v5.231H3.289V6.58H15.1a.632.632,0,0,0,.437-.18L17.59,4.344a.617.617,0,0,0-.437-1.053H2.467A2.467,2.467,0,0,0,0,5.757V23.846a2.467,2.467,0,0,0,2.467,2.467H20.555a2.467,2.467,0,0,0,2.467-2.467V15.737a.618.618,0,0,0-1.053-.437l-2.056,2.056A.632.632,0,0,0,19.733,17.792Z" transform="translate(0 -0.007)" fill="#34495e"/>
                        </svg>
                    </button>
                        <button v-on:click="deleteTv(item.id)" v-show="!item.isShow" class="px-2 py-2 mx-1 font-bold text-white rounded-full bg-quaternary hover:drop-shadow-lg hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23.333 30">
                                <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M9.167,31.167A3.343,3.343,0,0,0,12.5,34.5H25.833a3.343,3.343,0,0,0,3.333-3.333v-20h-20Zm4.1-11.867,2.35-2.35,3.55,3.533L22.7,16.95l2.35,2.35-3.533,3.533,3.533,3.533-2.35,2.35-3.533-3.533-3.533,3.533-2.35-2.35,3.533-3.533ZM25,6.167,23.333,4.5H15L13.333,6.167H7.5V9.5H30.833V6.167Z" transform="translate(-7.5 -4.5)" fill="#34495e"/>
                            </svg>
                        </button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<!-- eslint-enable max-len -->

<script>
import axios from 'axios';

export default {
  name: 'TvItemComp',
  data() {
    return {
      list: [],
      isShow: true,
    };
  },
  async mounted() {
    const result = await axios.get('http://localhost:3000/api/tv');
    // convert the result to json
    this.list = result.data.list;
  },
  methods: {
    deleteTv(id) {
      axios.delete(`http://localhost:3000/api/tv/${id}`, {
      })
        .then((response) => {
          console.log(response.status);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  props: {
    msg: String,
  },
};

</script>
