<template>
  <div>
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
div {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
div h2 {
  background-color: orange;
  text-align: center;
}
</style>