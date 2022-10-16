<template>
  <div class="categories">
    <Category title="美食">
      <img slot="center" src="" alt="美食" />
      <a slot="footer" href="http://www.baidu.com">查看更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <a slot="footer" href="http://www.baidu.com">查看更多</a>
      <a slot="footer" href="http://www.baidu.com">点击查看</a>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
      <template v-slot:footer>
        <div>
          <a href="http://www.baidu.com">查看更多</a>
          <h4>欢迎收看</h4>
        </div>
      </template>
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