<template>
   <div class="small">
        <h4 >学生姓名：{{name}}</h4>
        <h4>学生年龄：{{age}}</h4>
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
        
}
</script>

<style scoped>
.small{
    background-color: pink;
}
</style>