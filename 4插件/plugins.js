export default {
  install(Vue) {
    //定义全局过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });
    //全局定义自定义指令
    Vue.directive("fbind", {
      //元素与指令绑定时调用
      bind(element, binding) {
        element.value = binding.value;
      },
      //元素插入页面时
      inserted(element, binding) {
        element.focus();
      },
      //模板被重新解析时
      update(element, binding) {
        element.value = binding.value;
      },
    });
    //定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });
  },
};
