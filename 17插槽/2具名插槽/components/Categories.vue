<template>
  <div class="com">
    <h2>{{ title }}</h2>
    <slot name="center">123</slot>
    <slot name="footer">123</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
.com {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
div h2 {
  background-color: orange;
  text-align: center;
}
</style>