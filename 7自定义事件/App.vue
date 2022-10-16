<template>
  <div>
    <h3>{{msg}}</h3>
    <!--通过自定义事件：触发事件从而给父组件传值（第一种） -->
      <!-- 为student组件实例对象添加了一个自定义事件 -->
    <!-- <Student @send='getStudentName'/> -->
    <!--通过自定义事件：触发事件从而给父组件传值（第二种） -->
    <Student ref='student'/>
    <hr>
    <!-- 通过props传递函数给子组件调用传参 -->
    <School :getSchoolName='getSchoolName'/>
  </div>
</template>
<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{
      School,
      Student
    },
    data() {
      return {
        msg:'你好，Vue'
      }
    },
    methods: {
      getSchoolName(name){
        console.log('学校名称：',name);
      },
      getStudentName(name,...param){ 
        console.log('学生姓名：',name,...param);
      },
      // demo(){
      //   console.log('第二个自定义绑定事件');
      // }

    },
    mounted() {
      //利用ref绑定事件比直接绑定要灵活
      // 绑定自定义事件
      this.$refs.student.$on('send',this.getStudentName)
      // this.$refs.student.$on('demo',this.demo)
      //只能触发一次
      //  this.$refs.student.$once('send',this.getStudentName)
    },
}
</script>

<style>

</style>