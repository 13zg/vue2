<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="getData">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getData() {
      //第一次加载
      this.$bus.$emit("userData", {
        isFirst: false,
        isLoading: true,
        errmsg: "",
        user: [],
      });
      //   用es6语法传递参数;也可以用+
      axios
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then((response) => {
          //触发总线事件
          this.$bus.$emit("userData", {
            isFirst: false,
            isLoading: false,
            errmsg: "",
            user: response.data.items,
          });
        })
        .catch((err) => {
          this.$bus.$emit("userData", {
            isFirst: false,
            isLoading: false,
            errmsg: err.message,
            user: [],
          });
        });
    },
  },
};
</script>