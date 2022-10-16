
<template>
    <div class='bg'>
        <h4>学校名称：{{name}}</h4>
        <h4>学校地址：{{adress}}</h4>
    </div>
</template>

<script>
// 暴露接口
    export default {
        name:'School',
        data(){
            return{
                name:'CUIT',
                adress:'双流'
            }
        }
}
</script>

<style>
.bg{
    background-color: skyblue;
}
</style>