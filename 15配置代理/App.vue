<template>
  <div>
    <button @click="getS">获取学生信息</button>
    <button @click="getC">获取汽车信息</button>
  </div>
</template>
<script>
//引入axios
import axios from "axios";
export default {
  name: "App",
  methods: {
    getS() {
      axios
        .get("http://localhost:8080/a1/students")
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.message, "请求失败");
        });
    },
    getC() {
      axios
        .get("http://localhost:8080/a2/cars")
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.message, "请求失败");
        });
    },
  },
};
</script>

<style>
</style>