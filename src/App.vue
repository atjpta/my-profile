<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="">
    <div>
      <router-view :key="route.path" v-slot="{ Component }">
        <transition name="bounce">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

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
