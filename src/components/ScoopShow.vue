<script>
import { h, onMounted, ref } from "@vue/runtime-core";
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // const source = ref(
    //   "https://images.pexels.com/photos/3076207/pexels-photo-3076207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    // );
    const tag = ref(null);
    onMounted(() => {
      if (props.source.includes("jpeg")) {
        tag.value = "img";
      } else {
        tag.value = "video";
      }
    });
    return () =>
      h(
        "div",
        {
          id: "show-container",
          class: "w-full md:w-2/3 mx-auto justify-center",
        },
        [
          h(`${tag.value}`, {
            src: props.source,
            autoplay: true,
            loop: true,
            controls: true,
            class: "border border-red-600 w-full h-screen",
          }),
        ]
      );
  },
};
</script>

<style scoped>
#show-container {
  scroll-snap-align: start;
  overflow: scroll;
  height: max-content;
}
</style>
