<template>
  <div class="categories">
    <Category title="美食">
      <img src="" alt="美食" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
    </Category>
  </div>
</template>
<script>
import Category from "./components/Categories.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      games: ["王者", "鳄鱼", "割绳子", "哈利波特"],
    };
  },
};
</script>

<style>
.categories {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>