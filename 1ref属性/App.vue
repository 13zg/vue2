<template>
  <div>
    <h3 v-text="msg" ref="title"></h3>
    <button @click='showh3' ref="btn">点我输出msg</button>
    <School ref="shl"/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    },
    data() {
      return {
        msg:'你好,vue'
      }
    },
    methods:{
      showh3(){
        console.log(this.$refs.title);//真实dom元素
        console.log(this.$refs.btn);//真实dom元素
        console.log(this.$refs.shl);//vuecomponent实例对象
      }
    }
}
</script>

<style>

</style>