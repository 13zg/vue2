<template>
  <div>
    <test1 />
    <hr />
    <test2 />
    <hr />
    <test3 />
  </div>
</template>
<script>
import test1 from "./components/1动画.vue";
import test2 from "./components/2过渡.vue";
import test3 from "./components/3第三方插件动画.vue";

export default {
  name: "App",
  components: {
    test1,
    test2,
    test3,
  },
};
</script>

<style>
</style>