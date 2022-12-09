<template>
  <div class="sm:mx-auto sm:w-3/5 m-5 p-5 space-y-5 text-white text-center rounded-2xl bg-gradient-to-r from-green-400 to-blue-500">
    <div class=" text-5xl">
     Cao Duc An
    </div>
    <div class="">
     A FULL STACK DEVELOPER
    </div>
    <div class="flex justify-center space-x-5">
        <div v-for="i in data" :key="i.icon">
          <a :href="i.url" class="btn btn-primary btn-outline btn-circle">
            <i class="text-2xl" :class="i.icon"></i>
          </a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = [
  {
    icon: 'fa-brands fa-facebook',
    url: 'https://www.facebook.com/atjpta',
  },
  {
    icon: 'fa-brands fa-github',
    url: 'https://github.com/atjpta',
  },
]
</script>

<style>

</style>