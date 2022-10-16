<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"  v-model="name" @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
     props:['addObj'],
     data() {
      return {
        name:''
      }
     },
    methods: {
      add(){
        // 校验输入框是否为空
        if(!this.name){
           return alert('请输入待办事项')
        }
        // 添加待办项
        const todoObj={id:nanoid(),name:this.name,done:false}
        this.addObj(todoObj)
        //清空输入框
        this.name=''
       
        

      }
    },
   
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>