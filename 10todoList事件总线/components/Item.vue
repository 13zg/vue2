<template>
    <div>
        <li>
            <label>
            <input type="checkbox" :checked='obj.done' @change="handleCheck(obj.id)" />
            <!-- 不建议通过props修改父组件的值 -->
             <!-- <input type="checkbox" v-model="obj.done" /> -->
            <span>{{obj.name}}</span>
            </label>
            <button class="btn btn-danger"  @click="deleteObj(obj.id)">删除</button>
        </li>
    </div>
</template>
<script>
export default {
    name:'Item',
    // 利用prop接收外部数据
    props:['obj'],
    methods: {
      //获取勾选id
      handleCheck(id){
       //触发事件总线
       this.$bus.$emit('selectOne',id)
      },
      //删除功能
      deleteObj(id){
        if(confirm('确认删除吗？'))
          this.$bus.$emit('deleteOne',id)
      }
    },
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
 
}


li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
   background-color: rgb(216, 212, 212);
}
li:hover button{
  display: block;
}

</style>