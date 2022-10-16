<template>
  <div>
    <h4>学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ age }}</h4>
    <h4>学生年龄：{{ fixage }}</h4>
    <button @click="updateage">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Yee",
      fixage: this.age,
    };
  },
  methods: {
    updateage() {
      this.age++;
    },
  },
  props: ["age"],
};
</script>

<style>
</style>