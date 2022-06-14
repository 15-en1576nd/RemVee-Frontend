<!-- eslint-disable max-len -->
<template>
<div class="flex justify-center text-secondary">
      <div class="flex justify-center w-[90rem] p-2 rounded-md bg-gray-200 drop-shadow-md">
          <div class="w-full p-5 text-left">
            <h1 class="mb-2 text-5xl font-medium text-center">Add TV</h1>
            <form action="" method="POST">
                <div class="flex flex-row justify-evenly">
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="username" class="text-sm font-medium">TV Name:<br>
                        <input type="text" id="username" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" placeholder="TV Name">
                        </label>
                    </div>
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="password" class="text-sm font-medium">Group/Team:<br>
                            <select id="group-team" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" placeholder="Group/Team">
                                <option selected disabled>Choose a Team</option>
                                <option>No Team</option>
                                <option>Omen Gaming</option>
                                <option>AldiStrijders</option>
                                <option>Groepje 6</option>
                            </select>
                        </label>
                    </div>
                    <div class="flex flex-col mx-1 mb-3 sm:mx-5">
                        <label for="password" class="text-sm font-medium">Ip adress:<br>
                        <input type="password" id="password" class="p-2 mt-[2px] font-semibold border-2 border-secondary rounded-md w-96" placeholder="Ip adress">
                        </label>
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-2">
                        <a href="#" class="w-40 p-2 font-medium text-center border-2 rounded-md border-secondary bg-primary">Save</a>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>
<!-- eslint-enable max-len -->

<script>
export default {
  name: 'AddTvForm',
  props: {
    msg: String,
  },
};
</script>
