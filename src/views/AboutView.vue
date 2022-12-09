<template>
  <div class="m-5">
    <div class="text-center text-6xl mb-5 uppercase">about me</div>
    <div class="sm:flex justify-between sm:w-4/5 mx-auto ">
      <!-- trái -->
      <div class="m-auto">
        <img
          class="w-60 h-60 mx-auto rounded-2xl ring ring-primary "
          src="../../public/image/avatar.jpg"
          alt=""
        />
      </div>
      <!-- giữa -->
      <div class="text-center my-5 p-5 rounded-2xl ring ring-primary ">
        <div class="text-4xl mb-3">SUMMARY</div>
        <ul style="list-style-type: circle" class="text-left pl-5">
          <li>I am a final year student.</li>
          <li>I am currently majoring in Information Technology.</li>
          <li>my goal is to become a full stack developer.</li>
        </ul>
        <a
          href="../../public/CV_Cao_Duc_An_Fullstack_Developer.pdf"
          class="btn btn-primary btn-outline mt-5"
        >
          <i class="fa-solid fa-download mr-1"></i>
          my cv
        </a>
      </div>

      <!-- phải -->
      <div class="m-5 p-5 mx-auto rounded-2xl ring ring-primary">
        <div class="text-4xl mb-5">CONTACT INFO</div>
        <div class="sm:flex-col">
          <div class="sm:text-left">
            <div class=" cursor-move btn no-animation btn-ghost ">
            <i class="fa-solid fa-location-dot mr-3"></i>
            ninh kieu, can tho, viet nam
          </div>
          </div>
          <div class="sm:text-left">
            <div class=" cursor-move btn no-animation btn-ghost ">
            <i class="fa-solid fa-phone mr-3"></i>
            +84 342622915
          </div>
          </div>
          <div class="sm:text-left">
            <div class=" cursor-move btn no-animation btn-ghost ">
            <i class="fa-solid fa-envelope mr-3"></i>
            caoducan351@gmail.com
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>