<template>
   <div class="small">
        <h4 >学校名称：{{name}}</h4>
        <h4>地址：{{adress}}</h4>

    </div>
</template>

<script>

export default {
    name:'Student',
    props:['getSchoolName'],
    data(){
            return{
                name:'Cui2022',
                adress:'双流',
                msg:'请输入'
            }
        },
        mounted() {
            this.$bus.$on('hello',(val)=>{
                console.log('收到的值为：',val);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
}
</script>

<style scoped>
.small{
    background-color: skyblue;
}
</style>>