<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <h2 v-show="isShow">测试一</h2>
    </transition>
  </div>
</template>
<script>
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
.h2 {
  background-color: skyblue;
}
/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
.hello-enter-active,
.hello-leave-active {
  transition: all linear 1s;
}
h2 {
  background-color: pink;
}
</style>>