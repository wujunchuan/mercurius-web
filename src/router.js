import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Live from "./views/Live.vue";
import About from "./views/About.vue";
// 异步模块
const Demo = resolve => {
  import("./views/Demo.vue").then(module => {
    resolve(module);
  });
};
// import Demo from "./views/Demo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "live",
      component: Live
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo
    }
  ]
});
