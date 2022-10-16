<template>
   <div>
        <h4 @click="showName">学校名称：{{name}}</h4>
        <h4>地址：{{adress}}</h4>
    </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'Student',
    data(){
            return{
                name:'Cuit',
                adress:'双流'
            }
        },
        mixins:[mixin]
}
</script>

<style>

</style>