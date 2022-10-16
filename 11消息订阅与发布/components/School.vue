<template>
   <div class="small">
        <h4 >学校名称：{{name}}</h4>
        <h4>地址：{{adress}}</h4>

    </div>
</template>

<script>
import pubsub, { PubSub } from 'pubsub-js'
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
        //订阅消息
       this.pubid= pubsub.subscribe('Hello',(msgName,val)=>{
            console.log('消息名：',msgName);
            console.log('收到的消息：',val);
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubid)
    },
}
</script>

<style scoped>
.small{
    background-color: skyblue;
}
</style>>