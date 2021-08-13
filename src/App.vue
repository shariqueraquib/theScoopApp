<template>
  <div class="main w-screen" v-for="(scoop, index) in scoops" :key="index">
    <ScoopShow :source="scoop" />
  </div>
</template>

<script setup>
import ScoopShow from "@/components/ScoopShow.vue";
import { ref } from "@vue/reactivity";

const scoops = ref([]);
scoops.value = [
  "https://images.pexels.com/photos/8953396/pexels-photo-8953396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://player.vimeo.com/external/573801226.sd.mp4?s=6e4fefeea2ddf9f61d7ca49f0c36ed0fd349b344&profile_id=165&oauth2_token_id=57447761",
  "https://images.pexels.com/photos/7577754/pexels-photo-7577754.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://player.vimeo.com/external/575344151.sd.mp4?s=4b483c29fa89307431c23be233c8fe45c4a076e9&profile_id=165&oauth2_token_id=57447761",
  "https://images.pexels.com/photos/6969017/pexels-photo-6969017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
</script>

<style scoped>
.main {
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
  height: 400px;
  overflow: scroll;
}
</style>
