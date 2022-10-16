<template>
  <div>
    <h3>{{msg}}</h3>
   
    <Student />
    <hr>
  
    <School />
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
}
</script>

<style>

</style>