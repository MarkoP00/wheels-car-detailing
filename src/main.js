import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router";
import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "./style.css";
const app = createApp(App);

app.use(router);
app.use(Vue3Toastify, {
  position: "top-right",
  autoClose: 3000,
});
app.mount("#app");
