<template>
   <div class="small">
        <h4 >学校名称：{{name}}</h4>
        <h4>地址：{{adress}}</h4>
        <button @click='sendSchoolName'>点我传递名称</button>
       
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
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }        
        },
      
}
</script>

<style scoped>
.small{
    background-color: skyblue;
}
</style>>