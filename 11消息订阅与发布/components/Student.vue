<template>
   <div class="small">
        <h4 >学生姓名：{{name}}</h4>
        <h4>学生年龄：{{age}}</h4>
       <button @click='pulishName'>点我发布消息</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
            return{
                name:'Yee',
                age:18
            }
        },
        methods: {
            //发布消息
            pulishName(){
                pubsub.publish('Hello',this.name)
            }
        },

       
        
}
</script>

<style scoped>
.small{
    background-color: pink;
}
</style>