<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="obj.done"
          @change="handleCheck(obj.id)"
        />
        <!-- 不建议通过props修改父组件的值 -->
        <!-- <input type="checkbox" v-model="obj.done" /> -->
        <input
          type="text"
          ref="inputfocus"
          :value="obj.name"
          v-show="obj.isEdit"
          @blur="loseBlur(obj, $event)"
        />
        <span v-show="!obj.isEdit">{{ obj.name }}</span>
      </label>
      <button class="btn btn-danger" @click="deleteObj(obj.id)">删除</button>
      <button class="btn btn-edit" @click="Edit(obj)" v-show="!obj.isEdit">
        编辑
      </button>
    </li>
  </div>
</template>
<script>
export default {
  name: "Item",
  // 利用prop接收外部数据
  props: ["obj"],
  methods: {
    //获取勾选id
    handleCheck(id) {
      //触发事件总线
      this.$bus.$emit("selectOne", id);
    },
    //删除功能
    deleteObj(id) {
      if (confirm("确认删除吗？")) this.$bus.$emit("deleteOne", id);
    },
    //点击进入编辑,实现切换
    Edit(todo) {
      if (todo.hasOwnProperty("isEdit")) todo.isEdit = true;
      //如果为第一次，则创建属性
      else {
        this.$set(todo, "isEdit", true);
      }
      //使input框自动获取焦点
      this.$nextTick(function () {
        this.$refs.inputfocus.focus();
      });
      /*  //也可以设置成不给延迟的定时器
      setTimeout(()=>{
        this.$refs.inputfocus.focus();
      },) */
    },
    //实现编辑功能
    loseBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("不能为空");
      //触发编辑事件
      this.$bus.$emit("edit", todo.id, e.target.value);
    },
  },
};
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
  margin-left: 5px;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: rgb(216, 212, 212);
}
li:hover button {
  display: block;
}
</style>
