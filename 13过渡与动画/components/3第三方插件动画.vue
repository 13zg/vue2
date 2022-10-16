<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      name="hello"
      appear
      class="nimate__animated animate__bounce"
      enter-active-class="animate__animated animate__swing"
      leave-active-class="animate__animated animate__backOutUp"
    >
      <h2 v-show="isShow">测试一</h2>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Student",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: purple;
}
</style>>