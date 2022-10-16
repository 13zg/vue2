<template>
  <ul class="todo-main">
    <transition-group name="hello">
      <Item v-for="todo in todos" :key="todo.id" :obj="todo" />
    </transition-group>
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "List",

  components: {
    Item,
  },
  props: ["todos"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
@keyframes test1 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.hello-enter-active {
  animation: test1 0.4s linear;
}
.hello-leave-active {
  animation: test1 0.4s linear reverse;
}
</style>