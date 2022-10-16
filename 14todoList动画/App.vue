<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h3>我的待办</h3>
      <MyHeader @addObj="addtodo" />
      <List :todos="todos" />
      <MyFooter :todos="todos" @isSelect="isSelect" @deleteAll="deleteAll" />
    </div>
  </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    List,
    MyFooter,
  },
  data() {
    return {
      //防止初始化时，本地存储为null，从而报错
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加待办事项
    addtodo(obj) {
      this.todos.unshift(obj);
    },
    //设置勾选
    Handle(id) {
      this.todos.forEach((val) => {
        if (val.id === id) val.done = !val.done;
      });
    },
    //删除一个
    Deletetodo(id) {
      this.todos = this.todos.filter((val) => val.id !== id);
    },
    //footer全选和取消全选
    isSelect(done) {
      this.todos.forEach((val) => {
        val.done = done;
      });
    },
    //清除所有完成
    deleteAll() {
      this.todos = this.todos.filter((val) => !val.done);
    },
    edit(id, newname) {
      this.todos.forEach((val) => {
        if (id === val.id) val.name = newname;
      });
    },
  },
  mounted() {
    //为总线绑定事件
    this.$bus.$on("selectOne", this.Handle);
    this.$bus.$on("deleteOne", this.Deletetodo);
    this.$bus.$on("edit", this.edit);
  },
  //组件销毁前解绑
  beforeDestroy() {
    this.$bus.$off("selectOne");
    this.$bus.$off("deleteOne");
    this.$bus.$off("edit");
  },
  watch: {
    todos: {
      //深度监视，能监视对象中属性的变化
      deep: true,
      handler(val) {
        localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(36, 176, 231);
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.todo-wrap h3 {
  width: 100px;
  margin: 10px auto;
  font-weight: 400;
  font-family: SimSun;
}
</style>