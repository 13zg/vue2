<template>
   <div>
        <h4 @click="showName">学生姓名：{{name}}</h4>
        <h4>学生年龄：{{age}}</h4>
    </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'Student',
    data(){
            return{
                name:'Yee',
                age:18
            }
        },
        mixins:[mixin]
        
}
</script>

<style>

</style>