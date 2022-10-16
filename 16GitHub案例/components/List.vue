<template>
  <div class="row">
    <!-- 页面数据展示 -->
    <div class="card" v-for="p in info.user" :key="p.login">
      <a :href="p.html_url" target="_blank">
        <img :src="p.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ p.login }}</p>
    </div>
    <!-- 第一次进入时 -->
    <h2 v-show="info.isFirst">Welcome to visit</h2>
    <!-- 页面加载时 -->
    <h2 v-show="info.isLoading">Loading...</h2>
    <!-- 请求失败 -->
    <h2 v-show="info.errmsg">{{ info.errmsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errmsg: "",
        user: [],
      },
    };
  },
  mounted() {
    // 订阅事件总线
    this.$bus.$on("userData", this.getUser);
  },
  methods: {
    getUser(obj) {
      //es6替换语法
      this.info = { ...this.info, ...obj };
    },
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>