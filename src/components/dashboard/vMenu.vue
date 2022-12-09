<template>
  <div class="dropdown dropdown-righ">
    <transition name="bounce">
      <div 
      >
        <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box m-5" >
          <div class="">
            <router-link class="" to="/">
              <div class="bg-base-200">
                <div class="avatar flex justify-center">
                <div class="w-32 h-32 rounded-full">
                  <img src="../../../public/image/meo.jpg" />
                </div>
              </div>
              <p class="mt-3 px-2 text-center font-semibold text-2xl">
                Cao Đức An
              </p>
              <p class="text-center font-mono">a full stack developer</p>
              </div>
            </router-link>
            
          </div>
          <div class="divider"></div>
          <ul class="menu w-64 p-2 rounded-box">
            <div v-for="i in data" :key="i.title">
              <li class="menu-title text-base btn btn-ghost text-start">
                <router-link class="text-base" :to="`/${i.url}`">
                  <i class="mr-10" :class="i.icon"></i> {{ i.title }}
                </router-link>
              </li>

              <div class="divider"></div>
            </div>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="bounce">
        <label tabindex="0" 
          class="
            btn btn-primary btn-outline
            indicator-item indicator-top indicator-end
            mx-5 mt-5
          "
        >
          <i class="fa-solid fa-bars"></i>
        </label>
    </transition>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const hidenMenu = ref(false);

const router = useRouter();
const route = useRoute();
const data = ref([
  {
    title: "about",
    url: "about",
    icon: "fa-solid fa-user",
  },
  {
    title: "skills",
    url: "skills",
    icon: "fa-solid fa-laptop-code",
  },
 {
    title: "myproject",
    url: "project",
    icon: "fa-solid fa-laptop-code",
  },

]);

const open = ref("Home");
const link = route.fullPath;
let url = link.substring(11, link.length);
let mark = false;

data.value.forEach((e) => {
  if (e.url == url) {
    mark = true;
    open.value = e.title;
    return;
  }
  if (mark) {
    return;
  }
});
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
  100% {
    transform: scale(1);
  }
}
.router-link-exact-active {
  color: rgb(255, 255, 255);
  background-color: rgba(87, 13, 248);
  font-weight: 700;
}
</style>
