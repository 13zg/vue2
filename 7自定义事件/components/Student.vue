<template>
   <div class="small">
        <h4 >学生姓名：{{name}}</h4>
        <h4>学生年龄：{{age}}</h4>
        <button @click='sendStudentName'>点我传递姓名</button>
        <button @click='unbind'>点我解绑自定义事件</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
       
            return{
                name:'Yee',
                age:18
            }
        },
        methods: {
            sendStudentName(){
                // 触发绑定自定义事件
                this.$emit('send',this.name,666,777,888)
                // this.$emit('demo')
            },
            unbind(){
                // 解绑一个
                this.$off('send')
                //解绑所有
                // this.$off()
                //解绑多个
                // this.$off(['send','demo'])
            }
        },
        
}
</script>

<style scoped>
.small{
    background-color: pink;
}
</style>