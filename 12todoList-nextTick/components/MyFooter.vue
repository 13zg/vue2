<template>
<!-- 没有待办项则隐藏 -->
  <div class="todo-footer" v-if='all'>
        <label>
          <input type="checkbox" v-model='isAll'/>
        </label>
        <span>
          <span>已完成{{finish}}</span> / 全部{{all}}
        </span>
        <button class="btn btn-danger" @click='clearDone'>清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
      finish(){
       /* return this.todos.reduce((pre,current)=>{
              return pre+(current.done?1:0);
            
        },0) */
        return this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)
      },
      all(){
        return  this.todos.length
    },
     isAll:{
      get(){
        return this.finish===this.all&&this.all>0
      },
      set(val){
         return this.$emit('isSelect',val)
      }
     }
    },
    methods: {
      clearDone(){
        // if(confirm('确认清楚已完成任务吗？')) 
        this.$emit('deleteAll')
      }
    },
    

}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>