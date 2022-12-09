<template>
  <div class="">
    <div>
      <vMenuVue class=" "></vMenuVue>
    </div>
    <div v-if="route.name != 'profile'"> 
      <router-view v-slot="{ Component }">
      <transition name="bounce">
        <component :is="Component" />
      </transition>
    </router-view>
    </div>
    <div v-else  >
      <home/>
    </div>
  </div>
</template>

<script setup>
import vMenuVue from '../components/dashboard/vMenu.vue';
import home from '../views/HomeView.vue'
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
/* .bounce-leave-active {
  animation: bounce-in 0.5s reverse;
} */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  /* 25% {
    transform: scale(0.25);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(0.75);
  } */
  100% {
    transform: scale(1);
  }
}
</style>