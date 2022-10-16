<template>
   <div>
        <h4 >学校名称：{{name | mySlice}}</h4>
        <h4>地址：{{adress}}</h4>
        <input type="text" v-fbind='msg'>
    </div>
</template>

<script>

export default {
    name:'Student',
    data(){
            return{
                name:'Cui2022',
                adress:'双流',
                msg:'请输入'
            }
        },
      
}
</script>

<style>

</style>