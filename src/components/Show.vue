<template>
  <div
    class="
      show-container
      w-screen
      min-h-screen
      flex flex-wrap
      content-center
      bg-red-200
      box-border
      max-w-full
    "
  >
    <form class="mx-auto">
      <input
        type="url"
        name="display"
        id="diaplay"
        v-model.lazy="displaySrc"
        @change="check"
      />
    </form>
    <div>
      <component
        :is="displayTag"
        :src="displaySrc"
        class="
          w-full
          h-full
          image
          mx-auto
          min-w-md
          border border-blue-600
          box-border
        "
        :autoplay="autoplay"
        :loop="loop"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { h, onBeforeMount, onMounted } from "@vue/runtime-core";
import { render } from "@vue/runtime-dom";

const displaySrc = ref(null);
const displayTag = ref("img");
const autoplay = ref(false);
const loop = ref(false);

function check() {
  // if (displaySrc.value.includes("mp4")) {
  //   displayTag.value = "video";
  //   autoplay.value = true;
  //   loop.value = true;
  // } else {
  //   displayTag.value = "img";
  //   autoplay.value = false;
  //   loop.value = false;
  // }
  console.log("HEllo");
  return () => h("h1", {}, "hello");
}

onMounted(() => h("div", {}, "Hello World"));
</script>

<style scoped>
.image {
  background-color: black;
}
</style>
