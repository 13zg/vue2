<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>
<script>
//引入axios
import axios from "axios";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
</style>