<template>
  <div>
    <Student :age="realAge" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      realAge: 18,
    };
  },
  components: {
    Student,
  },
};
</script>

<style>
</style>